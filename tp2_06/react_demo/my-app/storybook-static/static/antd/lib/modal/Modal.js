"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),React=_interopRequireWildcard(require("react")),_rcDialog=_interopRequireDefault(require("rc-dialog")),_classnames=_interopRequireDefault(require("classnames")),_CloseOutlined=_interopRequireDefault(require("@ant-design/icons/CloseOutlined")),_locale=require("./locale"),_button=_interopRequireDefault(require("../button")),_button2=require("../button/button"),_LocaleReceiver=_interopRequireDefault(require("../locale-provider/LocaleReceiver")),_configProvider=require("../config-provider"),_styleChecker=require("../_util/styleChecker"),_motion=require("../_util/motion");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var mousePosition,__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},getClickPosition=function getClickPosition(e){mousePosition={x:e.pageX,y:e.pageY},setTimeout((function(){mousePosition=null}),100)};(0,_styleChecker.canUseDocElement)()&&document.documentElement.addEventListener("click",getClickPosition,!0);var Modal=function Modal(props){var _classNames,_React$useContext=React.useContext(_configProvider.ConfigContext),getContextPopupContainer=_React$useContext.getPopupContainer,getPrefixCls=_React$useContext.getPrefixCls,direction=_React$useContext.direction,handleCancel=function handleCancel(e){var onCancel=props.onCancel;null==onCancel||onCancel(e)},handleOk=function handleOk(e){var onOk=props.onOk;null==onOk||onOk(e)},renderFooter=function renderFooter(locale){var okText=props.okText,okType=props.okType,cancelText=props.cancelText,confirmLoading=props.confirmLoading;return React.createElement(React.Fragment,null,React.createElement(_button.default,(0,_extends2.default)({onClick:handleCancel},props.cancelButtonProps),cancelText||locale.cancelText),React.createElement(_button.default,(0,_extends2.default)({},(0,_button2.convertLegacyProps)(okType),{loading:confirmLoading,onClick:handleOk},props.okButtonProps),okText||locale.okText))},customizePrefixCls=props.prefixCls,footer=props.footer,visible=props.visible,wrapClassName=props.wrapClassName,centered=props.centered,getContainer=props.getContainer,closeIcon=props.closeIcon,_props$focusTriggerAf=props.focusTriggerAfterClose,focusTriggerAfterClose=void 0===_props$focusTriggerAf||_props$focusTriggerAf,restProps=__rest(props,["prefixCls","footer","visible","wrapClassName","centered","getContainer","closeIcon","focusTriggerAfterClose"]),prefixCls=getPrefixCls("modal",customizePrefixCls),rootPrefixCls=getPrefixCls(),defaultFooter=React.createElement(_LocaleReceiver.default,{componentName:"Modal",defaultLocale:(0,_locale.getConfirmLocale)()},renderFooter),closeIconToRender=React.createElement("span",{className:"".concat(prefixCls,"-close-x")},closeIcon||React.createElement(_CloseOutlined.default,{className:"".concat(prefixCls,"-close-icon")})),wrapClassNameExtended=(0,_classnames.default)(wrapClassName,(_classNames={},(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-centered"),!!centered),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-wrap-rtl"),"rtl"===direction),_classNames));return React.createElement(_rcDialog.default,(0,_extends2.default)({},restProps,{getContainer:void 0===getContainer?getContextPopupContainer:getContainer,prefixCls:prefixCls,wrapClassName:wrapClassNameExtended,footer:void 0===footer?defaultFooter:footer,visible:visible,mousePosition:mousePosition,onClose:handleCancel,closeIcon:closeIconToRender,focusTriggerAfterClose:focusTriggerAfterClose,transitionName:(0,_motion.getTransitionName)(rootPrefixCls,"zoom",props.transitionName),maskTransitionName:(0,_motion.getTransitionName)(rootPrefixCls,"fade",props.maskTransitionName)}))};Modal.defaultProps={width:520,confirmLoading:!1,visible:!1,okType:"primary"};var _default=Modal;exports.default=_default;