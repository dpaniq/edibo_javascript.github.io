class Currencies {

    constructor() {
        this.currency = ['EUR', 'LVL', 'USD']
    }
    
    generateCurrencySymbol () {
        return this.currency[Math.floor(Math.random() * this.currency.length)]
    }

    generateCurrencyValue() {

        return parseFloat(Math.floor(Math.random() * 101)).toFixed(2)
    }

    generateCurrencies(length=100) {
        
        const currencies = []
        for (let i of this.currency) {
            for (let len = 0; len < length; len++) {
                currencies.push({name: i, value: this.generateCurrencyValue()})
            }
        }

        return currencies
    }
}

module.exports = new Currencies()