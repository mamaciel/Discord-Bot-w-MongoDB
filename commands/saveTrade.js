const axios = require("axios");

module.exports = {
    name: 'saveTrade',
	description: "This command will save your trade information",
		
    execute(message, args){
		let splitMessage = message.content.split(" ");

		if(splitMessage[2].substring(0,1) === '$'){
			splitMessage[2] = splitMessage[2].substring(1);
		};

		if(splitMessage[5].substring(0,1) === '$'){
			splitMessage[5] = splitMessage[5].substring(1)
		};

		   message.reply('hold up, let me save that!');

		   // 														 GE $15 C 12/20 $50
		   axios.post('REPLIT_URL_HERE', {
		   	  ticker: splitMessage[1],
		   	  optionPrice: splitMessage[2],
		   	  optionType: splitMessage[3],
		   	  expDate: splitMessage[4],
		   	  strikePrice: splitMessage[5]
		   	}).then((response) => {
				console.log(response);
			}, (error) => {
				console.log(error);
			});

			message.channel.send("Saving up "+ splitMessage[1] + " $" + splitMessage[2] + " " + splitMessage[3] + " "+ splitMessage[4] + " $" + splitMessage[5] + " to MongoDB");

			message.channel.send("Complete")
			
	   }
   }