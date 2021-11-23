"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray")),React=_interopRequireWildcard(require("react")),_classnames=_interopRequireDefault(require("classnames")),_toArray=_interopRequireDefault(require("rc-util/lib/Children/toArray")),_BreadcrumbItem=_interopRequireDefault(require("./BreadcrumbItem")),_BreadcrumbSeparator=_interopRequireDefault(require("./BreadcrumbSeparator")),_menu=_interopRequireDefault(require("../menu")),_configProvider=require("../config-provider"),_devWarning=_interopRequireDefault(require("../_util/devWarning")),_reactNode=require("../_util/reactNode");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function getBreadcrumbName(route,params){if(!route.breadcrumbName)return null;var paramsKeys=Object.keys(params).join("|");return route.breadcrumbName.replace(new RegExp(":(".concat(paramsKeys,")"),"g"),(function(replacement,key){return params[key]||replacement}))}function defaultItemRender(route,params,routes,paths){var isLastItem=routes.indexOf(route)===routes.length-1,name=getBreadcrumbName(route,params);return isLastItem?React.createElement("span",null,name):React.createElement("a",{href:"#/".concat(paths.join("/"))},name)}var getPath=function getPath(path,params){return path=(path||"").replace(/^\//,""),Object.keys(params).forEach((function(key){path=path.replace(":".concat(key),params[key])})),path},addChildPath=function addChildPath(paths){var childPath=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",params=arguments.length>2?arguments[2]:void 0,originalPaths=(0,_toConsumableArray2.default)(paths),path=getPath(childPath,params);return path&&originalPaths.push(path),originalPaths},Breadcrumb=function Breadcrumb(_a){var crumbs,customizePrefixCls=_a.prefixCls,_a$separator=_a.separator,separator=void 0===_a$separator?"/":_a$separator,style=_a.style,className=_a.className,routes=_a.routes,children=_a.children,_a$itemRender=_a.itemRender,itemRender=void 0===_a$itemRender?defaultItemRender:_a$itemRender,_a$params=_a.params,params=void 0===_a$params?{}:_a$params,restProps=__rest(_a,["prefixCls","separator","style","className","routes","children","itemRender","params"]),_React$useContext=React.useContext(_configProvider.ConfigContext),getPrefixCls=_React$useContext.getPrefixCls,direction=_React$useContext.direction,prefixCls=getPrefixCls("breadcrumb",customizePrefixCls);if(routes&&routes.length>0){var paths=[];crumbs=routes.map((function(route){var overlay,path=getPath(route.path,params);return path&&paths.push(path),route.children&&route.children.length&&(overlay=React.createElement(_menu.default,null,route.children.map((function(child){return React.createElement(_menu.default.Item,{key:child.path||child.breadcrumbName},itemRender(child,params,routes,addChildPath(paths,child.path,params)))})))),React.createElement(_BreadcrumbItem.default,{overlay:overlay,separator:separator,key:path||route.breadcrumbName},itemRender(route,params,routes,paths))}))}else children&&(crumbs=(0,_toArray.default)(children).map((function(element,index){return element?((0,_devWarning.default)(element.type&&(!0===element.type.__ANT_BREADCRUMB_ITEM||!0===element.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,_reactNode.cloneElement)(element,{separator:separator,key:index})):element})));var breadcrumbClassName=(0,_classnames.default)(prefixCls,(0,_defineProperty2.default)({},"".concat(prefixCls,"-rtl"),"rtl"===direction),className);return React.createElement("div",(0,_extends2.default)({className:breadcrumbClassName,style:style},restProps),crumbs)};Breadcrumb.Item=_BreadcrumbItem.default,Breadcrumb.Separator=_BreadcrumbSeparator.default;var _default=Breadcrumb;exports.default=_default;