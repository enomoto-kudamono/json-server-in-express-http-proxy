var fs = require('fs');
var data = { "visitors": [] };

if (require('optimist').argv['with-example']) data.visitors.push({ "id": 1, "createdAt": "1482317040000" });

fs.writeFile('db/db.json', JSON.stringify(data), callbackHandler);

function callbackHandler(err) {
  if (err) throw err;
  console.log('DB reset done.');
  console.log('If server is running, you have to restart the server to get resetted DB.');
}