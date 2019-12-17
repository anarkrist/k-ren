//K-ren - commands/ping.js - ping command

exports.run = (client, message) => {
    //send pong to channel
    message.channel.send("pong!").catch(console.error);
}