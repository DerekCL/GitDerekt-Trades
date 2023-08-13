import { Client, Message } from "discord.js";

// dotenv is a package that allows us to store sensitive information in a .env file
require("dotenv").config();

const client: Client = new Client({
  intents: [
    "Guilds",
    "GuildMessages",
    "DirectMessages",
    "GuildMembers",
    "GuildMessageReactions",
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("message", (msg: Message) => {
  if (msg.content.startsWith("!echo")) {
    // Remove the command and send the remaining text back
    const textToSend: string = msg.content.replace("!echo ", "");
    msg.channel.send(textToSend);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
