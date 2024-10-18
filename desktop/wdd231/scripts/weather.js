const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const key = '4c37122ddbb92926b645b1a37943df60';

const latitude = 49.771451579336855;
const longitude = 6.644653281520942;
//const units = 'imperial';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

async function apiFetch(){

    try{
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();

            console.log("Data:", data);
            displayResults(data);
        } else {
            const errorText = await response.text();
            throw new Error(`Error: ${errorText}`);
        }
        
    } catch (error) {
        console.error("Error fetching results:", error);
    }
};

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}
  
apiFetch();


