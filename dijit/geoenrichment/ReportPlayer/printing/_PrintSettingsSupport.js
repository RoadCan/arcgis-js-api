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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands","./HeaderFooterSettingsBuilder"],function(e,t,n,r,o,i,a){return e(null,{_checkPrintSettings:function(e){function o(){return l.getAllReportContainers().some(function(e){return e.hasHiddenContent()})}function a(){return t.mixin({needAutoScale:o(),addHeader:!1,addDataSource:!1,addFooter:!1,pageSettings:l.getCurrentReportContainer().documentOptions,commandId:e.commandId,allAreas:!0,reportTitle:void 0,reportSubtitle:void 0},e.printSettings)}var l=this,s=new n;return e.showDialog?function(){r(l._player.dataProvider.getCommands(),function(n){var d={needAutoScale:o(),showLayoutOptions:!0,currentPageSettings:l.getCurrentReportContainer().documentOptions,commandId:e.commandId,canAddHeaderAndFooter:!0,reportTitle:l._player.getReportTitle(),reportSubtitle:l._player.printConfig.subtitle,showAllAreasOptions:l.getAllReportContainers().length>1,showDataDrillingOptions:e.commandId!==i.PRINT,exportCommands:e.commandId===i.PRINT?null:n.filter(function(e){return e.id!==i.PRINT})},u=new l._player.printConfig.printDialogClass;u.onPrint=function(e){r(l._applyPrintSettings(t.mixin(a(),e)),s.resolve,s.reject)},u.onCancel=function(){s.resolve("cancel")},u.show(d)})}():function(){r(l._applyPrintSettings(a()),s.resolve,s.reject)}(),s.promise},_applyPrintSettings:function(e){function t(){s._pageSettings=e.pageSettings;var t=o.getPageBox(e.pageSettings);s._pageFitParams={w:t.w,h:t.h,hAlign:"center",vAlign:"top"}}function l(){return r(a.createHeaderFooterParams(s._player,s._viewModel,e),function(e){s._headerFooterParams=e})}var s=this;this._commandId=e.commandId||this._commandId,this._allowDataDrilling=e.allowDataDrilling,this._exportAllAreas=e.allAreas;var d,u,c=e.commandId!==i.DYNAMIC_HTML&&e.needAutoScale;return c&&(d=this.getCurrentReportContainer().toJson()),e.allAreas&&(u=this._player._showAllContainers()),this._pageSettingsRollBackFunc=function(){if(u&&u.undo(),u=null,c)return s._player.updateTemplateJson(d),s._player.refresh({rerenderContent:!0})},r(c&&function(){e.allAreas?s.getAllReportContainers().forEach(function(e){e.resizeRowHeightToShowCellsContent()}):s.getCurrentReportContainer().resizeRowHeightToShowCellsContent();var t=new n;return setTimeout(t.resolve,500),t.promise}(),function(){return t(),l()})}})});