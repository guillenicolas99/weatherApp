import './App.css'
import Search from './componets/Search'
import useFetch from './hooks/useFetch'

function App() {
  const { data, loading, error } = useFetch('https://weatherapi-com.p.rapidapi.com/search.json?q=boston')
  console.log(data)

  if (loading) return <h3>LOADING...</h3>
  if (error) return <h3>{error}</h3>

  return (
    <>
      <Search />
      <h2>Con useFetch</h2>
      {
        data.map(result => <p key={result.id}>{result.name}, {result.region}, {result.country}</p>)
      }
    </>
  )
}

export default App
