chrome.runtime.getBackgroundPage((backgroundPage) => {
    document.getElementById('controlButton').addEventListener('click', () => {
        backgroundPage.toggleBlocking();
        alert(`Blocking is now ${backgroundPage.isBlockingEnabled ? "enabled" : "disabled"}.`);
    });
  });
  