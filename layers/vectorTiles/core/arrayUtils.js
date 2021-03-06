// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define([],function(){function n(n,r){return-1===n.indexOf(r)}function r(n,r,e){return!n.some(r.bind(null,e))}var e={findIndex:function(n,r,e){for(var t,f=n.length,i=0;i<f;i++)if(t=n[i],r.call(e,t,i,n))return i;return-1},find:function(n,r,e){for(var t,f=n.length,i=0;i<f;i++)if(t=n[i],r.call(e,t,i,n))return t},equals:function(n,r,e){if(!n&&!r)return!0;if(!n||!r)return!1;if(n.length!=r.length)return!1;if(e){for(var t=0;t<n.length;t++)if(!e(n[t],r[t]))return!1}else for(var f=0;f<n.length;f++)if(n[f]!==r[f])return!1;return!0},difference:function(e,t,f){var i,u;return f?(i=t.filter(r.bind(null,e,f)),u=e.filter(r.bind(null,t,f))):(i=t.filter(n.bind(null,e)),u=e.filter(n.bind(null,t))),{added:i,removed:u}},intersect:function(n,r,t){return n&&r?t?n.filter(function(n){return e.findIndex(r,function(r){return t(n,r)})>-1}):n.filter(function(n){return r.indexOf(n)>-1}):[]},range:function(n,r){null==r&&(r=n,n=0);for(var e=new Array(r-n),t=n;t<r;t++)e[t-n]=t;return e},constant:function(n,r){for(var e=new Array(n),t=0;t<n;t++)e[t]=r;return e},binaryIndexOf:function(n,r,e){for(var t=n.length,f=0,i=t-1;f<i;){var u=f+Math.floor((i-f)/2);r>n[u]?f=u+1:i=u}var l=n[f];return e?r>=n[t-1]?-1:l===r?f:f-1:l===r?f:-1}};return e});