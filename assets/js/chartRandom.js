class RandomChart {
    constructor() {
        this.state = []
    }

    addChart(nameChart, dotes) {
        const dots = this.createDotes(dotes)

        this.state.push({
            label: this.state.some(chart => chart.label === nameChart) ? nameChart + '_copy' : nameChart,
            backgroundColor: this.randomColor(),
            borderColor: this.randomColor(),
            data: dots
        })

        this.drawChart(this.maximumDotes())
    }

    maximumDotes() {
        console.log(this.state)

        let maximum = 0
        this.state.map(chart => {
            if (maximum < chart.data.length) {
                maximum = chart.data.length
            }
        })
        return maximum
    }

    createDotes(dotes) {
        const dotesList = []
        for (let i = 0; i < dotes; i++) {
            dotesList.push(Math.floor(Math.random() * dotes))
        }

        return dotesList
    }

    randomRGB() {
        return parseInt(Math.floor(Math.random() * 255));
    }

    randomColor() {
        return `rgba(${this.randomRGB()}, ${this.randomRGB()}, ${this.randomRGB()}, 0.3)`
    }

    resetChart() {
        this.state = []
        this.drawChart()
    }

    drawChart(label = [0]) {
        let lab = label > 0 ? Array.from(Array(label).keys()) : []
        console.log(label)

        const dataState = this.state
        const ctx = document.getElementById('chart').getContext('2d');
        const chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: lab,
                datasets: dataState
            },
            options: {
                
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 0
                },
                hover: {
                    animationDuration: 0
                },
                responsiveAnimationDuration: 0
            
            }
        })
        console.log(chart)
        chart.update()
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

// event trigger
reset.dispatchEvent(new Event('click'));

