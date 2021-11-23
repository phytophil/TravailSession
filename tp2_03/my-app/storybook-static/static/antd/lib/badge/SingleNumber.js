"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=SingleNumber;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),React=_interopRequireWildcard(require("react")),_classnames=_interopRequireDefault(require("classnames"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}function UnitNumber(_ref){var style,prefixCls=_ref.prefixCls,value=_ref.value,current=_ref.current,_ref$offset=_ref.offset,offset=void 0===_ref$offset?0:_ref$offset;return offset&&(style={position:"absolute",top:"".concat(offset,"00%"),left:0}),React.createElement("span",{style:style,className:(0,_classnames.default)("".concat(prefixCls,"-only-unit"),{current:current})},value)}function getOffset(start,end,unit){for(var index=start,offset=0;(index+10)%10!==end;)index+=unit,offset+=unit;return offset}function SingleNumber(props){var unitNodes,offsetStyle,prefixCls=props.prefixCls,originCount=props.count,originValue=props.value,value=Number(originValue),count=Math.abs(originCount),_React$useState=React.useState(value),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),prevValue=_React$useState2[0],setPrevValue=_React$useState2[1],_React$useState3=React.useState(count),_React$useState4=(0,_slicedToArray2.default)(_React$useState3,2),prevCount=_React$useState4[0],setPrevCount=_React$useState4[1],onTransitionEnd=function onTransitionEnd(){setPrevValue(value),setPrevCount(count)};if(React.useEffect((function(){var timeout=setTimeout((function(){onTransitionEnd()}),1e3);return function(){clearTimeout(timeout)}}),[value]),prevValue===value||Number.isNaN(value)||Number.isNaN(prevValue))unitNodes=[React.createElement(UnitNumber,(0,_extends2.default)({},props,{key:value,current:!0}))],offsetStyle={transition:"none"};else{unitNodes=[];for(var end=value+10,unitNumberList=[],index=value;index<=end;index+=1)unitNumberList.push(index);var prevIndex=unitNumberList.findIndex((function(n){return n%10===prevValue}));unitNodes=unitNumberList.map((function(n,index){var singleUnit=n%10;return React.createElement(UnitNumber,(0,_extends2.default)({},props,{key:n,value:singleUnit,offset:index-prevIndex,current:index===prevIndex}))})),offsetStyle={transform:"translateY(".concat(-getOffset(prevValue,value,prevCount<count?1:-1),"00%)")}}return React.createElement("span",{className:"".concat(prefixCls,"-only"),style:offsetStyle,onTransitionEnd:onTransitionEnd},unitNodes)}