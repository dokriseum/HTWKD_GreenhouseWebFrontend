document.addEventListener('DOMContentLoaded', function() {
    // Create charts for soil moisture, air humidity, and temperature
    const soilMoistureCtx = document.getElementById('soilMoistureChart').getContext('2d');
    const airHumidityCtx = document.getElementById('airHumidityChart').getContext('2d');
    const temperatureCtx = document.getElementById('temperatureChart').getContext('2d');

    const soilMoistureChart = new Chart(soilMoistureCtx, {
        type: 'line',
        data: { labels: [], datasets: [{ label: 'Bodenfeuchtigkeit (%)', data: [] }] },
        options: { responsive: true, scales: { x: { beginAtZero: true } } }
    });

    const airHumidityChart = new Chart(airHumidityCtx, {
        type: 'line',
        data: { labels: [], datasets: [{ label: 'Luftfeuchtigkeit (%)', data: [] }] },
        options: { responsive: true, scales: { x: { beginAtZero: true } } }
    });

    const temperatureChart = new Chart(temperatureCtx, {
        type: 'line',
        data: { labels: [], datasets: [{ label: 'Temperatur (°C)', data: [] }] },
        options: { responsive: true, scales: { x: { beginAtZero: true } } }
    });

    // Manual control buttons
    document.getElementById('toggle-water-pump').addEventListener('click', function() {
        alert('Wasserpumpe toggled!'); // Replace with API call
    });

    document.getElementById('toggle-fans').addEventListener('click', function() {
        alert('Lüfter toggled!'); // Replace with API call
    });

    // Simulated data updates
    function updateCharts() {
        const timestamp = new Date().toLocaleTimeString();
        soilMoistureChart.data.labels.push(timestamp);
        soilMoistureChart.data.datasets[0].data.push(Math.random() * 100);
        soilMoistureChart.update();

        airHumidityChart.data.labels.push(timestamp);
        airHumidityChart.data.datasets[0].data.push(Math.random() * 100);
        airHumidityChart.update();

        temperatureChart.data.labels.push(timestamp);
        temperatureChart.data.datasets[0].data.push(20 + Math.random() * 10);
        temperatureChart.update();
    }

    setInterval(updateCharts, 3000);
});
