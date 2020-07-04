import { useState, useEffect } from 'react';

const FetchData = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
            } 
            catch {
                setError(error);
            }
        };
        fetchData();
    }, []);
    return { response, error };
};

export default FetchData;
