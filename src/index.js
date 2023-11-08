const {Client, IntentsBitField, GuildEmoji, Emoji} = require('discord.js');
const { Line3 } = require('three');
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
    if(interation.commandName == "addition"){
        const number1 = interation.options.get('premiernombre').value
        const number2 = interation.options.get('deuxiemenombre').value
        interation.reply(`${number1} + ${number2} = ${number1 + number2}`)
    }

})

client.login(process.env.TOKEN);