import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Help',
    name: "Helper Page",
    description: "describes commands",

    permissions: [],

    callback: ({ }) => {
        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle("HELP GUIDE")
        .setDescription("type !help to see all commands")
        .addField('command: !summ',' description: summon your favorite martse')
        .setTimestamp()
        return embed;
    }
} as ICommand

