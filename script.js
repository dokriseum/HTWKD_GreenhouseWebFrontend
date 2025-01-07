// Mocked Sensor Data
const sensorData = {
    soilMoisture: 45,
    airHumidity: 60,
    temperature: 22,
    waterPumpStatus: "Aus",
    fanStatus: "Ein"
};

// Function to update the data on the dashboard
function updateDashboard() {
    document.getElementById("soil-moisture").textContent = sensorData.soilMoisture;
    document.getElementById("air-humidity").textContent = sensorData.airHumidity;
    document.getElementById("temperature").textContent = sensorData.temperature;
    document.getElementById("water-pump-status").textContent = sensorData.waterPumpStatus;
    document.getElementById("fan-status").textContent = sensorData.fanStatus;
}

// Simulate real-time updates every 5 seconds
setInterval(() => {
    // Mock sensor data changes
    sensorData.soilMoisture = Math.floor(Math.random() * 100);
    sensorData.airHumidity = Math.floor(Math.random() * 100);
    sensorData.temperature = Math.floor(Math.random() * 35);

    updateDashboard();
}, 5000);

// Initial update on load
updateDashboard();
