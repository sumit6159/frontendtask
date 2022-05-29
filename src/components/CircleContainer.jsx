import React from 'react'

const CircleContainer = ({color,number}) => {
  return (
    <div className="circle_container"  style={{backgroundColor:color, borderRadius:"50%",width:"100px", height:"100px",marginBottom:"20px"}}>
            {number}
            
        </div>
  )
}

export default CircleContainer
