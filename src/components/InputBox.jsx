import React from "react";

function InputBox({
    amount,
    onAmountChange,
    currency = "usd",
    onCurrencyChange,
    currencyOptions = [],

}){
    return(
        <div className="justify-start flex-col w-fit border border-slate-950 items-center">
            <input type="number" placeholder="Amount" value={amount} className="p-3 m-3 outline-dashed outline-1 w-4/5 md:w-auto" name="" id="" 
                onChange={(e)=>onAmountChange(Number(e.target.value))}
                
            />

            <select name=""  onChange={(e)=>onCurrencyChange(e.target.value)} value={currency} id="" className="p-2 m-2 align-middle flex-col items-center text-center justify-center">
               {
                currencyOptions.map((currencyOption)=>
                <option key={currencyOption} value={currencyOption} >{currencyOption}</option>
                )}
            </select>
        </div>
    )
}

export default InputBox