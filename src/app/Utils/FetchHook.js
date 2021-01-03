import { useState, useEffect } from "react";
import { fetchIncedent } from "./Api";

const useFetchData = (ee) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchIncedent()
      .then((data) => {
        setData(data);
        if (data.length === 0) {
          setError("error");
        }
      })
      .finally(() => setLoading(false));
  }, [ee]);
  return { data, isLoading, error };
};

export default useFetchData;
