import{p as $,m as ve,n as X,b9 as fe,aR as J,ac as Z,D as i,a2 as U,J as E,aq as G,o as C,O as H,b4 as be,ba as we,aA as Se,az as ae,b as ke,bb as xe,v as Ce,B as Ie,bc as Pe,ad as Y,bd as Re,be as Te,an as De,I as Be,al as _e,bf as Ae,af as Fe,aW as Le,aX as Oe,b6 as Me,C as Ee,u as ne,aY as He,aZ as Ue,a_ as oe,a$ as $e,$ as ue,b0 as ze,b1 as Ke,aS as ie,F as se,aU as qe,G as Ne,a4 as We,b3 as je,av as Ye,aw as re}from"./index.a457a291.js";import{V as Ge}from"./VCheckboxBtn.ae1aff4b.js";const Je=$({renderless:Boolean,...ve()},"VVirtualScrollItem"),Xe=X()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Je(),emits:{"update:height":e=>!0},setup(e,f){let{attrs:t,emit:m,slots:c}=f;const{resizeRef:v,contentRect:g}=fe(void 0,"border");J(()=>{var a;return(a=g.value)==null?void 0:a.height},a=>{a!=null&&m("update:height",a)}),Z(()=>{var a,n;return e.renderless?i(U,null,[(a=c.default)==null?void 0:a.call(c,{itemRef:v})]):i("div",E({ref:v,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(n=c.default)==null?void 0:n.call(c)])})}}),ce=-1,de=1,Ze=$({itemHeight:{type:[Number,String],default:48}},"virtual");function Qe(e,f,t){const m=G(0),c=G(e.itemHeight),v=C({get:()=>{var s;return parseInt((s=c.value)!=null?s:0,10)},set(s){c.value=s}}),g=H(),{resizeRef:a,contentRect:n}=fe();be(()=>{a.value=g.value});const w=we(),I=new Map;let x=Array.from({length:f.value.length});const o=C(()=>{var r;const s=(!n.value||g.value===document.documentElement?w.height.value:n.value.height)-((r=t==null?void 0:t.value)!=null?r:0);return Math.ceil(s/v.value*1.7+1)});function h(s,r){v.value=Math.max(v.value,r),x[s]=r,I.set(f.value[s],r)}function V(s){return x.slice(0,s).reduce((r,k)=>r+(k||v.value),0)}function D(s){const r=f.value.length;let k=0,T=0;for(;T<s&&k<r;)T+=x[k++]||v.value;return k-1}let R=0;function z(){if(!g.value||!n.value)return;const s=n.value.height-56,r=g.value.scrollTop,k=r<R?ce:de,T=D(r+s/2),q=Math.round(o.value/3),_=T-q,N=m.value+q*2-1;k===ce&&T<=N?m.value=ae(_,0,f.value.length):k===de&&T>=N&&(m.value=ae(_,0,f.value.length-o.value)),R=r}function O(s){if(!g.value)return;const r=V(s);g.value.scrollTop=r}const M=C(()=>Math.min(f.value.length,m.value+o.value)),L=C(()=>f.value.slice(m.value,M.value).map((s,r)=>({raw:s,index:r+m.value}))),K=C(()=>V(m.value)),B=C(()=>V(f.value.length)-V(M.value));return J(()=>f.value.length,()=>{x=Se(f.value.length).map(()=>v.value),I.forEach((s,r)=>{const k=f.value.indexOf(r);k===-1?I.delete(r):x[k]=s})}),{containerRef:g,computedItems:L,itemHeight:v,paddingTop:K,paddingBottom:B,scrollToIndex:O,handleScroll:z,handleItemResize:h}}const el=$({items:{type:Array,default:()=>[]},renderless:Boolean,...Ze(),...ve(),...ke()},"VVirtualScroll"),ll=X()({name:"VVirtualScroll",props:el(),setup(e,f){let{slots:t}=f;const m=xe("VVirtualScroll"),{dimensionStyles:c}=Ce(e),{containerRef:v,handleScroll:g,handleItemResize:a,scrollToIndex:n,paddingTop:w,paddingBottom:I,computedItems:x}=Qe(e,Ie(e,"items"));return Pe(()=>e.renderless,()=>{Re(()=>{var o;v.value=Te(m.vnode.el,!0),(o=v.value)==null||o.addEventListener("scroll",g)}),De(()=>{var o;(o=v.value)==null||o.removeEventListener("scroll",g)})}),Z(()=>{const o=x.value.map(h=>i(Xe,{key:h.index,renderless:e.renderless,"onUpdate:height":V=>a(h.index,V)},{default:V=>{var D;return(D=t.default)==null?void 0:D.call(t,{item:h.raw,index:h.index,...V})}}));return e.renderless?i(U,null,[i("div",{class:"v-virtual-scroll__spacer",style:{paddingTop:Y(w.value)}},null),o,i("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:Y(I.value)}},null)]):i("div",{ref:v,class:["v-virtual-scroll",e.class],onScroll:g,style:[c.value,e.style]},[i("div",{class:"v-virtual-scroll__container",style:{paddingTop:Y(w.value),paddingBottom:Y(I.value)}},[o])])}),{scrollToIndex:n}}});function tl(e,f){const t=G(!1);let m;function c(a){cancelAnimationFrame(m),t.value=!0,m=requestAnimationFrame(()=>{m=requestAnimationFrame(()=>{t.value=!1})})}async function v(){await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>{if(t.value){const n=J(t,()=>{n(),a()})}else a()})}async function g(a){var I,x;if(a.key==="Tab"&&((I=f.value)==null||I.focus()),!["PageDown","PageUp","Home","End"].includes(a.key))return;const n=(x=e.value)==null?void 0:x.$el;if(!n)return;(a.key==="Home"||a.key==="End")&&n.scrollTo({top:a.key==="Home"?0:n.scrollHeight,behavior:"smooth"}),await v();const w=n.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(a.key==="PageDown"||a.key==="Home"){const o=n.getBoundingClientRect().top;for(const h of w)if(h.getBoundingClientRect().top>=o){h.focus();break}}else{const o=n.getBoundingClientRect().bottom;for(const h of[...w].reverse())if(h.getBoundingClientRect().bottom<=o){h.focus();break}}}return{onListScroll:c,onListKeydown:g}}const al=$({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:Be,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:_e},itemColor:String,...Ae({itemChildren:!1})},"Select"),nl=$({...al(),...Fe(Le({modelValue:null,role:"button"}),["validationValue","dirty","appendInnerIcon"]),...Oe({transition:{component:Me}})},"VSelect"),il=X()({name:"VSelect",props:nl(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,f){let{slots:t}=f;const{t:m}=Ee(),c=H(),v=H(),g=H(),a=ne(e,"menu"),n=C({get:()=>a.value,set:l=>{var u;a.value&&!l&&((u=v.value)==null?void 0:u.\u03A8openChildren)||(a.value=l)}}),{items:w,transformIn:I,transformOut:x}=He(e),o=ne(e,"modelValue",[],l=>I(l===null?[null]:Ye(l)),l=>{var p;const u=x(l);return e.multiple?u:(p=u[0])!=null?p:null}),h=Ue(),V=C(()=>o.value.map(l=>w.value.find(u=>{const p=oe(u.raw,e.itemValue),A=oe(l.raw,e.itemValue);return p===void 0||A===void 0?!1:e.returnObject?e.valueComparator(p,A):e.valueComparator(u.value,l.value)})||l)),D=C(()=>V.value.map(l=>l.props.value)),R=G(!1),z=C(()=>n.value?e.closeText:e.openText);let O="",M;const L=C(()=>e.hideSelected?w.value.filter(l=>!V.value.some(u=>u===l)):w.value),K=C(()=>e.hideNoData&&!w.value.length||e.readonly||(h==null?void 0:h.isReadonly.value)),B=H(),{onListScroll:s,onListKeydown:r}=tl(B,c);function k(l){e.openOnClear&&(n.value=!0)}function T(){K.value||(n.value=!n.value)}function q(l){var d,S;if(!l.key||e.readonly||(h==null?void 0:h.isReadonly.value))return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(l.key)&&l.preventDefault(),["Enter","ArrowDown"," "].includes(l.key)&&(n.value=!0),["Escape","Tab"].includes(l.key)&&(n.value=!1),l.key==="Home"?(d=B.value)==null||d.focus("first"):l.key==="End"&&((S=B.value)==null||S.focus("last"));const u=1e3;function p(y){const P=y.key.length===1,F=!y.ctrlKey&&!y.metaKey&&!y.altKey;return P&&F}if(e.multiple||!p(l))return;const A=performance.now();A-M>u&&(O=""),O+=l.key.toLowerCase(),M=A;const W=w.value.find(y=>y.title.toLowerCase().startsWith(O));W!==void 0&&(o.value=[W])}function _(l){if(e.multiple){const u=D.value.findIndex(p=>e.valueComparator(p,l.value));if(u===-1)o.value=[...o.value,l];else{const p=[...o.value];p.splice(u,1),o.value=p}}else o.value=[l],n.value=!1}function N(l){var u;(u=B.value)!=null&&u.$el.contains(l.relatedTarget)||(n.value=!1)}function me(){var l;R.value&&((l=c.value)==null||l.focus())}function he(l){R.value=!0}function pe(l){if(l==null)o.value=[];else if(re(c.value,":autofill")||re(c.value,":-webkit-autofill")){const u=w.value.find(p=>p.title===l);u&&_(u)}else c.value&&(c.value.value="")}return J(n,()=>{if(!e.hideSelected&&n.value&&V.value.length){const l=L.value.findIndex(u=>V.value.some(p=>u.value===p.value));$e&&window.requestAnimationFrame(()=>{var u;l>=0&&((u=g.value)==null||u.scrollToIndex(l))})}}),Z(()=>{const l=!!(e.chips||t.chip),u=!!(!e.hideNoData||L.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),p=o.value.length>0,[A]=ue.filterProps(e),W=p||!R.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return i(ue,E({ref:c},A,{modelValue:o.value.map(d=>d.props.value).join(", "),"onUpdate:modelValue":pe,focused:R.value,"onUpdate:focused":d=>R.value=d,validationValue:o.externalValue,dirty:p,class:["v-select",{"v-select--active-menu":n.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":o.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:W,"onClick:clear":k,"onMousedown:control":T,onBlur:N,onKeydown:q,"aria-label":m(z.value),title:m(z.value)}),{...t,default:()=>i(U,null,[i(ze,E({ref:v,modelValue:n.value,"onUpdate:modelValue":d=>n.value=d,activator:"parent",contentClass:"v-select__content",disabled:K.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:me},e.menuProps),{default:()=>{var d;return[u&&i(Ke,{ref:B,selected:D.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:S=>S.preventDefault(),onKeydown:r,onFocusin:he,onScrollPassive:s,tabindex:"-1",color:(d=e.itemColor)!=null?d:e.color},{default:()=>{var S,y,P,F;return[(S=t["prepend-item"])==null?void 0:S.call(t),!L.value.length&&!e.hideNoData&&((P=(y=t["no-data"])==null?void 0:y.call(t))!=null?P:i(ie,{title:m(e.noDataText)},null)),i(ll,{ref:g,renderless:!0,items:L.value},{default:j=>{var le,te;let{item:b,index:Q,itemRef:ge}=j;const ee=E(b.props,{ref:ge,key:Q,onClick:()=>_(b)});return(te=(le=t.item)==null?void 0:le.call(t,{item:b,index:Q,props:ee}))!=null?te:i(ie,ee,{prepend:ye=>{let{isSelected:Ve}=ye;return i(U,null,[e.multiple&&!e.hideSelected?i(Ge,{key:b.value,modelValue:Ve,ripple:!1,tabindex:"-1"},null):void 0,b.props.prependIcon&&i(se,{icon:b.props.prependIcon},null)])}})}}),(F=t["append-item"])==null?void 0:F.call(t)]}})]}}),V.value.map((d,S)=>{var F,j;function y(b){b.stopPropagation(),b.preventDefault(),_(d)}const P={"onClick:close":y,onMousedown(b){b.preventDefault(),b.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return i("div",{key:d.value,class:"v-select__selection"},[l?t.chip?i(Ne,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:d.title}}},{default:()=>{var b;return[(b=t.chip)==null?void 0:b.call(t,{item:d,index:S,props:P})]}}):i(qe,E({key:"chip",closable:e.closableChips,size:"small",text:d.title},P),null):(j=(F=t.selection)==null?void 0:F.call(t,{item:d,index:S}))!=null?j:i("span",{class:"v-select__selection-text"},[d.title,e.multiple&&S<V.value.length-1&&i("span",{class:"v-select__selection-comma"},[We(",")])])])})]),"append-inner":function(){var P;for(var d=arguments.length,S=new Array(d),y=0;y<d;y++)S[y]=arguments[y];return i(U,null,[(P=t["append-inner"])==null?void 0:P.call(t,...S),e.menuIcon?i(se,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),je({isFocused:R,menu:n,select:_},c)}});export{il as V,ll as a,al as m,tl as u};
