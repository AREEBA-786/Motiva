// Background mein quote fetch karne ka function
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetchQuote") {
    fetch("https://zenquotes.io/api/random")
      .then(response => response.json())
      .then(data => sendResponse({ success: true, data: data }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    
    return true; // Async response ke liye zaroori hai
  }
});