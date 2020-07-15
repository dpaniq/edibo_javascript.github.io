const form = document.getElementById('origin')
const reset = document.getElementById('reset')

class OriginChart {
    constructor() {
        this.state = []
        this.labels = []
    }

    addDote(nameChart, dote) {
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
        this.drawChart()
    }
}
