import { Color } from './Color.js'
import { Dots } from './Dots.js'

export class ChartOneDot {
    constructor(ctx) {
        this.dots = new Dots()
        this.color = new Color()
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {},
        })
    }

    addChart(nameChart, dote) {
        const currentChart = this.chart.data.datasets.find(dataset => dataset.label === nameChart)

        if (currentChart) {
            currentChart.data.push(dote)
            this.chart.data.datasets.map(dataset => dataset.data = currentChart.data)
        } else {
            const newChart = this.createChart(nameChart, dote)
            this.chart.data.datasets.push(newChart)
        }
        
        this.chart.data.labels = this.maxLabels()
        this.chart.update()
    }

    maxLabels() {
        const maxLabels = Math.max(this.chart.data.datasets.map(dataset => Object.keys(dataset.data).length))
        return Array.from(Array(maxLabels).keys())
    }

    createChart(name, dote) {
        return {
            label: name,
            backgroundColor: this.color.randomColor(),
            borderColor: this.color.randomColor(),
            data: [dote]
        }
    }

    resetChart() {
        this.chart.data.labels = []
        this.chart.data.datasets = []
        this.chart.update()
    }
}