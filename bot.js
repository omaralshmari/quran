const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "!";
client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
if (message.content === "test") {
  var ms = 60000;
      var interval = setInterval (function () {
        message.channel.send("لا إله الا الله, سبحان الله, الحمدالله, الله اكبر")
      }, ms); 
    }
});


client.login(process.env.BOT_TOKEN); 
