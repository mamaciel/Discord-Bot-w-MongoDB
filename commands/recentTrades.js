var https = require("https");

module.exports = {
    name: 'recentTrades',
    description: "This command will show you your most recent trade",

    execute(message, args){
		let splitMessage = message.content.split(" ");

			message.reply('hold up, let me load your last trade up!');

			const options = {
				"method": "GET",
				"hostname": "REPLIT_URL_HERE",
				"path": "/api/recentTrade"
			}
			
			var body = "";
			var chunks = [];
			
			 const req = https.request(options, function (res) {
					chunks = [];
			
				res.on("data", function (chunk) {
					chunks.push(chunk);
				});
			
				 res.on("end", function () {
					body = Buffer.concat(chunks);
				
				bodyobj = JSON.parse(body);

				var responseText = "";
				responseText += (bodyobj.ticker + " $" + bodyobj.optionPrice + " " + bodyobj.optionType + " " + bodyobj.expDate + " $" + bodyobj.strikePrice);

				message.channel.send(responseText);

			}); 
			});
			
			req.end();   
			
		}
    }