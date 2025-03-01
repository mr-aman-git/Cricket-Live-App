import axios from "axios";
import React, { useEffect, useState } from "react";

let MatchUrl =
  "https://api.cricapi.com/v1/cricScore?apikey=ed41540b-edfa-4c13-95a7-f58d0200cecb";
const LiveMatches = () => {
  let [apidata, setApidata] = useState([]);

  useEffect(() => {
    let Upcomming = async () => {
      try {
        let res = await axios.get(MatchUrl);
        let result = res.data.data;
        setApidata(result);
      } catch (error) {
        console.log(error);
      }
    };
    Upcomming();
  }, []);

  return (
    <>
      <div className="w-[100%] bg-amber-200 h-[100vh]">
        {apidata?.map((store) => (
          <div>

          </div>
        ))}
      </div>
    </>
  );
};

export default LiveMatches;

{
  /* <div className='bg-white w-[350px] rounded-md mt-2' key={store.id}>
                <h3 className='text-center font-medium  text-blue-700 '> {store.series} </h3>
                <p className='text-center text-[14px] '> {store.ms} </p>
                        <hr className='text-orange-500' />
                <div className='flex'>
                    <div className='w-[200px] p-2'> 
                        <div className='flex gap-2'>
                            <img src= {store.t1img} alt="flag" className='w-[30px] rounded-[50%]' />
                            <h4 className='text-[14px]'> {store.t1}</h4>
                        </div>

                        <div className='flex mt-3 gap-2'>
                            <img src= {store.t2img} alt="flag" className='w-[30px] rounded-[50%]' />
                            <h4 className='text-[14px]'>{store.t2}</h4>
                        </div>
                        
                    </div>

                    <div className=' p-2'>
                        <p className='text-[14px]'>{store.dateTimeGMT}</p>
                        <p> {store.matchType} </p>
                    </div>
                </div>
                 <p className='text-center text-green-700 font-medium'> {store.status} </p>
            </div> */
}
