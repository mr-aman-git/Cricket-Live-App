import React, { useState, useEffect } from 'react'
import LiveMatches from './LiveMatches'
import useCustom from "../CustomHook";

const Navbar = () => {
    let {searchData, setSearchData, setApidata, apidata} = useCustom();
    useEffect(() => {
        console.log("Updated apidata:", apidata);
    }, []);
    
    

let Search = (e) => {
    let results = e.target.value.trim().toUpperCase();

    if (results === '') {
        setSearchData([]);  // null ke bajay empty array rakho
        return; // yahan return kar do taake neeche filter apply na ho
    }

    let filters = apidata?.filter((crick) => 
        crick.series?.toUpperCase().includes(results) // series exist karti hai ya nahi, check karna zaroori hai
    );

    setSearchData(filters || []); // agar filters undefined ho, toh empty array set karo
    console.log(filters);
};

    
  return (
<>
    <div>
        <div className='w-[100%] flex justify-between h-[100px] items-center bg-[#0f172a] mb-3'>
            <div className='md:ml-10 w-25 ml-2 mr-10'>
                <img src="https://www.cricket.com/svgs/cricket.com.svg" alt="" />
            </div>

            <div className='flex relative h-12 md:w-[370px] w-[200px]'>

                <div className='text-white pt-[6px] ml-1.5'>
                    <i className="ri-search-eye-line text-[25px] "></i>
                </div>

                <div className='text-white absolute'>
                    <input type="text" placeholder='Search Cricket Match' className='border-white border-1 outline-none pl-10 h-12 md:w-[30vw] w-[50vw] rounded-md' onChange={Search}/>
                </div>

            </div>

            <div className='mr-10 text-white gap-10 flex font-medium'>
                <div className='hidden md:block'>
                    <button className='cursor-pointer hover:text-blue-400 hover:underline'>T20 Match</button>
                </div>
                <div className='hidden md:block'>
                    <button className='cursor-pointer hover:text-blue-400 hover:underline'>ODI Match</button>
                </div>
                <div className='hidden md:block'>
                    <button className='cursor-pointer hover:text-blue-400 hover:underline'>Players</button>
                </div>
            
            </div>
        </div>
    </div>

    <LiveMatches />
 </>
  )
}

export default Navbar