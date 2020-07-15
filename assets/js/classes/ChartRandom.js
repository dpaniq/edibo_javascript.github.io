import { Color } from './Color.js'
import { Dots } from './Dots.js'

export class ChartRandom {
    constructor(ctx) {
        this.dots = new Dots()
        this.color = new Color()
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {},
        })
    }

    addChart(nameChart, dotes) {
        const dots = this.dots.createRandomDotes(dotes)
        const chartName = this.chart.data.datasets.some(dataset => dataset.label == nameChart) ? nameChart + '_copy' : nameChart
        const maxLabels = dotes > 0 ? Array.from(Array(parseInt(dotes)).keys()) : []

        const chart = {
            label: chartName,
            backgroundColor: this.color.randomColor(),
            borderColor: this.color.randomColor(),
            data: dots
        }

        this.chart.data.labels = maxLabels
        this.chart.data.datasets.push(chart)
        this.chart.update()
    }

    resetChart() {
        this.chart.data.labels = []
        this.chart.data.datasets = []
        this.chart.update()
    }
}