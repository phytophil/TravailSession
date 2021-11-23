"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof3=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),React=_interopRequireWildcard(require("react")),_classnames=_interopRequireDefault(require("classnames")),_rcResizeObserver=_interopRequireDefault(require("rc-resize-observer")),_ref=require("rc-util/lib/ref"),_configProvider=require("../config-provider"),_devWarning=_interopRequireDefault(require("../_util/devWarning")),_responsiveObserve=require("../_util/responsiveObserve"),_useBreakpoint=_interopRequireDefault(require("../grid/hooks/useBreakpoint")),_SizeContext=_interopRequireDefault(require("./SizeContext"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof3(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},InternalAvatar=function InternalAvatar(props,ref){var _classNames,_classNames2,groupSize=React.useContext(_SizeContext.default),_React$useState=React.useState(1),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),scale=_React$useState2[0],setScale=_React$useState2[1],_React$useState3=React.useState(!1),_React$useState4=(0,_slicedToArray2.default)(_React$useState3,2),mounted=_React$useState4[0],setMounted=_React$useState4[1],_React$useState5=React.useState(!0),_React$useState6=(0,_slicedToArray2.default)(_React$useState5,2),isImgExist=_React$useState6[0],setIsImgExist=_React$useState6[1],avatarNodeRef=React.useRef(),avatarChildrenRef=React.useRef(),avatarNodeMergeRef=(0,_ref.composeRef)(ref,avatarNodeRef),getPrefixCls=React.useContext(_configProvider.ConfigContext).getPrefixCls,setScaleParam=function setScaleParam(){if(avatarChildrenRef.current&&avatarNodeRef.current){var childrenWidth=avatarChildrenRef.current.offsetWidth,nodeWidth=avatarNodeRef.current.offsetWidth;if(0!==childrenWidth&&0!==nodeWidth){var _props$gap=props.gap,gap=void 0===_props$gap?4:_props$gap;2*gap<nodeWidth&&setScale(nodeWidth-2*gap<childrenWidth?(nodeWidth-2*gap)/childrenWidth:1)}}};React.useEffect((function(){setMounted(!0)}),[]),React.useEffect((function(){setIsImgExist(!0),setScale(1)}),[props.src]),React.useEffect((function(){setScaleParam()}),[props.gap]);var customizePrefixCls=props.prefixCls,shape=props.shape,customSize=props.size,src=props.src,srcSet=props.srcSet,icon=props.icon,className=props.className,alt=props.alt,draggable=props.draggable,children=props.children,others=__rest(props,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children"]),size="default"===customSize?groupSize:customSize,screens=(0,_useBreakpoint.default)(),responsiveSizeStyle=React.useMemo((function(){if("object"!==(0,_typeof2.default)(size))return{};var currentBreakpoint=_responsiveObserve.responsiveArray.find((function(screen){return screens[screen]})),currentSize=size[currentBreakpoint];return currentSize?{width:currentSize,height:currentSize,lineHeight:"".concat(currentSize,"px"),fontSize:icon?currentSize/2:18}:{}}),[screens,size]);(0,_devWarning.default)(!("string"==typeof icon&&icon.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon,"` at https://ant.design/components/icon"));var childrenToRender,prefixCls=getPrefixCls("avatar",customizePrefixCls),sizeCls=(0,_classnames.default)((_classNames={},(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-lg"),"large"===size),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-sm"),"small"===size),_classNames)),hasImageElement=React.isValidElement(src),classString=(0,_classnames.default)(prefixCls,sizeCls,(_classNames2={},(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-").concat(shape),!!shape),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-image"),hasImageElement||src&&isImgExist),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-icon"),!!icon),_classNames2),className),sizeStyle="number"==typeof size?{width:size,height:size,lineHeight:"".concat(size,"px"),fontSize:icon?size/2:18}:{};if("string"==typeof src&&isImgExist)childrenToRender=React.createElement("img",{src:src,draggable:draggable,srcSet:srcSet,onError:function handleImgLoadError(){var onError=props.onError;!1!==(onError?onError():void 0)&&setIsImgExist(!1)},alt:alt});else if(hasImageElement)childrenToRender=src;else if(icon)childrenToRender=icon;else if(mounted||1!==scale){var transformString="scale(".concat(scale,") translateX(-50%)"),childrenStyle={msTransform:transformString,WebkitTransform:transformString,transform:transformString},sizeChildrenStyle="number"==typeof size?{lineHeight:"".concat(size,"px")}:{};childrenToRender=React.createElement(_rcResizeObserver.default,{onResize:setScaleParam},React.createElement("span",{className:"".concat(prefixCls,"-string"),ref:function ref(node){avatarChildrenRef.current=node},style:(0,_extends2.default)((0,_extends2.default)({},sizeChildrenStyle),childrenStyle)},children))}else childrenToRender=React.createElement("span",{className:"".concat(prefixCls,"-string"),style:{opacity:0},ref:function ref(node){avatarChildrenRef.current=node}},children);return delete others.onError,delete others.gap,React.createElement("span",(0,_extends2.default)({},others,{style:(0,_extends2.default)((0,_extends2.default)((0,_extends2.default)({},sizeStyle),responsiveSizeStyle),others.style),className:classString,ref:avatarNodeMergeRef}),childrenToRender)},Avatar=React.forwardRef(InternalAvatar);Avatar.displayName="Avatar",Avatar.defaultProps={shape:"circle",size:"default"};var _default=Avatar;exports.default=_default;