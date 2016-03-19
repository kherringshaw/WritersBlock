var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
});
server.listen(8080);


var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '157005',
  key: '5901f4ac8b275f578afb',
  secret: 'cf9c97cad0cff8b4e2c1',
  encrypted: true
});
pusher.port = 443;

pusher.trigger('test_channel', 'my_event', {
  "message": "Notification of update"
});