!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";t.__esModule=!0;var o=n(1),r=n(2),l=n(3),i=n(4),a=n(7),s=new o.username("username","FIRST NAME & SURNAME"),u=new l.default("email","email"),c=new a.studyField("studyField","What field do you study?","Law","Physics","IT technology","No one of above:("),d=new r.comments("comment","Please leave a comment below");document.getElementById("addForm").addEventListener("click",(function(){document.getElementById("getForm").style.height="250px",new i.pushApp(s,u,c,d).renderApp()}))},function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(e,t){this.name=e,this.e=document.createElement("input"),this.e.name=this.name,this.labelHTML=document.createElement("label"),this.labelHTML.innerHTML=t,this.labelHTML.htmlFor=e,this.label=t}return e.prototype.render=function(){return this.e},e.prototype.getValue=function(){return this.e.value},e}();t.username=o},function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(e,t){this.name=e,this.e=document.createElement("textarea"),this.e.name=this.name,this.labelHTML=document.createElement("label"),this.labelHTML.innerHTML=t,this.labelHTML.htmlFor=e,this.label=t}return e.prototype.render=function(){return this.e},e.prototype.getValue=function(){return this.e.value},e}();t.comments=o},function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(e,t){this.name=e,this.e=document.createElement("input"),this.e.name=this.name,this.labelHTML=document.createElement("label"),this.labelHTML.innerHTML=t,this.labelHTML.htmlFor=e,this.label=t}return e.prototype.render=function(){return this.e},e.prototype.getValue=function(){return this.e.value},e}();t.default=o},function(e,t,n){"use strict";t.__esModule=!0;var o=n(5),r=function(){function e(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];this.changeEditMode=function(){console.log("should be edited")},this.form=new o.Form("getForm","answer"),(e=this.form.fields).push.apply(e,n),this.submit=document.getElementById("submit"),this.submit.addEventListener("click",(function(){t.buttons()})),this.saveMe=document.getElementById("saveLocalStorage"),this.saveMe.addEventListener("click",this.setLocalStorage),this.getMe=document.getElementById("getLocalStorage"),this.getMe.addEventListener("click",this.getLocalStorage),this.clearMe=document.getElementById("clearLocalStorage"),this.clearMe.addEventListener("click",this.clearLocalStorage)}return e.prototype.renderApp=function(){this.form.render()},e.prototype.clearLocalStorage=function(){localStorage.clear()},e.prototype.setLocalStorage=function(){var e=document.getElementById("answer"),t=document.getElementById("answerLocal");JSON.stringify(e);localStorage.setItem("storageMe",e.outerHTML+t.innerHTML),console.log(localStorage)},e.prototype.getLocalStorage=function(){for(var e=document.getElementById("answerLocal"),t=0;t<localStorage.length;t++){var n=localStorage.storageMe;e.outerHTML+=n}},e.prototype.buttons=function(){var e=this;this.form.getValue(),this.form.createTable.forEach((function(t){t.deleteCell.addEventListener("click",(function(){return e.deleteAnswer(t.tableID)})),t.editButton.addEventListener("click",(function(){e.editAnswer(t.tableID)}))}))},e.prototype.deleteAnswer=function(e){var t=document.getElementById(e);this.form.elementContent.removeChild(t)},e.prototype.editAnswer=function(e){console.log(e);for(var t=document.getElementsByTagName("td"),n=0;n<t.length;n++)console.log("that should be changed"+t[n]),!1===t[n].isContentEditable?t[n].setAttribute("contenteditable","true"):t[n].setAttribute("contenteditable","false");console.log("hello")},e}();t.pushApp=r},function(e,t,n){"use strict";t.__esModule=!0;var o=n(6),r=function(){function e(e,t){this.tableID=0,this.fields=new Array,this.formElement=document.getElementById(e),this.elementContent=document.getElementById(t),this.createTable=new Array}return e.prototype.render=function(){var e=this;this.fields.forEach((function(t){e.formElement.appendChild(t.labelHTML),e.formElement.appendChild(t.render())}))},e.prototype.getValue=function(){var e=new o.createTable(this.tableID,this.fields);this.tableID++,this.elementContent.appendChild(e.table),this.createTable.push(e)},e}();t.Form=r},function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(e,t){this.fields=t,this.tableID=e;var n=document.createElement("table");n.className="answerTable",n.id=e;var o=document.createElement("button");o.innerHTML="Remove this answer",o.className="delete",this.deleteCell=o;var r=document.createElement("button");r.innerText="Edit answer",r.className="editAnswer",this.editButton=r,this.table=n,this.getTableContent(),n.appendChild(r),n.appendChild(o)}return e.prototype.getTableContent=function(){var e=this;this.fields.forEach((function(t){var n=document.createElement("tr"),o=document.createElement("th"),r=document.createElement("td");o.innerHTML=t.label,r.innerHTML=t.getValue(),n.appendChild(o),n.appendChild(r),e.table.appendChild(n)}))},e}();t.createTable=o},function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(e,t){for(var n=this,o=[],r=2;r<arguments.length;r++)o[r-2]=arguments[r];this.name=e,this.e=document.createElement("select"),o.forEach((function(e){var t=document.createElement("option");t.value=e,t.text=e,n.e.add(t)})),this.e.name=this.name,this.labelHTML=document.createElement("label"),this.labelHTML.innerHTML=t,this.labelHTML.htmlFor=e,this.label=t}return e.prototype.render=function(){return this.e},e.prototype.getValue=function(){return this.e.value},e}();t.studyField=o}]);