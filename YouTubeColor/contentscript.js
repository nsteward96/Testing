var allElements = document.getElementsByTagName("*");

chrome.runtime.onMessage.addListener(
  function(msg, sender, sendResponse) {
    if(msg.content == "contentReroll")
    {
			console.log("content received message");
			for(var i = 0; i < allElements.length; i++)
			{
				if(Math.random() < .25)
				{
					allElements[i].style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
				}
			}
    }
		else {
			console.log("Message content is not contentreroll!");
		}
});
for(var i = 0; i < allElements.length; i++)
{
	if(Math.random() < .25)
	{
		allElements[i].style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
	}
}
