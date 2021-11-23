"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_createSuper2=_interopRequireDefault(require("@babel/runtime/helpers/createSuper")),React=_interopRequireWildcard(require("react")),_classnames=_interopRequireDefault(require("classnames")),_addEventListener=_interopRequireDefault(require("rc-util/lib/Dom/addEventListener")),_affix=_interopRequireDefault(require("../affix")),_configProvider=require("../config-provider"),_scrollTo=_interopRequireDefault(require("../_util/scrollTo")),_getScroll=_interopRequireDefault(require("../_util/getScroll")),_context=_interopRequireDefault(require("./context"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}function getDefaultContainer(){return window}function getOffsetTop(element,container){if(!element.getClientRects().length)return 0;var rect=element.getBoundingClientRect();return rect.width||rect.height?container===window?(container=element.ownerDocument.documentElement,rect.top-container.clientTop):rect.top-container.getBoundingClientRect().top:rect.top}var sharpMatcherRegx=/#(\S+)$/,Anchor=function(_React$Component){(0,_inherits2.default)(Anchor,_React$Component);var _super=(0,_createSuper2.default)(Anchor);function Anchor(){var _this;return(0,_classCallCheck2.default)(this,Anchor),(_this=_super.apply(this,arguments)).state={activeLink:null},_this.wrapperRef=React.createRef(),_this.links=[],_this.registerLink=function(link){_this.links.includes(link)||_this.links.push(link)},_this.unregisterLink=function(link){var index=_this.links.indexOf(link);-1!==index&&_this.links.splice(index,1)},_this.getContainer=function(){var getTargetContainer=_this.context.getTargetContainer;return(_this.props.getContainer||getTargetContainer||getDefaultContainer)()},_this.handleScrollTo=function(link){var _this$props=_this.props,offsetTop=_this$props.offsetTop,targetOffset=_this$props.targetOffset;_this.setCurrentActiveLink(link);var container=_this.getContainer(),scrollTop=(0,_getScroll.default)(container,!0),sharpLinkMatch=sharpMatcherRegx.exec(link);if(sharpLinkMatch){var targetElement=document.getElementById(sharpLinkMatch[1]);if(targetElement){var y=scrollTop+getOffsetTop(targetElement,container);y-=void 0!==targetOffset?targetOffset:offsetTop||0,_this.animating=!0,(0,_scrollTo.default)(y,{callback:function callback(){_this.animating=!1},getContainer:_this.getContainer})}}},_this.saveInkNode=function(node){_this.inkNode=node},_this.setCurrentActiveLink=function(link){var activeLink=_this.state.activeLink,_this$props2=_this.props,onChange=_this$props2.onChange,getCurrentAnchor=_this$props2.getCurrentAnchor;activeLink!==link&&(_this.setState({activeLink:"function"==typeof getCurrentAnchor?getCurrentAnchor():link}),null==onChange||onChange(link))},_this.handleScroll=function(){if(!_this.animating){var _this$props3=_this.props,offsetTop=_this$props3.offsetTop,bounds=_this$props3.bounds,targetOffset=_this$props3.targetOffset,currentActiveLink=_this.getCurrentAnchor(void 0!==targetOffset?targetOffset:offsetTop||0,bounds);_this.setCurrentActiveLink(currentActiveLink)}},_this.updateInk=function(){var _assertThisInitialize=(0,_assertThisInitialized2.default)(_this),prefixCls=_assertThisInitialize.prefixCls,anchorNode=_assertThisInitialize.wrapperRef.current,linkNode=null==anchorNode?void 0:anchorNode.getElementsByClassName("".concat(prefixCls,"-link-title-active"))[0];linkNode&&(_this.inkNode.style.top="".concat(linkNode.offsetTop+linkNode.clientHeight/2-4.5,"px"))},_this.render=function(){var _this$context=_this.context,getPrefixCls=_this$context.getPrefixCls,direction=_this$context.direction,_this$props4=_this.props,customizePrefixCls=_this$props4.prefixCls,_this$props4$classNam=_this$props4.className,className=void 0===_this$props4$classNam?"":_this$props4$classNam,style=_this$props4.style,offsetTop=_this$props4.offsetTop,affix=_this$props4.affix,showInkInFixed=_this$props4.showInkInFixed,children=_this$props4.children,activeLink=_this.state.activeLink,prefixCls=getPrefixCls("anchor",customizePrefixCls);_this.prefixCls=prefixCls;var inkClass=(0,_classnames.default)("".concat(prefixCls,"-ink-ball"),{visible:activeLink}),wrapperClass=(0,_classnames.default)("".concat(prefixCls,"-wrapper"),(0,_defineProperty2.default)({},"".concat(prefixCls,"-rtl"),"rtl"===direction),className),anchorClass=(0,_classnames.default)(prefixCls,{fixed:!affix&&!showInkInFixed}),wrapperStyle=(0,_extends2.default)({maxHeight:offsetTop?"calc(100vh - ".concat(offsetTop,"px)"):"100vh"},style),anchorContent=React.createElement("div",{ref:_this.wrapperRef,className:wrapperClass,style:wrapperStyle},React.createElement("div",{className:anchorClass},React.createElement("div",{className:"".concat(prefixCls,"-ink")},React.createElement("span",{className:inkClass,ref:_this.saveInkNode})),children));return React.createElement(_context.default.Provider,{value:{registerLink:_this.registerLink,unregisterLink:_this.unregisterLink,activeLink:_this.state.activeLink,scrollTo:_this.handleScrollTo,onClick:_this.props.onClick}},affix?React.createElement(_affix.default,{offsetTop:offsetTop,target:_this.getContainer},anchorContent):anchorContent)},_this}return(0,_createClass2.default)(Anchor,[{key:"componentDidMount",value:function componentDidMount(){this.scrollContainer=this.getContainer(),this.scrollEvent=(0,_addEventListener.default)(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll()}},{key:"componentDidUpdate",value:function componentDidUpdate(){if(this.scrollEvent){var currentContainer=this.getContainer();this.scrollContainer!==currentContainer&&(this.scrollContainer=currentContainer,this.scrollEvent.remove(),this.scrollEvent=(0,_addEventListener.default)(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll())}this.updateInk()}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.scrollEvent&&this.scrollEvent.remove()}},{key:"getCurrentAnchor",value:function getCurrentAnchor(){var offsetTop=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,bounds=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,linkSections=[],container=this.getContainer();if(this.links.forEach((function(link){var sharpLinkMatch=sharpMatcherRegx.exec(link.toString());if(sharpLinkMatch){var target=document.getElementById(sharpLinkMatch[1]);if(target){var top=getOffsetTop(target,container);top<offsetTop+bounds&&linkSections.push({link:link,top:top})}}})),linkSections.length){var maxSection=linkSections.reduce((function(prev,curr){return curr.top>prev.top?curr:prev}));return maxSection.link}return""}}]),Anchor}(React.Component);exports.default=Anchor,Anchor.defaultProps={affix:!0,showInkInFixed:!1},Anchor.contextType=_configProvider.ConfigContext;