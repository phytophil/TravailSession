"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.file2Obj=file2Obj,exports.updateFileList=updateFileList,exports.getFileItem=getFileItem,exports.removeFileItem=removeFileItem,exports.previewImage=previewImage,exports.isImageUrl=void 0;var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray")),_extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));function file2Obj(file){return(0,_extends2.default)((0,_extends2.default)({},file),{lastModified:file.lastModified,lastModifiedDate:file.lastModifiedDate,name:file.name,size:file.size,type:file.type,uid:file.uid,percent:0,originFileObj:file})}function updateFileList(file,fileList){var nextFileList=(0,_toConsumableArray2.default)(fileList),fileIndex=nextFileList.findIndex((function(_ref){return _ref.uid===file.uid}));return-1===fileIndex?nextFileList.push(file):nextFileList[fileIndex]=file,nextFileList}function getFileItem(file,fileList){var matchKey=void 0!==file.uid?"uid":"name";return fileList.filter((function(item){return item[matchKey]===file[matchKey]}))[0]}function removeFileItem(file,fileList){var matchKey=void 0!==file.uid?"uid":"name",removed=fileList.filter((function(item){return item[matchKey]!==file[matchKey]}));return removed.length===fileList.length?null:removed}var extname=function extname(){var url=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",temp=url.split("/"),filename=temp[temp.length-1],filenameWithoutSuffix=filename.split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(filenameWithoutSuffix)||[""])[0]},isImageFileType=function isImageFileType(type){return 0===type.indexOf("image/")},isImageUrl=function isImageUrl(file){if(file.type&&!file.thumbUrl)return isImageFileType(file.type);var url=file.thumbUrl||file.url||"",extension=extname(url);return!(!/^data:image\//.test(url)&&!/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(extension))||!/^data:/.test(url)&&!extension};exports.isImageUrl=isImageUrl;var MEASURE_SIZE=200;function previewImage(file){return new Promise((function(resolve){if(file.type&&isImageFileType(file.type)){var canvas=document.createElement("canvas");canvas.width=MEASURE_SIZE,canvas.height=MEASURE_SIZE,canvas.style.cssText="position: fixed; left: 0; top: 0; width: ".concat(MEASURE_SIZE,"px; height: ").concat(MEASURE_SIZE,"px; z-index: 9999; display: none;"),document.body.appendChild(canvas);var ctx=canvas.getContext("2d"),img=new Image;img.onload=function(){var width=img.width,height=img.height,drawWidth=MEASURE_SIZE,drawHeight=MEASURE_SIZE,offsetX=0,offsetY=0;width>height?offsetY=-((drawHeight=height*(MEASURE_SIZE/width))-drawWidth)/2:offsetX=-((drawWidth=width*(MEASURE_SIZE/height))-drawHeight)/2,ctx.drawImage(img,offsetX,offsetY,drawWidth,drawHeight);var dataURL=canvas.toDataURL();document.body.removeChild(canvas),resolve(dataURL)},img.src=window.URL.createObjectURL(file)}else resolve("")}))}