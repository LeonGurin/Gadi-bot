// import { MessageEmbed } from "discord.js";
import { Client } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Score',
    name: "score",
    description: "gives a random score from 1 to 100",

    permissions: [],

    callback: ({ message }) => {
        message.reply(' אתה תקבל ' + Math.floor(Math.random()*100) + ' במבחן ');        
    }
} as ICommand

