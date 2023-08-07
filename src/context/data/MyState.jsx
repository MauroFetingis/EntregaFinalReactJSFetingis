import React from 'react'
import MyContext from './MyContext'

const MyState = () => {
    const state = {
        name: "Alvin Yakitori",
        age: 22
    }
  return (
    <MyContext.Provider value={state}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState