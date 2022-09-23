const { error_handler } = require("../handlers/Error")

async function messageCreate(message) {
    if (message.author.bot) return;

    let banmoi = message.client;
    if (message.content.startsWith(banmoi.prefix)) {
        await error_handler(message)
    }
}

module.exports = {
    name: "messageCreate",
    func: messageCreate
}