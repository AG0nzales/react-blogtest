import { useState, useEffect } from "react";


//custom hook
const useFetch = (url) => {


  //data sets to fetch json files
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null)


  useEffect(()=>{

    //stop making unmounted component requests to browser
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, {signal: abortCont.signal })
    .then(res => {
      if(!res.ok){
        throw Error('could not fetch data');
      }
      return res.json();
    })
    .then(data =>{
      setData(data)
      setIsPending(false);
      setError(null)
    })
    .catch(err => {
      //logic to stop refreshing states setIsPending
      if(err.name === 'AbortError'){
        console.log('fetch aborted')
      } else {
        setIsPending(false)
        setError(err.message)
      }      
    })
    }, 1000);

    //return in order for browser to load and also fires this function
    //abort() is a javascript function
    return () => abortCont.abort();

  }, [url]);

  //this is for the custom hooks 
  //we need to return the used hooks to the homepage as an object
  return { data, isPending, error }

}

export default useFetch

