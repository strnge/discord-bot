const { SlashCommandBuilder } = require('discord.js');
const { readFileSync } = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quote')
		.setDescription('Outputs a random quote from the list of all time greats'),

	async execute(interaction) {
		const quoteArray = syncReadFile('./commands/fun/quotes.txt');
		const quoteIndex = Math.floor(Math.random() * quoteArray.length);
		const outputQuote = quoteArray[quoteIndex];
		await interaction.reply({ content: outputQuote });
	},
};


function syncReadFile(filename) {
	const contents = readFileSync(filename, 'utf-8');

	const arr = contents.split(/\r?\n/);

	return arr;
}

