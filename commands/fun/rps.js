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

		const response = await interaction.reply({
			content: 'Choose what to play!',
			components: [row],
		});

		const botRPSChoice = Math.floor(Math.random() * 11);
		const collectorFilter = i => i.user.id ===interaction.user.id;

		try {
			switch(){
				case '🪨':
					//blah
					break;
				case '📝':
					//blah
					break;
				case '✂️':
					//blah
					break;
			}
		}
		catch(e){
			
		}

		// TODO: add the game finishing calculations and output
	},
};
