const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rps')
		.setDescription('Play Rock Paper Scissors!'),

	async execute(interaction) {
		const rock = new ButtonBuilder()
			.setCustomId('rock')
			.setLabel('rock')
			.setStyle(ButtonStyle.Secondary)
			.setEmoji('🪨');

		const paper = new ButtonBuilder()
			.setCustomId('paper')
			.setLabel('paper')
			.setStyle(ButtonStyle.Secondary)
			.setEmoji('📝');

		const scissors = new ButtonBuilder()
			.setCustomId('scissors')
			.setLabel('scissors')
			.setStyle(ButtonStyle.Secondary)
			.setEmoji('✂️');

		const row = new ActionRowBuilder()
			.addComponents(rock, paper, scissors);

		await interaction.reply({
			content: 'Choose what to play!',
			components: [row],
		});

		
	},
};
