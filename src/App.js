import React, { useState, useEffect } from 'react'
import './App.css'
import Square from './component/Square'
import Header from './component/Header'

function App() {
  const [boxes, setBoxes] = useState([])
  const [colorBox, setColorBox] = useState()
  const [filter, setFilter] = useState("Lighter")

  useEffect(() => {
    const newArray = [];
    for( let i = 0; i < 40; i++ ){
        const red   = randomNumber()
        const green = randomNumber()
        const blue  = randomNumber()

        const tempBox = {
          r: red,
          g: green,
          b: blue
        }
        newArray.push(tempBox)
    }
    setBoxes(newArray)
  },[])

  useEffect(() => {
    let newBoxArray = []
    if( filter === "Lighter" ){
      newBoxArray = boxes.sort((a, b) => (b.r + b.g + b.b) - (a.r + a.g + a.b))
    }
    else if( filter === "Darker" ){
      newBoxArray = boxes.sort((a, b) => (a.r + a.g + a.b) - (b.r + b.g + b.b))
    }

    setColorBox(() => {
      return newBoxArray.map((item, index) => { return <Square key={index} box={item} /> })
    })
  },[boxes, filter])

  const handleChange = (e) => {
    e.target.name === "shade" && setFilter(e.target.value)   
  }
  
  return (
    <div>
      <Header handleChange={handleChange} filter={filter} />
      <div className="box-container">
        {colorBox}
      </div>
    </div>
  )
}

function randomNumber(){
    const min = 0;
    const max = 255;
    const rand = min + Math.random() * (max - min);

    return Math.round(rand)
}

export default App
