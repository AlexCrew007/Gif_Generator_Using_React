import React, { useState } from 'react'
import { Loading } from './Loading';
import { useGif } from '../hooks/useGif';


export const Tag = () => {
    
    const [tag, setTag]=useState('');

    const {gif,loadingIcon,fetchData} = useGif();


  return (
    <div className='w-1/2 border-black rounded-lg  items-center bg-red-500 flex flex-col gap-y-5 mt-[15px]'>
        <h1 className='underline font-bold text-2xl mt-[15px]'>A Random Gif</h1>
        {loadingIcon ? <Loading></Loading>: <img src={gif} alt='gif' width={450} height={600}/>}
        <input className='bg-white w-10/12 py-2 text-center rounded-lg uppercase mb-[20px] font-bold' onChange={(e)=>{setTag(e.target.value)}} name='tag' value={tag}></input>
        <button onClick={(()=>{fetchData(tag)})} className='bg-white w-10/12 py-2 rounded-lg uppercase mb-[20px] font-bold'>Generate</button>
    </div>
  )
}
