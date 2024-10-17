import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Search() {
    const [search, setSearch] = useState('boston')
    const { data, loading, error } = useFetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${search}`)
    console.log(search)
    console.log(data)


    return (
        <>
            <fieldset>
                <input
                    onChange={e => setSearch(e.target.value)}
                    type="text"
                    name=""
                    placeholder="Managua"
                    id=""
                />
                {
                    data.length > 0 && data.map(result => <p key={result.id}>{result.name}, {result.region}, {result.country}</p>)
                }
            </fieldset>
        </>
    )
}