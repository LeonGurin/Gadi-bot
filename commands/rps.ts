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
    let rigged = false;

    // help option
    if (words.indexOf("-h") > 0) {
      title = "HELP";
      description =
        "```!rps [OPTION]... [INPUT]...```\n" +
        "**INPUT:** rock/paper/scissors.\n" +
        "other inputs are invalid.\n" +
        "**OPTIONS:**\n" +
        "`-r`: rigged, you always win (cheater)\n" +
        "`-g`: god, enables god choice (god beats everything except itself)\n" +
        "`-e`: extended, adds lizard and spock (nerd mode)";
      return createEmbed(title, description);
    }
    // rigged option
    if (words.indexOf("-r") > 0) {
      rigged = true;
    }
    // god option
    if (words.indexOf("-g") > 0) {
      choices.push("god");
      emojis.push(":angel:");
    }
    // extended option
    if (words.indexOf("-e") > 0) {
      choices.push("lizard");
      choices.push("spock");
      emojis.push(":lizard:");
      emojis.push(":vulcan:");
    }
    // randomly generate bot choice
    let bot_choice = choices[Math.floor(Math.random() * choices.length)];
    // get and check user choice
    let user_choice = words[words.length - 1];
    if (choices.indexOf(user_choice) < 0) {
      title = "HELP";
      description =
        "```!rps [OPTION]... [INPUT]...```\n" +
        "**INPUT:** rock/paper/scissors.\n" +
        "other inputs are invalid.\n" +
        "**OPTIONS:**\n" +
        "`-r`: rigged, you always win (cheater)\n" +
        "`-g`: god, enables god choice (god beats everything except itself)\n" +
        "`-e`: extended, adds lizard and spock (nerd mode)";
        return createEmbed(title, description);

      // title = "IDIOT";
      // description = "Invalid input, dumb ass";
    }
    // print user choice
    description +=
      "**I CHOSE:** " +
      bot_choice +
      " " +
      emojis[choices.indexOf(bot_choice)] +
      "\n";
    // print bot choice
    description +=
      "**YOU CHOSE:** " +
      user_choice +
      " " +
      emojis[choices.indexOf(user_choice)] +
      "\n";
    // print result
    description += "**RESULT:** ";
    // user wins scenario
    if (
      (user_choice == "rock" &&
        (bot_choice == "scissors" || bot_choice == "lizard")) || // rock beats scissors and lizard
      (user_choice == "paper" &&
        (bot_choice == "rock" || bot_choice == "spock")) || // paper beats rock and spock
      (user_choice == "scissors" &&
        (bot_choice == "paper" || bot_choice == "lizard")) || // scissors beat paper and lizard
      (user_choice == "lizard" &&
        (bot_choice == "paper" || bot_choice == "spock")) || // lizard beats paper and spock
      (user_choice == "spock" &&
        (bot_choice == "rock" || bot_choice == "scissors")) || // spock beats rock and scissors
      (user_choice == "god" && bot_choice != "god") || // god beats everything except itself
      rigged // if the game is rigged, the user always wins
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
