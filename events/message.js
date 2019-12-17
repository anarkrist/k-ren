//K-ren - events/message.js - message event
module.exports = (client, message) => {
    //ignore other bots
    if (message.author.bot) return;

    //ignore messages that don't start with the prefix in conf.json
    if (message.content.indexOf(client.cjson.prefix) !== 0) return;

    //standard argument/command name definition
    const args = message.content.slice(client.cjson.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    //grab command data from client.commands enmap
    const cmd = client.commands.get(command);

    //if it doesnt exist, then exit and do nothing
    if (!cmd) return;

    //run the command
    cmd.run(client, message, args);
};