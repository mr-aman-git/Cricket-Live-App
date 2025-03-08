import React, { useState } from "react";

const CustomHook = () => {
    let [apidata, setApidata] = useState([]);
    let [searchData, setSearchData]= useState(null);
    let [loading, setLoading]= useState(true);

    return { apidata, setApidata, searchData, setSearchData, loading, setLoading };
}

export default CustomHook