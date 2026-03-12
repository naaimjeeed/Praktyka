import './index.css';
import { useState, useEffect } from "react";

function App() {
  return (
    <>
     <ToggleApp />
    </>
  )
}

export const ToggleApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    handleToggleVisibility(); 
  }, [])



  return (
    <div id='toggle-container'>
      <button id='toggle-button' onClick={handleToggleVisibility}>{isVisible ? "Hide" : "Show"} Message</button>
      {isVisible && <p id='message'>I love freeCodeCamp!</p>}
    </div>
  )
}

export default App
