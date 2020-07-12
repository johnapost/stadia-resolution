const set4k = () => {
  Object.defineProperty(window.screen, 'availWidth', {value: 3840});
  Object.defineProperty(window.screen, 'availHeight', {value: 2160});
  Object.defineProperty(window.screen, 'width', {value: 3840});
  Object.defineProperty(window.screen, 'height', {value: 2160});
  localStorage.setItem("video_codec_implementation_by_codec_key", '{"vp9":"ExternalDecoder"}');
}

const set1440p = () => {
  Object.defineProperty(window.screen, 'availWidth', {value: 2560});
  Object.defineProperty(window.screen, 'availHeight', {value: 1440});
  Object.defineProperty(window.screen, 'width', {value: 2560});
  Object.defineProperty(window.screen, 'height', {value: 1440});
  localStorage.setItem("video_codec_implementation_by_codec_key", '{"vp9":"ExternalDecoder"}');
}

window.addEventListener('load', () => {
  chrome.storage.sync.get({
    resolutionOption: "unmodified"
  }, (items) => {
    const { resolutionOption } = items;

    if (resolutionOption === "unmodified") {
      return;
    }

    if (resolutionOption === "1440p") {
      return set1440p();
    }
  
    if (resolutionOption === "4k") {
      return set4k();
    }
  })
});
