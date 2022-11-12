const { ipcRenderer, dialog } = require("@electron/remote");

/**
 * Execute the user's code.
 * Just a quick and dirty eval.  No checks for infinite loops, etc.
 */
function runJS() {
  var code = Blockly.Generator.workspaceToCode("JavaScript");
  try {
    eval(code);
  } catch (e) {
    alert("Program error:\n" + e);
  }
}

/**
 * Backup code blocks to localStorage.
 */
function backup_blocks() {
  if ("localStorage" in window) {
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    window.localStorage.setItem("avr", Blockly.Xml.domToText(xml));
  }
}

/**
 * Restore code blocks from localStorage.
 */
function restore_blocks() {
  if ("localStorage" in window && window.localStorage.avr) {
    var xml = Blockly.Xml.textToDom(window.localStorage.avr);
    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
  }
}

// liolah
function saveAs(code, name, extension) {
  ipcRenderer.send("saveAs", { code, name, extension });
}

/**
 * Save AVR generated code to local file.
 */
// Edit to send the code to mainIPC and save it to location
function saveCode() {
  console.log("save as called");
  let options = {
    title: "Save",
    defaultPath: "Test",
    buttonLabel: "Save as",
    filters: [{ name: "All Files", extensions: ["*"] }],
  };
  dialog.showSaveDialog(options).then((filename) => {
    const { canceled, filePath } = filename;
    if (!canceled) {
      var code = Blockly.AVR.workspaceToCode();
      saveAs(code, filePath, "c");
    }
  });
}

/**
 * Save blocks to local file.
 * better include Blob and FileSaver for browser compatibility
 */
// Edit to send the code to mainIPC and save it to location
function save() {
  console.log("save called");
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var data = Blockly.Xml.domToText(xml);
  let options = {
    title: "Save",
    defaultPath: "Test",
    buttonLabel: "Save as",
    filters: [{ name: "All Files", extensions: ["*"] }],
  };
  dialog.showSaveDialog(options).then((filename) => {
    const { canceled, filePath } = filename;
    if (!canceled) {
      saveAs(data, filePath, "xml");
    }
  });
}

/**
 * Load blocks from local file.
 */
function load(event) {
  var files = event.target.files;
  // Only allow uploading one file.
  if (files.length != 1) {
    return;
  }

  // FileReader
  var reader = new FileReader();
  reader.onloadend = function (event) {
    var target = event.target;
    // 2 == FileReader.DONE
    if (target.readyState == 2) {
      try {
        var xml = Blockly.Xml.textToDom(target.result);
      } catch (e) {
        alert("Error parsing XML:\n" + e);
        return;
      }
      var count = Blockly.mainWorkspace.getAllBlocks().length;
      if (count && confirm('Replace existing blocks?\n"Cancel" will merge.')) {
        Blockly.mainWorkspace.clear();
      }
      Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
    }
    // Reset value of input after loading because Chrome will not fire
    // a 'change' event if the same file is loaded again.
    document.getElementById("load").value = "";
  };
  reader.readAsText(files[0]);
}

/**
 * Discard all blocks from the workspace.
 */
function discard() {
  var count = Blockly.mainWorkspace.getAllBlocks().length;
  if (count < 2 || window.confirm("Delete all " + count + " blocks?")) {
    Blockly.mainWorkspace.clear();
    renderContent();
  }
}

/*
 * auto save and restore blocks
 */
function auto_save_and_restore_blocks() {
  // Restore saved blocks in a separate thread so that subsequent
  // initialization is not affected from a failed load.
  window.setTimeout(restore_blocks, 0);
  // Hook a save function onto unload.
  bindEvent(window, "unload", backup_blocks);
  tabClick(selected);

  // Init load event.
  var loadInput = document.getElementById("load");
  loadInput.addEventListener("change", load, false);
  document.getElementById("fakeload").onclick = function () {
    loadInput.click();
  };
}

/**
 * Bind an event to a function call.
 * @param {!Element} element Element upon which to listen.
 * @param {string} name Event name to listen to (e.g. 'mousedown').
 * @param {!Function} func Function to call when event is triggered.
 *     W3 browsers will call the function with the event object as a parameter,
 *     MSIE will not.
 */
function bindEvent(element, name, func) {
  if (element.addEventListener) {
    // W3C
    element.addEventListener(name, func, false);
  } else if (element.attachEvent) {
    // IE
    element.attachEvent("on" + name, func);
  }
}

//loading examples via ajax
var ajax;
function createAJAX() {
  if (window.ActiveXObject) {
    //IE
    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e2) {
        return null;
      }
    }
  } else if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else {
    return null;
  }
}

function onSuccess() {
  if (ajax.readyState == 4) {
    if (ajax.status == 200) {
      try {
        var xml = Blockly.Xml.textToDom(ajax.responseText);
      } catch (e) {
        alert("Error parsing XML:\n" + e);
        return;
      }
      var count = Blockly.mainWorkspace.getAllBlocks().length;
      if (count && confirm('Replace existing blocks?\n"Cancel" will merge.')) {
        Blockly.mainWorkspace.clear();
      }
      Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
    } else {
      alert("Server error");
    }
  }
}

function load_by_url(uri) {
  ajax = createAJAX();
  if (!ajax) {
    alert("Not compatible with XMLHttpRequest");
    return 0;
  }
  if (ajax.overrideMimeType) {
    ajax.overrideMimeType("text/xml");
  }

  ajax.onreadystatechange = onSuccess;
  ajax.open("GET", uri, true);
  ajax.send("");
}

// TODO: edit the function to run the make file
//? liolah
function uploadClick() {
  var code = Blockly.AVR.workspaceToCode();
  ipcRenderer.send("upload", code);
  alert("Ready to upload to Atmega32A.");

  // uploadCode(function (status, errorInfo) {
  //   if (status == 200) {
  //     alert("Program uploaded ok");
  //   } else {
  //     alert("Error uploading program: " + errorInfo);
  //   }
  // });
}
