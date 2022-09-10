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

var yuriArr: string[] = [
    'http://cs.haifa.ac.il/~yuri/image002.png',
    'https://cs.hevra.haifa.ac.il/images/staff/Academic/Yuri1.jpg',
    'https://isyoga.co.il/wp-content/uploads/2021/10/%D7%AA%D7%A2%D7%95%D7%93%D7%AA-%D7%9E%D7%95%D7%A8%D7%94-%D7%9C%D7%99%D7%95%D7%92%D7%94-%D7%99%D7%95%D7%A8%D7%99-%D7%A8%D7%91%D7%99%D7%A0%D7%95%D7%91%D7%99%D7%A5-1.jpg',
];

var keren: string[] = [
    'data:image/jpeg;base64,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',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjp4V_AGKqNYfbr66SWdUfSuNgftRiHuONkc98Ori5fpDgu-LZ01geyFupWwFJvUH4JQ&usqp=CAU',
    
]

var random: string;

const lecturerArr: string[] = ["gadi", "ilan","yael","dan","or","dani","yuri"];

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
            case 'yuri':
                random = yuriArr[Math.floor(Math.random() * yuriArr.length)]
                // const embed = new MessageEmbed()
                embed.setTitle("YURI")
                .setDescription("summoned Yuri")
                .setImage(random)
                return embed;
                
            default:
                message.reply("Please specify a lecturer.\nType the command: '!summ' + space + lecturer name.\nThe currently available lecturers are: \n*" + lecturerArr.join(', ') + "*");
        }        
    }
} as ICommand


