(this.webpackJsonpconcentration=this.webpackJsonpconcentration||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),u=n(4),i=n.n(u),l=(n(11),n(5)),o=n(2);var s=function e(t,n,a){Object(o.a)(this,e),this.val=t,this.hasBeenRevealed=n,this.isTurned=a},m=function(){function e(t,n,a){Object(o.a)(this,e),this.nRows=n,this.nCols=a,this.cards=null===t?this._dealCards(n,a):t,this.finalTime=null}return Object(l.a)(e,[{key:"_dealCards",value:function(e,t){for(var n=e*t,a=[],r=0;r<n/2;r++)a=a.concat([r,r]);a=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}(a);for(var c=[],u=0;u<e;u++){c.push([]);for(var i=0;i<t;i++)c[c.length-1].push(new s(a[u*t+i],!1,!1))}return c}},{key:"reset",value:function(){this.cards.forEach((function(e,t){e.forEach((function(e,t){e.isTurned=!1}))}))}},{key:"countTurned",value:function(){var e=0;return this.cards.forEach((function(t,n){t.forEach((function(t,n){e+=Number(t.isTurned)}))})),e}},{key:"markRevealed",value:function(){if(2===this.countTurned()){var e=[];this.cards.forEach((function(t,n){t.forEach((function(t,n){t.isTurned&&e.push(t)}))})),e[0].val===e[1].val&&(e[0].hasBeenRevealed=!0,e[1].hasBeenRevealed=!0)}}},{key:"checkGameOver",value:function(e){for(var t=0;t<this.nRows;t++)for(var n=0;n<this.nCols;n++)if(!this.cards[t][n].hasBeenRevealed)return!1;return null===this.finalTime&&(this.finalTime=e),!0}}]),e}(),d=function(e){var t=e.dc,n=e.row,a=e.col,r=e.setDC,u=e.color,i=e.fontSize,l=e.backgroundColorIsTurned,o=t.cards[n][a],s=o.hasBeenRevealed,m="",d="red";return o.isTurned&&(m=o.val,d=l),c.a.createElement("div",null," ",!s&&c.a.createElement("button",{style:{color:"".concat(u),fontSize:"".concat(i,"px"),backgroundColor:"".concat(d)},onClick:function(){r((function(e){var t=Object.assign(Object.create(Object.getPrototypeOf(e)),e);return 2===t.countTurned()&&t.reset(),t.cards[n][a].isTurned||(t.cards[n][a].isTurned=!t.cards[n][a].isTurned),t.markRevealed(),t}))}},m))},f=function(e){var t=e.userName,n=e.finalTime;return(0,e.setTime)(0),c.a.createElement("h1",null,"Congratz ",t,"! Finished in ",n," seconds")},v=function(e){var t=e.dc,n=e.setDC,a=e.nRows,u=e.nCols,i=e.userName,l=e.gameInitialized,o=e.setGameInitialized,s=e.time,v=e.setTime;Object(r.useEffect)((function(){var e=setInterval((function(){return v((function(e){return e+1}))}),1e3);return function(){clearInterval(e),v(0)}}),[]),l&&null!==t||(t=new m(null,a,u),n(t),o(!0));for(var h=[],b=0;b<a;b++)for(var E=0;E<u;E++)h.push([t,b,E]);var p=h.map((function(e,t){return c.a.createElement("div",{className:"gridItem",key:t},c.a.createElement(d,{dc:e[0],row:e[1],col:e[2],setDC:n,color:"black",fontSize:20,backgroundColorIsTurned:"green"}))}));return c.a.createElement("div",null,t.checkGameOver(s)?c.a.createElement(f,{userName:i,finalTime:t.finalTime,setTime:v}):c.a.createElement("div",{className:"gridContainer",style:{gridTemplateColumns:"repeat(".concat(u,",auto")}},p))},h=function(e){var t=e.nRows,n=e.setNRows,a=e.nCols,r=e.setNCols,u=e.userName,i=e.setUserName,l=e.setInputFormSubmitted;return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a*t%2===0&&""!==u?l(!0):alert("Input cards needs to be even and username needs to be specified!")}},c.a.createElement("div",null,c.a.createElement("label",null,"Number of rows:"),c.a.createElement("input",{type:"text",name:"Number of rows",value:t,onChange:function(e){n(Number(e.target.value))}})),c.a.createElement("div",null,c.a.createElement("label",null,"Number of columns:"),c.a.createElement("input",{type:"text",name:"Number of columns",value:a,onChange:function(e){r(Number(e.target.value))}})),c.a.createElement("div",null,c.a.createElement("label",null,"Username:"),c.a.createElement("input",{type:"text",name:"Username",value:u,onChange:function(e){i(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("input",{type:"submit",value:"Start game"})))},b=function(e){var t=e.setInputFormSubmitted,n=e.setGameInitialized;return c.a.createElement("button",{onClick:function(){t(!1),n(!1)}},"Restart")},E=function(e){var t=e.time;return c.a.createElement("div",null,0!==t&&c.a.createElement("h1",null,"Elapsed seconds: ",t))};i.a.render(c.a.createElement((function(){var e=Object(r.useState)(1),t=Object(a.a)(e,2),n=t[0],u=t[1],i=Object(r.useState)(2),l=Object(a.a)(i,2),o=l[0],s=l[1],m=Object(r.useState)("CoolUser"),d=Object(a.a)(m,2),f=d[0],p=d[1],C=Object(r.useState)(!1),O=Object(a.a)(C,2),T=O[0],g=O[1],j=Object(r.useState)(!1),N=Object(a.a)(j,2),k=N[0],w=N[1],I=Object(r.useState)(null),R=Object(a.a)(I,2),S=R[0],y=R[1],z=Object(r.useState)(0),B=Object(a.a)(z,2),G=B[0],x=B[1];return c.a.createElement("div",{id:"wrapper"},c.a.createElement("div",{id:"header"},c.a.createElement(b,{setInputFormSubmitted:g,setGameInitialized:w}),c.a.createElement(E,{time:G})),c.a.createElement("div",{id:"body"},T?c.a.createElement(v,{dc:S,setDC:y,nRows:n,nCols:o,userName:f,gameInitialized:k,setGameInitialized:w,time:G,setTime:x}):c.a.createElement(h,{nRows:n,setNRows:u,nCols:o,setNCols:s,userName:f,setUserName:p,setInputFormSubmitted:g})),c.a.createElement("div",{id:"footer"}))}),null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.d73d08b4.chunk.js.map