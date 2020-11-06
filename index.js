const { Client, Intents } = require("discord.js");
const Events = require("./Lib/Handlers/EventHandler");
const conf = require("./Settings/conf.json");
console.clear();
/** BOT CONSTRUCTOR */
const client = new Client({
    // Add whatever you need here.
});

/** PARTS OF YOUR EVENTS FOLDER */
client.on("ready", () => Events.ready(client));
client.on("message", (message) => Events.message(client, message));


/** AUTHENTICATE TO DISCORDS v7 (as of current) GATEWAY */
client.login(conf.Discord.token);


/** NODE PROCESS HANDLING */
process.on('unhandledRejection', (error) => {
    console.error("[UNHANDLED REJECTION] " + (error.stack == undefined ? error : error.stack));
});

process.on('uncaughtException', (error) => {
    console.log("[UNCAUGHT EXCEPTION] " + (error.stack == undefined ? error : error.stack));
});