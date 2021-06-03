function saveOptions(e) {
  e.preventDefault();
  console.log(document.getElementsByClassName("colorPicker")[0].value)
  browser.storage.sync.set({
    textfile: document.querySelector("#owo").value,
    color: document.getElementsByClassName("colorPicker")[0].value
  });
}

function restoreOptions() {
  function setCurrentText(result) {
    document.querySelector("#owo").value = result.textfile || "owo"
  }

  function setColor(result) {
    document.getElementsByClassName("colorPicker")[0].value = result.color || "#000000"
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("textfile");
  getting.then(setCurrentText, onError);
  let gotten = browser.storage.sync.get("color")
  gotten.then(setColor, onError)
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("body").addEventListener("submit", saveOptions);
