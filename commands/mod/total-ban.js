const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
const db = require("quick.db")
const { default_prefix } = require("../../config.json")
const config = require("../../config.json")
const pagination = require('discord.js-pagination');
module.exports = {
  name: "total-ban",
  run: async (client, message, args) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.DEFAULT_PREFIX
  }

let color =  db.fetch(`config_couleur_${message.guild.id}`)

if (!message.guild.available) return this.client.logger.info(`Guild "${message.guild.name}" (${message.guild.id}) is unavailable.`);
if (!message.guild.me.hasPermission("BAN_MEMBERS"))  return message.channel.send(
    `Vous devez avoir **BAN_MEMBERS** pour efectuer cette command`)

message.guild.fetchBans()
.then(bans => {
  const obj = bans.map(c => ({
    user: `${c.user.id}: ${c.user.username},`
  }));
  const bList = Array.from(obj);
  if (bList.length < 1) return message.channel.send(`Il n'y a aucun utilisateur banni sur **${message.guild.name}**.`);
  let index = 0;

  const embed = new MessageEmbed()
      .setTitle(`❯ Liste des \`membres ban\` de *${message.guild.name}* (**${++index}**) `)
      .setDescription(`${bList.map(bl => `\`\`\`json\n${bl.user}\`\`\``).join("\n")}`)
      .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
      .setTimestamp()  
      .setColor(color)
 
      message.channel.send(embed)
});

  }
};