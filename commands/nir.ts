import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

let nirID = '680782833094361195';

export default {
    category: 'Nir',
    name: "nir",
    description: "nir",

    permissions: [],

    callback: async ({ message }) => {
        if(message.author.id == nirID) {
            let embed = new MessageEmbed()
            const msg = await message.reply('@Nir#1579 What is the password?');
            if(msg.content == 'sussy baka') {
                embed.setTitle("KEREN OR CHEN")
                    .setDescription("SURPSISE!! THIS IS KEREN!")        
                    .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjp4V_AGKqNYfbr66SWdUfSuNgftRiHuONkc98Ori5fpDgu-LZ01geyFupWwFJvUH4JQ&usqp=CAU')
                return embed;
            }
        }
        
    }
} as ICommand

