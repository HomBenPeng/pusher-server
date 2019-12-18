var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '919600',
  key: '6401d26c3bbb0832b001',
  secret: '5218d40c5e7b875f6c80',
  cluster: 'ap3',
  useTLS: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});
