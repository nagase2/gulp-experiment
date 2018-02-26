var request = require('request');

console.log("start program.")

var options = {
  url: 'http://localhost:3000/top',
  headers: {
    'User-Agent': 'request'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
  }
}

request(options, callback);


request.post('http://127.0.0.1:3000', {form:{key:'value'}})
request.post('https://github.com/request/request', {form:{key:'value'}})