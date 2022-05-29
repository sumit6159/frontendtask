import React from 'react'

const CircleContainer = ({color,circleNumber}) => {
  return (
    <div className="circle_container"   style={{backgroundColor:color,border:"1px solid black", borderRadius:"50%",width:"100px", height:"100px",marginBottom:"20px"}}>
            {circleNumber}
            
        </div>
  )
}

export default CircleContainer
