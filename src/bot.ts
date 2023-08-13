import { Client, Message } from "discord.js";
import { Context } from "@azure/functions";

export const startBot = (context: Context) => {
  context.log("Starting Discord bot");

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
    context.log(`Logged in as ${client.user?.tag}!`);
  });

  client.on("message", (msg: Message) => {
    if (msg.content.startsWith("!echo")) {
      const textToSend: string = msg.content.replace("!echo ", "");
      msg.channel.send(textToSend);
    }
  });

  client.login(process.env.DISCORD_BOT_TOKEN);

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: "Bot started successfully!",
  };
};
