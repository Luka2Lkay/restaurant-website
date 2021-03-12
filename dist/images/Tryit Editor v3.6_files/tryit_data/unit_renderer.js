var NonMraidTagInMraidEnv = false;
(function(){
	if(typeof MRAID_ENV != 'undefined'){
		var scriptEl = document.createElement('script');
		scriptEl.src = 'mraid.js';
		var docHead = document.getElementsByTagName('head');
		if(docHead && docHead[0]){
			docHead[0].appendChild(scriptEl);
		} else if(document.body){
			document.body.appendChild(scriptEl);
		}
		NonMraidTagInMraidEnv = true;
	}
})();

if(typeof jvxObjectList == "undefined"){
	var jvxObjectList = ["jvx_60439088a6d33"];
}else{
	jvxObjectList.push("jvx_60439088a6d33");
}

//get the current executing script's parent node to append nodes
function getCurrScrNode(){
    var cScrNode = null;
    try{
        cScrNode = document.currentScript;
        if(cScrNode == undefined){
            scrNodes = document.getElementsByTagName("script");
            for(var i=0;i<scrNodes.length;i++){
                var scrSrc = scrNodes[i].src;
                if(scrSrc &&  scrSrc.indexOf("https://as.jivox.com/unit/unit_renderer.php?creativeUnitType=18&bDim=728x90&bUnitId=1800&siteId=05f91e886b6e15&campaignId=143019&es_pId=LV68Gp&isDynamic=1&us_privacy=${US_PRIVACY}&gdpr=0&gdpr_consent=&jvxVer=2&cMacro=https://adclick.g.doubleclick.net/pcs/click%3Fxai%3DAKAOjss2pjPLgST5rRTbhd94jsYYmd3TyNEj9X95zi95VrKdYw1vEbW8dcGL8J6aa0xmlcNuPCYSzNs_W2jFGUqxcMJ2qUtLh4sqiRtlB-vwOoQ4JCoIfpt-oQfVbqFx9g%26sig%3DCg0ArKJSzNdNe4xT8XqnEAE%26urlfix%3D1%26adurl%3Dhttp://insight.adsrvr.org/track/clk%253Fimp%253D7f30621b-e1c0-43f3-b1b4-7687e21a6e25%2526ag%253Ds3d6sjw%2526sfe%253D127b106d%2526sig%253Dg59VW2W_fhbgi3vtJZtPSnj4Z3Gjrr_oiXNnobcUqAE.%2526crid%253Dweednxcz%2526cf%253D2016808%2526fq%253D0%2526td_s%253Dwww.w3schools.com%2526rcats%253Djba%2526mcat%253Dgc_dwasg_pr_finance_account%2526mste%253D%2526mfld%253D4%2526mssi%253DNone%2526mfsi%253Ddoicndspgk%2526sv%253Dfederatedmedia%2526uhow%253D160%2526agsa%253D%2526wp%253D2.457%2526rgco%253DSouth%252520Africa%2526rgre%253DWestern%252520Cape%2526rgme%253D%2526rgci%253DCape%252520Town%2526rgz%253D7441%2526dt%253DPC%2526osf%253DLinux%2526os%253DOther%2526br%253DFirefox%2526svpid%253D235520%2526rlangs%253Den%2526mlang%253D%2526did%253D%2526rcxt%253DOther%2526tmpc%253D%2526vrtd%253D%2526osi%253D%2526osv%253D%2526daid%253D%2526dnr%253D0%2526vpb%253D%2526c%253DOAFQAQ..%2526dur%253DChoKB2VrbHJrNjMiDwjBjbcBEgh0dGRhYnNlZwowCgxjaGFyZ2UtYWxsLTEiIAj___________8BEhN0dGRfZGF0YV9leGNsdXNpb25zCjYKHWNoYXJnZS1hbGxJbnRlZ3JhbEJyYW5kU2FmZXR5IhUI-f__________ARIIaW50ZWdyYWwKNgodY2hhcmdlLWFsbEludGVncmFsVmlld2FiaWxpdHkiFQj4__________8BEghpbnRlZ3JhbAo9CiNjaGFyZ2UtYWxsR3JhcGVzaG90UHJlZGljdHNDYXRlZ29yeSIWCOj__________wESCWdyYXBlc2hvdApHCidjaGFyZ2UtYWxsSWFzRGlzcGxheVZpZXdhYmlsaXR5VHJhY2tpbmciHAim__________8BEg1pYXMtcmVwb3J0aW5nKgA.%2526durs%253DvssV_4%2526crrelr%253D%2526npt%253D%2526svscid%253D563928%2526mdl%253DFirefox%252520-%252520Linux%2526ipl%253D563928%2526fpa%253D819%2526pcm%253D3%2526ict%253DUnknown%2526said%253Dfa1627df-536f-4eb1-b51d-3a4b5ad50b85%2526auct%253D1%2526us_privacy%253D1---%2526r%253D&r=1250668754") != -1){
                    cScrNode = scrNodes[i];
                }
            }
        }   
    } catch(e){
            }
    return cScrNode;
}

function createiFrameNode(obj){
    /* obj should be of this format - {'id':'frame1','src':'http://www.jivox.com/','width':'1024','height':'768'} */
    var ifrm = document.createElement('iframe');
        ifrm.id = obj.id;
        ifrm.src = obj.src;
        ifrm.width = obj.width;
        ifrm.height = obj.height;
        ifrm.style = obj.style;
        ifrm.frameborder = "0";
        ifrm.scrolling = "no";
        return ifrm;
}

function jvxCopyObject(target,obj){
    for(var k in obj) {
        target[k]=obj[k];
    }
    return target;
}

	// when document.body is not there, inject document.write which will be default create the html structure
	if(document.body == null){
		document.write("<div id='jvxSkeletonRef_60439088a6d33' style='display:none;'></div>")
	}
/*
JavaScript responsible for frame busting
*/
var jvx_60439088a6d33TraffickedInFrame = false,			// COM: should be true, if !busted and self != top
	jvx_60439088a6d33SafeFrameSupported = false,		// COM: should be true only when safeFrame is supported in the page
	jvx_60439088a6d33CanBustFromFrame = true,			// COM: should be false, when all busting method fails
	jvx_60439088a6d33InNestedFrame = false;				// COM: should be true, when tag trafficked inside nested frame

if(self != top){
	jvx_60439088a6d33TraffickedInFrame = true;
}

try{
		$sf.ext.register(728, 90);
		jvx_60439088a6d33SafeFrameSupported = true;
}catch(e){
	jvx_60439088a6d33SafeFrameSupported = false;
}


for(var jvxLoopVar=0; jvxLoopVar<1; jvxLoopVar++){



// Adding close button CSS style to document.head
var css = '.jvx_boxclose{padding:0px; margin:0px; top:1px; right:1px; position:absolute; width:20px; height:19px; display:block; text-decoration:none; color:#fff; background:#111; font-family:"Tahoma", Helvetica, sans-serif; text-align:center; font-size:20px; font-weight:bold; border-radius:50%; box-shadow:0px 0px 2px 0px #FFF; cursor:pointer; line-height:17px; opacity:1; border:2px Solid #999; -webkit-border:2px Solid #999;}',
	head = document.head || document.getElementsByTagName('head')[0],
	style = document.createElement('style');
		css += '.jvx_boxclose{ -webkit-transition:-webkit-transform .25s, opacity .25s; -moz-transition:-moz-transform .25s, opacity .25s; transition: transform .25s, opacity .25s; opacity:.55; -webkit-perspective: 1000; -webkit-backface-visibility: hidden; -moz-backface-visibility: hidden;backface-visibility: hidden;} .jvx_boxclose:hover{ -webkit-transform: rotate(360deg); -moz-transform: rotate(360deg); transform: rotate(360deg); opacity:1;}';
		style.type = 'text/css';
	if (style.styleSheet){
	  style.styleSheet.cssText = css;
	} else {
	  style.appendChild(document.createTextNode(css));
	}
	head.appendChild(style);




var adInVPForOneSec = false;
var timeoutHandle;
var timerRunning = false;

var adViewabilityDetectInit = function (visibilityThreshold) { 
    try {
        var boxElement;

        boxElement = document.querySelector('#adUnitContainer_60439088a6d33');

        createObserver();

        function createObserver() {
            var observer;
            var options = {
                root: null,
                rootMargin: "0px",
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
            };

            observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(boxElement);
        }

        function handleIntersect(entries, observer) {
            entries.forEach(function (entry) {
                                if (entry.intersectionRatio > visibilityThreshold) {
                    if (!adInVPForOneSec && !timerRunning) {
                        timerRunning = true;
                        timeoutHandle = setTimeout(function () {
                            adInVPForOneSec = true;
                                                        if(typeof jvx_60439088a6d33 != "undefined")
                            jvx_60439088a6d33.recordEvent(73);
                            else 
                            recordEvent(73);
                                                    }, 1000);
                    }
                }
                if (timerRunning && entry.intersectionRatio < visibilityThreshold) {
                    window.clearTimeout(timeoutHandle);
                    timerRunning = false;
                }
            });
        }
    } catch(e){
            }
};
var CreativeUnit = (function(){
	var creativeResolveBeginTime = new Date();
	var isMSIE = false;
		var hasFlashPlugin = (function(){
		var flashPluginAvailable = false;
		if(navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]){
			flashPluginAvailable = navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin;
		} 
		if(!flashPluginAvailable && isMSIE){
			// if we are here, this is for MSIE only.
			try {
				var flashObj = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
				if(flashObj)
					flashPluginAvailable = true;
			} catch (ex) {
			}
		}		
		return flashPluginAvailable;
	})();
	
        
	    addEvent(window, "message", receiveHtml5Message, false);

	function receiveHtml5Message(e){
  		if(typeof e.data != "string"){
			return;
		}
        var s = e.data.split(':', 10);
		        if(s && s.length >= 2 && s[0] == 'jvx_60439088a6d33'){
			var msg = s[1];
			if(msg == 'openExpansion'){
									jvx_60439088a6d33.openClickThrough();
							} else if(msg == 'closeExpansion'){
				jvx_60439088a6d33.closeExpansion(false, false);
			} else if(msg == 'expansionLoaded'){
							} else if(msg == 'recordUIR'){
				jvx_60439088a6d33.UIRRecorded = true;
			} else if(msg == 'lastMouseLeave'){
				jvx_60439088a6d33.lastMLeaveId = s[2];
			} else if(msg == 'clearUIR'){
				clearTimeout(jvx_60439088a6d33.UIRTimer);
			} else if(msg == 'recordDwell'){
				if(!jvx_60439088a6d33.DwellRecorded){
					jvx_60439088a6d33.recordDwellEvent(49, jvx_60439088a6d33.DwellElapsedTime);
				}
			}
									else if(msg=="dynamicProperties") {
                jvx_60439088a6d33.updateDYProperties(s[2],1);
							}
												                        else if(msg == "miniScrollerBgInfo"){
                var miniScrollerBgURL = decodeURIComponent(s[2]);
                jvx_60439088a6d33.fixedBgAstLeft = parseInt(s[3]);
                jvx_60439088a6d33.renderFixedPageBg(miniScrollerBgURL,s[3]);
            } 
		}
	}

	function postHtml5Message(winRef, msg){
		try{
			winRef.postMessage('jvx_60439088a6d33' + ':' + msg, "*");
		}catch(e){
			if(typeof(winRef.contentWindow) != 'undefined')
				winRef.contentWindow.postMessage('jvx_60439088a6d33' + ':' + msg, "*");
		}
	}
		function addEvent(el, event, fn, capture){
		if(el.addEventListener){
			el.addEventListener(event,fn,capture);
		}else{
			el.attachEvent("on" + event, fn);
		}
	}
	
	function removeEvent(el, event, fn, capture){
		if(el.removeEventListener){
			el.removeEventListener(event,fn,capture);
		}else{
			el.detachEvent("on" + event, fn);
		}
	}

	function getElById(id){
		return document.getElementById(id);
	}

	function getElByClass(cName){
		if(document.getElementsByClassName){				
			return document.getElementsByClassName(cName);
		}else if(document.querySelectorAll){	// For IE8
			return document.querySelectorAll(cName);
		}
	}

	function getBox(el){
		return el.getBoundingClientRect();
	}

	function getElemByQuerySelect(el){
		return document.querySelector('#'+el+', .'+el);
	}

	function getOffset(elem) {
		if (elem.getBoundingClientRect) {
			return getOffsetRect(elem);
		} else { // old browser
			return getOffsetSum(elem);
		}
	}

	function getOffsetSum(elem) {
	  var top=0, left=0;
	  while(elem) {
		top = top + parseInt(elem.offsetTop);
		left = left + parseInt(elem.offsetLeft);
		elem = elem.offsetParent;        
	  }
	   
	  return {top: top, left: left};
	}

	function getOffsetRect(elem) {
		var box = elem.getBoundingClientRect();
		
		var body = document.body;
		var docElem = document.documentElement;
		
		var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
		var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
		
		var clientTop = docElem.clientTop || body.clientTop || 0;
		var clientLeft = docElem.clientLeft || body.clientLeft || 0;
		
		var top  = box.top +  scrollTop - clientTop;
		var left = box.left + scrollLeft - clientLeft;
		
		return { top: Math.round(top), left: Math.round(left) };
	}

	function getOffset(elem) {
		if (elem.getBoundingClientRect) {
			return getOffsetRect(elem);
		} else {
			return getOffsetSum(elem);
		}
	}

	/**
	* Creates and returns element from html chunk
	* Uses innerHTML to create an element
	*/
	var toElement = (function(){
		var div = document.createElement('div');
		return function(html){
			div.innerHTML = html;
			var el = div.firstChild;
			return div.removeChild(el);
		};
	})();

	var getElComputedStyle = function(){
		var func = null;
		if (document.defaultView && document.defaultView.getComputedStyle) {
			func = document.defaultView.getComputedStyle;
		} else if (typeof(document.body.currentStyle) !== "undefined") {
			func = function(element, anything) {
			  return element["currentStyle"];
			};
		}
		return function(element, style) {
			if(typeof func === 'function')
				return func(element, null)[style];
		}
	}();

    function hasClass(el, name){        
        var re = new RegExp('\\b' + name + '\\b');        
        return re.test(el.className);
    }  
	
    function addClass(el, name){
        if(!hasClass(el, name)){
			if(el.classList && el.classList.length > 0){
				el.className += ' ' + name;
			} else {
				el.className =  name;	
			}
        }	
    }   
	
    function removeClass(el, name){
        var re = new RegExp('\\b' + name + '\\b');                
        el.className = el.className.replace(re, '');        
    }
    
    function removeNode(el){
        el.parentNode.removeChild(el);
    }

	function createImg(obj){
		/* obj should be of this format - {'id':'image1','src':'http://www.jivox.com/image.jpg','width':'180','height':'150'} */
		var id = obj.id, 
			src = obj.src, 
			width = obj.width, 
			height = obj.height,
			str = '';

		str += '<img id="'+id+'" src="'+src+'" width="'+width+'" height="'+height+'" border="0" style="margin:0;padding:0;border:0;display:block;" />';
		return str;
	}
	
	function createSWF(obj){
		var id = obj.id, 
			src = obj.src, 
			width = obj.width, 
			height = obj.height,
			params = obj.params,
			paramsHTMLStr = '',
			str = '';

		for(var paramName in params){
			paramsHTMLStr += '<param name="'+paramName+'" value="'+params[paramName]+'" />';
		}

		str += '<object type="application/x-shockwave-flash" data="'+src+'" id="'+id+'" name="'+id+'" width="'+width+'" height="'+height+'" style="display:block;">';
		str += paramsHTMLStr;
		str += '</object>';
		return str;		
	}

	function createIframe(obj){
		/* obj should be of this format - {'id':'frame1','src':'http://www.jivox.com/','width':'1024','height':'768'} */
		var id = obj.id, 
			src = obj.src, 
			width = obj.width, 
			height = obj.height,
			str = '',
			customCss = '';
				if(!isEmpty(obj.styles)){
			var styles = obj.styles;
			customCss = ";";
			for (var name in styles) {
			  if(styles.hasOwnProperty(name)){
				  customCss += name+ ":" +styles[name]+ ";";
			   }
			}
		}	
		
		var	iframeStyleVal = "";
				iframeStyleVal += "margin:0;padding:0;border:0;display:block" + customCss;

		str += '<iframe id="'+id+'" name="'+id+'" src="'+src+'" width="'+width+'" height="'+height+'" frameborder="0" scrolling="no" allowtransparency="true" style="'+iframeStyleVal+'" onload="this.style.visibility=\'visible\';"></iframe>';
		return str;
	}

	function createFIF(obj){
		/* obj should be of this format - {'id':'frame1','src':'http://www.jivox.com/','width':'1024','height':'768'} */
		var id = obj.id, 
			src = obj.src, 
			width = obj.width, 
			height = obj.height,
			str = '';
		src = '<style>body{padding:0;margin:0;}</style>' + src;
		str += '<iframe id="'+id+'" name="'+id+'" srcdoc="'+src+'" src="about:blank" width="'+width+'" height="'+height+'" frameborder="0" scrolling="no" allowtransparency="true" style="margin:0;padding:0;border:0;visibility:hidden;" onload="this.style.visibility=\'visible\';"></iframe>';

		return str;
	}

    function createDivNode(id){
        var divNode =  document.createElement('div');
        divNode.id = id;
        return divNode;
    }

    function prependNode(cNode, pNode){
		pNode.insertBefore(cNode, pNode.firstChild);
    }
	
	function setPixel(pValue){
		var pxVal = pValue.toString();
		if(pxVal.indexOf("%") >= 0){
			return "";
		}
		return "px";
	}
	
	function clearNode(pNode, idPrefix){
		var i = 0, 
			elList = pNode.getElementsByTagName('div'),
			elLen = (elList) ? elList.length : 0;
		for (i = 0; i < elLen; i++) {
			var elId = elList[i].id;
			if(elId && elId.indexOf(idPrefix) == 0){
				pNode.removeChild(elList[i]);
								return;
			}
		}
	}

		function getPageURL(){
                var currPageURL = window.location.href;
        if(currPageURL != "about:blank" || currPageURL != ""){
            return currPageURL;
        }
        var parentWindow;
                		var resolvePageURL = function(){
            try{
                parentWindow = typeof parentWindow != "undefined" ? parentWindow['parent'] : window.parent;
                var pageUrlRef = parentWindow.location.href;
                if(pageUrlRef == "about:blank"){
                    resolvePageURL();
                } else if(pageUrlRef != ""){
                    currPageURL = pageUrlRef;
                }
            } catch(e){
                console.log("Error in getting the pageURL from resolvePageURL(): " + e);
            }
        }
        if(jvx_60439088a6d33TraffickedInFrame){
                        try{
                currPageURL = top.window.location.href;
            } catch(e){
                                console.log("Error in getting the pageURL from getPageURL(): " + e);
                resolvePageURL();
            }
        } 
				return currPageURL;
	}
	
	/**
     * Helper that takes object literal
     * and returns the object after removing blank values
     * @param {Object} sourceObj
     */
	function deleteBlankAttr(sourceObj){
		for (var i in sourceObj) {
			  if (sourceObj[i] == "" || sourceObj[i] == "undefined") {
				delete sourceObj[i];
			  }
			}
		return sourceObj;	
	}
	
	/**
     * Helper that takes object literal
     * and add all properties to element.style
     * @param {Element} node
     * @param {Object} styles
     */
    function addStyles(node, styles){
		if(!isEmpty(styles)){
			styles = deleteBlankAttr(styles);
			var fChar = "",
			nodeCSS = node.style.cssText;	
			if(nodeCSS){
				fChar = " ";
				if(nodeCSS[nodeCSS.length-1] != ";"){
				  nodeCSS += ";";	// For IE8 and less
				}
			}
			for (var name in styles) {
			  if(styles.hasOwnProperty(name)){
				  nodeCSS += fChar +name+ ": " +styles[name]+ ";";
			   }
			}
			if(nodeCSS) node.style.cssText = nodeCSS.toString();
		}
	}

	/**
     * Helper that takes object literal
     * and remove all properties to element.style
     * @param {Element} el
     * @param {Object} styles
     */
    function removeStyles(el, styles){
		if(!isEmpty(styles)){
		//	styles = deleteBlankAttr(styles);
			for (var name in styles) {
				if(styles.hasOwnProperty(name)){
					el.style[name] = '';
				}
			}
		}	
    }
	
	/**
     * Helper that creates a Div component with the Id passed 
     * and add default CSS class, innerText and extra styles to the component 
	 * and then append the component to the main element
     * @param {Main element to which new node has to appended } mainEl
	 * @param {Id for the new node} nodeId
	 * @param {default CSS class name to be added} className
	 * @param {innerText to the node} text
	 * @param {Object - styles to be added to the node} styleObj
     */
	function addDivComponent(mainEl, nodeId, className, text, styleObj)
	{
		var node = createDivNode(nodeId);
		node.innerHTML = text;							
		if(className != '')
			addClass(node, className);					
		if(!isEmpty(styleObj))
			addStyles(node, styleObj);
		return mainEl.appendChild(node);
	}
	
	function setAttributes(el, attrs)
	{
		for(var key in attrs) {
			el.setAttribute(key, attrs[key]);
		}
	}
	
	function getBrowserPrefix(browserName){
		var prefix = "";
		if(!isEmpty(browserName)){
			if((browserName == 'Chrome') || (browserName == 'Safari') || (browserName == 'iPhone') || (browserName == 'iPod') || (browserName == 'iPad'))
				prefix = "webkit";
			else if(browserName == 'Firefox')
				prefix = "moz";
			else if(browserName == 'Internet Explorer')
				prefix = "ms";
			else if(browserName == 'Opera')
				prefix = "o";
			else{
							}	
		}
		return prefix;
	}
	
	function getBrowserWindowProps() {
        var browserWidth = 0, browserHeight = 0;
		var doc = document,
			docElem = doc && doc.documentElement,
			docBody = doc && doc.body;
						
		 if(typeof (window.innerWidth) == 'number') {
			// For checking non-IE browsers Mozilla, Safari, Opera, Chrome.
			browserWidth = window.innerWidth;
		}
				//All IE except version 4
		else if (docElem && docElem.clientWidth) {
            browserWidth = docElem.clientWidth;
        }
				//IE 4
        else if (docBody && docBody.clientWidth) {
			 browserWidth = docBody.clientWidth;
		}
		
		 if(typeof (window.innerHeight) == 'number') {
			// For checking non-IE browsers Mozilla, Safari, Opera, Chrome.
			browserHeight = window.innerHeight;
		}
				//All IE except version 4
		else if (docElem && docElem.clientHeight) {
            browserHeight = docElem.clientHeight;
        }
				//IE 4
        else if (docBody && docBody.clientHeight) {
			 browserHeight = docBody.clientHeight;
		}
		
        return [browserWidth, browserHeight];
    };
	
	function getCenterAlignXY(objWidth,objHeight){ 
		var winPos = getBrowserWindowProps(),
			objX = '';
		if(window.innerWidth == document.documentElement.clientWidth) {
			objX = (winPos[0] - objWidth) / 2 ;
		} else {
			var scrollWidth = window.innerWidth - document.documentElement.clientWidth;
			objX = ((winPos[0]- scrollWidth) - objWidth) / 2 ;
		}	
		 var objY = (winPos[1] - objHeight) / 2 ;
		 		 objX = (objX < 0) ? 0 : objX;
		 		 objY = (objY < 0) ? 0 : objY;
		 return [objX,objY];
	}
	
	function isEmpty(obj) {
		
		// null and undefined are "empty"
		if (obj == null) return true;

		// Assume if it has a length property with a non-zero value
		if (obj.length === 0)  return true;
		if (obj.length && obj.length > 0)    return false;

		for (var key in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
		}
		return true;	
	}
	/* Function used to create an event manually with the help of CustomEvent constructor for the 'evtName' */
	function createCustomEvent(evtName){
		var event = null;
		if (typeof CustomEvent === 'function') {
			event = new CustomEvent(evtName)
		} else {	// For IE browser
			event = document.createEvent("CustomEvent");
			event.initCustomEvent(evtName, false, false, '');
		}
		if(!event) return;
		return event;
	}
	
		
	function fireTracker(url){
		var imgEl = document.createElement('img');
		var finalURL = "";
		if(!url.match("http://evs.jivox.com/jivox/serverAPIs/saveImpression.php")){
			var replaceCacheBuster0 = url.replace('[timestamp]', Math.random()); 
var replaceCacheBuster1 = replaceCacheBuster0.replace('[randomNumber]', Math.random()); 
var replaceCacheBuster2 = replaceCacheBuster1.replace('{cacheBuster}', Math.random()); 
var replaceCacheBuster3 = replaceCacheBuster2.replace('{RANDOMNUM}', Math.random()); 
var replaceCacheBuster4 = replaceCacheBuster3.replace('%%CACHEBUSTER%%', Math.random()); 
finalURL = replaceCacheBuster4;			//finalURL = replaceCacheBuster;
		}else{
			if(url.indexOf("?") == -1){
				finalURL = url + "?r=" + Math.random();
			}else{
				finalURL = url + "&r=" + Math.random();
			}
		}
					if(typeof jvx_60439088a6d33 != 'undefined'){
				finalURL += "&es_cgName_"+jvx_60439088a6d33.DYReportingKey;
                if(jvx_60439088a6d33.DYSegmentName != ""){
                    finalURL += "&es_segName_"+jvx_60439088a6d33.DYSegmentName;
                }
			}
				imgEl.src = finalURL;
			}       

	function setStylesFromStr(node, styleStr){
		if(styleStr == ''){
			return;
		}
		var splittedStyles = styleStr.split(";");
		var stylesLen = splittedStyles.length;
		if(stylesLen < 1){
			return;
		}
		for(var i=0;i<stylesLen;i++){
			var splittedRule = splittedStyles[i].split(":");
			if(splittedRule.length < 2){
				continue;
			}
			var prop = splittedRule[0];
			var val = splittedRule[1];
			node.style[prop] = val;
		}
	}

	function setOpacity(myElement, opacityValue) {
		if(typeof myElement.style.opacity !== 'undefined'){
			myElement.style.opacity = opacityValue/100; // Gecko/Opera
		} else {
			myElement.style.filter = "alpha(opacity="
				 + opacityValue + ")"; // IE			
		}
	}
		function setCloseBtnProp(btnSize){
		var prop = {};
		prop.width = btnSize;
		prop.height = btnSize - 1;
				prop.size = (btnSize < 20) ? btnSize - 3 : btnSize - 2;
		prop.lHeight = (btnSize < 20) ? btnSize - 3 : btnSize - 5;
				return prop;
	}
			function alignAdUnitContainer(sfLeft, sfTop){
		var cLeft = sfLeft + "px",
			cTop = sfTop + "px",
			cNode = getElById(jvx_60439088a6d33.adUnitContainerId);
		addStyles(cNode, {"left":cLeft, "top":cTop});
	}
	function renderAdInsideSafeFrame(animDir){
		if(jvx_60439088a6d33SafeFrameSupported){
			/* ------------- SafeFrame Settings--------------- */
						var ref = jvx_60439088a6d33,
				safeFrameExpX = ref.expansionWidth - ref.baseWidth,
				safeFrameExpY = ref.expansionHeight - ref.baseHeight,
				sfTop = parseInt('0'),
				sfLeft = parseInt('0'),
				sfX = parseInt(safeFrameExpX),
				sfY = parseInt(safeFrameExpY);
				
			if(sfTop < 0){
				// expansion to come from above base
				sfTop = -(sfTop);
			}else{
				// expansion to come from base level
				sfY = sfY + sfTop;
				sfTop = 0;
			}
			if(sfY < 0) sfY = 0;	// doesn't need to reduce the height of the safeframe iframe
			try{
									if(animDir == "SlideRight" || animDir == "DiagonalTopLeft" || animDir == "SlideBottom"){
						$sf.ext.expand({t:sfTop, l:0, b:sfY, r:sfX}, 0, false);
					} else {
						$sf.ext.expand({t:sfTop, l:sfX, b:sfY, r:0}, 0, false);
											}
							}catch(e){
							}
			/* ------------- End ------------- */
		}
	}
		function findPos(obj){
		var curleft = 0;
		var curtop = 0;
		var pageY = 0;
		var pageX = 0;
	 /* var rect = obj.getBoundingClientRect();
		curleft = rect.left;
		curtop =  rect.top; */
		if (obj.offsetParent) {
			do{
				curleft += obj.offsetLeft;
				curtop += obj.offsetTop;
			}while (obj = obj.offsetParent);
		}
		
		if(!isNaN(window.pageYOffset)) {
			pageX = window.pageXOffset;
			pageY = window.pageYOffset;
		} else {
			pageY=document.body.scrollTop || document.documentElement.scrollTop;
			pageX=document.body.scrollLeft || document.documentElement.scrollLeft;
		}
		return [curleft,curtop,pageX,pageY];
	}
		function expandFromVP(expObj){
		var vpStyles = findPos(getElById(jvx_60439088a6d33.adUnitContainerId)),
			vpTop = "", vpLeft = "";
				var centerAlign = getCenterAlignXY(expObj.expWidth, expObj.expHeight);
		vpTop = parseInt(vpStyles[3]);
		if(expObj.animationDirection == "SlideLeft" || expObj.animationDirection == "SlideInRight"
		 || expObj.animationDirection == "DiagonalTopRight" || expObj.animationDirection == "SlideInDiagonalRight"
		 || (expObj.expansionOpen && (expObj.animationDirection == "SlideBottom" || expObj.animationDirection == "SlideInTop"))){
		 
			vpLeft = parseInt(centerAlign[0]) + parseInt(expObj.expWidth);
		}else{
			vpLeft = parseInt(centerAlign[0]);
		}
				
		return [vpLeft, vpTop];
	}
			// return CSS styles array for expansion unit animation
	function createStyleObject(obj){
		var transL = "", transT = "", transB = "", transR = "",
			overflowVal = "", transPos = "",
			transStr = "all "+ obj.animationSpeed +"s linear",
			transW = obj.expWidth + "px", 
			transH = obj.expHeight + "px",
			bLeft = Math.round(obj.baseBox.left),
			bTop = Math.round(obj.baseBox.top),
			expTopOffset = parseInt("0"),
			expLeftOffset = parseInt("0");
									transPos = "absolute";
							
				
				overflowVal = "hidden";
				
		switch(obj.animationDirection){
			case "SlideLeft":
			case "SlideInRight":
			case "DiagonalTopRight":
			case "SlideInDiagonalRight":
			case "DiagonalBottomRight":
			case "SlideBottom":
			case "SlideInTop":
				if(obj.animationDirection == "DiagonalTopRight" || obj.animationDirection == "SlideInDiagonalRight"
					|| obj.animationDirection == "DiagonalBottomRight"){
										transW = "0px";
					transH = "0px";
				} else if(obj.animationDirection == "SlideBottom" || obj.animationDirection == "SlideInTop"){
										
					transH = "0px";
										transStr = "height "+ obj.animationSpeed +"s linear";
										
									} else {
										transW = "0px";
					transStr = "width .5s linear, left .5s linear";
				}
				if(!obj.preStyleExpansion){
										var width = obj.bWidth;
					if(!obj.expansionOpen && (lastAnimDir == "SlideRight" || lastAnimDir == "DiagonalTopLeft") && (obj.animationDirection == "SlideInRight" || obj.animationDirection == "SlideInDiagonalRight")){
						if(obj.expWidth != obj.bWidth){
							width = obj.expWidth;
						}
					}
					if(obj.insertExpansionTo != "adUnitContainer"){
						var left = "";
						if(!obj.alignToVP){
							if(!obj.expansionOpen && (obj.animationDirection == "SlideBottom" || 
														obj.animationDirection == "SlideInTop")){
								left = "";
							} else {
								left = parseInt(bLeft) + width;
								transL = left - expLeftOffset + "px";
							}
						} else {
							if(!obj.expansionOpen && (obj.animationDirection == "SlideBottom" ||
																				obj.animationDirection == "SlideTop")){

								left = parseInt(bLeft);
							}else{
								if(obj.animationDirection != "SlideBottom" && obj.animationDirection != "SlideInTop")
									left = parseInt(bLeft) + width;
								else
									left = parseInt(bLeft);
							}
							transL = left - expLeftOffset + "px";
						}
						var winDim = getBrowserWindowProps();
																		transT = bTop + expTopOffset + 'px';
																	} else {
												var left = "";
						if(!obj.alignToVP){
							if(!obj.expansionOpen && obj.animationDirection == "SlideBottom" ||
														obj.animationDirection == "SlideInTop"){
							//	left = "";
							} else {
								left = width;
								transL = left - expLeftOffset + "px";
							}
						} else {
							if(!obj.expansionOpen && (obj.animationDirection == "SlideBottom" ||
																				obj.animationDirection == "SlideInTop")){
							//	left = "";
							} else {
								if(obj.animationDirection != "SlideBottom" && obj.animationDirection != "SlideInTop"){
									left = width;
									transL = left - expLeftOffset + "px";
								}
							}	
						}
												
												transT = expTopOffset + 'px';
											}
									}
				break;
			case "SlideRight":
			case "SlideInLeft":
			case "DiagonalTopLeft":
			case "SlideInDiagonalLeft":
			
				if(obj.animationDirection == "DiagonalTopLeft" || obj.animationDirection == "SlideInDiagonalLeft"){
										transW = "0px";
					transH = "0px";
				} else if(obj.animationDirection == "SlideRight" || obj.animationDirection == "SlideInLeft"){
																transW = "0px";
						transStr = "width "+ obj.animationSpeed +"s linear";
									} else if(obj.animationDirection == "SlideBottom" || obj.animationDirection == "SlideInTop"){
										
					transH = "0px";
										transStr = "height "+ obj.animationSpeed +"s linear";
										
									}
				
				if(!obj.preStyleExpansion){
										var el = getElById(obj.expContainerId);
					if(obj.insertExpansionTo != "adUnitContainer"){
																					var left = (el.style.left) ? parseInt(el.style.left) : parseInt(bLeft);
																			
												transL = left - expLeftOffset + "px";
												transT = bTop + expTopOffset + 'px';
					} else {
																					var left = (el.style.left) ? parseInt(el.style.left) : parseInt(bLeft);
																									transL = left - expLeftOffset + 'px';
												transT = expTopOffset + 'px';
					}
									}
				break;
			case "Center":
								var startDim = 	getCenterAlignXY(0, 0);
				transW = "0px";
				transH = "0px";
								transL = parseInt(startDim[0]) + expLeftOffset + "px";
								transT = parseInt(startDim[1]) + expTopOffset + "px";
				break;
			case "SlideTop":
			case "SlideInBottom":
								transH = "0px";
								break;
			default:
								break;	
		}
		
				
				
				
		if(0){
			transB = 0 + expTopOffset + "px";
			transT = "";
		}
		var browserPrefixTransParam = "-" + obj.browserPrefix + "-transition",
			browserPrefixParam_1 = "-" + obj.browserPrefix + "-perspective",
			browserPrefixParam_2 = "-" + obj.browserPrefix + "-backface-visibility";
			
		/* Creating style object */	
		var styleObj = {
					'overflow'				: overflowVal,
					'width'					: transW,
					'height'				: transH,
					'top'					: transT,
					'left'					: transL,
					'bottom'				: transB,
					
					'transition'					: transStr,					
					'position'				: transPos
				};
		
				
				styleObj[browserPrefixTransParam] = transStr;
		styleObj[browserPrefixParam_1] = 1000;
		styleObj[browserPrefixParam_2] = "hidden";
				lastAnimDir = obj.animationDirection;
		return styleObj;
	}
	
		
		
		
		
	
	function mraidHandleOnViewable(viewable){
		jvxMraidIsShown = viewable;		 
			if(!jvxMraidIsShown || getElById(jvx_60439088a6d33.baseContainerId)){
				return; 
			}
		jvx_60439088a6d33.init();
		handleMraidViewableImprFiring();
	}
	
	function mraidHandleViewableChange(viewable){
		mraidHandleOnViewable(viewable);
	}

	//fire viewable impression 
	function handleMraidViewableImprFiring(){
		if (!adInVPForOneSec && !timerRunning) {
			timerRunning = true;
			var timeoutHandle = setTimeout(function () {
				adInVPForOneSec = true;
				jvx_60439088a6d33.recordEvent(74);
			}, 1000);
		}
	}

	function validateVal(val){
		return (val == undefined || val == "" || val == 0) ? false : true; 
	};

	/**
	 * Constructor Function / Class for the Creative Unit
	 */
	function CreativeUnit(uniqId){

	    this.id = uniqId;  
		this.playerParamsMap = {"reportingURL":"https:\/\/evs.jivox.com","creativeUnitType":"18","bDim":"728x90","bUnitId":"1800","siteId":"05f91e886b6e15","campaignId":"143019","es_pId":"LV68Gp","isDynamic":"1","us_privacy":"${US_PRIVACY}","gdpr":"0","gdpr_consent":"","jvxVer":"2","cMacro":"https:\/\/adclick.g.doubleclick.net\/pcs\/click?xai=AKAOjss2pjPLgST5rRTbhd94jsYYmd3TyNEj9X95zi95VrKdYw1vEbW8dcGL8J6aa0xmlcNuPCYSzNs_W2jFGUqxcMJ2qUtLh4sqiRtlB-vwOoQ4JCoIfpt-oQfVbqFx9g&sig=Cg0ArKJSzNdNe4xT8XqnEAE&urlfix=1&adurl=http:\/\/insight.adsrvr.org\/track\/clk%3Fimp%3D7f30621b-e1c0-43f3-b1b4-7687e21a6e25%26ag%3Ds3d6sjw%26sfe%3D127b106d%26sig%3Dg59VW2W_fhbgi3vtJZtPSnj4Z3Gjrr_oiXNnobcUqAE.%26crid%3Dweednxcz%26cf%3D2016808%26fq%3D0%26td_s%3Dwww.w3schools.com%26rcats%3Djba%26mcat%3Dgc_dwasg_pr_finance_account%26mste%3D%26mfld%3D4%26mssi%3DNone%26mfsi%3Ddoicndspgk%26sv%3Dfederatedmedia%26uhow%3D160%26agsa%3D%26wp%3D2.457%26rgco%3DSouth%2520Africa%26rgre%3DWestern%2520Cape%26rgme%3D%26rgci%3DCape%2520Town%26rgz%3D7441%26dt%3DPC%26osf%3DLinux%26os%3DOther%26br%3DFirefox%26svpid%3D235520%26rlangs%3Den%26mlang%3D%26did%3D%26rcxt%3DOther%26tmpc%3D%26vrtd%3D%26osi%3D%26osv%3D%26daid%3D%26dnr%3D0%26vpb%3D%26c%3DOAFQAQ..%26dur%3DChoKB2VrbHJrNjMiDwjBjbcBEgh0dGRhYnNlZwowCgxjaGFyZ2UtYWxsLTEiIAj___________8BEhN0dGRfZGF0YV9leGNsdXNpb25zCjYKHWNoYXJnZS1hbGxJbnRlZ3JhbEJyYW5kU2FmZXR5IhUI-f__________ARIIaW50ZWdyYWwKNgodY2hhcmdlLWFsbEludGVncmFsVmlld2FiaWxpdHkiFQj4__________8BEghpbnRlZ3JhbAo9CiNjaGFyZ2UtYWxsR3JhcGVzaG90UHJlZGljdHNDYXRlZ29yeSIWCOj__________wESCWdyYXBlc2hvdApHCidjaGFyZ2UtYWxsSWFzRGlzcGxheVZpZXdhYmlsaXR5VHJhY2tpbmciHAim__________8BEg1pYXMtcmVwb3J0aW5nKgA.%26durs%3DvssV_4%26crrelr%3D%26npt%3D%26svscid%3D563928%26mdl%3DFirefox%2520-%2520Linux%26ipl%3D563928%26fpa%3D819%26pcm%3D3%26ict%3DUnknown%26said%3Dfa1627df-536f-4eb1-b51d-3a4b5ad50b85%26auct%3D1%26us_privacy%3D1---%26r%3D","r":"1250668754","serverURL":"https:\/\/as.jivox.com"};
		this.campaignId = '143019';
		this.siteId = '05f91e886b6e15';
		this.placementId = 'LV68Gp';
		this.creativeUnitType = '18';
		this.baseDim = '728x90';
		this.expDim = '';
				this.asyncTaskList = {};
		this.asyncTaskCount = 0;
		this.asyncCompletedTaskCount = 0;
					this.asyncTaskList['custom-pre-processing'] = 0;
			this.asyncTaskCount++;
								
                        this.apParamsArr = [];
        this.apParamsInEventFormat = "";
						this.browserName = 'Firefox';
		this.browserVersion = '86.0';
								
		this.adUnitContainerId = 'adUnitContainer' + uniqId;
		this.adUnitContainerWrapperId = 'adUnitContainerWrapper' + uniqId;
		this.baseContainerId = 'baseContainer' + uniqId;
		this.baseId = 'jvxBase' + uniqId;
		this.base2Id = 'jvxBase' + uniqId + '0';
		this.baseCloseId = 'baseClose' + uniqId;
		this.baseBgId = 'baseBg' + uniqId;
		this.baseBg2Id = 'baseBg' + uniqId + '0';
		this.expansionContainerId = 'expansionContainer' + uniqId;
		this.expansionId = 'expansion' + uniqId;
		this.expansion2Id = 'expansion' + uniqId + '0';
		this.expansionBgId = 'expansionBg' + uniqId;
		this.logContainerId = 'logContainer' + uniqId;
		this.closeExpansionId = 'closeExpansion' + uniqId;
		this.expansionLoaderId = 'expansionLoader' + uniqId;
		this.baseInterceptorId = 'baseInterceptor' + uniqId;
		this.expInterceptorId = 'expInterceptor' + uniqId;
		this.base2InterceptorId = 'baseInterceptor' + uniqId + '0';
		this.maskId = 'mask' + uniqId;
        this.fixedPageBgId = 'fixedPageBg' + uniqId;
		this.loaderId = 'loader' + uniqId;
		this.iBusterFrame = null;
		/*Smooth responsive and stretch variables*/
				this.baseType = 'html';
		this.baseHasLayout = '1';
		this.baseURL = 'https://as.jivox.com/unit/layout_renderer.php?creativeUnitType=18&bDim=728x90&bUnitId=1800&siteId=05f91e886b6e15&campaignId=143019&es_pId=LV68Gp&isDynamic=1&us_privacy=%24%7BUS_PRIVACY%7D&gdpr=0&gdpr_consent=&jvxVer=2&cMacro=https%3A%2F%2Fadclick.g.doubleclick.net%2Fpcs%2Fclick%3Fxai%3DAKAOjss2pjPLgST5rRTbhd94jsYYmd3TyNEj9X95zi95VrKdYw1vEbW8dcGL8J6aa0xmlcNuPCYSzNs_W2jFGUqxcMJ2qUtLh4sqiRtlB-vwOoQ4JCoIfpt-oQfVbqFx9g%26sig%3DCg0ArKJSzNdNe4xT8XqnEAE%26urlfix%3D1%26adurl%3Dhttp%3A%2F%2Finsight.adsrvr.org%2Ftrack%2Fclk%253Fimp%253D7f30621b-e1c0-43f3-b1b4-7687e21a6e25%2526ag%253Ds3d6sjw%2526sfe%253D127b106d%2526sig%253Dg59VW2W_fhbgi3vtJZtPSnj4Z3Gjrr_oiXNnobcUqAE.%2526crid%253Dweednxcz%2526cf%253D2016808%2526fq%253D0%2526td_s%253Dwww.w3schools.com%2526rcats%253Djba%2526mcat%253Dgc_dwasg_pr_finance_account%2526mste%253D%2526mfld%253D4%2526mssi%253DNone%2526mfsi%253Ddoicndspgk%2526sv%253Dfederatedmedia%2526uhow%253D160%2526agsa%253D%2526wp%253D2.457%2526rgco%253DSouth%252520Africa%2526rgre%253DWestern%252520Cape%2526rgme%253D%2526rgci%253DCape%252520Town%2526rgz%253D7441%2526dt%253DPC%2526osf%253DLinux%2526os%253DOther%2526br%253DFirefox%2526svpid%253D235520%2526rlangs%253Den%2526mlang%253D%2526did%253D%2526rcxt%253DOther%2526tmpc%253D%2526vrtd%253D%2526osi%253D%2526osv%253D%2526daid%253D%2526dnr%253D0%2526vpb%253D%2526c%253DOAFQAQ..%2526dur%253DChoKB2VrbHJrNjMiDwjBjbcBEgh0dGRhYnNlZwowCgxjaGFyZ2UtYWxsLTEiIAj___________8BEhN0dGRfZGF0YV9leGNsdXNpb25zCjYKHWNoYXJnZS1hbGxJbnRlZ3JhbEJyYW5kU2FmZXR5IhUI-f__________ARIIaW50ZWdyYWwKNgodY2hhcmdlLWFsbEludGVncmFsVmlld2FiaWxpdHkiFQj4__________8BEghpbnRlZ3JhbAo9CiNjaGFyZ2UtYWxsR3JhcGVzaG90UHJlZGljdHNDYXRlZ29yeSIWCOj__________wESCWdyYXBlc2hvdApHCidjaGFyZ2UtYWxsSWFzRGlzcGxheVZpZXdhYmlsaXR5VHJhY2tpbmciHAim__________8BEg1pYXMtcmVwb3J0aW5nKgA.%2526durs%253DvssV_4%2526crrelr%253D%2526npt%253D%2526svscid%253D563928%2526mdl%253DFirefox%252520-%252520Linux%2526ipl%253D563928%2526fpa%253D819%2526pcm%253D3%2526ict%253DUnknown%2526said%253Dfa1627df-536f-4eb1-b51d-3a4b5ad50b85%2526auct%253D1%2526us_privacy%253D1---%2526r%253D&r=1250668754&objectName=jvx_60439088a6d33&adUnitId=1800&jvxSessionId=1615040648.8846';
        			this.baseURL += '&base=1';
            this.baseURL += '&creativeResolveBeginTime='+Date.parse(creativeResolveBeginTime);
            		        this.baseBgType = 'image';
		this.baseBgURL = '';
		this.baseBgColor = '';
		this.baseFallbackType = '';
		this.baseFallbackURL = '';		
		this.baseFallbackFileName = '';
		this.baseFallbackWidgetSrc = '';
        this.baseWidth = '728';
		this.baseHeight = '90';
                        this.origBaseWidth = '728';
        this.origBaseHeight = '90';
        		this.baseCloseRight = '0';
		this.baseBehaviourId = '0';
		this.behaviourId = '1';
		this.behaviourName = '0x0 Expansion';
        this.insertAdUnitContainerTo = 'slot';
        this.insertAdUnitContainerAs = 'fc';
        this.insertBaseTo = 'adUnitContainer';
        this.insertBaseAs = 'fc';
						var pageURL = getPageURL();
		this.encodedPageURL = encodeURIComponent(pageURL);
				//check the current state of the expansion
		this.expansionOpen = false;
		//check whether the expansion has really opened
		this.expansionHasOpened = false;
		//make sure openExpansionComplete msg is fired only once, because openExpComplete was getting fired incase of orientationchange(css transition was happening in this case)
		this.postOpenExpCompMsg = true;
						
			
						
				this.storeTransitionEndEvt = {};
		this.autoExpandTimerRef = null;
		this.autoCollapseTimerRef = null;
		this.timeSpentOnAd = 0;
				this.UIRTimer = null;
		this.UIRRecorded = false;
		this.DwellTimer = null;
		this.DwellRecorded = true;
		this.DwellElapsedTimer = null;
		this.DwellElapsedTime = 0;
							//	this.sfCollapseFirst = false;
										this.openExpAgain = false;
						this.raiseCMacroFlag = false;
										
			}

	/*
	Prototype object of the CreativeUnit. Add methods / properties to this so that they get shared 
	among all objects created out of this class but at the same time it's created only once.
	*/
	CreativeUnit.prototype = {
		constructor:CreativeUnit,
						         addScriptTagToBody: function(srcLink){
	         var script = document.createElement('script');
	         script.src = srcLink;
	         document.body.appendChild(script);
         },
         sendCookieRequest: function(cookieName){
	        if(jvx_60439088a6d33SafeFrameSupported){
		         var callBackFnName ='jvx_60439088a6d33'+".updateDYProperties";
		         jvx_60439088a6d33.addScriptTagToBody('https://as.jivox.com'+"/unit/getCookies.php?cookieName="+cookieName+"&callback="+callBackFnName+"&deleteCookie="+1+"&r_="+Math.random());  
	         }                  
         },
         updateDYProperties: function(val,isNotCookieData){
            if(!val) return;
            if(isNotCookieData != 1) var val = JSON.parse(val);
            var dynPropArr = val.split("|");
            jvx_60439088a6d33.DYReportingKey = dynPropArr[0] ? decodeURIComponent(dynPropArr[0]) : "";
            jvx_60439088a6d33.DYSegmentName = dynPropArr[1] ? decodeURIComponent(dynPropArr[1]) : "";
            //this.fireCREvent();
         },
						fireCreativeLoadedEvent: function(eventSrc){
			var doFireCreativeLoadEvt = (eventSrc.id == this.baseId) || (this.baseDim == "" && eventSrc.id == this.expansionId);
			if(doFireCreativeLoadEvt){
				var creativeLoadEndTime = new Date();
				var creativeLoadElapseTime = Math.round((creativeLoadEndTime - creativeResolveBeginTime)/1000);
				jvx_60439088a6d33.recordEvent(72, 'es_et=' + creativeLoadElapseTime);
			}
		},
		onLoadEventHandler:function(event){
			var eventSrc = event.target || event.srcElement;
			if(eventSrc != 'undefined' && eventSrc != null){
				this.fireCreativeLoadedEvent(eventSrc);
								               	
                    if(jvx_60439088a6d33SafeFrameSupported){
                        var getReportingKeyFromCookie = false,
                            baseAndExpHasLayout = (this.baseHasLayout == 1 && this.expansionHasLayout == 1),
                            elId = eventSrc.id;
                            if(baseAndExpHasLayout){
                                if(elId.indexOf("jvxBase_") != -1){
                                    getReportingKeyFromCookie = true;
                                }
                            } else {
                                if(elId.indexOf("jvxBase_") != -1 && this.baseHasLayout == 1){
                                    getReportingKeyFromCookie = true;
                                }else if(elId.indexOf("expansion_") != -1 && this.expansionHasLayout == 1){
                                    getReportingKeyFromCookie = true;
                                }
                            }
                            if(getReportingKeyFromCookie){
                                jvx_60439088a6d33.sendCookieRequest('jvx_60439088a6d33'+"_dynamicProperties");
                            }
                    }
                											}	
		},
						restyleExpansion:function(){
			var that = this,
				expEl = getElById(this.expansionContainerId),
				offLeft = parseInt(0),
				offTop = parseInt(0);
				
			var getCoords = function(){
				var baseBox = "";
				baseBox = that.getAdUnitBox();
				return baseBox;
			};
										if(this.expansionOpen){
					var box = getCoords();
					var newLeft = "", newTop = "";
					if(this.insertExpansionTo != 'adUnitContainer'){
						if(this.expAnimDir == "DiagonalTopRight" || this.expAnimDir == "SlideLeft" ||
							this.expAnimDir == "SlideBottom" || this.expAnimDir == "SlideTop"){
							
							newLeft = Math.round(box.left) - (parseInt(this.expansionWidth) - parseInt(this.baseWidth)) - offLeft;
						} else {
							newLeft = Math.round(box.left) + offLeft;
						}
						newTop = Math.round(box.top) + offTop;
					}else{
						if(this.expAnimDir == "DiagonalTopRight" || this.expAnimDir == "SlideLeft" ||
							this.expAnimDir == "SlideBottom" || this.expAnimDir == "SlideTop"){
							
							newLeft = parseInt(this.expansionWidth) - parseInt(this.baseWidth) + offLeft;
							newLeft = "-" +newLeft+ 'px';
						} else {
							newLeft = offLeft;
						}
						newTop = offTop;
					}
										addStyles(expEl, {'left': newLeft + 'px', 'top': newTop + 'px'});
				} else {
					this.preStyleExpContainer();
				}
					},
						        renderBase:function(responsive){
			if(this.asyncTaskCount > 0){
								if(this.asyncTaskCount > this.asyncCompletedTaskCount){
					return;
				}
			}
                        if(this.baseHasLayout == 1){
               if(!this.dmpDSValue && !this.cJsExecuted) return;
                        }
                        if(responsive) {
				var baseContainerNode = getElById(this.baseContainerId);
				baseContainerNode.style.backgroundColor = this.baseBgColor;
				var cNode = getElById(this.adUnitContainerId);
				if(cNode != null) {
					// Reset width and height for base container
					cNode.style.width = this.baseWidth + 'px';
					cNode.style.height = this.baseHeight + 'px';
				}
								var bNode = getElById(this.baseId);
				var b2Node = getElById(this.base2Id);
				if(bNode != null) {
					var iframeNode = (bNode.nodeName.toLowerCase() == "iframe") ? bNode : b2Node;
					var imgNode = (bNode.nodeName.toLowerCase() == "img") ? bNode : b2Node;
										if(this.baseType == "html" && iframeNode != null) {
						iframeNode.style.display = 'block';
						if(imgNode != null) {
							imgNode.style.display = 'none';
						}
						 
						iframeNode.width = this.baseWidth;
												iframeNode.height = this.baseHeight;
						if(this.baseHasLayout == 1){
							// Layout renderer should render new layout						
							/*Smooth responsive and stretch variables*/
															postHtml5Message(iframeNode, 'reRenderLayout');
								setTimeout(function(){
                                	postHtml5Message(iframeNode, 'activateScene');
                                },1);
													} else {
							// html banner
							iframeNode.src = this.baseURL;
						}
						
												return;
					} 
										else if(this.baseHasLayout != 1 && imgNode != null) {
						imgNode.style.display = 'block';
												if(iframeNode != null) {
							iframeNode.style.display = 'none';
							//Layout renderer should pause all the activities like video
							postHtml5Message(iframeNode, 'pauseInteraction');
							postHtml5Message(iframeNode, 'deActivateScene');
						}
												 
						imgNode.width = this.baseWidth;
												imgNode.height = this.baseHeight;
						imgNode.src = this.baseURL;
												return;
					} else {
						var origBaseId = this.baseId;
						this.baseId = this.base2Id;
					}
				}
			}
			var that = this;
			var baseHTMLStr = this.getBase();
			var baseNode = toElement(baseHTMLStr);
			var baseContainerNode = getElById(this.baseContainerId);
			baseContainerNode.appendChild(baseNode);
									addEvent(getElById(this.baseId), "load", function(event){ that.onLoadEventHandler(event); }, false);
						if(this.baseId == this.base2Id) {
				//Reset baseId to original value
				this.baseId = origBaseId;
				//Set style for baseNode
				var baseNode = getElById(this.baseId);
				baseNode.style.position = 'absolute';
				baseNode.style.display = 'none';
				if(bNode.nodeName.toLowerCase() == "iframe") {
					//Layout renderer should pause all the activities like video
					postHtml5Message(bNode, 'pauseInteraction');
					postHtml5Message(bNode, 'deActivateScene');
				}
				//Set style for base2Node
				var base2Node = getElById(this.base2Id);
				base2Node.style.position = 'absolute';
				base2Node.style.display = 'block';
				//Add load event handler
				addEvent(getElById(this.base2Id), "load", function(event){ that.onLoadEventHandler(event); }, false);
			}
					},
        getBase:function(){
			var baseType = this.baseType;
			var str = "";
			switch(baseType){
				case "image":
					str = this.getBaseImage();
					break;
								case "html":
					str = this.getBaseHTML();
					break;
				default:
					break;
			}
			return str;
		},
		getBaseImage:function(){
			var obj = {};
			obj.id = this.baseId;
			var bUrl = this.baseURL,
				ext = bUrl.substr(bUrl.lastIndexOf('.')+1),
				cacheBustBgImg = '';
						if(ext == "gif" && (cacheBustBgImg.length == 0 || parseInt(cacheBustBgImg))){
				bUrl = bUrl + "?" + Math.random();
			}else{
							if(parseInt(cacheBustBgImg)){
					bUrl = bUrl + "?" + Math.random();
				}
			}
			obj.src = bUrl;
			obj.width = this.baseWidth;
			obj.height = this.baseHeight;
			return createImg(obj);
		},
				getBaseHTML:function(){
						var obj = {};
			obj.id = this.baseId;
			obj.src = this.baseURL;
			if(this.baseHasLayout == 1){
					            				var tzOffset = new Date().getTimezoneOffset();
				obj.src += "&localTimeOffset=" + tzOffset;
																obj.src += '&pageURL='+this.encodedPageURL;
							}
							if(this.baseHasLayout == 1){
            		obj.src += '&allowExp=0';
            	}
                        if(this.baseHasLayout == 1){
                                                    if(jvx_60439088a6d33SafeFrameSupported){
                        obj.src += '&isSF=1';
                    }
                            }
						if(this.baseHasLayout == 1 && this.expansionHasLayout == 1){
								obj.src += '&useBaseCVForExp=1';
			}
						obj.width = this.baseWidth;
			obj.height = this.baseHeight;
			return createIframe(obj);
		}, 
		getBaseFallback:function(){
			var fallbackType = this.baseFallbackType;
			var str = "";
			switch(fallbackType){
				case "image":
					str = this.getBaseFallbackImage();
					break;
				case "widget":
					str = this.getBaseFallbackWidget();
					break;
				case "swiffy":
				case "html5":
					str = this.getBaseFallbackHTML();
					break;
				default:
					break;
			}
			return str;
		},
		getBaseFallbackImage:function(){
						var obj = {};
			obj.id = this.baseId;
			obj.src = this.baseFallbackURL;
			obj.width = this.baseWidth;
			obj.height = this.baseHeight;
			return createImg(obj);
		},
		getBaseFallbackWidget:function(){
			var obj = {};
			obj.id = this.baseId;
			obj.src = this.baseFallbackWidgetSrc;
			obj.width = this.baseWidth;
			obj.height = this.baseHeight;
			return createFIF(obj);
		},
		getBaseFallbackHTML:function(){
			var obj = {};
			obj.id = this.baseId;
			obj.src = this.baseFallbackURL;
			obj.width = this.baseWidth;
			obj.height = this.baseHeight;
			return createIframe(obj);
		}, 
		getBaseClose:function(){
			var obj = {};
			obj.id = this.baseCloseId;
			obj.src = '';
			obj.width = '';
			obj.height = '';
			return createImg(obj);
		},
						getExpansionRef:function(){
			var eNode = getElById(this.expansionId);
            var e2Node = getElById(this.expansion2Id);
            if(!eNode) return null;
            var eIframeNode = (eNode.nodeName.toLowerCase() == "iframe") ? eNode : e2Node;
            return eIframeNode;
		},
		fnCallback:function(evt){
			var ref = jvx_60439088a6d33,
				pName = '', targetId = '', key = '';
			if(evt){
				pName = evt.propertyName,
				targetId = evt.target.id,
				key = targetId;	
			}
			if(targetId == ref.loaderId)
				return;
		/*	var addPNameToKey = function(pName){
				if(pName == 'width'){
					key += evt.target.clientWidth;	
				}else if(pName == 'height'){
					key += evt.target.clientHeight;
				}else if(pName == 'top'){
					key += evt.target.clientTop;
				}else if(pName == 'left'){
					key += evt.target.clientLeft;
				}
				return key;
			};	
		*/
			var executeCallBack = function(transitionEvt){
								if(ref != 'undefined' && ref != null){
					var el = ref.getExpansionRef(),
						expEl = getElById(ref.expansionContainerId);
					if(ref.expansionOpen){
						
																			
																		var clsEl = getElById(ref.closeExpansionId);
						if(clsEl){
														clsEl.style.display = 'block';
						}	
																		if(ref.expansionHasLayout == 1 && ref.postOpenExpCompMsg){
														if(transitionEvt){
								postHtml5Message(el,'openExpansionComplete');
								postHtml5Message(el,'activateScene');
							}else{
															}
							ref.postOpenExpCompMsg = false;
						}
					}else{
						if(ref.openExpAgain) ref.openExpAgain = false; 
												
												if(jvx_60439088a6d33SafeFrameSupported && transitionEvt){
							try{
								$sf.ext.collapse();
															}catch(e){}
						}
												
												var clsEl = getElById(ref.closeExpansionId);
						if(clsEl)
							clsEl.style.display = 'none';
												if(ref.expansionHasLayout == 1){
							if(transitionEvt){
								postHtml5Message(el,'closeExpansionComplete');
							}else{
															}
													}
						
												
						/* Removing Styles from adUnitContainer which is set during openExpansion and adding default styles for Billboard */
												/* End */
						
						/* Removing Styles from document.body which is set during openExpansion for Sidekick */
												/* End */

						ref.expansionHasOpened = false;
						ref.postOpenExpCompMsg = true;
					}
				}
			};
			if(!isEmpty(ref.storeTransitionEndEvt)){
				if(!ref.storeTransitionEndEvt.hasOwnProperty(key)){		// If KEY not present in the object, add the New Key to the object and 
					ref.storeTransitionEndEvt[key] = targetId;			// execute callback
					if(targetId != ref.closeExpansionId){
						executeCallBack(evt);
					}	
				}else{
				//	log("already exist");
				}
			}else{
				ref.storeTransitionEndEvt[key] = targetId;
				if(targetId != ref.closeExpansionId){
					executeCallBack(evt);
				}	
				setTimeout(function(){ref.storeTransitionEndEvt = {};},200);
			}
		},
										applyInterceptorStyle:function(iNode,pNode){
			iNode.style.position = "absolute";
			iNode.style.cursor = "pointer"; // In iOS, event delegation don't work for div "clicks" unless this is set.
			iNode.style.top = "0px";
			iNode.style.left = "0px";
			pNode.appendChild(iNode);
		},
		renderInterceptor:function(type){
			var iNode = '', pNode = '';
			if(type == 'base'){
				iNode = createDivNode(this.baseInterceptorId); //interceptor node
				pNode = getElById(this.baseContainerId);
				iNode.style.width = this.baseWidth + "px";
				iNode.style.height = this.baseHeight + "px";
											} else if(type == 'expansion'){
				iNode = createDivNode(this.expInterceptorId); //interceptor node
				pNode = getElById(this.expansionContainerId);
				iNode.style.width = this.expansionWidth + "px";
				iNode.style.height = this.expansionHeight + "px";
			}
			this.applyInterceptorStyle(iNode,pNode);
		},
								setAdUnitStyle:function(obj){
			if(this.insertExpansionTo == "adUnitContainer") {
				var transitionPos = "",
				mainContStyle = {};
								addStyles(getElById(this.adUnitContainerId), mainContStyle);		// Setting CSS styles to #adUnitContainer 
			}
		},
								
				
		getIBusterFrameInfo:function(){
			if(typeof(jivoxIBusterAdObject) != "undefined"){
				var hostIframes = document.body.getElementsByTagName("iframe"),
					iFramesLen = (hostIframes) ? hostIframes.length : 0;
				for(var i=0; i < iFramesLen; i++){
					if(hostIframes[i].contentWindow == jivoxIBusterAdObject["jvx_60439088a6d33"].foreignWindow){
						cords = getBox(hostIframes[i]);
						return [cords, hostIframes[i]];
					//	this.iBusterFrameCords = cords;
					//	this.iBusterFrame = hostIframes[i];
					}
				}
			}
		},
				getAdUnitBox: function(){
						var box = getOffset(getElById(this.adUnitContainerId));
						return box;
		},
		animate: function(obj){
			var styles = {},
				expEl = getElById(this.expansionContainerId),
				expLeft = parseInt(expEl.style.left),
				expTop = parseInt(expEl.style.top),
				startTimeOut = 80, endTimeOut = 80,
				jsAnimSpeed = obj.animationSpeed*1000;
				
			var adUnitBox = this.getAdUnitBox();
			obj.browserPrefix = getBrowserPrefix(this.browserName);
			obj.expWidth = parseInt(this.expansionWidth);
			obj.expHeight = parseInt(this.expansionHeight);
			obj.bWidth = parseInt(this.baseWidth);
			obj.bHeight = parseInt(this.baseHeight);
			obj.alignToVP = this.alignToVP;
			
			var that = this;
			var openAnimSettings = function(styleObj){
				var returnVal = null;
				if(!that.preStyleExpansion){
					if(that.expAnimDir != "SlideTop"){
						if(styleObj['left'] != "")
							returnVal = parseInt(styleObj['left']) -  obj.expWidth
					}	
				} else {
					that.preStyleExpansion = false;
					if(that.expAnimDir != "SlideTop"){
						returnVal = expLeft -  obj.expWidth;
					} else {
												returnVal = parseInt(adUnitBox.top) - (parseInt(that.expansionHeight) - parseInt(that.baseHeight));
											}
				}
				return returnVal;
			};
				
						
						
			obj.preStyleExpansion = this.preStyleExpansion;
			obj.insertExpansionTo = this.insertExpansionTo;
			obj.expContainerId = this.expansionContainerId;
			
						//adding close button to Expansion
			var closeDiv = getElById(this.closeExpansionId);
			if(!closeDiv) {
				var dispType = "none", clsLeft = "", clsTop = "";
																		var clsStyles = {'display' : dispType,
									 'top'	   : clsTop + 'px',
									 'left'    : clsLeft +'px',
									 									};	
					closeDiv = addDivComponent(expEl, this.closeExpansionId, 'jvx_boxclose', '&times;', clsStyles);
							} else {
				closeDiv.style.display = 'block';
			}
						
											styles = createStyleObject(obj);
				if(this.vAlignToVP && !this.preStyleExpansion){
					if(obj.expansionOpen){
						var vpTop = setVAlignTop(styles);
						styles['top'] = vpTop + 'px';
					}else{
						styles['top'] = expTop + "px";
					}
				}
									if(!obj.expansionOpen && (obj.animationDirection == "SlideInDiagonalRight"
						|| obj.animationDirection == "SlideInRight")){
						var clsExpLeft = expLeft +  parseInt(that.expansionWidth);
						styles['left'] = clsExpLeft + "px";
					}
					addStyles(expEl, styles);
								
				if(obj.expansionOpen){
					if(obj.animationDirection == "DiagonalTopRight" || obj.animationDirection == "SlideInDiagonalRight"
						|| obj.animationDirection == "SlideLeft" || obj.animationDirection == "SlideInRight"
						|| obj.animationDirection == "SlideBottom" || obj.animationDirection == "SlideInTop"){
						
						var newLeft = openAnimSettings(styles);
					}
										var that = this;
					setTimeout(function() {
						expEl.style.width = obj.expWidth + "px";
						expEl.style.height = obj.expHeight + "px";
						if(!that.alignToVP || (that.alignToVP && (obj.animationDirection != "SlideBottom" &&
																obj.animationDirection != "SlideInTop"))){
							
							if(newLeft != "undefined") expEl.style.left = newLeft + "px";
						}
					},startTimeOut);
									} else {
									}
						// COM: transition end evt is not triggered when animSpeed is 0
					},
		
	/* Expansion code starts */ 
        renderExpansionBg:function(){
			var str = "";
            var expansionContainerEl = getElById(this.expansionContainerId);
            var expansionBgElement = null;
			switch(this.expansionBgType){
				case "image":
					str = this.getExpansionBgImage();
					break;
				default:
					break;
			}
            expansionBgEl = toElement(str);
            expansionContainerEl.appendChild(expansionBgEl);
        },
        getExpansionBgImage:function(){
			var obj = {};
			obj.id = this.expansionBgId;
			obj.src = this.expansionBgURL;
			obj.width = this.expansionWidth;
			obj.height = this.expansionHeight;
			return createImg(obj);
        },
				// this function decides whether to call intermediate/actual layout file incase of loading the expansion
		getExpansionURL:function(url){
			var expansionURL = '';
			if(this.baseHasLayout == 1 && this.expansionHasLayout == 1 && url.indexOf("layout_renderer.php") > 0){
				url += "&useBaseCVForExp=1";
				expansionURL = url.replace("layout_renderer.php", this.expIntermediateFileName);
			}else{
				expansionURL = url;
			}
			return expansionURL;
		},
				renderExpansion:function(mobileVP){
			var eNode = getElById(this.expansionId);
			if(eNode != null) {
				if(mobileVP) {
					var winDim = getBrowserWindowProps();
					//Re-style expansion container
					var eContainerNode = getElById(this.expansionContainerId);
					if(eContainerNode != null) {
						//Reset width and height for expansion container
																				eContainerNode.style.width = winDim[0]+'px';
							eContainerNode.style.height = winDim[1]+'px';
														
					}
					
					//Re-render expansion node in expansionType hybrid (!'C' and !'I')
					var e2Node = getElById(this.expansion2Id);
					var eIframeNode = (eNode.nodeName.toLowerCase() == "iframe") ? eNode : e2Node;
					var eImgNode = (eNode.nodeName.toLowerCase() == "img") ? eNode : e2Node;

					if(this.expansionHasLayout == 1 && eIframeNode != null) {
						eIframeNode.style.display = 'block';
						if(eImgNode != null) {
							eImgNode.style.display = 'none';
						}
						eIframeNode.width = this.expansionWidth;
						eIframeNode.height = this.expansionHeight;
												//Reposition expansion div
//						var mt = (winDim[1] - this.expansionHeight)/2 + 'px',
//							ml = (winDim[0] - this.expansionWidth)/2 + 'px';
//					//	eIframeNode.style.margin = mt + ' 0 0 ' + ml;
						//Post a message to layout renderer
						
						/*Smooth responsive and stretch variables*/
													postHtml5Message(eIframeNode, 'reRenderLayout');
												if(eIframeNode.src == 'about:blank'){
							var eNodeSrc = this.expansionURL;
														// do the same in mobile case also
							var expURL = this.getExpansionURL(eNodeSrc);
							if(expURL != eNodeSrc){ eNodeSrc = expURL; }
														eIframeNode.src = eNodeSrc;
						}
						return;
					} else if(this.expansionHasLayout != 1 && eImgNode != null) {
						eImgNode.style.display = 'block';
						if(eIframeNode != null) {
							eIframeNode.style.display = 'none';
							//Layout renderer should pause all the activities like video
							postHtml5Message(eIframeNode, 'pauseInteraction');
							postHtml5Message(eIframeNode, 'deActivateScene');
						}
						eImgNode.width = this.expansionWidth;
						eImgNode.height = this.expansionHeight;
						//Reposition expansion div
						//Center align expansion node if expansion is an image no layout,
						//If expansion has layout then layout_renderer takes care of alignment
						var mt = (winDim[1] - this.expansionHeight)/2 + 'px',
							ml = (winDim[0] - this.expansionWidth)/2 + 'px';
						eImgNode.style.margin = mt + ' 0 0 ' + ml;
						//Process image based expansion 
						eImgNode.src = this.expansionURL;
						return;
					} else {
						var origExpansionId = this.expansionId;
						this.expansionId = this.expansion2Id;
					}
				} else {
									return;
				}
			}
			var expansionType = this.expansionType;
			var that = this;
			var str = "";
			switch(expansionType){
				case "image":
					str = this.getExpansionImage();
					break;
								case "html":
					str = this.getExpansionHTML();
					break;
				default:
					break;
			}
			if(!str) return false;
			var expansionContainerNode = getElById(this.expansionContainerId);
            var expansionNode = toElement(str);
            expansionContainerNode.appendChild(expansionNode);
						if(expansionNode)
				expansionNode.style.cursor = "pointer";
						addEvent(getElById(this.expansionId), "load", function(event){ that.onLoadEventHandler(event); }, false);
			
						if(this.expansionId == this.expansion2Id) {
				//Reset expansionId to original value
				this.expansionId = origExpansionId;
				//Set style for eNode
				var eNode = getElById(this.expansionId);
				//eNode.style.position = 'absolute';
				eNode.style.display = 'none';
				if(eNode.nodeName.toLowerCase() == "iframe") {
					//Layout renderer should pause all the activities like video
					postHtml5Message(eNode, 'pauseInteraction');
					postHtml5Message(eNode, 'deActivateScene');
				}
				//Set style for base2Node
				var e2Node = getElById(this.expansion2Id);
				//e2Node.style.position = 'absolute';
				e2Node.style.display = 'block';
				//Reposition expansion div
//				var mt = (winDim[1] - this.expansionHeight)/2 + 'px',
//					ml = (winDim[0] - this.expansionWidth)/2 + 'px';
//				e2Node.style.margin = mt + ' 0 0 ' + ml;
				//Add load event handler
				addEvent(e2Node, "load", function(event){ that.onLoadEventHandler(event); }, false);
			}
						//Center align expansion node if expansion is an image no layout,
			//If expansion has layout then layout_renderer takes care of alignment
			if(mobileVP && expansionType == "image") {
				var winDim = getBrowserWindowProps();
				var eNode = getElById(this.expansionId);
				var mt = (winDim[1] - this.expansionHeight)/2 + 'px',
					ml = (winDim[0] - this.expansionWidth)/2 + 'px';
				eNode.style.margin = mt + ' 0 0 ' + ml;
			}
		},
		getExpansionImage:function(){
			var obj = {};
			obj.id = this.expansionId;
			obj.src = this.expansionURL;
			obj.width = this.expansionWidth;
			obj.height = this.expansionHeight;
			return createImg(obj);
		},
				getExpansionHTML:function(){
			var obj = {};
			obj.id = this.expansionId;
			obj.src = this.expansionURL;
			if(this.userInitAction && parseInt(this.expansionHasLayout)){
				// add this param so that expansion layout knows it got opened manualy and not an auto-expansion
				obj.src += "&userInitAction=1";				
			}
			if(this.expansionHasLayout == 1){
								                var tzOffset = new Date().getTimezoneOffset();
				obj.src += "&localTimeOffset=" + tzOffset;
								                    if(jvx_60439088a6d33SafeFrameSupported){
                        obj.src += '&isSF=1';
                    }
                																obj.src += '&pageURL='+this.encodedPageURL;
							}
			obj.width = this.expansionWidth;
			obj.height = this.expansionHeight;
						
						obj.styles = {'max-width':'none !important'};
			
						var expURL = this.getExpansionURL(obj.src);
			if(expURL != obj.src){ obj.src = expURL; }
						return createIframe(obj);
		}, 
		getExpansionFallback:function(){
			var fallbackType = this.expansionFallbackType;
			var str = "";
			switch(fallbackType){
				case "image":
					str = this.getExpansionFallbackImage();
					break;
				case "widget":
					str = this.getExpansionFallbackWidget();
					break;
				case "swiffy":
				case "html5":
					str = this.getExpansionFallbackHTML();
					break;
				default:
					break;
			}
			return str;
		},
		getExpansionFallbackImage:function(){
			var obj = {};
			obj.id = this.expansionId;
			obj.src = this.expansionFallbackURL;
			obj.width = this.expansionWidth;
			obj.height = this.expansionHeight;
			return createImg(obj);
		},
		getExpansionFallbackWidget:function(){
			var obj = {};
			obj.id = this.expansionId;
			obj.src = this.expansionFallbackWidgetSrc;
			obj.width = this.expansionWidth;
			obj.height = this.expansionHeight;
			return createFIF(obj);
		},
		getExpansionFallbackHTML:function(){
			var obj = {};
			obj.id = this.expansionId;
			obj.src = this.expansionFallbackURL;
			obj.width = this.expansionWidth;
			obj.height = this.expansionHeight;
			return createIframe(obj);
		},
		
		openWindow:function(url){
							if(NonMraidTagInMraidEnv){
					mraid.open(url);
				} else {
					window.open(url);
				}
					},
		openClickThrough:function(){
							this.openWindow('https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjss2pjPLgST5rRTbhd94jsYYmd3TyNEj9X95zi95VrKdYw1vEbW8dcGL8J6aa0xmlcNuPCYSzNs_W2jFGUqxcMJ2qUtLh4sqiRtlB-vwOoQ4JCoIfpt-oQfVbqFx9g&sig=Cg0ArKJSzNdNe4xT8XqnEAE&urlfix=1&adurl=http://insight.adsrvr.org/track/clk%3Fimp%3D7f30621b-e1c0-43f3-b1b4-7687e21a6e25%26ag%3Ds3d6sjw%26sfe%3D127b106d%26sig%3Dg59VW2W_fhbgi3vtJZtPSnj4Z3Gjrr_oiXNnobcUqAE.%26crid%3Dweednxcz%26cf%3D2016808%26fq%3D0%26td_s%3Dwww.w3schools.com%26rcats%3Djba%26mcat%3Dgc_dwasg_pr_finance_account%26mste%3D%26mfld%3D4%26mssi%3DNone%26mfsi%3Ddoicndspgk%26sv%3Dfederatedmedia%26uhow%3D160%26agsa%3D%26wp%3D2.457%26rgco%3DSouth%2520Africa%26rgre%3DWestern%2520Cape%26rgme%3D%26rgci%3DCape%2520Town%26rgz%3D7441%26dt%3DPC%26osf%3DLinux%26os%3DOther%26br%3DFirefox%26svpid%3D235520%26rlangs%3Den%26mlang%3D%26did%3D%26rcxt%3DOther%26tmpc%3D%26vrtd%3D%26osi%3D%26osv%3D%26daid%3D%26dnr%3D0%26vpb%3D%26c%3DOAFQAQ..%26dur%3DChoKB2VrbHJrNjMiDwjBjbcBEgh0dGRhYnNlZwowCgxjaGFyZ2UtYWxsLTEiIAj___________8BEhN0dGRfZGF0YV9leGNsdXNpb25zCjYKHWNoYXJnZS1hbGxJbnRlZ3JhbEJyYW5kU2FmZXR5IhUI-f__________ARIIaW50ZWdyYWwKNgodY2hhcmdlLWFsbEludGVncmFsVmlld2FiaWxpdHkiFQj4__________8BEghpbnRlZ3JhbAo9CiNjaGFyZ2UtYWxsR3JhcGVzaG90UHJlZGljdHNDYXRlZ29yeSIWCOj__________wESCWdyYXBlc2hvdApHCidjaGFyZ2UtYWxsSWFzRGlzcGxheVZpZXdhYmlsaXR5VHJhY2tpbmciHAim__________8BEg1pYXMtcmVwb3J0aW5nKgA.%26durs%3DvssV_4%26crrelr%3D%26npt%3D%26svscid%3D563928%26mdl%3DFirefox%2520-%2520Linux%26ipl%3D563928%26fpa%3D819%26pcm%3D3%26ict%3DUnknown%26said%3Dfa1627df-536f-4eb1-b51d-3a4b5ad50b85%26auct%3D1%26us_privacy%3D1---%26r%3Dhttps%3A%2F%2Fquickbooks.intuit.com%2Fin%2F');
						
												// raise Macro flag if cMacro is not replaced
										
				if(!this.raiseCMacroFlag){
					this.recordEvent(1);
				}else{
					var eventRecordParams = "es_clkMac_1";
					this.recordEvent(1, eventRecordParams);
				}
									if(!adInVPForOneSec){
												this.recordEvent(73);
												adInVPForOneSec = true;
						if (timerRunning) {
							window.clearTimeout(timeoutHandle);
							timerRunning = false;
						}
					}
													},
				openExpansion:function(autoExpand, skipOpenEvent){
			
						
						if(!jvx_60439088a6d33CanBustFromFrame || jvx_60439088a6d33InNestedFrame){
				return;
			}
									
						
			if(!this.expansionHasOpened){
																				if(jvx_60439088a6d33SafeFrameSupported)
					renderAdInsideSafeFrame(this.expAnimDir);
												this.expansionOpen = true;
								this.userInitAction = autoExpand ? false : true;
				if(!this.openExpAgain){
															if(!autoExpand && !skipOpenEvent){
						this.recordEvent(37);
					}
														}
				var obj = {};
				obj.baseBox = this.getAdUnitBox();
							//	obj.baseBox = getOffset(getElById(this.adUnitContainerId));
													obj.animationDirection = this.expAnimDir;
				obj.animationSpeed = this.expAnimSpeed;
				obj.expansionOpen = this.expansionOpen;
				
				if(this.behaviourId != "" || this.behaviourId != "undefined")
					obj.transitionType = parseInt(this.behaviourId);						// hard code the value for testing
								
				var expRendered = this.renderExpansion();
				if(expRendered != false){
					if(!this.expInterceptorDomRef){
												var userHandlesExpClick = "";
						var eFlashClick = "";
						if(this.expansionType == "flash"){
							if(!hasFlashPlugin){
								eFlashClick = "";
							}else{
								eFlashClick = "";
							}
							if(eFlashClick){
								eFlashClick = parseInt(eFlashClick);
							}
						}
												if((userHandlesExpClick && this.expansionType == 'html') 
							|| (this.expansionType == 'flash' && (!eFlashClick && eFlashClick !== ""))){
							
							this.renderInterceptor('expansion');
							if(getElById(this.expInterceptorId)){
								this.expInterceptorDomRef = getElById(this.expInterceptorId);
							}
						}
											}else{
						this.expInterceptorDomRef.style.display = 'block';
					}
					this.expansionHasOpened = true;
					if(this.expansionHasLayout == 1) {
						postHtml5Message(this.getExpansionRef(),'openExpansion');
					}
					
										
										
					if(jvx_60439088a6d33SafeFrameSupported){						
												this.animate(obj);
											}else{
						this.animate(obj);
					}
				}
							}	
		},
		closeExpansion:function(autoClose, skipCloseEvent){	// Only animation applied to hide, expUnit is not deleted
			var that = this;
			if(this.expansionHasOpened){
																												if(!autoClose && !skipCloseEvent){
					this.recordEvent(47);
				}
								this.expansionOpen = false;
								if(!autoClose){
					if(this.autoExpandTimerRef != null){
						clearTimeout(that.autoExpandTimerRef);
					}
				}
				if(this.expansionHasLayout == 1) {
					postHtml5Message(this.getExpansionRef(),'closeExpansion');
				}

				var obj = {};
				obj.transitionType = parseInt(this.behaviourId);			// hard code the value for testing
								obj.animationDirection = this.expAnimDir;
								if(!this.clsExpAnimSpeed && this.clsExpAnimSpeed !== 0){
					obj.animationSpeed = this.expAnimSpeed;
				} else {
					// when close exp anim speed value is not ""
					obj.animationSpeed = "";
				}
				obj.baseBox = this.getAdUnitBox();
							//	obj.baseBox = getOffset(getElById(this.adUnitContainerId));
													obj.expansionOpen = this.expansionOpen;
				
								if(this.expInterceptorDomRef){		// hide expansion interceptor if exists. 
					this.expInterceptorDomRef.style.display = 'none';
				}
								this.animate(obj);
				
							}	
		},
		loadExpansion:function(){

		},
		/* Expansion code ends */

		onBaseMouseOver:function(){
								}, 
		onBaseMouseOut:function(){
					},
		onAdUnitMouseOut:function(){
			var that = this;
									clearTimeout(this.UIRTimer);
			if(!this.DwellRecorded){
            	this.recordDwellEvent(49, this.DwellElapsedTime);
            }
								},
		recordEvent:function(eventId,addnlParams){
							var rand = Math.random();
				var imgEl = document.createElement("img");
                var tempURL = "";
                var eventReportingURL = "https://evs.jivox.com/trk" + "/" + eventId + "/" + "143019/05f91e886b6e15/18/jvxSId_1615040648.8846";
                eventReportingURL += "/es_pId_LV68Gp";
                tempURL += "";
                                tempURL += this.apParamsInEventFormat ? this.apParamsInEventFormat : "";
                                tempURL = addnlParams ? (tempURL + "/" + addnlParams) : tempURL;
				tempURL = tempURL + "/jvxRandom=" + rand;
				//eventReportingURL = (eventId == 1) ? (eventReportingURL + ";https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjss2pjPLgST5rRTbhd94jsYYmd3TyNEj9X95zi95VrKdYw1vEbW8dcGL8J6aa0xmlcNuPCYSzNs_W2jFGUqxcMJ2qUtLh4sqiRtlB-vwOoQ4JCoIfpt-oQfVbqFx9g&sig=Cg0ArKJSzNdNe4xT8XqnEAE&urlfix=1&adurl=http://insight.adsrvr.org/track/clk%3Fimp%3D7f30621b-e1c0-43f3-b1b4-7687e21a6e25%26ag%3Ds3d6sjw%26sfe%3D127b106d%26sig%3Dg59VW2W_fhbgi3vtJZtPSnj4Z3Gjrr_oiXNnobcUqAE.%26crid%3Dweednxcz%26cf%3D2016808%26fq%3D0%26td_s%3Dwww.w3schools.com%26rcats%3Djba%26mcat%3Dgc_dwasg_pr_finance_account%26mste%3D%26mfld%3D4%26mssi%3DNone%26mfsi%3Ddoicndspgk%26sv%3Dfederatedmedia%26uhow%3D160%26agsa%3D%26wp%3D2.457%26rgco%3DSouth%2520Africa%26rgre%3DWestern%2520Cape%26rgme%3D%26rgci%3DCape%2520Town%26rgz%3D7441%26dt%3DPC%26osf%3DLinux%26os%3DOther%26br%3DFirefox%26svpid%3D235520%26rlangs%3Den%26mlang%3D%26did%3D%26rcxt%3DOther%26tmpc%3D%26vrtd%3D%26osi%3D%26osv%3D%26daid%3D%26dnr%3D0%26vpb%3D%26c%3DOAFQAQ..%26dur%3DChoKB2VrbHJrNjMiDwjBjbcBEgh0dGRhYnNlZwowCgxjaGFyZ2UtYWxsLTEiIAj___________8BEhN0dGRfZGF0YV9leGNsdXNpb25zCjYKHWNoYXJnZS1hbGxJbnRlZ3JhbEJyYW5kU2FmZXR5IhUI-f__________ARIIaW50ZWdyYWwKNgodY2hhcmdlLWFsbEludGVncmFsVmlld2FiaWxpdHkiFQj4__________8BEghpbnRlZ3JhbAo9CiNjaGFyZ2UtYWxsR3JhcGVzaG90UHJlZGljdHNDYXRlZ29yeSIWCOj__________wESCWdyYXBlc2hvdApHCidjaGFyZ2UtYWxsSWFzRGlzcGxheVZpZXdhYmlsaXR5VHJhY2tpbmciHAim__________8BEg1pYXMtcmVwb3J0aW5nKgA.%26durs%3DvssV_4%26crrelr%3D%26npt%3D%26svscid%3D563928%26mdl%3DFirefox%2520-%2520Linux%26ipl%3D563928%26fpa%3D819%26pcm%3D3%26ict%3DUnknown%26said%3Dfa1627df-536f-4eb1-b51d-3a4b5ad50b85%26auct%3D1%26us_privacy%3D1---%26r%3Dhttps%3A%2F%2Fquickbooks.intuit.com%2Fin%2F") : eventReportingURL;
									tempURL += "/es_cgName="+jvx_60439088a6d33.DYReportingKey;
                    if(jvx_60439088a6d33.DYSegmentName != ""){
                        tempURL += "/es_segName="+jvx_60439088a6d33.DYSegmentName;
                    }
								
								
				eventReportingURL += "/es_encParams_"+ btoa(tempURL);;
				imgEl.src = eventReportingURL;
									},
        
				recordUIREvent:function(eventId, elapsedTime){
			if(this.UIRRecorded){
				return;
			}
			this.recordEvent(eventId, elapsedTime);
			this.UIRRecorded = true;
					},
		recordDwellEvent:function(eventId, elapsedTime){
			var that = this;
			if(this.DwellRecorded){
				return;
			}
			clearTimeout(that.DwellTimer);
			if(elapsedTime > 0){
				var eventRecordParams = "es_et=" + elapsedTime;
				this.recordEvent(eventId, eventRecordParams);
			}
			clearInterval(this.DwellElapsedTimer);
			this.DwellElapsedTimer = null;
			this.DwellElapsedTime = 0;
			this.DwellRecorded = true;
			this.DwellTimer = null;
		},
				                						renderAdUnitContainer:function(){
						
						var cNode = createDivNode(this.adUnitContainerId);
			            												document.write('<div id="jvxScrRefNode_60439088a6d33" style="display:none;"></div>');	
				var jvxPNode = '';
				var jvxNode = getElById("jvxScrRefNode_60439088a6d33");
				pNode = (jvxNode)? (jvxPNode = jvxNode.parentNode) : document.body;
				if(jvxPNode) jvxPNode.removeChild(jvxNode);
																cNode.style.position = "relative";
			cNode.style.margin = "0 auto";
			
											cNode.style.width = this.baseWidth + setPixel(this.baseWidth);
				cNode.style.height = this.baseHeight + setPixel(this.baseHeight);
							
																						var auNode = '<div id="'+this.adUnitContainerId+'" style="position:relative;width:'+this.baseWidth+setPixel(this.baseWidth)+';height:'+this.baseHeight+setPixel(this.baseHeight)+';cursor:pointer;"></div>';
															document.write(auNode);
																		/* bgSkinUnit - align adUnit center portion in viewport */
								},
		        getInsertToNode:function(insertTo){
            var pNode = null;
			insertTo = (insertTo == 'adUnitContainer') ? this.adUnitContainerId : insertTo;
			if(insertTo == 'body'){
                pNode = document.body;
            } 
						else {
				pNode = getElById(insertTo); // get the node by id
				if(!pNode){
					pNode = document.querySelector(insertTo);
				}
				if(!pNode){
					if(getElByClass(insertTo))
						pNode = getElByClass(insertTo)[0]; // get the node by class
				}	
            }
            pNode = (pNode == null) ? document.body : pNode;
            return pNode;
        },
				renderBaseContainer:function(){
            				var insertBaseTo = this.insertBaseTo;
				var pNode = this.getInsertToNode(insertBaseTo); //parent node
				var cNode = createDivNode(this.baseContainerId); //child node
				cNode.style.backgroundColor = this.baseBgColor;
				
				/*Smooth responsive and stretch variables*/
								
												prependNode(cNode, pNode);
												if(insertBaseTo == 'adUnitContainer'){
					cNode.style.position = 'relative';
				} else {
					var box = getBox(getElById(this.adUnitContainerId));
					var t = box.top;
					var l = box.left;
					cNode.style.left = l + "px";
					cNode.style.top = t + "px";
					cNode.style.position = 'absolute';
				}
									},
								renderExpansionContainer:function(){
            var insertExpansionTo = this.insertExpansionTo;
            var pNode = this.getInsertToNode(insertExpansionTo); //parent node
            var cNode = createDivNode(this.expansionContainerId); //child node
			if(insertExpansionTo != "adUnitContainer" && (this.expansionType == "image" || this.expansionType == "flash"))
				cNode.style.cursor = "pointer";
			cNode.style.backgroundColor = this.expansionBgColor;
						cNode.style.zIndex = 1999998;
						if(this.insertExpansionAs == "fc"){
				prependNode(cNode, pNode);
			}else{
				pNode.appendChild(cNode);
			}
					},
				getClosestDim:function(unitArr, pWidth, pHeight){
						// COM: Setting winWidth = adSlotWidth, when there are multiple ad units and bpType='as'
							var winDim = getBrowserWindowProps();
				var currentWinWidth = winDim[0],
					currentWinHeight = winDim[1];
						
			var leastDiff = 10000; 
			var leastWidthDiff = 10000; 
			var	leastHeightDiff = 10000;
			var bestFitBannerDim = '';
			var diffArr = new Array();
			var cdwObj,cdhObj = {};
			var chkDiff = false;
			var smallestDiff = -1; 
			var smallestWidth, smallestDim = null;

			for(var auIndex in unitArr){
				var currentObjKey = unitArr[auIndex]['dimension'],
					specifiedWidthAvl = unitArr[auIndex].hasOwnProperty('specifiedWidth');
					
				var assetWidthVal = (specifiedWidthAvl) ? parseInt(unitArr[auIndex]['specifiedWidth']) :
									parseInt(currentObjKey.split('x')[0]);
								var assetWidth = assetWidthVal;
				var assetHeight = parseInt(currentObjKey.split('x')[1]);
								if(assetWidth == currentWinWidth) {
					leastDiff = 0;
					bestFitBannerDim = currentObjKey;
					break;
				} else if(assetWidth < currentWinWidth && (currentWinWidth - assetWidth) < leastDiff) {
					leastDiff = (currentWinWidth - assetWidth);
					bestFitBannerDim = currentObjKey;
				} 
				if(smallestWidth == null || assetWidth < smallestWidth) {
					smallestWidth = assetWidth;
					smallestDim = currentObjKey;
				}
							}
						if(bestFitBannerDim == '' && smallestDim != null) {
				bestFitBannerDim = smallestDim;
			}
			
			
			return bestFitBannerDim;
		},
				setBaseProperties:function(bestFitDim){
						var bestFitBase = {};
			for(var auIndex in this.responsiveBaseUnitArr) {
				bestFitBase = this.responsiveBaseUnitArr[auIndex];
				if(bestFitBase['dimension'] == bestFitDim)
					break;
			}
			if(bestFitBase) {
				this.baseHasLayout = bestFitBase['hasLayout'];
				this.baseBgType = '';
				this.baseBgURL = '';
				this.baseBgColor = '';
				if(this.baseHasLayout == 1) {
					this.baseType = 'html';
					this.baseURL = 'https://as.jivox.com/unit/layout_renderer.php?creativeUnitType=18&bDim=728x90&bUnitId=1800&siteId=05f91e886b6e15&campaignId=143019&es_pId=LV68Gp&isDynamic=1&us_privacy=%24%7BUS_PRIVACY%7D&gdpr=0&gdpr_consent=&jvxVer=2&cMacro=https%3A%2F%2Fadclick.g.doubleclick.net%2Fpcs%2Fclick%3Fxai%3DAKAOjss2pjPLgST5rRTbhd94jsYYmd3TyNEj9X95zi95VrKdYw1vEbW8dcGL8J6aa0xmlcNuPCYSzNs_W2jFGUqxcMJ2qUtLh4sqiRtlB-vwOoQ4JCoIfpt-oQfVbqFx9g%26sig%3DCg0ArKJSzNdNe4xT8XqnEAE%26urlfix%3D1%26adurl%3Dhttp%3A%2F%2Finsight.adsrvr.org%2Ftrack%2Fclk%253Fimp%253D7f30621b-e1c0-43f3-b1b4-7687e21a6e25%2526ag%253Ds3d6sjw%2526sfe%253D127b106d%2526sig%253Dg59VW2W_fhbgi3vtJZtPSnj4Z3Gjrr_oiXNnobcUqAE.%2526crid%253Dweednxcz%2526cf%253D2016808%2526fq%253D0%2526td_s%253Dwww.w3schools.com%2526rcats%253Djba%2526mcat%253Dgc_dwasg_pr_finance_account%2526mste%253D%2526mfld%253D4%2526mssi%253DNone%2526mfsi%253Ddoicndspgk%2526sv%253Dfederatedmedia%2526uhow%253D160%2526agsa%253D%2526wp%253D2.457%2526rgco%253DSouth%252520Africa%2526rgre%253DWestern%252520Cape%2526rgme%253D%2526rgci%253DCape%252520Town%2526rgz%253D7441%2526dt%253DPC%2526osf%253DLinux%2526os%253DOther%2526br%253DFirefox%2526svpid%253D235520%2526rlangs%253Den%2526mlang%253D%2526did%253D%2526rcxt%253DOther%2526tmpc%253D%2526vrtd%253D%2526osi%253D%2526osv%253D%2526daid%253D%2526dnr%253D0%2526vpb%253D%2526c%253DOAFQAQ..%2526dur%253DChoKB2VrbHJrNjMiDwjBjbcBEgh0dGRhYnNlZwowCgxjaGFyZ2UtYWxsLTEiIAj___________8BEhN0dGRfZGF0YV9leGNsdXNpb25zCjYKHWNoYXJnZS1hbGxJbnRlZ3JhbEJyYW5kU2FmZXR5IhUI-f__________ARIIaW50ZWdyYWwKNgodY2hhcmdlLWFsbEludGVncmFsVmlld2FiaWxpdHkiFQj4__________8BEghpbnRlZ3JhbAo9CiNjaGFyZ2UtYWxsR3JhcGVzaG90UHJlZGljdHNDYXRlZ29yeSIWCOj__________wESCWdyYXBlc2hvdApHCidjaGFyZ2UtYWxsSWFzRGlzcGxheVZpZXdhYmlsaXR5VHJhY2tpbmciHAim__________8BEg1pYXMtcmVwb3J0aW5nKgA.%2526durs%253DvssV_4%2526crrelr%253D%2526npt%253D%2526svscid%253D563928%2526mdl%253DFirefox%252520-%252520Linux%2526ipl%253D563928%2526fpa%253D819%2526pcm%253D3%2526ict%253DUnknown%2526said%253Dfa1627df-536f-4eb1-b51d-3a4b5ad50b85%2526auct%253D1%2526us_privacy%253D1---%2526r%253D&r=1250668754&objectName=jvx_60439088a6d33';
											this.baseURL += '&jvxSessionId=1615040648.8846';
										if(bestFitBase['type'] == 'banner') {
						this.baseURL += '&base=1';
					}
															this.baseURL += '&loadLayout=0';
										this.baseBgType = bestFitBase['backgroundType'];
					this.baseBgURL = bestFitBase['url'];
                    this.baseURL += "&creativeResolveBeginTime="+Date.parse(creativeResolveBeginTime);
                    				} else {
					this.baseType = bestFitBase['backgroundType'];
					this.baseURL = bestFitBase['url'];
				}

				if(bestFitBase['backgroundColor'] != null && bestFitBase['backgroundColor'] != '') {
					this.baseBgColor = bestFitBase['backgroundColor'];
				} else {
					this.baseBgColor = '';
				}
				this.baseFallbackType = bestFitBase['fallbackType'];
				this.baseFallbackURL = bestFitBase['fallbackURL'];		
				this.baseFallbackFileName = bestFitBase['fallbackFileName'];

				//Todo: replace special characters, make sure that widget source is syntactically correct
 				this.baseFallbackWidgetSrc = bestFitBase['fallbackWidgetSrc'];
				
								this.baseWidth = bestFitDim.split('x')[0];
								this.baseHeight = bestFitDim.split('x')[1];
                
                                this.origBaseWidth = bestFitDim.split('x')[0];
                this.origBaseHeight = bestFitDim.split('x')[1];
                
				
								
				/*Smooth responsive and stretch variables*/
					
												this.baseDim = bestFitBase['dimension'];
				
							}
		},
		setExpandProperties:function(bestFitDim){
						var bestFitExpand = {};
			for(var auIndex in this.responsiveExpandUnitArr) {
				bestFitExpand = this.responsiveExpandUnitArr[auIndex];
				if(bestFitExpand['dimension'] == bestFitDim)
					break;
			}
			if(bestFitExpand) {
				this.expansionHasLayout = bestFitExpand['hasLayout'];
				this.expansionType = '';
				this.expansionURL = '';
				this.expansionBgType = '';
				this.expansionBgURL = '';
				this.expansionBgColor = '';
				if(this.expansionHasLayout == 1) {
					this.expansionType = 'html';
										var adUnitIdStr = '';
										this.expansionURL = 'https://as.jivox.com/unit/layout_renderer.php?creativeUnitType=18&bDim=728x90&&siteId=05f91e886b6e15&campaignId=143019&es_pId=LV68Gp&isDynamic=1&us_privacy=%24%7BUS_PRIVACY%7D&gdpr=0&gdpr_consent=&jvxVer=2&cMacro=https%3A%2F%2Fadclick.g.doubleclick.net%2Fpcs%2Fclick%3Fxai%3DAKAOjss2pjPLgST5rRTbhd94jsYYmd3TyNEj9X95zi95VrKdYw1vEbW8dcGL8J6aa0xmlcNuPCYSzNs_W2jFGUqxcMJ2qUtLh4sqiRtlB-vwOoQ4JCoIfpt-oQfVbqFx9g%26sig%3DCg0ArKJSzNdNe4xT8XqnEAE%26urlfix%3D1%26adurl%3Dhttp%3A%2F%2Finsight.adsrvr.org%2Ftrack%2Fclk%253Fimp%253D7f30621b-e1c0-43f3-b1b4-7687e21a6e25%2526ag%253Ds3d6sjw%2526sfe%253D127b106d%2526sig%253Dg59VW2W_fhbgi3vtJZtPSnj4Z3Gjrr_oiXNnobcUqAE.%2526crid%253Dweednxcz%2526cf%253D2016808%2526fq%253D0%2526td_s%253Dwww.w3schools.com%2526rcats%253Djba%2526mcat%253Dgc_dwasg_pr_finance_account%2526mste%253D%2526mfld%253D4%2526mssi%253DNone%2526mfsi%253Ddoicndspgk%2526sv%253Dfederatedmedia%2526uhow%253D160%2526agsa%253D%2526wp%253D2.457%2526rgco%253DSouth%252520Africa%2526rgre%253DWestern%252520Cape%2526rgme%253D%2526rgci%253DCape%252520Town%2526rgz%253D7441%2526dt%253DPC%2526osf%253DLinux%2526os%253DOther%2526br%253DFirefox%2526svpid%253D235520%2526rlangs%253Den%2526mlang%253D%2526did%253D%2526rcxt%253DOther%2526tmpc%253D%2526vrtd%253D%2526osi%253D%2526osv%253D%2526daid%253D%2526dnr%253D0%2526vpb%253D%2526c%253DOAFQAQ..%2526dur%253DChoKB2VrbHJrNjMiDwjBjbcBEgh0dGRhYnNlZwowCgxjaGFyZ2UtYWxsLTEiIAj___________8BEhN0dGRfZGF0YV9leGNsdXNpb25zCjYKHWNoYXJnZS1hbGxJbnRlZ3JhbEJyYW5kU2FmZXR5IhUI-f__________ARIIaW50ZWdyYWwKNgodY2hhcmdlLWFsbEludGVncmFsVmlld2FiaWxpdHkiFQj4__________8BEghpbnRlZ3JhbAo9CiNjaGFyZ2UtYWxsR3JhcGVzaG90UHJlZGljdHNDYXRlZ29yeSIWCOj__________wESCWdyYXBlc2hvdApHCidjaGFyZ2UtYWxsSWFzRGlzcGxheVZpZXdhYmlsaXR5VHJhY2tpbmciHAim__________8BEg1pYXMtcmVwb3J0aW5nKgA.%2526durs%253DvssV_4%2526crrelr%253D%2526npt%253D%2526svscid%253D563928%2526mdl%253DFirefox%252520-%252520Linux%2526ipl%253D563928%2526fpa%253D819%2526pcm%253D3%2526ict%253DUnknown%2526said%253Dfa1627df-536f-4eb1-b51d-3a4b5ad50b85%2526auct%253D1%2526us_privacy%253D1---%2526r%253D&r=1250668754&objectName=jvx_60439088a6d33'+adUnitIdStr;
											this.expansionURL += '&jvxSessionId=1615040648.8846';
										this.expansionBgType = bestFitExpand['backgroundType'];
					this.expansionBgURL = bestFitExpand['url'];
                    				} else {
					this.expansionType = bestFitExpand['backgroundType'];
					this.expansionURL = bestFitExpand['url'];
				}
				
				var expURL = this.expansionURL;
				if(this.baseDim == "" && this.expansionHasLayout == 1){
					expURL = (expURL.indexOf("&fireViewabilityEvent=1") != -1) ? expURL : (expURL + "&fireViewabilityEvent=1");
				} else {
					expURL = (expURL.indexOf("&fireViewabilityEvent=0") != -1) ? expURL : (expURL + "&fireViewabilityEvent=0");
				}
								if(this.baseHasLayout == 1 && this.expansionHasLayout == 1){
					expURL = (expURL.indexOf("&fireCL=0") != -1) ? expURL : (expURL + "&fireCL=0");
				}
								
				if(this.baseHasLayout != 1 && this.expansionHasLayout == 1){
                    expURL = (expURL.indexOf("&creativeResolveBeginTime") != -1) ? expURL : (expURL + "&creativeResolveBeginTime="+Date.parse(creativeResolveBeginTime));
                }
				this.expansionURL = expURL;
				this.expansionBgColor = bestFitExpand['backgroundColor'];
				if(this.expansionBgColor == '' || this.expansionBgColor == null) {
					this.expansionBgColor = 'transparent';
				}

				this.expansionFallbackType = bestFitExpand['fallbackType'];
				this.expansionFallbackURL = bestFitExpand['fallbackURL'];
				this.expansionFallbackFileName = bestFitExpand['fallbackFileName'];

				//Todo: replace special characters, make sure that widget source is syntactically correct
				this.expansionFallbackWidgetSrc = bestFitExpand['fallbackWidgetSrc'];
				this.expansionWidth = bestFitDim.split('x')[0];
				this.expansionHeight = bestFitDim.split('x')[1];
								this.expDim = bestFitExpand['dimension'];
			}
		},
		onAdUnitMouseOver:function(e) {
			var that = this;			
						this.DwellRecorded = false;
			if(null == this.DwellElapsedTimer){
				this.DwellElapsedTimer = setInterval(function(){ ++that.DwellElapsedTime; }, 1000);
			}
			
			if(null == this.DwellTimer){
				var dwellTime = parseInt(60000) + 50; //adding 50ms to make sure setTimeOut is triggered after setInterval.
				this.DwellTimer = setTimeout(function(){that.recordDwellEvent(49, that.DwellElapsedTime); },dwellTime);
			}
			
			if(!this.UIRRecorded){
				this.UIRTimer = setTimeout(function(){that.recordUIREvent(48);},500);
			}
								},

		clickHandler:function(eventSrc){
			if(eventSrc){
				var eventSrcId = eventSrc.id;
				if(eventSrc.parentNode != null)
					var parentId = eventSrc.parentNode.id;
				if(eventSrcId == this.baseId || eventSrcId == this.base2Id){
										this.openClickThrough();
									} else if(eventSrcId == this.baseBgId) {
									} else if(eventSrcId == this.baseInterceptorId || eventSrcId == this.base2InterceptorId){
															this.openClickThrough();
									} else if(eventSrcId == this.expansionId){
											this.openClickThrough();
									} else if(eventSrcId == this.expInterceptorId){
											this.openClickThrough();
									} else if(eventSrcId == this.closeExpansionId){
					this.closeExpansion();
				} else if(eventSrcId == this.baseCloseId) {
					this.closeBase();
				} 
											}
		},
		mouseenterHandler:function(event){
			var eventSrc = event.target || event.srcElement;
			var fromEl = event.fromElement || event.relatedTarget;
			var toEl = event.toElement || event.relatedTarget;
			if(eventSrc){
				var eventSrcId = eventSrc.id;
				if(eventSrcId == this.baseContainerId || eventSrcId == this.baseContainerId+'0' || eventSrcId == this.countDownContainerId || eventSrcId == this.expansionContainerId || eventSrcId == this.closeExpansionId){
										var frmElId = (fromEl) ? fromEl.id : "";
					if(frmElId != this.expansionContainerId && frmElId != this.expansionId && frmElId != this.closeExpansionId
					 && frmElId != this.expInterceptorId && frmElId != this.expansionLoaderId){
						
						if(eventSrcId == this.baseContainerId || eventSrcId == this.baseContainerId+'0'){
							this.onBaseMouseOver();
						}
						if(this.expansionOpen){
							if(frmElId != this.baseContainerId && frmElId != this.baseContainerId+'0' && frmElId != this.baseId 
							 && frmElId != this.baseInterceptorId){
																this.onAdUnitMouseOver();
															}
						}else{
														this.onAdUnitMouseOver();
													}
					}
										
										this.allowExpToExpand = false;
									}
			}	
		},
		mouseleaveHandler:function(event){
			var eventSrc = event.target || event.srcElement;
						var fromEl = event.target || event.srcElement;
						var toEl = event.toElement || event.relatedTarget;
			if(eventSrc){
				var eventSrcId = (eventSrc.id) ? eventSrc.id : "";
				if(eventSrcId == this.baseContainerId || eventSrcId == this.baseContainerId+'0' || eventSrcId == this.countDownContainerId || eventSrcId == this.expansionContainerId || eventSrcId == this.closeExpansionId){
				 
					var frmElId = (fromEl) ? fromEl.id : "";
					var toElId = (toEl) ? ((toEl.id) ? toEl.id : "") : "";
										if(eventSrcId == this.baseContainerId || eventSrcId == this.baseContainerId+'0'){
						this.onBaseMouseOut();
					}
										if((frmElId == this.expansionContainerId || frmElId == this.expansionId || frmElId == this.closeExpansionId 
					 || frmElId == this.expInterceptorId || frmElId == this.expansionLoaderId) && (toElId != this.baseContainerId && toElId != this.baseContainerId+'0' && toElId != this.baseId && toElId != this.baseInterceptorId)){
					 
												this.onAdUnitMouseOut();
											}else if((frmElId == this.baseContainerId || frmElId == this.baseContainerId+'0' || frmElId == this.baseId 
					 || frmElId == this.baseInterceptorId) && (toElId != this.expansionContainerId && toElId != this.expansionId && toElId != this.closeExpansionId && toElId != this.expansionLoaderId && toElId != this.expInterceptorId)){
						
												this.onAdUnitMouseOut();
											}
										
										this.allowExpToExpand = true;	// allows expansion to expand - tells whether the mouseout on adUnit happened really. #M-4891.
									}
			}
		},
		visibilityStateHandler:function(){
			if(document.visibilityState == "hidden"){
				// hasHidden = true;
			}else{
							}
		},
		onWindowResize:function(){
						if(this.leaveBehindOnVpOut && !this.isAdInOriginalState){		
			this.leaveBehindTheAd(this.leaveBehindOnVpOut,this.leaveBehindScalePer,this.leaveBehindXVal,this.leaveBehindYVal,'','1',true);
		}
																			        		},
		eventController:function(event){
			var eventSrc = event.target || event.srcElement;
			var eventType = event.type;
			if(eventType == 'click'){
				this.clickHandler(eventSrc);
			} 
						else if(eventType == 'resize'){
				this.onWindowResize();
			} else if(eventType == 'orientationchange'){
				this.onWindowResize();
			} else if(eventType == 'visibilitychange'){
				this.visibilityStateHandler();
			} else if(eventType == 'mouseenter'){
				this.mouseenterHandler(event);
			} else if(eventType == 'mouseleave'){
				this.mouseleaveHandler(event);
			}
					},
		delegateEvents:function(){
			var that = this;
						addEvent(getElById(this.baseContainerId), "mouseenter", that.listenerCallback, false);
			addEvent(getElById(this.baseContainerId), "mouseleave", that.listenerCallback, false);
							
														
			addEvent(document, "click", that.listenerCallback, false);
			addEvent(window, "resize", that.listenerCallback, false);
			addEvent(window, "orientationchange", that.listenerCallback, false);
						var browserName = this.browserName;
			if((browserName == 'Safari') || (browserName == 'iPhone') || (browserName == 'iPod') || (browserName == 'iPad')){
				addEvent(document, "visibilitychange", that.listenerCallback, false);
			}
		},
		listenerCallback:function(event) {
			jvx_60439088a6d33.eventController(event); 
		},
        removeEvents:function(){
			var that = this;
			var elArr = [{"el":window,"eventTypeArr":["resize","orientationchange","load"]},
						 {"el":document,"eventTypeArr":["click","mouseover","mouseout","visibilitychange"]}];
			var elLen = elArr.length;
            for(var i = 0;i < elLen;i++){
            	var eventLen = elArr[i]["eventTypeArr"].length;
				for(var j = 0;j < eventLen;j++){
					removeEvent(elArr[i]["el"],elArr[i]["eventTypeArr"][j],that.listenerCallback, false);
				}
			}
		},
                        onBaseReady:function(){
                                    if(this.baseHasLayout == 1 && this.baseURL){
                this.renderBase();
            }
                                },
                isLayoutURLReady:function(){
			        },
		getElById:function(id){
			return getElById(id);
		},
		createDivNode:function(id){
			return createDivNode(id);
		},
		appendNode:function(parentNode, childNode){
            return parentNode.appendChild(childNode);
		},
		addEvent:function(el, event, fn, capture){
            return addEvent(el, event, fn, capture);
		},
		autoExpand:function(){
                        this.openExpansion(true);
                        var self = this;
            this.autoExpandTimerRef = setTimeout(function(){self.closeExpansion(true);},7 * 1000);
                    },
                        queryStringToJSON:function(url) {
            if(!url || url.indexOf("?") == -1) return false;
            var queryString = url.split("?")[1];
            var pairs = queryString.split('&');        
            var result = {};
            pairs.forEach(function(pair) {
                pair = pair.split('=');
                result[pair[0]] = (pair[1] || '');
            });
                        return JSON.parse(JSON.stringify(result));
        },
                jsonToQueryString:function(obj){
            var str = "";
            for (var key in obj) {
              if (obj.hasOwnProperty(key)) {
                var val = obj[key];
                str += "&" + key + "=" + val;
              }
            }
                        return str.slice(1);
        },
                updateURLWithCJSData : function(qsJson,updateQs,base){
                        qsJson = jvxCopyObject(qsJson,updateQs);
            qsStr = this.jsonToQueryString(qsJson);
            if(base){
                this.baseURL = this.baseURL.split("?")[0] + "?" + qsStr;
            } else {
                this.expansionURL = this.expansionURL.split("?")[0] + "?" + qsStr;
            } 
        },
                jvxCallback: function(updateQs){
            var baseQsJson = this.baseURL ? this.queryStringToJSON(this.baseURL) : "";
            var expQsJson = this.expansionURL ? this.queryStringToJSON(this.expansionURL) : "";
            if(this.baseHasLayout == 1 && this.baseURL && baseQsJson) {
                this.updateURLWithCJSData(baseQsJson,updateQs,1);
            }
            if(this.expansionHasLayout == 1 && this.expansionURL && expQsJson){
                this.updateURLWithCJSData(expQsJson,updateQs,0);
            }
            this.onBaseReady();
        },
                
                        
                		init:function(){
						
						
						this.renderAdUnitContainer(); 
			            			            this.renderBaseContainer();
			
			
											this.renderBase();
                                								
			
			
						
						
												
		/*	
					*/	
								//	console.log("Load exp");
			
			 

			 
			
			
 			this.delegateEvents();
																		
													var visibilityThreshold = this.origBaseWidth * this.origBaseHeight > 242500 ? 0.3 : 0.5;
				if(!validateVal(this.baseHasLayout) || (this.baseDim == "" && !validateVal(this.expansionHasLayout)))
				adViewabilityDetectInit(visibilityThreshold);
					}
	};
	return CreativeUnit;
})();


var jvx_60439088a6d33 = new CreativeUnit("_60439088a6d33");
jvx_60439088a6d33.DYReportingKey = "";
jvx_60439088a6d33.DYSegmentName = "";
	if(NonMraidTagInMraidEnv){
				jvx_60439088a6d33.recordEvent(75);
	}
    jvx_60439088a6d33.init();

(function(jvxObject){
    	var playerParamsMap = jvxObject.playerParamsMap;
    var jvxCallback = function(updateQs,criteoCallback){
                var modifiedApParams = {};
		if(!criteoCallback){
			jvxObject.cJsExecuted = 1;
			jvxObject.asyncTaskList['custom-pre-processing'] = 1;
			jvxObject.asyncCompletedTaskCount++;
		}
        if(updateQs){
                        for (var key in updateQs) {
              if (updateQs.hasOwnProperty(key)) {
                if(key.indexOf("ap_") == 0){
                    modifiedApParams[key] = updateQs[key];
                }
              }
            }
                        jvxObject.jvxCallback(modifiedApParams);
            var apParamsAll = jvxObject.apParamsArr;
                        apParamsAll = jvxCopyObject(apParamsAll,modifiedApParams);
                        for (var key in apParamsAll) {
              if (apParamsAll.hasOwnProperty(key)) {
                jvxObject.apParamsInEventFormat += "/" + key + "_" + apParamsAll[key]; 
              }
            }
        }
    };
	jvxObject.cJsExecuted = 0;
    //pre-processing snippet
window["myDisplayFunction"] = myDisplayFunction;	

function myDisplayFunction(myObj) {

    if(myObj['cookieData:cookieData']['jvxdynsl-isSet'] == "true"){
        
        //Cookie Group1
        if(myObj['cookieData:cookieData']['jvxdynsl_group1'] != "undefined"){
            var CG1 = myObj['cookieData:cookieData']['jvxdynsl_group1'],
                productviewed;
            if(CG1 == "quickbooks_online_simple_start"){
                productviewed = "Simple Start";
            }else if(CG1 == "quickbooks_online_essentials"){
                productviewed = "Essentials";
            }else if(CG1 == "quickbooks_online_plus"){
                productviewed = "Plus";
            }else{
                productviewed = "NA";
            }   
        }
        
        //Cookie Group2
        if(myObj['cookieData:cookieData']['jvxdynsl_group2'] != "undefined"){
            console.log("CG2",myObj['cookieData:cookieData']['jvxdynsl_group2']);
            var CG2 = myObj['cookieData:cookieData']['jvxdynsl_group2'],
                pageviewed;
            
            //Feature Page
            var featurearray = ["my/index","ph/index","sg/index","r/index","terms-of-service","apps","find-a-proadvisor","proadvisor","online-compare","smallbusinesshelp","faq","contact","legal","data-migration","security","privacy","5for25","invoice-template","privacy-policy","enterprise","self-employed","gst","tag","cash-flow-new","features","cloud-accounting-software","r/invoicing","job-costing","reports","inventory-management","job-costingquickbook accountant","accounting-bookkeeping","author","bookkeeping","cashflow","finance-funding","finance","grow-business","inventory-mgmt","latest-posts","small-business-marketing-email","small-business-self-employed","staff-employees","starting-up","technology","tools-templates","accountant-bookkeeper","coronavirus","finance-accounting","grow-your-business","growing-a-business","hr-and-management","marketing-a-business","quickbooks-philippines","quickbooks-uae","starting-a-business","accountants","ecommerce-retail","entrepreneurs","for-accountants","product-updates","qb-singapore-help","search","singapore-tax","small-business-self-employ","tools-template"];
            let featureArr=[];
            for (i=0;i<featurearray.length;i++) {
              if (CG2.indexOf(featurearray[i]) >=0 ) {
                featureArr.push(featurearray[i]);
              }
            }
            
            //Case Study
            var casestudyarray = ["learn-and-support","learn-support-pelling-bolt"];
            let casestudyArr=[];
            for (i=0;i<casestudyarray.length;i++) {
              if (CG2.indexOf(casestudyarray[i]) >=0 ) {
                casestudyArr.push(casestudyarray[i]);
              }
            }
            
            //OA Page
            var OApagearray = ["oa","oa/invoicing","r-quickbooks-invoicing"];
            let OApageArr=[];
            for (i=0;i<OApagearray.length;i++) {
              if (CG2.indexOf(OApagearray[i]) >=0 ) {
                OApageArr.push(OApagearray[i]);
              }
            }
            
            //Trial Non Start
            var TNSarray = ["pricing"];
            let TNSArr=[];
            for (i=0;i<TNSarray.length;i++) {
              if (CG2.indexOf(TNSarray[i]) >=0 ) {
                TNSArr.push(TNSarray[i]);
              }
            }
            
            //Started Trial Not Sub
            var STNSarray = ["signup/trial","sg/buy","signup/buy"];
            let STNSArr=[];
            for (i=0;i<STNSarray.length;i++) {
              if (CG2.indexOf(STNSarray[i]) >=0 ) {
                STNSArr.push(STNSarray[i]);
              }
            }
            
            if(featureArr.length > 0){
                pageviewed = "Feature page";
            }else if(casestudyArr.length > 0){
                pageviewed = "Case Study";
            }else if(OApageArr.length > 0){
                pageviewed = "OA Page";
            }else if(TNSArr.length > 0){
                pageviewed = "Trial non-start";
            }else if(STNSArr.length > 0){
                pageviewed = "Started Trial and not subscribed";
            }else{
                pageviewed = "NA";
            }
            
        }      
        
    } 
    
        var geopid = playerParamsMap.es_pId;
        
        //Geo Set
        //MY Geo
        var MYarray = ["r7Sql3","RHAo6e","6X08Dc","g0lDst","XJAw5h"];
        let MYArr=[];
        for (i=0;i<MYarray.length;i++) {
          if (geopid == MYarray[i]) {
            MYArr.push(MYarray[i]);
          }
        }

        //SG Geo
        var SGarray = ["qs8s1u","cZIEsa","6t6K19","w0Dc79","DTalWT"];
        let SGArr=[];
        for (i=0;i<SGarray.length;i++) {
          if (geopid == SGarray[i]) {
            SGArr.push(SGarray[i]);
          }
        }
       
        //PH Geo
        var PHarray = ["OyH7Rr","YAXhO3","as1Cna","067aTm","8B18n2"];
        let PHArr=[];
        for (i=0;i<PHarray.length;i++) {
          if (geopid == PHarray[i]) {
            PHArr.push(PHarray[i]);
          }
        }
    
        //ZA Geo
        var ZAarray = ["lRA68c","b0SO67","Mr829y","wu0VJ2","F72rvx"];
        let ZAArr=[];
        for (i=0;i<ZAarray.length;i++) {
          if (geopid == ZAarray[i]) {
            ZAArr.push(ZAarray[i]);
          }
        }    
        
        var geolocation;
        if(MYArr.length > 0){
            geolocation = "MY";
        }else if(SGArr.length > 0){
            geolocation = "SG";
        }else if(PHArr.length > 0){
            geolocation = "PH";
        }else if(ZAArr.length > 0){
            geolocation = "ZA";
        }else{
            geolocation = "NA";
        }
    
    
            var DS2;
        if((pageviewed == "Feature page") || (pageviewed == "Case Study")){
            DS2 = pageviewed + "_" + geolocation;
        }else if((pageviewed == "OA Page") || (pageviewed == "Trial non-start")){
            DS2 = pageviewed + "_" + productviewed + "_" + geolocation;
        }else if(pageviewed == "Started Trial and not subscribed"){
            if((myObj['cookieData:cookieData']['jvxdynsl_group3'] != "undefined") && (myObj['cookieData:cookieData']['jvxdynsl_group3'] == "1")){
                DS2 = pageviewed + "_" + productviewed + "_" + "R1" + "_" + geolocation;
            }else if((myObj['cookieData:cookieData']['jvxdynsl_group4'] != "undefined") && (myObj['cookieData:cookieData']['jvxdynsl_group4'] == "1")){
                DS2 = pageviewed + "_" + productviewed + "_" + "R2" + "_" + geolocation;
            }else if((myObj['cookieData:cookieData']['jvxdynsl_group5'] != "undefined") && (myObj['cookieData:cookieData']['jvxdynsl_group5'] == "1")){
                DS2 = pageviewed + "_" + productviewed + "_" + "R3" + "_" + geolocation;
            }else{
                DS2 = pageviewed + "_" + productviewed + "_" + "NA" + "_" + geolocation;
            }            
        }else{
            DS2 = "Default" + "_" + geolocation;
        }
	
	var updateDataSignal = {"ap_DataSignal2" : DS2};
	jvxCallback(updateDataSignal);
}

var s = document.createElement("script");
s.src = "https://traffick.jivox.com/jivox/serverAPIs/resolveDynamicData.php?var=cookieData:cookieData&campaignId=143019&callback=myDisplayFunction";
document.body.appendChild(s);    
    })(jvx_60439088a6d33);

/*! srcdoc-polyfill - v0.1.1 - 2013-03-01
* http://github.com/jugglinmike/srcdoc-polyfill/
* Copyright (c) 2013 Mike Pennisi; Licensed MIT */
(function(t,e){var c,n,o=t.srcDoc,r=!!("srcdoc"in e.createElement("iframe")),i={compliant:function(t,e){e&&t.setAttribute("srcdoc",e)},legacy:function(t,e){var c;t&&t.getAttribute&&(e?t.setAttribute("srcdoc",e):e=t.getAttribute("srcdoc"),e&&(c="javascript: window.frameElement.getAttribute('srcdoc');",t.setAttribute("src",c),t.contentWindow&&(t.contentWindow.location=c)))}},s=t.srcDoc={set:i.compliant,noConflict:function(){return t.srcDoc=o,s}};if(!r)for(s.set=i.legacy,n=e.getElementsByTagName("iframe"),c=n.length;c--;)s.set(n[c])})(this,this.document);

}




/* Jivox � 2021 */
