(()=>{"use strict";var e={403:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n,o,s,a,i,l=r(622),c=r(747),u=Object.prototype.toString;function d(e){return void 0!==e}function g(e){return"[object Number]"===u.call(e)}function f(e){return"[object String]"===u.call(e)}function p(e){return JSON.parse(c.readFileSync(e,"utf8"))}function h(e,t){return i&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===t.length?e:e.replace(/\{(\d+)\}/g,(function(e,r){var n=r[0],o=t[n],s=e;return"string"==typeof o?s=o:"number"!=typeof o&&"boolean"!=typeof o&&null!=o||(s=String(o)),s}))}function b(e){return function(t,r){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return g(t)?t>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: "+new Error("").stack):h(e[t],n):f(r)?(console.warn("Message "+r+" didn't get externalized correctly."),h(r,n)):void console.error("Broken localize call found. Stacktrace is\n: "+new Error("").stack)}}function v(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];return h(t,r)}function m(e,t){return s[e]=t,t}function y(e){try{return function(e){var t=p(l.join(e,"nls.metadata.json")),r=Object.create(null);for(var n in t){var o=t[n];r[n]=o.messages}return r}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function S(e,t){var r;if(!0===a.languagePackSupport&&void 0!==a.cacheRoot&&void 0!==a.languagePackId&&void 0!==a.translationsConfigFile&&void 0!==a.translationsConfig)try{r=function(e,t){var r,n,o,s=l.join(a.cacheRoot,e.id+"-"+e.hash+".json"),i=!1,u=!1;try{return r=JSON.parse(c.readFileSync(s,{encoding:"utf8",flag:"r"})),n=s,o=new Date,c.utimes(n,o,o,(function(){})),r}catch(e){if("ENOENT"===e.code)u=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: "+e.message+"."),c.unlink(s,(function(e){e&&console.error("Deleting corrupted bundle "+s+" failed.")})),i=!0}}if(!(r=function(e,t){var r=a.translationsConfig[e.id];if(r){var n=p(r).contents,o=p(l.join(t,"nls.metadata.json")),s=Object.create(null);for(var i in o){var c=o[i],u=n[e.outDir+"/"+i];if(u){for(var d=[],g=0;g<c.keys.length;g++){var h=c.keys[g],b=u[f(h)?h:h.key];void 0===b&&(b=c.messages[g]),d.push(b)}s[i]=d}else s[i]=c.messages}return s}}(e,t))||i)return r;if(u)try{c.writeFileSync(s,JSON.stringify(r),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return r;throw e}return r}(e,t)}catch(e){console.log("Load or create bundle failed ",e)}if(!r){if(a.languagePackSupport)return y(t);var n=function(e){for(var t=a.locale;t;){var r=l.join(e,"nls.bundle."+t+".json");if(c.existsSync(r))return r;var n=t.lastIndexOf("-");t=n>0?t.substring(0,n):void 0}if(void 0===t&&(r=l.join(e,"nls.bundle.json"),c.existsSync(r)))return r}(t);if(n)try{return p(n)}catch(e){console.log("Loading in the box message bundle failed.",e)}r=y(t)}return r}function w(e){if(!e)return v;var t=l.extname(e);if(t&&(e=e.substr(0,e.length-t.length)),a.messageFormat===n.both||a.messageFormat===n.bundle){var r=function(e){for(var t,r=l.dirname(e);t=l.join(r,"nls.metadata.header.json"),!c.existsSync(t);){var n=l.dirname(r);if(n===r){t=void 0;break}r=n}return t}(e);if(r){var o=l.dirname(r),u=s[o];if(void 0===u)try{var g=JSON.parse(c.readFileSync(r,"utf8"));try{var f=S(g,o);u=m(o,f?{header:g,nlsBundle:f}:null)}catch(e){console.error("Failed to load nls bundle",e),u=m(o,null)}}catch(e){console.error("Failed to read header file",e),u=m(o,null)}if(u){var h=e.substr(o.length+1).replace(/\\/g,"/"),y=u.nlsBundle[h];return void 0===y?(console.error("Messages for file "+e+" not found. See console for details."),function(){return"Messages not found."}):b(y)}}}if(a.messageFormat===n.both||a.messageFormat===n.file)try{var w=p(function(e){var t;if(a.cacheLanguageResolution&&t)t=t;else{if(i||!a.locale)t=".nls.json";else for(var r=a.locale;r;){var n=".nls."+r+".json";if(c.existsSync(e+n)){t=n;break}var o=r.lastIndexOf("-");o>0?r=r.substring(0,o):(t=".nls.json",r=null)}a.cacheLanguageResolution&&(t=t)}return e+t}(e));return Array.isArray(w)?b(w):d(w.messages)&&d(w.keys)?b(w.messages):(console.error("String bundle '"+e+"' uses an unsupported format."),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file "+e),function(){return"Failed to load message bundle. See console for details."}}!function(e){e.file="file",e.bundle="bundle",e.both="both"}(n=t.MessageFormat||(t.MessageFormat={})),function(e){e.is=function(e){var t=e;return t&&d(t.key)&&d(t.comment)}}(o||(o={})),function(){if(a={locale:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:n.bundle},f(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG);if(f(e.locale)&&(a.locale=e.locale.toLowerCase()),(!0===(t=e._languagePackSupport)||!1===t)&&(a.languagePackSupport=e._languagePackSupport),f(e._cacheRoot)&&(a.cacheRoot=e._cacheRoot),f(e._languagePackId)&&(a.languagePackId=e._languagePackId),f(e._translationsConfigFile)){a.translationsConfigFile=e._translationsConfigFile;try{a.translationsConfig=p(a.translationsConfigFile)}catch(t){e._corruptedFile&&c.writeFile(e._corruptedFile,"corrupted","utf8",(function(e){console.error(e)}))}}}catch(e){}var t;i="pseudo"===a.locale,s=Object.create(null)}(),t.loadMessageBundle=w,t.config=function(e){return e&&(f(e.locale)&&(a.locale=e.locale.toLowerCase(),s=Object.create(null)),void 0!==e.messageFormat&&(a.messageFormat=e.messageFormat)),i="pseudo"===a.locale,w}},747:e=>{e.exports=require("fs")},622:e=>{e.exports=require("path")},669:e=>{e.exports=require("util")},549:e=>{e.exports=require("vscode")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}var n={};(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=r(549),o=r(669),s=r(403).loadMessageBundle(r(622).join(__dirname,"extension.ts"));class a{constructor(){this._fired=!1}get hasFired(){return this._fired}fire(){this._fired=!0}}class i extends t.Disposable{constructor(e){super((()=>this.internalDispose())),this.session=e,this.disposables=[],e.parentSession?this.trigger=i.start(e.parentSession)?.trigger??new a:this.trigger=new a,this.regexp=new RegExp(e.configuration.serverReadyAction.pattern||"listening on.* (https?://\\S+|[0-9]+)","i")}static start(e){if(e.configuration.serverReadyAction){let t=i.detectors.get(e);return t||(t=new i(e),i.detectors.set(e,t)),t}}static stop(e){let t=i.detectors.get(e);t&&(i.detectors.delete(e),t.dispose())}static rememberShellPid(e,t){let r=i.detectors.get(e);r&&(r.shellPid=t)}static async startListeningTerminalData(){this.terminalDataListener||(this.terminalDataListener=t.window.onDidWriteTerminalData((async e=>{const t=await e.terminal.processId;for(let[,r]of this.detectors)if(r.shellPid===t)return void r.detectPattern(e.data);for(let[,t]of this.detectors)if(t.detectPattern(e.data))return})))}internalDispose(){this.disposables.forEach((e=>e.dispose())),this.disposables=[]}detectPattern(e){if(!this.trigger.hasFired){const t=this.regexp.exec(e);if(t&&t.length>=1)return this.openExternalWithString(this.session,t.length>1?t[1]:""),this.trigger.fire(),this.internalDispose(),!0}return!1}openExternalWithString(e,r){const n=e.configuration.serverReadyAction;let a;if(""===r){const e=n.uriFormat||"";if(e.indexOf("%s")>=0){const r=s(0,null,e);return void t.window.showErrorMessage(r,{modal:!0}).then((e=>{}))}a=e}else{const e=n.uriFormat||(/^[0-9]+$/.test(r)?"http://localhost:%s":"%s");if(2!==e.split("%s").length){const r=s(1,null,e);return void t.window.showErrorMessage(r,{modal:!0}).then((e=>{}))}a=o.format(e,r)}this.openExternalWithUri(e,a)}openExternalWithUri(e,r){const n=e.configuration.serverReadyAction;switch(n.action||"openExternally"){case"openExternally":t.env.openExternal(t.Uri.parse(r));break;case"debugWithChrome":this.debugWithBrowser("pwa-chrome",e,r);break;case"debugWithEdge":this.debugWithBrowser("pwa-msedge",e,r);break;case"startDebugging":t.debug.startDebugging(e.workspaceFolder,n.name||"unspecified")}}debugWithBrowser(e,r,n){return t.debug.startDebugging(r.workspaceFolder,{type:e,name:"Browser Debug",request:"launch",url:n,webRoot:r.configuration.serverReadyAction.webRoot||"${workspaceFolder}"})}}i.detectors=new Map,e.activate=function(e){e.subscriptions.push(t.debug.onDidChangeActiveDebugSession((e=>{e&&e.configuration.serverReadyAction&&i.start(e)&&i.startListeningTerminalData()}))),e.subscriptions.push(t.debug.onDidTerminateDebugSession((e=>{i.stop(e)})));const r=new Set;e.subscriptions.push(t.debug.registerDebugConfigurationProvider("*",{resolveDebugConfigurationWithSubstitutedVariables:(n,o)=>(o.type&&o.serverReadyAction&&(r.has(o.type)||(r.add(o.type),function(e,r){e.subscriptions.push(t.debug.registerDebugAdapterTrackerFactory(r,{createDebugAdapterTracker(e){const t=i.start(e);if(t){let r;return{onDidSendMessage:e=>{if("event"===e.type&&"output"===e.event&&e.body)switch(e.body.category){case"console":case"stderr":case"stdout":e.body.output&&t.detectPattern(e.body.output)}"request"===e.type&&"runInTerminal"===e.command&&e.arguments&&"integrated"===e.arguments.kind&&(r=e.seq)},onWillReceiveMessage:t=>{r&&"response"===t.type&&"runInTerminal"===t.command&&t.body&&r===t.request_seq&&(r=void 0,i.rememberShellPid(e,t.body.shellProcessId))}}}}}))}(e,o.type))),o)}))}})();var o=exports;for(var s in n)o[s]=n[s];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/30d9c6cd9483b2cc586687151bcbcd635f373630/extensions/debug-server-ready/dist/extension.js.map