/** @format */

import { EmbedBuilder } from "discord.js";
import { fetch } from "undici";

module.exports = async (interaction, client) => {
  if (!interaction.isChatInputCommand()) return;
  const { commandName } = interaction;
  try {
    if (commandName === "whois") {
      await interaction.deferReply();

      const user = interaction.options.getUser("user");
      const userId = user.id;

      const response = await fetch(
        `https://discord.com/api/v10/guilds/1168532822563233847/members/${userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bot ${process.env.TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);

      let nitroType;
      if (data.user.premium_type == 3) {
        nitroType = "Nitro Basic";
      } else if (data.user.premium_type == 2) {
        nitroType = "Nitro";
      } else if (data.user.premium_type == 1) {
        nitroType = "Nitro Classic";
      } else if (data.user.premium_type == 0) {
        nitroType = "No nitro on this account";
      }

      const memberEmbed = new EmbedBuilder()
        .setColor("Blurple")
        .setTitle(`@${user.username}`)
        .addFields({
          name: "User Information",
          value: `Mention: ${user}\ Display Name: ${user.username}`,
        })
        .addFields("Roles", user.roles.map((r) => `${r}`).join(" | "), true);

      interaction.reply({ embeds: [memberEmbed] });
    }
  } catch (error) {
    console.log(error);
  }
};
