import { useState } from 'react'
import './App.css'
import Loader from './componets/Loader'
import Search from './componets/Search'
import useFetch from './hooks/useFetch'
import Cards from './componets/Cards'
import Slider from './componets/Slider'

function App() {
  const [position, setPosition] = useState('managua')
  const { data, loading, error } = useFetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${position}&days=2&units=metric&lang=es`)
  const { current, location } = data


  const handleChange = city => setPosition(city)

  if (loading) return <Loader />
  if (error) return <h3>{error}</h3>
  const { forecastday } = data.forecast

  return (
    <div className='p-3'>
      <Search handleChange={handleChange} />
      <Cards>
        <header className="font-sans flex flex-col">
          <p><strong>El tiempo actual</strong></p>
          <small>{location.localtime}</small>
        </header>
        <div className="flex flex-col space-x-5 md:flex-row">
          <img src={current.condition.icon} alt={current.condition.text} width={64} />
          <h2 className='text-5xl'>{current.temp_c}&deg;</h2>
          <div className=' flex space-x-2 items-center'>
            <div className="flex flex-col justify-start">
              <p>{current.condition.text}</p>
              <small>Sensación térmica: {current.feelslike_c}&deg;</small>
            </div>
          </div>
        </div>
        <h5 className="text-2xl font-bold ">
          {location.name}, {location.region}, {location.country} ({location.tz_id})
        </h5>
        <footer className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:flex md:justify-start md:space-x-10">
          <div className="flex flex-col">
            <small>
              Viento
            </small>
            <p>{current.wind_kph} km/h</p>
          </div>
          <div className="flex flex-col">
            <small>Humedad</small>
            <p>{current.humidity}%</p>
          </div>
          <div className="flex flex-col">
            <small>Visibilidad</small>
            <p>{current.vis_km} km</p>
          </div>
          <div className="flex flex-col">
            <small>Presión</small>
            <p>{current.pressure_mb} mbar</p>
          </div>

          <div className="flex flex-col">
            <small>Punto de rocío</small>
            <p>{current.dewpoint_c}&deg;</p>
          </div>

        </footer>
      </Cards>

      <div className='w-auto border-transparent text-white shadow-lg bg-blue-950 transition-all my-3 p-3 rounded-md'>
        <header className="font-sans flex flex-col mb-5">
          <p><strong>Previsión</strong></p>
          <p>{new Date(forecastday[0].date).getDate()} de {new Date(forecastday[0].date).getMonth() + 1} de {new Date(forecastday[0].date).getFullYear()}</p>
        </header>
        <Slider forecastday={forecastday} />
      </div>

      <footer className="flex flex-col items-center justify-center space-y-2 p-3">
        <small className='text-white'>Desarrollado por <a href="https://github.com/guillenicolas99" target="_blank" rel="noreferrer">Guillermo Antonio Nicolás Montenegro</a></small>
      </footer>
    </div>
  )
}

export default App
