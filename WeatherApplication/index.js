const txtBoxCity = document.getElementById("txtBoxCity");
const btnWeather = document.getElementById("btnWeather");
const lblOutput = document.getElementById("lbloutput");
const apiKey = 'my-api-key'; 


btnWeather.addEventListener('click', getWeather);

function turkishToLatin(str) {
    const turkishMap = {
        'Ç': 'C', 'Ö': 'O', 'Ş': 'S', 'İ': 'I', 'Ü': 'U', 'Ğ': 'G',
        'ç': 'c', 'ö': 'o', 'ş': 's', 'ı': 'i', 'ü': 'u', 'ğ': 'g'
    };
    return str.replace(/[ÇÖŞİÜĞçöşüığ]/g, match => turkishMap[match]);
}

async function getWeather() {
    const location = turkishToLatin(txtBoxCity.value);

    if (!location) {
        alert('Please enter a city name.');
        return;
    }

    console.log('Fetching weather data for:', location);
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
    console.log('Request URL:', url);

    try {
        const response = await fetch(url);
        console.log('Response:', response);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log('Weather data:', data);
        const konum = `${data.location.name}, ${data.location.country}`;

        // Bilgileri HTML elementlerine yazdırma
        document.getElementById('city_name').textContent = `${konum}`;
        document.getElementById('city_degree').textContent = `${data.current.temp_c}°C`;
        document.getElementById('city_text').textContent = `${data.current.condition.text}`;
        document.getElementById('city_humidity').textContent = `${data.current.humidity}%`;
        document.getElementById('icon').src = `https:${data.current.condition.icon}`;
        
        

    } catch (error) {
        console.error('Error:', error);
        alert('Failed to retrieve weather data. ' + error.message);
    }
}