import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
import WOKcommands from 'wokcommands'
import path from 'path'

dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('Bot is ready!')
    client.user?.setActivity('!help to see possible commands');
    new WOKcommands(client, {
        commandDir: path.join(__dirname, 'commands'),
        typeScript: true
    })
})

client.on('messageCreate', message => {
    if(message.content === '~shutdown' && message.author.id === process.env.OWNER_ID) {
        message.channel.send("Shutting down...").then(() => {
            client.destroy();
        })
    }
})

client.login(process.env.TOKEN)
