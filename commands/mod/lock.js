const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "lock",
  category: "modération",
  description: "Vérouille tout les channels du serveur ",
  usage: "lock on/off",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return
    }
        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                }).then(() => {
                    channel.setName(channel.name += `・verrouillé`)
                })
            })
            return message.channel.send('Ce salon est maintenant fermé');
        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                }).then(() => {
                        channel.setName(channel.name.replace('・verrouillé', ''))
                    }
                )
            })
            return message.channel.send('Ce salon est maintenant ouvert')
        }
    }
}
