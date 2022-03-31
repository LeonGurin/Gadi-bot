import { ICommand } from "wokcommands";

var quotes: string[] = [
    '1) זה מאוד חשוב לתת לילד שלך למות',
    '2) אז בסופו של דבר זה בעצם כלב',
    '3) מילים נוצצות זה כמו תוכי בגן חיות, רק יופי חיצוני',
    '4) פסדר? זה פסדר??',
    '5) עוף ברוטב מרינדת תפוזים',
    '6) אחד זייף',
    '7) לא אומרים לא על C אומרים Yes daddy more',
    "8) Yeah, I'm a nerd, it's thursday evening and were talking about irregular languages, bro",
];

export default {
    category: 'Quote',
    name: "quote",
    description: "gives a random quote from a random lecturer",

    permissions: [],

    callback: ({ message }) => {
        let words = message.content.split(' ');
        if(words[1] == "-all"){
            message.reply("The currently available quotes are: \n\n*" + quotes.join(',\n') + "*\n\nDM me if you have a quote you want to add!");
        }
        else if(words[1] != undefined){
            message.reply("*" + quotes[parseInt(words[1])-1] + "*");
        }
        else{
            message.reply("*" + quotes[Math.floor(Math.random() * quotes.length)] + "*");
        }

        // switch (words[1]) {
        //     case '-all':
        //         message.channel.send("The currently available quotes are: \n\n*" + quotes.join(',\n') + "*\n\nDM me if you have a quote you want to add!");
        //         break;
        //     case "\n":
        //         message.reply("*" + quotes[Math.floor(Math.random()*quotes.length)] + "*");
        //         break;
        //     default:
        //         message.reply("*" + quotes[parseInt(words[1])] + "*");
        // }       
    }
} as ICommand

