chrome.action.onClicked.addListener((tab) => {
  chrome.windows.getCurrent((window) => {
    chrome.windows.update(window.id, { width: 1920, height: 1080+121 });
  });
});
