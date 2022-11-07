if(window.WebSocket) {
  let buttonSend = document.getElementById('send-button');
  let buttonStop = document.getElementById('stop-button');
  let textView = document.getElementById("text-view");
  let label = document.getElementById('status-label');

  //ws://localhost:3000?token=123456
  //wss://socketsbay.com/wss/v2/2/demo/
  const socket = new WebSocket("ws://localhost:3000?token=123456");
  
  socket.onopen = function(event) {
    label.innerHTML = "Connection stabilished!";
  }
  
  buttonSend.onclick = function() {
    if(socket.readyState === WebSocket.OPEN) {
      socket.send(textView.value);
    } else {
      console.log("No Connection!");
    }
  }
  
  buttonStop.onclick = function() {
    if(socket.readyState === WebSocket.OPEN) {
      socket.close();
    }
  }
  
  socket.onmessage = function(event) {
    if(typeof event.data === 'string') {
      label.innerHTML = event.data;
    }
  }

  socket.onclose = function(event) {
    console.log('Connection closed!');

    let code = event.code;
    let reason = event.reason;
    let wasClean = event.wasClean;

    if(wasClean) {
      label.innerHTML = "Connection closed normally"
    } else {
      label.innerHTML = "Connection closed with message " + reason 
      + " (Code: " + code + ")";
    }
  }

  socket.onerror = function(event) {
    console.error("Oops!");
    label.innerHTML = `Error: ${event}`;
  }

} else {
  alert('WebSocket is not suported!');
}

