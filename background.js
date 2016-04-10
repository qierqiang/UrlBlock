function getDomainFromUrl(url){
	var host = "null";
	if(typeof url == "undefined" || null == url)
		url = window.location.href;
	var regex = /.*\:\/\/([^\/]*).*/;
	var match = url.match(regex);
	if(typeof match != "undefined" && null != match)
		host = match[1];
	return host;
}

function checkForValidUrl(tabId, changeInfo, tab) {
    //if(tab.window.location.host.toLowerCase()==="")
	
	if(getDomainFromUrl(tab.url).toLowerCase()=="www.cnblogs.com"){
		chrome.pageAction.show(tabId);
        chrome.tabs.update(tabId.id,{url:"about:blank"});
        //chrome.tab.url="about:blank";
	}
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);
