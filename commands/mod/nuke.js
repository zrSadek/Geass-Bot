const db = require("quick.db")
module.exports = {
  name: "nuke",
  aliases: ["purge","renew"],
  run: async (client, message, args) => {
    if(!message.guild) return;
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    message.channel.clone({reason: ` ${message.author.tag} (${message.author.id}) salon recréé`}).then(c => c.setPosition(message.channel.position) && c.send(` ${message.author} purge effectué`))
    message.channel.delete() 
}
}
