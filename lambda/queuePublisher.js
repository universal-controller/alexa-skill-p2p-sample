const amqp = require('amqplib');

const queueName = process.env.RABBITMQ_QUEUE || "commandsQueue"
const queueAddress = process.env.RABBITMQ_URL || "amqp://localhost";

module.exports = {
  publish(msg) {
    amqp.connect(queueAddress).then(function(conn) {
      return conn.createChannel().then(function(ch) {
        const ok = ch.assertQueue(queueName, {durable: false});

        return ok.then(function(_qok) {
          ch.sendToQueue(queueName, Buffer.from(JSON.stringify({code: msg})));
          console.log(" [x] Sent '%s'", msg);
          return ch.close();
        });
      }).finally(function() { conn.close() });
    }).catch(console.warn);
  }
}
