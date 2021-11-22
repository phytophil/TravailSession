"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_createSuper2=_interopRequireDefault(require("@babel/runtime/helpers/createSuper")),React=_interopRequireWildcard(require("react")),_classnames=_interopRequireDefault(require("classnames")),_omit=_interopRequireDefault(require("rc-util/lib/omit")),_CloseOutlined=_interopRequireDefault(require("@ant-design/icons/CloseOutlined")),_CheckOutlined=_interopRequireDefault(require("@ant-design/icons/CheckOutlined")),_CheckCircleFilled=_interopRequireDefault(require("@ant-design/icons/CheckCircleFilled")),_CloseCircleFilled=_interopRequireDefault(require("@ant-design/icons/CloseCircleFilled")),_configProvider=require("../config-provider"),_type=require("../_util/type"),_devWarning=_interopRequireDefault(require("../_util/devWarning")),_Line=_interopRequireDefault(require("./Line")),_Circle=_interopRequireDefault(require("./Circle")),_Steps=_interopRequireDefault(require("./Steps")),_utils=require("./utils");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},ProgressTypes=(0,_type.tuple)("line","circle","dashboard"),ProgressStatuses=(0,_type.tuple)("normal","exception","active","success"),Progress=function(_React$Component){(0,_inherits2.default)(Progress,_React$Component);var _super=(0,_createSuper2.default)(Progress);function Progress(){var _this;return(0,_classCallCheck2.default)(this,Progress),(_this=_super.apply(this,arguments)).renderProgress=function(_ref){var _classNames,progress,getPrefixCls=_ref.getPrefixCls,direction=_ref.direction,props=(0,_assertThisInitialized2.default)(_this).props,customizePrefixCls=props.prefixCls,className=props.className,size=props.size,type=props.type,steps=props.steps,showInfo=props.showInfo,strokeColor=props.strokeColor,restProps=__rest(props,["prefixCls","className","size","type","steps","showInfo","strokeColor"]),prefixCls=getPrefixCls("progress",customizePrefixCls),progressStatus=_this.getProgressStatus(),progressInfo=_this.renderProcessInfo(prefixCls,progressStatus);(0,_devWarning.default)(!("successPercent"in props),"Progress","`successPercent` is deprecated. Please use `success.percent` instead."),"line"===type?progress=steps?React.createElement(_Steps.default,(0,_extends2.default)({},_this.props,{strokeColor:"string"==typeof strokeColor?strokeColor:void 0,prefixCls:prefixCls,steps:steps}),progressInfo):React.createElement(_Line.default,(0,_extends2.default)({},_this.props,{prefixCls:prefixCls,direction:direction}),progressInfo):"circle"!==type&&"dashboard"!==type||(progress=React.createElement(_Circle.default,(0,_extends2.default)({},_this.props,{prefixCls:prefixCls,progressStatus:progressStatus}),progressInfo));var classString=(0,_classnames.default)(prefixCls,(_classNames={},(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-").concat(("dashboard"===type?"circle":steps&&"steps")||type),!0),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-status-").concat(progressStatus),!0),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-show-info"),showInfo),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-").concat(size),size),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-rtl"),"rtl"===direction),_classNames),className);return React.createElement("div",(0,_extends2.default)({},(0,_omit.default)(restProps,["status","format","trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","percent","success","successPercent"]),{className:classString}),progress)},_this}return(0,_createClass2.default)(Progress,[{key:"getPercentNumber",value:function getPercentNumber(){var _this$props$percent=this.props.percent,percent=void 0===_this$props$percent?0:_this$props$percent,successPercent=(0,_utils.getSuccessPercent)(this.props);return parseInt(void 0!==successPercent?successPercent.toString():percent.toString(),10)}},{key:"getProgressStatus",value:function getProgressStatus(){var status=this.props.status;return ProgressStatuses.indexOf(status)<0&&this.getPercentNumber()>=100?"success":status||"normal"}},{key:"renderProcessInfo",value:function renderProcessInfo(prefixCls,progressStatus){var text,_this$props=this.props,showInfo=_this$props.showInfo,format=_this$props.format,type=_this$props.type,percent=_this$props.percent,successPercent=(0,_utils.getSuccessPercent)(this.props);if(!showInfo)return null;var isLineType="line"===type;return format||"exception"!==progressStatus&&"success"!==progressStatus?text=(format||function(percentNumber){return"".concat(percentNumber,"%")})((0,_utils.validProgress)(percent),(0,_utils.validProgress)(successPercent)):"exception"===progressStatus?text=isLineType?React.createElement(_CloseCircleFilled.default,null):React.createElement(_CloseOutlined.default,null):"success"===progressStatus&&(text=isLineType?React.createElement(_CheckCircleFilled.default,null):React.createElement(_CheckOutlined.default,null)),React.createElement("span",{className:"".concat(prefixCls,"-text"),title:"string"==typeof text?text:void 0},text)}},{key:"render",value:function render(){return React.createElement(_configProvider.ConfigConsumer,null,this.renderProgress)}}]),Progress}(React.Component);exports.default=Progress,Progress.defaultProps={type:"line",percent:0,showInfo:!0,trailColor:null,size:"default",gapDegree:void 0,strokeLinecap:"round"};