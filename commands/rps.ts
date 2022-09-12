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
    let emojis = [":rock:", ":roll_of_paper:", ":scissors:"];
    let words = message.content.split(" ");
    // help option
    if (words.indexOf("-h") > 0) {
      title = "HELP";
      description =
        "```rps [OPTION]... [INPUT]...```\n" +
        "**INPUT:** rock/paper/scissors.\n" +
        "other inputs are invalid.\n" +
        "**OPTIONS:**\n" +
        "`-r`: rigged, user always wins (cheater).\n" +
        "`-g`: enables god choice (god beats everything except itself).";
      return createEmbed(title, description);
    }
    // rigged option
    let rigged = false;
    if (words.indexOf("-r") > 0) {
      rigged = true;
    }
    // god option
    if (words.indexOf("-g") > 0) {
      choices.push("god");
      emojis.push(":angel:");
    }
    // receive and check user input
    let bot_choice = Math.floor(Math.random() * choices.length);
    let user_choice;
    if ((user_choice = choices.indexOf(words[words.length - 1])) < 0) {
      title = "IDIOT";
      description = "Invalid data, dumb ass";
      return createEmbed(title, description);
    }
    // print user and bot choices
    description +=
      "**I CHOSE:** " + choices[bot_choice] + " " + emojis[bot_choice] + "\n";
    description +=
      "**YOU CHOSE:** " +
      choices[user_choice] +
      " " +
      emojis[user_choice] +
      "\n";
    description += "**RESULT:** ";
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
