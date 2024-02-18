import { useEffect, useState } from "react"

const WeatherInfo = ({ lat, long }) => {
    const [entireWeatherData, setEntireWeatherData] = useState({
        pressure: '',
        humidity: '',
        temp: '',
        windSpeed: '',
        cityName: ''
    })

    const obtainData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=fc613052685a893611589e3c3c4436d5&units=metric`)
            .then(response => response.json())
            .then((data) => {
                setEntireWeatherData({
                    ...entireWeatherData,
                    cityName: data.name,
                    pressure: data.main.pressure,
                    humidity: data.main.humidity,
                    temp: data.main.temp,
                    windSpeed: data.wind.speed
                })
            })
    }

    useEffect(() => {
        obtainData()
    }, [])

    return (
        <div className="mainDivWeather">
            <p className="common ">Pressure:{entireWeatherData.pressure}mb</p>
            <p className="common ">Humidity:{entireWeatherData.humidity}%</p>
            <p className="common ">Temp:{entireWeatherData.temp}°C</p>
            <p className="common ">WindSpeed:{entireWeatherData.windSpeed}m/s</p>
            <p className="common ">CityName:{entireWeatherData.cityName}</p>
        </div>
    )
}

export default WeatherInfo;