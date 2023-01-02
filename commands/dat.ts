import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "DAT",
  name: "dat",
  description: "Get date and/or time.",

  permissions: [],

  callback: async ({ message }) => {
    let date = new Date();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let words = message.content.split(" ");
    let print_date = true;
    let print_time = true;
    
    // help option
    if (words.indexOf("-h") > 0) {
      let embed = new MessageEmbed();
      let title = "HELP";
      let description =
        "```!dat [OPTION]...```" +
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
      const msg = await message.reply(
        "**Date:** " +
          days[date.getDay()] +
          ", " +
          date.getDate().toString() +
          "." +
          (date.getMonth() + 1).toString() +
          "." +
          date.getFullYear().toString()
      );
      msg.react("📅");
    }
    // print time
    if (print_time) {
      const msg = await message.reply(
        "**Time:** " +
          date.getHours().toString() +
          ":" +
          date.getMinutes().toString() +
          ":" +
          date.getSeconds().toString()
      );
      msg.react("⏰");
    }
  },
} as ICommand;
