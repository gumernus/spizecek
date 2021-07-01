const Discord = require("discord.js");
const client = new Discord.Client();
const {badwords} = require("./badwords")
const {quickEmbed} = require("./quickembed")

client.on("ready", () => {
console.log(client.user.username, "is online")
})

client.on("message", (message) => {
if(message.author.bot) return;
if(badwords.some(badword=>message.content.toLowerCase().includes(badword))){
    messageLower = message.content.toLowerCase();
    const result = badwords.filter(word => messageLower.includes(word));
    message.delete()
    quickEmbed(message, "⛔️", "Varování", `${message.author.toString()} pozor slovo ` + result.toString().slice(0, -2)+"**" + " je zde zakázáno!")
  }
})

client.login();
