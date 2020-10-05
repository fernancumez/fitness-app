import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        let res = await fetch(url);
        let data = await res.json();

        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchResource();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
