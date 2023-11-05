const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pp')
		.setDescription('Replies with poopoo!'),
	async execute(interaction) {
		await interaction.reply('poopoo');
	},
};
