
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
if (message.content === '+help') {
           if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
         let embed = new Discord.RichEmbed()

      .setThumbnail(message.author.avatarURL)    
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

    .setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
  
 



























    client.on('message', message => {
      var prefix = "+"
      if (message.author.x5bz) return;
      if (!message.content.startsWith(prefix)) return;
    
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
    
      let args = message.content.split(" ").slice(1);
    
      if (command == "ban") {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
             
      if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
      let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
      if(!reason) return message.reply ("**Write A Reason**");
      if (!message.guild.member(user)
      .bannable) return message.reply("**I Cant BAN SomeOne High Than My Rank**");
    
      message.guild.member(user).ban(7, user);
    
      const banembed = new Discord.RichEmbed()
      .setAuthor(`BANNED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
      .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
      .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
      message.channel.send({
        embed : banembed
      })
    }
    });
    
client.on('message', message => {
	var prefix = "+"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**Write A Reason**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**I Cant Kick SomeOne High Than My Rank**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', message => {
  var prefix = "+";
          if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**This Command Only For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You Dont Have perms** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "Demons Bot";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**Write Some Things To Broadcast**');message.channel.send(`**Are You Sure \nThe Broadcast: ** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent To __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
message.guild.members.forEach(m => {

var bc = new
   Discord.RichEmbed()
   .setColor('RANDOM')
   .setTitle('Broadcast')
   .addField('Server', message.guild.name)
   .addField('Sender', message.author.username)
   .addField('Message', args)
   .setThumbnail(message.author.avatarURL)
   .setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

client.on('message' , message => {
  var prefix = "+";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });


 client.on('message', message => {
  var prefix ="+";
if(message.content.startsWith("+server")){
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("👥 Members ",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("** 🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});










var prefix = "+";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
    message.channel.send(`Hoold on!`).then(m => {
    m.edit(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);
    });
}

if (message.content.toLowerCase().startsWith(prefix + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Team** will be here soon to help.`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `close`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

    message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '-confirm', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}

});



















client.on('message', ra3d => {
  var prefix = "+";
                          let args = ra3d.content.split(" ").slice(1).join(" ")
  if(ra3d.content.startsWith(prefix + 'ccolors')) {
      if(!args) return ra3d.channel.send('`How Many Colors??`');
               if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('**You Dont Have Permission `MANAGE_ROLES`**'); 
                ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                    setInterval(function(){})
                      let count = 0;
                      let ecount = 0;
            for(let x = 1; x < `${parseInt(args)+1}`; x++){
              ra3d.guild.createRole({name:x,
                color: 'RANDOM'})
                }
              }
         });







const adminprefix = "+";
const devs = ['520703606081585152'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'SetPlaying')) {
  client.user.setGame(argresult);
} else 
  if (message.content.startsWith(adminprefix + 'SetName')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
} else
  if (message.content.startsWith(adminprefix + 'SetAvatar')) {
client.user.setAvatar(argresult);
      } else     
  if (message.content.startsWith(adminprefix + 'Watching')) {
        if (!devs.includes(message.author.id)) return;
  client.user.setActivity(argresult, {type:'WATCHING'});
  } else
  if (message.content.startsWith(adminprefix + 'Listening')) {
        if (!devs.includes(message.author.id)) return;
  client.user.setActivity(argresult , {type:'LISTENING'});
  } else    
if (message.content.startsWith(adminprefix + 'Streaming')) {
      if (!devs.includes(message.author.id)) return;
  client.user.setGame(argresult, "https://www.twitch.tv/Mdax77x");
}
});









client.login(process.env.BOT_TOKEN);
