let textState;

function saveOptions(e) {
  e.preventDefault();
  //console.log(document.getElementsByClassName("colorPicker")[0].value)
  browser.storage.sync.set({
    textfile: document.querySelector("#owo").value,
    color: document.getElementsByClassName("colorPicker")[0].value
  });
}

function restoreOptions() {
  function setCurrentText(result) {
    textState = result.textfile
    document.querySelector("#owo").value = result.textfile || ""
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

function saveAllTabs() {
  function logTabs(tabs) {
    let tabString = "\nBREAKROW\n"
    for (let tab of tabs) {
      console.log(tab)
      if(tab.url !== "about:addons") {
        tabString += tab.title.replace(/ /g, "_").substring(0, 25)
        tabString += " "
        tabString += tab.url
        tabString += "\n"
      }
    }
    let tabState = tabString
    browser.storage.sync.set({
      tabs: tabState
    });
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let querying = browser.tabs.query({});
  querying.then(logTabs, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("body").addEventListener("submit", saveOptions);
document.getElementById("storeTabs").addEventListener("click", saveAllTabs)
document.getElementById("clearTabs").addEventListener("click", function(){browser.storage.sync.set({tabs: ""});})
