import { ICommand } from "wokcommands";

export default {
    category: "Rock Paper Scissors",
    name: "rps",
    description: "Starts a session of rock-paper-scissors against Gadi-Bot.",

    permissions: [],

    callback: ({ message }) => {
        let random = Math.floor(Math.random()*3);
        let words = message.content.split(' ');
        let choice;
        switch(words[1]) {
            case "rock":
                choice = 0;
                break;
            case "paper":
                choice = 1;
                break;
            case "scissors":
                choice = 2;
                break;
            default:
                message.reply("Invalid choice, dumbass")
                return
        }
        // draw
        if (choice == random) {
            message.reply("Draw, you sussy baka")
        }
        // you lost 
        else if ((choice == 0 && random == 1) || (choice == 1 && random == 2) || (choice == 2 && random == 0)) {
            message.reply("You lost! Muhahaha (Failed Data Structures)");
        }
        // you won
        else {
            message.reply("You win... but you probably cheated");
        }
    }
} as ICommand

//test test omer this is a test

