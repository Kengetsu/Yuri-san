exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    let lib = require("../modules/library.js");
    let result = lib(client.library,"loli", args, level)

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
    name: "loli",
    category: "Images",
    description: "Serve pics of amazing loli.",
    usage: "loli \n\rOptions (Admin only): <add/remove> <url>"
};
