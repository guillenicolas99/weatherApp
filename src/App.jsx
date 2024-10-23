import { useState } from 'react'
import './App.css'
import Loader from './componets/Loader'
import Search from './componets/Search'
import useFetch from './hooks/useFetch'

function App() {
  const [position, setPosition] = useState(false)
  const { data, loading, error } = useFetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${position}`)
  const { current, location } = data
  console.log(data)

  const handleChange = city => setPosition(city)

  if (error) return <h3>{error}</h3>

  return (
    <div className='flex'>
      <Search handleChange={handleChange} />
      <>
        {
          loading
            ? <Loader />
            : <article>
              <h2>{location?.name}, {location?.region}, {location?.country}</h2>
              <img src={current.condition.icon} alt="" />
              <ul>
                <li>{current.cloud}</li>
                <li>{current.temp_c}</li>
                <li>{current.humidity}</li>
              </ul>
            </article>
        }
      </>
    </div>
  )
}

export default App
