import {
    CasperServiceByJsonRPC,
    CLPublicKey, DeployUtil, Signer,
} from 'casper-js-sdk';

import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

export class Transfer {

    rpc_api: string;
    constructor(rpc_api: string) {
        this.rpc_api = rpc_api;
    }

    static build_arguments(from_public_key: string, to_public_key: string, amount: string, fee: string, id: string) {
        return {
            "from_public_key": CLPublicKey.fromHex(from_public_key),
            "to_public_key": CLPublicKey.fromHex(to_public_key),
            "amount": BigNumber.from(amount),
            "fee": BigNumber.from(fee),
            "id": BigNumber.from(id)
        }
    }

    static build_deploy(network_name: string, from: CLPublicKey, to: CLPublicKey, amount: BigNumberish, fee: BigNumberish, id: BigNumberish) {
        const deployParams = new DeployUtil.DeployParams(
            from,
            network_name,
        );
        const session = DeployUtil.ExecutableDeployItem.newTransferWithOptionalTransferId(
            amount,
            to,
            undefined,
            id
        );
        const payment = DeployUtil.standardPayment(fee);
        const deploy = DeployUtil.makeDeploy(deployParams, session, payment);
        return deploy;
    }

    async broadcast_deploy(deploy: DeployUtil.Deploy, approvals: DeployUtil.Approval[]) {
        if (approvals.length > 0) {
            let new_approvals = new DeployUtil.Approval();
            new_approvals.signer = approvals[0].signer;
            new_approvals.signature = approvals[0].signature;
            const message = new DeployUtil.Deploy(
                deploy.hash,
                deploy.header,
                deploy.payment,
                deploy.session,
                [new_approvals]
            );
            let result;
            {
                const deployService = new CasperServiceByJsonRPC(this.rpc_api);
                result = await deployService.deploy(message);
            }
            return result;
        } else {
            throw Error("Approvals invalid");
        }
    }

    async sign_deploy(from_public_key: string, to_public_key: string, deploy: DeployUtil.Deploy): Promise<DeployUtil.Approval[]> {
        const deploy_json = DeployUtil.deployToJson(deploy);
        const signed_message = await Signer.sign(
            deploy_json,
            from_public_key,
            to_public_key,
        );
        return signed_message.deploy.approvals;
    }

    async make_transfer(network_name: string, from_public_key: string, to_public_key: string, amount: string, fee: string, id: string) {
        const builder = Transfer.build_arguments(from_public_key, to_public_key, amount, fee, id);
        const deploy = Transfer.build_deploy(network_name, builder.from_public_key, builder.to_public_key, builder.amount, builder.fee, id);
        const approvals = await this.sign_deploy(from_public_key, to_public_key, deploy);
        const result = await this.broadcast_deploy(deploy, approvals);
        return result;
    }

}