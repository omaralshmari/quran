const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "!";
client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
if (message.content === "test") {
  var ms = 600000;
      var interval = setInterval (function () {
        message.channel.send("سبحان الله , الحمدالله,لا إله الا الله, الله اكبر")
      }, ms); 
    }
});


client.login(process.env.BOT_TOKEN); 
