var sessionTabIDs = [];

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    var chosenTime = Number(message.chosenTime)*60*1000;
    if (message.setTimer) {
        if (message.closingTabs == "all") {
            setTimeout(function() {
                closeAllTabsAllWindows();
            }, chosenTime)
        } else if (message.closingTabs == "allCurrentWindow") {
            setTimeout(function() {
                closeAllTabsCurrentWindow();
            }, chosenTime)
        } else {
            chrome.tabs.onCreated.addListener(function(tab) {
                if (!sessionTabIDs.includes(tab.id)) {
                    sessionTabIDs.push(tab.id);
                }
            });
            setTimeout(function() {
                closeRecentTabs();
            }, chosenTime)
        }
    }
})

var closeRecentTabs = function() {
    chrome.tabs.remove(sessionTabIDs);
    sessionTabIDs = [];
}

var closeAllTabsCurrentWindow = function() {
    chrome.tabs.query({currentWindow : true}, function(tabs) {
        for (var i = 0; i < tabs.length; i++) {
            chrome.tabs.remove(tabs[i].id);
        }
    });
}

var closeAllTabsAllWindows = function() {
    chrome.tabs.query({}, function(tabs) {
        for (var i = 0; i < tabs.length; i++) {
            chrome.tabs.remove(tabs[i].id);
        }
    });
}