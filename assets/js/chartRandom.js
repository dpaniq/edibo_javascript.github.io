import {ChartRandom} from './classes/ChartRandom.js'

const form = document.getElementById('random')
const reset = document.getElementById('reset')
const ctx = document.getElementById('chart').getContext('2d');

const chartRandom = new ChartRandom(ctx)
form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const chartName = document.getElementById('chart_name')
    const dotsNumber = document.getElementById('dots_number')

    chartRandom.addChart(chartName.value, dotsNumber.value)

    chartName.value = ''
    dotsNumber.value = ''
})

reset.addEventListener('click', () => {
    chartRandom.resetChart()
})

reset.dispatchEvent(new Event('click'));  // event trigger render chart