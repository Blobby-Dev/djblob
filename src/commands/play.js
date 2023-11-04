
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languageFile = require('../language.json')
module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Play Music")
    .addStringOption(option => option.setName("name").setDescription("Song Name?").setRequired(true)),
    run: async (client, interaction, track) => {
      await interaction.deferReply().catch(err => {})
      const string = interaction.options.getString("name")
      let voiceChannel = interaction.member.voice.channel
      const language = db.fetch(`language_${interaction.user.id}`)
      if (!language) {
if (!voiceChannel) return interaction.followUp({content: "Join a voice channel!"})
const queue = client.distube.getQueue(interaction);

client.distube.voices.join(voiceChannel)

await client.distube.play(interaction.member.voice.channel, string);
const tracks = await client.player.search(string, {
    requestedBy: interaction.user
}).then(x => x.tracks[0]);
if (!tracks) return interaction.followUp("🎵 | Music started.")
const embed = new Discord.EmbedBuilder()
.addFields({name: "Title", value: `${tracks.title}`, inline: true})
.addFields({name: "Author", value: `${tracks.author}`, inline: true})
.addFields({name: "Time", value: `${tracks.duration}`, inline: true})
.addFields({name: "Views", value: `${tracks.views}`, inline: true})
.addFields({name: "Video", value: "[Click]("+tracks.url+")", inline: true})
.setColor("Aqua")
const row = new Discord.ActionRowBuilder()
.addComponents(

new Discord.ButtonBuilder()
  .setLabel("Discord Server")
  .setStyle(Discord.ButtonStyle.Link)
  .setURL("https://discord.gg/RWSEj6JrjJ")
)

await interaction.followUp({embeds: [embed], components: [row]}).then(messages => {
db.set(`music_${interaction.guild.id}`, { kanal: interaction.channel.id, mesaj: messages.id, muzik: string, user: interaction.user.id, başlık: tracks.title, yükleyen: tracks.author, süre: tracks.duration, görüntülenme: tracks.views, thumb: tracks.thumbnail, video: tracks.url})
})
}

}
}
