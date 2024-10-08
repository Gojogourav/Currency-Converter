import React, { useCallback, useEffect, useState } from "react";

function useCurrencyData(currency){
    const [data,setData] = useState({})
    useEffect(()=>{

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(res=>res.json())
        .then(data=>setData(data[currency]))
        .catch(error => console.log(error))
    },[currency])
    console.log(data);
    return data
}


export default useCurrencyData;