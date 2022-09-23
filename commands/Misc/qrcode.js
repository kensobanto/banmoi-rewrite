const { MessageEmbed } = require("discord.js");

async function qr(message, args) {
    const msg = args.join("+");
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setImage(encodeURI(`https://chart.googleapis.com/chart?chl=${msg}&chs=200x200&cht=qr&chld=H%7C0`))
        .setTimestamp();

    message.delete()

    return message.channel.send({embeds:[embed]});
}

module.exports = {
    name: "qr",
    aliases: ["qrcode", "qr-code"],
    category: "misc",
    userPerms: ["SEND_MESSAGES"],
    clientPerms:['EMBED_LINKS'],
    args: true,
    premium: true,
    description: "Gửi lại ảnh QR cho text hoặc ảnh bạn gửi!",
    usage: "qr <nội_dung_tin_nhắn>",
    run: qr
};