const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML= city 
fetch('https://weather-by-api--ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
.then(response => response.json())
.then(response => {
	
	console.log(response)})



	cloud_pct.innerHTML = respnonse.cloud_pct
	temp.innerHTML = respnonse.temp
	feels_lile.innerHTML = respnonse.feels_like
	humidity.innerHTML = respnonse.humidity
	min_temp.innerHTML = respnonse.min_temp
	max_temp.innerHTML = respnonse.max_temp
	weend_speed.innerHTML = respnonse.wind_speed
	wind_degrees.innerHTML = respnonse.wind_degrees
	sunrise.innerHTML = respnonse.sunrise
	sunset.innerHTML = respnonse.sunset
.catch(err => console.error(err));
}
SubmitEvent.addEventListener("click" ()=> {
	e.preventDefault()
	getWeather(e.city.value)
})


getWeather("Pune")