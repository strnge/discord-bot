const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quote')
		.setDescription('Outputs a random quote from the list of all time greats'),
	async execute(interaction) {
		const quoteConverter = fs.readFile('./quotes.txt', 'utf-8');
		const quoteArray = quoteConverter.split('\n');
		const outputQuote = quoteArray[Math.random() * quoteArray.length];
		await interaction.reply(outputQuote);
	},
};