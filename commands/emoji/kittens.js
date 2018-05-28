const commando = require('discord.js-commando');

class KittensCommand extends commando.Command{
    constructor(client) {
        super(client, {
            name: 'kittens',
            group: 'emoji',
            memberName: 'kittens',
            description: 'Summons the spirit of Gildor',
        });
    }
    
    async run(message, args){
        message.channel.sendMessage('<:gildor:448639815706214400><:gildor:448639815706214400><:gildor:448639815706214400><:gildor:448639815706214400><:gildor:448639815706214400>');
    }

}

module.exports = KittensCommand;