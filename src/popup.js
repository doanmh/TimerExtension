function click(e) {
    chrome.runtime.sendMessage({setTimer : true}, function(response) {
        // window.webkitNotifications.createNotification("../assets/timer.ico", "Attention!", "Your session will be closed in 2 seconds").show();
    });
    window.close();
}

document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.getElementById("close");

    closeButton.addEventListener("click", click);
});