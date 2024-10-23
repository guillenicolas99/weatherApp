import { useState } from 'react'
import './App.css'
import Loader from './componets/Loader'
import Search from './componets/Search'
import useFetch from './hooks/useFetch'
import { Card, Button } from "flowbite-react";

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
      <div className='flex'>
        {
          loading
            ? <Loader />
            :
            <Card className="max-w-sm">
              <article>
                <div className="flex items-center space-x-3">
                  <img src={current.condition.icon} alt={current.condition.text} />
                  <h2 className=' flex space-x-2 items-baseline'>
                    <strong className='text-black text-5xl'>{current.temp_c}</strong>
                    <small className='text-black'>{current.condition.text}</small>
                  </h2>
                </div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {location.name}, {location.region}, {location.country} ({location.tz_id})
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <Button>
                  Read more
                  <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </article>
            </Card>
        }
      </div>
    </div>
  )
}

export default App
