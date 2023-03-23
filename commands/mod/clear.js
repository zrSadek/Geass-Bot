const db = require("quick.db")
const { default_prefix } = require("../../config.json")

module.exports = {
  name: "clear",
  category: "modération",
  usage: "clear <nombre de messages>",
  description: "Supprime le nombre de messages voulu",
  run: async (client, message) => {
   let args = message.content.trim().split(/ +/g);

      if(args[1]){
      if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99){}
        message.channel.bulkDelete(args[1])
        message.delete({ timeout: 2000 })
}
}
}