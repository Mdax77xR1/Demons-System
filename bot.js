
const Discord = require('discord.js');
const fs = require("fs"); 
const jimp = require('jimp');   
var prefix = "+"
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity("",{type: 'watching'})
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('ready', () => {
    console.log(`----------------`);
       console.log(`Welcome Mdax`);
         console.log(`----------------`);
       console.log(`ON ${client.guilds.size} Servers '     xR1Server' `);
     console.log(`----------------`);
   console.log(`Logged in as ${client.user.tag}!`);










client.on('message' , message => {
if (message.content === '$help') {
           if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
         let embed = new Discord.RichEmbed()

      .setThumbnail(message.author.avatarURL)    
      .addField("**۩ஜ▬▬▬▬▬▬✦ (أوامر البوت (عام✦▬▬▬▬▬▬ஜ۩**","** **")
    .addField("**۩ஜ▬▬▬▬▬▬✦ (أوامر البوت (عام✦▬▬▬▬▬▬ஜ۩**","** **")
     .addField("**❖ +ban**","**لتبنيد شخص من السيرفر**")
      .addField("**❖ +kick**","**لطرد شخص من السيرفر**")
      .addField("**❖ +mute**","**لإعطاء ميوت لشخص**")
      .addField("**❖ +say**","**يردد كلامك **")
      .addField("**❖ +bc**","**لإرسال برودكاست لجميع اعضاء السيرفر**")
      .addField("**❖ +new**","**لفتح تذكره**")
      .addField("**❖ +close**","**لإقفال التذكره**")
      .addField("**❖ +server**","**معلومات عن السيرفر**")
      .addField("**❖ +ping**","**لرؤية بنق البوت**")
      .addField("**❖ +SetName**","**لتغيير اسم البوت**")
      .addField("**❖ +Stream**","**لتغيير ستريمنق البوت**")
      .addField("**❖ +Playing**","**لتغيير بلاينق البوت**")
      .addField("**❖ +Listening**","**لتغيير لستنق البوت**")
      .addField("**❖ +Watching**","**لتغيير واتشنق البوت**")
      .addField("**❖ +ccolor<Number>**","**لصنع الوان مع عددهم**")
      .addField("**❖ +setcolor<Number>**","**لإختيار اللون**")
      .addField("**۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩**","** **")

    .setColor('#e9ab26')
  message.author.sendEmbed(embed);
    }
});
 
  







client.on('message' , message => {
if (message.content === '$inv') {
           if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
         let embed = new Discord.RichEmbed()

      .setThumbnail(message.author.avatarURL)    
      .addField("**۩ஜ▬▬▬▬▬▬✦ (أوامر البوت (عام✦▬▬▬▬▬▬ஜ۩**","** **")
      .addField("**۩ஜhttps://discordapp.com/api/oauth2/authorize?client_id=500704774677856266&permissions=8&scope=botஜ۩**","** **")
      .addField("**۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩**","** **")

    .setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
  
















client.login(process.env.BOT_TOKEN);
