const form = document.getElementById('origin')
const reset = document.getElementById('reset')


class OriginChart {
    constructor() {
        this.state = []
        this.labels = []
    }

    addLabel() {
        const time = new Date()
        console.log(time.getSeconds())
        // this.labels.push[`${time.getDate()} .${time.getMonth()} . ${time.getFullYear()}`]
        // console.log(this.labels)
        this.labels.push('asd')
    }

    addDote(nameChart, dote) {
        this.addLabel()

        if (this.state.some(chart => chart.label == nameChart)) {
            this.state.map(chart => {
                if (chart.label == nameChart) {
                    chart.data.push(dote)
                }
            })
        } else {
            this.state.push({
                label: nameChart,
                backgroundColor: this.randomColor(),
                borderColor: this.randomColor(),
                data: [dote]
            })
        }

        console.log(this.state)

        // if (nameChart in this.state) {
        //     this.state[nameChart].push(parseFloat(dote))
        // } else {
        //     this.state[nameChart] = [parseFloat(dote)]
        // }
        // console.log(this.state)
        this.drawChart()
    }

    randomRGB () {
        return parseInt(Math.floor(Math.random() * 255)); 
    }

    randomColor () {
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
                datasets: dataState
            },

            // Configuration options go here
            options: {}
        })
    }
}

const originChart = new OriginChart()

form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    
    const chartName = document.getElementById('chart_name')
    const dotPosition = document.getElementById('dot_position')

    originChart.addDote(chartName.value, dotPosition.value)
    
    chartName.value = ''
    dotPosition.value = ''
    
})

reset.addEventListener('click', () => {
    originChart.resetChart()
})

// trigger
reset.dispatchEvent(new Event('click'));
