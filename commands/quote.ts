import { ICommand } from "wokcommands";

var quotes: string[] = [
    'זה מאוד חשוב לתת לילד שלך למות',
    'אז בסופו של דבר זה בעצם כלב',
    'מילים נוצצות זה כמו תוכי בגן חיות, רק יופי חיצוני',
    'פסדר? זה פסדר??',
    'עוף ברוטב מרינדת תפוזים',
    'אחד זייף',
    
];

export default {
    category: 'Quote',
    name: "quote",
    description: "gives a random quote from a random lecturer",

    permissions: [],

    callback: ({ message }) => {
        let words = message.content.split(' ');
        switch (words[1]) {
            case '-all':
                message.channel.send("The currently available quotes are: \n\n*" + quotes.join(',\n') + "*\n\nDM me if you have a quote you want to add!");
                break;
            default:
                message.reply("*" + quotes[Math.floor(Math.random()*quotes.length)] + "*");
        }       
    }
} as ICommand

