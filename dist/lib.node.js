!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(global,(function(){return(()=>{"use strict";var e={607:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(815),t)},815:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function u(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}l((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.Transfer=void 0;var i=r(979),a=r(446),u=function(){function e(e){this.rpc_api=e}return e.build_transfer=function(e,t,r,n){return{from_public_key:i.CLPublicKey.fromHex(e),to_public_key:i.CLPublicKey.fromHex(t),amount:a.BigNumber.from(r),fee:a.BigNumber.from(n)}},e.prototype.make_transfer=function(e,t,r,a,u){return n(this,void 0,void 0,(function(){var n,l,s,c,p,f,y,d;return o(this,(function(o){switch(o.label){case 0:return n=new i.DeployUtil.DeployParams(t,e,1,18e5),l=i.DeployUtil.ExecutableDeployItem.newTransfer(a,r,null,u),s=i.DeployUtil.standardPayment(u.toString()),c=i.DeployUtil.makeDeploy(n,l,s),p=i.DeployUtil.deployToJson(c),[4,i.Signer.sign(p,t.toHex(),t.toHex())];case 1:return f=o.sent(),(y=new i.DeployUtil.Approval).signer=f.deploy.approvals[0].signer,y.signature=f.deploy.approvals[0].signature,d=new i.DeployUtil.Deploy(c.hash,c.header,c.payment,c.session,[y]),[4,new i.CasperServiceByJsonRPC(this.rpc_api).deploy(d)];case 2:return[2,o.sent()]}}))}))},e}();t.Transfer=u},446:e=>{e.exports=require("@ethersproject/bignumber")},979:e=>{e.exports=require("casper-js-sdk")}},t={};return function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(607)})()}));