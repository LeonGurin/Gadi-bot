import { MessageEmbed } from "discord.js";
import { ICallbackObject, ICommand } from "wokcommands";

export default {
  category: "Time",
  name: "time",
  description: "Get time and date.",

  permissions: [],

  callback: ({ message }) => {
    let date = new Date();
    let words = message.content.split(" ");
    let print_date = true;
    let print_time = true;
    // help option
    if (words.indexOf("-h") > 0) {
      let embed = new MessageEmbed();
      let title = "HELP";
      let description =
        "```!time [OPTION]...```" +
        "**OPTIONS:**\n" +
        "`-d`: only print date\n" +
        "`-t`: only print time";
      embed.setTitle(title).setDescription(description);
      return embed;
    }
    // only date option
    if (words.indexOf("-d") > 0) {
      print_time = false;
    }
    // only time option
    if (words.indexOf("-t") > 0) {
      print_date = false;
    }
    // print date
    if (print_date) {
      message.reply(
        "Date: " +
          date.getDay().toString() +
          " " +
          date.getDate().toString() +
          " " +
          date.getMonth().toString() +
          " " +
          date.getFullYear().toString()
      );
    }
    // print time
    if (print_time) {
      message.reply(
        "Time: " +
          date.getHours().toString() +
          ":" +
          date.getMinutes().toString() +
          ":" +
          date.getSeconds().toString()
      );
    }
  },
} as ICommand;
