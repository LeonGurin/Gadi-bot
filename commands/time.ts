import { ICallbackObject, ICommand } from "wokcommands";

export default {
  category: "Time",
  name: "time",
  description: "Get time and date.",

  permissions: [],

  callback: ({ message }) => {
    let date = new Date();
    message.reply(date.getDate().toString());
  },
} as ICommand;
