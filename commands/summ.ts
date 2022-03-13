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

var yaelArr: string[] = [
    'https://www.reali.org.il/wp-content/uploads/2021/08/Yael-200x300.jpg',
];

var danArr: string[] = [
    'https://cs.hevra.haifa.ac.il/images/2021/06/07/pxl_20210601_105840663.portrait1.jpg',
    'https://danrsm.github.io/dan_rosenbaum.png',
    'https://pbs.twimg.com/profile_images/756365601925369856/9kKCMIdl_400x400.jpg',
];

var orArr: string[] = [
    'https://cs.hevra.haifa.ac.il/images/staff/Academic/or_meir.jpg',
];

var daniArr: string[] = [
    'https://www.cs.haifa.ac.il/~dkeren/danny.jpg',
];

var random: string;

const lecturerArr: string[] = ["gadi", "ilan","yael","dan","or","dani"];

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
            case 'yael':
                random = yaelArr[Math.floor(Math.random() * yaelArr.length)]
                // const embed = new MessageEmbed()
                embed.setTitle("YAEL")
                .setDescription("summoned Yael")
                .setImage(random)
                return embed;
            case 'dan':
                random = danArr[Math.floor(Math.random() * danArr.length)]
                // const embed = new MessageEmbed()
                embed.setTitle("DAN")
                .setDescription("summoned Dan")
                .setImage(random)
                return embed;
            case 'or':
                random = orArr[Math.floor(Math.random() * orArr.length)]
                // const embed = new MessageEmbed()
                embed.setTitle("OR")
                .setDescription("summoned Or")
                .setImage(random)
                return embed;
            case 'dani':
                random = daniArr[Math.floor(Math.random() * daniArr.length)]
                // const embed = new MessageEmbed()
                embed.setTitle("DANI")
                .setDescription("summoned Dani")
                .setImage(random)
                return embed;

            default:
                message.reply("Please specify a lecturer.\nType the command: '!summ' + space + lecturer name.\nThe currently available lecturers are: \n*" + lecturerArr.join(', ') + "*");
        }        
    }
} as ICommand


