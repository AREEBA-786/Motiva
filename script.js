const quoteElement = document.getElementById('quote-text'); // Apni HTML ID check karein
const authorElement = document.getElementById('author-text');

function getNewQuote() {
  quoteElement.innerText = "Loading...";

  document.body.style.backgroundImage = `url('https://picsum.photos/320/250?random=${Math.random()}&blur=2')`;

  // Background script ko message bhejna
  chrome.runtime.sendMessage({ action: "fetchQuote" }, (response) => {
    if (response && response.success) {
      const quoteData = response.data[0];
      quoteElement.innerText = `"${quoteData.q}"`;
      authorElement.innerText = `- ${quoteData.a}`;
    } else {
      quoteElement.innerText = "Error fetching quote. Try again!";
      console.error(response ? response.error : "Unknown error");
    }
  });
}

// Button click par ya load hone par call karein
document.addEventListener('DOMContentLoaded', getNewQuote);


