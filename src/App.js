import React, { useState, useEffect } from 'react'
import './App.css'
import Square from './component/Square'
import Header from './component/Header'

function App() {
  const [boxes, setBoxes]       = useState([])
  const [colorBox, setColorBox] = useState()
  const [filter, setFilter]     = useState("Lighter")
  const [color, setColor]       = useState("none")

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
    let newBoxArray = sortBoxShade(boxes, filter)
    newBoxArray = filterBoxColor(newBoxArray, color)

    setColorBox(() => {
      return newBoxArray.map((item, index) => { return <Square key={index} box={item} /> })
    })
  },[boxes, filter, color])

  const handleChange = (e) => {
    e.target.name === "shade" && setFilter(e.target.value) 
    e.target.name === "selectColor" && setColor(e.target.value)  
  }
  
  return (
    <div>
      <Header handleChange={handleChange} filter={filter} selectColor={color} />
      <div className="box-container">
        {colorBox}
      </div>
    </div>
  )
}

function filterBoxColor(boxes, color){
  let newBoxArray = []
  if(color === "red"){
      newBoxArray = boxes.filter(box => box.r > box.g && box.r > box.b && (box.r/box.g) > 2 && (box.r/box.b) > 2)
  }
  else if(color === "green"){
      newBoxArray = boxes.filter(box => box.g > box.r && box.g > box.b && (box.g/box.r) > 2 && (box.g/box.b) > 2)
  }
  else if(color === "blue"){
      newBoxArray = boxes.filter(box => box.b > box.r && box.b > box.g && (box.b/box.r) > 2 && (box.b/box.g) > 2)
  }
  else if(color === "none"){ newBoxArray = boxes }

  return newBoxArray
}

function sortBoxShade(boxes, filter){
  let newBoxArray = []
  if( filter === "Lighter" ){
    newBoxArray = boxes.sort((a, b) => (b.r + b.g + b.b) - (a.r + a.g + a.b))
  }
  else if( filter === "Darker" ){
    newBoxArray = boxes.sort((a, b) => (a.r + a.g + a.b) - (b.r + b.g + b.b))
  }

  return newBoxArray
}

function randomNumber(){
    const min = 0;
    const max = 255;
    const rand = min + Math.random() * (max - min);

    return Math.round(rand)
}

export default App
