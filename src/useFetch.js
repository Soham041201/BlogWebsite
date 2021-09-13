import {useState,useEffect} from 'react';

const useFetch = (url)=>{
    const [data,setData] = useState(null);
    const[isLoading,setLoding]= useState(true);
    const [error,setError]= useState(null);
    
    useEffect(()=>{
        fetch(url).then(res=>{
            if(!res.ok){
                throw Error('Cant fetch data')
            }
            return res.json();
        }).then(data=>{
            setData(data);
            setLoding(false);
        }).catch(err=>{
            setError(err.message);
        })

    })
    return {data,isLoading,error}
}


export default useFetch;
