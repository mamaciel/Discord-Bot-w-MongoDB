const axios = require("axios");

module.exports = {
    name: 'addWatchlist',
	description: "This command will add an item to your watchlist",
		
    execute(message, args){
		let splitMessage = message.content.split(" ");

		   message.reply('hold up, let me save that!');

		   axios.post('REPLIT_URL_HERE', {
		   	  ticker: splitMessage[1],
		   	}).then((response) => {
				console.log(response);
			}, (error) => {
				console.log(error);
			});

			message.channel.send("Adding "+ splitMessage[1] + " to watchlist");

			message.channel.send("Complete")
			
	   }
   }