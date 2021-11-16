"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=useModal;var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),React=_interopRequireWildcard(require("react")),_usePatchElement3=_interopRequireDefault(require("../../_util/hooks/usePatchElement")),_HookModal=_interopRequireDefault(require("./HookModal")),_confirm=require("../confirm");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var uuid=0,ElementsHolder=React.memo(React.forwardRef((function(_props,ref){var _usePatchElement=(0,_usePatchElement3.default)(),_usePatchElement2=(0,_slicedToArray2.default)(_usePatchElement,2),elements=_usePatchElement2[0],patchElement=_usePatchElement2[1];return React.useImperativeHandle(ref,(function(){return{patchElement:patchElement}}),[]),React.createElement(React.Fragment,null,elements)})));function useModal(){var holderRef=React.useRef(null),_React$useState=React.useState([]),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),actionQueue=_React$useState2[0],setActionQueue=_React$useState2[1];React.useEffect((function(){actionQueue.length&&((0,_toConsumableArray2.default)(actionQueue).forEach((function(action){action()})),setActionQueue([]))}),[actionQueue]);var getConfirmFunc=React.useCallback((function(withFunc){return function hookConfirm(config){var _a;uuid+=1;var closeFunc,modalRef=React.createRef(),modal=React.createElement(_HookModal.default,{key:"modal-".concat(uuid),config:withFunc(config),ref:modalRef,afterClose:function afterClose(){closeFunc()}});return closeFunc=null===(_a=holderRef.current)||void 0===_a?void 0:_a.patchElement(modal),{destroy:function destroy(){function destroyAction(){var _a;null===(_a=modalRef.current)||void 0===_a||_a.destroy()}modalRef.current?destroyAction():setActionQueue((function(prev){return[].concat((0,_toConsumableArray2.default)(prev),[destroyAction])}))},update:function update(newConfig){function updateAction(){var _a;null===(_a=modalRef.current)||void 0===_a||_a.update(newConfig)}modalRef.current?updateAction():setActionQueue((function(prev){return[].concat((0,_toConsumableArray2.default)(prev),[updateAction])}))}}}}),[]);return[React.useMemo((function(){return{info:getConfirmFunc(_confirm.withInfo),success:getConfirmFunc(_confirm.withSuccess),error:getConfirmFunc(_confirm.withError),warning:getConfirmFunc(_confirm.withWarn),confirm:getConfirmFunc(_confirm.withConfirm)}}),[]),React.createElement(ElementsHolder,{ref:holderRef})]}