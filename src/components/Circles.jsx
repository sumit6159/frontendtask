import React, { useEffect, useState } from 'react'
import CircleContainer from './CircleContainer'
import Container from "./Container"
import "./home.css"

// const getRandomColor=()=>{
//     const newArray=[]

//     const isColorExist=(tempColor)=>{
//       for(let i=0; i<newArray.length && tempColor!==newArray[i]; i++){
//           if(i<newArray.length) return true
//           return false
//       }
//     }

//     for(let i=0; i<color)
// }

const Circles = () => {
  const [hex, setHex] = useState([])
  const [shoot, setShoot] = useState([])
  const [input, setInput] = useState('')
  
  useEffect(() => {
    
      const arr =[]
      var colour
      for(let i=1; i<=5; i++){
       colour = `#${Math.floor(Math.random()*16777215).toString(16)}`
        arr.push([colour,i])
      }
     
       for(let i=1; i<=5; i++){
         // eslint-disable-next-line
         if(arr[i]==colour){
           return
         }
         setHex(arr)

       } 

  }, [])

  const handleChange = (e) => {
    
    setInput(e.target.value)
    
  }
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
  
  const handleCircleRevert=(e)=>{
    // eslint-disable-next-line
    let circle = shoot.filter((x)=>e[1]!=x[1])
    setShoot([...circle])
    setHex([...hex,e].sort((a,b)=>a[1]-b[1]))
  }
  
    
  
 
  
//  const addToList = (e)=>{

//   const parent = document.getElementById("circleBox1")
//   parent.append(e.target)

//  }
  return (
    <div className='circleBox' id='circleBox1'>
      
      <div className='container_div' style={{display:"flex", flexWrap:"wrap", gap:"5px"}}>
        {shoot.map((e)=>{
          return(
            <div onClick={()=>handleCircleRevert(e)}>
              <Container key={e[1]} color={e[0]} number={e[1]}/>
            </div>
          )
        })}
      </div>
      
      
     <div className='circle_div'>
      {hex.map((e) => <CircleContainer key={e[1]} color={e[0]} number={e[1]} />)}
      </div>
    <div className='button-box'>
    
      <input id='circleNumber' type="number" placeholder='Enter number'onChange={handleChange} />
      <button onClick={shootHandle}>shoot</button>
    </div>
   
    </div>
    

  )
}

export default Circles


