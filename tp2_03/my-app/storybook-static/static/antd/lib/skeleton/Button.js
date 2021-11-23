"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),React=_interopRequireWildcard(require("react")),_omit=_interopRequireDefault(require("rc-util/lib/omit")),_classnames=_interopRequireDefault(require("classnames")),_Element=_interopRequireDefault(require("./Element")),_configProvider=require("../config-provider");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var SkeletonButton=function SkeletonButton(props){var renderSkeletonButton=function renderSkeletonButton(_ref){var getPrefixCls=_ref.getPrefixCls,customizePrefixCls=props.prefixCls,className=props.className,active=props.active,prefixCls=getPrefixCls("skeleton",customizePrefixCls),otherProps=(0,_omit.default)(props,["prefixCls"]),cls=(0,_classnames.default)(prefixCls,"".concat(prefixCls,"-element"),(0,_defineProperty2.default)({},"".concat(prefixCls,"-active"),active),className);return React.createElement("div",{className:cls},React.createElement(_Element.default,(0,_extends2.default)({prefixCls:"".concat(prefixCls,"-button")},otherProps)))};return React.createElement(_configProvider.ConfigConsumer,null,renderSkeletonButton)};SkeletonButton.defaultProps={size:"default"};var _default=SkeletonButton;exports.default=_default;