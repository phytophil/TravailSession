"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_createSuper2=_interopRequireDefault(require("@babel/runtime/helpers/createSuper")),React=_interopRequireWildcard(require("react")),_classnames=_interopRequireDefault(require("classnames")),_CloseCircleFilled=_interopRequireDefault(require("@ant-design/icons/CloseCircleFilled")),_type=require("../_util/type"),_reactNode=require("../_util/reactNode"),_utils=require("./utils");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var ClearableInputType=(0,_type.tuple)("text","input");function hasAddon(props){return!(!props.addonBefore&&!props.addonAfter)}var ClearableLabeledInput=function(_React$Component){(0,_inherits2.default)(ClearableLabeledInput,_React$Component);var _super=(0,_createSuper2.default)(ClearableLabeledInput);function ClearableLabeledInput(){var _this;return(0,_classCallCheck2.default)(this,ClearableLabeledInput),(_this=_super.apply(this,arguments)).containerRef=React.createRef(),_this.onInputMouseUp=function(e){var _a;if(null===(_a=_this.containerRef.current)||void 0===_a?void 0:_a.contains(e.target)){var triggerFocus=_this.props.triggerFocus;null==triggerFocus||triggerFocus()}},_this}return(0,_createClass2.default)(ClearableLabeledInput,[{key:"renderClearIcon",value:function renderClearIcon(prefixCls){var _classNames,_this$props=this.props,allowClear=_this$props.allowClear,value=_this$props.value,disabled=_this$props.disabled,readOnly=_this$props.readOnly,handleReset=_this$props.handleReset,suffix=_this$props.suffix;if(!allowClear)return null;var needClear=!disabled&&!readOnly&&value,className="".concat(prefixCls,"-clear-icon");return React.createElement(_CloseCircleFilled.default,{onClick:handleReset,onMouseDown:function onMouseDown(e){return e.preventDefault()},className:(0,_classnames.default)((_classNames={},(0,_defineProperty2.default)(_classNames,"".concat(className,"-hidden"),!needClear),(0,_defineProperty2.default)(_classNames,"".concat(className,"-has-suffix"),!!suffix),_classNames),className),role:"button"})}},{key:"renderSuffix",value:function renderSuffix(prefixCls){var _this$props2=this.props,suffix=_this$props2.suffix,allowClear=_this$props2.allowClear;return suffix||allowClear?React.createElement("span",{className:"".concat(prefixCls,"-suffix")},this.renderClearIcon(prefixCls),suffix):null}},{key:"renderLabeledIcon",value:function renderLabeledIcon(prefixCls,element){var _classNames2,_this$props3=this.props,focused=_this$props3.focused,value=_this$props3.value,prefix=_this$props3.prefix,className=_this$props3.className,size=_this$props3.size,suffix=_this$props3.suffix,disabled=_this$props3.disabled,allowClear=_this$props3.allowClear,direction=_this$props3.direction,style=_this$props3.style,readOnly=_this$props3.readOnly,bordered=_this$props3.bordered,suffixNode=this.renderSuffix(prefixCls);if(!(0,_utils.hasPrefixSuffix)(this.props))return(0,_reactNode.cloneElement)(element,{value:value});var prefixNode=prefix?React.createElement("span",{className:"".concat(prefixCls,"-prefix")},prefix):null,affixWrapperCls=(0,_classnames.default)("".concat(prefixCls,"-affix-wrapper"),(_classNames2={},(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-affix-wrapper-focused"),focused),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-affix-wrapper-disabled"),disabled),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-affix-wrapper-sm"),"small"===size),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-affix-wrapper-lg"),"large"===size),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-affix-wrapper-input-with-clear-btn"),suffix&&allowClear&&value),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-affix-wrapper-rtl"),"rtl"===direction),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-affix-wrapper-readonly"),readOnly),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-affix-wrapper-borderless"),!bordered),(0,_defineProperty2.default)(_classNames2,"".concat(className),!hasAddon(this.props)&&className),_classNames2));return React.createElement("span",{ref:this.containerRef,className:affixWrapperCls,style:style,onMouseUp:this.onInputMouseUp},prefixNode,(0,_reactNode.cloneElement)(element,{style:null,value:value,className:(0,_utils.getInputClassName)(prefixCls,bordered,size,disabled)}),suffixNode)}},{key:"renderInputWithLabel",value:function renderInputWithLabel(prefixCls,labeledElement){var _classNames4,_this$props4=this.props,addonBefore=_this$props4.addonBefore,addonAfter=_this$props4.addonAfter,style=_this$props4.style,size=_this$props4.size,className=_this$props4.className,direction=_this$props4.direction;if(!hasAddon(this.props))return labeledElement;var wrapperClassName="".concat(prefixCls,"-group"),addonClassName="".concat(wrapperClassName,"-addon"),addonBeforeNode=addonBefore?React.createElement("span",{className:addonClassName},addonBefore):null,addonAfterNode=addonAfter?React.createElement("span",{className:addonClassName},addonAfter):null,mergedWrapperClassName=(0,_classnames.default)("".concat(prefixCls,"-wrapper"),wrapperClassName,(0,_defineProperty2.default)({},"".concat(wrapperClassName,"-rtl"),"rtl"===direction)),mergedGroupClassName=(0,_classnames.default)("".concat(prefixCls,"-group-wrapper"),(_classNames4={},(0,_defineProperty2.default)(_classNames4,"".concat(prefixCls,"-group-wrapper-sm"),"small"===size),(0,_defineProperty2.default)(_classNames4,"".concat(prefixCls,"-group-wrapper-lg"),"large"===size),(0,_defineProperty2.default)(_classNames4,"".concat(prefixCls,"-group-wrapper-rtl"),"rtl"===direction),_classNames4),className);return React.createElement("span",{className:mergedGroupClassName,style:style},React.createElement("span",{className:mergedWrapperClassName},addonBeforeNode,(0,_reactNode.cloneElement)(labeledElement,{style:null}),addonAfterNode))}},{key:"renderTextAreaWithClearIcon",value:function renderTextAreaWithClearIcon(prefixCls,element){var _classNames5,_this$props5=this.props,value=_this$props5.value,allowClear=_this$props5.allowClear,className=_this$props5.className,style=_this$props5.style,direction=_this$props5.direction,bordered=_this$props5.bordered;if(!allowClear)return(0,_reactNode.cloneElement)(element,{value:value});var affixWrapperCls=(0,_classnames.default)("".concat(prefixCls,"-affix-wrapper"),"".concat(prefixCls,"-affix-wrapper-textarea-with-clear-btn"),(_classNames5={},(0,_defineProperty2.default)(_classNames5,"".concat(prefixCls,"-affix-wrapper-rtl"),"rtl"===direction),(0,_defineProperty2.default)(_classNames5,"".concat(prefixCls,"-affix-wrapper-borderless"),!bordered),(0,_defineProperty2.default)(_classNames5,"".concat(className),!hasAddon(this.props)&&className),_classNames5));return React.createElement("span",{className:affixWrapperCls,style:style},(0,_reactNode.cloneElement)(element,{style:null,value:value}),this.renderClearIcon(prefixCls))}},{key:"render",value:function render(){var _this$props6=this.props,prefixCls=_this$props6.prefixCls,inputType=_this$props6.inputType,element=_this$props6.element;return inputType===ClearableInputType[0]?this.renderTextAreaWithClearIcon(prefixCls,element):this.renderInputWithLabel(prefixCls,this.renderLabeledIcon(prefixCls,element))}}]),ClearableLabeledInput}(React.Component),_default=ClearableLabeledInput;exports.default=_default;