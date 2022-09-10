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
        let choices = ["rock", "paper", "scissors"]
        let random = Math.floor(Math.random() * 3)
        let words = message.content.split(' ')
        // options
        let help = (words[1] == "-h")
        let rigged = (words[1] == "-r")
        let god = (words[1] == "-g")
        // help option
        if (help) {
            title = "HELP"
            description = "Input: rock/paper/scissors. Other inputs are invalid.\n" +
                          "Options:\n" +
                          "`-r`: rigged - you always win.\n"
            embed.setTitle(title)
            embed.setDescription(description)
            return embed
        }
        // invalid input
        let choice;
        if ((choice = choices.indexOf(words[words.length - 1])) < 0) {
            embed.setTitle("IDIOT")
            .setDescription("Invalid choice, dumbass")
            return embed
        }
        // print choices
        description += "**I Chose:** " + choices[random] + "\n"
        description += "**You Chose:** " + words[words.length - 1] + "\n"
        description += "**Result:** "
        // you won
        if ((choice == 1 && random == 0) || (choice == 2 && random == 1) || (choice == 0 && random == 2) || rigged) {
            title = "VICTORY"
            description += "You win... but you probably cheated"
        }
        // draw
        else if (choice == random) {
            title = "DRAW"
            description += "Draw, you sussy baka"
        }
        // you lost
        else {
            title = "DEFEAT"
            description += "You lost! Muhahaha (Failed Data Structures)"
        }
        // set attributes of embed
        embed.setTitle(title)
        .setDescription(description)
        return embed
    }
} as ICommand

