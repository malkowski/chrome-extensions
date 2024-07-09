chrome.action.onClicked.addListener((tab) => {
  chrome.windows.getCurrent((window) => {
    chrome.windows.update(window.id, { width: 1280, height: 720+121 });
  });
});
