exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    let lib = require("../modules/library.js");
    let result = await lib(client.library,"waifu", args, level);

    if(!result) return false;
    message.channel.send(result);

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "waifu",
    category: "Images",
    description: "Serve pics of amazing waifu.",
    usage: "waifu \n\rOptions (Admin only): <add/remove> <url>"
};
