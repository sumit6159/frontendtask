import React, { useEffect, useState } from 'react'
import CircleContainer from './CircleContainer'
import uuid from 'react-uuid'
import Container from "./Container"
import "./home.css"



const Circles = () => {
  const [hex, setHex] = useState([])
  const [input, setInput] = useState('')
  const [shoot, setShoot] = useState([])
  
  useEffect(() => {
    // generating random colors and added to the array
      const arr =[]
      var colour
      for(let i=1; i<=5; i++){
       colour = `#${Math.floor(Math.random()*16777215).toString(16)}`
        arr.push([colour,i])
      }
     
       for(let i=1; i<=5; i++){
         // checking that no same color would generate
         // eslint-disable-next-line
         if(arr[i]==colour){
           return
         }
         setHex(arr)

       } 

  }, [])
  
  // taking and setting the input from input box
  const handleChange = (e) => {
    
    setInput(e.target.value)
    
  }

  // function to add the circle to empty container
  const shootHandle=()=>{
    // eslint-disable-next-line
    let circle = hex.find((e)=>e[1]==input)
    if(!circle){
      alert('result not found!')
      return
    }
    // eslint-disable-next-line
    const newCircle = hex.filter((e)=>e[1]!=input)
    setHex([...newCircle])
    setShoot([...shoot,circle])

  }
  

  //// function to get back the circle from container
  const handleCircleRevert=(e)=>{
    // eslint-disable-next-line
    let circle = shoot.filter((x)=>e[1]!=x[1])
    setShoot([...circle])
    setHex([...hex,e].sort((a,b)=>a[1]-b[1]))
  }
  
    
  
 
  

  return (
    <div className='circleBox' id='circleBox1'>
      
      <div className='container_div' style={{display:"flex", flexWrap:"wrap", gap:"5px"}}>
        {shoot.map((e)=>{
          return(
            <div onClick={()=>handleCircleRevert(e)}>
              <Container key={uuid()} color={e[0]} circleNumber={e[1]} />
            </div>
          )
        })}
      </div>
      
      
     <div className='circle_div'>
      {hex.map((e) => <CircleContainer  key={uuid()} color={e[0]} circleNumber={e[1]} />)}
      </div>
    <div className='button-box'>
    
      <input id='circleNumber' type="number" placeholder='Enter number'onChange={handleChange} />
      <button onClick={shootHandle}>shoot</button>
    </div>
   
    </div>
    

  )
}

export default Circles


