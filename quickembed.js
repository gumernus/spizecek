const Discord = require("discord.js");
function quickEmbed (message ,emoji, nadpis, text){
    const Embed = new Discord.MessageEmbed()
        .setColor("#00ff6b")
        .setTitle(`${emoji} | ${nadpis}`)
        .setDescription(`${text}`)
        .setFooter("Špízeček | Made By Tavarx");
    message.channel.send(Embed);
}

module.exports= {
    quickEmbed
}