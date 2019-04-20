(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(n,e,t){n.exports=t(87)},87:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"loadProducts",function(){return M});var a={};t.r(a),t.d(a,"loadProduct",function(){return L});var c=t(0),o=t.n(c),i=t(18),u=t.n(i),l=t(19),m=t(7),d=t(42),s=t(22),f=t(21),p={products:[]},g={product:null},h=Object(m.c)({products:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0,t=e.type,r=e.payload,a=e.error;switch(a&&console.error(a),t){case"PRODUCTS_ADD_PRODUCT":var c=r.product,o=[].concat(Object(f.a)(n.products),[c]);return Object(s.a)({},n,{products:o});case"PRODUCTS_SET_PRODUCTS":var i=r.products;return Object(s.a)({},n,{products:i});default:return n}},product:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0,t=e.type,r=e.payload,a=e.error;switch(a&&console.error(a),t){case"PRODUCT_SET_PRODUCT":var c=r.product;return Object(s.a)({},n,{product:c});default:return n}}}),v=[d.a],b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,x=Object(m.e)(h,b(m.a.apply(void 0,v))),E=t(1),O=t(8),y=t(2),j=t(43),w=t(29),C=t(16);function k(){var n=Object(E.a)(["\n  * {\n    box-sizing: border-box;\n  }\n\n  html {\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  span,\n  small,\n  p {\n    margin: 0;\n    font-family: 'Helvetica Neue', Arial, sans-serif;\n    font-weight: 400;\n\n    &.bold {\n      font-weight: bold;\n    }\n\n    &.light {\n      font-weight: 200;\n    }\n  }\n\n  a {\n    color: #0ea5c6;\n    text-decoration: none;\n    cursor: pointer;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]);return k=function(){return n},n}var P=Object(O.c)(k()),R={primaryColor:"#555",primaryColorLight:"#9A9A9A",secondaryColor:"#F6F5F5",white:"#FFF",grey:"#EEE",red:"#CC0202",lightRed:"#F67171",overlay:"#33333350",primaryText:"#45495A",secondaryText:"#6A6868",gp:16,borderRadius:"".concat(4,"px"),modalZIndex:2},T=t(9),I=t(27),D=t.n(I),_=t(44),S=t.n(_),A=t(20),z=t.n(A),N=t(28),U=t(45),F=t.n(U),M=function(){return function(){var n=Object(N.a)(z.a.mark(function n(e){var t,r;return z.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,F()("./static/item-data.json");case 3:t=n.sent,r=t.data.CatalogEntryView,e({type:"PRODUCTS_SET_PRODUCTS",payload:{products:r}}),n.next=11;break;case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Unable to load products\n\n",n.t0);case 11:case"end":return n.stop()}},n,null,[[0,8]])}));return function(e){return n.apply(this,arguments)}}()},L=function(n){return function(){var e=Object(N.a)(z.a.mark(function e(t,a){var c,o,i;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(r.loadProducts());case 2:c=a(),o=c.products,i=o.products.find(function(e){return e.itemId===n}),t({type:"PRODUCT_SET_PRODUCT",payload:{product:i}});case 5:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}()},V=t(30);function Y(){var n=Object(E.a)(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  text-align: center;\n  user-select: none;\n"]);return Y=function(){return n},n}function B(){var n=Object(E.a)(["\n  position: relative;\n  flex: 1;\n  margin: ","px 0;\n\n  &:not(:first-of-type) {\n    margin-left: ","px;\n  }\n"]);return B=function(){return n},n}function H(){var n=Object(E.a)(["\n  ","\n  ","\n  ","\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  text-transform: uppercase;\n  width: 100%;\n"]);return H=function(){return n},n}var W=y.a.button(H(),function(n){var e=n.primary,t=n.secondary,r=n.theme;return e?"\n      background: linear-gradient(to top, ".concat(r.red," 0%, ").concat(r.lightRed," 100%);\n      color: ").concat(r.white,";\n      "):t?"\n      background: linear-gradient(to top, ".concat(r.primaryColor," 0%, ").concat(r.primaryColorLight," 100%);\n      color: ").concat(r.white,";\n    "):"\n    background-color: ".concat(r.grey,";\n    color: ").concat(r.primaryColor,";\n  ")},function(n){var e=n.small,t=n.medium,r=n.theme;return e?"\n      padding: ".concat(r.gp/4,"px ").concat(r.gp,"px;\n      font-size: 80%;\n    "):t?"\n      padding: ".concat(r.gp/2,"px ").concat(r.gp,"px;\n      font-size: 100%;\n    "):"\n    padding: ".concat(r.gp,"px ").concat(r.gp,"px;\n    font-size: 120%;\n  ")},function(n){var e=n.theme;return"\n  border-radius: ".concat(e.borderRadius,";\n")}),J=y.a.div(B(),function(n){return n.theme.gp},function(n){return n.theme.gp/2}),X=y.a.small(Y()),Z=function(n){var e=n.subTitle,t=Object(V.a)(n,["subTitle"]);return o.a.createElement(J,null,o.a.createElement(W,t),e?o.a.createElement(X,{className:"bold"},e):null)};function q(){var n=Object(E.a)(["\n  user-select: none;\n  ","\n  ","\n"]);return q=function(){return n},n}var K=function(n){return"./static/assets/".concat(n,".svg")},Q=y.a.img(q(),function(n){var e=function(n){var e=n.small,t=n.large,r=n.size;return r||(e?20:t?40:30)}(n);return"height: ".concat(e,"px; width: ").concat(e,"px;")},function(n){return n.clickable?"cursor: pointer;":""}),$=function(n){var e=n.name,t=n.alt,r=Object(V.a)(n,["name","alt"]);return o.a.createElement(Q,Object.assign({},r,{src:K(e),alt:t||e}))},G=t(46),nn=t(47),en=t(50),tn=t(48),rn=t(51);function an(){var n=Object(E.a)(["\n  overflow: scroll;\n  max-height: calc(100vh - ","px);\n  max-width: calc(100vw - ","px);\n"]);return an=function(){return n},n}function cn(){var n=Object(E.a)(["\n  margin: ","px;\n  position: absolute;\n  top: 0;\n  right: 0;\n"]);return cn=function(){return n},n}function on(){var n=Object(E.a)(["\n  max-height: 100%;\n  max-width: 100%;\n  overflow: hidden;\n  padding: ","px;\n  border-radius: ",";\n  position: relative;\n  background-color: ",";\n"]);return on=function(){return n},n}function un(){var n=Object(E.a)(["\n  padding: ","px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  z-index: ",";\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n"]);return un=function(){return n},n}var ln=y.a.aside(un(),function(n){return 4*n.theme.gp},function(n){return n.theme.overlay},function(n){return n.theme.modalZIndex}),mn=y.a.div(on(),function(n){return 3*n.theme.gp},function(n){return n.theme.borderRadius},function(n){return n.theme.grey}),dn=Object(y.a)($)(cn(),function(n){return n.theme.gp/2}),sn=y.a.div(an(),function(n){return 14*n.theme.gp},function(n){return 14*n.theme.gp}),fn=document.getElementById("modal"),pn=function(n){function e(n){var t;return Object(G.a)(this,e),(t=Object(en.a)(this,Object(tn.a)(e).call(this,n))).el=document.createElement("div"),t}return Object(rn.a)(e,n),Object(nn.a)(e,[{key:"componentDidMount",value:function(){fn.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){fn.removeChild(this.el)}},{key:"render",value:function(){return Object(i.createPortal)(o.a.createElement(ln,null,o.a.createElement(mn,null,o.a.createElement(dn,{clickable:!0,name:"close",onClick:this.props.onClose}),o.a.createElement(sn,null,this.props.children))),this.el)}}]),e}(o.a.Component);function gn(){var n=Object(E.a)(["\n  align-items: center;\n  padding: ","px;\n  cursor: pointer;\n\n  span {\n    color: ",";\n    margin-left: ",";\n  }\n"]);return gn=function(){return n},n}function hn(){var n=Object(E.a)(["\n  display: flex;\n  flex-direction: row;\n  position: relative;\n"]);return hn=function(){return n},n}function vn(){var n=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border-radius: ",";\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return vn=function(){return n},n}function bn(){var n=Object(E.a)(["\n  ","\n  ","\n"]);return bn=function(){return n},n}function xn(){var n=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return xn=function(){return n},n}var En=y.a.div(xn()),On=y.a.img(bn(),function(n){var e=n.size;return"\n    height: ".concat(e,"px;\n    width: ").concat(e,"px;\n  ")},function(n){return n.clickable?"cursor: pointer;":""}),yn=y.a.div(vn(),function(n){return n.theme.borderRadius},function(n){return n.theme.grey}),jn=y.a.div(hn()),wn=Object(y.a)(jn)(gn(),function(n){return n.theme.gp},function(n){return n.theme.secondaryText},function(n){return n.theme.gp}),Cn=function(n){var e=n.images,t=Object(c.useState)(0),r=Object(T.a)(t,2),a=r[0],i=r[1],u=Object(c.useState)(0),l=Object(T.a)(u,2),m=l[0],d=l[1],s=Object(c.useState)(!1),f=Object(T.a)(s,2),p=f[0],g=f[1],h=function(){return a+1>e.length-1?0:a+1},v=function(){return a-1<0?e.length-1:a-1},b=function(n){var e=n.target;d(e.dataset.index)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(En,null,o.a.createElement(On,{size:300,src:e[m].url}),o.a.createElement(wn,{onClick:function(){return g(!0)}},o.a.createElement($,{name:"zoom"}),o.a.createElement("span",null,"View Larger")),o.a.createElement(jn,null,o.a.createElement(yn,{onClick:function(){i(v())}},o.a.createElement($,{name:"left-arrow"})),[v(),a,h()].map(function(n){var t=e[n],r=t.url,a=t.id;return o.a.createElement(On,{key:a,src:r,size:100,clickable:!0,onClick:b,"data-index":n})}),o.a.createElement(yn,{onClick:function(){i(h())}},o.a.createElement($,{name:"right-arrow"})))),p?o.a.createElement(pn,{onClose:function(){return g(!1)}},o.a.createElement(On,{size:600,src:e[m].url})):null)};function kn(){var n=Object(E.a)(["\n  display: flex;\n"]);return kn=function(){return n},n}var Pn=y.a.div(kn()),Rn=function(n){var e=n.stars,t=n.max,r=void 0===t?5:t,a=n.size;return o.a.createElement(Pn,{title:"".concat(e," of ").concat(r," stars")},Array(r).fill(1).map(function(n,t){return o.a.createElement($,{size:a,name:t>=e?"star":"star-red",key:t})}))};function Tn(){var n=Object(E.a)(["\n  max-width: 500px;\n\n  h1 {\n    text-align: center;\n    margin-bottom: ","px;\n  }\n"]);return Tn=function(){return n},n}function In(){var n=Object(E.a)(["\n  flex: 1;\n\n  &:not(:last-of-type) {\n    margin-bottom: ","px;\n  }\n"]);return In=function(){return n},n}function Dn(){var n=Object(E.a)(["\n  flex: 1;\n"]);return Dn=function(){return n},n}function _n(){var n=Object(E.a)(["\n  padding: ","px;\n  background-color: ",";\n  border-radius: ",";\n\n  h3 {\n    margin-top: ","px;\n  }\n"]);return _n=function(){return n},n}function Sn(){var n=Object(E.a)(["\n  display: flex;\n  margin: ","px;\n  margin-top: ","px;\n  align-items: flex-end;\n\n  .overall {\n    margin-left: ","px;\n    flex: 1;\n  }\n\n  .view-all {\n    text-align: right;\n    cursor: pointer;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]);return Sn=function(){return n},n}function An(){var n=Object(E.a)(["\n  display: flex;\n"]);return An=function(){return n},n}var zn=y.a.div(An()),Nn=y.a.div(Sn(),function(n){return n.theme.gp},function(n){return 2*n.theme.gp},function(n){return n.theme.gp/2}),Un=y.a.div(_n(),function(n){return n.theme.gp},function(n){return n.theme.grey},function(n){return n.theme.borderRadius},function(n){return n.theme.gp/2}),Fn=y.a.div(Dn()),Mn=y.a.div(In(),function(n){return 2*n.theme.gp}),Ln=y.a.div(Tn(),function(n){return n.theme.gp}),Vn=function(n){var e=n.reviews,t=n.pro,r=n.con,a=n.rating,i=Object(c.useState)(!1),u=Object(T.a)(i,2),l=u[0],m=u[1],d=function(n){var e=n.title,t=n.overallRating,r=n.review,a=n.screenName,c=n.reviewKey,i=n.datePosted,u=D()(i).format("MMMM DD, YYYY");return o.a.createElement(Mn,{key:c},o.a.createElement(Rn,{size:16,stars:t}),o.a.createElement("h3",{className:"bold"},e),o.a.createElement("p",null,r),o.a.createElement("br",null),o.a.createElement("p",null,o.a.createElement("a",{href:"/"},a)," | ",u))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(Nn,null,o.a.createElement(Rn,{stars:a}),o.a.createElement("span",{className:"overall bold"},"overall"),o.a.createElement("span",{className:"view-all bold",onClick:function(){return m(!0)}},"view all ",e.length," Reviews")),o.a.createElement(Un,null,o.a.createElement(zn,null,o.a.createElement(Fn,null,o.a.createElement("h2",null,"PRO"),o.a.createElement("span",null,"most helpful 4-5 star review")),o.a.createElement(Fn,null,o.a.createElement("h2",null,"CON"),o.a.createElement("span",null,"most helpful 1-2 star review"))),o.a.createElement("hr",null),o.a.createElement(zn,null,d(t),d(r))),l?o.a.createElement(pn,{onClose:function(){return m(!1)}},o.a.createElement(Ln,null,o.a.createElement("h1",null,"All Reviews"),e.map(d))):null)};function Yn(){var n=Object(E.a)(["\n  margin: ","px 0;\n\n  ul {\n    color: ",";\n    padding-inline-start: ","px;\n  }\n\n  li {\n    margin: ","px 0;\n  }\n"]);return Yn=function(){return n},n}function Bn(){var n=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: ","px 0;\n\n  hr {\n    width: 100%;\n    margin: ","px 0;\n  }\n\n  .promo {\n    display: flex;\n    align-items: center;\n  }\n\n  h3 {\n    margin-left: ","px;\n    color: ",";\n  }\n"]);return Bn=function(){return n},n}function Hn(){var n=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  color: ",";\n  margin: ","px 0;\n\n  hr {\n    height: 100%;\n    margin: 0 ","px;\n  }\n"]);return Hn=function(){return n},n}function Wn(){var n=Object(E.a)(["\n  display: flex;\n  align-items: flex-end;\n\n  h2 {\n    margin-right: ","px;\n  }\n"]);return Wn=function(){return n},n}function Jn(){var n=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  width: 50%;\n  margin: ","px 0;\n  padding: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n\n  .label {\n    flex: 1;\n  }\n\n  h2 {\n    padding: 0 ","px;\n  }\n"]);return Jn=function(){return n},n}function Xn(){var n=Object(E.a)(["\n  display: flex;\n"]);return Xn=function(){return n},n}function Zn(){var n=Object(E.a)(["\n  display: flex;\n"]);return Zn=function(){return n},n}function qn(){var n=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin: 0 ","px;\n\n  .title {\n    text-align: center;\n    margin: ","px;\n  }\n"]);return qn=function(){return n},n}function Kn(){var n=Object(E.a)(["\n  display: flex;\n  margin: ","px;\n  flex-direction: row;\n"]);return Kn=function(){return n},n}D.a.extend(S.a);var Qn=y.a.div(Kn(),function(n){return 4*n.theme.gp}),$n=y.a.div(qn(),function(n){return n.theme.gp},function(n){return 2*n.theme.gp}),Gn=y.a.div(Zn()),ne=y.a.div(Xn()),ee=y.a.div(Jn(),function(n){return n.theme.gp},function(n){var e=n.theme;return"".concat(e.gp/4,"px ").concat(e.gp,"px")},function(n){return n.theme.grey},function(n){return n.theme.borderRadius},function(n){return n.theme.gp/2}),te=y.a.div(Wn(),function(n){return n.theme.gp/2}),re=y.a.div(Hn(),function(n){return n.theme.secondaryText},function(n){return 2*n.theme.gp},function(n){return n.theme.gp}),ae=y.a.div(Bn(),function(n){return n.theme.gp},function(n){return n.theme.gp},function(n){return n.theme.gp/2},function(n){return n.theme.red}),ce=y.a.div(Yn(),function(n){return n.theme.gp},function(n){return n.theme.secondaryText},function(n){return n.theme.gp},function(n){return n.theme.gp/2}),oe=Object(l.b)(function(n){return{product:n.product.product}},function(n){return Object(m.b)({loadProduct:a.loadProduct},n)})(function(n){var e=n.match,t=n.loadProduct,r=n.product,a=Object(c.useState)(1),i=Object(T.a)(a,2),u=i[0],l=i[1];Object(c.useEffect)(function(){t(e.params.productId)},[e.params.productId]);var m,d,s=function(n){return["0","1"].includes(r.purchasingChannelCode)?n:null};if(r){var p=r.title,g=r.Offers,h=r.Promotions,v=r.ItemDescription;return o.a.createElement(Qn,null,o.a.createElement($n,null,o.a.createElement("h1",{className:"title light"},p),o.a.createElement(Cn,{images:function(n){var e=Object(T.a)(n,1)[0],t=e.PrimaryImage,r=e.AlternateImages;return[].concat(Object(f.a)(t),Object(f.a)(r)).map(function(n){var e=n.image;return{id:e.substr(e.lastIndexOf("/")+1),url:e}})}(r.Images)}),o.a.createElement(Vn,{reviews:r.CustomerReview[0].Reviews,pro:r.CustomerReview[0].Pro[0],con:r.CustomerReview[0].Con[0],rating:r.CustomerReview[0].consolidatedOverallRating})),o.a.createElement($n,null,o.a.createElement(te,null,o.a.createElement("h2",{className:"bold"},g[0].OfferPrice[0].formattedPriceValue),o.a.createElement("span",null,g[0].OfferPrice[0].priceQualifier)),function(n){var e=n;return 0===e.length?null:o.a.createElement(ae,null,o.a.createElement("hr",null),e.map(function(n){return o.a.createElement("div",{className:"promo",key:n.promotionIdentifier},o.a.createElement($,{small:!0,name:"tag-red"}),o.a.createElement("h3",null,n.Description[0].shortDescription))}),o.a.createElement("hr",null))}(h),s(o.a.createElement(ee,null,o.a.createElement("span",{className:"label"},"quantity:"),o.a.createElement($,{large:!0,clickable:!0,name:"remove",onClick:function(){return l(Math.max(u-1,1))}}),o.a.createElement("h2",{className:"bold"},u),o.a.createElement($,{large:!0,clickable:!0,name:"add",onClick:function(){return l(u+1)}}))),o.a.createElement(Gn,null,(d=o.a.createElement(Z,{secondary:!0,subTitle:"find in a store"},"Pick up in store"),["0","2"].includes(r.purchasingChannelCode)?d:null),s(o.a.createElement(Z,{primary:!0},"Add to cart"))),o.a.createElement(re,null,o.a.createElement("h2",null,"returns"),o.a.createElement("hr",null),o.a.createElement("small",{dangerouslySetInnerHTML:{__html:r.ReturnPolicy[0].legalCopy}})),o.a.createElement(ne,null,o.a.createElement(Z,{small:!0},"Add to registry"),o.a.createElement(Z,{small:!0},"Add to list"),o.a.createElement(Z,{small:!0},"Share")),(m=v[0].features,o.a.createElement(ce,null,o.a.createElement("h1",null,"product highlights"),o.a.createElement("ul",null,m.map(function(n){return o.a.createElement("li",{key:n,dangerouslySetInnerHTML:{__html:n}})})))),o.a.createElement(Z,{style:{width:"50%"},medium:!0},"Full Overview")))}return o.a.createElement("div",null,"loading")});function ie(){var n=Object(E.a)(["\n  display: flex;\n  cursor: pointer;\n  padding: ","px;\n  color: ",";\n\n  &:hover {\n    box-shadow: 0 0 0 1px #45495A25, 0 3px 6px 0 #45495A45;\n    text-decoration: none;\n  }\n"]);return ie=function(){return n},n}function ue(){var n=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin-left: ","px;\n\n  p {\n  margin-top: ","px;\n\n  }\n"]);return ue=function(){return n},n}function le(){var n=Object(E.a)(["\n  width: 150px;\n  height: 150px;\n"]);return le=function(){return n},n}var me=y.a.img(le()),de=y.a.div(ue(),function(n){return n.theme.gp},function(n){return n.theme.gp}),se=Object(y.a)(w.b)(ie(),function(n){return n.theme.gp},function(n){return n.theme.primaryText}),fe=function(n){var e=n.id,t=n.title,r=n.description,a=n.image;return o.a.createElement(se,{to:"products/".concat(e)},o.a.createElement(me,{src:a,alt:a}),o.a.createElement(de,null,o.a.createElement("h3",null,t),o.a.createElement("p",null,r)))};function pe(){var n=Object(E.a)(["\n  width: 800px;\n  margin: ","px auto;\n"]);return pe=function(){return n},n}var ge=y.a.div(pe(),function(n){return 2*n.theme.gp}),he=Object(l.b)(function(n){return{products:n.products.products}},function(n){return Object(m.b)({loadProducts:r.loadProducts},n)})(function(n){var e=n.products,t=n.loadProducts;Object(c.useEffect)(function(){t()},[]);var r=function(n){var e=Object(T.a)(n,1)[0],t=void 0===e?{}:e;return t.PrimaryImage&&t.PrimaryImage[0]&&t.PrimaryImage[0].image||""};return o.a.createElement(ge,null,e.map(function(n){var e=n.title,t=n.itemId,a=n.shortDescription,c=n.Images;return o.a.createElement(fe,{key:t,id:t,title:e,description:a,image:r(c)})}))});function ve(){var n=Object(E.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n"]);return ve=function(){return n},n}var be=y.a.div(ve()),xe=function(){return o.a.createElement(j.a,{theme:R},o.a.createElement(O.a,{styles:P}),o.a.createElement(be,null,o.a.createElement(w.a,null,o.a.createElement(C.a,{path:"/",exact:!0,component:he}),o.a.createElement(C.a,{path:"/products/:productId",component:oe}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(l.a,{store:x},o.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[52,1,2]]]);
//# sourceMappingURL=main.37ec9469.chunk.js.map