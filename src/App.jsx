import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline sm:decoration-slice">
        Hello world!
      </h1>
      {/* <div className="flex flex-row justify-between">
        <div className="bg-black text-white w-40 rounded-lg grid-cols-1">1</div>
        <div className="bg-yellow-300 w-60 rounded-2xl grid-cols-12">2</div>
      </div>

      <div className="flex justify-between">
      <div className="sm:bg-green-900 xl:bg-yellow-600 md:bg-yellow-950 my-6 bg-yellow-300 rounded-md w-1/4 h-3/6 shadow-2xl pt-2 pb-2">heloe</div>
      <div className="center my-6 bg-cyan-700 rounded-md w-1/4 h-3/4">heloe</div>
      <div className="center my-6 bg-cyan-700 rounded-md w-1/4 ">heloe</div>
      </div>

      <div className="flex justify-between">
        <div className="left bg-green-600 w-3/4 rounded-md h-[500px] sm:h-[200px] md:h-[100px] lg:h-[400px] max">
          <h5 className=' sm:bg-yellow-400 md:bg-red-400 xl:bg-green-400 xs:bg-blue-300'>hu</h5>
          <h5>hu</h5>
        </div>
        <div className="right bg-yellow-300 w-[200px]  max-w-3xl rounded-full h-[200px]">right</div>
      </div> */}

      <div className="dash flex justify-between sm:flex-col md:flex-row lg:flex-row">
        <div className="leftside bg-yellow-400 w-[100%] h-[100%]">1</div>
        <div className="middle bg-red-300 w-[100%] h-[100%]">2</div>
        <div className="rightside bg-green-500 w-[100%] h-[100%]">3</div>
      </div>
    </>
  )
}

export default App
