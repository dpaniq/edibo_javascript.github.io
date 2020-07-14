const fs = require('fs');
const currencies = require('./Currencies')

fs.writeFile("currency.json", JSON.stringify(currencies.generateCurrencies()), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

// Or   
// fs.writeFileSync('/tmp/test-sync', 'Hey there!');