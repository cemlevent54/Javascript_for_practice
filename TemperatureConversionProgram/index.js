const temperaturetextbox = document.getElementById("temperature");
const radiobuttonforCelc = document.getElementById("celctofahr");
const radiobuttonforFahr = document.getElementById("fahrtocelc");
const resultlbl = document.getElementById("lblsonuc");
const btnsubmit = document.getElementById("submit");

function convertCelctoFahr(temp) {
    return (temp * 9 / 5) + 32;
}

function convertFahrtoCelc(temp) {
    return (temp - 32) * 5 / 9;
}

function convertion() {
    
    if (radiobuttonforCelc.checked)  {
        var temperature = Number(temperaturetextbox.value);
        temperature = convertCelctoFahr(temperature);
        resultlbl.textContent = temperature + " °F";
    }
    else if(radiobuttonforFahr.checked) {
        var temperature = Number(temperaturetextbox.value);
        temperature = convertFahrtoCelc(temperature);
        resultlbl.textContent = temperature + " °C";
    }
    else {
        resultlbl.textContent = "Select a unit.";
    }
}

btnsubmit.onclick = convertion;


