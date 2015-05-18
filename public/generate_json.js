var fs = require('fs');
var files = fs.readdirSync('audio');
var result = [];
var id = 0;
var chunks;

result = files.map(function(file) {
  id++;
  chunks = file.split('_');

  return {
    id: id,
    name: chunks[0],
    audio: chunks[1].replace('.mp3', '')
  };
});

result = {
  audios: result
};

fs.writeFile("data.json", JSON.stringify(result));

console.log(result);