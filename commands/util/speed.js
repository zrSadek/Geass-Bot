const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
const db = require("quick.db")
const { default_prefix } = require("../../config.json")
const config = require("../../config.json")
const pagination = require('discord.js-pagination');
module.exports = {
  name: "speed",
  run: async (client, message, args) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.DEFAULT_PREFIX
  }

let color =  db.fetch(`config_couleur_${message.guild.id}`)

const Embed = new MessageEmbed()
.setTitle("**__❯ Temps de réponse__**")
.addField('**Temps de réponse du bot**' , `${client.ws.ping}ms`)
.addField('**Temps de réponse de l\'API**' , `${message.createdAt - message.createdAt + "ms"}`)
.setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
.setTimestamp()  
.setColor(color)
message.channel.send(Embed)

  }
};