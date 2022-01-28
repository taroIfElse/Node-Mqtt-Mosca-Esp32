const mqtt = require("mqtt");

const sub = mqtt.connect("mqtt://localhost:9000");

sub.on("connect", () => {
  sub.subscribe("ESP32");
});

sub.on("message", (topic, messaage) => {
  console.log(messaage.toString());
});
