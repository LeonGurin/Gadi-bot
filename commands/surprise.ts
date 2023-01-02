import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'surprise',
    name: "surprise",
    description: "its a surprise",

    permissions: [],

    callback: async ({ message }) => {
        let embed = new MessageEmbed();
        let random = Math.floor(Math.random()*100);
        // let random = 1;
        if(random == 1){
            embed.setTitle("SURPRISE")
                .setDescription("Happy Birthday!")        
                .setImage('https://static.wikia.nocookie.net/half-life/images/a/a1/Cake.jpg/revision/latest?cb=20100416151305&path-prefix=en')
                return embed;
        }else{
            message.reply("No surprise for you today :(");
        }
    }
} as ICommand

