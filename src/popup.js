function click(e) {
    var closingTabs = document.querySelector('input[name="closingTabs"]:checked').value;
    var chosenTime = document.querySelector('input[name="time"]').value;
    chrome.runtime.sendMessage({setTimer : true, closingTabs : closingTabs, chosenTime : chosenTime}, function(response) {
        
    });
    window.close();
}

document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.getElementById("close");

    closeButton.addEventListener("click", click);
});