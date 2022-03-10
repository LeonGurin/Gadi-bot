import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

var gadiArr: string[] = [
    'https://cs.haifa.ac.il/LANDAU/landau_files/image002.jpg',
    'https://hil.haifa.ac.il/wp-content/uploads/gl-1-150x150.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/10/Gad_M._Landau.jpg'
];

var ilanArr: string[] = [
    'https://cs.haifa.ac.il/~ilan/ilan.JPG',
    'https://cs.haifa.ac.il/~yuri/Ilan60/ilan.png'
];

var random: string;

export default {
    category: 'Summon',
    name: "summ",
    description: "summon martse",

    permissions: [],

    callback: ({ message }) => {
        let embed = new MessageEmbed()
        switch(message.content){
            case '!summ gadi':
                random = gadiArr[Math.floor(Math.random() * gadiArr.length)]
                // const embed = new MessageEmbed()
                embed.setTitle("GADI")
                .setDescription("summoned Gadi")        
                .setImage(random)
                return embed;
            case '!summ ilan':
                random = ilanArr[Math.floor(Math.random() * ilanArr.length)]
                // const embed = new MessageEmbed()
                embed.setTitle("ILAN")
                .setDescription("summoned Ilan")
                .setImage(random)
                return embed;
            case '!summ':
                break;
        }
        // if(message.content === "!summ gadi"){
        //     random = gadiArr[Math.floor(Math.random() * gadiArr.length)]
        //     const embed = new MessageEmbed()
        //     embed.setTitle("GADI")
        //     .setDescription("summoned Gadi")        
        //     .setImage(random)
        //     return embed;
        // }
        // else if(message.content === '!summ ilan'){
        //     random = ilanArr[Math.floor(Math.random() * ilanArr.length)]
        //     const embed = new MessageEmbed()
        //     embed.setTitle("ILAN")
        //     .setDescription("summoned Ilan")
        //     .setImage(random)
        //     return embed;
        // }
        
    }
} as ICommand


