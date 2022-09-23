const { Client, Collection } = require('discord.js')
const fs = require("fs")

class Banmoi extends Client {

    config = require('../config.json');

    prefix = this.config.PREFIX;
    bot_token = this.config.DISCORD_TOKEN;
    owner_ids = this.config.OWNER_IDS;

    commands = new Collection();
    aliases = new Collection();
    categories = fs.readdirSync("./commands/");
    interactions = new Collection()
    slashCommands = new Collection();
    events = new Collection();
    snipes = new Map();

}

module.exports = {
    Banmoi
}