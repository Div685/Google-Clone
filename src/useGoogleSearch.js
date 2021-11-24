import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "97fa8d84ada256b8c";

const useGoogleSearch = (term) => {
  const [data, setData] = useState();

  useEffect(() => {

  }, [term])
};

export default useGoogleSearch;