"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),React=_interopRequireWildcard(require("react")),_classnames=_interopRequireDefault(require("classnames")),_Modal=_interopRequireDefault(require("./Modal")),_ActionButton=_interopRequireDefault(require("./ActionButton")),_devWarning=_interopRequireDefault(require("../_util/devWarning")),_configProvider=_interopRequireDefault(require("../config-provider")),_motion=require("../_util/motion");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var ConfirmDialog=function ConfirmDialog(props){var icon=props.icon,onCancel=props.onCancel,onOk=props.onOk,close=props.close,zIndex=props.zIndex,afterClose=props.afterClose,visible=props.visible,keyboard=props.keyboard,centered=props.centered,getContainer=props.getContainer,maskStyle=props.maskStyle,okText=props.okText,okButtonProps=props.okButtonProps,cancelText=props.cancelText,cancelButtonProps=props.cancelButtonProps,direction=props.direction,prefixCls=props.prefixCls,rootPrefixCls=props.rootPrefixCls,bodyStyle=props.bodyStyle,_props$closable=props.closable,closable=void 0!==_props$closable&&_props$closable,closeIcon=props.closeIcon,modalRender=props.modalRender,focusTriggerAfterClose=props.focusTriggerAfterClose;(0,_devWarning.default)(!("string"==typeof icon&&icon.length>2),"Modal","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon,"` at https://ant.design/components/icon"));var okType=props.okType||"primary",contentPrefixCls="".concat(prefixCls,"-confirm"),okCancel=!("okCancel"in props)||props.okCancel,width=props.width||416,style=props.style||{},mask=void 0===props.mask||props.mask,maskClosable=void 0!==props.maskClosable&&props.maskClosable,autoFocusButton=null!==props.autoFocusButton&&(props.autoFocusButton||"ok"),classString=(0,_classnames.default)(contentPrefixCls,"".concat(contentPrefixCls,"-").concat(props.type),(0,_defineProperty2.default)({},"".concat(contentPrefixCls,"-rtl"),"rtl"===direction),props.className),cancelButton=okCancel&&React.createElement(_ActionButton.default,{actionFn:onCancel,closeModal:close,autoFocus:"cancel"===autoFocusButton,buttonProps:cancelButtonProps,prefixCls:"".concat(rootPrefixCls,"-btn")},cancelText);return React.createElement(_Modal.default,{prefixCls:prefixCls,className:classString,wrapClassName:(0,_classnames.default)((0,_defineProperty2.default)({},"".concat(contentPrefixCls,"-centered"),!!props.centered)),onCancel:function onCancel(){return close({triggerCancel:!0})},visible:visible,title:"",footer:"",transitionName:(0,_motion.getTransitionName)(rootPrefixCls,"zoom",props.transitionName),maskTransitionName:(0,_motion.getTransitionName)(rootPrefixCls,"fade",props.maskTransitionName),mask:mask,maskClosable:maskClosable,maskStyle:maskStyle,style:style,width:width,zIndex:zIndex,afterClose:afterClose,keyboard:keyboard,centered:centered,getContainer:getContainer,closable:closable,closeIcon:closeIcon,modalRender:modalRender,focusTriggerAfterClose:focusTriggerAfterClose},React.createElement("div",{className:"".concat(contentPrefixCls,"-body-wrapper")},React.createElement(_configProvider.default,{prefixCls:rootPrefixCls,direction:direction},React.createElement("div",{className:"".concat(contentPrefixCls,"-body"),style:bodyStyle},icon,void 0===props.title?null:React.createElement("span",{className:"".concat(contentPrefixCls,"-title")},props.title),React.createElement("div",{className:"".concat(contentPrefixCls,"-content")},props.content))),React.createElement("div",{className:"".concat(contentPrefixCls,"-btns")},cancelButton,React.createElement(_ActionButton.default,{type:okType,actionFn:onOk,closeModal:close,autoFocus:"ok"===autoFocusButton,buttonProps:okButtonProps,prefixCls:"".concat(rootPrefixCls,"-btn")},okText))))},_default=ConfirmDialog;exports.default=_default;