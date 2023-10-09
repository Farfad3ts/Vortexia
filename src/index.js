const {Client, IntentsBitField} = require('discord.js')
require("dotenv").config()
const client = new Client({
    intents : [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on("ready", (c) => {
    console.log(`Le client est up sous le nom de ${c.user.username}`)
});

client.on("interactionCreate", interation =>{
    if(!interation.isChatInputCommand()) return;
    if(interation.commandName === "hey")
        interation.reply("Hey!");
    if(interation.commandName === "ping")
        interation.reply(`Pong took ${Math.abs(Date.now() - interation.createdTimestamp)}ms api latency is ${client.ws.ping}ms`)

})

client.login(process.env.TOKEN);