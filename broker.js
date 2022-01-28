const mosca = require("mosca");

const broker = new mosca.Server({
  port: 9000,
});
broker.on("ready", () => {
  console.log("Mosca rompiendo los huevos");
});

broker.on("clientConnected", (client) => {
  console.log("Cliente: " + client.id + " conectado");
});
