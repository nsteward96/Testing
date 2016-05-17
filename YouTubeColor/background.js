chrome.runtime.onMessage.addListener(
  function(msg, sender, sendResponse) {
    if(msg.content == "backgroundReroll")
    {
    }
});
console.log("Working background.js!");
