const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    // Set custom status + Playing activity
    client.user.setPresence({
        activities: [{ name: "play.sgxnetwork.fun", type: ActivityType.Playing }],
        status: "dnd" // Options: online, idle, dnd, invisible
    });

    console.log("Status & Activity set: Playing 'play.sgxnetwork.fun' and status 'Keeping SGX Network crime-free!'");
});

// Login the bot
client.login(process.env.TOKEN);
