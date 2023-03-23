const { MessageEmbed } = require('discord.js');
const db = require(`quick.db`)
const config = require("../../config.json")

module.exports = {
  name: "theme",
  run: async (client, message, args) => {
    let serveurid = message.guild.id;
    let owner = db.fetch(`owner_${message.author.id}`)
    if(owner === 0 || owner === null || message.author.id !== config.OWNER_ID) return 
        if (!args[0]) {
          return 	
        } else
        db.set(`config_couleur_${serveurid}`, args[0])
        let color = db.fetch(`config_couleur_${serveurid}`)
        return message.channel.send(`Nouvelle couleur \`${color}\``)
    }
}
