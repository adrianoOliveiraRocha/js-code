const information = document.getElementById('info');
information.innerText = "Waiting response...";

const func = async () => {
  let response = await window.versions.ping();
  let resAnothierFunction = await window.versions.anotherFunction();
  information.innerText = `This app is using:  
  Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}) 
  and Electron (v${window.versions.electron()}).
  response of ping: ${response}.
  response of anotherFunction: ${resAnothierFunction}.`;
}

func();