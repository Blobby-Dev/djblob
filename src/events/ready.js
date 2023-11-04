const { ActivityType } = require("discord.js")
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
 	process.on('unhandledRejection', err => console.log(err))
}};
