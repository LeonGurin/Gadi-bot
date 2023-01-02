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

var kerenArr: string[] = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjp4V_AGKqNYfbr66SWdUfSuNgftRiHuONkc98Ori5fpDgu-LZ01geyFupWwFJvUH4JQ&usqp=CAU',
    'https://www.rotaryhaifa.org.il/uploaded_files/62834bd2313e7232361fabe94f62b309.JPG',
    'https://www.goshow.co.il/application/views/website/timthumb.php?w=960&h=344&zc=1&q=80&src=https%3A%2F%2Fwww.goshow.co.il%2Fmanager%2Fuserfiles%2F2017%2F03%2F%D7%A7%D7%A8%D7%9F-%D7%90%D7%95%D7%A8-%D7%97%D7%9F-%D7%96%D7%95%D7%92%D7%99%D7%95%D7%AA-%D7%91%D7%90%D7%A0%D7%A8.jpg',
    'https://mydnamatch.me/wp-content/uploads/2021/09/productKeren.jpg',
];

function printEmbed(name: string, arr: string[]): MessageEmbed {
    var embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(name)
        .setDescription("summoned " + name)
        .setImage(arr[Math.floor(Math.random() * arr.length)]);
    return embed;
}

const lecturerArr: string[] = ["gadi", "ilan","yael","dan","or","dani","yuri","keren"];

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
            case "gadi":
                return printEmbed("Gadi", gadiArr);
            case "ilan":
                return printEmbed("Ilan", ilanArr);
            case "yael":
                return printEmbed("Yael", yaelArr);
            case "dan":
                return printEmbed("Dan", danArr);
            case "or":
                return printEmbed("Or", orArr);
            case "dani":
                return printEmbed("Dani", daniArr);
            case "yuri":
                return printEmbed("Yuri", yuriArr);
            case "keren":
                return printEmbed("Keren", kerenArr);
            default:
                message.reply("Please specify a lecturer.\nType the command: '!summ' + space + lecturer name.\nThe currently available lecturers are: \n*" + lecturerArr.join(', ') + "*");
        }        
    }
} as ICommand


