import { useState } from 'react'
import './App.css'
import Loader from './componets/Loader'
import Search from './componets/Search'
import useFetch from './hooks/useFetch'
import Cards from './componets/Cards'

function App() {
  const [position, setPosition] = useState('managua')
  const { data, loading, error } = useFetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${position}`)
  const { current, location } = data
  console.log(data)

  const handleChange = city => setPosition(city)

  if (error) return <h3>{error}</h3>

  return (
    <div className='px-3'>
      <Search handleChange={handleChange} />
      <div className=''>
        {
          loading
            ? <Loader />
            : <Cards current={current} location={location} />
            
        }
      </div>
    </div>
  )
}

export default App
