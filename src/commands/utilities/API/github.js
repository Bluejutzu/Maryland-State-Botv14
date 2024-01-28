/** @format */

import { SlashCommandBuilder } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("github")
    .setDescription("Get a github Repo")
    .addStringOption((option) =>
      option
        .setName("repo")
        .setDescription("Usage: {user}/{repo_name} Ex: Bluejutzu/Dashboard")
    ),
  run: () => {},
  options: {
    devOnly: true,
  },
};
