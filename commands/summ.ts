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

const lecturerArr: string[] = ["gadi", "ilan"];

export default {
    category: 'Summon',
    name: "summ",
    description: "summon martse",

    permissions: [],

    callback: ({ message }) => {

        // split the message into words
        let words = message.content.split(' ');

        let embed = new MessageEmbed()
        switch(words[1]){
            case lecturerArr[0]:
                random = gadiArr[Math.floor(Math.random() * gadiArr.length)]
                // const embed = new MessageEmbed()
                embed.setTitle("GADI")
                .setDescription("summoned Gadi")        
                .setImage(random)
                return embed;
            case 'ilan':
                random = ilanArr[Math.floor(Math.random() * ilanArr.length)]
                // const embed = new MessageEmbed()
                embed.setTitle("ILAN")
                .setDescription("summoned Ilan")
                .setImage(random)
                return embed;
            default:
                message.reply("Please specify a lecturer.\nType the command: '!summ' + space + lecturer name.\nThe currently available lecturers are: \n*" + lecturerArr.join(', ') + "*");
        }        
    }
} as ICommand


