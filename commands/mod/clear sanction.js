const db = require("quick.db")
module.exports = {
  name: "clear-sanctions",
  category: "modération",
  usage: "clear-sanctions <@utilisateur>",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
    }
    
    if(message.mentions.users.first().bot) {
    }
    
    if(message.author.id === user.id) {
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) warnings = 0;
    
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`:white_check_mark: Tout vos avertissements on été réinitialiser par ${message.author.username} sur ${message.guild.name}`)
    await message.channel.send(`${warnings} sanction supprimée pour l'utilisateur ${message.mentions.users.first().username}`)  
}
}
