var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "economy",
    description: "",
    usage: "1) m/economy [module name]\n2) m/feconomy[command (name or alias)]",
    example: "1) m/ec\n2) m/fn\n3) m/ec",
    aliases: ['ec']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

if(message.content.toLowerCase() === `${prefix}economy`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)
    .setAuthor("<a:money:908685366184271923> - economy commands")
    
    .setThumbnail("https://cdn.discordapp.com/emojis/910093090671448134.png?size=100")

    .setDescription (`My Prefix In This Server is <a:settings:908685063330353232> \`${prefix}\``)
    
   .addField(`ㅤ`, `
> <a:money:908685366184271923> addmoney
> <a:money:908685366184271923> removemoney
> <a:money:908685366184271923> balance
> <a:money:908685366184271923> beg
> <a:money:908685366184271923> buy
> <a:money:908685366184271923> daily
> <a:money:908685366184271923> weekly
> <a:money:908685366184271923> deposit
> <a:money:908685366184271923> leaderboard
> <a:money:908685366184271923> give
> <a:money:908685366184271923> profile
> <a:money:908685366184271923> rob
> <a:money:908685366184271923> roulette
> <a:money:908685366184271923> sell
> <a:money:908685366184271923> setbackground
> <a:money:908685366184271923> setinfo
> <a:money:908685366184271923> slots
> <a:money:908685366184271923> shop
> <a:money:908685366184271923> withdraw
> <a:money:908685366184271923> work`)

    .setImage("https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
    
   .setTimestamp()
    

message.channel.send(log);
}
}
}