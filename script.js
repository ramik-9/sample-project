const apiKey = "4f856c4338451883e64ccd2f294acc92"; 
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search');
const displaySection = document.getElementById('display');

// Event listener for button click
searchBtn.addEventListener('click', function(){
    const cityname = searchInput.value;

    if(cityname.trim() === "")
    {
        alert('Please Specify The City!');
        return;
    }

    getWeatherData(cityname);
});

// Async function to fetch weather data from API
async function getWeatherData(city){
    const url = `https://home.openweathermap.org/api_keys?q=${city}&appid=${apiKey}&units=metric&lang=en`;
    try {
        const response = await fetch(url);
        if(!response.ok)
        {
            // If the key is invalid or city doesn't exist, this triggers
            throw new Error('City not found! Please check the API key or city name.');
        }

        // FIXED: changed from jason() to json()
        const data = await response.json();
        
        // FIXED: matched the function name
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

// Function to inject results inside your own #display section
function displayWeather(data) {
    // Creating the HTML structure inside your display box dynamically
    displaySection.innerHTML = `
        <h2 style="margin-bottom: 15px;">📍 ${data.name}, ${data.sys.country}</h2>
        <h1 style="font-size: 60px; color: #00ff26; margin-bottom: 15px;">${Math.round(data.main.temp)}°C</h1>
        <p style="text-transform: capitalize; font-weight: normal; margin-bottom: 10px;">☁️ Weather: ${data.weather[0].description}</p>
        <p style="font-weight: normal;">💧 Humidity: ${data.main.humidity}%</p>
    `;
}