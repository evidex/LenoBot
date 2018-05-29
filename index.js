const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('emoji', 'Emoji');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands")

import discordIRC from 'discord-irc';
import config from 'config.json';
discordIRC(config);

bot.login(process.env.BOT_TOKEN);
