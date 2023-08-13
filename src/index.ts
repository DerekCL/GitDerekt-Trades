import * as Discord from "discord.js";
const client: Discord.Client = new Discord.Client({
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

client.on("message", (msg: Discord.Message) => {
  if (msg.content.startsWith("!echo")) {
    // Remove the command and send the remaining text back
    const textToSend: string = msg.content.replace("!echo ", "");
    msg.channel.send(textToSend);
  }
});

client.login(
  "MTE0MDMyMDUwMDQzMDY4MDE1NQ.Gnc6ho.bRUqoCqaRHYxsQnG5Iy-F9TFun4EuuDSQImjXQ"
);
