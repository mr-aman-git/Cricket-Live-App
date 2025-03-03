import React, { useState } from "react";

const CustomHook = () => {
    let [apidata, setApidata] = useState([]);
    let [searchData, setSearchData]= useState(null);

    return { apidata, setApidata, searchData, setSearchData };
}

export default CustomHook