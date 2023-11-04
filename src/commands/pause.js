
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languageFile = require('../language.json')
module.exports = {
  data: new SlashCommandBuilder()
    .setName("pause")
    .setDescription("Pause Music"),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
      const language = db.fetch(`language_${interaction.user.id}`)
if (!language) {
      const queue = client.distube.getQueue(interaction);
         if (!queue) return interaction.followUp(`There is no song on the list!`)
         if (queue.paused === true) return interaction.followUp("The music is already stopped.")

interaction.followUp({content: "Successfully paused your music."})
client.distube.pause(interaction);
}

 }
}
