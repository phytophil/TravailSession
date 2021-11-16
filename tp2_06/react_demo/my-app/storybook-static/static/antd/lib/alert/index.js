"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),React=_interopRequireWildcard(require("react")),_CloseOutlined=_interopRequireDefault(require("@ant-design/icons/CloseOutlined")),_CheckCircleOutlined=_interopRequireDefault(require("@ant-design/icons/CheckCircleOutlined")),_ExclamationCircleOutlined=_interopRequireDefault(require("@ant-design/icons/ExclamationCircleOutlined")),_InfoCircleOutlined=_interopRequireDefault(require("@ant-design/icons/InfoCircleOutlined")),_CloseCircleOutlined=_interopRequireDefault(require("@ant-design/icons/CloseCircleOutlined")),_CheckCircleFilled=_interopRequireDefault(require("@ant-design/icons/CheckCircleFilled")),_ExclamationCircleFilled=_interopRequireDefault(require("@ant-design/icons/ExclamationCircleFilled")),_InfoCircleFilled=_interopRequireDefault(require("@ant-design/icons/InfoCircleFilled")),_CloseCircleFilled=_interopRequireDefault(require("@ant-design/icons/CloseCircleFilled")),_rcMotion=_interopRequireDefault(require("rc-motion")),_classnames=_interopRequireDefault(require("classnames")),_configProvider=require("../config-provider"),_getDataOrAriaProps=_interopRequireDefault(require("../_util/getDataOrAriaProps")),_ErrorBoundary=_interopRequireDefault(require("./ErrorBoundary")),_reactNode=require("../_util/reactNode");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},iconMapFilled={success:_CheckCircleFilled.default,info:_InfoCircleFilled.default,error:_CloseCircleFilled.default,warning:_ExclamationCircleFilled.default},iconMapOutlined={success:_CheckCircleOutlined.default,info:_InfoCircleOutlined.default,error:_CloseCircleOutlined.default,warning:_ExclamationCircleOutlined.default},Alert=function Alert(_a){var _classNames2,description=_a.description,customizePrefixCls=_a.prefixCls,message=_a.message,banner=_a.banner,_a$className=_a.className,className=void 0===_a$className?"":_a$className,style=_a.style,onMouseEnter=_a.onMouseEnter,onMouseLeave=_a.onMouseLeave,onClick=_a.onClick,afterClose=_a.afterClose,showIcon=_a.showIcon,closable=_a.closable,closeText=_a.closeText,action=_a.action,props=__rest(_a,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),_React$useState=React.useState(!1),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),closed=_React$useState2[0],setClosed=_React$useState2[1],ref=React.useRef(),_React$useContext=React.useContext(_configProvider.ConfigContext),getPrefixCls=_React$useContext.getPrefixCls,direction=_React$useContext.direction,prefixCls=getPrefixCls("alert",customizePrefixCls),handleClose=function handleClose(e){var _a;setClosed(!0),null===(_a=props.onClose)||void 0===_a||_a.call(props,e)},isClosable=!!closeText||closable,type=function getType(){var type=props.type;return void 0!==type?type:banner?"warning":"info"}(),isShowIcon=!(!banner||void 0!==showIcon)||showIcon,alertCls=(0,_classnames.default)(prefixCls,"".concat(prefixCls,"-").concat(type),(_classNames2={},(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-with-description"),!!description),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-no-icon"),!isShowIcon),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-banner"),!!banner),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-rtl"),"rtl"===direction),_classNames2),className),dataOrAriaProps=(0,_getDataOrAriaProps.default)(props);return React.createElement(_rcMotion.default,{visible:!closed,motionName:"".concat(prefixCls,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function onLeaveStart(node){return{maxHeight:node.offsetHeight}},onLeaveEnd:afterClose},(function(_ref){var motionClassName=_ref.className,motionStyle=_ref.style;return React.createElement("div",(0,_extends2.default)({ref:ref,"data-show":!closed,className:(0,_classnames.default)(alertCls,motionClassName),style:(0,_extends2.default)((0,_extends2.default)({},style),motionStyle),onMouseEnter:onMouseEnter,onMouseLeave:onMouseLeave,onClick:onClick,role:"alert"},dataOrAriaProps),isShowIcon?function renderIconNode(){var icon=props.icon,iconType=(description?iconMapOutlined:iconMapFilled)[type]||null;return icon?(0,_reactNode.replaceElement)(icon,React.createElement("span",{className:"".concat(prefixCls,"-icon")},icon),(function(){return{className:(0,_classnames.default)("".concat(prefixCls,"-icon"),(0,_defineProperty2.default)({},icon.props.className,icon.props.className))}})):React.createElement(iconType,{className:"".concat(prefixCls,"-icon")})}():null,React.createElement("div",{className:"".concat(prefixCls,"-content")},React.createElement("div",{className:"".concat(prefixCls,"-message")},message),React.createElement("div",{className:"".concat(prefixCls,"-description")},description)),action?React.createElement("div",{className:"".concat(prefixCls,"-action")},action):null,function renderCloseIcon(){return isClosable?React.createElement("button",{type:"button",onClick:handleClose,className:"".concat(prefixCls,"-close-icon"),tabIndex:0},closeText?React.createElement("span",{className:"".concat(prefixCls,"-close-text")},closeText):React.createElement(_CloseOutlined.default,null)):null}())}))};Alert.ErrorBoundary=_ErrorBoundary.default;var _default=Alert;exports.default=_default;