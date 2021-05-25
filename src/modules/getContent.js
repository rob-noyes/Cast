
async function displayData(){
    try {
        const url = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=imperial&appid=1f82bf42f57863a5a2f579cecc0bdac0')
        const data = await url.json()
        console.log(data)
    } catch (error) {
        console.log(error)

    }

}

export default displayData