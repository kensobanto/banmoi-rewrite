async function text_length(message, args) {
    message.delete();
    const full_text = args.join(" ");
    if (!full_text)
        return message.channel
        .send("Nhập gì đi chứ 0.0")
        .then(m => m.delete({ timeout: 5000 }).catch(e => {}));
    return message.channel.send(`Độ dài chuỗi từ: \`${full_text.length}\``);
}

module.exports = {
    name: "length",
    category: "misc",
    description: "Độ dài văn bản",
    usage: "length <msg>",
    args: true,
    userPerms: ["SEND_MESSAGES"],
    clientPerms:["SEND_MESSAGES"],
    run: text_length
};