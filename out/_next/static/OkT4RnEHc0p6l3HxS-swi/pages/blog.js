(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{BR8T:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t("YbiN")}])},YbiN:function(e,a,t){"use strict";t.r(a);var n=t("0iUn"),l=t("sLSF"),s=t("MI3g"),i=t("a7VT"),r=t("Tit0"),c=t("q1tI"),o=t.n(c),u=t("7vrA"),m=t("3Z9Z"),d=t("JI6e"),p=t("/d1K"),b=t("YFqc"),f=t.n(b),N=t("wx14"),v=t("zLVn"),g=t("TSYQ"),h=t.n(g),j=t("vUet"),y=t("dI71"),w=t("dbZe"),I=o.a.forwardRef((function(e,a){var t=e.active,n=e.disabled,l=e.className,s=e.style,i=e.activeLabel,r=e.children,c=Object(v.a)(e,["active","disabled","className","style","activeLabel","children"]),u=t||n?"span":w.a;return o.a.createElement("li",{ref:a,style:s,className:h()(l,"page-item",{active:t,disabled:n})},o.a.createElement(u,Object(N.a)({className:"page-link",disabled:n},c),r,t&&i&&o.a.createElement("span",{className:"sr-only"},i)))}));I.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},I.displayName="PageItem";var E=I;function O(e,a,t){var n,l;return void 0===t&&(t=e),l=n=function(e){function n(){return e.apply(this,arguments)||this}return Object(y.a)(n,e),n.prototype.render=function(){var e=this.props,n=e.children,l=Object(v.a)(e,["children"]);return delete l.active,o.a.createElement(I,l,o.a.createElement("span",{"aria-hidden":"true"},n||a),o.a.createElement("span",{className:"sr-only"},t))},n}(o.a.Component),n.displayName=e,l}var P=O("First","\xab"),L=O("Prev","\u2039","Previous"),x=O("Ellipsis","\u2026","More"),T=O("Next","\u203a"),_=O("Last","\xbb"),k=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.children,s=e.size,i=Object(v.a)(e,["bsPrefix","className","children","size"]),r=Object(j.a)(t,"pagination");return o.a.createElement("ul",Object(N.a)({ref:a},i,{className:h()(n,r,s&&r+"-"+s)}),l)}));k.First=P,k.Prev=L,k.Ellipsis=x,k.Item=E,k.Next=T,k.Last=_;var B=k,q=t("/MKj"),A=t("tB//"),F=t("ANjH"),M=t("Zttt"),R=t("5q4f"),Y=t("IP2g"),Z=t("wHSu"),z=t("EEY2"),C=o.a.createElement,J=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(i.a)(a).call(this))}return Object(r.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getAllBlogInfo()}},{key:"render",value:function(){return C(M.a,null,C(R.a,{title:"Blog"}),C("div",{className:"main-blog-section"},C(u.a,null,C(m.a,null,C(d.a,{lg:8},this.props.blogInfo.map((function(e,a){return C("div",{className:"single-post",key:a},C("div",{className:"entry-thum"},C("img",{src:t("8DZ1")("./".concat(e.img,".jpg")),alt:"blog"})),C("div",{className:"post-details"},C("div",{className:"entry-title"},C("h3",null,C(f.a,{href:{pathname:"/post",query:{id:e.id}}},C("a",null,e.label)))),C("div",{className:"meta-post"},C("ul",{className:"meta-tag"},C("li",{className:"date"},C(Y.a,{icon:Z.a}),e.post_date,C("span",null,"|")),C("li",{className:"admin"},C("a",{href:"#"},C(Y.a,{icon:Z.m}),e.author),C("span",null,"|")),C("li",{className:"commets"},C(Y.a,{icon:Z.b}),"5",C("span",null,"|")),C("li",{className:"ratting"},C(Y.a,{icon:Z.f}),"15"))),C("p",{className:"entry-content"},e.text),C(f.a,{href:{pathname:"/post",query:{id:e.id}}},C("a",{className:"btn btn-white-shadow"},"Read More"))))})),C("div",{className:"text-center mg-bottom-70"},C(B,{className:"page-navigation"},C(B.First,null),C(B.Item,null,1),C(B.Item,null,2),C(B.Ellipsis,null),C(B.Item,null,5),C(B.Last,null)))),C(d.a,{lg:{span:3,offset:1},className:"mg-bottom-100"},C(p.a,null))))),C(z.a,null))}}]),a}(c.Component);J.getInitialProps=function(){return{}};a.default=Object(q.b)((function(e){return{blogInfo:e.blogInfo}}),(function(e){return{getAllBlogInfo:Object(F.bindActionCreators)(A.b,e)}}))(J)}},[["BR8T",1,2,6,4,0,17,18,19]]]);