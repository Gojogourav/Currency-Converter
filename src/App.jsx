import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyData from './components/useCurrencyData'
import InputBox from './components/InputBox'

function App() {

  const [currencyTo,setCurrencyTo] = useState('usd')
  const [currencyFrom,setCurrencyFrom] = useState('inr')

  const currencyLog = useCurrencyData(currencyFrom)

  const [amountTo,setAmountTo] = useState(0)
  const [amountFrom,setAmountFrom] = useState(0)

  const keys = Object.keys(currencyLog)

  function swap(){
    setAmountTo(amountFrom)
    setAmountFrom(amountTo)
    setCurrencyFrom(currencyTo)
    setCurrencyTo(currencyFrom)
  }

  
  useEffect(()=>{
    setAmountTo(amountFrom * currencyLog[currencyTo])
  },[amountTo,amountFrom,currencyTo,currencyFrom,swap])


  return (
    <div className='h-screen w-screen flex items-center justify-center p-3'>
      <div className='border border-slate-950 p-4 '>

      <h1 className='text-xl mb-4 text-center'>This is a currency calculator project using react</h1>
      <div className='flex  items-center  justify-between py-8'>
      <InputBox
      amount={amountFrom}
      onAmountChange={setAmountFrom}
      currency={currencyFrom}
      onCurrencyChange={setCurrencyFrom}
      currencyOptions={keys}
      />
      <button className='ml-5  bg-black h-[75px] text-white  p-5 ' onClick={swap}>swap</button>

      </div >
      <div className='flex  items-center py-6 justify-between'>
      <InputBox
        amount={amountTo}
        onAmountChange={setAmountTo}
        currency={currencyTo}
        onCurrencyChange={setCurrencyTo}
        currencyOptions={keys}
      />
      <button className='ml-5 p-4 bg-black text-white h-[75px]'>submit</button>
      </div>

      </div>

    </div>
  )
}

export default App
