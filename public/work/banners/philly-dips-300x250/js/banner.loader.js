"use strict";Banner.prototype.loader=function(){function n(n,t,e){n.addEventListener?n.addEventListener(t,e,!1):n.attachEvent("on"+t,function(){return e.call(n,window.event)})}var t=this;n(document,"DOMContentLoaded",function(){t.onPolite()}),n(window,"load",function(){t.onVisible()})},Banner.prototype.politeLoad=function(n,t){for(var e=0,o=0;o<n.length;o++)this.loadScript(n[o],function(){++e===n.length&&t&&t()})},Banner.prototype.loadScript=function(n,t){var e=document.createElement("script");e.type="text/javascript",e.readyState?e.onreadystatechange=function(){"loaded"!==e.readyState&&"complete"!==e.readyState||(e.onreadystatechange=null,t())}:e.onload=function(){t()},e.src=n,document.getElementsByTagName("head")[0].appendChild(e)},Banner.prototype.bindEvents=function(){this.banner.addEventListener("click",function(){window.open(window.clickTag)})};