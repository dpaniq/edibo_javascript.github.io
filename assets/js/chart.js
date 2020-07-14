const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['sdasd', 'asdasdasdasd', 'asdasdasdsad','sdasd', 'asdasdasdasd', 'asdasdasdsad','sdasd', 'asdasdasdasd', 'asdasdasdsad','sdasd', 'asdasdasdasd', 'asdasdasdsad','sdasd', 'asdasdasdasd', 'asdasdasdsad','sdasd', 'asdasdasdasd', 'asdasdasdsad','sdasd', 'asdasdasdasd', 'asdasdasdsad','sdasd', 'asdasdasdasd', 'asdasdasdsad'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132, 0.1)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 100 , 1, 36.5]
        },
        {
            label: 'and',
            backgroundColor: 'rgb(22, 99, 132, 0.1)',
            borderColor: 'rgb(22, 99, 132)',
            data: [0, 1, 1, 2, 20, 3, 4]
        },
    ]
    },

    // Configuration options go here
    options: {}
})