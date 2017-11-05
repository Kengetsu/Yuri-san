module.exports = (library, category, args, level) => {
    try {
        let currentLib = library.get(category) ? library.get(category) : [];
        if(level >= 4){
            if(args[0] === "add"){
                console.log(args);
                if(args.length <= 1) throw "You must provide an image to add!";

                let img;

                if(args[1].match(/(.jpg|.png|.gif)$/i)) {
                    img = args[1];
                }
                else{
                    throw "Invalid image url. Must end in .png, .jpg, or .gif";
                }

                if(currentLib.indexOf(img) !== -1) throw "Image already exists!";

                currentLib.push(args[1]);

                library.set(category, currentLib);

                return ("Image added!");
            }
            else if(args[0] === "remove"){
                if(args.length <= 1) throw "You must provide an image to remove!";

                let img = args[1];

                if(currentLib.indexOf(img) === -1) throw "That image doesn't exist!";
                currentLib.splice(currentLib.indexOf(img),1);

                library.set(category, currentLib);

                return ("Image removed!");
            }
        }
        if(currentLib.length !== 0){
            return currentLib.random();
        }
        else{
            return `No ${category} found! QQ`;
        }

    }
    catch(err)
    {
        console.error(err);
        return "Something went wrong! QQ";
    }
}