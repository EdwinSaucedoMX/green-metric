(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[720],{6436:function(e,n,r){Promise.resolve().then(r.bind(r,3412))},4229:function(e,n,r){"use strict";r.d(n,{Z:function(){return m}});var i=r(9268),l=r(9010),t=r(7668),a=r(5840),s=r(2607),o=r(5516),u=r(2424),d=r(3092),c=r(463),f=["h","minH","height","minHeight"],h=(0,s.G)((e,n)=>{let r=(0,o.mq)("Textarea",e),{className:l,rows:t,...s}=(0,u.Lr)(e),h=(0,a.Y)(s),m=t?function(e,n=[]){let r=Object.assign({},e);for(let e of n)e in r&&delete r[e];return r}(r,f):r;return(0,i.jsx)(d.m.textarea,{ref:n,rows:t,...h,className:(0,c.cx)("chakra-textarea",l),__css:m})});function m(e){let{title:n,text:r}=e;return(0,i.jsxs)(l.K,{className:"grid-center",w:"100%",spacing:"30px",children:[n&&(0,i.jsx)("h4",{className:"green",children:n}),r&&(0,i.jsx)(t.x,{className:"self-start",children:r}),(0,i.jsx)(h,{resize:"none",maxW:"900px",h:"400px",borderColor:"gray.400"})]})}h.displayName="Textarea"},3412:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});var i=r(9268),l=r(2152),t=r(7957),a=r(9010),s=r(4229);function o(){return(0,i.jsx)(l.g,{w:"100%",divider:(0,i.jsx)(t.c,{borderColor:"gray.200"}),padding:"30px",spacing:"30px",children:(0,i.jsx)(a.K,{className:"grid-center",w:"100%",children:(0,i.jsx)(s.Z,{title:"Escriba un reporte general que indique las generalidades de la dependencia"})})})}},5840:function(e,n,r){"use strict";r.d(n,{Y:function(){return x},K:function(){return p}});var i=r(2027),l=r(4966),t=r(2607),a=r(5516),s=r(2424),o=r(3092),u=r(463),d=r(6006),c=r(9268),[f,h]=(0,i.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[m,v]=(0,i.k)({strict:!1,name:"FormControlContext"});function x(e){let{isDisabled:n,isInvalid:r,isReadOnly:i,isRequired:l,...t}=p(e);return{...t,disabled:n,readOnly:i,required:l,"aria-invalid":(0,u.Qm)(r),"aria-required":(0,u.Qm)(l),"aria-readonly":(0,u.Qm)(i)}}function p(e){var n,r,i;let l=v(),{id:t,disabled:a,readOnly:s,required:o,isRequired:d,isInvalid:c,isReadOnly:f,isDisabled:h,onFocus:m,onBlur:x,...p}=e,b=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==l?void 0:l.hasFeedbackText)&&(null==l?void 0:l.isInvalid)&&b.push(l.feedbackId),(null==l?void 0:l.hasHelpText)&&b.push(l.helpTextId),{...p,"aria-describedby":b.join(" ")||void 0,id:null!=t?t:null==l?void 0:l.id,isDisabled:null!=(n=null!=a?a:h)?n:null==l?void 0:l.isDisabled,isReadOnly:null!=(r=null!=s?s:f)?r:null==l?void 0:l.isReadOnly,isRequired:null!=(i=null!=o?o:d)?i:null==l?void 0:l.isRequired,isInvalid:null!=c?c:null==l?void 0:l.isInvalid,onFocus:(0,u.v0)(null==l?void 0:l.onFocus,m),onBlur:(0,u.v0)(null==l?void 0:l.onBlur,x)}}(0,t.G)(function(e,n){let r=(0,a.jC)("Form",e),i=(0,s.Lr)(e),{getRootProps:t,htmlProps:h,...v}=function(e){let{id:n,isRequired:r,isInvalid:i,isDisabled:t,isReadOnly:a,...s}=e,o=(0,d.useId)(),c=n||`field-${o}`,f=`${c}-label`,h=`${c}-feedback`,m=`${c}-helptext`,[v,x]=(0,d.useState)(!1),[p,b]=(0,d.useState)(!1),[g,k]=(0,d.useState)(!1),y=(0,d.useCallback)((e={},n=null)=>({id:m,...e,ref:(0,l.lq)(n,e=>{e&&b(!0)})}),[m]),_=(0,d.useCallback)((e={},n=null)=>({...e,ref:n,"data-focus":(0,u.PB)(g),"data-disabled":(0,u.PB)(t),"data-invalid":(0,u.PB)(i),"data-readonly":(0,u.PB)(a),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:c}),[c,t,g,i,a,f]),C=(0,d.useCallback)((e={},n=null)=>({id:h,...e,ref:(0,l.lq)(n,e=>{e&&x(!0)}),"aria-live":"polite"}),[h]),j=(0,d.useCallback)((e={},n=null)=>({...e,...s,ref:n,role:"group"}),[s]),N=(0,d.useCallback)((e={},n=null)=>({...e,ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!r,isInvalid:!!i,isReadOnly:!!a,isDisabled:!!t,isFocused:!!g,onFocus:()=>k(!0),onBlur:()=>k(!1),hasFeedbackText:v,setHasFeedbackText:x,hasHelpText:p,setHasHelpText:b,id:c,labelId:f,feedbackId:h,helpTextId:m,htmlProps:s,getHelpTextProps:y,getErrorMessageProps:C,getRootProps:j,getLabelProps:_,getRequiredIndicatorProps:N}}(i),x=(0,u.cx)("chakra-form-control",e.className);return(0,c.jsx)(m,{value:v,children:(0,c.jsx)(f,{value:r,children:(0,c.jsx)(o.m.div,{...t({},n),className:x,__css:r.container})})})}).displayName="FormControl",(0,t.G)(function(e,n){let r=v(),i=h(),l=(0,u.cx)("chakra-form__helper-text",e.className);return(0,c.jsx)(o.m.div,{...null==r?void 0:r.getHelpTextProps(e,n),__css:i.helperText,className:l})}).displayName="FormHelperText"},7957:function(e,n,r){"use strict";r.d(n,{c:function(){return t}});var i=r(3092),l=r(9268),t=e=>(0,l.jsx)(i.m.div,{className:"chakra-stack__divider",...e,__css:{...e.__css,borderWidth:0,alignSelf:"stretch",borderColor:"inherit",width:"auto",height:"auto"}});t.displayName="StackDivider"},2152:function(e,n,r){"use strict";r.d(n,{g:function(){return a}});var i=r(9010),l=r(2607),t=r(9268),a=(0,l.G)((e,n)=>(0,t.jsx)(i.K,{align:"center",...e,direction:"column",ref:n}));a.displayName="VStack"},4966:function(e,n,r){"use strict";r.d(n,{lq:function(){return l},qq:function(){return t}});var i=r(6006);function l(...e){return n=>{e.forEach(e=>{!function(e,n){if(null!=e){if("function"==typeof e){e(n);return}try{e.current=n}catch(r){throw Error(`Cannot assign value '${n}' to ref '${e}'`)}}}(e,n)})}}function t(...e){return(0,i.useMemo)(()=>l(...e),e)}}},function(e){e.O(0,[230,253,488,560],function(){return e(e.s=6436)}),_N_E=e.O()}]);