console.log("Bot is starting...");

const PREFIX = "~"

const Discord = require('discord.js');
const client = new Discord.Client({
    intents:[
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.login('OTQ5OTQzMDEwMTA2NDIxMjk4.YiRtXg.BUtnCGOyiVVVSp9FvJwQZ2C7DdQ')
client.on('ready', readyFunc);

function readyFunc() {
    console.log("STARTINGGGG!");
    client.user.setActivity("Do ~help for help!");
}

client.on('message', messageFunc);

function messageFunc(message){
    console.log(message);
}