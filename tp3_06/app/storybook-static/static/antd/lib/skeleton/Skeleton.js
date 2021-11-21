"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof3=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof")),React=_interopRequireWildcard(require("react")),_classnames=_interopRequireDefault(require("classnames")),_Title=_interopRequireDefault(require("./Title")),_Paragraph=_interopRequireDefault(require("./Paragraph")),_configProvider=require("../config-provider"),_Element=_interopRequireDefault(require("./Element")),_Avatar=_interopRequireDefault(require("./Avatar")),_Button=_interopRequireDefault(require("./Button")),_Input=_interopRequireDefault(require("./Input")),_Image=_interopRequireDefault(require("./Image"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof3(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}function getComponentProps(prop){return prop&&"object"===(0,_typeof2.default)(prop)?prop:{}}function getAvatarBasicProps(hasTitle,hasParagraph){return hasTitle&&!hasParagraph?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function getTitleBasicProps(hasAvatar,hasParagraph){return!hasAvatar&&hasParagraph?{width:"38%"}:hasAvatar&&hasParagraph?{width:"50%"}:{}}function getParagraphBasicProps(hasAvatar,hasTitle){var basicProps={};return hasAvatar&&hasTitle||(basicProps.width="61%"),basicProps.rows=!hasAvatar&&hasTitle?3:2,basicProps}var Skeleton=function Skeleton(props){var renderSkeleton=function renderSkeleton(_ref){var getPrefixCls=_ref.getPrefixCls,direction=_ref.direction,customizePrefixCls=props.prefixCls,loading=props.loading,className=props.className,children=props.children,avatar=props.avatar,title=props.title,paragraph=props.paragraph,active=props.active,round=props.round,prefixCls=getPrefixCls("skeleton",customizePrefixCls);if(loading||!("loading"in props)){var _classNames,avatarNode,contentNode,hasAvatar=!!avatar,hasTitle=!!title,hasParagraph=!!paragraph;if(hasAvatar){var avatarProps=(0,_extends2.default)((0,_extends2.default)({prefixCls:"".concat(prefixCls,"-avatar")},getAvatarBasicProps(hasTitle,hasParagraph)),getComponentProps(avatar));avatarNode=React.createElement("div",{className:"".concat(prefixCls,"-header")},React.createElement(_Element.default,avatarProps))}if(hasTitle||hasParagraph){var $title,paragraphNode;if(hasTitle){var titleProps=(0,_extends2.default)((0,_extends2.default)({prefixCls:"".concat(prefixCls,"-title")},getTitleBasicProps(hasAvatar,hasParagraph)),getComponentProps(title));$title=React.createElement(_Title.default,titleProps)}if(hasParagraph){var paragraphProps=(0,_extends2.default)((0,_extends2.default)({prefixCls:"".concat(prefixCls,"-paragraph")},getParagraphBasicProps(hasAvatar,hasTitle)),getComponentProps(paragraph));paragraphNode=React.createElement(_Paragraph.default,paragraphProps)}contentNode=React.createElement("div",{className:"".concat(prefixCls,"-content")},$title,paragraphNode)}var cls=(0,_classnames.default)(prefixCls,(_classNames={},(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-with-avatar"),hasAvatar),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-active"),active),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-rtl"),"rtl"===direction),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-round"),round),_classNames),className);return React.createElement("div",{className:cls},avatarNode,contentNode)}return children};return React.createElement(_configProvider.ConfigConsumer,null,renderSkeleton)};Skeleton.defaultProps={avatar:!1,title:!0,paragraph:!0},Skeleton.Button=_Button.default,Skeleton.Avatar=_Avatar.default,Skeleton.Input=_Input.default,Skeleton.Image=_Image.default;var _default=Skeleton;exports.default=_default;