import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    name: "gadi_god",
    description: "summon gadi",

    permissions: [],

    callback: ({ message, text }) => {
        const embed = new MessageEmbed()
        .setTitle("gadi_god")
        .setDescription("summon gadi")
        // .attachFile('./avatar.png')
        // .setImage('attachment://avatar.png');
      
        .setImage("file:///C:/Users/leon9/OneDrive/Desktop/pics/ice%20man.jpg")
        return embed;
        // message.reply('pong')
    }
} as ICommand

