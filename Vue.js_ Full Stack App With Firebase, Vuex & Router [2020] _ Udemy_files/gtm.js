
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"344",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"UD.me.id"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.amount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";return parseFloat(a\/100).toFixed(2)})();"]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-clp-course-id\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"clp\"===document.body.getAttribute(\"data-hotjar-page\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector('div[data-purpose\\x3d\"introduction-video\"]')){var a=document.querySelector(\".current-price\");return a?a.textContent.replace(\"$\",\"\").trim():\"\"}})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-12366301-1"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){channelType=document.body.getAttribute(\"data-hotjar-channel-type\");hotjarPage=document.body.getAttribute(\"data-hotjar-page\");return\"featured\"===channelType||\"logged-in-homepage\"===hotjarPage})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-hotjar-channel-type\")||void 0})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-purpose"
    },{
      "function":"__r"
    },{
      "function":"__j",
      "vtp_name":"UD.request.locale"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"ja_JP\"==",["escape",["macro",19],8,16],"||\"ja-JP\"==",["escape",["macro",19],8,16],"||\"jp-JP\"==",["escape",["macro",19],8,16],"||\"jp_JP\"==",["escape",["macro",19],8,16],"})();"]
    },{
      "function":"__j",
      "vtp_name":"UD.visiting.visitor_uuid"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"blisspoint_fpc"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"is_first_paid_purchase"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_location"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"has_made_paid_purchase"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"US\"==UD.Config.marketplace_country.id})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_avg_rating"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_instructor_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_length_minutes"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_locale"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_num_enrollments"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_subcategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_topic"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_locale"
    },{
      "function":"__v",
      "vtp_name":"isMember",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchases"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseId"
    },{
      "function":"__j",
      "vtp_name":"UD.me.encrypted_affiliate_uid"
    },{
      "function":"__j",
      "vtp_name":"UD.me.encrypted_affiliate_email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseAmount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseSku"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.isMarketingBoostAgreed"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.affiliateType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.buyableId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";return parseFloat(a\/100).toFixed(2)})();"]
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-course-labels-experiment-hotjar\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"peclp\"===document.body.getAttribute(\"data-hotjar-page\")})();"]
    }],
  "tags":[{
      "function":"__html",
      "priority":99,
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction create_UUID(){var a=(new Date).getTime(),d=\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(\/[xy]\/g,function(b){var c=(a+16*Math.random())%16|0;a=Math.floor(a\/16);return(\"x\"==b?c:c\u00263|8).toString(16)});return d}function createCookie(a,d,b){var c=new Date;c.setTime(c.getTime()+36E5*b);b=\"; expires\\x3d\"+c.toGMTString();document.cookie=d\u0026\u0026\"undefined\"!==d?a+\"\\x3d\"+d+b+\"; path\\x3d\/\":a+\"\\x3d\"+create_UUID()+b+\"; path\\x3d\/\"}createCookie(\"blisspoint_fpc\",",["escape",["macro",22],8,16],",168);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":428
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E\"undefined\"===typeof fbq\u0026\u0026(!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\"),",["escape",["macro",28],8,16],"||fbq(\"init\",\"1457291081167286\"),fbq(\"init\",\"399727027340013\"),",["escape",["macro",28],8,16],"||fbq(\"trackSingle\",\n\"1457291081167286\",\"PageView\"),fbq(\"trackSingle\",\"399727027340013\",\"PageView\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":13
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E(function(a,e,f,g,b,c,d){a[b]=a[b]||function(){(a[b].a=a[b].a||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/mc.yandex.ru\/metrika\/tag.js\",\"ym\");ym(53931514,\"init\",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cdiv\u003E\u003Cimg src=\"https:\/\/mc.yandex.ru\/watch\/53931514\" style=\"position:absolute; left:-9999px;\" alt=\"\"\u003E\u003C\/div\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":217
    },{
      "function":"__cl",
      "tag_id":28
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"PKv-COL4z1wQk9e00AM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":38
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":80
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"courseview",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",8],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",8]],["map","index","6","dimension","offerdetail"],["map","index","8","dimension",["macro",10]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":122
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"send",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"15_seconds",
      "vtp_eventLabel":"read",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":123
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":124
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"purchase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"course",
      "vtp_eventLabel":"transaction_purchase",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",6],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":133
    },{
      "function":"__img",
      "metadata":["map"],
      "setup_tags":["list",["tag",91,1]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/1fab027e63e94ad4b34e2e8d70e972d9\/pixel?tag=Purchase",
      "tag_id":145
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"business.udemy.com",
      "vtp_decorateFormsAutoLink":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","True"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackerName":"ufbonly",
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-47",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":146
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"linkshare",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"signup",
      "vtp_eventLabel":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":163
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":180
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"877556973",
      "vtp_conversionLabel":"j88uCJmGiXkQ7em5ogM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":181
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":186
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":196
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":197
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":201
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"21002562",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":205
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"HsE0CKDW8pABEJPXtNAD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":206
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":207
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":208
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":209
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"828847995",
      "vtp_conversionLabel":"mqA6CMD-5ZIBEPvunIsD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":210
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"828847995",
      "vtp_conversionLabel":"E_BECNaa5pIBEPvunIsD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":211
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":212
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"374972",
      "tag_id":213
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":214
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":215
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=2542116;type=gwg;cat=udemy000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1;num=1?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":216
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":221
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":222
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":223
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":224
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"715649091",
      "vtp_conversionLabel":"Bc8dCNaqmagBEMPgn9UC",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":228
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"715649091",
      "vtp_conversionLabel":"OR8bCLmumagBEMPgn9UC",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":229
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":374
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":375
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"880479204",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",7],
      "vtp_enableRdpCheckbox":true,
      "tag_id":376
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"GiYPCISDssMBEOSX7KMD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":377
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"9fRMCPq2oWcQ5JfsowM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":378
    },{
      "function":"__img",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=visit\u0026fpc=",["escape",["macro",22],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":387
    },{
      "function":"__img",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=purchase-success\u0026order_value=",["escape",["macro",6],12],"\u0026new=",["escape",["macro",23],12],"\u0026fpc=",["escape",["macro",22],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":388
    },{
      "function":"__img",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=signup-success\u0026fpc=",["escape",["macro",22],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":389
    },{
      "function":"__cl",
      "tag_id":429
    },{
      "function":"__cl",
      "tag_id":430
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"15000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_139",
      "tag_id":431
    },{
      "function":"__cl",
      "tag_id":432
    },{
      "function":"__cl",
      "tag_id":433
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_344_340","164179_344_392","164179_344_46"],
      "vtp_uniqueTriggerId":"164179_344",
      "tag_id":434
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_340",
      "tag_id":435
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_392",
      "tag_id":437
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_46",
      "tag_id":439
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_386_385","164179_386_320"],
      "vtp_uniqueTriggerId":"164179_386",
      "tag_id":440
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_386_385",
      "tag_id":441
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_386_320",
      "tag_id":443
    },{
      "function":"__cl",
      "tag_id":444
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_415_340","164179_415_392","164179_415_46"],
      "vtp_uniqueTriggerId":"164179_415",
      "tag_id":445
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_415_340",
      "tag_id":446
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_415_392",
      "tag_id":448
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_415_46",
      "tag_id":450
    },{
      "function":"__cl",
      "tag_id":451
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_424_92","164179_424_425"],
      "vtp_uniqueTriggerId":"164179_424",
      "tag_id":452
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_424_92",
      "tag_id":453
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_424_425",
      "tag_id":455
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_426_425","164179_426_1"],
      "vtp_uniqueTriggerId":"164179_426",
      "tag_id":456
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_426_425",
      "tag_id":457
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_426_1",
      "tag_id":459
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _kiq=_kiq||[];(function(){setTimeout(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/cl.qualaroo.com\/ki.js\/34436\/6GL.js\";b.parentNode.insertBefore(a,b)},1)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a=document.body.getAttribute(\"data-clp-course-id\");a\u0026\u0026!",["escape",["macro",28],8,16],"\u0026\u0026fbq(\"track\",\"ViewContent\",{content_ids:a,content_type:\"product\",course_avg_rating:",["escape",["macro",29],8,16],",course_category:",["escape",["macro",30],8,16],",course_instructor_name:",["escape",["macro",31],8,16],",course_language:",["escape",["macro",24],8,16],",course_length_minutes:",["escape",["macro",32],8,16],",course_locale:",["escape",["macro",33],8,16],",course_num_enrollments:",["escape",["macro",34],8,16],",course_subcategory:",["escape",["macro",35],8,16],",course_topic:",["escape",["macro",36],8,16],",\nuser_language:",["escape",["macro",25],8,16],",user_locale:",["escape",["macro",37],8,16],",user_location:",["escape",["macro",26],8,16],",has_made_paid_purchase:",["escape",["macro",27],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":40
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003EUD.GoogleAnalytics.setValue(\"dimension7\",\"true\");UD.GoogleAnalytics.trackEvent(\"ismember\",\"ismember\",\"ismember\",void 0,void 0,{nonInteraction:1});",["escape",["macro",28],8,16],"||fbq(\"trackCustom\",\"isMember\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b=document.body.getAttribute(\"data-clp-course-id\")||\"NA\",a=document.querySelector('[data-purpose\\x3d\"course-price-text\"]');a=a?a.textContent.replace(\"$\",\"\").trim().match(\/\\d+(?:\\.\\d+)?\/):null;void 0!==UD.GoogleAnalytics\u0026\u0026(UD.GoogleAnalytics.setValue(\"dimension5\",b),UD.GoogleAnalytics.setValue(\"dimension6\",\"conversionintent\"),UD.GoogleAnalytics.setValue(\"dimension8\",a[0]),UD.GoogleAnalytics.trackEvent(\"addtocartclick\",b,a[0],{nonInteraction:1}));",["escape",["macro",28],8,16],"||fbq(\"track\",\"AddToCart\",\n{content_name:\"Shopping Cart\",content_ids:b,content_type:\"product\"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":60
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b=",["escape",["macro",39],8,16],".map(function(a){return a.buyableId}),c=",["escape",["macro",39],8,16],".map(function(a){course=a.courseAnalytics;return{id:a.buyableId,quantity:1,course_avg_rating:course.course_avg_rating,course_category:course.course_category,course_instructor_name:course.course_instructor_name,course_language:course.course_language,course_length_minutes:course.course_length_minutes,course_locale:course.course_locale,course_num_enrollments:course.course_num_enrollments,course_subcategory:course.course_subcategory,\ncourse_topic:course.course_topic}});",["escape",["macro",28],8,16],"\u0026\u0026fbq(\"init\",\"1457291081167286\");fbq(\"track\",\"Purchase\",{content_ids:b,content_type:\"product\",contents:c,order_id:",["escape",["macro",40],8,16],",value:",["escape",["macro",6],8,16],",currency:\"USD\",user_language:",["escape",["macro",25],8,16],",user_locale:",["escape",["macro",37],8,16],",user_location:",["escape",["macro",26],8,16],",has_made_paid_purchase:",["escape",["macro",27],8,16],",is_first_paid_purchase:",["escape",["macro",23],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/6554.js\" type=\"text\/gtmscript\" defer\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E",["escape",["macro",28],8,16],"||fbq(\"trackCustom\",\"SignupSuccess\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":128
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E",["escape",["macro",28],8,16],"\u0026\u0026fbq(\"init\",\"1457291081167286\");fbq(\"trackCustom\",\"NewUserPurchase\",{value:",["escape",["macro",6],8,16],",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":156
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"273-CKQ-053\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E",["escape",["macro",28],8,16],"||fbq(\"trackCustom\",\"LinkshareSignupClick\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(g,e,a,f,b,c,d){b.ire_o=a;b[a]=b[a]||function(){(b[a].a=b[a].a||[]).push(arguments)};c=f.createElement(e);d=f.getElementsByTagName(e)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(\"\/\/d.impactradius-event.com\/A380319-1bcf-4b7b-9299-22e85825ceea1.js\",\"script\",\"ire\",document,window);ire(\"identify\",{customerId:",["escape",["macro",42],8,16],",customerEmail:",["escape",["macro",43],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":175
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript src=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Etwttr.conversion.trackPid(\"ny0dy\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":176
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":177
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new XMLHttpRequest;a.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);a.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");a.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");a.send(JSON.stringify({type:\"aff\"}))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new XMLHttpRequest;a.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);a.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");a.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");a.send(JSON.stringify({type:\"paid_acq\"}))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){try{var b={id:\"88dg1\",event:\"\"},a=document.createElement(\"script\");a.src=\"\/\/api.smartnews-ads.com\/assets\/conv.js?\"+(new Date).getTime();a.type=\"text\/javascript\";a.id=\"_smartnews_ads_conversion_script_\"+b.id;a.setAttribute(\"data-smartnews-ads\",JSON.stringify(b));(document.body||document.head).appendChild(a)}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/javascript\"\u003E(function(a){window.DataLayer||(window.DataLayer={});DataLayer.events||(DataLayer.events={});DataLayer.events.SPIVersion=DataLayer.events.SPIVersion||\"3.2\";DataLayer.events.SiteSection=\"1\";var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document.location.protocol+\"\/\/intljs.rmtag.com\/111655.ct.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":203
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var Q={affiliateConfig:{ranMID:\"39197\",discountType:\"item\",includeStatus:\"false\",tagType:\"mop\",allowCommission:(\"linkshare\"===",["escape",["macro",50],8,16],").toString()},displayConfig:{rdMID:\"8712\"},orderid:",["escape",["macro",41],8,16],",currency:\"USD\",customerStatus:\"CUSTOMER_STATUS\",conversionType:\"Sale\",customerID:",["escape",["macro",42],8,16],",discountCode:",["escape",["macro",44],8,16],",taxAmount:0,optionalData:{},lineitems:[{quantity:1,unitPrice:",["escape",["macro",45],8,16],"\/100,unitPriceLessTax:",["escape",["macro",45],8,16],"\/100,SKU:",["escape",["macro",51],8,16],",\nproductName:",["escape",["macro",51],8,16],"}]};!function(e,m,y){var f=e.rakutenDataLayerName||\"DataLayer\";e[f]=e[f]||{};e[f].events=e[f].events||{};e[f].events.SPIVersion=\"3.4.1\";e[f].Sale=e[f].Sale||{};e[f].Sale.Basket=e[f].Sale.Basket||{};y.Ready=e[f].Sale.Basket.Ready\u0026\u0026e[f].Sale.Basket.Ready+1||1;e[f].Sale.Basket=y;var J=function(a){for(var b=a+\"\\x3d\",c=m.cookie.split(\";\"),d=0;d\u003Cc.length;d++){for(a=c[d];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return\"\"};\ny=function(a){var b=a||\"\",c={};if(a||(b=J(\"rmStore\")),b){for(;b!==decodeURIComponent(b);)b=decodeURIComponent(b);a=b.split(\"|\");for(b=0;b\u003Ca.length;b++)c[a[b].split(\":\")[0]]=a[b].split(\":\")[1]}return c};var I={};I=y();var g=function(a,b,c,d){c=c||\"\";d=d||{};a=I[a||\"\"];b=d[b||\"\"];c=(a=(d=d.ignoreCookie||!1)?0:a)||b||c;return c=(\"string\"!=typeof c||\"false\"!==c.toLowerCase())\u0026\u0026c,c},K=function(a,b,c,d,e){var f=m.createElement(a),g=-1\u003Cm.location.protocol.indexOf(\"s\")?\"https:\":\"http:\",q;for(q in b=b.replace(\"https:\",\ng),f.src=b,d=d||{},\"script\"==a?d.type=d.type||\"text\/javascript\":(d.style=\"display:none;\",\"img\"==a\u0026\u0026(d.alt=\"\",d.height=\"1\",d.width=\"1\")),d)d.hasOwnProperty(q)\u0026\u0026f.setAttribute(q,d[q]);a=m.getElementsByTagName(c);a=a.length?a[0]:m.getElementsByTagName(\"script\")[0].parentElement;e\u0026\u0026(f.onload=e,f.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||e()});a.appendChild(f)},L=function(a){var b=new Date;b=b.getUTCFullYear()+(\"0\"+(b.getUTCMonth()+1)).slice(-2)+(\"0\"+b.getUTCDate()).slice(-2)+\n(\"0\"+b.getUTCHours()).slice(-2)+(\"0\"+b.getUTCMinutes()).slice(-2);return\"NoOID_\"+(a?a+\"_\":\"\")+Math.round(1E5*Math.random())+\"_\"+b},N=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},b=b||a.affiliateConfig||{},c=g(\"amid\",\"ranMID\",\"\",b)||a.ranMID;if(!c)return!1;var d=\"undefined\"==typeof b.allowCommission||\"false\"!==b.allowCommission;if(!d||!(a.orderid||a.lineitems\u0026\u0026a.lineitems.length))return!1;var R=g(\"adn\",\"domain\",\"track.linksynergy.com\",b),n=g(\"atm\",\"tagType\",\"pixel\",b);d=g(\"adr\",\n\"discountType\",\"order\",b);var k=g(\"acs\",\"includeStatus\",\"false\",b),q=g(\"arto\",\"removeOrderTax\",\"false\",b),A=g(\"artp\",\"removeTaxFromProducts\",\"false\",b),u=g(\"artd\",\"removeTaxFromDiscount\",\"false\",b),p=g(\"atr\",\"taxRate\",a.taxRate||0,b),z=g(\"ald\",\"land\",!1,{})||(b.land\u0026\u0026!0===b.land?J(\"ranLandDateTime\"):b.land)||!1,M=g(\"atrv\",\"tr\",!1,{})||(b.tr\u0026\u0026!0===b.tr?J(\"ranSiteID\"):b.tr)||!1,G=g(\"acv\",\"centValues\",\"true\",b),v=g(\"ancc\",\"nonCentCurrencies\",\"JPY\",b);p=Math.abs(+p);var r=(100+p)\/100;b=a.orderid||L(c);\nb=encodeURIComponent(b);var w=a.currency||\"\";w=encodeURIComponent(w.toUpperCase());var B=!1;if(w\u0026\u0026v){v=(v+\"\").split(\",\");for(var l=0;l\u003Cv.length;l++)v[l]==w\u0026\u0026(B=!0)}var m=function(a){return B\u0026\u0026(a=Math.round(a)),G\u0026\u0026\"false\"!==G?(a*=100,a=Math.round(a)):a=Math.round(100*a)\/100,a+\"\"};v=a.taxAmount?Math.abs(+a.taxAmount):0;var C=a.discountAmount?Math.abs(+a.discountAmount):0;l=a.discountAmountLessTax?Math.abs(+a.discountAmountLessTax):0;!l\u0026\u0026C\u0026\u0026u\u0026\u0026p\u0026\u0026(l=C\/r);l=l||C;u=\"ep\";\"mop\"===n\u0026\u0026(u=\"eventnvppixel\");\nC=(a.customerStatus||\"\")+\"\";n=\"\";C\u0026\u0026(k\u0026\u0026\"EXISTING\"==C.toUpperCase()||k\u0026\u0026\"RETURNING\"==C.toUpperCase())\u0026\u0026(n=\"R_\");k=[];for(var E=C=0;E\u003C(a.lineitems?a.lineitems.length:0);E++)if(a.lineitems[E]){var F=!1,h=e.JSON?JSON.parse(JSON.stringify(a.lineitems[E])):a.lineitems[E],y=+h.quantity||0,D=+h.unitPrice||0,t=+h.unitPriceLessTax;D=t||D||0;A\u0026\u0026p\u0026\u0026!t\u0026\u0026(D\/=r);D*=y;for(var H=0;H\u003Ck.length;H++)t=k[H],t.SKU===h.SKU\u0026\u0026(F=!0,t.quantity+=y,t.totalValue+=D);F||(h.quantity=y,h.totalValue=D,k.push(h));C+=D}F=r=p=A=\"\";\nt={};for(E=0;E\u003Ck.length;E++){h=k[E];D=encodeURIComponent(h.SKU);H=h.totalValue;y=h.quantity;var I=encodeURIComponent(h.productName)||\"\";\"item\"===d.toLowerCase()\u0026\u0026l\u0026\u0026(H-=l*H\/C);h=h.optionalData;for(var x in h)h.hasOwnProperty(x)\u0026\u0026(t[x]=t[x]||\"\",t[x]+=encodeURIComponent(h[x])+\"|\");A+=n+D+\"|\";p+=y+\"|\";r+=m(H)+\"|\";F+=n+I+\"|\"}A=A.slice(0,-1);p=p.slice(0,-1);r=r.slice(0,-1);F=F.slice(0,-1);l\u0026\u0026(l=m(l));v\u0026\u0026(v=m(v));l\u0026\u0026\"order\"===d.toLowerCase()\u0026\u0026(A+=\"|\"+n+\"DISCOUNT\",F+=\"|\"+n+\"DISCOUNT\",p+=\"|0\",r+=\"|-\"+l);\nq\u0026\u0026v\u0026\u0026(A+=\"|\"+n+\"ORDERTAX\",p+=\"|0\",r+=\"|-\"+v,F+=\"|\"+n+\"ORDERTAX\");c=\"https:\/\/\"+R+\"\/\"+u+\"?mid\\x3d\"+c;c+=\"\\x26ord\\x3d\"+b;c+=z?\"\\x26land\\x3d\"+z:\"\";c+=M?\"\\x26tr\\x3d\"+M:\"\";c+=\"\\x26cur\\x3d\"+w;c+=\"\\x26skulist\\x3d\"+A;c+=\"\\x26qlist\\x3d\"+p;c+=\"\\x26amtlist\\x3d\"+r;c+=\"\\x26img\\x3d1\";c+=\"\\x26spi\\x3d\"+e[f].events.SPIVersion;l\u0026\u0026\"item\"===d.toLowerCase()\u0026\u0026(c+=\"\\x26discount\\x3d\"+l);h=a.optionalData||{};for(x in a.discountCode\u0026\u0026(h.coupon=a.discountCode),a.customerStatus\u0026\u0026(h.custstatus=a.customerStatus),a.customerID\u0026\u0026\n(h.custid=a.customerID),l\u0026\u0026(h.disamt=l),h)h.hasOwnProperty(x)\u0026\u0026(c+=\"\\x26\"+encodeURIComponent(x)+\"\\x3d\"+encodeURIComponent(h[x]));for(x in t)t.hasOwnProperty(x)\u0026\u0026(c+=\"\\x26\"+encodeURIComponent(x)+\"list\\x3d\"+t[x].slice(0,-1),l\u0026\u0026\"order\"===d.toLowerCase()\u0026\u0026(c+=\"|\"),v\u0026\u0026q\u0026\u0026(c+=\"|\"));c+=\"\\x26namelist\\x3d\"+F;if(8E3\u003Cc.length){for(a=8E3;0\u003Ca;)if(\"\\x26\"==c.charAt(a)){c=c.slice(0,a);break}else a--;c+=\"\\x26trunc\\x3dtrue\"}K(\"img\",c,\"body\")},O=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},\nb=b||a.displayConfig||{},c=g(\"dmid\",\"rdMID\",\"\",b);if(!c||!a.orderid\u0026\u0026!a.conversionType)return!1;var d=g(\"dtm\",\"tagType\",\"js\",b),y=g(\"ddn\",\"domain\",\"tags.rd.linksynergy.com\",b),n=g(\"dis\",\"includeStatus\",\"false\",b),k=g(\"dcomm\",\"allowCommission\",\"notset\",b),q=g(\"duup\",\"useUnitPrice\",\"false\",b),A=g(\"drtp\",\"removeTaxFromProducts\",\"false\",b),u=g(\"drtd\",\"removeTaxFromDiscount\",\"false\",b),p=g(\"dtr\",\"taxRate\",a.taxRate||0,b);b=\"\";\"true\"===k||!0===k||\"1\"===k||1===k?b=\"1\":(\"false\"===k||!1===k||\"0\"===k||0===\nk)\u0026\u0026(b=\"0\");d=\"js\"===d||\"if\"===d||\"img\"===d?d:\"js\";k=\"script\";\"if\"===d?k=\"iframe\":\"img\"===d\u0026\u0026(k=\"img\");\"true\"!==q\u0026\u0026!0!==q\u0026\u0026\"1\"!==q\u0026\u00261!==q||(q=!0);var z=(a.customerStatus||\"\")+\"\",m=\"\";z\u0026\u0026n\u0026\u0026(\"EXISTING\"==z.toUpperCase()||\"RETURNING\"==z.toUpperCase())\u0026\u0026(m=\"R_\");(n=a.orderid)||(n=L((a.conversionType+\"\").toLowerCase()+\"_\"+c));n=encodeURIComponent(m+n);m=encodeURIComponent(a.currency||\"\");z=0;var G=\"\";p=Math.abs(+p);var v=(100+p)\/100,r=a.discountAmount?Math.abs(+a.discountAmount):0,w=a.discountAmountLessTax?\nMath.abs(+a.discountAmountLessTax):0;!w\u0026\u0026r\u0026\u0026u\u0026\u0026p\u0026\u0026(w=r\/v);w=w||r;w=isNaN(w)?0:w;for(u=0;u\u003C(a.lineitems?a.lineitems.length:0);u++)if(a.lineitems[u]){r=+a.lineitems[u].quantity;var B=+a.lineitems[u].unitPriceLessTax*r;(!B||q)\u0026\u0026(A\u0026\u0026p?B=+a.lineitems[u].unitPrice\/v*r:B=+a.lineitems[u].unitPrice*r);B=isNaN(B)?0:B;z+=B;G+=encodeURIComponent(a.lineitems[u].SKU)+\",\"}z=Math.round(100*(z-w))\/100;G=G.slice(0,-1);a=\"https:\/\/\"+y+\"\/\"+d+\"\/\"+c;a+=\"\/?pt\\x3dconv\";a+=\"\\x26orderNumber\\x3d\"+n;a+=\"\\x26spi\\x3d\"+e[f].events.SPIVersion;\nz\u0026\u0026(a+=\"\\x26price\\x3d\"+z);m\u0026\u0026(a+=\"\\x26cur\\x3d\"+m);b\u0026\u0026(a+=\"\\x26tvalid\\x3d\"+b);G\u0026\u0026(a+=\"\\x26prodID\\x3d\"+G);K(k,a,\"body\")},P=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},b=a.searchConfig||{},c=1024,d=encodeURIComponent(\"...TRUNCATED\"),m=g(\"smid\",\"rsMID\",\"\",b);if(!m)return!1;var n=g(\"said\",\"accountID\",\"113\",b),k=g(\"sclid\",\"clickID\",\"\",b),q=encodeURIComponent(g(\"sct\",\"conversionType\",a.conversionType\u0026\u0026\"sale\"!==(a.conversionType+\"\").toLowerCase()?a.conversionType:\"conv\",b));K(\"script\",\n\"https:\/\/services.xg4ken.com\/js\/kenshoo.js?cid\\x3d\"+m,\"body\",null,function(){var b={};if(b.conversionType=q,b.revenue=0,b.currency=encodeURIComponent(a.currency||\"USD\"),b.orderId=encodeURIComponent(a.orderid||L(q)),b.promoCode=encodeURIComponent(a.discountCode||\"\"),k\u0026\u0026(b.ken_gclid=encodeURIComponent(k)),b.discountAmount=+(a.discountAmount||0),b.discountAmount=isNaN(b.discountAmount)?0:Math.abs(b.discountAmount),b.customerStatus=encodeURIComponent(a.customerStatus||\"\"),b.productIDList=\"\",b.productNameList=\n\"\",a.lineitems\u0026\u0026a.lineitems.length){for(var e=0;e\u003Ca.lineitems.length;e++)a.lineitems[e]\u0026\u0026(b.revenue+=+(a.lineitems[e].unitPrice||0)*+a.lineitems[e].quantity,b.productIDList+=(a.lineitems[e].SKU||\"NA\")+\",\",b.productNameList+=(a.lineitems[e].productName||\"NA\")+\",\");b.revenue=Math.round(100*(b.revenue-b.discountAmount))\/100;b.productIDList=encodeURIComponent(b.productIDList.slice(0,-1));b.productNameList=encodeURIComponent(b.productNameList.slice(0,-1));b.productIDList.length\u003Ec\u0026\u0026(b.productIDList=b.productIDList.substring(0,\nc-d.length)+d);b.productNameList.length\u003Ec\u0026\u0026(b.productNameList=b.productNameList.substring(0,c-d.length)+d)}kenshoo.trackConversion(n,m,b)})};e[f].SPI={readRMCookie:J,processRMStoreCookie:y,readRMStoreValue:g,sRAN:N,sDisplay:O,sSearch:P,addElement:K,rmStore:I};N();O();P()}(window,document,Q)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":204
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow.ym(53931514,\"reachGoal\",\"SIGNUP\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":218
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow.ym(53931514,\"reachGoal\",\"ADD_TO_CART\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":219
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.ym(53931514,\"reachGoal\",\"PURCHASE\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":220
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"1fab027e63e94ad4b34e2e8d70e972d9\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/1fab027e63e94ad4b34e2e8d70e972d9\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar adb_head=document.getElementsByTagName(\"head\")[0],adb_tag=document.createElement(\"script\");adb_tag.src=\"https:\/\/udemy.benesse.co.jp\/js_udemy\/AppMeasurement_js.js\";adb_tag.defer=!0;adb_head.appendChild(adb_tag);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,d,a,e){b[a]=b[a]||[];b[a].push({t:(new Date).getTime(),event:\"snippetRun\"});b=c.getElementsByTagName(d)[0];c=c.createElement(d);a=\"paypalDDL\"!==a?\"\\x26m\\x3d\"+a:\"\";c.async=!0;c.src=\"https:\/\/www.paypal.com\/tagmanager\/pptm.js?t\\x3dxo\\x26id\\x3d\"+e+a;b.parentNode.insertBefore(c,b)})(window,document,\"script\",\"paypalDDL\",\"udemy.com\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":379
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",93,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.paypalDDL=window.paypalDDL||[];paypalDDL.push({event:\"txnSuccess\",txn_id:",["escape",["macro",40],8,16],",tpv:",["escape",["macro",6],8,16],",curr:\"USD\",prcd:",["escape",["macro",44],8,16],",srce:\"other\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":380
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/ytag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.yjDataLayer=window.yjDataLayer||[];function ytag(){yjDataLayer.push(arguments)}ytag({type:\"ycl_cookie\"});ytag({type:\"yjad_retargeting\",config:{yahoo_retargeting_id:\"L7W82OXY21\",yahoo_retargeting_label:\"\"}});ytag({type:\"yss_retargeting\",config:{yahoo_ss_retargeting_id:\"1001117028\",yahoo_sstag_custom_params:{}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":381
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",95,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yss_conversion\",config:{yahoo_conversion_id:\"1001117028\",yahoo_conversion_label:\"N7oaCJGWlccBEJ3bq7wC\",yahoo_conversion_value:\"0\"}});ytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"dSxK7VIOLDUlhexqraaE\",yahoo_ydn_conv_label:\"VJAD6LZA35U102W9UT6686135\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"0\"}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":382
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",95,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yss_conversion\",config:{yahoo_conversion_id:\"1001117028\",yahoo_conversion_label:\"BCAiCKantscBEJ3bq7wC\",yahoo_conversion_value:\"0\"}});ytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"dSxK7VIOLDUlhexqraaE\",yahoo_ydn_conv_label:\"A1D9GUOZCCX1QBPLQ7K686506\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"0\"}});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":383
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript\u003E!function(a,b){if(!a.rdt){var c=a.rdt=function(){c.sendEvent?c.sendEvent.apply(c,arguments):c.callQueue.push(arguments)};c.callQueue=[];a=b.createElement(\"script\");a.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(window,document);rdt(\"init\",\"t2_65f22gux\");rdt(\"track\",\"PageVisit\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":395
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",98,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Erdt(\"track\",\"SignUp\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":397
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",98,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Erdt(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":398
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o0f51\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":400
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",101,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Etwq(\"track\",\"Signup\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":401
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",101,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Etwq(\"track\",\"Purchase\",{value:",["escape",["macro",52],8,16],",currency:\"USD\",num_items:\"1\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":402
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,d,f,b,c,e){a.mejord||(b=a.mejord=function(){b.tq.push(arguments)},a._mejord||(a._mejord=b),b.tq=[],b.version=\"2.0.14-1\",a=\"script\",(c=d.createElement(a)).async=!0,c.src=f,(e=d.getElementsByTagName(a)[0]).parentNode.insertBefore(c,e))}(window,document,\"\/\/tag.measured.com\/10031\/x474bb8\/mejord-gear.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":405
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",104,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Emejord(\"init\",\"10031\/x474bb8\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":406
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",105,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function c(){var a=[];",["escape",["macro",39],8,16],"\u0026\u0026(a=",["escape",["macro",39],8,16],".map(function(b){return{id:b.buyableId}}));return a}_mejord.helper={adaptProductsArray:function(a){if(a)return a.map(function(b){return{id:b}})},getEventParams:function(){return{products:c()||[],product:c()[0]||{},orderId:",["escape",["macro",40],8,16],"||\"\",revenue:isNaN(",["escape",["macro",6],8,16],")?0:",["escape",["macro",6],8,16],",value:isNaN(",["escape",["macro",6],8,16],")?0:",["escape",["macro",6],8,16],",shippingValue:0,tax:0,discount:0,currency:\"USD\",customerId:",["escape",["macro",2],8,16],"||\n\"\",custom:{adwords:{dimensionCohortIndex:21}}}}}})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function d(a){a=c[a]?c[a]():[];for(var b=0;b\u003Ca.length;b++){var e=a[b];window.dataLayer=window.dataLayer||[];var f=_mejord.helper.getEventParams();mejord(\"track\",e,f)}}var c={\"gtm.js\":function(){var a=[\"pageview\"];return a},transaction_purchase:function(){var a=[\"checkout\"];return a}};d(",["escape",["macro",48],8,16],")})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":408
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",105,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Emejord(\"ready\",\"facebook\",function(a){fbq(\"trackCustom\",\"isMember\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":412
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",105,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar courseId=document.body.getAttribute(\"data-clp-course-id\")||\"NA\";mejord.instance.state.context.dataLayer=[];mejord(\"ready\",\"facebook\",function(){fbq(\"track\",\"AddToCart\",{content_name:\"Shopping Cart\",content_ids:courseId,content_type:\"product\"})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":414
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",105,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a=document.body.getAttribute(\"data-clp-course-id\");a\u0026\u0026mejord(\"ready\",\"facebook\",function(b){fbq(\"track\",\"ViewContent\",{content_ids:a,content_type:\"product\",course_avg_rating:",["escape",["macro",29],8,16],",course_category:",["escape",["macro",30],8,16],",course_instructor_name:",["escape",["macro",31],8,16],",course_language:",["escape",["macro",24],8,16],",course_length_minutes:",["escape",["macro",32],8,16],",course_locale:",["escape",["macro",33],8,16],",course_num_enrollments:",["escape",["macro",34],8,16],",course_subcategory:",["escape",["macro",35],8,16],",course_topic:",["escape",["macro",36],8,16],",\nuser_language:",["escape",["macro",25],8,16],",user_locale:",["escape",["macro",37],8,16],",user_location:",["escape",["macro",26],8,16],",has_made_paid_purchase:",["escape",["macro",27],8,16],"})})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":416
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",105,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Emejord.instance.state.context.dataLayer=[];mejord(\"ready\",\"facebook\",function(a){fbq(\"trackCustom\",\"LinkshareSignupClick\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":418
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",105,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Emejord(\"ready\",\"facebook\",function(a){fbq(\"trackCustom\",\"SignupSuccess\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":420
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/create-learning-portal\/"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/tapen\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.js"
    },{
      "function":"_gt",
      "arg0":["macro",4],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"transaction_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_139($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/www.udemy.com\/create-learning-portal\/"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"btn btn-primary btn-huge btn-shadowed btn-lg join-btn"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/affiliate\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/home\/teaching\/onboarding\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?courses\/search\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/learn\/v4\/"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"category"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"subcategory"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/success"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/mobile\/"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":".*\\.dev\\.udemy\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"127.0.0.1"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":".*\\.devs\\.dev-ud\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"localhost"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"add-to-cart"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"signup"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/teaching\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"instructor_analytics"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"signupsuccess=1"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2307940\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2306314\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2306248\/"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?organization\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"udemy.com"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"course-data-ready"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"KZ|RU|BY"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"2u.udemy.com|360E.udemy.com|abtasty.udemy.com|ABD.udemy.com|accesscapital.udemy.com|acemotor.udemy.com|adnatcongsco.udemy.com|adroll.udemy.com|akqa.udemy.com|akhbar.udemy.com|amaysim.udemy.com|Ampush.udemy.com|angelcitydata.udemy.com|anudip.udemy.com|apiheattransfer.udemy.com|aucklandcouncil.udemy.com|avascent.udemy.com|avg.udemy.com|iclas.udemy.com|azumo.udemy.com|bandwidth.udemy.com|bayt.udemy.com|beepi.udemy.com|bethyl.udemy.com|bulletproof.udemy.com|campusexplorer.udemy.com|caribbeanideas.udemy.com|carsguide.udemy.com|cchscarelink.udemy.com|cnu.udemy.com|ciazumano.udemy.com|cision.udemy.com|cloudreach.udemy.com|cacfp.udemy.com|collegespring.udemy.com|chs.udemy.com|continental.udemy.com|dcmservices.udemy.com|delivery.udemy.com|kyna.udemy.com|develappme.udemy.com|dichter-neira.udemy.com|duouniversity.udemy.com|teradyne-std-learning.udemy.com|eastwest.udemy.com|eastexcrude.udemy.com|echo3.udemy.com|edm.udemy.com|esa-ift.udemy.com|crunchyroll.udemy.com|ei.udemy.com|esa.udemy.com|examsoft.udemy.com|fleetmaticsacademy.udemy.com|http:\/\/fullscreen.udemy.com\/|fundamentallabor.udemy.com|fundingcircle.udemy.com|globalstrategies.udemy.com|cdp.udemy.com|glm.udemy.com|companybypeople.udemy.com|harbingergroup.udemy.com|hawaiisnacks.udemy.com|hbconstruction.udemy.com|hostpapa.udemy.com|huddle.udemy.com|ibm.udemy.com|geotecnologies.udemy.com|ignyte.udemy.com|imagineteam.udemy.com|inkblot.udemy.com|insite.udemy.com|instacart.udemy.com|jimenezconsulting.udemy.com|kimble-chase.udemy.com|kookmin.udemy.com|laneconstruct.udemy.com|lightsailenergy.udemy.com|lmuec.udemy.com|lpsoftware.udemy.com|lyft.udemy.com|cmsteam.udemy.com|mareku.udemy.com|MTC.udemy.com|mattex.udemy.com|mb3.udemy.com|melanoma.udemy.com|mmc.udemy.com|meridian.udemy.com|mixpanel.udemy.com|moboom.udemy.com|mre-consulting.udemy.com|michiganlottery.udemy.com|nike.udemy.com|nrtwebservices.udemy.com|ornl.udemy.com|ohiogt.udemy.com|on24.udemy.com|optimizely.udemy.com|optis.udemy.com|odc.udemy.com|oidtraining.udemy.com|pacificwoodtech.udemy.com|pagerduty.udemy.com|pwconsulting.udemy.com|pitneybowes.udemy.com|pjdick.udemy.com|platinum.udemy.com|powertech.udemy.com|powerteq.udemy.com|pretlist.udemy.com|proofpoint.udemy.com|prophet.udemy.com|quemetco.udemy.com|rslempdev.udemy.com|realnet.udemy.com|rottapharm.udemy.com|SLCC.udemy.com|thesentergroup.udemy.com|signaturehealthinc.udemy.com|step.udemy.com|stonehambank.udemy.com|cpfl.udemy.com|sweetwater.udemy.com|syndicatesales.udemy.com|tamkeentech.udemy.com|tegile.udemy.com|tamu.udemy.com|chernin.udemy.com|sideout.udemy.com|wistar.udemy.com|thoughtspot.udemy.com|toptal.udemy.com|tomo.udemy.com|tpipr.udemy.com|trginternational.udemy.com|tricerat.udemy.com|tpl.udemy.com|type1team.udemy.com|redal.udemy.com|unifiedtcg.udemy.com|Valin.udemy.com|viki.udemy.com|walmart.udemy.com|wanhaisg.udemy.com|webair.udemy.com|webanywhere.udemy.com|wedbush.udemy.com|egs.udemy.com|wipro.udemy.com|wolfram.udemy.com|worldpac.udemy.com|xoomworks.udemy.com|xtremeconsulting.udemy.com|yemeksepeti.udemy.com|zeeto.udemy.com|zensar.udemy.com|learning.udemy.com|paulatest.udemy.com"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"organization-manage"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^(va2site|aws-dr|www).udemy.com.*$"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?payment\/^success"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^(aws-dr|www).udemy.com.*$"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/apps\/admin"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_344($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",5],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"full_transaction"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"new_user_transaction_purchase"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/teach\/?$"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/home\/my-courses\/"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",50],
      "arg1":"impact_radius"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_386($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_426($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_424($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"US"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_415($|,)))"
    }],
  "rules":[
    [["if",0,3],["unless",1,2],["add",3,68]],
    [["if",6,7],["add",4,8,9,10,14,19,20,24,27,28,29,31,34,35,38,41,43,64,84,85,90,91,97,100,103]],
    [["if",4,5],["add",5],["block",3,7,16,37,39,42,69,1,74,79,82,86,2,92,93,95,98,101]],
    [["if",5],["add",5,16,74,98,101,45,46,48,49,50,54,57,58,62,63,66]],
    [["if",5,9],["unless",8],["add",6,15]],
    [["if",10,11],["add",7]],
    [["if",5,12],["add",11,77]],
    [["if",13,14,15],["add",12,78]],
    [["if",5,16],["add",13,23,26]],
    [["if",5,17],["add",15]],
    [["if",5,18],["add",15]],
    [["if",5,19],["add",15],["block",79]],
    [["if",5,17,20],["add",15]],
    [["if",5,21],["add",15]],
    [["if",5,22],["add",15]],
    [["if",5,23],["add",15]],
    [["if",5,24],["add",15]],
    [["if",5,25],["add",15]],
    [["if",15,30],["add",17,31,33,72,89]],
    [["if",15,31],["add",18]],
    [["if",5,32],["add",21]],
    [["if",33],["add",22]],
    [["if",5,34],["add",25,31,32,36,38,40,44,75,88,96,99,102]],
    [["if",5,35],["add",30]],
    [["if",5,36],["add",30]],
    [["if",5,37],["add",30]],
    [["if",0,5,38],["add",37,39,82,92,95]],
    [["if",0,5],["unless",1,39],["add",42,56,79,86,0]],
    [["if",5,40],["add",47]],
    [["if",42],["unless",41],["add",51,59]],
    [["if",3],["unless",43],["add",52,60]],
    [["if",3],["add",53,61]],
    [["if",3,44],["add",55]],
    [["if",3,45],["add",65,67]],
    [["if",5,26],["add",69],["block",16,79,87,94,98,101]],
    [["if",5,46],["unless",47],["add",69]],
    [["if",48,49],["add",69]],
    [["if",5,51],["add",1]],
    [["if",53,54],["add",70]],
    [["if",3,55],["add",71]],
    [["if",56,57],["add",73]],
    [["if",6,58],["add",76]],
    [["if",6,7,38],["add",80,81]],
    [["if",61,62,63,64],["add",83]],
    [["if",62,64],["add",87]],
    [["if",53,65],["add",2]],
    [["if",53,66],["add",93]],
    [["if",53,67],["add",94]],
    [["if",5,68],["add",104,105,106]],
    [["if",6,7,69],["add",106]],
    [["if",3,55,68],["add",107]],
    [["if",15,30,68],["add",108]],
    [["if",53,68,70],["add",109]],
    [["if",13,14,15,68],["add",110]],
    [["if",5,34,68],["add",111]],
    [["if",5,27],["block",16,79,87,94,98,101]],
    [["if",5,28],["block",16,79,87,94,98,101]],
    [["if",5,29],["block",16,79,87,94,98,101]],
    [["if",5,39],["block",69,1]],
    [["if",5,50],["block",69]],
    [["if",5,52],["block",1]],
    [["if",5,59],["block",79]],
    [["if",5,60],["block",79]]]
},
"runtime":[[50,"__bzi",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],["c","_linkedin_data_partner_id",[17,[15,"a"],"id"]],["b","https://snap.licdn.com/li.lms-analytics/insight.min.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__bzi":{"access_globals":{"keys":[{"key":"_linkedin_data_partner_id","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__bzi"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ca,ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ia;a:{var ja={Wf:!0},ka={};try{ka.__proto__=ja;ia=ka.Wf;break a}catch(a){}ia=!1}fa=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var la=fa,ma=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},na=this||self,oa=/^[\w+/_-]+[=]{0,2}$/,pa=null,qa=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a},sa=function(a){return a};var ua=function(a,b){this.a=a;this.i=b};var va=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},wa=function(){this.s={};this.m=!1;this.F={}};wa.prototype.get=function(a){return this.s["dust."+a]};wa.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.s[a]=b))};wa.prototype.has=function(a){return this.s.hasOwnProperty("dust."+a)};var ya=function(a){var b=[],c;for(c in a.s)a.s.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.i=new wa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(va(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};ca=k.prototype;ca.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ca.set=function(a,b){if("length"==a){if(!va(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else va(a)?this.a[Number(a)]=b:this.i.set(a,b)};ca.get=function(a){return"length"==a?this.length():va(a)?this.a[Number(a)]:this.i.get(a)};ca.length=function(){return this.a.length};ca.oc=function(){for(var a=ya(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new k(a)};
var za=function(a,b){if(va(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.s[d]}};ca=k.prototype;ca.pop=function(){return this.a.pop()};ca.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};ca.shift=function(){return this.a.shift()};ca.splice=function(a,b,c){return new k(this.a.splice.apply(this.a,arguments))};ca.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
ca.has=function(a){return va(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var Aa=function(){function a(f,g){if(b[f]){if(b[f].cc+g>b[f].max)throw Error("Quota exceeded");b[f].cc+=g}}var b={},c=void 0,d=void 0,e={xh:function(f){c=f},qe:function(){c&&a(c,1)},zh:function(f){d=f},Ia:function(f){d&&a(d,f)},Uh:function(f,g){b[f]=b[f]||{cc:0};b[f].max=g},Qg:function(f){return b[f]&&b[f].cc||0},reset:function(){b={}},xg:a};e.onFnConsume=e.xh;e.consumeFn=e.qe;e.onStorageConsume=e.zh;e.consumeStorage=e.Ia;e.setMax=e.Uh;e.getConsumed=e.Qg;e.reset=e.reset;e.consume=e.xg;return e};var Ba=function(a,b){this.F=a;this.P=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new wa;this.a=this.s=void 0};Ba.prototype.add=function(a,b){Da(this,a,b,!1)};var Da=function(a,b,c,d){if(!a.i.m)if(a.F.Ia(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
Ba.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ia(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};Ba.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};Ba.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ea=function(a){var b=new Ba(a.F,a);a.s&&(b.s=a.s);b.P=a.P;b.a=a.a;return b};var Fa=function(){},Ga=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ha=function(a){return"number"==typeof a&&!isNaN(a)},Ia=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ja=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ka=function(a,b){if(a&&Ia(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},La=function(a,b){if(!Ha(a)||
!Ha(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Na=function(a,b){for(var c=new Ma,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Oa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Pa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Qa=function(a){return Math.round(Number(a))||0},Ra=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Sa=function(a){var b=[];if(Ia(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ta=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ua=function(){return(new Date).getTime()},Ma=function(){this.prefix="gtm.";this.values={}};Ma.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ma.prototype.get=function(a){return this.values[this.prefix+a]};
var Va=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Wa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Xa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ya=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Za=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},$a=function(a){for(var b=A,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},ab=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},bb=function(a){var b=[];Oa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var cb=function(a,b){wa.call(this);this.a=a;this.P=b};ma(cb,wa);cb.prototype.toString=function(){return this.a};cb.prototype.oc=function(){return new k(ya(this))};cb.prototype.i=function(a,b){a.F.qe();return this.P.apply(eb(this,a),Array.prototype.slice.call(arguments,1))};var eb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ia(d)?fb(e,d):d};c.prototype.F=function(d){return gb(this.m,d)};c.prototype.s=function(){return b.F};return new c(a,b)};
cb.prototype.La=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var gb=function(a,b){for(var c,d=0;d<b.length&&!(c=fb(a,b[d]),c instanceof ua);d++);return c},fb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof cb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.s;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var hb=function(){wa.call(this)};ma(hb,wa);hb.prototype.oc=function(){return new k(ya(this))};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ib=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,jb=function(a){if(null==a)return String(a);var b=ib.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},kb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},lb=function(a){if(!a||"object"!=jb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!kb(a,"constructor")&&!kb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||kb(a,b)},E=function(a,b){var c=b||("array"==jb(a)?[]:{}),d;for(d in a)if(kb(a,d)){var e=a[d];"array"==jb(e)?("array"!=jb(c[d])&&(c[d]=[]),c[d]=E(e,c[d])):lb(e)?(lb(c[d])||(c[d]={}),c[d]=E(e,c[d])):c[d]=e}return c};var nb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var n=ya(h),m=0;m<n.length;m++)l[n[m]]=g(h.get(n[m]))},g=function(h){var l=Ja(d,h);if(-1<l)return e[l];if(h instanceof k){var n=[];d.push(h);e.push(n);for(var m=h.oc(),r=0;r<m.length();r++)n[m.get(r)]=g(h.get(m.get(r)));return n}if(h instanceof hb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof cb){var q=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=mb(u[v],b);var w=b?b.F:Aa(),y=new Ba(w);
b&&(y.a=b.a);return g(h.i.apply(h,[y].concat(u)))};d.push(h);e.push(q);f(h,q);return q}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null;default:if(c)return c(h,b)}};return g(a)},mb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var n in h)h.hasOwnProperty(n)&&l.set(n,g(h[n]))},g=function(h){var l=Ja(d,h);if(-1<l)return e[l];if(Ia(h)||Pa(h)){var n=new k([]);d.push(h);e.push(n);for(var m in h)h.hasOwnProperty(m)&&n.set(m,
g(h[m]));return n}if(lb(h)){var r=new hb;d.push(h);e.push(r);f(h,r);return r}if("function"===typeof h){var t=new cb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=nb(this.a(v[w]),b);return g((0,this.m.P)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var q=typeof h;if(null===h||"string"===q||"number"===q||"boolean"===q)return h;if(void 0!==h&&c)return c(h,b)};return g(a)};var ob={control:function(a,b){return new ua(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.s().Ia(a.length+f.length);return new cb(a,function(){return function(g){var h=Ea(d);void 0===h.a&&(h.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),n=0;n<l.length;n++)if(l[n]=this.a(l[n]),l[n]instanceof ua)return l[n];for(var m=e.get("length"),r=
0;r<m;r++)r<l.length?h.add(e.get(r),l[r]):h.add(e.get(r),void 0);h.add("arguments",new k(l));var t=gb(h,f);if(t instanceof ua)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.s();b.Ia(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ia(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.s(),c=new hb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ia(g);c.set(e,f)}return c},undefined:function(){}};var pb=function(){this.m=Aa();this.a=new Ba(this.m)},qb=function(a,b,c){var d=new cb(b,c);d.m=!0;a.a.set(b,d)};pb.prototype.kc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};pb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=fb(this.a,arguments[c]);return b};pb.prototype.s=function(a,b){var c=Ea(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=fb(c,arguments[e]);return d};var rb=function(a){if(a instanceof rb)return a;this.oa=a};rb.prototype.toString=function(){return String(this.oa)};var tb=function(a,b){return nb(a,b,function(c){})},ub=function(a,b){var c=void 0;return mb(a,b,c)};var vb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},wb=function(a){if(void 0==a||Ia(a)||lb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var xb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=vb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):za(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=vb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):za(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var yb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),zb=new ua("break"),Ab=new ua("continue"),Bb=function(a,b){return this.a(a)+this.a(b)},Eb=function(a,b){return this.a(a)&&this.a(b)},Fb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=Ja(yb,b))return ub(a[b].apply(a,vb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof cb){var e=vb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ja(xb.supportedMethods,b)){var f=vb(c);f.unshift(this.m);
return xb[b].apply(a,f)}}if(a instanceof cb||a instanceof hb){if(a.has(b)){var g=a.get(b);if(g instanceof cb){var h=vb(c);h.unshift(this.m);return g.i.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof cb?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,vb(c))}if(a instanceof rb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Gb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");
var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Hb=function(a){var b=Ea(this.m),c=gb(b,Array.prototype.slice.apply(arguments));if(c instanceof ua)return c},Ib=function(){return zb},Jb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof ua)return d}},Kb=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Da(b,d,e,
!0)}}},Lb=function(){return Ab},Mb=function(a,b,c){var d=new k;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Nb=function(a,b){return this.a(a)/this.a(b)},Ob=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof rb,d=b instanceof rb;return c||d?c&&d?a.oa==b.oa:!1:a==b},Pb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Qb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=gb(e,c);if(f instanceof ua){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof hb||b instanceof k||b instanceof cb)for(var g=b.oc(),h=g.length(),l=0;l<h;l++){var n=a(g.get(l)),m=gb(n,c);if(m instanceof ua){if("break"==m.a)break;if("return"==m.a)return m}}}
var Rb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Qb(function(e){d.set(a,e);return d},b,c)},Ub=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Qb(function(e){var f=Ea(d);Da(f,a,e,!0);return f},b,c)},Vb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Qb(function(e){var f=Ea(d);f.add(a,e);return f},b,c)},Wb=function(a,b,c,d){function e(m,r){for(var t=0;t<f.length();t++){var q=f.get(t);r.add(q,m.get(q))}}var f=this.a(a);if(!(f instanceof
k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.m;d=this.a(d);var h=Ea(g);for(e(g,h);fb(h,b);){var l=gb(h,d);if(l instanceof ua){if("break"===l.a)break;if("return"===l.a)return l}var n=Ea(g);e(h,n);fb(n,c);h=n}},Xb=function(a){return this.m.get(this.a(a))},Yb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof hb||a instanceof k||a instanceof cb)c=a.get(b);else if("string"==
typeof a)"length"==b?c=a.length:va(b)&&(c=a[b]);else if(a instanceof rb)return;return c},Zb=function(a,b){return this.a(a)>this.a(b)},$b=function(a,b){return this.a(a)>=this.a(b)},ac=function(a,b){a=this.a(a);b=this.a(b);a instanceof rb&&(a=a.oa);b instanceof rb&&(b=b.oa);return a===b},bc=function(a,b){return!ac.call(this,a,b)},cc=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof ua)return e},dc=function(a,b){return this.a(a)<this.a(b)},ec=function(a,
b){return this.a(a)<=this.a(b)},hc=function(a,b){return this.a(a)%this.a(b)},ic=function(a,b){return this.a(a)*this.a(b)},jc=function(a){return-this.a(a)},kc=function(a){return!this.a(a)},lc=function(a,b){return!Ob.call(this,a,b)},mc=function(){return null},nc=function(a,b){return this.a(a)||this.a(b)},oc=function(a,b){var c=this.a(a);this.a(b);return c},pc=function(a){return this.a(a)},qc=function(a){return Array.prototype.slice.apply(arguments)},rc=function(a){return new ua("return",this.a(a))},
sc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof cb||a instanceof k||a instanceof hb)&&a.set(b,c);return c},tc=function(a,b){return this.a(a)-this.a(b)},uc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ia(d)||!Ia(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.a(d[h]))if(f=this.a(e[h]),f instanceof ua){var l=f.a;if("break"==
l)return;if("return"==l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof ua&&("return"==f.a||"continue"==f.a)))return f},vc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},wc=function(a){a=this.a(a);return a instanceof cb?"function":typeof a},xc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},yc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.F(f),e instanceof ua)){if("break"==
e.a)return;if("return"==e.a)return e}for(;this.a(a);){e=this.F(f);if(e instanceof ua){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},zc=function(a){return~Number(this.a(a))},Ac=function(a,b){return Number(this.a(a))<<Number(this.a(b))},Bc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},Cc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},Dc=function(a,b){return Number(this.a(a))&Number(this.a(b))},Gc=function(a,b){return Number(this.a(a))^Number(this.a(b))},Hc=function(a,
b){return Number(this.a(a))|Number(this.a(b))};var Jc=function(){this.a=new pb;Ic(this)};Jc.prototype.kc=function(a){return Kc(this.a.i(a))};
var Mc=function(a,b){return Kc(Lc.a.s(a,b))},Ic=function(a){var b=function(d,e){var f=a.a,g=String(e);ob.hasOwnProperty(d)&&qb(f,g||d,ob[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){qb(a.a,String(d),e)};c(0,Bb);c(1,Eb);c(2,Fb);c(3,Gb);c(53,Hb);c(4,Ib);c(5,Jb);c(52,Kb);c(6,Lb);c(9,Jb);c(50,Mb);c(10,Nb);c(12,Ob);c(13,Pb);c(47,Rb);c(54,Ub);c(55,Vb);c(63,Wb);c(15,Xb);c(16,Yb);c(17,Yb);c(18,Zb);c(19,$b);c(20,ac);c(21,bc);c(22,cc);c(23,dc);c(24,ec);c(25,hc);
c(26,ic);c(27,jc);c(28,kc);c(29,lc);c(45,mc);c(30,nc);c(32,oc);c(33,oc);c(34,pc);c(35,pc);c(46,qc);c(36,rc);c(43,sc);c(37,tc);c(38,uc);c(39,vc);c(40,wc);c(41,xc);c(42,yc);c(58,zc);c(57,Ac);c(60,Bc);c(61,Cc);c(56,Dc);c(62,Gc);c(59,Hc)},Oc=function(){var a=Lc,b=Nc();qb(a.a,"require",b)},Pc=function(a,b){a.a.a.P=b};function Kc(a){if(a instanceof ua||a instanceof cb||a instanceof k||a instanceof hb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var Qc=[],Rc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sc=function(a){return Rc[a]},Tc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Xc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Yc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Zc=function(a){return Yc[a]};
Qc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xc,Zc)+"'"}};var ed=/['()]/g,fd=function(a){return"%"+a.charCodeAt(0).toString(16)};Qc[12]=function(a){var b=
encodeURIComponent(String(a));ed.lastIndex=0;return ed.test(b)?b.replace(ed,fd):b};var gd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,hd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},id=function(a){return hd[a]};Qc[16]=function(a){return a};var ld;
var md=[],nd=[],od=[],pd=[],qd=[],rd={},sd,td,ud,vd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},wd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=rd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.ne&&b.ne(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):ld(c,e,b)},yd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=xd(a[e],b,c));return d},zd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=rd[b];return c?c.priorityOverride||0:0},xd=function(a,b,c){if(Ia(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(xd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=md[f];if(!g||b.rd(g))return;c[f]=!0;try{var h=yd(g,b,c);h.vtp_gtmEventId=b.id;d=wd(h,b);ud&&(d=ud.zg(d,h))}catch(y){b.Je&&b.Je(y,Number(f)),
d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[xd(a[l],b,c)]=xd(a[l+1],b,c);return d;case "template":d=[];for(var n=!1,m=1;m<a.length;m++){var r=xd(a[m],b,c);td&&(n=n||r===td.Wb);d.push(r)}return td&&n?td.Cg(d):d.join("");case "escape":d=xd(a[1],b,c);if(td&&Ia(a[1])&&"macro"===a[1][0]&&td.fh(a))return td.Eh(d);d=String(d);for(var t=2;t<a.length;t++)Qc[a[t]]&&(d=Qc[a[t]](d));return d;case "tag":var q=a[1];if(!pd[q])throw Error("Unable to resolve tag reference "+q+".");return d=
{we:a[2],index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Ad(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Ad=function(a,b,c){try{return sd(yd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Bd=function(){var a=function(b){return{toString:function(){return b}}};return{pf:a("consent"),Rd:a("convert_case_to"),Sd:a("convert_false_to"),Td:a("convert_null_to"),Ud:a("convert_true_to"),Vd:a("convert_undefined_to"),fi:a("debug_mode_metadata"),sa:a("function"),wf:a("instance_name"),Af:a("live_only"),Cf:a("malware_disabled"),Df:a("metadata"),hi:a("original_vendor_template_id"),Hf:a("once_per_event"),Xd:a("once_per_load"),ae:a("setup_tags"),be:a("tag_id"),ce:a("teardown_tags")}}();var Cd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};ma(Cd,Error);function Dd(a,b){if(Ia(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Dd(a[c],b[c])}};var Ed=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};ma(Ed,Error);var Fd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var Hd=function(){return function(a,b){a instanceof Ed||(a=new Ed(a,Gd));b&&a.a.push(b);throw a;}};function Gd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ha(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Id=null,Ld=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Id=Jd(a);for(var e=0;e<nd.length;e++){var f=nd[e],g=Kd(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var n=[],m=0;m<pd.length;m++)c[m]&&!d[m]&&(n[m]=!0);return n},Kd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Id(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Id(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Jd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Ad(od[c],a));return b[c]}};var Md={zg:function(a,b){b[Bd.Rd]&&"string"===typeof a&&(a=1==b[Bd.Rd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Bd.Td)&&null===a&&(a=b[Bd.Td]);b.hasOwnProperty(Bd.Vd)&&void 0===a&&(a=b[Bd.Vd]);b.hasOwnProperty(Bd.Ud)&&!0===a&&(a=b[Bd.Ud]);b.hasOwnProperty(Bd.Sd)&&!1===a&&(a=b[Bd.Sd]);return a}};var Nd=function(){this.a={}};function Od(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Cd(c,d,g);}}function Pd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Od(e,b,d,g);Od(f,b,d,g)}}}};var Td=function(a){var b=Qd.C,c=this;this.i=new Nd;this.a={};var d={},e=Pd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Oa(a,function(f,g){var h={};Oa(g,function(l,n){var m=Rd(l,n);h[l]=m.assert;d[l]||(d[l]=m.K)});c.a[f]=function(l,n){var m=h[l];if(!m)throw Sd(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);m.apply(void 0,r);e.apply(void 0,r)}})},Vd=function(a){return Ud.a[a]||
function(){}};function Rd(a,b){var c=vd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Sd;try{return wd(c)}catch(d){return{assert:function(e){throw new Cd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Sd(a,b,c){return new Cd(a,b,c)};var Wd=!1;var Xd={};Xd.ai=Ra('');Xd.Ig=Ra('');var Yd=Wd,Zd=Xd.Ig,$d=Xd.ai;
var pe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},qe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;pe(b,"/*")&&(b=b.slice(0,-2));pe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},re=/^[a-z0-9-]+$/i,se=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ue=function(a,b){var c;if(!(c=!te(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!re.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,n=b[g];if(!se.exec(n))throw Error("Invalid Wildcard");var m=n.slice(8),r=m.slice(0,m.indexOf("/")),t;var q=l.hostname,u=r;if(0!==u.indexOf("*."))t=q.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=q.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:q.length===u.length?
!0:q.length!==u.length+v?!1:"."===q[v-1]}if(t){var w=m.slice(m.indexOf("/"));h=qe(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},te=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ve,we=function(){};(function(){function a(h,l){h=h||"";l=l||{};for(var n in b)b.hasOwnProperty(n)&&(l.jg&&(l["fix_"+n]=!0),l.ye=l.ye||l["fix_"+n]);var m={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var q=h.indexOf("--\x3e");if(0<=q)return{content:h.substr(4,q),length:q+3}},endTag:function(){var q=h.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=r.startTag();
if(q){var u=h.slice(q.length);if(u.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,U:q.U,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=h.match(c);if(q){var u={};q[2].replace(e,function(v,w,y,x,B){var C=y||x||B||f.test(w)&&w||null,z=document.createElement("div");z.innerHTML=C;u[w]=z.textContent||z.innerText||C});return{tagName:q[1],U:u,Lb:!!q[3],length:q[0].length}}},chars:function(){var q=
h.indexOf("<");return{length:0<=q?q:h.length}}},t=function(){for(var q in m)if(m[q].test(h)){var u=r[q]();return u?(u.type=u.type||q,u.text=h.substr(0,u.length),h=h.slice(u.length),u):null}};l.ye&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.He=function(){return this[this.length-1]};v.td=function(z){var D=this.He();return D&&D.tagName&&D.tagName.toUpperCase()===z.toUpperCase()};v.yg=
function(z){for(var D=0,G;G=this[D];D++)if(G.tagName===z)return!0;return!1};var w=function(z){z&&"startTag"===z.type&&(z.Lb=q.test(z.tagName)||z.Lb);return z},y=t,x=function(){h="</"+v.pop().tagName+">"+h},B={startTag:function(z){var D=z.tagName;"TR"===D.toUpperCase()&&v.td("TABLE")?(h="<TBODY>"+h,C()):l.si&&u.test(D)&&v.yg(D)?v.td(D)?x():(h="</"+z.tagName+">"+h,C()):z.Lb||v.push(z)},endTag:function(z){v.He()?l.Lg&&!v.td(z.tagName)?x():v.pop():l.Lg&&(y(),C())}},C=function(){var z=h,D=w(y());h=z;if(D&&
B[D.type])B[D.type](D)};t=function(){C();return w(y())}}();return{append:function(q){h+=q},Kh:t,zi:function(q){for(var u;(u=t())&&(!q[u.type]||!1!==q[u.type](u)););},clear:function(){var q=h;h="";return q},Ai:function(){return h},stack:[]}}var b=function(){var h={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";h.Ci="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";h.Bi=2===l.childNodes.length;return h}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.m=b;a.s=function(h){var l={comment:function(n){return"<--"+n.content+"--\x3e"},endTag:function(n){return"</"+n.tagName+">"},atomicTag:function(n){return l.startTag(n)+n.content+l.endTag(n)},startTag:function(n){var m="<"+n.tagName,r;for(r in n.U){var t=n.U[r];m+=
" "+r+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return m+(n.Lb?"/>":">")},chars:function(n){return n.text}};return l[h.type](h)};a.i=function(h){var l={},n;for(n in h){var m=h[n];l[n]=m&&m.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var g in b)a.a=a.a||!b[g]&&g;ve=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,t,q){var u,v=r&&r.length||0;for(u=0;u<v;u++)t.call(q,r[u],u)}function d(r,t,q){for(var u in r)r.hasOwnProperty(u)&&t.call(q,u,r[u])}function e(r,
t){d(t,function(q,u){r[q]=u});return r}function f(r,t){r=r||{};d(t,function(q,u){b(r[q])||(r[q]=u)});return r}function g(r){try{return n.call(r)}catch(q){var t=[];c(r,function(u){t.push(u)});return t}}var h={ag:a,bg:a,cg:a,dg:a,lg:a,mg:function(r){return r},done:a,error:function(r){throw r;},Nh:!1},l=this;if(!l.postscribe){var n=Array.prototype.slice,m=function(){function r(q,u,v){var w="data-ps-"+u;if(2===arguments.length){var y=q.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function t(q,u){var v=q.ownerDocument;e(this,{root:q,options:u,Mb:v.defaultView||v.parentWindow,Wa:v,uc:ve("",{jg:!0}),dd:[q],Dd:"",Ed:v.createElement(q.nodeName),Ib:[],Oa:[]});r(this.Ed,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Oa,arguments);for(var q;!this.hc&&this.Oa.length;)q=this.Oa.shift(),"function"===typeof q?this.rg(q):this.Nd(q)};t.prototype.rg=function(q){var u={type:"function",value:q.name||q.toString()};this.zd(u);q.call(this.Mb,this.Wa);this.Ne(u)};
t.prototype.Nd=function(q){this.uc.append(q);for(var u,v=[],w,y;(u=this.uc.Kh())&&!(w=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(y=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.di(v);w&&this.Wg(u);y&&this.Xg(u)};t.prototype.di=function(q){var u=this.og(q);u.je&&(u.pd=this.Dd+u.je,this.Dd+=u.Ih,this.Ed.innerHTML=u.pd,this.bi())};t.prototype.og=function(q){var u=this.dd.length,v=[],w=[],y=[];c(q,function(x){v.push(x.text);if(x.U){if(!/^noscript$/i.test(x.tagName)){var B=
u++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+B+" $1"));"ps-script"!==x.U.id&&"ps-style"!==x.U.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+B+(x.Lb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Di:q,raw:v.join(""),je:w.join(""),Ih:y.join("")}};t.prototype.bi=function(){for(var q,u=[this.Ed];b(q=u.shift());){var v=1===q.nodeType;if(!v||!r(q,"proxyof")){v&&(this.dd[r(q,"id")]=q,r(q,"id",null));var w=q.parentNode&&r(q.parentNode,"proxyof");
w&&this.dd[w].appendChild(q)}u.unshift.apply(u,g(q.childNodes))}};t.prototype.Wg=function(q){var u=this.uc.clear();u&&this.Oa.unshift(u);q.src=q.U.src||q.U.ji;q.src&&this.Ib.length?this.hc=q:this.zd(q);var v=this;this.ci(q,function(){v.Ne(q)})};t.prototype.Xg=function(q){var u=this.uc.clear();u&&this.Oa.unshift(u);q.type=q.U.type||q.U.TYPE||"text/css";this.ei(q);u&&this.write()};t.prototype.ei=function(q){var u=this.qg(q);this.bh(u);q.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=q.content:
u.appendChild(this.Wa.createTextNode(q.content)))};t.prototype.qg=function(q){var u=this.Wa.createElement(q.tagName);u.setAttribute("type",q.type);d(q.U,function(v,w){u.setAttribute(v,w)});return u};t.prototype.bh=function(q){this.Nd('<span id="ps-style"/>');var u=this.Wa.getElementById("ps-style");u.parentNode.replaceChild(q,u)};t.prototype.zd=function(q){q.Ah=this.Oa;this.Oa=[];this.Ib.unshift(q)};t.prototype.Ne=function(q){q!==this.Ib[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Ib.shift(),this.write.apply(this,q.Ah),!this.Ib.length&&this.hc&&(this.zd(this.hc),this.hc=null))};t.prototype.ci=function(q,u){var v=this.pg(q),w=this.Wh(v),y=this.options.ag;q.src&&(v.src=q.src,this.Rh(v,w?y:function(){u();y()}));try{this.ah(v),q.src&&!w||u()}catch(x){this.options.error(x),u()}};t.prototype.pg=function(q){var u=this.Wa.createElement(q.tagName);d(q.U,function(v,w){u.setAttribute(v,w)});q.content&&(u.text=q.content);return u};t.prototype.ah=function(q){this.Nd('<span id="ps-script"/>');
var u=this.Wa.getElementById("ps-script");u.parentNode.replaceChild(q,u)};t.prototype.Rh=function(q,u){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),u())},onerror:function(){var y={message:"remote script failed "+q.src};v();w(y);u()}})};t.prototype.Wh=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.Nh&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function r(){var w=u.shift(),y;w&&(y=w[w.length-1],y.bg(),w.stream=t.apply(null,w),y.cg())}function t(w,y,x){function B(G){G=x.mg(G);v.write(G);x.dg(G)}v=new m(w,x);v.id=q++;v.name=x.name||v.id;var C=w.ownerDocument,z={close:C.close,open:C.open,write:C.write,writeln:C.writeln};e(C,{close:a,open:a,write:function(){return B(g(arguments).join(""))},writeln:function(){return B(g(arguments).join("")+"\n")}});var D=v.Mb.onerror||a;v.Mb.onerror=function(G,J,P){x.error({wi:G+
" - "+J+":"+P});D.apply(v.Mb,arguments)};v.write(y,function(){e(C,z);v.Mb.onerror=D;x.done();v=null;r()});return v}var q=0,u=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,h);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.vi?w[0]:w;var B=[w,y,x];w.Dh={cancel:function(){B.stream?B.stream.abort():B[1]=a}};x.lg(B);u.push(B);v||r();return w.Dh},{streams:{},yi:u,li:m})}();we=l.postscribe}})();var xe=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,ye={Fn:"function",DustMap:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=xe.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],n=typeof l;if(null===l||"undefined"===n){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var m=typeof l;l instanceof cb?m="Fn":l instanceof k?m="List":l instanceof hb?m="DustMap":
l instanceof rb&&(m="OpaqueValue");if(m!=h)throw Error("Error in "+a+". Argument "+f+" has type "+m+", which does not match required type "+(ye[h]||h)+".");}}};function ze(a){return""+a}
function Ae(a,b){var c=[];return c};var Be=function(a,b){var c=new cb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},Ce=function(a,b){var c=new hb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ga(e)?c.set(d,Be(a+"_"+d,e)):(Ha(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var De=function(a,b){F(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new hb;return d=Ce("AssertApiSubject",c)};var Ee=function(a,b){F(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new hb;return d=Ce("AssertThatSubject",c)};function Fe(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(tb(arguments[d],c));return ub(a.apply(null,b))}}var He=function(){for(var a=Math,b=Ge,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Fe(a[e].bind(a)))}return c};var Ie=function(a){var b;return b};var Je=function(a){var b;return b};var Ke=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var Le=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var Me=function(a){F(this.i.a,["message:?string"],arguments);};var Ne=function(a,b){F(this.i.a,["min:!number","max:!number"],arguments);return La(a,b)};var Oe=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.ig.apply(null,Array.prototype.slice.call(arguments,1))};var Pe=function(){Oe(this,"read_container_data");var a=new hb;a.set("containerId",'GTM-7BF3X');a.set("version",'344');a.set("environmentName",'');a.set("debugMode",Yd);a.set("previewMode",$d);a.set("environmentMode",Zd);a.m=!0;return a};var Qe=function(){return(new Date).getTime()};var Re=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof cb)return"function";if(a instanceof rb){a=a.oa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var Se=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Yd||$d)&&a.call(this,e.message)}}}return{parse:b(function(c){return ub(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(tb(c))})}};var Te=function(a){return Qa(tb(a,this.m))};var Ue=function(a){return Number(tb(a,this.m))};var Ve=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var We=function(a,b,c){var d=null,e=!1;return e?d:null};var Ge="floor ceil round max min abs pow sqrt".split(" ");var Xe=function(){var a={};return{Rg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Vh:function(b,c){a[b]=c},reset:function(){a={}}}},Ye=function(a,b){F(this.i.a,["apiName:!string","mock:?*"],arguments);};var Ze=function(){this.a={};this.i={}};Ze.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
Ze.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:Ga(b)?Be(a,b):Ce(a,b)};
var af=function(a){var b=$e;if(a.i.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function which already exists: getUserAgent.";if(a.a.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function with an existing API name: getUserAgent.";a.i.getUserAgent=Ga(b)?Be("getUserAgent",b):Ce("getUserAgent",b)};function bf(){var a={};return a};var H={cb:"_ee",$c:"_syn",ki:"_uei",ii:"_pci",Jc:"event_callback",Ub:"event_timeout",ka:"gtag.config"};H.fa="allow_ad_personalization_signals";H.Yc="restricted_data_processing";H.jb="allow_google_signals";H.ia="cookie_expires";H.Rb="cookie_update";H.Bb="session_duration";H.na="user_properties";H.Ha="transport_url";H.O="ads_data_redaction";H.o="ad_storage";
H.M="analytics_storage";H.nf="region";H.qf="wait_for_update";H.cf=[H.fa,H.jb,H.Rb];H.df=[H.ia,H.Ub,H.Bb];var cf={},df=function(a,b){cf[a]=cf[a]||[];cf[a][b]=!0},ef=function(a){for(var b=[],c=cf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var I=function(a){df("GTM",a)};function ff(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ff);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}qa(ff,Error);ff.prototype.name="CustomError";var gf=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");ff.call(this,d+c[e])};qa(gf,ff);gf.prototype.name="AssertionError";var hf=function(a,b){throw new gf("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var jf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},kf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var lf;var mf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var nf;a:{var of=na.navigator;if(of){var pf=of.userAgent;if(pf){nf=pf;break a}}nf=""}var qf=function(a){return-1!=nf.indexOf(a)};var sf=function(a,b,c){this.a=c===rf?a:""};sf.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var tf=function(a){if(a instanceof sf&&a.constructor===sf)return a.a;var b=typeof a;hf("expected object of type SafeHtml, got '"+a+"' of type "+("object"!=b?b:a?Array.isArray(a)?"array":b:"null"));return"type_error:SafeHtml"},rf={},uf=new sf(na.trustedTypes&&na.trustedTypes.emptyHTML||"",0,rf);var vf={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},wf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=tf(uf);return!c.parentElement}),xf=function(a,b){if(a.tagName&&vf[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(wf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=tf(b)};var yf=function(a){var b;if(void 0===lf){var c=null,d=na.trustedTypes;if(d&&d.createPolicy){try{c=d.createPolicy("goog#html",{createHTML:sa,createScript:sa,createScriptURL:sa})}catch(f){na.console&&na.console.error(f.message)}lf=c}else lf=c}var e=(b=lf)?b.createHTML(a):a;return new sf(e,null,rf)};var A=window,K=document,zf=navigator,Af=K.currentScript&&K.currentScript.src,Bf=function(a,b){var c=A[a];A[a]=void 0===c?b:c;return A[a]},Cf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Df=function(a,b,c){var d=K.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Cf(d,b);c&&(d.onerror=c);var e;if(null===pa)b:{var f=na.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var h=g.nonce||g.getAttribute("nonce");if(h&&oa.test(h)){pa=h;break b}}pa=""}e=pa;e&&d.setAttribute("nonce",e);var l=K.getElementsByTagName("script")[0]||K.body||K.head;l.parentNode.insertBefore(d,l);return d},Ef=function(){if(Af){var a=Af.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ff=function(a,b){var c=K.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=K.body&&K.body.lastChild||
K.body||K.head;d.parentNode.insertBefore(c,d);Cf(c,b);void 0!==a&&(c.src=a);return c},Gf=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Hf=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},If=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){A.setTimeout(a,0)},Jf=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Kf=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Lf=function(a){var b=K.createElement("div");xf(b,yf("A<div>"+a+"</div>"));b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Mf=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},Nf=function(a){zf.sendBeacon&&zf.sendBeacon(a)||Gf(a)},Of=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Pf={},Qf=function(a){return void 0==Pf[a]?!1:Pf[a]};var Rf=[];function Sf(){var a=Bf("google_tag_data",{});a.ics||(a.ics={entries:{},set:Tf,update:Uf,addListener:Vf,notifyListeners:Wf,active:!1});return a.ics}
function Tf(a,b,c,d,e,f){var g=Sf();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},n=l.region,m=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(m===e||(m===d?n!==e:!m&&!n)){var r=!!(f&&0<f&&void 0===l.update),t={region:m,initial:"granted"===b,update:l.update,quiet:r};h[a]=t;r&&A.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,Xf(a),Wf(),df("TAGGING",2))},f)}}}
function Uf(a,b){var c=Sf();c.active=!0;if(void 0!=b){var d=Yf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Yf(a);f.quiet?(f.quiet=!1,Xf(a)):g!==d&&Xf(a)}}function Vf(a,b){Rf.push({pe:a,Mg:b})}function Xf(a){for(var b=0;b<Rf.length;++b){var c=Rf[b];Ia(c.pe)&&-1!==c.pe.indexOf(a)&&(c.Re=!0)}}function Wf(a){for(var b=0;b<Rf.length;++b){var c=Rf[b];if(c.Re){c.Re=!1;try{c.Mg({oe:a})}catch(d){}}}}
var Yf=function(a){var b=Sf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Zf=function(a){return!(Sf().entries[a]||{}).quiet},$f=function(){return Qf("gtag_cs_api")?Sf().active:!1},ag=function(a,b){Sf().addListener(a,b)},bg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Zf(b[e]))return!0;return!1}if(c()){var d=!1;ag(b,function(e){d||c()||(d=!0,a(e))})}else a({})},cg=function(a,b){if(!1===Yf(b)){var c=!1;ag([b],function(d){!c&&Yf(b)&&(a(d),c=!0)})}};var dg=[H.o,H.M],eg=function(a){var b=a[H.nf];b&&I(40);var c=a[H.qf];c&&I(41);for(var d=Ia(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<dg.length;f++){var g=dg[f],h=a[dg[f]],l=d[e];Sf().set(g,h,l,"BE","BE-WAL",c)}},fg=function(a,b){for(var c=0;c<dg.length;c++){var d=dg[c],e=a[dg[c]];Sf().update(d,e)}Sf().notifyListeners(b)},gg=function(a){var b=Yf(a);return void 0!=b?b:!0},hg=function(){for(var a=[],b=0;b<dg.length;b++){var c=Yf(dg[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},ig=function(a,b){bg(a,b)};var kg=function(a){return jg?K.querySelectorAll(a):null},lg=function(a,b){if(!jg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!K.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},mg=!1;if(K.querySelectorAll)try{var ng=K.querySelectorAll(":root");ng&&1==ng.length&&ng[0]==K.documentElement&&(mg=!0)}catch(a){}var jg=mg;var Qd={},Q=null,Bg=Math.random();Qd.C="GTM-7BF3X";Qd.$b="9g1";Qd.gi="";var Cg={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Dg={__paused:!0,__tg:!0},Eg;for(Eg in Cg)Cg.hasOwnProperty(Eg)&&(Dg[Eg]=!0);var Fg="www.googletagmanager.com/gtm.js";
var Gg=Fg,Hg=Ra(""),Ig=null,Jg=null,Kg="//www.googletagmanager.com/a?id="+Qd.C+"&cv=344",Lg={},Mg={},Ng=function(){var a=Q.sequence||1;Q.sequence=a+1;return a};
var Og=function(){return"&tc="+pd.filter(function(a){return a}).length},Rg=function(){2022<=Pg().length&&Qg()},Tg=function(){Sg||(Sg=A.setTimeout(Qg,500))},Qg=function(){Sg&&(A.clearTimeout(Sg),Sg=void 0);void 0===Ug||Vg[Ug]&&!Wg&&!Xg||(Yg[Ug]||Zg.hh()||0>=$g--?(I(1),Yg[Ug]=!0):(Zg.Lh(),Gf(Pg()),Vg[Ug]=!0,ah=bh=ch=Xg=Wg=""))},Pg=function(){var a=Ug;if(void 0===a)return"";var b=ef("GTM"),c=ef("TAGGING");return[dh,Vg[a]?"":"&es=1",eh[a],b?"&u="+b:"",c?"&ut="+c:"",Og(),Wg,Xg,ch?ch:"",bh,ah,"&z=0"].join("")},
fh=function(){return[Kg,"&v=3&t=t","&pid="+La(),"&rv="+Qd.$b].join("")},gh="0.005000">Math.random(),dh=fh(),hh=function(){dh=fh()},Vg={},Wg="",Xg="",ah="",bh="",ch="",Ug=void 0,eh={},Yg={},Sg=void 0,Zg=function(a,b){var c=0,d=0;return{hh:function(){if(c<a)return!1;Ua()-d>=b&&(c=0);return c>=a},Lh:function(){Ua()-d>=b&&(c=0);c++;d=Ua()}}}(2,1E3),$g=1E3,ih=function(a,b){if(gh&&!Yg[a]&&Ug!==a){Qg();Ug=a;ah=Wg="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";eh[a]="&e="+c+"&eid="+
a;Tg()}},jh=function(a,b,c){if(gh&&!Yg[a]&&b){a!==Ug&&(Qg(),Ug=a);var d,e=String(b[Bd.sa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Wg=Wg?Wg+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(rd[g]?"1":"2")+d;ah=ah?ah+"."+h:"&ti="+h;Tg();Rg()}},kh=function(a,b,c){if(gh&&!Yg[a]){a!==Ug&&(Qg(),Ug=
a);var d=c+b;Xg=Xg?Xg+"."+d:"&epr="+d;Tg();Rg()}},lh=function(a,b,c){};var mh={},nh=new Ma,oh={},ph={},sh={name:"dataLayer",set:function(a,b){E(ab(a,b),oh);qh()},get:function(a){return rh(a,2)},reset:function(){nh=new Ma;oh={};qh()}},rh=function(a,b){if(2!=b){var c=nh.get(a);gh&&c!==th(a.split("."))&&I(5);return c}return th(a.split("."))},th=function(a){for(var b=oh,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},uh=function(a,b){ph.hasOwnProperty(a)||(nh.set(a,b),E(ab(a,b),oh),qh())},qh=function(a){Oa(ph,function(b,c){nh.set(b,c);
E(ab(b,void 0),oh);E(ab(b,c),oh);a&&delete ph[b]})},vh=function(a,b,c){mh[a]=mh[a]||{};var d=1!==c?th(b.split(".")):nh.get(b);"array"===jb(d)||"object"===jb(d)?mh[a][b]=E(d):mh[a][b]=d},wh=function(a,b){if(mh[a])return mh[a][b]},xh=function(a,b){mh[a]&&delete mh[a][b]};var Ah={},Bh=function(a,b){if(A._gtmexpgrp&&A._gtmexpgrp.hasOwnProperty(a))return A._gtmexpgrp[a];void 0===Ah[a]&&(Ah[a]=Math.floor(Math.random()*b));return Ah[a]};var Ch=/:[0-9]+$/,Dh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Gh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Eh(a.protocol)||Eh(A.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
A.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||A.location.hostname).replace(Ch,"").toLowerCase());return Fh(a,b,c,d,e)},Fh=function(a,b,c,d,e){var f,g=Eh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Hh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Ch,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||df("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ja(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Dh(f,e,!1,void 0));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Eh=function(a){return a?a.replace(":",
"").toLowerCase():""},Hh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Ih=function(a){var b=K.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||df("TAGGING",1),c="/"+c);var d=b.hostname.replace(Ch,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Jh=function(a){function b(n){var m=n.split("=")[0];return 0>d.indexOf(m)?n:m+"=0"}function c(n){return n.split("&").map(b).filter(function(m){return void 0!=
m}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Ih(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Kh(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Nh=function(a,b,c,d){return Lh(d)?Kh(a,String(b||document.cookie),c):[]},Qh=function(a,b,c,d,e){if(Lh(e)){var f=Oh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Ph(f,function(g){return g.ic},b);if(1===f.length)return f[0].id;f=Ph(f,function(g){return g.Db},c);return f[0]?f[0].id:void 0}}};function Rh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Nh(b,f,!1,d).indexOf(c)}
var Vh=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!Lh(c.Ka))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Sh(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.sh);g=e(g,"samesite",
c.Ph);c.Sh&&(g=f(g,"secure"));var n=c.domain;if("auto"===n){for(var m=Th(),r=void 0,t=!1,q=0;q<m.length;++q){var u="none"!==m[q]?m[q]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){r=w;continue}t=!0;if(!Uh(u,c.path)&&Rh(v,a,b,c.Ka))return 0}if(r&&!t)throw r;return 1}n&&"none"!==n&&(g=e(g,"domain",n));g=f(g,c.flags);d&&d(a,h);return Uh(n,c.path)?1:Rh(g,a,b,c.Ka)?0:1},Wh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Vh(a,b,c)};
function Ph(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function Oh(a,b,c){for(var d=[],e=Nh(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),ic:1*l[0]||1,Db:1*l[1]||1}))}}return d}
var Sh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Xh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Yh=/(^|\.)doubleclick\.net$/i,Uh=function(a,b){return Yh.test(document.location.hostname)||"/"===b&&Xh.test(a)},Th=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Yh.test(e)||Xh.test(e)||a.push("none");
return a},Lh=function(a){if(!Qf("gtag_cs_api")||!a||!$f())return!0;if(!Zf(a))return!1;var b=Yf(a);return null==b?!0:!!b};var Zh=function(){for(var a=zf.userAgent+(K.cookie||"")+(K.referrer||""),b=a.length,c=A.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ua()/1E3)].join(".")},bi=function(a,b,c,d,e){var f=$h(b);return Qh(a,f,ai(c),d,e)},ci=function(a,b,c,d){var e=""+$h(c),f=ai(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},$h=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},ai=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function di(a,b,c){var d,e=a.Ab;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ua())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var ei=["1"],fi={},ji=function(a){var b=gi(a.prefix);fi[b]||hi(b,a.path,a.domain)||(ii(b,Zh(),a),hi(b,a.path,a.domain))};function ii(a,b,c){var d=ci(b,"1",c.domain,c.path),e=di(c);e.Ka="ad_storage";Wh(a,d,e)}function hi(a,b,c){var d=bi(a,b,c,ei,"ad_storage");d&&(fi[a]=d);return d}function gi(a){return(a||"_gcl")+"_au"};function ki(){for(var a=li,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function mi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var li,ni;function oi(a){li=li||mi();ni=ni||ki();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,l=f>>2,n=(f&3)<<4|g>>4,m=(g&15)<<2|h>>6,r=h&63;e||(r=64,d||(m=64));b.push(li[l],li[n],li[m],li[r])}return b.join("")}
function pi(a){function b(l){for(;d<a.length;){var n=a.charAt(d++),m=ni[n];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return l}li=li||mi();ni=ni||ki();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var qi;var ui=function(){var a=ri,b=si,c=ti(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Hf(K,"mousedown",d);Hf(K,"keyup",d);Hf(K,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},vi=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};ti().decorators.push(f)},wi=function(a,b,c){for(var d=ti().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,n=a,m=!!g.sameHost;if(l&&(m||n!==K.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(n)){h=!0;break a}}else if(0<=n.indexOf(l[r])||m&&0<=l[r].indexOf(n)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&Xa(e,g.callback())}}return e},ti=function(){var a=Bf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var xi=/(.*?)\*(.*?)\*(.*)/,yi=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,zi=/^(?:www\.|m\.|amp\.)+/,Ai=/([^?#]+)(\?[^#]*)?(#.*)?/;function Bi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Di=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(oi(String(d))))}var e=b.join("*");return["1",Ci(e),e].join("*")},Ci=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=qi)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}qi=d;for(var l=4294967295,n=0;n<c.length;n++)l=l>>>8^qi[(l^c.charCodeAt(n))&255];return((l^-1)>>>0).toString(36)},Fi=function(){return function(a){var b=Ih(A.location.href),c=b.search.replace("?",""),d=Dh(c,"_gl",!1,!0)||"";a.query=Ei(d)||{};var e=Gh(b,"fragment").match(Bi("_gl"));a.fragment=Ei(e&&e[3]||"")||{}}},Gi=function(a){var b=Fi(),c=ti();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Xa(d,e.query),a&&Xa(d,e.fragment));return d},
Ei=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=xi.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var n=g[2],m=0;m<b;++m)if(n===Ci(h,m)){l=!0;break a}l=!1}if(l){for(var r={},t=h?h.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=pi(t[q+1]);return r}}}}catch(u){}};
function Hi(a,b,c,d){function e(m){var r=m,t=Bi(a).exec(r),q=r;if(t){var u=t[2],v=t[4];q=t[1];v&&(q=q+u+v)}m=q;var w=m.charAt(m.length-1);m&&"&"!==w&&(m+="&");return m+n}d=void 0===d?!1:d;var f=Ai.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",n=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function Ii(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=wi(b,1,c),e=wi(b,2,c),f=wi(b,3,c);if(Ya(d)){var g=Di(d);c?Ji("_gl",g,a):Ki("_gl",g,a,!1)}if(!c&&Ya(e)){var h=Di(e);Ki("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var n=l,m=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Ki(n,m,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Ji(n,m,r);break a}}"string"==typeof r&&Hi(n,m,r,void 0)}}
function Ki(a,b,c,d){if(c.href){var e=Hi(a,b,c.href,void 0===d?!1:d);mf.test(e)&&(c.href=e)}}
function Ji(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=K.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var n=Hi(a,b,c.action);mf.test(n)&&(c.action=n)}}}
var ri=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Ii(e,e.hostname)}}catch(g){}},si=function(a){try{if(a.action){var b=Gh(Ih(a.action),"host");Ii(a,b)}}catch(c){}},Li=function(a,b,c,d){ui();vi(a,b,"fragment"===c?2:1,!!d,!1)},Mi=function(a,b){ui();vi(a,[Fh(A.location,"host",!0)],b,!0,!0)},Ni=function(){var a=K.location.hostname,b=yi.exec(K.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(zi,""),l=e.replace(zi,""),n;if(!(n=h===l)){var m="."+l;n=h.substring(h.length-m.length,h.length)===m}return n},Oi=function(a,b){return!1===a?!1:a||b||Ni()};var Pi=/^\w+$/,Qi=/^[\w-]+$/,Ri=/^~?[\w-]+$/,Si={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Ti=function(){if(!Qf("gtag_cs_api")||!$f())return!0;var a=Yf("ad_storage");return null==a?!0:!!a},Ui=function(a,b){Zf("ad_storage")?Ti()?a():cg(a,"ad_storage"):b?df("TAGGING",3):bg(function(){Ui(a,!0)},["ad_storage"])},Xi=function(a){var b=[];if(!K.cookie)return b;var c=Nh(a,K.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Vi(c[d]);e&&-1===Ja(b,e)&&b.push(e)}return Wi(b)};
function Yi(a){return a&&"string"==typeof a&&a.match(Pi)?a:"_gcl"}
var $i=function(){var a=Ih(A.location.href),b=Gh(a,"query",!1,void 0,"gclid"),c=Gh(a,"query",!1,void 0,"gclsrc"),d=Gh(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Dh(e,"gclid",!1,void 0);c=c||Dh(e,"gclsrc",!1,void 0)}return Zi(b,c,d)},Zi=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Qi))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Qf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},bj=function(a){var b=$i();Ui(function(){aj(b,a)})};
function aj(a,b,c){function d(l,n){var m=cj(l,e);m&&Wh(m,n,f)}b=b||{};var e=Yi(b.prefix);c=c||Ua();var f=di(b,c,!0);f.Ka="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.Ei?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var ej=function(a,b){var c=Gi(!0);Ui(function(){for(var d=Yi(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Si[f]){var g=cj(f,d),h=c[g];if(h){var l=Math.min(dj(h),Ua()),n;b:{for(var m=l,r=Nh(g,K.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(dj(r[t])>m){n=!0;break b}n=!1}if(!n){var q=di(b,l,!0);q.Ka="ad_storage";Wh(g,h,q)}}}}aj(Zi(c.gclid,c.gclsrc),b)})},cj=function(a,b){var c=Si[a];if(void 0!==c)return b+c},dj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Vi(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var fj=function(a,b,c,d,e){if(Ia(b)){var f=Yi(e),g=function(){for(var h={},l=0;l<a.length;++l){var n=cj(a[l],f);if(n){var m=Nh(n,K.cookie,void 0,"ad_storage");m.length&&(h[n]=m.sort()[m.length-1])}}return h};Ui(function(){Li(g,b,c,d)})}},Wi=function(a){return a.filter(function(b){return Ri.test(b)})},gj=function(a,b){for(var c=Yi(b.prefix),d={},e=0;e<a.length;e++)Si[a[e]]&&(d[a[e]]=Si[a[e]]);Ui(function(){Oa(d,function(f,g){var h=Nh(c+g,K.cookie,void 0,"ad_storage");if(h.length){var l=h[0],n=dj(l),
m={};m[f]=[Vi(l)];aj(m,b,n)}})})};function hj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var ij=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if($f()){var c=$i();if(hj(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);Mi(function(){return d},3);Mi(function(){var e={};return e._up="1",e},1)}}},jj=function(){var a;if(Ti()){for(var b=[],c=K.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Kd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].Kd]||(g[b[h].Kd]=[]),g[b[h].Kd].push({timestamp:l[1],Og:l[2]}))}a=g}else a={};return a};var kj=/^\d+\.fls\.doubleclick\.net$/;function lj(a,b){Zf(H.o)?gg(H.o)?a():cg(a,H.o):b?I(42):ig(function(){lj(a,!0)},[H.o])}function mj(a){var b=Ih(A.location.href),c=Gh(b,"host",!1);if(c&&c.match(kj)){var d=Gh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function nj(a,b,c){if("aw"==a||"dc"==a){var d=mj("gcl"+a);if(d)return d.split(".")}var e=Yi(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!gg(H.o)&&c,g;g=$i()[a]||[];if(0<g.length)return f?["0"]:g}var h=cj(a,e);return h?Xi(h):[]}
var oj=function(a){var b=mj("gac");if(b)return!gg(H.o)&&a?"0":decodeURIComponent(b);var c=jj(),d=[];Oa(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].Og);g=Wi(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},pj=function(a,b){var c=$i().dc||[];lj(function(){ji(b);var d=fi[gi(b.prefix)],e=!1;if(d&&0<c.length){var f=Q.joined_au=Q.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;Nf(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var n=gi(b.prefix),m=fi[n];m&&ii(n,m,b)}})};var qj=/[A-Z]+/,rj=/\s/,sj=function(a){if(p(a)&&(a=Ta(a),!rj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(qj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],D:d}}}}},uj=function(a){for(var b={},c=0;c<a.length;++c){var d=sj(a[c]);d&&(b[d.id]=d)}tj(b);var e=[];Oa(b,function(f,g){e.push(g)});return e};
function tj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.D[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var vj=function(){var a=!1;return a};var xj=function(a,b,c,d){return(2===wj()||d||"http:"!=A.location.protocol?a:b)+c},wj=function(){var a=Ef(),b;if(1===a)a:{var c=Gg;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=K.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Lj=function(a){return gg(H.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Jh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},Mj=function(){var a;if(!(a=Hg)){var b;if(!0===A._gtmdgs)b=!0;else{var c=zf&&zf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return 0;var d=Qa("-1");return Bh(1,100)<=d?Bh(2,2):0};var Nj=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Oj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Pj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Qj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Sj=function(a){var b;b||(b=rh("gtm.whitelist"));b&&I(9);
var c=b&&Za(Sa(b),Oj),d;d||(d=rh("gtm.blacklist"));d||(d=rh("tagTypeBlacklist"))&&I(3);d?I(8):d=[];Rj()&&(d=Sa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ja(Sa(d),"google")&&I(2);var e=d&&Za(Sa(d),Pj),f={};return function(g){var h=
g&&g[Bd.sa];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Mg[h]||[],n=a(h,l);if(b){var m;if(m=n)a:{if(0>Ja(c,h))if(l&&0<l.length)for(var r=0;r<l.length;r++){if(0>Ja(c,l[r])){I(11);m=!1;break a}}else{m=!1;break a}m=!0}n=m}var t=!1;if(d){var q=0<=Ja(e,h);if(q)t=q;else{var u=Na(e,l||[]);u&&I(10);t=u}}var v=!n||t;v||!(0<=Ja(l,"sandboxedScripts"))||c&&-1!==Ja(c,"sandboxedScripts")||(v=Na(e,Qj));return f[h]=v}},Rj=function(){return Nj.test(A.location&&A.location.hostname)};var Tj={active:!0,isAllowed:function(){return!0}},Uj=function(a){var b=Q.zones;return b?b.checkState(Qd.C,a):Tj},Vj=function(a){var b=Q.zones;!b&&a&&(b=Q.zones=a());return b};var Wj=function(){};var Xj=!1,Yj=0,Zj=[];function ak(a){if(!Xj){var b=K.createEventObject,c="complete"==K.readyState,d="interactive"==K.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Xj=!0;for(var e=0;e<Zj.length;e++)N(Zj[e])}Zj.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function bk(){if(!Xj&&140>Yj){Yj++;try{K.documentElement.doScroll("left"),ak()}catch(a){A.setTimeout(bk,50)}}}var ck=function(a){Xj?a():Zj.push(a)};var dk={},ek={},fk=function(a,b,c,d){if(!ek[a]||Dg[b]||"__zone"===b)return-1;var e={};lb(d)&&(e=E(d,e));e.id=c;e.status="timeout";return ek[a].tags.push(e)-1},gk=function(a,b,c,d){if(ek[a]){var e=ek[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function hk(a){for(var b=dk[a]||[],c=0;c<b.length;c++)b[c]();dk[a]={push:function(d){d(Qd.C,ek[a])}}}
var kk=function(a,b,c){ek[a]={tags:[]};Ga(b)&&ik(a,b);c&&A.setTimeout(function(){return hk(a)},Number(c));return jk(a)},ik=function(a,b){dk[a]=dk[a]||[];dk[a].push(Wa(function(){return N(function(){b(Qd.C,ek[a])})}))};function jk(a){var b=0,c=0,d=!1;return{add:function(){c++;return Wa(function(){b++;d&&b>=c&&hk(a)})},hg:function(){d=!0;b>=c&&hk(a)}}};var lk=function(){function a(d){return!Ha(d)||0>d?0:d}if(!Q._li&&A.performance&&A.performance.timing){var b=A.performance.timing.navigationStart,c=Ha(sh.get("gtm.start"))?sh.get("gtm.start"):0;Q._li={cst:a(c-b),cbt:a(Jg-b)}}};var pk={},qk=function(){return A.GoogleAnalyticsObject&&A[A.GoogleAnalyticsObject]},rk=!1;
var sk=function(a){A.GoogleAnalyticsObject||(A.GoogleAnalyticsObject=a||"ga");var b=A.GoogleAnalyticsObject;if(A[b])A.hasOwnProperty(b)||I(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);A[b]=c}lk();return A[b]},tk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=qk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var vk=function(a){},uk=function(){return A.GoogleAnalyticsObject||"ga"},wk=function(a,b){return function(){var c=qk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};var Bk=function(){return!1},Ck=function(){var a={};return function(b,c,d){}};function Dk(a,b,c,d){var e=pd[a],f=Ek(a,b,c,d);if(!f)return null;var g=xd(e[Bd.ae],c,[]);if(g&&g.length){var h=g[0];f=Dk(h.index,{J:f,I:1===h.we?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Ek(a,b,c,d){function e(){if(f[Bd.Cf])h();else{var w=yd(f,c,[]);var B=fk(c.id,String(f[Bd.sa]),Number(f[Bd.be]),w[Bd.Df]),C=!1;w.vtp_gtmOnSuccess=function(){if(!C){C=!0;var G=Ua()-D;jh(c.id,pd[a],"5");gk(c.id,B,"success",
G);g()}};w.vtp_gtmOnFailure=function(){if(!C){C=!0;var G=Ua()-D;jh(c.id,pd[a],"6");gk(c.id,B,"failure",G);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;jh(c.id,f,"1");var z=function(){var G=Ua()-D;jh(c.id,f,"7");gk(c.id,B,"exception",G);C||(C=!0,h())};var D=Ua();try{wd(w,c)}catch(G){z(G)}}}var f=pd[a],g=b.J,h=b.I,l=b.terminate;if(c.rd(f))return null;var n=xd(f[Bd.ce],c,[]);if(n&&n.length){var m=n[0],r=Dk(m.index,{J:g,I:h,terminate:l},c,d);if(!r)return null;g=r;h=2===m.we?l:r}if(f[Bd.Xd]||f[Bd.Hf]){var t=f[Bd.Xd]?qd:c.Xh,q=g,u=h;if(!t[a]){e=Wa(e);
var v=Fk(a,t,e);g=v.J;h=v.I}return function(){t[a](q,u)}}return e}function Fk(a,b,c){var d=[],e=[];b[a]=Gk(d,e,c);return{J:function(){b[a]=Hk;for(var f=0;f<d.length;f++)d[f]()},I:function(){b[a]=Ik;for(var f=0;f<e.length;f++)e[f]()}}}function Gk(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Hk(a){a()}function Ik(a,b){b()};var Lk=function(a,b){for(var c=[],d=0;d<pd.length;d++)if(a.Aa[d]){var e=pd[d];var f=b.add();try{var g=Dk(d,{J:f,I:f,terminate:f},a,d);g?c.push({$e:d,Se:zd(e),kc:g}):(Jk(d,a),f())}catch(l){f()}}b.hg();c.sort(Kk);for(var h=0;h<c.length;h++)c[h].kc();return 0<c.length};function Kk(a,b){var c,d=b.Se,e=a.Se;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.$e,h=b.$e;f=g>h?1:g<h?-1:0}return f}
function Jk(a,b){if(!gh)return;var c=function(d){var e=b.rd(pd[d])?"3":"4",f=xd(pd[d][Bd.ae],b,[]);f&&f.length&&c(f[0].index);jh(b.id,pd[d],e);var g=xd(pd[d][Bd.ce],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Mk=!1,Nk=function(a,b,c,d){if("gtm.js"==b){if(Mk)return!1;Mk=!0}var e=Uj(a),f=!1;if(!e.active){var g=!0;if("gtm.js"===b){for(var h=0;h<pd.length;h++)if(Cg[String(pd[h][String(Bd.sa)])]){I(50);break}}if(g)return!1}ih(a,b);var l=kk(a,c,d);vh(a,"event",
1);vh(a,"ecommerce",1);vh(a,"gtm");var n={id:a,name:b,rd:Sj(e.isAllowed),Aa:[],Xh:[],Je:function(){I(6)},ne:function(u){gh&&(wb(u)||lh(a,"input",u))}};n.Aa=Ld(n);var t=Lk(n,l);"gtm.js"!==b&&"gtm.sync"!==b||vk(Qd.C);if(!t)return t;for(var q=0;q<n.Aa.length;q++)if(n.Aa[q]&&pd[q]&&!Dg[String(pd[q][Bd.sa])])return!0;return!1};function Ok(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Ih(""+c+b).href}}function Pk(a,b){return Qk()?Ok(a,b):void 0}function Qk(){var a=!1;return a};var Rk=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.J=function(){};this.I=function(){};this.eventId=void 0},Sk=function(a){var b=new Rk;b.eventModel=a;return b},Tk=function(a,b){a.targetConfig=b;return a},Uk=function(a,b){a.containerConfig=b;return a},Vk=function(a,b){a.a=b;return a},Wk=function(a,b){a.globalConfig=b;return a},Xk=function(a,b){a.J=b;return a},Yk=function(a,b){a.I=b;return a};
Rk.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Zk=function(a){function b(e){Oa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Oa(c,function(e){d.push(e)});return d};var $k;if(3===Qd.$b.length)$k="g";else{var al="G";$k=al}
var bl={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:$k,OPT:"o"},cl=function(a){var b=Qd.C.split("-"),c=b[0].toUpperCase(),d=bl[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Qd.$b.length){var g="w";f="2"+g}else f="";return f+d+Qd.$b+e};var dl=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var el=function(){return qf("iPhone")&&!qf("iPod")&&!qf("iPad")};qf("Opera");qf("Trident")||qf("MSIE");qf("Edge");!qf("Gecko")||-1!=nf.toLowerCase().indexOf("webkit")&&!qf("Edge")||qf("Trident")||qf("MSIE")||qf("Edge");-1!=nf.toLowerCase().indexOf("webkit")&&!qf("Edge")&&qf("Mobile");qf("Macintosh");qf("Windows");qf("Linux")||qf("CrOS");var fl=na.navigator||null;fl&&(fl.appVersion||"").indexOf("X11");qf("Android");el();qf("iPad");qf("iPod");el()||qf("iPad")||qf("iPod");nf.toLowerCase().indexOf("kaios");var gl=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var hl=function(){};var il=function(a,b){this.i=a;this.a=null;this.s={};this.F=0;this.P=void 0===b?500:b;this.m=null};ma(il,hl);var kl=function(a){return"function"===typeof a.i.__tcfapi||null!=jl(a)};
il.prototype.addEventListener=function(a){var b={},c=kf(function(){return a(b)}),d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.P),e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=void 0!==b.tcString&&"string"!==typeof b.tcString||void 0!==b.gdprApplies&&"boolean"!==typeof b.gdprApplies||void 0!==b.listenerId&&"number"!==typeof b.listenerId||void 0!==b.addtlConsent&&"string"!==typeof b.addtlConsent?2:b.cmpStatus&&"error"!==b.cmpStatus?0:3,g&&0===b.internalErrorState||
(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{ll(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),d=0),c()}};il.prototype.removeEventListener=function(a){a&&a.listenerId&&ll(this,"removeEventListener",null,a.listenerId)};
var nl=function(a,b,c){if(!a.purpose||!a.vendor)return!1;var d=ml(a.vendor.consents,void 0===c?"755":c);return d&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:d&&ml(a.purpose.consents,b)},ol=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));return 0===h?nl(a,b,d):1===h?
a.purpose&&a.vendor?ml(a.purpose.legitimateInterests,b)&&ml(a.vendor.legitimateInterests,void 0===d?"755":d):!1:!0},ml=function(a,b){return!(!a||!a[b])},ll=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(jl(a)){pl(a);var f=++a.F;a.s[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},jl=function(a){if(a.a)return a.a;a.a=gl(a.i,"__tcfapiLocator");return a.a},pl=function(a){a.m||
(a.m=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.s[c.callId](c.returnValue,c.success)}catch(e){}},dl(a.i,a.m))};var ql={1:0,3:0,4:0,7:3,9:3,10:3};function rl(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var sl=rl("",550),tl=rl("",500);function ul(){var a=Q.tcf||{};return Q.tcf=a}
var vl=function(a,b){this.m=a;this.a=b;this.i=Ua();},wl=function(a){},xl=function(a){},Dl=function(){var a=ul(),b=new il(A,3E3),c=new vl(b,a);if((yl()?!0===A.gtag_enable_tcf_support:!1!==A.gtag_enable_tcf_support)&&!a.active&&("function"===typeof A.__tcfapi||kl(b))){a.active=!0;a.Eb={};zl();var d=setTimeout(function(){Al(a);Bl(a);d=null},tl);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Al(a),Bl(a),wl(c);else{var f;if(!1===e.gdprApplies)f=Cl(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in ql)ql.hasOwnProperty(h)&&("1"===h?g["1"]=!1===e.gdprApplies||"error"===e.cmpStatus||0!==e.internalErrorState||"loaded"===e.cmpStatus&&("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus)?!1===e.gdprApplies||"tcunavailable"===e.tcString?!0:Qf("tcf_restrictions")?ol(e,"1",0):nl(e,"1"):!1:g[h]=ol(e,h,ql[h]));f=g}f&&(a.tcString=e.tcString||"tcempty",a.Eb=f,Bl(a),wl(c))}}),
xl(c)}catch(e){d&&(clearTimeout(d),d=null),Al(a),Bl(a)}}};function Al(a){a.type="e";a.tcString="tcunavailable";a.Eb=Cl()}function zl(){var a={};eg((a.ad_storage="denied",a.wait_for_update=sl,a))}var yl=function(){var a=!1;a=!0;return a};function Cl(){var a={},b;for(b in ql)ql.hasOwnProperty(b)&&(a[b]=!0);return a}function Bl(a){var b={};fg((b.ad_storage=a.Eb["1"]?"granted":"denied",b))}
var El=function(){var a=ul();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Fl=function(){var a=ul();return a.active?a.tcString||"":""},Gl=function(a){if(!ql.hasOwnProperty(String(a)))return!0;var b=ul();return b.active&&b.Eb?!!b.Eb[String(a)]:!0};function Hl(a,b,c){function d(r){var t;Q.reported_gclid||(Q.reported_gclid={});t=Q.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],v=function(C,z){z&&u.push(C+"="+encodeURIComponent(z))},w="https://www.google.com";if($f()){var y=gg(H.o);v("gcs",hg());r&&v("gcu","1");v("rnd",m);if((!f||g&&"aw.ds"!==g)&&gg(H.o)){var x=Xi("_gcl_aw");v("gclaw",x.join("."))}v("url",String(A.location).split(/[?#]/)[0]);v("dclid",Il(b,h));!y&&b&&(w="https://pagead2.googlesyndication.com")}
v("gdpr_consent",Fl());"1"===Gi(!1)._up&&v("gtm_up","1");v("gclid",Il(b,f));v("gclsrc",g);v("gtm",cl(!c));var B=w+"/pagead/landing?"+u.join("&");Nf(B)}}var e=$i(),f=e.gclid||"",g=e.gclsrc,h=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),n=$f();if(l||n){var m=""+Zh();n?ig(function(){d();gg(H.o)||cg(function(r){return d(!0,r.oe)},H.o)},[H.o]):d()}}function Il(a,b){var c=a&&!gg(H.o);return b&&c?"0":b}var Jl=function(a){if(K.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!A.getComputedStyle)return!0;var c=A.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=A.getComputedStyle(d,
null))}return!1};var Sl=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),Tl=["SCRIPT","IMG","SVG","PATH"];function Ul(a){var b;if(a===K.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=Ul(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
var Vl=function(){var a=[],b=K.body;if(b)for(var c=b.querySelectorAll("*"),d=0;d<c.length;d++){var e=c[d];0<=Tl.indexOf(e.tagName.toUpperCase())||0===e.childElementCount&&a.push(e)}for(var f=[],g=0;g<a.length;g++){var h=a[g],l=h.textContent;h.value&&(l=h.value);l&&l.match(Sl)&&f.push(h)}for(var n=[],m=0;m<f.length;m++){var r=f[m];n.push({querySelector:Ul(r),tagName:r.tagName,isVisible:!Jl(r),type:1})}return n};var Em=function(){var a=!0;Gl(7)&&Gl(9)&&Gl(10)||(a=!1);var b=!0;b&&!Dm()&&(a=!1);return a},Dm=function(){var a=!0;Gl(3)&&Gl(4)||(a=!1);return a};function Ym(){var a=Q;return a.gcq=a.gcq||new Zm}
var $m=function(a,b,c){Ym().register(a,b,c)},an=function(a,b,c,d){Ym().push("event",[b,a],c,d)},bn=function(a,b){Ym().push("config",[a],b)},cn=function(a,b,c){Ym().push("get",[a,b],c)},dn={},en=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},fn=function(a,b,c,d,e){this.type=a;this.m=b;this.ca=c||"";this.a=d;this.i=e},Zm=function(){this.m={};this.i={};this.a=[]},gn=function(a,b){var c=sj(b);return a.m[c.containerId]=a.m[c.containerId]||new en},
hn=function(a,b,c){if(b){var d=sj(b);if(d&&1===gn(a,b).status){gn(a,b).status=2;var e={};gh&&(e.timeoutId=A.setTimeout(function(){I(38);Tg()},3E3));a.push("require",[e],d.containerId);dn[d.containerId]=Ua();if(vj()){}else{var g="/gtag/js?id="+
encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=A.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Pk(c,g)||h;Df(l)}}}},jn=function(a,b,c,d){if(d.ca){var e=gn(a,d.ca),f=e.m;if(f){var g=E(c),h=E(e.targetConfig[d.ca]),l=E(e.containerConfig),n=E(e.i),m=E(a.i),r=rh("gtm.uniqueEventId"),t=sj(d.ca).prefix,q=Yk(Xk(Wk(Vk(Uk(Tk(Sk(g),h),l),n),m),function(){kh(r,t,"2");}),function(){
kh(r,t,"3");});try{kh(r,t,"1");f(d.ca,b,d.m,q)}catch(u){kh(r,t,"4");}}}};
Zm.prototype.register=function(a,b,c){if(3!==gn(this,a).status){gn(this,a).m=b;gn(this,a).status=3;c&&(gn(this,a).i=c);var d=sj(a),e=dn[d.containerId];if(void 0!==e){var f=Q[d.containerId].bootstrap,g=d.prefix.toUpperCase();Q[d.containerId]._spx&&(g=g.toLowerCase());var h=rh("gtm.uniqueEventId"),l=g,n=Ua()-f;if(gh&&!Yg[h]){h!==Ug&&(Qg(),Ug=h);var m=l+"."+Math.floor(f-e)+"."+Math.floor(n);bh=bh?bh+","+m:"&cl="+m}delete dn[d.containerId]}this.flush()}};
Zm.prototype.push=function(a,b,c,d){var e=Math.floor(Ua()/1E3);hn(this,c,b[0][H.Ha]||this.i[H.Ha]);this.a.push(new fn(a,e,c,b,d));d||this.flush()};
Zm.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==gn(this,c.ca).status&&!a)return;gh&&A.clearTimeout(c.a[0].timeoutId);break;case "set":Oa(c.a[0],function(m,r){E(ab(m,r),b.i)});break;case "config":var d=c.a[0],e=!!d[H.Vb];delete d[H.Vb];var f=gn(this,c.ca),g=sj(c.ca),h=g.containerId===g.id;e||(h?f.containerConfig={}:f.targetConfig[c.ca]={});f.a&&e||jn(this,H.ka,d,c);f.a=!0;delete d[H.cb];h?E(d,f.containerConfig):
E(d,f.targetConfig[c.ca]);break;case "event":jn(this,c.a[1],c.a[0],c);break;case "get":}this.a.shift()}};var kn=function(a,b,c){};var ln=function(a,b,c,d){};var mn=function(a){};var nn=function(a,b,c){};var on=function(a,b){return!0};var pn=function(a,b){var c;return c};var qn=function(a){};var rn=!1,sn=[];function tn(){if(!rn){rn=!0;for(var a=0;a<sn.length;a++)N(sn[a])}}var un=function(a){rn?N(a):sn.push(a)};var vn=function(a){F(this.i.a,["listener:!Fn"],arguments);Oe(this,"process_dom_events","window","load");un(nb(a))};var wn=function(a,b){var c;var d=ub(c,this.m);void 0===d&&void 0!==c&&I(45);return d};var xn=function(a){var b;var h=ub(b,this.m);void 0===h&&void 0!==b&&I(45);return h};var yn=function(a,b){var c=null;return ub(c,this.m)};var zn=function(a){var b;return ub(b,this.m)};var An=function(a){var b;return b};var Bn=function(a,b){b=void 0===b?!0:b;var c;return c};var Cn=function(a){var b=null;return b};var Dn=function(a,b){var c;return c};var En=function(a,b){var c;return c};var Fn=function(a){var b="";return b};var Gn=function(a){var b="";return b};var $e=function(){Oe(this,"get_user_agent");return A.navigator.userAgent};var Hn=function(a,b){};var In={},Jn=function(a,b,c,d){F(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Oe(this,"inject_script",a);var e=this.m,f=function(){b instanceof cb&&b.La(e)},g=function(){c instanceof cb&&c.La(e)};if(!d){Df(a,f,g);return}var h=d;In[h]?(In[h].onSuccess.push(f),In[h].onFailure.push(g)):(In[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=In[h].onSuccess,n=0;n<l.length;n++)N(l[n]);l.push=function(m){N(m);
return 0}},g=function(){for(var l=In[h].onFailure,n=0;n<l.length;n++)N(l[n]);In[h]=null},Df(a,f,g));};var Kn=function(){return!1},Ln={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Mn=function(){};var Nn=function(a,b){var c=!1;return c};var On=function(){var a="";return a};var Pn=function(){var a="";return a};var Qn=function(a,b,c){};var Rn=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var Sn=function(a,b,c){F(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);Oe(this,"access_globals","readwrite",a);var d=a.split("."),e=A,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=tb(b,this.m),!0;return!1};var Tn=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var Un=function(a,b,c){var d=this;};var Vn={},Wn={};Vn.getItem=function(a){var b=null;return b};
Vn.setItem=function(a,b){};
Vn.removeItem=function(a){};Vn.clear=function(){};var Xn=function(a){var b;return b};var Nc=function(){var a=new Ze;vj()?(a.add("injectHiddenIframe",Fa),a.add("injectScript",Fa)):(a.add("injectHiddenIframe",Hn),a.add("injectScript",Jn));var b=Qn;a.add("Math",He());a.add("TestHelper",bf());a.add("addEventCallback",mn);a.add("aliasInWindow",on);a.add("assertApi",De);a.add("assertThat",Ee);a.add("callInWindow",
pn);a.add("callLater",qn);a.add("copyFromDataLayer",wn);a.add("copyFromWindow",xn);a.add("createArgumentsQueue",yn);a.add("createQueue",zn);a.add("decodeUri",Ie);a.add("decodeUriComponent",Je);a.add("encodeUri",Ke);a.add("encodeUriComponent",Le);a.add("fail",Me);a.add("fromBase64",An,!("atob"in A));a.add("generateRandom",Ne);a.add("getContainerVersion",Pe);a.add("getCookieValues",Bn);a.add("getQueryParameters",Dn);a.add("getReferrerQueryParameters",En);a.add("getReferrerUrl",Fn);a.add("getTimestamp",
Qe);a.add("getTimestampMillis",Qe);a.add("getType",Re);a.add("getUrl",Gn);a.add("localStorage",Ln,!Kn());a.add("logToConsole",Mn);a.add("makeInteger",Te);a.add("makeNumber",Ue);a.add("makeString",Ve);a.add("makeTableMap",We);a.add("mock",Ye);a.add("queryPermission",Nn);a.add("readCharacterSet",On);a.add("readTitle",Pn);a.add("sendPixel",b);a.add("setCookie",Rn);a.add("setInWindow",Sn);a.add("sha256",Un);a.add("templateStorage",Vn);a.add("toBase64",Xn,!("btoa"in A));a.add("JSON",Se(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;if(f){var g=f.rb();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var Lc,Ud;
function Yn(){var a=data.runtime||[],b=data.runtime_lines;Lc=new Jc;Zn();ld=function(e,f,g){$n(f);var h=new hb;Oa(f,function(q,u){var v=ub(u);void 0===v&&void 0!==u&&I(44);h.set(q,v)});Lc.a.a.s=Hd();var l={ig:Vd(e),eventId:void 0!==g?g.id:void 0,rb:function(){return e},log:function(){}};if(Bk()){var n=Ck(),m=void 0,r=void 0;l.da={i:{},a:function(q,u,v){1===u&&(m=q);7===u&&(r=v);n(q,u,v)},m:Xe()};l.log=function(q,u){if(m){var v=Array.prototype.slice.call(arguments,1);n(m,4,{level:q,source:r,message:v})}}}var t=
Mc(l,[e,h]);Lc.a.a.s=void 0;t instanceof ua&&"return"===t.a&&(t=t.i);return tb(t)};Oc();for(var c=0;c<a.length;c++){var d=a[c];if(!Ia(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Dd(d,b[c]);Lc.kc(d)}}function $n(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ga(b)&&(a.gtmOnSuccess=function(){N(b)});Ga(c)&&(a.gtmOnFailure=function(){N(c)})}
function Zn(){var a=Lc;Q.SANDBOXED_JS_SEMAPHORE=Q.SANDBOXED_JS_SEMAPHORE||0;Pc(a,function(b,c,d){Q.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Q.SANDBOXED_JS_SEMAPHORE--}})}function ao(a){void 0!==a&&Oa(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Mg[e]=Mg[e]||[];Mg[e].push(b)}})};var bo="HA GF G UA AW DC".split(" "),co=!1,eo={},fo=!1;function go(a,b){var c={event:a};b&&(c.eventModel=E(b),b[H.Jc]&&(c.eventCallback=b[H.Jc]),b[H.Ub]&&(c.eventTimeout=b[H.Ub]));return c}function ho(){return co}
var ko={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!lb(a[2])&&
void 0!=a[2])return;c=a[2]}var d=go(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return fo=!0,ho(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Ud.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&lb(a[1])?b=E(a[1]):3==a.length&&p(a[1])&&(b={},lb(a[2])||Ia(a[2])?b[a[1]]=E(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}},consent:function(a){function b(){ho()&&E(a[2],{subcommand:a[1]})}if(3===a.length){I(39);var c=Ng(),d=a[1];"default"===d?(b(),eg(a[2])):"update"===d&&(b(),fg(a[2],c))}}};var lo={policy:!0};var mo=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},oo=function(a){var b=no(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Fo=function(a){if(Eo(a))return a;this.a=a};Fo.prototype.Vg=function(){return this.a};var Eo=function(a){return!a||"object"!==jb(a)||lb(a)?!1:"getUntrustedUpdateValue"in a};Fo.prototype.getUntrustedUpdateValue=Fo.prototype.Vg;var Go=[],Ho=!1,Io=function(a){return A["dataLayer"].push(a)},Jo=function(a){var b=Q["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Ko(a){var b=a._clear;Oa(a,function(f,g){"_clear"!==f&&(b&&uh(f,void 0),uh(f,g))});Ig||(Ig=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=Ng(),a["gtm.uniqueEventId"]=d,uh("gtm.uniqueEventId",d));var e=Nk(a["gtm.uniqueEventId"],a.event,a.eventCallback,a.eventTimeout)?!0:!1;switch(c){case "gtm.init":I(19),e&&I(20)}return e}
function Lo(){for(var a=!1;!Ho&&0<Go.length;){Ho=!0;delete oh.eventModel;qh();var b=Go.shift();if(null!=b){var c=Eo(b);if(c){var d=b;b=Eo(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],h=rh(g,1);if(Ia(h)||lb(h))h=E(h);ph[g]=h}}try{if(Ga(b))try{b.call(sh)}catch(v){}else if(Ia(b)){var l=
b;if(p(l[0])){var n=l[0].split("."),m=n.pop(),r=l.slice(1),t=rh(n.join("."),2);if(void 0!==t&&null!==t)try{t[m].apply(t,r)}catch(v){}}}else{if(Pa(b)){a:{var q=b;if(q.length&&p(q[0])){var u=ko[q[0]];if(u&&(!c||!lo[q[0]])){b=u(q);break a}}b=void 0}if(!b){Ho=!1;continue}}a=Ko(b)||a}}finally{c&&qh(!0)}}Ho=!1}return!a}
function Mo(){var a=Lo();try{mo(A["dataLayer"],Qd.C)}catch(b){}return a}
var Oo=function(){var a=Bf("dataLayer",[]),b=Bf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};ck(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});un(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<Q.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Fo(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Go.push.apply(Go,e);if(300<
this.length)for(I(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Lo()&&h};var d=a.slice(0);Go.push.apply(Go,d);No()&&N(Mo)},No=function(){var a=!0;return a};var Po={};Po.Wb=new String("undefined");
var Qo=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Po.Wb?b:a[d]);return c.join("")}};Qo.prototype.toString=function(){return this.a("undefined")};Qo.prototype.valueOf=Qo.prototype.toString;Po.Pf=Qo;Po.Xc={};Po.Cg=function(a){return new Qo(a)};var Ro={};Po.Mh=function(a,b){var c=Ng();Ro[c]=[a,b];return c};Po.se=function(a){var b=a?0:1;return function(c){var d=Ro[c];if(d&&"function"===typeof d[b])d[b]();Ro[c]=void 0}};Po.fh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Po.Eh=function(a){if(a===Po.Wb)return a;var b=Ng();Po.Xc[b]=a;return'google_tag_manager["'+Qd.C+'"].macro('+b+")"};Po.th=function(a,b,c){a instanceof Po.Pf&&(a=a.a(Po.Mh(b,c)),b=Fa);return{pd:a,J:b}};var So=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Jf(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},To=function(a){Q.hasOwnProperty("autoEventsSettings")||(Q.autoEventsSettings={});var b=Q.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Uo=function(a,b,c){To(a)[b]=c},Vo=function(a,b,c,d){var e=To(a),f=Va(e,b,d);e[b]=c(f)},Wo=function(a,b,c){var d=To(a);return Va(d,b,c)};var Xo=["input","select","textarea"],Yo=["button","hidden","image","reset","submit"],Zo=function(a){var b=a.tagName.toLowerCase();return!Ka(Xo,function(c){return c===b})||"input"===b&&Ka(Yo,function(c){return c===a.type.toLowerCase()})?!1:!0},$o=function(a){return a.form?a.form.tagName?a.form:K.getElementById(a.form):Mf(a,["form"],100)},ap=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Zo(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var bp=!!A.MutationObserver,cp=void 0,dp=function(a){if(!cp){var b=function(){var c=K.body;if(c)if(bp)(new MutationObserver(function(){for(var e=0;e<cp.length;e++)N(cp[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Hf(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<cp.length;e++)N(cp[e])}))})}};cp=[];K.body?b():N(b)}cp.push(a)};var pp=A.clearTimeout,qp=A.setTimeout,U=function(a,b,c){if(vj()){b&&N(b)}else return Df(a,b,c)},rp=function(){return new Date},sp=function(){return A.location.href},tp=function(a){return Gh(Ih(a),"fragment")},up=function(a){return Hh(Ih(a))},vp=function(a,b){return rh(a,b||2)},wp=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Io(a)):d=Io(a);return d},xp=function(a,b){A[a]=b},V=function(a,b,c){b&&
(void 0===A[a]||c&&!A[a])&&(A[a]=b);return A[a]},yp=function(a,b,c){return Nh(a,b,void 0===c?!0:!!c)},zp=function(a,b,c){return 0===Wh(a,b,c)},Ap=function(a,b){if(vj()){b&&N(b)}else Ff(a,b)},Bp=function(a){return!!Wo(a,"init",!1)},Cp=function(a){Uo(a,"init",!0)},Dp=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Gg;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";U(xj("https://","http://",c))},Ep=function(a,
b){var c=a[b];return c},Fp=function(a,b,c){gh&&(wb(a)||lh(c,b,a))};
var Gp=Po.th;function cq(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var dq=new Ma;function eq(a,b){function c(g){var h=Ih(g),l=Gh(h,"protocol"),n=Gh(h,"host",!0),m=Gh(h,"port"),r=Gh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==m||"https"==l&&"443"==m)l="web",m="default";return[l,n,m,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function fq(a){return gq(a)?1:0}
function gq(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ia(c)){for(var d=0;d<c.length;d++){var e=E(a,{});E({arg1:c[d],any_of:void 0},e);if(fq(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(q){}}f=!1}return f;case "_ew":return cq(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Ja(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var m=a.ignore_case?"i":void 0;try{var r=String(c)+m,t=dq.get(r);t||(t=new RegExp(c,m),dq.set(r,t));n=t.test(b)}catch(q){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return eq(b,c)}return!1};var hq={},iq=encodeURI,X=encodeURIComponent,jq=Gf;var kq=function(a,b){if(!a)return!1;var c=Gh(Ih(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var lq=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};hq.gh=function(){var a=!1;return a};function Kr(){return A.gaGlobal=A.gaGlobal||{}}var Lr=function(){var a=Kr();a.hid=a.hid||La();return a.hid},Mr=function(a,b){var c=Kr();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Vr=window,Wr=document,Xr=function(a){var b=Vr._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Vr["ga-disable-"+a])return!0;try{var c=Vr.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Kh("AMP_TOKEN",String(Wr.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Wr.getElementById("__gaOptOutExtension")?!0:!1};function $r(a){delete a.eventModel[H.cb];bs(a.eventModel)}var bs=function(a){Oa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.na]||{};Oa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var es=function(a,b,c){an(b,c,a)},fs=function(a,b,c){an(b,c,a,!0)},hs=function(a,b){};
function gs(a,b){}var Y={b:{}};

Y.b.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");var d=c&&c.e&&c.e(b);Fp(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();

Y.b.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.g="sp";Y.__sp.h=!0;Y.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=V("google_trackConversion");if(Ga(f)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=lq(a.vtp_customParams,
"key","value"));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:cl()};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(h.google_conversion_value=a.vtp_eventValue),a.vtp_eventItems&&(h.google_gtag_event_data={items:a.vtp_eventItems}));a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=
a.vtp_userId);var l=Fl();(h.google_additional_params=h.google_additional_params||{}).gdpr_consent=l;f(h)||c()}else c()},e=function(){U(b,d,c)};$f()?ig(function(){gg(H.o)?e():cg(e,H.o)},[H.o]):(lk(),e())})}();Y.b.c=["google"],function(){(function(a){Y.__c=a;Y.__c.g="c";Y.__c.h=!0;Y.__c.priorityOverride=0})(function(a){Fp(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Y.b.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.priorityOverride=0})(function(a){return String(wh(a.vtp_gtmEventId,"event"))})}();
Y.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=So(c,"gtm.click");wp(d)}}(function(b){Y.__cl=b;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.priorityOverride=0})(function(b){if(!Bp("cl")){var c=V("document");Hf(c,"click",a,!0);Cp("cl")}N(b.vtp_gtmOnSuccess)})}();
Y.b.j=["google"],function(){(function(a){Y.__j=a;Y.__j.g="j";Y.__j.h=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];Fp(c,"j",a.vtp_gtmEventId);return c})}();Y.b.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.priorityOverride=0})(function(a){return yp(a.vtp_name,vp("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.g="access_globals";Y.__access_globals.h=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],n=l.key;l.read&&e.push(n);l.write&&f.push(n);l.execute&&g.push(n)}return{assert:function(m,r,t){if(!p(t))throw d(m,{},"Key must be a string.");if("read"===r){if(-1<Ja(e,t))return}else if("write"===r){if(-1<Ja(f,t))return}else if("readwrite"===r){if(-1<Ja(f,t)&&-1<Ja(e,t))return}else if("execute"===r){if(-1<Ja(g,t))return}else throw d(m,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(m,{},"Prohibited "+r+" on global variable: "+
t+".");},K:a}})}();Y.b.r=["google"],function(){(function(a){Y.__r=a;Y.__r.g="r";Y.__r.h=!0;Y.__r.priorityOverride=0})(function(a){return La(a.vtp_min,a.vtp_max)})}();
Y.b.tg=["google"],function(){function a(h){g.push(h);1<g.length||N(function(){var l=g.join(",");g=[];wp({event:"gtm.triggerGroup","gtm.triggers":l})})}function b(h,l){var n=d[l],m=n.indexOf(h);-1!==m&&(n.splice(m,1),n.length||a(l))}function c(h){N(h.vtp_gtmOnSuccess);var l=h.vtp_uniqueTriggerId,n=h.vtp_triggerIds,m=h.vtp_firingId;if(h.vtp_isListeningTag){var r=e[m];r?b(m,r):f.push(m)}else{d[l]=n;for(var t=0,q;q=n[t];t++)e[q]=l;for(var u=0;u<f.length;u++)b(f[u],l)}}var d={},e={},f=[],g=[];Y.__tg=c;Y.__tg.g="tg";Y.__tg.h=!0;Y.__tg.priorityOverride=0}();
Y.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=vp("gtm.url",1);c=c||sp();var d=b[a("vtp_component")];if(!d||"URL"==d)return up(String(c));var e=Ih(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],n;g?Ia(h)?n=h:n=String(h).replace(/\s+/g,
"").split(","):n=[String(h)];for(var m=0;m<n.length;m++){var r=Gh(e,"QUERY",void 0,void 0,n[m]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Gh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.b.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=vp(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Fp(d,"v",a.vtp_gtmEventId);return d})}();
Y.b.tl=["google"],function(){function a(b){return function(){if(b.ud&&b.wd>=b.ud)b.qd&&V("self").clearInterval(b.qd);else{b.wd++;var c=rp().getTime();wp({event:b.S,"gtm.timerId":b.qd,"gtm.timerEventNumber":b.wd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.ud,"gtm.timerStartTime":b.Ze,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Ze,"gtm.triggers":b.$h})}}}(function(b){Y.__tl=b;Y.__tl.g="tl";Y.__tl.h=!0;Y.__tl.priorityOverride=0})(function(b){N(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{S:b.vtp_eventName,wd:0,interval:Number(b.vtp_interval),ud:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),$h:String(b.vtp_uniqueTriggerId||"0"),Ze:rp().getTime()};c.qd=V("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.b.ua=["google"],function(){function a(m,r){if($f()&&!d[m]){var t=function(){var q=qk(),u="gtm"+Ng(),v=l(r),w={name:u};h(v,w,!0);q("create",m,w);q(function(){q.remove(u)})};cg(t,H.M);cg(t,H.o);d[m]=!0}}var b,c={},d={},e=function(m){ig(function(){n(m)},[H.M,H.o])},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h=function(m,r,t){var q=0;if(m)for(var u in m)if(m.hasOwnProperty(u)&&(t&&f[u]||!t&&void 0===f[u])){var v=g[u]?Ra(m[u]):m[u];"anonymizeIp"!=u||v||(v=void 0);r[u]=v;q++}return q},l=
function(m){var r={};m.vtp_gaSettings&&E(lq(m.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);E(lq(m.vtp_fieldsToSet,"fieldName","value"),r);gg(H.M)||(r.storage="none");gg(H.o)||(r.allowAdFeatures=!1,r.storeGac=!1);Em()||(r.allowAdFeatures=!1);Dm()||(r.allowAdPersonalizationSignals=!1);m.vtp_transportUrl&&(r._x_19=m.vtp_transportUrl);return r},n=function(m){function r(ta,
S){void 0!==S&&D("set",ta,S)}var t={},q={},u={},v={};if(m.vtp_gaSettings){var w=m.vtp_gaSettings;E(lq(w.vtp_contentGroup,"index","group"),q);E(lq(w.vtp_dimension,"index","dimension"),u);E(lq(w.vtp_metric,"index","metric"),v);var y=E(w);y.vtp_fieldsToSet=void 0;y.vtp_contentGroup=void 0;y.vtp_dimension=void 0;y.vtp_metric=void 0;m=E(m,y)}E(lq(m.vtp_contentGroup,"index","group"),q);E(lq(m.vtp_dimension,"index","dimension"),u);E(lq(m.vtp_metric,"index","metric"),v);var x=l(m),B=sk(m.vtp_functionName);
if(Ga(B)){var C="",z="";m.vtp_setTrackerName&&"string"==typeof m.vtp_trackerName?""!==m.vtp_trackerName&&(z=m.vtp_trackerName,C=z+"."):(z="gtm"+Ng(),C=z+".");var D=function(ta){var S=[].slice.call(arguments,0);S[0]=C+S[0];B.apply(window,S)},G=function(ta,S){return void 0===S?S:ta(S)},J=function(ta,S){if(S)for(var db in S)S.hasOwnProperty(db)&&D("set",ta+db,S[db])},P=function(){},W={name:z};h(x,W,!0);var aa=m.vtp_trackingId||t.trackingId;B("create",aa,W);D("set","&gtm",cl(!0));$f()&&(D("set","&gcs",hg()),a(aa,m));x._x_19&&(null==Af&&delete x._x_19,x._x_20&&!c[z]&&(c[z]=!0,B(wk(z,String(x._x_20)))));m.vtp_enableRecaptcha&&
D("require","recaptcha","recaptcha.js");(function(ta,S){void 0!==m[S]&&D("set",ta,m[S])})("nonInteraction","vtp_nonInteraction");J("contentGroup",q);J("dimension",u);J("metric",v);var xa={};h(x,xa,!1)&&D("set",xa);var M;m.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var ta=x&&x.hitCallback;
Ga(ta)&&ta();m.vtp_gtmOnSuccess()});if("TRACK_EVENT"==m.vtp_trackType){m.vtp_enableEcommerce&&(D("require","ec","ec.js"),P());var O={hitType:"event",eventCategory:String(m.vtp_eventCategory||t.category),eventAction:String(m.vtp_eventAction||t.action),eventLabel:G(String,m.vtp_eventLabel||t.label),eventValue:G(Qa,m.vtp_eventValue||t.value)};h(M,O,!1);D("send",O);}else if("TRACK_SOCIAL"==
m.vtp_trackType){}else if("TRACK_TRANSACTION"==m.vtp_trackType){}else if("TRACK_TIMING"==m.vtp_trackType){}else if("DECORATE_LINK"==m.vtp_trackType){}else if("DECORATE_FORM"==m.vtp_trackType){}else if("TRACK_DATA"==m.vtp_trackType){}else{m.vtp_enableEcommerce&&(D("require","ec","ec.js"),P());if(m.vtp_doubleClick||"DISPLAY_FEATURES"==m.vtp_advertisingFeaturesType){var ra="_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");D("require","displayfeatures",void 0,{cookieName:ra})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==m.vtp_advertisingFeaturesType){var Ec="_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:Ec})}M?D("send","pageview",M):D("send","pageview");m.vtp_autoLinkDomains&&tk(C,m.vtp_autoLinkDomains,!!m.vtp_useHashAutoLink,!!m.vtp_decorateFormsAutoLink);}if(!b){var Sb=
m.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";m.vtp_useInternalVersion&&!m.vtp_useDebugVersion&&(Sb="internal/"+Sb);b=!0;var fe=Pk(x._x_19,"/analytics.js"),Cb=xj("https:","http:","//www.google-analytics.com/"+Sb,x&&!!x.forceSSL);U("analytics.js"===Sb&&fe?fe:Cb,function(){var ta=qk();ta&&ta.loaded||m.vtp_gtmOnFailure();},m.vtp_gtmOnFailure)}}else N(m.vtp_gtmOnFailure)};Y.__ua=e;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.priorityOverride=0}();


Y.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.g="inject_script";Y.__inject_script.h=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(ue(Ih(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();





Y.b.aev=["google"],function(){function a(q,u){var v=wh(q,"gtm");if(v)return v[u]}function b(q,u,v,w){w||(w="element");var y=q+"."+u,x;if(m.hasOwnProperty(y))x=m[y];else{var B=a(q,w);if(B&&(x=v(B),m[y]=x,r.push(y),35<r.length)){var C=r.shift();delete m[C]}}return x}function c(q,u,v){var w=a(q,t[u]);return void 0!==w?w:v}function d(q,u){if(!q)return!1;var v=e(sp());Ia(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(q))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!kq(q,w)}function e(q){n.test(q)||(q="http://"+q);return Gh(Ih(q),"HOST",!0)}function f(q,u,v){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+q,h);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(q){switch(q.tagName.toLowerCase()){case "input":return Jf(q,"value");case "button":return Kf(q);default:return null}}function h(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,v=0;v<q.elements.length;v++)Zo(q.elements[v])&&u++;return u}}function l(q,u,v){var w=a(q,"interactedFormField");return w&&Jf(w,u)||v}var n=/^https?:\/\//i,m={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Y.__aev=q;Y.__aev.g="aev";Y.__aev.h=!0;Y.__aev.priorityOverride=0})(function(q){var u=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,Kf)||v;case "URL":var x;a:{var B=String(a(u,"elementUrl")||v||""),C=Ih(B),z=String(q.vtp_component||"URL");switch(z){case "URL":x=B;break a;case "IS_OUTBOUND":x=d(B,q.vtp_affiliatedDomains);break a;default:x=Gh(C,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===q.vtp_attribute)D=c(u,w,v);else{var G=q.vtp_attribute,J=a(u,"element");D=J&&Jf(J,G)||v||""}return D;case "MD":var P=q.vtp_mdValue,W=b(u,"MD",kp);return P&&W?np(W,P)||
v:W||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,v);default:var aa=c(u,w,v);Fp(aa,"aev",q.vtp_gtmEventId);return aa}})}();

Y.b.awct=["google"],function(){var a=!1,b=[],c=function(h){var l=V("google_trackConversion"),n=h.gtm_onFailure;"function"==typeof l?l(h)||n():n()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},g=function(h){function l(){
u("gdpr_consent",Fl());}function n(){}function m(y){var x=!0;y&&n();x&&b.push(r)}lk();var r={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:h.vtp_conversionId,google_conversion_label:h.vtp_conversionLabel,google_conversion_value:h.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:h.vtp_gtmOnSuccess,gtm_onFailure:h.vtp_gtmOnFailure,google_gtm:cl()};h.vtp_rdp&&(r.google_restricted_data_processing=
!0);void 0!=vp(H.O)&&!1!==vp(H.O)&&(r.google_gtm_url_processor=function(y){return y=Lj(y)});var t=function(y){return function(x,B,C){var z="DATA_LAYER"==y?vp(C):h[B];z&&(r[x]=z)}},q=t("JSON");q("google_conversion_currency","vtp_currencyCode");q("google_conversion_order_id","vtp_orderId");h.vtp_enableProductReporting&&(q=t(h.vtp_productReportingDataSource),q("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),q("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),q("google_basket_feed_language",
"vtp_awFeedLanguage","aw_feed_language"),q("google_basket_discount","vtp_discount","discount"),q("google_conversion_items","vtp_items","items"),r.google_conversion_items&&r.google_conversion_items.map&&(r.google_conversion_items=r.google_conversion_items.map(function(y){return{value:y.price,quantity:y.quantity,item_id:y.id}})));var u=function(y,x){void 0!==x&&((r.google_additional_conversion_params=r.google_additional_conversion_params||{})[y]=x)},v=function(y){return function(x,B,C,z){var D="DATA_LAYER"==
y?vp(C):h[B];z(D)&&u(x,D)}};h.vtp_transportUrl&&(r.google_transport_url=h.vtp_transportUrl);var w=Pk(h.vtp_transportUrl,"/pagead/conversion_async.js");w||(w=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");h.vtp_enableNewCustomerReporting&&(q=v(h.vtp_newCustomerReportingDataSource),q("vdnc","vtp_awNewCustomer","new_customer",function(y){return void 0!=y&&""!==y}),q("vdltv","vtp_awCustomerLTV",
"customer_lifetime_value",function(y){return void 0!=y&&""!==y}));!h.hasOwnProperty("vtp_enableConversionLinker")||h.vtp_enableConversionLinker?(h.vtp_conversionCookiePrefix&&(r.google_gcl_cookie_prefix=h.vtp_conversionCookiePrefix),r.google_read_gcl_cookie_opt_out=!1):r.google_read_gcl_cookie_opt_out=!0;"1"===Gi(!1)._up&&u("gtm_up","1");l();(function(){$f()?ig(function(){l();var y=gg(H.o),x=!y&&void 0!=vp(H.O)&&!1!==vp(H.O);!h.vtp_transportUrl&&x&&(r.google_transport_url="https://pagead2.googlesyndication.com/");
u("gcs",hg());m(y);y||cg(function(){l();r=E(r);!h.vtp_transportUrl&&r.google_transport_url&&delete r.google_transport_url;u("gcs",hg());u("gcu","1");m(!0)},H.o)},[H.o]):m(!0)})();a||(a=!0,U(w,f(),e(w)))};Y.__awct=g;Y.__awct.g="awct";Y.__awct.h=!0;Y.__awct.priorityOverride=0}();
Y.b.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=V(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var f={},g=function(h,l){void 0!==c[h]&&(f[l]=c[h])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");e.push(f);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{U("//bat.bing.com/bat.js",
function(){var h=jf(V("UET"),{ti:c.vtp_tagId,q:e});A[d]=h;h.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(h){N(c.vtp_gtmOnFailure)}};Y.__baut=b;Y.__baut.g="baut";Y.__baut.h=!0;Y.__baut.priorityOverride=0}();



Y.b.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.g="paused";Y.__paused.h=!0;Y.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();

Y.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var n=K.createElement("script");n.async=!1;n.type="text/javascript";n.id=h.id;n.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(n.charset=h.charset);var m=h.getAttribute("data-gtmsrc");m&&(n.src=m,Cf(n,l));d.insertBefore(n,null);m||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];h.firstChild;)r.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,r,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var b=function(d,e,f){ck(function(){var g,h=Q;h.postscribe||(h.postscribe=we);g=h.postscribe;var l={done:e},n=K.createElement("div");n.style.display="none";n.style.visibility="hidden";K.body.appendChild(n);try{g(n,d,l)}catch(m){N(f)}})};var c=function(d){if(K.body){var e=
d.vtp_gtmOnFailure,f=Gp(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.pd,h=f.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(K.body,Lf(g),h,e)()}else qp(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.priorityOverride=0}();




Y.b.img=["customPixels"],function(){(function(a){Y.__img=a;Y.__img.g="img";Y.__img.h=!0;Y.__img.priorityOverride=0})(function(a){var b=Lf('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}jq(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();




var is={};is.macro=function(a){if(Po.Xc.hasOwnProperty(a))return Po.Xc[a]},is.onHtmlSuccess=Po.se(!0),is.onHtmlFailure=Po.se(!1);is.dataLayer=sh;is.callback=function(a){Lg.hasOwnProperty(a)&&Ga(Lg[a])&&Lg[a]();delete Lg[a]};function js(){Q[Qd.C]=is;Xa(Mg,Y.b);td=td||Po;ud=Md}
function ks(){Pf.gtm_3pds=!0;Pf.gtag_cs_api=!0;Q=A.google_tag_manager=A.google_tag_manager||{};Dl();if(Q[Qd.C]){var a=Q.zones;a&&a.unregisterChild(Qd.C);
}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)md.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)pd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)od.push(g[h]);for(var l=b.rules||[],n=0;n<l.length;n++){for(var m=l[n],r={},t=0;t<m.length;t++)r[m[t][0]]=Array.prototype.slice.call(m[t],1);nd.push(r)}rd=Y;sd=fq;var q=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;
Yn();Ud=new Td(q);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Mg[x]=w}ao(v);js();Oo();Xj=!1;Yj=0;if("interactive"==K.readyState&&!K.createEventObject||"complete"==K.readyState)ak();else{Hf(K,"DOMContentLoaded",ak);Hf(K,"readystatechange",ak);if(K.createEventObject&&K.documentElement.doScroll){var B=!0;try{B=!A.frameElement}catch(G){}B&&bk()}Hf(A,"load",ak)}rn=!1;"complete"===K.readyState?tn():Hf(A,"load",tn);a:{if(!gh)break a;A.setInterval(hh,864E5);}Jg=(new Date).getTime();}}
(function(a){a()})(ks);

})()
