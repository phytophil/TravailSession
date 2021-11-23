"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=_interopRequireWildcard(require("react")),_LeftOutlined=_interopRequireDefault(require("@ant-design/icons/LeftOutlined")),_RightOutlined=_interopRequireDefault(require("@ant-design/icons/RightOutlined")),_button=_interopRequireDefault(require("../button"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Operation=function Operation(_ref){var disabled=_ref.disabled,moveToLeft=_ref.moveToLeft,moveToRight=_ref.moveToRight,_ref$leftArrowText=_ref.leftArrowText,leftArrowText=void 0===_ref$leftArrowText?"":_ref$leftArrowText,_ref$rightArrowText=_ref.rightArrowText,rightArrowText=void 0===_ref$rightArrowText?"":_ref$rightArrowText,leftActive=_ref.leftActive,rightActive=_ref.rightActive,className=_ref.className,style=_ref.style,direction=_ref.direction,oneWay=_ref.oneWay;return React.createElement("div",{className:className,style:style},React.createElement(_button.default,{type:"primary",size:"small",disabled:disabled||!rightActive,onClick:moveToRight,icon:"rtl"!==direction?React.createElement(_RightOutlined.default,null):React.createElement(_LeftOutlined.default,null)},rightArrowText),!oneWay&&React.createElement(_button.default,{type:"primary",size:"small",disabled:disabled||!leftActive,onClick:moveToLeft,icon:"rtl"!==direction?React.createElement(_LeftOutlined.default,null):React.createElement(_RightOutlined.default,null)},leftArrowText))},_default=Operation;exports.default=_default;