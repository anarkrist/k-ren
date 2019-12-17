// K-ren.js, v0.4, "Surprise revival round 2 - this time, it's real".

// Require DotEnv
require('dotenv').config();
// Import modules...
const Discord = require("discord.js");
// Create client instance...
const client = new Discord.Client();

// Ready the bot...
client.on("ready", function() {
    //Let the user know the bot is open...
	console.log("K-ren v0.4, Running on Node.js.\nK-ren is licensed under the Apache 2.0 Licence.")
	// Set updateProfile interval...
	client.setInterval(client.updateProfile, (120 * 1000));
    // Do it...
	client.updateProfile();
});
// Define updateProfile...
client.updateProfile = function() {
    //Define status messages...
	var statusMsgs = [
        "with Moon",
		"Solitaire",
		"SimCity 2000",
		"PC Speaker Beeps",
		"Bird Simulator 1994",
	];
        // Set 'Playing' text to a random choice out of the 'statusMsgs' variable...
        client.user.setPresence({game: {name: (statusMsgs[Math.floor(Math.random() * statusMsgs.length)]), type: 0 }});
};
// Start an event listener...
client.on('message', message => {

  if (message.channel.type === "text" && message.isMentioned(client.user)) {
      message.channel.send({
          embed: {
              color: 0x39e600,
              fields: [
                  {
                      name: "Please do not mention me,\nI do not have capabilities beyond displaying this text...",
                      inline: true,

                  }
              ]
          }
      })
  }

// And then the commands.....
  else if (message.content === './ping') {
      message.channel.send({
          embed: {
              color: 0x39e600,
              fields: [
                  {
                      name: "Pong!",
                      value: "Ping Time: " + new Date().getTime() - message.createdTimestamp + " ms",
                      inline: true,
                  },
              ],
          }
      })
  }
  else if (message.content === './pong') {
      message.channel.send({
          embed: {
              color: 0x39e600,
              fields: [
                  {
                      name: "Ping!",
                      value: "Ping Time: " + new Date().getTime() - message.createdTimestamp + " ms",
                      inline: true,
                  },
              ],
          }
      })
  }
  else if (message.content === './avatar') {
      message.channel.send({
          embed: {
              color: 0x39e600,
              title: "Avatar Retriever",
              description: "Utility to retrieve a users avatar from Discord.",
              image: {
              url: message.author.displayAvatarURL
              }
          }
      })
  }
  else if (message.content === './channelid') {
    message.channel.send({embed:{
        color: 0x39e600,
	title: "Channel Identifier",
	description: "Utility to find the ID of a channel.",
	thumbnail: {
		url:
          "https://cdn.discordapp.com/avatars/586749049366118413/a1ee5e4726e3a63d47df0271024b7960.png?size=256",
        },
      fields: [
      {
          name: "This channel has a unique identifier of...",
          value: message.channel.id,
          inline: true,
      },
      ],
    }})
  }
  else if (message.content === './botinfo') {
      message.channel.send({
          embed: {
              color: 0x39e600,
              title: "K-ren Information",
              thumbnail: {
                  url:
                  "https://cdn.discordapp.com/avatars/586749049366118413/a1ee5e4726e3a63d47df0271024b7960.png?size=256",
              },
              fields: [
                  {
                      name: "K-ren, v0.4",
                      value: "K-ren is developed by Kris (aka winframe), who can be found at https://www.github.com/winframe.",
                      inline: true,
                  },
                  {
                      name: "Legal",
                      value: "K-ren runs on Node.js, and uses Discord.js to communicate with Discord. K-ren is licensed with the Apache 2.0 License.",
                      inline: true,
                  }
              ],
          }
      })
  }
  else if (message.content === './help') {
      message.channel.send({
          embed: {
              color: 0x39e600,
              title: "K-ren Command Listing",
              description: "Utility to list all know commands. This is updated manually.",
              thumbnail: {
                  url:
                  "https://cdn.discordapp.com/avatars/586749049366118413/a1ee5e4726e3a63d47df0271024b7960.png?size=256",
              },
              fields: [
                  {
                      name: "./help",
                      value: "Display this message.",
                      inline: true,
                  },
                  {
                      name: "./ping, ./pong",
                      value: "Respond with a test message. One writes 'Pong!', the other, 'Ping!'. Useful for checking response time.",
                      inline: true,
                  },
                  {
                      name: "./avatar",
                      value: "Retrieves the users avatar directly from Discord.",
                      inline: true,
                  },
                  {
                      name: "./channelid",
                      value: "Retrieves the identifier of the channel the command is run in. Useful for debugging...",
                      inline: true,
                  },
                  {
                      name: "./botinfo",
                      value: "Displays information on the bot and its 'version'.",
                      inline: true,
                  }
              ],
          }
      })
  }
});

// Log in using a given token...
client.login(process.env.BOT_TOKEN);
