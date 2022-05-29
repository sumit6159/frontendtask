import React from 'react'
import "./home.css"


const Container = ({color,number}) => {
  return (
    <div className="container"  style={{backgroundColor:color, borderRadius:"50%",width:"100px", height:"100px"}}>
            {number}
            
        </div>
  )
}

export default Container