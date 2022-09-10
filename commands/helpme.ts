import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'helpme',
    name: "helpme",
    description: "describes commands",

    permissions: [],

    callback: ({ message }) => {
        const embed = new MessageEmbed()
            .setColor('RED')
            .setAuthor('Author: Leon aka me')
            .setTitle("HELP GUIDE")
            .setDescription("Type the following commands to see what happens!\n\n")
            .addField('Command Name: __!summ__','Summon your favorite lecturer!\nThe command gives you a random picture of him/her!\n\n\n')
            .addField('Command Name: __!quote__','Get a random quote!\nYou can also add -all to see all quotes!\nNew feature, you can type a number from [1-n] for a specific quote\n\n\n')
            .addField('Command Name: __!score__','Get a random score for your next exam! (factually correct)\n\n\n')
            .addField('Command Name: __!helpme__','You already typed it, tell your friends\n\n\n')
            .addField('Command Name: __!sus__','sussy baka\n\n\n')
            .addField('Command Name: __!nir__','Surprise for Nir\n\n\n')
            .addField('Command Name: __!rps__','Play rock paper scissors against Gadi-Bot\n\n\n')
            .setTimestamp()
        message.reply(
            {embeds: [embed]}
            );
            // return embed;
        }
} as ICommand

