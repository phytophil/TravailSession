"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),React=_interopRequireWildcard(require("react")),_omit=_interopRequireDefault(require("rc-util/lib/omit")),_classnames=_interopRequireDefault(require("classnames")),_rcSelect=_interopRequireWildcard(require("rc-select")),_configProvider=require("../config-provider"),_iconUtil=_interopRequireDefault(require("./utils/iconUtil")),_SizeContext=_interopRequireDefault(require("../config-provider/SizeContext")),_motion=require("../_util/motion");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},SECRET_COMBOBOX_MODE_DO_NOT_USE="SECRET_COMBOBOX_MODE_DO_NOT_USE",InternalSelect=function InternalSelect(_a,ref){var _classNames2,mergedNotFound,customizePrefixCls=_a.prefixCls,_a$bordered=_a.bordered,bordered=void 0===_a$bordered||_a$bordered,className=_a.className,getPopupContainer=_a.getPopupContainer,dropdownClassName=_a.dropdownClassName,_a$listHeight=_a.listHeight,listHeight=void 0===_a$listHeight?256:_a$listHeight,_a$listItemHeight=_a.listItemHeight,listItemHeight=void 0===_a$listItemHeight?24:_a$listItemHeight,customizeSize=_a.size,notFoundContent=_a.notFoundContent,props=__rest(_a,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","listHeight","listItemHeight","size","notFoundContent"]),_React$useContext=React.useContext(_configProvider.ConfigContext),getContextPopupContainer=_React$useContext.getPopupContainer,getPrefixCls=_React$useContext.getPrefixCls,renderEmpty=_React$useContext.renderEmpty,direction=_React$useContext.direction,virtual=_React$useContext.virtual,dropdownMatchSelectWidth=_React$useContext.dropdownMatchSelectWidth,size=React.useContext(_SizeContext.default),prefixCls=getPrefixCls("select",customizePrefixCls),rootPrefixCls=getPrefixCls(),mode=React.useMemo((function(){var m=props.mode;if("combobox"!==m)return m===SECRET_COMBOBOX_MODE_DO_NOT_USE?"combobox":m}),[props.mode]),isMultiple="multiple"===mode||"tags"===mode;mergedNotFound=void 0!==notFoundContent?notFoundContent:"combobox"===mode?null:renderEmpty("Select");var _getIcons=(0,_iconUtil.default)((0,_extends2.default)((0,_extends2.default)({},props),{multiple:isMultiple,prefixCls:prefixCls})),suffixIcon=_getIcons.suffixIcon,itemIcon=_getIcons.itemIcon,removeIcon=_getIcons.removeIcon,clearIcon=_getIcons.clearIcon,selectProps=(0,_omit.default)(props,["suffixIcon","itemIcon"]),rcSelectRtlDropDownClassName=(0,_classnames.default)(dropdownClassName,(0,_defineProperty2.default)({},"".concat(prefixCls,"-dropdown-").concat(direction),"rtl"===direction)),mergedSize=customizeSize||size,mergedClassName=(0,_classnames.default)((_classNames2={},(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-lg"),"large"===mergedSize),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-sm"),"small"===mergedSize),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-rtl"),"rtl"===direction),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-borderless"),!bordered),_classNames2),className);return React.createElement(_rcSelect.default,(0,_extends2.default)({ref:ref,virtual:virtual,dropdownMatchSelectWidth:dropdownMatchSelectWidth},selectProps,{transitionName:(0,_motion.getTransitionName)(rootPrefixCls,"slide-up",props.transitionName),listHeight:listHeight,listItemHeight:listItemHeight,mode:mode,prefixCls:prefixCls,direction:direction,inputIcon:suffixIcon,menuItemSelectedIcon:itemIcon,removeIcon:removeIcon,clearIcon:clearIcon,notFoundContent:mergedNotFound,className:mergedClassName,getPopupContainer:getPopupContainer||getContextPopupContainer,dropdownClassName:rcSelectRtlDropDownClassName}))},SelectRef=React.forwardRef(InternalSelect),Select=SelectRef;Select.SECRET_COMBOBOX_MODE_DO_NOT_USE=SECRET_COMBOBOX_MODE_DO_NOT_USE,Select.Option=_rcSelect.Option,Select.OptGroup=_rcSelect.OptGroup;var _default=Select;exports.default=_default;