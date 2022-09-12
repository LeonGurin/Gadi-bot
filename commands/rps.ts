import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

function createEmbed(title: string, description: string) {
  let embed = new MessageEmbed();
  embed.setTitle(title);
  embed.setDescription(description);
  return embed;
}

export default {
  category: "Rock Paper Scissors",
  name: "rps",
  description: "Starts a session of rock-paper-scissors against Gadi-Bot.",

  permissions: [],

  callback: ({ message }) => {
    let title = "";
    let description = "";
    let choices = ["rock", "paper", "scissors"];
    let emojis = [":rock:", ":paper:", ":scissors:"];
    let user_choice;
    let bot_choice = Math.floor(Math.random() * 3);
    let words = message.content.split(" ");
    let rigged = false;
    // help option
    if ("-h" in words) {
      title = "HELP";
      description =
        "```rps [OPTION]... [INPUT]...```\n" +
        "**Input:** rock/paper/scissors.\n" +
        "Other inputs are invalid.\n" +
        "**Options:**\n" +
        "`-r`: rigged, user always wins (cheater).\n" +
        "`-g`: enables god choice (god beats everything except itself).";
      return createEmbed(title, description);
    }
    // rigged option
    if ("-r" in words) {
      rigged = true;
    }
    // god option
    if ("-g" in words) {
      choices.push("god");
    }
    // check user input
    if ((user_choice = choices.indexOf(words[words.length - 1])) < 0) {
      title = "IDIOT";
      description = "Invalid data, dumbass.";
      return createEmbed(title, description);
    }
    // print user and bot choices
    description += "**I Chose:** " + choices[bot_choice] + "\n";
    description += "**You Chose:** " + words[words.length - 1] + "\n";
    description += "**Result:** ";
    // user wins scenario
    if (
      (user_choice == 1 && bot_choice == 0) || // paper beats rock
      (user_choice == 2 && bot_choice == 1) || // scissors beat paper
      (user_choice == 0 && bot_choice == 2) || // rock beats scissors
      (user_choice == 3 && bot_choice != 3) || // god beats everything except itself
      rigged
    ) {
      title = "VICTORY";
      description += "You win... but you probably cheated";
    }
    // draw scenario
    else if (user_choice == bot_choice) {
      title = "DRAW";
      description += "Draw, you sussy baka";
    }
    // user loses scenario
    else {
      title = "DEFEAT";
      description += "You lost! Muhahaha (Failed Data Structures)";
    }
    return createEmbed(title, description);
  },
} as ICommand;
