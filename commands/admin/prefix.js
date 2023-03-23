const db = require("quick.db")
const { default_prefix } = require("../../config.json")
module.exports = {
  name: "prefix",
  category: "modération",
  usage: "prefix <nouveau prefix>",
  description: "Changer le prefix du bot pour le serveur ",
  run: async (client, message, args) => {
    //PERMISSION
    if(!message.member.hasPermission("ADMINISTRATOR")) {
    }
    
    if(!args[0]) {
    } 
    
    if(args[1]) {
    }
    
    if(args[0].length > 3) {
    }
    
    if(args.join("") === default_prefix) {
      db.delete(`prefix_${message.guild.id}`)
    }
    
    db.set(`prefix_${message.guild.id}`, args[0])
  await message.channel.send(`Mon prefix est maintenant : **${args[0]}**`)
    
  }
}