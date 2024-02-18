import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';
import WeatherInfo from './WeatherInfo';

const App = () => {
  const [lat, setLat] = useState()
  const [long, setLong] = useState()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    })
  }, [])


  if (!(lat && long)) {
    return (
      <div>
        Please allow us to access your location for displaying weather
      </div>
    )
  }

  return (
    <div className='mainDiv1'>
    <p className='title'>Weather ForeCasting Front End Page</p>
      <WeatherInfo lat={lat} long={long} />
    </div>
  )
}

export default App;