import { useState, useEffect } from "react";
import { fetchIncedent } from "./Api";

const useFetchData = (link) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchIncedent(link)
      .then((data) => {
        setData(data);
        if (data === null) {
          setError("error");
        }
      })
      .finally(() => setLoading(false));
  }, [link]);
  return { data, isLoading, error };
};

export default useFetchData;
