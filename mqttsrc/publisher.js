var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://lenscoop.com')
 
client.on('connect', function () {
  client.publish('uii', 'halo')
  client.end();
})
 
