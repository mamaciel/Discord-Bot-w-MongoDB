var https = require("https");

module.exports = {
    name: 'getWatchlist',
    description: "This command will show you your watchlist",

    execute(message, args){
		let splitMessage = message.content.split(" ");

			message.reply('hold up, let me load your watchlist up!');

			const options = {
				"method": "GET",
				"hostname": "REPLIT_URL_HERE",
				"path": "/api/getWatchlist"
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
					responseText += (bodyobj[index].ticker);
					responseText += "\n"
                }
                
				message.channel.send(responseText);

			}); 
			});
			
			req.end();   

		}
    }