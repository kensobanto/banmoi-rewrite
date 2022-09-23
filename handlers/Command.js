const { MissingArguments, OwnerOnly, UserMissingPerms, BotMissingPerms } = require("../models/errors");

async function execute_command(message) {
    
    if (!message.member) message.member = await message.guild.fetchMember(message);

    let banmoi = message.client;

    let args = message.content.slice(banmoi.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length == 0) return;
    let command = banmoi.commands.get(cmd);
    if (!command) command = banmoi.commands.get(banmoi.aliases.get(cmd));

    if (command.ownerOnly) {
        if(!banmoi.ownerid.includes(message.author.id)) throw OwnerOnly(message)
    }

    if (command.args === true) {
        if (args === []) throw MissingArguments(message);
    }

    if (!message.member.permissions.has(command.userPerms)) throw UserMissingPerms(message, command.userPerms)

    if (!message.guild.me.permissions.has(command.clientPerms)) throw BotMissingPerms(message, command.clientPerms)

    await command.run(message, args)

}

module.exports = {
    execute_command
}