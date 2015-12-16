!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.FacebookLogin=t(require("react")):e.FacebookLogin=t(e.react)}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(5),u=n(a),c=o(3),p=n(c),l=function(e){function t(o){var n=this;r(this,t),e.call(this,o),this.responseApi=function(e){FB.api("/me",function(t){t.accessToken=e.accessToken,n.props.callback(t)})},this.checkLoginState=function(e){e.authResponse?n.responseApi(e.authResponse):n.props.callback&&n.props.callback({status:e.status})},this.click=function(){FB.login(n.checkLoginState,{scope:n.props.scope})}}return i(t,e),s(t,null,[{key:"propTypes",value:{callback:a.PropTypes.func.isRequired,appId:a.PropTypes.string.isRequired,xfbml:a.PropTypes.bool,scope:a.PropTypes.string,textButton:a.PropTypes.string,autoLoad:a.PropTypes.bool,size:a.PropTypes.string},enumerable:!0},{key:"defaultProps",value:{textButton:"Login with Facebook",scope:"public_profile, email, user_birthday",xfbml:!1,size:"medium"},enumerable:!0}]),t.prototype.componentDidMount=function(){var e=this;window.fbAsyncInit=function(){FB.init({appId:e.props.appId,xfbml:e.props.xfbml,version:"v2.3"}),e.props.autoLoad&&FB.getLoginStatus(e.checkLoginState)},function(e,t,o){var n=e.getElementsByTagName(t)[0],r=n,i=n;e.getElementById(o)||(i=e.createElement(t),i.id=o,i.src="//connect.facebook.net/en_US/sdk.js",r.parentNode.insertBefore(i,r))}(document,"script","facebook-jssdk")},t.prototype.render=function(){return u["default"].createElement("div",null,u["default"].createElement("button",{className:this.props.size,onClick:this.click},this.props.textButton),u["default"].createElement("style",{dangerouslySetInnerHTML:{__html:p["default"]}}),u["default"].createElement("div",{id:"fb-root"}))},t}(u["default"].Component);t["default"]=l,e.exports=t["default"]},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var r=o(1),i=n(r);t["default"]=i["default"],e.exports=t["default"]},function(e,t,o){t=e.exports=o(4)(),t.push([e.id,".medium,.metro,.small{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.52083vw + 8px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:2px solid #4c69ba}.small{padding:1.2em 3em}@media (min-width:768px){.small{padding:.9em 2.2em}}.medium{padding:1.2em 3em}@media (min-width:768px){.medium{padding:1.6em 2.4em}}.metro{border-radius:0}",""]),t.locals={small:"small",medium:"medium",metro:"metro"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),e.push(s))}},e}},function(t,o){t.exports=e}])});