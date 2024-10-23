import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { FloatingLabel, ListGroup } from "flowbite-react";


export default function Search({ handleChange }) {
    const [search, setSearch] = useState('')
    const [showListGroup, setShowListGroup] = useState('hidden')
    const { data, loading } = useFetch(search ? `https://weatherapi-com.p.rapidapi.com/search.json?q=${search}` : null)

    const handleChangeSearch = e => {
        const value = e.target.value
        setShowListGroup('block')
        setSearch(value)

        if (value == null || value == '') {
            setShowListGroup('hidden')
        }
    }


    return (
        <>
            <div className="relative py-5 w-full">
                <FloatingLabel variant="outlined" label="Buscar ciudad" value={search} onChange={handleChangeSearch} className="text-white bg-black" />
                <div className="flex justify-center">
                    <ListGroup className={showListGroup + ' absolute w-full'}>
                        {
                            loading
                                ? (
                                    <h2>Espere un momento</h2>
                                ) : data.length == 0 ? (
                                    <h2>No se encontraron resultados</h2>
                                ) : (data.map(result =>
                                    <ListGroup.Item
                                        onClick={
                                            () => {
                                                handleChange(`${result.lat},${result.lon}`)
                                                setSearch('')
                                                setShowListGroup('hidden')
                                            }
                                        }
                                        key={result.id}
                                    >
                                        {result.name}, {result.region}, {result.country}
                                    </ListGroup.Item>
                                ))
                        }
                    </ListGroup>
                </div>
            </div>
        </>
    )
}