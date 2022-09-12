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
            let words = message.content.split(' ');
            if(words[1] == "sussy" && words[2] == "baka") {
                embed.setTitle("KEREN OR CHEN")
                    .setDescription("SURPSISE!! THIS IS KEREN!")        
                    .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjp4V_AGKqNYfbr66SWdUfSuNgftRiHuONkc98Ori5fpDgu-LZ01geyFupWwFJvUH4JQ&usqp=CAU')
                return embed;
            }else if(words[1] == undefined){
                const msg = await message.reply("Enter the secret password to see the surprise! (!nir <password>)");
            }else{
                const msg = await message.reply("That's not the password!");
            }
        }else{
            const msg = await message.reply('YOU ARE NOT NIR!!!!');
        }
        
    }
} as ICommand

