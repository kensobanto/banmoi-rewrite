class CommandError {
    constructor(discord_message) {
        this.discord_message = discord_message
        this.name = "CommandError"
    }

    get name() {
        return this.name
    }
}

class MissingArguments extends CommandError {
    constructor(discord_message) {
        super(discord_message)
        this.name = "MissingArguments"
    }
}

class OwnerOnly extends CommandError {
    constructor(discord_message) {
        super(discord_message)
        this.name = "OwnerOnly"
    }
}

class MissingPerms extends CommandError {
    constructor(discord_message, missing_perms) {
        super(discord_message)
        this.missing_perms = missing_perms
        this.name = "MissingPerms"
    }

    get missing_perms() {
        return this.missing_perms
    }
}

class UserMissingPerms extends MissingPerms {
    constructor(discord_message, missing_perms) {
        super(discord_message, missing_perms)
        this.name = "UserMissingPerms"
    }
}

class BotMissingPerms extends MissingPerms {
    constructor(discord_message, missing_perms) {
        super(discord_message, missing_perms)
        this.name = "BotMissingPerms"
    }
}

module.exports = {
    CommandError,
    MissingArguments,
    OwnerOnly,
    UserMissingPerms,
    BotMissingPerms
}