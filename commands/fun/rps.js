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

		const botRPSChoice = Math.floor(Math.random() * 3);
		const collectorFilter = i => i.user.id === interaction.user.id;

		try {
			// const rowOnClick = new ActionRowBuilder().addComponents(rock.setDisabled(true),
			// 	paper.setDisabled(true),
			// 	scissors.setDisabled(true));
			// response.update({
			// 	content: 'Choose what to play!',
			// 	components: [rowOnClick],
			// });
			const confirmation = await response.awaitMessageComponent({ filter : collectorFilter, time: 60_000 });

			switch (confirmation.customId) {
			case 'rock':
				switch (botRPSChoice) {
				case 0:
					confirmation.update({ content: 'You tied!', components: [] });
					break;
				case 1:
					confirmation.update({ content: `You lost! You chose ${confirmation.customId} and the bot chose paper!`, components: [] });
					break;
				case 2:
					confirmation.update({ content: `You win! You chose ${confirmation.customId} and the bot chose scissors!`, components: [] });
					break;
				}
				break;
			case 'paper':
				switch (botRPSChoice) {
				case 0:
					confirmation.update({ content: `You win! You chose ${confirmation.customId} and the bot chose rock!`, components: [] });
					break;
				case 1:
					confirmation.update({ content: 'You tied!', components: [] });
					break;
				case 2:
					confirmation.update({ content: `You lost! You chose ${confirmation.customId} and the bot chose scissors!`, components: [] });
					break;
				}
				break;
			case 'scissors':
				switch (botRPSChoice) {
				case 0:
					confirmation.update({ content: `You lost! You chose ${confirmation.customId} and the bot chose rock!`, components: [] });
					break;
				case 1:
					confirmation.update({ content: `You win! You chose ${confirmation.customId} and the bot chose paper!`, components: [] });
					break;
				case 2:
					confirmation.update({ content: 'You tied!', components: [] });
					break;
				}
				break;
			}

		}
		catch (e) {
			await interaction.reply({ content: 'Please choose more quickly! (less than 1 minute)' });
		}
		// TODO: add the game finishing calculations and output
	},
};
