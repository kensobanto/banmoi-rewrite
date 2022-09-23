const { Banmoi } = require("./models/client");

const { add_commands, add_events } = require("./handlers/CommandLoader");

const banmoi = new Banmoi(
	{
		partials: ["MESSAGE", "CHANNEL", "REACTION"],
		shards: 'auto',
		intents: 131071,
		allowedMentions: { parse: ['users', 'roles'], repliedUser: true }
	}
);

add_commands(banmoi);
add_events(banmoi);

banmoi.login(banmoi.bot_token);
