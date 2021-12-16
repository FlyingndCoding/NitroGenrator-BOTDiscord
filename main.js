const keepAlive = require("./server.js")
const Discord = require('discord.js');
const client = new Discord.Client();
const randomstring = require("randomstring");

const prefix = '!';

client.on('message', msg => {

    let args = msg.content.slice(prefix.length).trim().split(' ');

    if (msg.content.startsWith(`${prefix}setup`)) {

        if (!msg.guild.member(client.user).hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR"])) return;
        msg.guild.channels.create(`mining`, 'text').catch(e => { });

    }

    if (msg.content.startsWith(`${prefix}gen`)) {

        msg.delete()

        msg.channel.send("https://discord.gift/" + randomstring.generate(16));

    }


    if (msg.content.startsWith(`${prefix}start`)) {
        if (!msg.guild.member(client.user).hasPermission(["ADMINISTRATOR"])) return;

        msg.delete()

        var interval = setInterval(function () {

            msg.channel.send("https://discord.gift/" + randomstring.generate(16));

        }, 2000);

    }

});

keepAlive()
client.on('ready', async () => {
    console.log('lets mine!')

    let statuses = [
        `||Created By: Professor Puddle||\n||Support Server: vKS3nPkaKx||`,
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {
            type: "PLAYING",
            url: "https://www.twitch.tv/real_twitcher"
        })
    }, 4000)
})

client.login('OTE1NDczOTcxMTgzNTA1NTA4.YacHkw.S_mJ_DG-cPc-mma3bFSvpbX_P-U')