

const key = "7bf1eb792d7636a35af73cd8a864d47f"

// This function uses the DOM to access and manipulate the HTML tag

function setHtml (data) {
    console.log(data)
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp)  + ' C '
    document.querySelector('.nublado').innerHTML = data.weather[0].description
    document.querySelector('.unidade').innerHTML = 'Humidade -  ' +  data.main.humidity + ' % '
    document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

// This function get api data using async await

async function getCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    setHtml(data)
}

//This function get the input search and execute

function getInputData() {
   const city = document.querySelector('.search').value
    getCity(city)
}