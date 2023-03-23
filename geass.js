const { token, DEFAULT_PREFIX } = require("./config.json");
const config = require("./config.json");
const { badwords } = require("./data.json") 
//const { config } = require("dotenv");
const fs = require("fs")
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: true 
 
});

const db = require("quick.db");
const { addexp } = require("./handlers/xp.js");
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
const DBL = require("dblapi.js");


["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on('ready', () => {
console.clear()
console.log(`${config.name} [BETA]・ON`)
client.user.setActivity(`${config.name}・[BETA]`,  { type:"STREAMING", url: "https://www.twitch.tv/GeassManager" })
})

client.on("guildCreate", guild => {
db.set(`config_autogban_${guild.id}`, 'off')
db.set(`config_antilien_${guild.id}`, 'off')
db.set(`config_antiinsulte_${guild.id}`, 'off')

})

client.on("guildDelete", guild => {
db.set(`config_autogban_${guild.id}`, 'off')
db.set(`config_antilien_${guild.id}`, 'off')
db.set(`config_antiinsulte_${guild.id}`, 'off')

})



function is_url(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if(regexp.test(str)) {
    return true;
  } else {
    return false;
  }
  
}



client.on("message", async message => {
  if (message.author.bot) return;

  



  

  	var msgguild = message.guild
var antilienmode = db.fetch(`config_antilien_${msgguild.id}`)
	if(antilienmode === 'on') {
    if(is_url(message.content) === true) {

      let whitelist = db.fetch(`whitelist_${message.guild.id}_${message.author.id}`)
      let owner =  db.fetch(`owner_${message.author.id}`)


      if(whitelist == 1 || owner !== 0 || owner !== null || message.author.id !== config.OWNER_ID) {
        return
      } else {
      message.delete()
      return message.channel.send("**ANTI-PUB** **»** Les liens ne sont pas autorisés ici").then(m => m.delete({ timeout: 2000 }));
    }
    }
    }
    
    
    
    
    let confirm = false;
    var i;
    for(i = 0;i < badwords.length; i++) {
      
      if(message.content.toLowerCase().includes(badwords[i].toLowerCase()))
        confirm = true;
      
    }
    var antiinsultemode = db.fetch(`config_antiinsulte_${msgguild.id}`)
    if (antiinsultemode === 'on') {
    if(confirm) {

      let whitelist = db.fetch(`whitelist_${message.guild.id}_${message.author.id}`)
      let owner =  db.fetch(`owner_${message.author.id}`)


      if(whitelist == 1 || owner !== 0 || owner !== null || message.author.id !== config.OWNER_ID) {
        return
      } else {

      message.delete()
      return message.channel.send("**ANTI-INSULTE** **»** Se mot n'est pas autorisé").then(m => m.delete({ timeout: 2000 }));
    }   
    } 
    
    
  }
  
  
  if (!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = DEFAULT_PREFIX;

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

let cmdx = db.get(`cmd_${message.guild.id}`)

if(cmdx) {
  let cmdy = cmdx.find(x => x.name === cmd)
  if(cmdy) message.channel.send(cmdy.responce)
}

  
  let command = client.commands.get(cmd);
  
  if (!command) command = client.commands.get(client.aliases.get(cmd));



  
  if (command) command.run(client, message, args);

  return addexp(message);
});

const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczNzM0ODAyNDgyODY5MDQ2MiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA5MjcyMzE2fQ.4T4j6C0hak7jmAD1psEZXkIGaHLoJgQ0y7fnYwJDEow', client);

dbl.on('posted', () => {
})

client.login(token);