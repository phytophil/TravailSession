"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=_interopRequireWildcard(require("react")),_padEnd=_interopRequireDefault(require("lodash/padEnd"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var StatisticNumber=function StatisticNumber(props){var valueNode,value=props.value,formatter=props.formatter,precision=props.precision,decimalSeparator=props.decimalSeparator,_props$groupSeparator=props.groupSeparator,groupSeparator=void 0===_props$groupSeparator?"":_props$groupSeparator,prefixCls=props.prefixCls;if("function"==typeof formatter)valueNode=formatter(value);else{var val=String(value),cells=val.match(/^(-?)(\d*)(\.(\d+))?$/);if(cells&&"-"!==val){var negative=cells[1],int=cells[2]||"0",decimal=cells[4]||"";int=int.replace(/\B(?=(\d{3})+(?!\d))/g,groupSeparator),"number"==typeof precision&&(decimal=(0,_padEnd.default)(decimal,precision,"0").slice(0,precision)),decimal&&(decimal="".concat(decimalSeparator).concat(decimal)),valueNode=[React.createElement("span",{key:"int",className:"".concat(prefixCls,"-content-value-int")},negative,int),decimal&&React.createElement("span",{key:"decimal",className:"".concat(prefixCls,"-content-value-decimal")},decimal)]}else valueNode=val}return React.createElement("span",{className:"".concat(prefixCls,"-content-value")},valueNode)},_default=StatisticNumber;exports.default=_default;