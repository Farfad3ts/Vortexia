require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: "hey",
        description: 'Reply with hey!',
    },
    {
        name: "ping",
        description : "pong"
    },
    {
        name: "Addition",
        description: "Additionez 2 nombres",
        options:[
            {
                name: "first-number",
                description:"The first number",
                type: ApplicationCommandOptionType.Number
            }
        ]
    }
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log("Bleep bleep")

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
                ),
            { body: commands }

        )
                console.log("Bleep Bleep")
    } catch (error) {
        console.log(error)
    }

})();
