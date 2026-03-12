import { useState } from 'react'
import './index.css'

function App() {
  return (
    <>
    <ColorPicker />
    </>
  )
}

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (e) => {
    setColor(e.target.value)
  }

  return (
    <div id='color-picker-container' style={{backgroundColor: color}}>
      <input type="color" id="color-input" onChange={handleColorChange} value={color}/>
    </div>
  )

};

export default App
