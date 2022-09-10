import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

let nirID = '680782833094361195';

export default {
    category: 'nir',
    name: "nir",
    description: "nir",

    permissions: [],

    callback: async ({ message }) => {
        if(message.user.id == nirID) {
            const msg = await message.reply('@Nir#1579 What is the password?');
            
            return 
        }

        }
        
    }
} as ICommand

