"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"ConfigConsumer",{enumerable:!0,get:function get(){return _context.ConfigConsumer}}),Object.defineProperty(exports,"ConfigContext",{enumerable:!0,get:function get(){return _context.ConfigContext}}),exports.default=exports.globalConfig=exports.defaultPrefixCls=exports.configConsumerProps=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),React=_interopRequireWildcard(require("react")),_Context=_interopRequireDefault(require("@ant-design/icons/lib/components/Context")),_rcFieldForm=require("rc-field-form"),_useMemo=_interopRequireDefault(require("rc-util/lib/hooks/useMemo")),_localeProvider=_interopRequireWildcard(require("../locale-provider")),_LocaleReceiver=_interopRequireDefault(require("../locale-provider/LocaleReceiver")),_context=require("./context"),_SizeContext=_interopRequireWildcard(require("./SizeContext")),_message=_interopRequireDefault(require("../message")),_notification=_interopRequireDefault(require("../notification")),_default2=_interopRequireDefault(require("../locale/default"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var configConsumerProps=["getTargetContainer","getPopupContainer","rootPrefixCls","getPrefixCls","renderEmpty","csp","autoInsertSpaceInButton","locale","pageHeader"];exports.configConsumerProps=configConsumerProps;var globalPrefixCls,PASSED_PROPS=["getTargetContainer","getPopupContainer","renderEmpty","pageHeader","input","form"],defaultPrefixCls="ant";exports.defaultPrefixCls=defaultPrefixCls;var setGlobalConfig=function setGlobalConfig(params){void 0!==params.prefixCls&&(globalPrefixCls=params.prefixCls)};function getGlobalPrefixCls(){return globalPrefixCls||defaultPrefixCls}var globalConfig=function globalConfig(){return{getPrefixCls:function getPrefixCls(suffixCls,customizePrefixCls){return customizePrefixCls||(suffixCls?"".concat(getGlobalPrefixCls(),"-").concat(suffixCls):getGlobalPrefixCls())},getRootPrefixCls:function getRootPrefixCls(rootPrefixCls,customizePrefixCls){return rootPrefixCls||(globalPrefixCls||(customizePrefixCls&&customizePrefixCls.includes("-")?customizePrefixCls.replace(/^(.*)-[^-]*$/,"$1"):getGlobalPrefixCls()))}}};exports.globalConfig=globalConfig;var ProviderChildren=function ProviderChildren(props){var _a,_b,children=props.children,csp=props.csp,autoInsertSpaceInButton=props.autoInsertSpaceInButton,form=props.form,locale=props.locale,componentSize=props.componentSize,direction=props.direction,space=props.space,virtual=props.virtual,dropdownMatchSelectWidth=props.dropdownMatchSelectWidth,legacyLocale=props.legacyLocale,parentContext=props.parentContext,iconPrefixCls=props.iconPrefixCls,getPrefixCls=React.useCallback((function(suffixCls,customizePrefixCls){var prefixCls=props.prefixCls;if(customizePrefixCls)return customizePrefixCls;var mergedPrefixCls=prefixCls||parentContext.getPrefixCls("");return suffixCls?"".concat(mergedPrefixCls,"-").concat(suffixCls):mergedPrefixCls}),[parentContext.getPrefixCls,props.prefixCls]),config=(0,_extends2.default)((0,_extends2.default)({},parentContext),{csp:csp,autoInsertSpaceInButton:autoInsertSpaceInButton,locale:locale||legacyLocale,direction:direction,space:space,virtual:virtual,dropdownMatchSelectWidth:dropdownMatchSelectWidth,getPrefixCls:getPrefixCls});PASSED_PROPS.forEach((function(propName){var propValue=props[propName];propValue&&(config[propName]=propValue)}));var memoedConfig=(0,_useMemo.default)((function(){return config}),config,(function(prevConfig,currentConfig){var prevKeys=Object.keys(prevConfig),currentKeys=Object.keys(currentConfig);return prevKeys.length!==currentKeys.length||prevKeys.some((function(key){return prevConfig[key]!==currentConfig[key]}))})),memoIconContextValue=React.useMemo((function(){return{prefixCls:iconPrefixCls,csp:csp}}),[iconPrefixCls]),childNode=children,validateMessages={};return locale&&(validateMessages=(null===(_a=locale.Form)||void 0===_a?void 0:_a.defaultValidateMessages)||(null===(_b=_default2.default.Form)||void 0===_b?void 0:_b.defaultValidateMessages)||{}),form&&form.validateMessages&&(validateMessages=(0,_extends2.default)((0,_extends2.default)({},validateMessages),form.validateMessages)),Object.keys(validateMessages).length>0&&(childNode=React.createElement(_rcFieldForm.FormProvider,{validateMessages:validateMessages},children)),locale&&(childNode=React.createElement(_localeProvider.default,{locale:locale,_ANT_MARK__:_localeProvider.ANT_MARK},childNode)),iconPrefixCls&&(childNode=React.createElement(_Context.default.Provider,{value:memoIconContextValue},childNode)),componentSize&&(childNode=React.createElement(_SizeContext.SizeContextProvider,{size:componentSize},childNode)),React.createElement(_context.ConfigContext.Provider,{value:memoedConfig},childNode)},ConfigProvider=function ConfigProvider(props){return React.useEffect((function(){props.direction&&(_message.default.config({rtl:"rtl"===props.direction}),_notification.default.config({rtl:"rtl"===props.direction}))}),[props.direction]),React.createElement(_LocaleReceiver.default,null,(function(_,__,legacyLocale){return React.createElement(_context.ConfigConsumer,null,(function(context){return React.createElement(ProviderChildren,(0,_extends2.default)({parentContext:context,legacyLocale:legacyLocale},props))}))}))};ConfigProvider.ConfigContext=_context.ConfigContext,ConfigProvider.SizeContext=_SizeContext.default,ConfigProvider.config=setGlobalConfig;var _default=ConfigProvider;exports.default=_default;