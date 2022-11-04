if(window.WebSocket) {
  let buttonSend = document.getElementById('send-button');
  buttonSend.onclick = function() {
    console.log("Button clicked!");
  }
  //ws://localhost:3000?token=123456
  //wss://socketsbay.com/wss/v2/2/demo/
  const socket = new WebSocket("ws://localhost:3000?token=123456");
  // open
  socket.onopen = function(event) {
    let label = document.getElementById('status-label');
    label.innerHTML = "Connection stabilished!";
  }
  //message
  socket.onmessage = function(event) {
    if(typeof event.data === 'string') {
      let label = document.getElementById('status-label');
      label.innerHTML = event.data;
    }
  }

} else {
  alert('WebSocket is not suported!');
}

