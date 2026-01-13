import { useEffect, useState } from "react";

function useFetch(fetchFunction, initialValue) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const data = await fetchFunction();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data!" });
      }
      setIsLoading(false);
    }
    fetchData();
  }, [fetchFunction]);

  return { isLoading, error, fetchedData, setFetchedData };
}

export default useFetch;
