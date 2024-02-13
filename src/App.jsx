import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [colorName, setColorName] = useState("#default")
  const colors = [ "#FF5733",
  "#42A5F5",
  "#7CFC00",
  "#FFD700",
  "#BA55D3",
  "#FF6347",
  "#1E90FF",
  "#32CD32",
  "#FF4500",
  "#9370DB",
  "#FF69B4",
  "#00CED1",
  "#F08080",
  "#20B2AA",
  "#FF8C00",
  "#FF5733",
  "#42A5F5",
  "#7CFC00",
  "#FFD700",
  "#BA55D3",
  "#FF6347",
  "#1E90FF",
  "#32CD32",
  "#FF4500",
  "#9370DB",
  "#FF69B4",
  "#00CED1",
  "#F08080",
  "#20B2AA",
  "#FF8C00",
  "#8A2BE2",
  "#00FF00",
  "#FF00FF",
  "#0000FF",
  "#FFFF00"]
  const random = Math.floor(Math.random()*colors.length)
  const randomColor = colors[random];
  const colorComponent = useRef(null);
  const colorNameComponent = useRef(null);
  
  useEffect(() => {
    const changedcolor = colorComponent.current;
    const h1 = colorNameComponent.current
    if (changedcolor) {
      changedcolor.style.backgroundColor = randomColor;
      changedcolor.style.boxShadow = "0 0 88px -10px " +randomColor;
      h1.style.color = randomColor;
      setColorName(randomColor);
    }
  },[randomColor]);


  return (
    <>
        <div className="color-holder">
          <p>Clicked {count}</p>
          <h1 ref={colorNameComponent}>{colorName}</h1>
          <div className="color" ref={colorComponent}>

          </div>
          <button onClick={()=> setCount(count+1)+setColorName(randomColor)}>Change Color</button>
        </div>
    </>
  )
}

export default App
