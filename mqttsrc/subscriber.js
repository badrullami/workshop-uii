var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://lenscoop.com')
 
client.on('connect', function () {
	console.log('connect')
  	client.subscribe('uii')
})
 
client.on('message', function (topic, message) {
  	console.log(message.toString())
})

