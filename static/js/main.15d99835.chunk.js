(this.webpackJsonpconcentration=this.webpackJsonpconcentration||[]).push([[0],{31:function(e,t,a){e.exports=a(51)},36:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(1),c=a.n(r),i=a(26),s=a.n(i),l=(a(36),a(14)),o=a(23);var u=function e(t,a,n){Object(o.a)(this,e),this.val=t,this.hasBeenRevealed=a,this.isTurned=n},m=function(){function e(t,a,n){Object(o.a)(this,e),this.nRows=a,this.nCols=n,this.cards=null===t?this._dealCards(a,n):t,this.finalTime=null}return Object(l.a)(e,[{key:"_dealCards",value:function(e,t){for(var a=e*t,n=[],r=0;r<a/2;r++)n=n.concat([r,r]);n=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}(n);for(var c=[],i=0;i<e;i++){c.push([]);for(var s=0;s<t;s++)c[c.length-1].push(new u(n[i*t+s],!1,!1))}return c}},{key:"reset",value:function(){this.cards.forEach((function(e,t){e.forEach((function(e,t){e.isTurned=!1}))}))}},{key:"countTurned",value:function(){var e=0;return this.cards.forEach((function(t,a){t.forEach((function(t,a){e+=Number(t.isTurned)}))})),e}},{key:"markRevealed",value:function(){if(2===this.countTurned()){var e=[];this.cards.forEach((function(t,a){t.forEach((function(t,a){t.isTurned&&e.push(t)}))})),e[0].val===e[1].val&&(e[0].hasBeenRevealed=!0,e[1].hasBeenRevealed=!0)}}},{key:"checkGameOver",value:function(e){for(var t=0;t<this.nRows;t++)for(var a=0;a<this.nCols;a++)if(!this.cards[t][a].hasBeenRevealed)return!1;return null===this.finalTime&&(this.finalTime=e),!0}}]),e}(),d=function(e){var t=e.dc,a=e.row,n=e.col,r=e.setDC,i=e.backgroundColorIsTurned,s=t.cards[a][n],l=s.hasBeenRevealed,o="",u="#FF6F42";return s.isTurned&&(o=s.val,u=i),c.a.createElement(c.a.Fragment,null," ",!l&&c.a.createElement("button",{className:"cardButton",style:{backgroundColor:"".concat(u)},onClick:function(){r((function(e){var t=Object.assign(Object.create(Object.getPrototypeOf(e)),e);return 2===t.countTurned()&&t.reset(),t.cards[a][n].isTurned||(t.cards[a][n].isTurned=!t.cards[a][n].isTurned),t.markRevealed(),t}))}},o))},f=a(20),h=a(67),v=a(70),p=a(73),E=a(74),b=a(69),g=a(71),N=a(72),C=Object(h.a)({headerCell:{"font-weight":"bold"},table:{height:"90%",width:"90%",margin:"0 auto"}}),T={apiKey:"AIzaSyDTBOhkfQUnZAIlWlkQa1dbf8338RXIhCI",authDomain:"concentration-6830e.firebaseapp.com",databaseURL:"https://concentration-6830e.firebaseio.com",projectId:"concentration-6830e",storageBucket:"concentration-6830e.appspot.com",messagingSenderId:"568314381412",appId:"1:568314381412:web:ca8c364c9a189cf5f6cb71",measurementId:"G-NJLRNG3GVZ"},O=function(e){var t,a=e.nCards,i=e.userName,s=e.finalTime,l=e.nEntriesToDisplay,o=Object(r.useState)(null),u=Object(n.a)(o,2),m=u[0],d=u[1],h=C();if(Object(r.useEffect)((function(){f.apps.length||f.initializeApp(T);var e=f.database().ref("highscoresNew").child(String(a)),t={};t.score=s,t.userName=i,t.timeStamp=(new Date).getTime(),e.push(t),e.once("value").then((function(e){return d(e.val())}))}),[s,a,i]),console.log("RENDER LEADERBOARD"),null===m)return null;(t=Object.keys(m).map((function(e){return[m[e].userName,m[e].score,m[e].timeStamp]}))).sort((function(e,t){return-(t[1]-e[1])}));var O=(t=t.slice(0,l)).map((function(e){var t=Object(n.a)(e,3),a=t[0],r=t[1],c=t[2],i=new Date(c),s=i.getDay(),l=i.getMonth()+1,o=i.getFullYear(),u=(i.getMinutes()<10?"0":"")+i.getMinutes(),m=i.getHours();return{name:a,score:r,time:"".concat(s,"/").concat(l,"/").concat(o," ").concat(m,":").concat(u),timeStamp:c}}));return c.a.createElement(b.a,{id:"table"},c.a.createElement(v.a,{className:h.table},c.a.createElement(g.a,null,c.a.createElement(N.a,null,c.a.createElement(E.a,{className:h.headerCell},"Username"),c.a.createElement(E.a,{className:h.headerCell,align:"right"},"Score"),c.a.createElement(E.a,{className:h.headerCell,align:"right"},"Time"))),c.a.createElement(p.a,null,O.map((function(e){return c.a.createElement(N.a,{key:e.timeStamp},c.a.createElement(E.a,{component:"th",scope:"row"},e.name),c.a.createElement(E.a,{align:"right"},e.score),c.a.createElement(E.a,{align:"right"},e.time))})))))},j=function(e){var t=e.userName,a=e.finalTime,n=e.setTime,r=e.nCards;return n(0),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Congratz ".concat(t,"! Finished in ").concat(a," seconds")),c.a.createElement(O,{nCards:r,userName:t,finalTime:a,nEntriesToDisplay:20}))},w=function(e){var t=e.dc,a=e.setDC,n=e.nRows,i=e.nCols,s=e.userName,l=e.gameInitialized,o=e.setGameInitialized,u=e.time,f=e.setTime,h=n*i;Object(r.useEffect)((function(){var e=setInterval((function(){return f((function(e){return e+1}))}),1e3);return function(){clearInterval(e),f(0)}}),[]),l&&null!==t||(t=new m(null,n,i),a(t),o(!0));for(var v=[],p=0;p<n;p++)for(var E=0;E<i;E++)v.push([t,p,E]);var b=v.map((function(e,t){return c.a.createElement("div",{className:"gridItem",key:t},c.a.createElement(d,{dc:e[0],row:e[1],col:e[2],setDC:a,backgroundColorIsTurned:"#7FE83C"}))}));return c.a.createElement(c.a.Fragment,null,t.checkGameOver(u)?c.a.createElement(j,{userName:s,finalTime:t.finalTime,setTime:f,nCards:h}):c.a.createElement("div",{id:"gridContainer",style:{gridTemplateColumns:"repeat(".concat(i,",1fr"),gridTemplateRows:"repeat(".concat(n,",1fr")}},b))},R=function(e){var t=e.nRows,a=e.setNRows,n=e.nCols,r=e.setNCols,i=e.userName,s=e.setUserName,l=e.setInputFormSubmitted;return c.a.createElement("form",{id:"inputForm",onSubmit:function(e){e.preventDefault(),n*t%2===0&&""!==i?l(!0):alert("Input cards need to be even and username needs to be specified!")}},c.a.createElement("div",null,c.a.createElement("input",{className:"inputField",placeholder:"# rows",type:"text",value:t||"",onChange:function(e){a(Number(e.target.value))}})),c.a.createElement("div",null,c.a.createElement("input",{className:"inputField",placeholder:"# columns",type:"text",value:n||"",onChange:function(e){r(Number(e.target.value))}})),c.a.createElement("div",null,c.a.createElement("input",{className:"inputField",placeholder:"Username",type:"text",value:i,onChange:function(e){s(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("input",{id:"submitButton",type:"submit",value:"Start game"})))},I=function(e){var t=e.setInputFormSubmitted,a=e.setGameInitialized,n=e.setNRows,r=e.setNCols,i=e.setUserName;return c.a.createElement("button",{id:"restartButton",onClick:function(){t(!1),a(!1),n(0),r(0),i("")}},"Restart")},k=function(e){var t=e.time;return c.a.createElement("div",{id:"timer"},0!==t&&c.a.createElement("h1",{id:"timerText"},"Elapsed seconds: ",t))};s.a.render(c.a.createElement((function(){var e=Object(r.useState)(0),t=Object(n.a)(e,2),a=t[0],i=t[1],s=Object(r.useState)(0),l=Object(n.a)(s,2),o=l[0],u=l[1],m=Object(r.useState)(""),d=Object(n.a)(m,2),f=d[0],h=d[1],v=Object(r.useState)(!1),p=Object(n.a)(v,2),E=p[0],b=p[1],g=Object(r.useState)(!1),N=Object(n.a)(g,2),C=N[0],T=N[1],O=Object(r.useState)(null),j=Object(n.a)(O,2),y=j[0],S=j[1],F=Object(r.useState)(0),D=Object(n.a)(F,2),B=D[0],z=D[1];return c.a.createElement("div",{id:"wrapper"},c.a.createElement("div",{id:"header"},c.a.createElement(I,{setInputFormSubmitted:b,setGameInitialized:T,setNRows:i,setNCols:u,setUserName:h}),c.a.createElement(k,{time:B})),c.a.createElement("div",{id:"body"},E?c.a.createElement(w,{dc:y,setDC:S,nRows:a,nCols:o,userName:f,gameInitialized:C,setGameInitialized:T,time:B,setTime:z}):c.a.createElement(R,{nRows:a,setNRows:i,nCols:o,setNCols:u,userName:f,setUserName:h,setInputFormSubmitted:b})),c.a.createElement("div",{id:"footer"}))}),null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.15d99835.chunk.js.map