const axios = require("axios");

module.exports = {
    name: 'removeWatchlist',
	description: "This command will remove an item to your watchlist",
		
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

			message.channel.send("Removing "+ splitMessage[1] + " from watchlist");

			message.channel.send("Complete")
			
	   }
   }