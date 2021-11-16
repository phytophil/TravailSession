"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),React=_interopRequireWildcard(require("react")),_classnames=_interopRequireDefault(require("classnames")),_rcCheckbox=_interopRequireDefault(require("rc-checkbox")),_Group=require("./Group"),_configProvider=require("../config-provider"),_devWarning=_interopRequireDefault(require("../_util/devWarning"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},InternalCheckbox=function InternalCheckbox(_a,ref){var _classNames,customizePrefixCls=_a.prefixCls,className=_a.className,children=_a.children,_a$indeterminate=_a.indeterminate,indeterminate=void 0!==_a$indeterminate&&_a$indeterminate,style=_a.style,onMouseEnter=_a.onMouseEnter,onMouseLeave=_a.onMouseLeave,_a$skipGroup=_a.skipGroup,skipGroup=void 0!==_a$skipGroup&&_a$skipGroup,restProps=__rest(_a,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),_React$useContext=React.useContext(_configProvider.ConfigContext),getPrefixCls=_React$useContext.getPrefixCls,direction=_React$useContext.direction,checkboxGroup=React.useContext(_Group.GroupContext),prevValue=React.useRef(restProps.value);React.useEffect((function(){null==checkboxGroup||checkboxGroup.registerValue(restProps.value),(0,_devWarning.default)("checked"in restProps||!!checkboxGroup||!("value"in restProps),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),React.useEffect((function(){if(!skipGroup)return restProps.value!==prevValue.current&&(null==checkboxGroup||checkboxGroup.cancelValue(prevValue.current),null==checkboxGroup||checkboxGroup.registerValue(restProps.value)),function(){return null==checkboxGroup?void 0:checkboxGroup.cancelValue(restProps.value)}}),[restProps.value]);var prefixCls=getPrefixCls("checkbox",customizePrefixCls),checkboxProps=(0,_extends2.default)({},restProps);checkboxGroup&&!skipGroup&&(checkboxProps.onChange=function(){restProps.onChange&&restProps.onChange.apply(restProps,arguments),checkboxGroup.toggleOption&&checkboxGroup.toggleOption({label:children,value:restProps.value})},checkboxProps.name=checkboxGroup.name,checkboxProps.checked=-1!==checkboxGroup.value.indexOf(restProps.value),checkboxProps.disabled=restProps.disabled||checkboxGroup.disabled);var classString=(0,_classnames.default)((_classNames={},(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-wrapper"),!0),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-rtl"),"rtl"===direction),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-wrapper-checked"),checkboxProps.checked),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-wrapper-disabled"),checkboxProps.disabled),_classNames),className),checkboxClass=(0,_classnames.default)((0,_defineProperty2.default)({},"".concat(prefixCls,"-indeterminate"),indeterminate));return React.createElement("label",{className:classString,style:style,onMouseEnter:onMouseEnter,onMouseLeave:onMouseLeave},React.createElement(_rcCheckbox.default,(0,_extends2.default)({},checkboxProps,{prefixCls:prefixCls,className:checkboxClass,ref:ref})),void 0!==children&&React.createElement("span",null,children))},Checkbox=React.forwardRef(InternalCheckbox);Checkbox.displayName="Checkbox";var _default=Checkbox;exports.default=_default;