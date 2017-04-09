function click(e) {
    chrome.runtime.sendMessage({setTimer : true}, function(response) {
        
    });
    window.close();
}

document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.getElementById("close");

    closeButton.addEventListener("click", click);
});