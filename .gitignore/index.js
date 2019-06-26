const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Aylif, <help");
    console.log("Le bot à bien été connecté");
});

bot.login("NTkzMjU0NDgwMzA1NDU1MTE0.XRNWlg.gsfcTXV3pKbldmcSXSi-v0ylWPA");
