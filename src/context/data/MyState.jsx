import React, { useState } from 'react'
import MyContext from './MyContext'

const MyState = (props) => {
  const [mode, setMode] = useState ('light');
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroudColor = "rgb(20, 26, 45)"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "White"
    }
  }
    
  return (
    <MyContext.Provider value={mode,toggleMode}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState