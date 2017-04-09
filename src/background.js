chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.setTimer) {
        // window.webkitNotifications.createNotification("../assets/timer.ico", "Attention!", "Your session will be closed in 2 seconds").show();
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
            setTimeout(function(){chrome.tabs.remove(tabs[0].id);}, 2000);
        });
    }
})