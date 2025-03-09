import React, { useState, useEffect } from "react";
import axios from "axios";

let MatchUrl =
  "https://api.cricapi.com/v1/cricScore?apikey=ed41540b-edfa-4c13-95a7-f58d0200cecb";

const CustomHook = () => {
  let [apidata, setApidata] = useState([]);
  let [searchData, setSearchData] = useState(null);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    let Upcomming = async () => {
      try {
        let res = await axios.get(MatchUrl);
        let result = res.data.data;
        setApidata(result);
        setSearchData(result);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      
      
    };
    Upcomming();
  }, []);

  return {
    apidata,
    setApidata,
    searchData,
    setSearchData,
    loading,
    setLoading,
  };
};

export default CustomHook;
