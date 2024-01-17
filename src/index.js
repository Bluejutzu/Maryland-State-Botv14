/** @format */

require("dotenv/config");
const { Client, GatewayIntentBits, Events } = require("discord.js");
const { CommandKit } = require("commandkit");
const Bans = require("./models/bans.js");
const keep_alive = require('./keep_alive.js')
const express = require("express");
const { port } = require("./config.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

new CommandKit({
  client,
  devGuildIds: ["1168532822563233847", "1124971431093088266"],
  devUserIds: ["368709086008573952", "953708302058012702"],
  eventsPath: `${__dirname}/events`,
  commandsPath: `${__dirname}/commands`,
  bulkRegister: true,
});
client.once(Events.ClientReady, (readyClient) => {
  Bans.sync();
  console.log(`${client.user.username} is ready!`);
});

const app = express();

app.get("/", (request, response) => {
  return response.sendFile("index.html", { root: "." });
});

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);

client.login(process.env.TOKEN);
