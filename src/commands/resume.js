
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languageFile = require('../language.json')
module.exports = {
  data: new SlashCommandBuilder()
    .setName("resume")
    .setDescription("Resume Music"),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
      const queue = client.distube.getQueue(interaction);
      const language = db.fetch(`language_${interaction.user.id}`)
      if (queue.paused === false) return interaction.followUp("The music is already playing.")
if (!language) {
         if (!queue) return interaction.followUp(`There is no music on the list yet.`)
interaction.followUp({content: "Successfully resumed your music"})
queue.resume()

}


 }
}
