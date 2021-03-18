module.exports = {
    name: 'help',
    description: "This command will show you a list of bot commands",

    execute(message, args){
        message.channel.send(':wave: Hello '+ message.author.username + '! My commands are: ' +  
        '\n**!saveTrade + (ticker) + (option price) + (C or P) + (expiration) + (strike price) ** \n will log your trade \n ex: GE $20 C 12/21 $50'+
        '\n**!recentTrade ** \n will show you your most recent trade'+
        '\n**!tradeHistory ** \n will show you your complete trade history'+
        '\n**!addWatchlist ** \n will add a ticker to your watchlist'+
        '\n**!removeWatchlist ** \n will remove a ticker from your watchlist'+
        '\n**!getWatchlist ** \n will give you your watchlist'
        );
    }
}