import React from 'react'
import "./home.css"


const Container = ({color,circleNumber}) => {
  return (
    <div className="container"  style={{backgroundColor:color,border:"1px solid black", borderRadius:"50%",width:"100px", height:"100px"}}>
            {circleNumber}
            
        </div>
  )
}

export default Container