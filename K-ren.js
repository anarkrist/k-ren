// K-ren - k-ren.js - main script
var pjson = require('./package.json'); 

//import fs
const fs = require("fs");
//import enmap
const enmap = require("Enmap");
//import discord.js
const Discord = require("discord.js");
//create instance of client
const client = new Discord.Client();
//import config.json
const cjson = require("./config.json")
client.cjson = cjson;

//write info to console for user
client.on("ready", function() {
	console.log(`K-ren ${pjson.version}, Running on Node.js.\nK-ren is licensed under the Apache 2.0 Licence.`)
});

//this loop reads ./events/ and attaches the files to their appropriate event
fs.readdir("./events/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		//ignore file if not a .js file (this is apple's fault)
		if (!file.endsWith(".js")) return;
		//load file
		const event = require(`./events/${file}`);
		//get event name from file name
		let eventName = file.split(".")[0];
		//call events with arguments *after* client var
		client.on(eventName, event.bind(null, client));
		delete require.cache[require.resolve(`./events/${file}`)];
	});
});

//create enmap
client.commands = new enmap();
//this is generally readable the same way as the event loop above
fs.readdir("./commands/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith(".js")) return;
		let props = require(`./commands/${file}`);
		let commandName = file.split(".")[0];
		//let user know a command is attempting to be loaded
		console.log(`Attempting to load command ${commandName}.`);
		//load command to enmap
		client.commands.set(commandName, props);
	});
});


// Log in using a given token...
client.login(cjson.token);
