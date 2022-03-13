import { ICommand } from "wokcommands";

export default {
    category: 'Score',
    name: "score",
    description: "gives a random score from 1 to 100",

    permissions: [],

    callback: async ({ message }) => {
        let random = Math.floor(Math.random()*100);
        const msg = await message.reply(' אתה תקבל ' + random + ' במבחן הקרוב... ');
        if(random < 25){
            msg.react('<:_omegalolgadi:811854297854640138>');
        }
        else if(random < 50){
            msg.react('<:gadi_stickman:829752119597989919>');
        }
        else if(random < 75){
            msg.react('<:_gadi_happy_b:811853254120046633>');
        }
        else{
            msg.react('<:_gadi_wow:811855140117282816>');
        }
    }
} as ICommand

