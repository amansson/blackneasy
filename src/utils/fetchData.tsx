import { useState, useEffect } from "react";

const FetchData = (
    url: RequestInfo | URL,
    options?: RequestInit | undefined
) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
            } catch {
                setError(error);
            }
        };
        fetchData();
    }, [error, options, url]);
    return { response, error };
};

export default FetchData;
