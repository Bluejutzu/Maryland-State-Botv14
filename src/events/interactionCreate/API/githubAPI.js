/** @format */

import { fetch } from "undici";
import { EmbedBuilder } from "discord.js";

module.exports = async (interaction, client) => {
  if (!interaction.isChatInputCommand()) return;
  const { commandName } = interaction;
  try {
    if (commandName === "github") {
      await interaction.deferReply();
      const ref = interaction.options.getString("repo");

      const request = await fetch(`https://api.github.com/repos/${ref}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await request.json();
      console.log(data)
    }
  } catch (error) {
    console.log(`Error at interaction: ${error}`)
  }
};
