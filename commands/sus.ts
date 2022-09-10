import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'sus',
    name: "sus",
    description: "its sus",

    permissions: [],

    callback: async ({ message }) => {
        let embed = new MessageEmbed();
        let random = Math.floor(Math.random()*100);
        // let random = 1;
        if(random == 1){
            embed.setTitle("SUSSY")
                .setDescription("SUS MOMENT")        
                .setImage('https://c.tenor.com/gQV5VzHLWQIAAAAd/among-us-sus.gif')
                return embed;
        }
    }
} as ICommand

