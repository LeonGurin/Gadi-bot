import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: "Rock Paper Scissors",
    name: "rps",
    description: "Starts a session of rock-paper-scissors against Gadi-Bot.",

    permissions: [],

    callback: ({ message }) => {
        let embed = new MessageEmbed()
        let title = ""
        let description = ""
        let options = ["rock", "paper", "scissors"]
        let random = Math.floor(Math.random() * 3)
        let words = message.content.split(' ')
        let choice;
        // invalid input
        if ((choice = options.indexOf(words[1])) < 0) {
            embed.setTitle("Idiot")
            .setDescription("Invalid choice, dumbass")
            return embed
        }
        // print choices
        description += "**I Chose**: " + options[random] + "\n"
        description += "**You Chose**: " + words[1] + "\n"
        // draw
        if (choice == random) {
            title = "DRAW"
            description += "Draw, you sussy baka"
        }
        // you lost 
        else if ((choice == 0 && random == 1) || (choice == 1 && random == 2) || (choice == 2 && random == 0)) {
            title = "DEFEAT"
            description += "You lost! Muhahaha (Failed Data Structures)"
        }
        // you won
        else {
            title = "VICTORY"
            description += "You win... but you probably cheated"
        }
        // set attributes of embed
        embed.setTitle(title)
        .setDescription(description)
        return embed
    }
} as ICommand

