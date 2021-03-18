var https = require("https");

module.exports = {
    name: 'tradeHistory',
    description: "This command will show you your trade history",

    execute(message, args){
		let splitMessage = message.content.split(" ");

			message.reply('hold up, let me load your trade history up!');

			const options = {
				"method": "GET",
				"hostname": "REPLIT_URL_HERE",
				"path": "/api/tradeHistory"
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
				
				for(index in bodyobj){
					responseText += (bodyobj[index].ticker + " $" + bodyobj[index].optionPrice + " " + bodyobj[index].optionType + " " + bodyobj[index].expDate + " $" + bodyobj[index].strikePrice);
					responseText += "\n"
				}
				
				message.channel.send(responseText);

			}); 
			});
			
			req.end();   

		}
    }