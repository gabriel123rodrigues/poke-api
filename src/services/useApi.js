import {useState, useEffect} from 'react';
import apiService from  './apiService';


export default function useApi(url){
    const [data,setData] = useState(null);


    useEffect(()=>{
        const fetchData = async () =>{
        const responseData = await apiService(url);
        setData(responseData);
        };
        fetchData();
    },[url])
    return data;
}