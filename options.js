const resolutionInput = document.querySelector("#resolution");

const loadOptions = () => {
  chrome.storage.sync.get({
    resolutionOption: "unmodified"
  }, (items) => {
    resolutionInput.value = items.resolutionOption
  })
}

const saveOptions = () => {
  const resolutionOption = resolutionInput.value;

  chrome.storage.sync.set({ resolutionOption });
}

document.addEventListener("DOMContentLoaded", loadOptions);
resolutionInput.addEventListener("change", saveOptions);
