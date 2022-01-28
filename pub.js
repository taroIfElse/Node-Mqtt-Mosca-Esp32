const mqtt = require("mqtt");
const serialPort = require("serialport");

const port = new serialPort("COM6", {
  baudRate: 9600,
});

const parser = port.pipe(new serialPort.parsers.Readline({ delimiter: "\n" }));

const pub = mqtt.connect("mqtt://localhost:9000");

pub.on("connect", () => {
  parser.on("data", (data) => {
    pub.publish("ESP32", data);
  });
});
