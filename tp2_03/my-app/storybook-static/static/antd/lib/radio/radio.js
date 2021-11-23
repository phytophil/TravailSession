"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),React=_interopRequireWildcard(require("react")),_rcCheckbox=_interopRequireDefault(require("rc-checkbox")),_classnames=_interopRequireDefault(require("classnames")),_ref=require("rc-util/lib/ref"),_configProvider=require("../config-provider"),_context=_interopRequireDefault(require("./context")),_devWarning=_interopRequireDefault(require("../_util/devWarning"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},InternalRadio=function InternalRadio(props,ref){var _classNames,context=React.useContext(_context.default),_React$useContext=React.useContext(_configProvider.ConfigContext),getPrefixCls=_React$useContext.getPrefixCls,direction=_React$useContext.direction,innerRef=React.useRef(),mergedRef=(0,_ref.composeRef)(ref,innerRef);React.useEffect((function(){(0,_devWarning.default)(!("optionType"in props),"Radio","`optionType` is only support in Radio.Group.")}),[]);var customizePrefixCls=props.prefixCls,className=props.className,children=props.children,style=props.style,restProps=__rest(props,["prefixCls","className","children","style"]),prefixCls=getPrefixCls("radio",customizePrefixCls),radioProps=(0,_extends2.default)({},restProps);context&&(radioProps.name=context.name,radioProps.onChange=function onChange(e){var _a,_b;null===(_a=props.onChange)||void 0===_a||_a.call(props,e),null===(_b=null==context?void 0:context.onChange)||void 0===_b||_b.call(context,e)},radioProps.checked=props.value===context.value,radioProps.disabled=props.disabled||context.disabled);var wrapperClassString=(0,_classnames.default)("".concat(prefixCls,"-wrapper"),(_classNames={},(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-wrapper-checked"),radioProps.checked),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-wrapper-disabled"),radioProps.disabled),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-wrapper-rtl"),"rtl"===direction),_classNames),className);return React.createElement("label",{className:wrapperClassString,style:style,onMouseEnter:props.onMouseEnter,onMouseLeave:props.onMouseLeave},React.createElement(_rcCheckbox.default,(0,_extends2.default)({},radioProps,{prefixCls:prefixCls,ref:mergedRef})),void 0!==children?React.createElement("span",null,children):null)},Radio=React.forwardRef(InternalRadio);Radio.displayName="Radio",Radio.defaultProps={type:"radio"};var _default=Radio;exports.default=_default;