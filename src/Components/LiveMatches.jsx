import axios from "axios";
import React, { useEffect, useState } from "react";
import useCustomHook from "../CustomHook";


let MatchUrl =
  "https://api.cricapi.com/v1/cricScore?apikey=ed41540b-edfa-4c13-95a7-f58d0200cecb";

  
const LiveMatches = () => {
  
let {setApidata, apidata, setSearchData, searchData, loading, setLoading} = useCustomHook();

  useEffect(() => {
    let Upcomming = async () => {
      try {
        let res = await axios.get(MatchUrl);
        let result = res.data.data;
        setApidata(result);
        setSearchData(...result, searchData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    Upcomming();
  }, []);

  if(loading) return(<div 
    className="flex justify-center align-middle text-blue-500 text-2xl font-semibold mt-[20%]">
    <p> Loading....</p></div>);

  return (
    <>
      <div className="w-[100%]  ">
        <div className="flex gap-2 flex-wrap justify-center">
          {apidata?.map((store) => (
            <div className="h-[250px] w-[370px] bg-white rounded-lg shadow-md" key={store.id}>
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


