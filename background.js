let isBlockingEnabled = true;

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log('Request made:', details.url);

    if (isBlockingEnabled && details.url.includes('blockeddomain.com')) {
      console.log('Blocked request to:', details.url);
      return {cancel: true};
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

function toggleBlocking() {
    isBlockingEnabled = !isBlockingEnabled;
}
