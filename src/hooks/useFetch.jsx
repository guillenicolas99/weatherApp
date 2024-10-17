import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a92de603ecmsh789492e0203f7bcp18b2c0jsnf0f98e198f06',
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
