"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var t=v(function(x,a){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),d=require('@stdlib/ndarray-base-offset/dist'),o=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/blas-ext-base-dany/dist').ndarray;function f(e){var r=e[0];return m(s(r,0),o(r),q(r,0),d(r))}a.exports=f
});var y=require("path").join,c=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),j=t(),i,u=c(y(__dirname,"./native.js"));g(u)?i=j:i=u;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
