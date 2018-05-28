const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('emoji', 'Emoji');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands")

bot.login('NDUwNDc3NTk1NzE3NTMzNjk2.De0B0Q.m-v9ptlenxKSKQxxZSJqWsekEVQ');