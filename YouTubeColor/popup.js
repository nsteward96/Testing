document.addEventListener('DOMContentLoaded', function() {
	var checkPageButton = document.getElementById('btn');
	var allElements = document.querySelectorAll('div');
	checkPageButton.addEventListener('click', function() {
		chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
			if(tabs[0].url == "https://www.youtube.com/")
			{
				chrome.tabs.sendMessage(tabs[0].id, {content: "contentReroll"});
			}
		});
	});
});
