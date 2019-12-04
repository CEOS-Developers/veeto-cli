import {useState, useEffect} from 'react';
import axios from 'axios'

const fixedUrl = 'https://d2gv8trg60k042.cloudfront.net';

export const useDataApi = (initialUrl) => {
    const [data, setData] = useState(null);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
          const result = await axios(url);
          setData(result.data);
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
      };
      fetchData();
    }, [url]);
    return [{ data, isLoading, isError }, setUrl]; 
}

export const useMutation = (initialUrl, params) => {
  console.log(initialUrl);
  console.log(params);
  const fetchUrl = async () => {
   axios.post(initialUrl, params)
   .then(res => res.data)
   .catch(err => console.log(err));
  };
  return fetchUrl();
};