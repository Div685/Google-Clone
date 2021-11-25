import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "97fa8d84ada256b8c";

const useGoogleSearch = (term) => {
  const [data, setData] = useState();

  useEffect(() => {

    const fetchData = async() => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      ).then(response => response.json)
      .then(result => {
        setData(result)
      })
    }

    fetchData();
  }, [term])

  return { data }
};

export default useGoogleSearch;