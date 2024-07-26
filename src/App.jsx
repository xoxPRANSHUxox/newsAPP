import React from 'react'
import Navbar from "../src/components/Navbar"
import NewsBoard from './components/NewsBoard'
import { useState} from 'react'
import "./App.css"
const App = () => {

  const[category,setCategory] = useState("general");
  
  return (
    <div className=''>
      <Navbar setCategory={setCategory}/>
      <h2 className="text-center m-4">
        Latest
        <span className="badge bg-danger m-2">News</span></h2>
      <div>
      <NewsBoard className='main' category={category}/>
      </div>
    </div>
  )
}

export default App
