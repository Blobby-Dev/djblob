
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languageFile = require('../language.json')
module.exports = {
  data: new SlashCommandBuilder()
    .setName("slowed")
    .setDescription("Slowed Effect"),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
      const queue = client.distube.getQueue(interaction);
      const language = db.fetch(`language_${interaction.user.id}`)
if (!language) {
         if (!queue) return interaction.followUp(`There is no song on the list yet.`)
interaction.followUp({content: "The song was successfully slowed down."})
queue.filters.add("vaporwave")
}

 }
}
