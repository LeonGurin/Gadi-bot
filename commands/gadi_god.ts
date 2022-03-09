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
        .setImage("https://i.imgur.com/XQQQQQQ.png")
        return embed;
    }
} as ICommand