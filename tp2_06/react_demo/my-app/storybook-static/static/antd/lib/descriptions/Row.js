"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),React=_interopRequireWildcard(require("react")),_Cell=_interopRequireDefault(require("./Cell")),_=require(".");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}function renderCells(items,_ref,_ref2){var colon=_ref.colon,prefixCls=_ref.prefixCls,bordered=_ref.bordered,component=_ref2.component,type=_ref2.type,showLabel=_ref2.showLabel,showContent=_ref2.showContent,rootLabelStyle=_ref2.labelStyle,rootContentStyle=_ref2.contentStyle;return items.map((function(_ref3,index){var _ref3$props=_ref3.props,label=_ref3$props.label,children=_ref3$props.children,_ref3$props$prefixCls=_ref3$props.prefixCls,itemPrefixCls=void 0===_ref3$props$prefixCls?prefixCls:_ref3$props$prefixCls,className=_ref3$props.className,style=_ref3$props.style,labelStyle=_ref3$props.labelStyle,contentStyle=_ref3$props.contentStyle,_ref3$props$span=_ref3$props.span,span=void 0===_ref3$props$span?1:_ref3$props$span,key=_ref3.key;return"string"==typeof component?React.createElement(_Cell.default,{key:"".concat(type,"-").concat(key||index),className:className,style:style,labelStyle:(0,_extends2.default)((0,_extends2.default)({},rootLabelStyle),labelStyle),contentStyle:(0,_extends2.default)((0,_extends2.default)({},rootContentStyle),contentStyle),span:span,colon:colon,component:component,itemPrefixCls:itemPrefixCls,bordered:bordered,label:showLabel?label:null,content:showContent?children:null}):[React.createElement(_Cell.default,{key:"label-".concat(key||index),className:className,style:(0,_extends2.default)((0,_extends2.default)((0,_extends2.default)({},rootLabelStyle),style),labelStyle),span:1,colon:colon,component:component[0],itemPrefixCls:itemPrefixCls,bordered:bordered,label:label}),React.createElement(_Cell.default,{key:"content-".concat(key||index),className:className,style:(0,_extends2.default)((0,_extends2.default)((0,_extends2.default)({},rootContentStyle),style),contentStyle),span:2*span-1,component:component[1],itemPrefixCls:itemPrefixCls,bordered:bordered,content:children})]}))}var Row=function Row(props){var descContext=React.useContext(_.DescriptionsContext),prefixCls=props.prefixCls,vertical=props.vertical,row=props.row,index=props.index,bordered=props.bordered;return vertical?React.createElement(React.Fragment,null,React.createElement("tr",{key:"label-".concat(index),className:"".concat(prefixCls,"-row")},renderCells(row,props,(0,_extends2.default)({component:"th",type:"label",showLabel:!0},descContext))),React.createElement("tr",{key:"content-".concat(index),className:"".concat(prefixCls,"-row")},renderCells(row,props,(0,_extends2.default)({component:"td",type:"content",showContent:!0},descContext)))):React.createElement("tr",{key:index,className:"".concat(prefixCls,"-row")},renderCells(row,props,(0,_extends2.default)({component:bordered?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},descContext)))},_default=Row;exports.default=_default;