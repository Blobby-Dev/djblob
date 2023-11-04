
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languageFile = require('../language.json')
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Ping pong"),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
    const embed = new Discord.EmbedBuilder()
    .setDescription(client.ws.ping + " ms")
    .setColor("Aqua")
    return interaction.followUp({embeds: [embed]})
 }
}
