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
    '9) אם דרסת חתול, אתה לא תוכל לדעת אם דרסת אותו אם תסתכל מלמעלה, אתה צריך לזוז צעד אחד קדימה ואז להסתכל',
    '10) אל תכתבו לי תוכניות אני לא קומפיילר',
    '11) דף נקי זאת תשובה מאוד קצרה',
    '12) יש לי תחושה שבארצות הברית המורה הייתה נשמעת אחרת, גם באנגליה. אפילו בניו זילנד...',
    '13) ?אורן: מה זה סאס',
    '14) השאלה היא לא אם אתה יכול להגיע השאלה אם אתה יכול לגמור',
    '15) אם דרסת חתול, אתה לא תוכל לדעת אם דרסת אותו אם תסתכל מלמעלה, אתה צריך לזוז צעד אחד קדימה ואז להסתכל',
    '16) אל תכתבו לי תוכניות אני לא קומפיילר',
    '17) אני רואה פרצופים, זה סוג של שמחת חיים',
    '18) אם תגידו למדתי עם אליאס LC-3 יצחקו עליכם',
    '19) מחזור 15 אני ממליץ לכם לעשות כל מאמץ לקבל במבוא לחומרה ציון מדהים (90 ומעלה)',
    '20) ?"אני לא אוהבת את הביטוי הזה, מה זה "ברח לו',
    '21) יום טוב אור-אל',
    

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
    }
} as ICommand

