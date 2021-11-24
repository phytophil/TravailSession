"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),React=_interopRequireWildcard(require("react")),_classnames=_interopRequireDefault(require("classnames")),_configProvider=require("../config-provider");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Divider=function Divider(props){return React.createElement(_configProvider.ConfigConsumer,null,(function(_ref){var _classNames,getPrefixCls=_ref.getPrefixCls,direction=_ref.direction,customizePrefixCls=props.prefixCls,_props$type=props.type,type=void 0===_props$type?"horizontal":_props$type,_props$orientation=props.orientation,orientation=void 0===_props$orientation?"center":_props$orientation,className=props.className,children=props.children,dashed=props.dashed,plain=props.plain,restProps=__rest(props,["prefixCls","type","orientation","className","children","dashed","plain"]),prefixCls=getPrefixCls("divider",customizePrefixCls),orientationPrefix=orientation.length>0?"-".concat(orientation):orientation,hasChildren=!!children,classString=(0,_classnames.default)(prefixCls,"".concat(prefixCls,"-").concat(type),(_classNames={},(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-with-text"),hasChildren),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-with-text").concat(orientationPrefix),hasChildren),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-dashed"),!!dashed),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-plain"),!!plain),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-rtl"),"rtl"===direction),_classNames),className);return React.createElement("div",(0,_extends2.default)({className:classString},restProps,{role:"separator"}),children&&React.createElement("span",{className:"".concat(prefixCls,"-inner-text")},children))}))},_default=Divider;exports.default=_default;