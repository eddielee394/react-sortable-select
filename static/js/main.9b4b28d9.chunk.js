(this["webpackJsonpreact-sortable-select-example"]=this["webpackJsonpreact-sortable-select-example"]||[]).push([[0],{64:function(e,n,a){e.exports=a(74)},74:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),i=a(7),s=a.n(i),c=a(26),o=a(46),l=a(57),p=a(115),u=a(114),d=a(111),m=a(107),f=a(54),g=a(112),b=a(109),h=a(3),v=a(45),O=a(56),x=a(52),j=Object(m.a)((function(e){return{root:{"& .fuse-chip-select__input":{color:e.palette.text.primary},"&.standard":{"& $placeholder":{},"& $valueContainer":{paddingTop:4}},"&.filled":{"& $placeholder":{left:12},"& $valueContainer":{paddingTop:24,paddingLeft:12},"& $chip":{border:"1px solid rgba(0, 0, 0, 0.12)"}},"&.outlined":{"& $placeholder":{left:12},"& $valueContainer":{paddingLeft:12,paddingTop:12}}},input:{display:"flex",padding:0,height:"auto"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",paddingBottom:4,paddingTop:12,minHeight:40},chip:{margin:"4px 4px 4px 0"},chipFocused:{backgroundColor:Object(f.emphasize)("light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],.08)},noOptionsMessage:{padding:"".concat(e.spacing(),"px ").concat(e.spacing(2),"px")},singleValue:{fontSize:16},placeholder:{position:"absolute",left:0,fontSize:16,margin:0},paper:{position:"absolute",zIndex:2,marginTop:e.spacing(),left:0,right:0},divider:{height:e.spacing(2)}}}));function P(e){var n=e.inputRef,a=Object(l.a)(e,["inputRef"]);return r.a.createElement("div",Object.assign({ref:n},a))}function E(e){var n=e.selectProps.onDragEnd;return r.a.createElement(v.a,{onDragEnd:n},r.a.createElement(v.c,{droppableId:"valueContainer",type:"list",direction:"horizontal"},(function(n){return r.a.createElement("div",{ref:n.innerRef,className:e.classes.valueContainer},e.children)})))}function C(e){var n=function(e){e.preventDefault(),e.stopPropagation()};return r.a.createElement(v.b,{draggableId:e.children,type:"list",index:e.index},(function(a,t){return r.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps),r.a.createElement(p.a,Object.assign({tabIndex:-1,label:e.children,className:Object(h.a)(e.classes.chip,{[e.classes.chipFocused]:e.isFocused},e.data.class),onDelete:function(n){e.removeProps.onClick(),e.removeProps.onMouseDown(n)}},e.data.props,{onMouseDown:n,clickable:t.isDragging},a.dragHandleProps)))}))}var y={Control:function(e){var n=j();return r.a.createElement(g.a,Object.assign({fullWidth:!0,className:Object(h.a)(n.root,e.selectProps.textFieldProps.variant),required:e.selectProps.required,InputProps:{inputComponent:P,inputProps:Object(c.a)({className:n.input,inputRef:e.innerRef,children:e.children},e.innerProps)}},e.selectProps.textFieldProps))},Menu:function(e){var n=j();return r.a.createElement(d.a,Object.assign({square:!0,className:n.paper},e.innerProps),e.children)},MultiValue:function(e){var n=j();return e.selectProps.isSortable?r.a.createElement(C,Object.assign({classes:n},e)):r.a.createElement(p.a,{tabIndex:-1,label:e.children,className:Object(h.a)(n.chip,{[n.chipFocused]:e.isFocused},e.data.class),onDelete:function(n){e.removeProps.onClick(),e.removeProps.onMouseDown(n)}})},NoOptionsMessage:function(e){var n=j();return r.a.createElement(b.a,Object.assign({color:"textSecondary",className:n.noOptionsMessage},e.innerProps),e.children)},Option:function(e){return r.a.createElement(u.a,Object.assign({buttonRef:e.innerRef,selected:e.isFocused,component:"div",style:{fontWeight:e.isSelected?600:400}},e.innerProps),e.children)},Placeholder:function(e){var n=j();return r.a.createElement(b.a,Object.assign({color:"textSecondary",className:n.placeholder},e.innerProps),e.children)},SingleValue:function(e){var n=j();return r.a.createElement("div",Object.assign({className:n.singleValue},e.innerProps),e.children)},ValueContainer:function(e){var n=j();return e.selectProps.isSortable?r.a.createElement(E,Object.assign({classes:n},e)):r.a.createElement("div",{className:n.valueContainer},e.children)}};for(var N=r.a.memo((function(e){var n=function(n){null===n&&(n=[]),e.onChange&&e.onChange(n)};return"fixed"===e.variant?r.a.createElement(O.a,Object.assign({classNamePrefix:"fuse-chip-select"},e,{components:y,onChange:n})):r.a.createElement(x.a,Object.assign({classNamePrefix:"fuse-chip-select"},e,{components:y,onChange:n}))})),S={container:{margin:20}},D=[],I=1;I<=10;I++)D.push({id:I,label:"Item ".concat(I),class:"bg-red",order:I});var F=function(){var e=Object(t.useState)(),n=Object(o.a)(e,2),a=n[0],i=(n[1],Object(t.useState)()),s=Object(o.a)(i,2),l=s[0],p=s[1];return r.a.createElement("div",{style:S.container},r.a.createElement(N,{className:"",name:"itemValues",value:a,onChange:function(e,n){return function(e,n){p(n.map((function(e,n){return Object(c.a)(Object(c.a)({},e),{},{order:n+1})})))}(0,e)},placeholder:"Select multiple items",textFieldProps:{label:"items",variant:"outlined",InputLabelProps:{shrink:!0}},options:D.map((function(e){return{value:e.id,label:e.label,class:e.class}})),isMulti:!0,isSortable:!0,onDragEnd:function(e){if(e.destination){var n=function(e,n,a){var t=Array.from(e),r=t.splice(n,1),i=Object(o.a)(r,1)[0];return t.splice(a,0,i),t}(l,e.source.index,e.destination.index);p(n.map((function(e,n){return Object(c.a)(Object(c.a)({},e),{},{order:n+1})})))}},fullWidth:!0,variant:"fixed"}))};s.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.9b4b28d9.chunk.js.map