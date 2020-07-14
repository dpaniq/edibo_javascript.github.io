class RandomChart {
    constructor() {
        this.state = []
    }

    addChart(nameChart, dotes) {

        const dots = this.createDotes(nameChart, dotes)

        this.state.push({
            label: nameChart,
            backgroundColor: this.randomColor(),
            borderColor: this.randomColor(),
            data: dots
        })
    


        // if (nameChart in this.state) {
        //     this.state[nameChart].push(parseFloat(dote))
        // } else {
        //     this.state[nameChart] = [parseFloat(dote)]
        // }
        // console.log(this.state)
        this.drawChart()
    }

    createDotes(nameChart, dotes) {
        if (this.state.every(chart => chart.label != nameChart)) {

            const dotesList = []
            for (let i = 0; i < dotes; i++) {
                dotesList.push(Math.floor(Math.random() * dotes))
            }

            return dotesList
        }
    }

    randomRGB() {
        return parseInt(Math.floor(Math.random() * 255));
    }

    randomColor() {
        return `rgba(${this.randomRGB()}, ${this.randomRGB()}, ${this.randomRGB()}, 0.2)`
    }

    resetChart() {
        this.state = []
        this.drawChart()
    }

    drawChart() {
        const dataState = this.state
        const ctx = document.getElementById('chart').getContext('2d');
        const chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: Array(1000),
                datasets: dataState
            },

            // Configuration options go here
            options: {}
        })
    }
}

// Event ------------------------------------------------------------
const form = document.getElementById('random')
const reset = document.getElementById('reset')

const randomChart = new RandomChart()

form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const chartName = document.getElementById('chart_name')
    const dotsNumber = document.getElementById('dots_number')

    randomChart.addChart(chartName.value, dotsNumber.value)
    
    chartName.value = ''
    dotsNumber.value = ''
})

reset.addEventListener('click', () => {
    randomChart.resetChart()
})

// trigger
reset.dispatchEvent(new Event('click'));

