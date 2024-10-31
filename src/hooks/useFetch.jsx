import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!url) return
        
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '97ec86b430msh3ac91ce9e3c65e6p1e1c10jsnc0c5ca16b747',
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Error en el resultado');
                }
                const result = await response.json();
                const apiReuslt = result ? result : []
                setData(apiReuslt);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
