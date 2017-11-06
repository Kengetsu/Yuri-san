exports.run = async (client, message, args, level) => {
    try
    {
        if(args[0] == "new")
        {
            if(args.length <= 1) throw "You must provide a category name!";

            let newCategory = args[1].toLowerCase();

            if(client.library.has(newCategory)) throw "Category already exists!";

            let template = `
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    let lib = require("../modules/library.js");
    let result = await lib(client.library,"${newCategory}", args, level);
    
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
    name: "${newCategory}",
    category: "Images",
    description: "Serve pics of amazing ${newCategory}.",
    usage: "${newCategory} \\n\\rOptions (Admin only): <add/remove> <url>"
};`;

            let fs = require('fs');
            fs.writeFile(`${__dirname}/${newCategory}.js`,template, (err) => {
                if(err) throw err;

                message.channel.send(`Command ${newCategory} created`);
                return;
            });

        }
        if(args[0] == "remove")
        {
            if(args.length <= 1) throw "You must provide a category name!";

            let category = args[1].toLowerCase();

            if(!client.commands.has(category)) throw "Category doesn\'t exists!";

            let fs = require("fs");

            fs.unlink(`${__dirname}/${category}.js`,  (err) => {
                if(err) throw "Unable to delete file!";
                message.channel.send(`Command ${category} deleted.`);
                return;
            });
        }
    }
    catch (err){
        console.error(args,err);
        message.channel.send(err);
        return;
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Bot Owner"
};

exports.help = {
    name: "library",
    category: "Manager",
    description: "Manage library.",
    usage: "library <new/remove> <category>"
};