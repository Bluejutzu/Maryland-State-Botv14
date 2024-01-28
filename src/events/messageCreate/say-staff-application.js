/** @format */

const { Message } = require("discord.js");

module.exports = (message, client) => {
  const lowerCaseContent = message.content.toLowerCase();
  const blChannelIds = [
    1172619345663381545, 1172813679394304072, 1172615606621716543,
    1172895426131808276, 1173266285518397550, 1176944641795424307,
  ];

  if (blChannelIds.includes(blChannelIds)) return;

  if (
    lowerCaseContent.includes("how can I join staff") ||
    lowerCaseContent.includes("how can I become staff")
  ) {
    message.reply({
      content:
        "You can join the staff team by meeting the requirements found [here](https://discord.com/channels/1124971431093088266/1176944619766951998/1176945293397336199)",
      ephemeral: true,
    });
  } else return;
};
