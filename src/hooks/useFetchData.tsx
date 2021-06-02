import { useState, useRef, useEffect } from "react";

const UseFetchData:Function = ( url:string ):Object => {
  const isMounted = useRef( true );

  const [state, setState] = useState({data:null, loading:true, error:false });
  useEffect(() => {

    return () => {
      isMounted.current = false;
    }
  }, []);
  
  useEffect(() => {
    setState({ data: null, loading: true, error: false })
    fetch(url)
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(data => {
        if (isMounted.current) {
          setState({
            data,
            loading: false,
            error: false,
          });
        }
      })
      .catch(err => {
        setState({
          data: null,
          loading: false,
          error: true,
        });
      });
  }, [url]);

  return state;
}

export default UseFetchData;