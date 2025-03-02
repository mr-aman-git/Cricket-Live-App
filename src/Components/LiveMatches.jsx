import axios from "axios";
import React, { useEffect, useState } from "react";

let MatchUrl =
  "https://api.cricapi.com/v1/cricScore?apikey=ed41540b-edfa-4c13-95a7-f58d0200cecb";
const LiveMatches = ({setSearchData, searchData}) => {
  let [apidata, setApidata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let Upcomming = async () => {
      try {
        let res = await axios.get(MatchUrl);
        let result = res.data.data;
        setApidata(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    Upcomming();
  }, []);

  useEffect(()=>{
    if (!apidata || !apidata.series) return;
    let filter= apidata.series.filter((fill)=>fill.series.toUpperCase().includes(searchData));
    setFilteredData(filter);
    return filteredData;
  },[]);

  return (
    <>
      <div className="w-[100%]  ">
        <div className="flex gap-2 flex-wrap justify-center">
          {apidata?.map((store) => (
            <div className="h-[250px] w-[370px] bg-white rounded-lg shadow-md">
              <h2 className="text-center font-semibold pt-3 pb-2 text-[14px]">
                {store.series}
              </h2>
              <hr className="text-gray-400" />
              <div className="flex justify-between px-7 mt-1 text-[14px]">
                <p>{store.matchType.toUpperCase()} Matches</p>
                <p>{store.ms}</p>
              </div>

              <div>
                <p className="text-center mt-1 font-semibold text-[14px] bg-amber-500">
                  {new Date(store.dateTimeGMT).toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <p className="text-center font-bold text-blue-600">Teams</p>
              <div className="flex justify-around text-[14px] mt-2">
                <div className="">
                  <p>{store.t1}</p>
                  <p className="text-center pr-4 font-bold line-through">vs</p>
                  <p>{store.t2}</p>
                </div>

                <div>
                  <p className=" text-center py-2">
                    {new Date(store.dateTimeGMT).toLocaleString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                      timeZone: "Asia/Kolkata",
                    })}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-center py-4 text-[14px]">
                  <span
                    className={
                      store.status === "Match not started"
                        ? "text-yellow-600"
                        : "text-green-600 font-semibold"
                    }
                  >
                    {store.status}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
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
