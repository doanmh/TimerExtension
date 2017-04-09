var sessionTabs = [];
var sessionTabIDs = []

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.setTimer) {
        chrome.tabs.onCreated.addListener(function(tab) {
            if (!sessionTabIDs.includes(tab.id)) {
                sessionTabIDs.push(tab.id);
            }
        });
        setTimeout(function() {
            closeTabs();
        }, 10000)
    }
})

var closeTabs = function() {
    chrome.tabs.remove(sessionTabIDs);
    alert(sessionTabIDs.length);
    sessionTabIDs = [];
}

var closeAllTabs = function() {

}