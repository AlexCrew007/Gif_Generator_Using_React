import  { useEffect,useState } from 'react'
import axios from 'axios';

export const useGif = (tag) => {

    const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;
    const [gif,setGif] = useState('')
    const [loadingIcon, setLoading] =useState(true)

        async function fetchData(tag){
            setLoading(true)
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
            const {data} = await axios.get( tag ? `${url}&tag=${tag}`: url );
            const output = data.data.images.downsized_large.url;
            setGif(output)
            setLoading(false)
        }
    
        useEffect(()=>{
            fetchData(tag);
        },[])

    return {gif,loadingIcon,fetchData}
}
