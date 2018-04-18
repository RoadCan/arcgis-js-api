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

define({documentTypes:{arcgis:{caption:"بيانات ArcGIS التعريفية",editorCaption:"الوصفية",description:""}},emptyOption:"فارغ",conditionals:{ISO19139A1_ROW4:"إذا كان مستوى التسلسل الهيكلي للبيانات التعريفية هو مجموعة بيانات، ستتطلب الحاجة لوجود مربع إحاطة جغرافي أو وصف جغرافي.",ISO19139A1_ROW6:"يتطلب وجود مُعرف مجموعة بيانات أو اسم مجموعة بيانات.",ISO19139A1_ROW7:"إذا تم اختيار قيود أخرى، ستتطلب الحاجة لوجود قيود أخرى.",ISO19139A1_ROW9:"إذا لم يكن النطاق مجموعة بيانات أو سلاسل ستتطلب الحاجة لوجود وصف مستوى.",ISO19139A1_ROW10_11_12:"إذا كان النطاق مجموعة بيانات أو سلاسل، ستتطلب الحاجة لوجود أحد العبارات أو خطوات العمليات أو مصدر البيانات.",ISO19139A1_ROW15:"إذا تم التحقق من إتاحة النقطة، ستتطلب الحاجة للتحقق من وصف النقطة.",ISO19139A1_ROW18:"إذا كان التوزيع موثق ستتطلب الحاجة لوجود تنسيق أو موزع/تنسيق.",INSPIRE_AccessLimitation:" تتطلب الحاجة لوجود كود قيد قانوني واحد أو كود تصنيف أمان. (INSPIRE)",INSPIRE_UseLimitation:" تتطلب الحاجة لاستخدام قيد واحد على الأقل. (INSPIRE)",INSPIRE_ConformanceResult:"يتطلب تقرير تناسق المجال نتيجة متطابقة. (INSPIRE)",INSPIRE_DomainConsistency:"تتطلب الحاجة لوجود تقرير تناسق مجال. (INSPIRE)",INSPIRE_LineageStatement:"إذا كان النطاق مجموعة بيانات أو سلاسل، ستتطلب الحاجة لوجود عبارة محاذاة. (INSPIRE).",FGDC_DescIfTemporal:"يتطلب الوصف لنطاق مؤقت. (FGDC)",FGDC_Keywords:"يتطلب وجود موضوع أو علامة أو كلمة أساسية للموضوع. (FGDC)",FGDC_Reports:"يتطلب وجود تقارير إهمال الإكمال وتناسق التصور. (FGDC)",FGDC_Temporal:"تتطلب الحاجة لوجود نطاق مؤقت. (FGDC)",NAP_Contact:"تطلب الحاجة لوجود عنوان/نقطة تسليم أو رقم هاتف/بريد صوتي أو عنوان URL/موارد متصلة بشبكة الإنترنت. (NAP)",GEN_BoundingBox:"تتطلب الحاجة لوجود مربع إحاطة جغرافي واحد على الأقل.",GEN_ReportResult:"تتطلب الحاجة لوجود نتيجة توافق أو كمي.",minLessThanMax:"يجب أن يكون الحد الأدنى للقيمة أقل من الحد الأقصى للقيمة."},hints:{integerGreaterThanZero:"(أدخل عدد صحيح > 0)",integerGreaterThanOne:"(أدخل عدد صحيح > 1)",integer0To100:"(أدخل عدد صحيح 0..100)",maxScale:"(أدخل عدد صحيح > 0، على سبيل المثال 50000)",minScale:"(أدخل عدد صحيح > 0، على سبيل المثال 150000000)",number0To100:"(أدخل رقم 0..100)",number0To360:"(أدخل رقم 0..360)",number90To90:"(أدخل رقم - 90..90)",listOfDoubles:"(أدخل قائمة من الأعداد، استخدم مساحة للفصل)"},htmlEditor:{button:"تحرير..."},sections:{overview:"نظرة عامة",esri:"Esri",resource:"المورد",reference:"إسناد",content:"المحتوى",distribution:"التوزيع",quality:"الجودة",eainfo:"حقول",representation:"التمثيل",metadata:"الوصفية"},metadataStyle:{caption:"نمط البيانات التعريفية ArcGIS",changeButton:"تغيير...",dialogTitle:"اختر نمط البيانات التعريفية",updating:"جارِ تحديث المستند...","Item Description":"وصف العنصر","FGDC CSDGM Metadata":"البيانات التعريفية FGDC CSDGM","ISO 19139 Metadata Implementation Specification":"مواصفات تنفيذ البيانات التعريفية ISO 19139","ISO 19139 Metadata Implementation Specification GML3.2":"مواصفات تنفيذ البيانات التعريفية ISO 19139 GML3.2","INSPIRE Metadata Directive":"توجيه البيانات التعريفية INSPIRE","North American Profile of ISO19115 2003":"الملف التعريفي لأمريكا الشمالية ISO19115 2003"},aggrInfo:{caption:"معلومات التجميع",datasetHint:"يتطلب وجود مُعرف مجموعة بيانات أو اسم مجموعة بيانات.",aggrDSIdent:"مُعرف مجموعة البيانات",aggrDSName:"اسم مجموعة البيانات"},appSchInfo:{caption:"مخطط التطبيق",asName:"اسم المخطط",asSchLang:"لغة المخطط",asCstLang:"لغة القيد",asAscii:"ASCII",asGraFile:"ملف رسومات",asGraFile_src:"مورد ملف الرسومات",asSwDevFile:"ملف تطوير البرامج",asSwDevFile_src:"مصدر ملف تطوير البرنامج",asSwDevFiFt:"تنسيق ملف تطوير البرامج"},citation:{caption:"اقتباس",section:{titlesAndDates:"Titles & Dates",links:"عناوين URL",identifiers:"مُعرفات",presentation:"تشكيل",other:"آخر",edition:"إصدار",series:"سلاسل"},conditionalDate:{caption:"تاريخ الاقتباس",msg:"يتطلب وجود أحد تواريخ الإنشاء أو تاريخ النشر أو تاريخ المراجعة.",msg_nap:"يتطلب وجود تاريخ الاقتباس."},resTitle:"العنوان",resAltTitle:"عنوان بديل",collTitle:"عنوان تجميعي",date:{createDate:"تاريخ الإنشاء",pubDate:"تاريخ النشر",reviseDate:"تاريخ المراجعة",notavailDate:"تاريخ غير متاح",inforceDate:"تاريخ ساري المفعول",adoptDate:"تاريخ الممول",deprecDate:"تاريخ الإهمال",supersDate:"تاريخ الإبطال"},isbn:"ISBN",issn:"ISSN",citId:{caption:"المعرّف",identCode:"الكود",identAuth:"اقتباس الهيئة"},resEd:"إصدار",resEdDate:"تاريخ الإصدار",datasetSeries:{seriesName:"الاسم",issId:"مشكلة",artPage:"صفحة"},otherCitDet:"تفاصيل أخرى",contactCaption:"جهة اتصال الاقتباس"},cntAddress:{caption:"العنوان",delPoint:"نقطة التسليم",city:"مدينة",adminArea:"مساحة إدارية",postCode:"الرمز البريدي",country:"دولة",eMailAdd:"البريد الإلكتروني",addressType:{caption:"نوع العنوان",postal:"بريدي",physical:"فعلي",both:"كلاهما"}},cntOnlineRes:{caption:"الموارد المتصلة بالإنترنت",linkage:"عنوان URL",protocol:"بروتوكول",appProfile:"الملف التعريفي للتطبيق",orName:"الاسم",orDesc:"الوصف"},cntPhone:{caption:"الهواتف",voiceNum:"صوت",faxNum:"الفاكس",tddtty:"TDD/TTY?"},codeRef:{caption:"المعرّف",identCode:"الكود",idCodeSpace:"مساحة الكود",idVersion:"الإصدار",identAuth:"اقتباس الهيئة"},constraints:{caption:"القيود",useLimit:"حد الاستخدام",general:{caption:"عام"},legal:{caption:"قانوني",accessConsts:"قيود الوصول",useConsts:"استخدام القيود",othConsts:"قيود أخرى"},security:{caption:"أمان",classSys:"نظام التصنيف",userNote:"ملاحظة للمستخدم",handDesc:"وصف التعاملات"}},contInfo:{caption:"معلومات المحتوى",section:{CovDesc:"وصف الغطاء",ImgDesc:"وصف الصورة",FetCatDesc:"كتالوج معلم"},attDesc:"وصف بيان",covDim:{caption:"نطاق أو النطاق",seqID:"مُعرف التسلسل",seqIDType:"نوع مُعرف التسلسل",dimDescrp:"الواصف"},RangeDim:{caption:"أبعاد النطاق"},Band:{caption:"مجال",minVal:"الحد الأدنى للقيمة",maxVal:"الحد الأقصى للقيمة",valUnit:"وحدات القيمة",pkResp:"استجابة الذروة",bitsPerVal:"وحدات البت لكل قيمة",toneGrad:"تدرج الألوان",sclFac:"عامل مقياس الرسم",offset:"إزاحة"},CovDesc:{caption:"وصف الغطاء",section:{description:"الوصف",rangesAndBands:"النطاقات أو نطاقات"}},ImgDesc:{caption:"وصف الصورة",section:{description:"الوصف",rangesAndBands:"النطاقات أو نطاقات"},illElevAng:"زاوية ارتفاع الإضاءة",illAziAng:"زاوية السمت الخاصة بالإضاءة",cloudCovPer:"النسبة المئوية لغطاء الشبكة",cmpGenQuan:"جودة الضغط",trianInd:"مؤشر تحويل ثلاثي؟",radCalDatAv:"إتاحة بيانات معايرة الإشعاع؟",camCalInAv:"إتاحة معلومات معايرة الكاميرا؟",filmDistInAv:"إتاحة معلومات تصحيف الفيلم؟",lensDistInAv:"إتاحة معلومات تصحيف لينز؟",imagQuCode:"كود الجودة",prcTypCde:"كود مستوى المعالجة"},FetCatDesc:{caption:"كتالوج معلم",section:{description:"الوصف",featureTypes:"أنواع المعالم",citation:"اقتباس"},compCode:"التوافق مع ISO 19110؟",incWithDS:"Included With Dataset?",catCitation:"اقتباس كتالوج المعالم",catFetTyps:{caption:"نوع المعالم",genericName:"الاسم",codeSpace:"مساحة الكود"}}},contact:{caption:"اتصال",section:{name:"اسم جهة الاتصال",info:"معلومات الاتصال",hoursAndInstructions:"تعليمات Hours &"},conditionalName:{caption:"اسم جهة الاتصال",msg:"يتطلب وجود أحد الأسماء الفردية أو اسم المؤسسة أو اسم الموضع.",msg_fgdc:"يتطلب وجود أحد الأسماء الفردية أو اسم المؤسسة."},rpIndName:"الاسم الفردي",rpOrgName:"اسم المؤسسة",rpPosName:"اسم الموضع",rpCntInfo:"معلومات الاتصال",cntHours:"ساعات الخدمة",cntInstr:"تعليمات الاتصال"},distInfo:{caption:"معلومات التوزيع",section:{format:"التنسيق",distributor:"موزع",transfer:"خيارات النقل"},distFormat:{caption:"هيئة التوزيع",formatName:"اسم التنسيق",formatVer:"إصدار التنسيق",formatAmdNum:"عدد التعديل",formatSpec:"مواصفات",fileDecmTech:"تقنية تخفيف الضغط",formatInfo:"محتوى المعلومات"},distributor:{caption:"موزع"},distTranOps:{caption:"خيارات النقل الرقمي",section:{unitsAndSize:"الوحدات"},unitsODist:"وحدات التوزيع",transSize:"حجم النقل",offLineMed:{caption:"متوسط غير متصل",medDensity:"كثافة",medDenUnits:"وحدات الكثافة",medVol:"وحدات تخزين",medNote:"ملاحظة المتوسط"}},distorOrdPrc:{caption:"عملية الترتيب",resFees:"رسوم",planAvDtTm:"التاريخ المتاح",planAvTmPd:{caption:"فترة التاريخ المتوفرة",tmBegin:"بدء الزمن/التاريخ",tmEnd:"نهاية التاريخ/الزمن"},ordInstr:"تعليمات الترتيب",ordTurn:"الاستجابة"}},dqInfo:{caption:"جودة البيانات",section:{scope:"النطاق",report:"تقرير",lineage:"فرع"},dqScope:{section:{level:"المستوى",extent:"المدى"},scpLvl:"مستوى النطاق",scpLvlDesc:"وصف المستوى",scpExt:"نطاق المدى"},report:{section:{measure:"قياس",evaluation:"تقييم",result:"النتيجة",conformance:"التوافق"},measDesc:"وصف القياس",measName:"اسم القياس",measDateTm:"تاريخ القياس",measId:"مُعرّف القياس",evalMethDesc:"أسلوب التقييم",evalProc:"اقتباس إجراءات",ConResult:{caption:"نتيجة الامتثال",conExpl:"التفسير",conSpec:"مواصفات",conPass:{caption:"درجة",_1:"متوافق",_0:"غير متوافق"}},QuanResult:{caption:"نتيجة كمية",quanVal:"قيمة",quanValType:"نوع القيمة",quanValUnit:"وحدات القيمة",errStat:"إحصائيات الأخطاء"}},dataLineage:{section:{statement:"بيان",dataSource:"مصدر البيانات",prcStep:"خطوة عملية"},statement:"بيان المحاذاة",dataSource:{caption:"مصدر البيانات",section:{description:"الوصف",srcRefSys:"نظام المرجع",srcExt:"المدى",srcCitatn:"اقتباس"},srcDesc:"وصف المصدر",srcScale:{rfDenom:"مقام مقياس الرسم"},srcRefSys:"نظام إسناد المصدر",srcExt:"مدى المصدر",srcCitatn:"اقتباس المصدر"},prcStep:{caption:"خطوة عملية",section:{description:"الوصف",stepProc:"معالج",stepSrc:"مصدر البيانات"},stepDesc:"وصف العملية",stepRat:"السبب الجوهري",stepDateTm:"تاريخ إعداد العملية",stepProc:"معالج",stepSrc:"مصدر البيانات"}}},eainfo:{caption:"معلومات حول الوحدة والبيان",section:{detailed:"التفاصيل",overview:"نظرة عامة"},detailed:{caption:"تفاصيل الهوية والبيانات الجدولية",section:{enttyp:"الكيان",attr:"بيانات"},enttyp:{caption:"نوع الكينونة",enttypl:"التسمية",enttypt:"كائن",enttypc:"عدد",enttypd:"تحديد",enttypds:"مصدر التعريف"},attr:{caption:"بيان",section:{description:"الوصف",value:"قيمة",domain:"المجال"},attrlabl:"التسمية",attalias:"الاسم المستعار",attrdef:"تحديد",attrdefs:"مصدر التعريف",attrtype:"النوع",attwidth:"العرض",atprecis:"الدقة",attscale:"مقياس الرسم",atindex:"مفهرس",attrvai:{attrva:"توضيح القيمة",attrvae:"دقة القيمة"},attrmfrq:"تردد قياس القيمة",begdatea:"تاريخ بدء القيم",enddatea:"إنهاء تاريخ القيم",attrdomv:{caption:"المجال",edom:{caption:"تم التعداد",edomv:"قيمة",edomvd:"تحديد",edomvds:"مصدر التعريف"},rdom:{caption:"النطاق",rdommin:"الحد الأدنى للقيمة",rdommax:"الحد الأقصى للقيمة",rdommean:"المتوسط",rdomstdv:"انحراف معياري",attrunit:"الوحدات",attrmres:"دقة القياس"},codesetd:{caption:"مجموعة أكواد",codesetn:"الاسم",codesets:"مصدر"},udom:{caption:"غير قابل للتمثيل"}}}},overview:{caption:"نظرة عامة",eaover:"الملخص",eadetcit:"اقتباس"}},extent:{caption:"المدى",section:{description:"الوصف",geographic:"جغرافي",temporal:"زماني",vertical:"رأسي"},exDesc:"وصف النطاق",geoEle:{caption:"النطاق الجغرافي",GeoBndBox:{caption:"مربع الإحاطة",esriExtentType:"النطاق للبحث؟",exTypeCode:"هل يحتوي المدى على الموارد؟",westBL:"خط طول الإحاطة الغربي",eastBL:"خط طول الإحاطة الشرقي",southBL:"دائرة عرض الإحاطة الجنوبية",northBL:"دائرة عرض الإحاطة الشمالية"},GeoDesc:{caption:"وصف جغرافي",exTypeCode:"عل يحتوي الوصف على مورد؟",identCode:"الكود"}},tempEle:{caption:"نطاق مؤقت",TM_Period:"الفترة الزمنية",TM_Instant:"مثيل زمني",tmPosition:"التاريخ",tmBegin:"تاريخ البدء",tmEnd:"تاريخ الانتهاء"},vertEle:{caption:"مدى رأسي",vertMinVal:"الحد الأدنى للقيمة",vertMaxVal:"الحد الأقصى للقيمة"}},graphOver:{caption:"استعراض رسم بياني",bgFileName:"استعراض عنوان URL البياني",bgFileDesc:"استعراض الوصف البياني",bgFileType:"استعراض نوع ملف الجرافيك"},keywords:{caption:"الكلمات الأساسية",section:{topicCategory:"موضوع",searchKeys:"علامات",themeKeys:"سمة",placeKeys:"وضع",tempKeys:"زماني",discKeys:"النظام",stratKeys:"الطبقة",productKeys:"المنتج",subTopicCatKeys:"موضوع فرعي",otherKeys:"آخر"},delimited:"الكلمات الأساسية",searchKeys:"علامات",themeKeys:"الكلمات الأساسية للسمة",placeKeys:"مكان الكلمات الأساسية",tempKeys:"كلمات أساسية زمانية",discKeys:"كلمات أساسية للنظام",stratKeys:"الكلمات الأساسية للطبقة",productKeys:"الكلمات الأساسية للمنتج",subTopicCatKeys:"كلمات أساسية خاصة بموضوع فرعي",otherKeys:"كلمات أساسية أخرى",thesaName:"اقتباس من قاموس المترادفات",thesaLang:"لغة قاموس المترادفات"},locales:{caption:"المواقع",locale:"محلي",resTitle:"العنوان",idAbs:"الملخص"},maintenance:{caption:"الصيانة",section:{frequency:"تردد",scope:"النطاق",note:"ملحوظة"},usrDefFreq:"تردد مخصص",dateNext:"التحديث التالي",maintScp:"نطاق التحديث",upScpDesc:{caption:"وصف النطاق",attribSet:"بيانات",attribIntSet:"مثيلات البيان",featSet:"المعالم",featIntSet:"مثيلات المعلم",datasetSet:"مجموعة البيانات",other:"مثيلات أخرى"},maintNote:"ملاحظة الصيانة",maintCont:"جهة اتصال الصيانة"},metadata:{section:{profile:"ملف تعريفي",details:"النطاق"},mdFileID:"معرف الملف",mdParentID:"معرف أساسي",datasetURI:"URI خاص بمجموعة البيانات",dataSetFn:"وظيفة مجموعة البيانات",mdDateSt:"تاريخ البيانات التعريفية",mdLang:"لغة البيانات التعريفية",mdChar:"مجموعة الأحرف",mdHrLv:"مستوى تسلسل هيكلي",mdHrLvName:"اسم مستوى تسلسل هيكلي",mdContact:"جهات اتصال بيانات التعريف",mdMaint:"صيانة بيانات التعريف",mdConst:"قيود البيانات التعريفية"},porCatInfo:{caption:"اقتباس تصويري"},refSysInfo:{caption:"المرجع المكاني"},resource:{section:{citation:"اقتباس",details:"التفاصيل",description:"الوصف",keywords:"الكلمات الأساسية",status:"الحالة",resolution:"الدقة",representation:"التمثيل",browse:"استعراض رسم بياني",format:"التنسيق",usage:"الاستخدام",aggregateInfo:"الإجمالي",additional:"تتوافر خطوات إضافية لـ موارد مطور"},idAbs:"الوصف (الخلاصة)",idPurp:"الملخص (الغرض)",suppInfo:"معلومات تكميلية",idCredit:"اعتمادات",envirDesc:"بيئة المعالجة",dataLang:"لغة المورد",dataExt:"نطاق المورد",idPoC:"نقطة الاتصال",resMaint:"صيانة المورد",resConst:"قيود الموارد",dsFormat:"تنسيق المورد",dataScale:{caption:"مقياس البيانات",equScale:"دقة مقياس الرسم",scaleDist:"دقة المسافة",scaleDist_value:"مسافة"},idSpecUse:{caption:"استخدام المورد",specUsage:"استخدام معين",usageDate:"تاريخ الاستخدام",usrDetLim:"قيود",usrCntInfo:"جهة اتصال الاستخدام"}},service:{caption:"الخدمة",svType:"نوع الخدمة",svType_Name:"الاسم",svAccProps:"خصائص الوصول",svCouplRes:{caption:"مورد مزدوج",svOpName:"اسم العملية",svResCitId:"معرف موارد"},svCoupleType:"نوع الازدواج"},scaleRange:{caption:"نطاق مقياس الرسم",maxScale:"الحد الأقصى من المقياس",minScale:"أدنى مقياس رسم"},spatRepInfo:{caption:"تمثيل مكاني",section:{dimension:"البُعد",parameters:"معلمات"},numDims:"عدد الأبعاد",tranParaAv:"إتاحة معلمات التحويل؟",axisDimension:{caption:"البُعد",dimSize:"الحجم",dimResol:{caption:"الدقة",_value:"قيمة الدقة",uom:"وحدات الدقة"}},VectSpatRep:{caption:"بيانات خطية",geometObjs:"كائنات هندسية",geoObjCnt:"عدد الكائنات"},GridSpatRep:{caption:"شبكة"},Georect:{caption:"تصحيح جغرافي",section:{centerPoint:"نقطة المركز",cornerPts:"نقاط الجانب"},chkPtAv:"التحقق من إتاحة النقطة؟",chkPtDesc:"وصف نقطة التحقق",ptInPixel:"نقطة في البكسل",transDimDesc:"وصف أبعاد النقل",transDimMap:"مخطط أبعاد النقل",cornerPts:{caption:"نقطة جانبية",pos:"الموضع",gmlDesc:"الوصف",gmlDescRef:"إسناد",gmlIdent:"المعرّف",codeSpace:"Codespace خاصة بالمعرف"}},Georef:{caption:"إسناد جغرافي",ctrlPtAv:"إتاحة نقطة التحكم؟",orieParaAv:"إتاحة معلمات التوجيه؟",orieParaDs:"وصف معلمة الاتجاه",georefPars:"معلمات مرجعية جغرافية",paraCit:"اقتباس المعلمات"},Indref:{caption:"غير مباشر"}},booleanOptions:{_false:"لا",_true:"نعم"},codelist:{CountryCode:"دولة",LanguageCode:"اللغة",MonetaryUnits:"وحدات نقدية",MonetaryUnits_empty:"لا توجد عملة عالمية",PresentationForm:"نموذج تمثيل البيانات المكانية الجغرافية FGDC",CI_PresentationFormCode:"النموذج التقديمي",CI_RoleCode:"دور",CI_OnLineFunctionCode:"دالة",IMS_ContentType:"نوع المحتوى",DQ_ElementDimension:"البُعد",DQ_ElementType:"نوع التقرير",DQ_EvaluationMethodTypeCode:"نوع التقييم",DS_AssociationTypeCode:"نوع الاقتران",DS_InitiativeTypeCode:"النوع المبدئي",LI_SourceType:"نوع المصدر",MD_CellGeometryCode:"شكل هندسي للخلية",MD_CharacterSetCode:"مجموعة الأحرف",MD_ClassificationCode:"التصنيف",MD_CoverageContentTypeCode:"نوع المحتوى",MD_DimensionNameTypeCode:"نوع الأبعاد",MD_GeometricObjectTypeCode:"نوع الكائن الجغرافي",MD_ImagingConditionCode:"شرط التصوير",MD_MaintenanceFrequenceCode:"تكرار التحديث",MD_MediumFormatCode:"كود التنسيق",MD_MediumNameCode:"اسم متوسط",MD_PixelOrientationCode:"توجيه البكسل",MD_ProgressCode:"الحالة",MD_RestrictionCode:"كود التقييد",MD_ScopeCode:"النطاق",MD_SpatialRepresentationTypeCode:"نوع التمثيل المكاني",MD_TopicCategoryCode:"فئة موضوع",MD_TopologyLevelCode:"مستوى العلاقة المكانية",RS_Dimension:"البُعد",SV_CouplingType:"نوع الازدواج",UCUM:"الوحدات",UCUM_Length:"وحدات المسافة"}});