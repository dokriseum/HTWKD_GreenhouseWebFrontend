document.addEventListener('DOMContentLoaded', function () {
    // Initialize toggle states
    const waterPumpButton = document.getElementById('toggle-water-pump');
    const fanButton = document.getElementById('toggle-fans');

    function toggleButton(button) {
        if (button.classList.contains('off')) {
            button.classList.remove('off');
            button.classList.add('on');
            button.textContent = 'Ein';
        } else {
            button.classList.remove('on');
            button.classList.add('off');
            button.textContent = 'Aus';
        }
    }

    waterPumpButton.addEventListener('click', function () {
        toggleButton(waterPumpButton);
    });

    fanButton.addEventListener('click', function () {
        toggleButton(fanButton);
    });

    // Chart updates (simulate live data)
    const soilMoistureCtx = document.getElementById('soilMoistureChart').getContext('2d');
    const airHumidityCtx = document.getElementById('airHumidityChart').getContext('2d');
    const temperatureCtx = document.getElementById('temperatureChart').getContext('2d');

    const soilMoistureChart = createLineChart(soilMoistureCtx, 'Bodenfeuchtigkeit (%)');
    const airHumidityChart = createLineChart(airHumidityCtx, 'Luftfeuchtigkeit (%)');
    const temperatureChart = createLineChart(temperatureCtx, 'Temperatur (°C)');

    setInterval(() => updateChart(soilMoistureChart, Math.random() * 100), 2000);
    setInterval(() => updateChart(airHumidityChart, Math.random() * 100), 2000);
    setInterval(() => updateChart(temperatureChart, 15 + Math.random() * 10), 2000);
});

function createLineChart(ctx, label) {
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: label,
                data: [],
                borderColor: '#4caf50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                fill: true,
                tension: 0.4,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { beginAtZero: true },
                y: { beginAtZero: true },
            },
        },
    });
}

function updateChart(chart, value) {
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    chart.data.labels.push(time);
    chart.data.datasets[0].data.push(value);

    if (chart.data.labels.length > 10) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }
    chart.update();
}
