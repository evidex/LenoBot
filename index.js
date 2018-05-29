// discord-irc --config config.json

const discordIRC = require('discord-irc');
const config = require('config.json');
const commando = require('discord.js-commando');
const bot = new commando.Client();

discordIRC(config);

bot.registry.registerGroup('emoji', 'Emoji');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands")

bot.login(process.env.NDUwNDc3NTk1NzE3NTMzNjk2.De0B0Q.m-v9ptlenxKSKQxxZSJqWsekEVQ);
