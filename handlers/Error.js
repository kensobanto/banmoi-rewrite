const { execute_command } = require("../handlers/Command");
const { CommandError } = require("../models/errors");

async function error_handler(message) {
    try {
        await execute_command(message);
    }
    catch (error) {
        console.log(error)
        if (error.prototype instanceof CommandError === false) console.error(error); // if not command error, throw it again.

        console.error(error.name)

        let error_mapping = {
            MissingArguments: "Lmeo thiếu argument kìa xd",
            OwnerOnly: "Chỉ dành cho owner bot xd",
            UserMissingPerms: `Bạn thiếu quyền ${error.missing_perms}`,
            BotMissingPerms: `Bot thiếu quyền ${error.missing_perms} lmao`
        }

        error.discord_message.channel.send(error_mapping[error])
    }
}

module.exports = {
    error_handler
}