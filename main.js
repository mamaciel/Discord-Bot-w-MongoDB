const Discord = require('discord.js');
const client = new Discord.Client();
const mongoose = require('mongoose');

// Connect to Mongoose database
mongoose.connect('YOUR_MONGODB_URL_HERE', 
{ useNewUrlParser: true,
useUnifiedTopology: true });

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log(`${client.user.tag}`,'is online! Let\'s acquire this bread!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    message.content.toLowerCase();

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'tradehistory'){
        client.commands.get('tradeHistory').execute(message, args);
    }
    else if (command === 'recenttrade'){
        client.commands.get('recentTrades').execute(message, args);
    }
    else if (command === 'savetrade'){
        client.commands.get('saveTrade').execute(message, args);
    }
    else if (command === 'addwatchlist'){
        client.commands.get('addWatchlist').execute(message, args);
    }
    else if (command === 'removewatchlist'){
        client.commands.get('removeWatchlist').execute(message, args);
    }
    else if (command === 'getwatchlist'){
        client.commands.get('getWatchlist').execute(message, args);
    }
    else if (command === 'help'){
        client.commands.get('help').execute(message, args);
    }
});

client.login("YOUR_API_KEY_HERE");