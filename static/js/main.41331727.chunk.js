(this["webpackJsonpfacebook-auth"]=this["webpackJsonpfacebook-auth"]||[]).push([[0],{27:function(e,t,n){"use strict";n.r(t);var o=n(14),c=n.n(o),i=n(18),r=n.n(i),a=n(13),d=n(19),s=n(11),l=n(8),u=(Object(d.a)({apiKey:"AIzaSyCE-0GLNVJqqDIsMfwdWt5hUD1H_6dAm0I",authDomain:"facebook-authentication-devada.firebaseapp.com",projectId:"facebook-authentication-devada",storageBucket:"facebook-authentication-devada.appspot.com",messagingSenderId:"149672103299",appId:"1:149672103299:web:c553f7914fa92baca63ab6"}),Object(s.b)()),h=function(){var e=Object(o.useState)(),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("header",{style:{display:"flex",width:"100%",height:"7vh",background:"dodgerblue",alignItems:"center",justifyContent:"space-between",paddingTop:2,paddingBottom:2},children:[Object(l.jsx)("div",{}),Object(l.jsxs)("div",{style:{color:"#fff",fontSize:24,marginRight:15},children:[n?n.displayName:null,n?Object(l.jsx)("button",{style:{background:"#000",width:150,height:30,color:"#fff",border:"none",outline:"none",cursor:"pointer",borderRadius:5},onClick:function(){!function(e){Object(s.d)(u).then((function(){e(null),console.log("Successfully signed out!")})).catch((function(e){console.log("An error occured while signing out the user!")}))}(c)},children:"logout"}):null]})]}),Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"90vh"},children:Object(l.jsx)("button",{style:{background:"dodgerblue",width:150,height:30,color:"#fff",border:"none",outline:"none",cursor:"pointer",borderRadius:5},onClick:function(){!function(e){var t=new s.a;Object(s.c)(u,t).then((function(t){var n=t.user;e(n)})).catch((function(t){var n=t.code,o=t.message,c=t.email,i=s.a.credentialFromError(t);console.log("errors: ",[{errorCode:n,errorMessage:o,erroredEmail:c,credential:i}]),e(null)}))}(c)},children:"login with facebook"})})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),b()}},[[27,1,2]]]);
//# sourceMappingURL=main.41331727.chunk.js.map