"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=generateRangePicker;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_createSuper2=_interopRequireDefault(require("@babel/runtime/helpers/createSuper")),React=_interopRequireWildcard(require("react")),_classnames=_interopRequireDefault(require("classnames")),_CalendarOutlined=_interopRequireDefault(require("@ant-design/icons/CalendarOutlined")),_ClockCircleOutlined=_interopRequireDefault(require("@ant-design/icons/ClockCircleOutlined")),_CloseCircleFilled=_interopRequireDefault(require("@ant-design/icons/CloseCircleFilled")),_SwapRightOutlined=_interopRequireDefault(require("@ant-design/icons/SwapRightOutlined")),_rcPicker=require("rc-picker"),_en_US=_interopRequireDefault(require("../locale/en_US")),_configProvider=require("../../config-provider"),_SizeContext=_interopRequireDefault(require("../../config-provider/SizeContext")),_LocaleReceiver=_interopRequireDefault(require("../../locale-provider/LocaleReceiver")),_util=require("../util"),_=require(".");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function generateRangePicker(generateConfig){var RangePicker=function(_React$Component){(0,_inherits2.default)(RangePicker,_React$Component);var _super=(0,_createSuper2.default)(RangePicker);function RangePicker(){var _this;return(0,_classCallCheck2.default)(this,RangePicker),(_this=_super.apply(this,arguments)).pickerRef=React.createRef(),_this.focus=function(){_this.pickerRef.current&&_this.pickerRef.current.focus()},_this.blur=function(){_this.pickerRef.current&&_this.pickerRef.current.blur()},_this.renderPicker=function(contextLocale){var locale=(0,_extends2.default)((0,_extends2.default)({},contextLocale),_this.props.locale),_this$context=_this.context,getPrefixCls=_this$context.getPrefixCls,direction=_this$context.direction,getPopupContainer=_this$context.getPopupContainer,_a=_this.props,customizePrefixCls=_a.prefixCls,customGetPopupContainer=_a.getPopupContainer,className=_a.className,customizeSize=_a.size,_a$bordered=_a.bordered,bordered=void 0===_a$bordered||_a$bordered,placeholder=_a.placeholder,restProps=__rest(_a,["prefixCls","getPopupContainer","className","size","bordered","placeholder"]),_this$props=_this.props,format=_this$props.format,showTime=_this$props.showTime,picker=_this$props.picker,prefixCls=getPrefixCls("picker",customizePrefixCls),additionalOverrideProps={};additionalOverrideProps=(0,_extends2.default)((0,_extends2.default)((0,_extends2.default)({},additionalOverrideProps),showTime?(0,_.getTimeProps)((0,_extends2.default)({format:format,picker:picker},showTime)):{}),"time"===picker?(0,_.getTimeProps)((0,_extends2.default)((0,_extends2.default)({format:format},_this.props),{picker:picker})):{});var rootPrefixCls=getPrefixCls();return React.createElement(_SizeContext.default.Consumer,null,(function(size){var _classNames,mergedSize=customizeSize||size;return React.createElement(_rcPicker.RangePicker,(0,_extends2.default)({separator:React.createElement("span",{"aria-label":"to",className:"".concat(prefixCls,"-separator")},React.createElement(_SwapRightOutlined.default,null)),ref:_this.pickerRef,placeholder:(0,_util.getRangePlaceholder)(picker,locale,placeholder),suffixIcon:"time"===picker?React.createElement(_ClockCircleOutlined.default,null):React.createElement(_CalendarOutlined.default,null),clearIcon:React.createElement(_CloseCircleFilled.default,null),allowClear:!0,transitionName:"".concat(rootPrefixCls,"-slide-up")},restProps,additionalOverrideProps,{className:(0,_classnames.default)((_classNames={},(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-").concat(mergedSize),mergedSize),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-borderless"),!bordered),_classNames),className),locale:locale.lang,prefixCls:prefixCls,getPopupContainer:customGetPopupContainer||getPopupContainer,generateConfig:generateConfig,prevIcon:React.createElement("span",{className:"".concat(prefixCls,"-prev-icon")}),nextIcon:React.createElement("span",{className:"".concat(prefixCls,"-next-icon")}),superPrevIcon:React.createElement("span",{className:"".concat(prefixCls,"-super-prev-icon")}),superNextIcon:React.createElement("span",{className:"".concat(prefixCls,"-super-next-icon")}),components:_.Components,direction:direction}))}))},_this}return(0,_createClass2.default)(RangePicker,[{key:"render",value:function render(){return React.createElement(_LocaleReceiver.default,{componentName:"DatePicker",defaultLocale:_en_US.default},this.renderPicker)}}]),RangePicker}(React.Component);return RangePicker.contextType=_configProvider.ConfigContext,RangePicker}