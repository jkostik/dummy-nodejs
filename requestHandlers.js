function start(response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Startseite aufgerufen! Herzlich willkommen!");
    response.end();
  }
  
  function upload(response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Upload-Funktion aufgerufen! Bitte wählen Sie ein Foto aus und laden Sie es hoch.");
    response.end();
  }
  
  exports.start = start;
  exports.upload = upload;