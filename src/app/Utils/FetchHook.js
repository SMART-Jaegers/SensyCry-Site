import { useState, useEffect } from "react";
import { fetchByLinkOne, fetchData } from "./Api";

const useFetchData = (link, many = "true") => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(link, many)
      .then((data) => {
        setData(data);
        if (data === null) {
          setError("error");
        }
      })
      .finally(() => setLoading(false));
  }, [link, many]);
  return { data, isLoading, error };
};

export default useFetchData;
