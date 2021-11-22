"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof3=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof")),React=_interopRequireWildcard(require("react")),_devWarning=_interopRequireDefault(require("../_util/devWarning")),_Base=_interopRequireDefault(require("./Base"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof3(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Link=function Link(_a,ref){var ellipsis=_a.ellipsis,rel=_a.rel,restProps=__rest(_a,["ellipsis","rel"]);(0,_devWarning.default)("object"!==(0,_typeof2.default)(ellipsis),"Typography.Link","`ellipsis` only supports boolean value.");var baseRef=React.useRef(null);React.useImperativeHandle(ref,(function(){var _a;return null===(_a=baseRef.current)||void 0===_a?void 0:_a.contentRef.current}));var mergedProps=(0,_extends2.default)((0,_extends2.default)({},restProps),{rel:void 0===rel&&"_blank"===restProps.target?"noopener noreferrer":rel});return delete mergedProps.navigate,React.createElement(_Base.default,(0,_extends2.default)({},mergedProps,{ref:baseRef,ellipsis:!!ellipsis,component:"a"}))},_default=React.forwardRef(Link);exports.default=_default;