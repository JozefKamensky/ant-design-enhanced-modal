import{createContext as e,createElement as n,useState as i,useCallback as t,useEffect as o,useRef as r,memo as d,useMemo as a,useContext as u,useReducer as s}from"react";import{useUID as c}from"react-uid";import{Modal as w}from"antd";var h=function(){return(h=Object.assign||function(e){for(var n,i=1,t=arguments.length;i<t;i++)for(var o in n=arguments[i])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};var l=e(null),m=function(e){return n("div",h({className:"ant-design-draggable-modal-resize-handle"},e),n("div",{className:"ant-design-draggable-modal-resize-handle-inner"}))},v={margin:0,paddingBottom:0,pointerEvents:"auto"},f=d(function(e){var d=e.id,u=e.modalState,s=e.dispatch,c=e.visible,l=e.children,f=e.title,g=function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(i[t[o]]=e[t[o]])}return i}(e,["id","modalState","dispatch","visible","children","title"]);o(function(){return s({type:"mount",id:d}),function(){return s({type:"unmount",id:d})}},[s,d]);var x,p,y=(x=c,p=r(null),o(function(){p.current=x}),p.current);o(function(){c!==y&&s(c?{type:"show",id:d}:{type:"hide",id:d})},[c,y,d,s]);var z=u.zIndex,b=u.x,I=u.y,X=u.width,S=u.height,Y=a(function(){return h(h({},v),{top:I,left:b,height:S})},[I,b,S]),E=t(function(){return s({type:"focus",id:d})},[d,s]),L=t(function(e){return s(h({type:"drag",id:d},e))},[s,d]),D=t(function(e){return s(h({type:"resize",id:d},e))},[s,d]),O=function(e,n,r){var d=i(!1),a=d[0],u=d[1],s=i({initX:0,initY:0,mouseDownX:0,mouseDownY:0}),c=s[0],w=s[1],h=t(function(i){i.clientX&&i.preventDefault();var t=i.clientX?i.clientX:i.changedTouches[0].clientX,o=i.clientY?i.clientY:i.changedTouches[0].clientY;w({initX:e,initY:n,mouseDownX:t,mouseDownY:o}),u(!0)},[e,n,u,w]);return o(function(){var e=function(e){if(a){var n=c.initX,i=c.mouseDownX,t=c.initY,o=c.mouseDownY,d=e.clientX?e.clientX:e.changedTouches[0].clientX,u=e.clientY?e.clientY:e.changedTouches[0].clientY;r({x:n+(d-i),y:t+(u-o)})}};return window.addEventListener("mousemove",e,{passive:!0}),window.addEventListener("touchmove",e,{passive:!0}),function(){window.removeEventListener("mousemove",e),window.removeEventListener("touchmove",e)}},[c,a,r]),o(function(){var e=function(){u(!1)};return window.addEventListener("mouseup",e),window.addEventListener("touchend",e),function(){window.removeEventListener("mouseup",e),window.removeEventListener("touchend",e)}},[u]),h}(b,I,L),Z=function(e,n,r,d,a){var u=i(!1),s=u[0],c=u[1],w=i({initX:0,initY:0,initWidth:0,initHeight:0,mouseDownX:0,mouseDownY:0}),h=w[0],l=w[1],m=t(function(i){i.clientX&&i.preventDefault();var t=i.clientX?i.clientX:i.changedTouches[0].clientX,o=i.clientY?i.clientY:i.changedTouches[0].clientY;l({initX:e,initY:n,initWidth:r,initHeight:d,mouseDownX:t,mouseDownY:o}),c(!0)},[r,d,c,l,e,n]);return o(function(){var e=function(e){if(s){var n=h.initX,i=h.initY,t=h.initWidth,o=h.mouseDownX,r=h.initHeight,d=h.mouseDownY,u=e.clientX?e.clientX:e.changedTouches[0].clientX,c=e.clientY?e.clientY:e.changedTouches[0].clientY;return a({x:n,y:i,width:t+(u-o),height:r+(c-d)})}};return window.addEventListener("mousemove",e,{passive:!0}),window.addEventListener("touchmove",e,{passive:!0}),function(){window.removeEventListener("mousemove",e),window.removeEventListener("touchmove",e)}},[h,s,a]),o(function(){var e=function(){c(!1)};return window.addEventListener("mouseup",e),window.addEventListener("touchend",e),function(){window.removeEventListener("mouseup",e),window.removeEventListener("touchend",e)}},[c]),m}(b,I,X,S,D),j=a(function(){return n("div",{className:"ant-design-draggable-modal-title",onTouchStart:O,onMouseDown:O,onClick:E},f)},[O,E,f]);return n(w,h({wrapClassName:"ant-design-draggable-modal",style:Y,width:X,destroyOnClose:!0,mask:!1,maskClosable:!1,zIndex:z,title:j,visible:c},g),l,n(m,{onTouchStart:Z,onMouseDown:Z}))});f.displayName="DraggableModalInner";var g=function(){return{width:window.innerWidth||0,height:window.innerHeight||0}},x=function(e,n,i){return Math.max(e,Math.min(n,i))},p=function(e,n){return Object.assign.apply(Object,function(){for(var e=0,n=0,i=arguments.length;n<i;n++)e+=arguments[n].length;var t=Array(e),o=0;for(n=0;n<i;n++)for(var r=arguments[n],d=0,a=r.length;d<a;d++,o++)t[o]=r[d];return t}([{}],Object.keys(e).map(function(i){var t;return(t={})[i]=n(e[i]),t})))},y={maxZIndex:0,windowSize:g(),modals:{}},z={x:0,y:0,width:800,height:800,zIndex:0,visible:!1},b=function(e,n){return e.modals[n]||z},I=function(e,n){return b(e,n).zIndex===e.maxZIndex?e.maxZIndex:e.maxZIndex+1},X=function(e,n,i,t,o,r){var d=n-r;return{x:x(0,e-o,i),y:x(0,d,t)}},S=function(e,n,i,t,o,r){var d=n-t;return{width:x(200,e-i,o),height:x(200,d,r)}},Y=function(e,n){var i,t,o,r,d,a;switch(n.type){case"resize":var u=S(e.windowSize.width,e.windowSize.height,n.x,n.y,n.width,n.height);return h(h({},e),{maxZIndex:I(e,n.id),modals:h(h({},e.modals),(i={},i[n.id]=h(h(h({},e.modals[n.id]),u),{zIndex:I(e,n.id)}),i))});case"drag":return h(h({},e),{maxZIndex:I(e,n.id),modals:h(h({},e.modals),(t={},t[n.id]=h(h(h({},e.modals[n.id]),X(e.windowSize.width,e.windowSize.height,n.x,n.y,e.modals[n.id].width,e.modals[n.id].height)),{zIndex:I(e,n.id)}),t))});case"show":var s=e.modals[n.id],c=e.windowSize.width/10,w=X(e.windowSize.width,e.windowSize.height,c,50,s.width,s.height),l=S(e.windowSize.width,e.windowSize.height,w.x,w.y,s.width,s.height);return h(h({},e),{maxZIndex:e.maxZIndex+1,modals:h(h({},e.modals),(o={},o[n.id]=h(h(h(h({},s),w),l),{zIndex:e.maxZIndex+1,visible:!0}),o))});case"focus":var m=e.modals[n.id];return h(h({},e),{maxZIndex:e.maxZIndex+1,modals:h(h({},e.modals),(r={},r[n.id]=h(h({},m),{zIndex:e.maxZIndex+1}),r))});case"hide":var v=e.modals[n.id];return h(h({},e),{modals:h(h({},e.modals),(d={},d[n.id]=h(h({},v),{visible:!1}),d))});case"mount":return h(h({},e),{maxZIndex:e.maxZIndex+1,modals:h(h({},e.modals),(a={},a[n.id]=h(h({},z),{x:e.windowSize.width/2-z.width/2,y:e.windowSize.height/2-z.height/2,zIndex:e.maxZIndex+1}),a))});case"unmount":var f=h({},e.modals);return delete f[n.id],h(h({},e),{modals:f});case"windowResize":return h(h({},e),{windowSize:n.size,modals:p(e.modals,function(n){if(!n.visible)return n;var i=X(e.windowSize.width,e.windowSize.height,n.x,n.y,n.width,n.height),t=S(e.windowSize.width,e.windowSize.height,i.x,i.y,n.width,n.height);return h(h(h({},n),i),t)})});default:throw new Error}},E=function(e){var i=c(),t=u(l);if(!t)throw new Error("No Provider");var o=t.dispatch,r=t.state,d=b(r,i);return n(f,h({id:i,dispatch:o,modalState:d},e))},L=function(e){var i=e.children,t=s(Y,y),r=t[0],d=t[1];return o(function(){if("object"==typeof window){var e=function(){return d({type:"windowResize",size:g()})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}},[d]),n(l.Provider,{value:{state:r,dispatch:d}},i)};export{E as DraggableModal,l as DraggableModalContext,L as DraggableModalProvider};
//# sourceMappingURL=index.es.js.map
