document.addEventListener("DOMContentLoaded", () => {
  const lightValue = document.getElementById("light-value");
  const temperatureValue = document.getElementById("temperature-value");
  const gasValue = document.getElementById("gas-value");

  // Replace this URL with your actual API endpoint
  const API_URL = "https://sensoryecology.deno.dev/get";

  function fetchData() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.light) lightValue.textContent = data.light + "lum";
        else lightValue.textContent = "N/A";
        if (data.temperature)
          temperatureValue.textContent = data.temperature + "°C";
        else temperatureValue.textContent = "N/A";
        if (data.gas) gasValue.textContent = data.gas + "ppm";
        else gasValue.textContent = "N/A";
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        lightValue.textContent = "Error";
        temperatureValue.textContent = "Error";
        gasValue.textContent = "Error";
      });
  }

  // Initial fetch
  fetchData();

  // Set interval to refresh data every 8 seconds
  setInterval(fetchData, 8000);
});
