

const key = "7bf1eb792d7636a35af73cd8a864d47f"

function setHtml (data) {
    console.log(data)
    document.querySelector('.city').innerHTML = data.name
}


async function getCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    setHtml(data)
}


function getInputData() {
   const city = document.querySelector('.search').value
    getCity(city)
}