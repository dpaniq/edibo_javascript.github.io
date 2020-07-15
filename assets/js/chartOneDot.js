import { ChartOneDot } from './classes/ChartOneDot.js'

const form = document.getElementById('chart_one_dot')
const reset = document.getElementById('reset')
const ctx = document.getElementById('chart').getContext('2d');

const chartOneDot = new ChartOneDot(ctx)
form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const chartName = document.getElementById('chart_name')
    const dotsNumber = document.getElementById('dot_position')

    chartOneDot.addChart(chartName.value, dotsNumber.value)

    chartName.value = ''
    dotsNumber.value = ''
})

reset.addEventListener('click', () => {
    chartOneDot.resetChart()
})

reset.dispatchEvent(new Event('click'));  // event trigger render chart
