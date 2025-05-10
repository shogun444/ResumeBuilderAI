"use client"

import React, { useEffect, useState } from "react";

export default function useDimensions(containerRef  :  React.RefObject<HTMLElement | null> ){
const [dimension,setDimension] = useState({width : 0 , height : 0})

useEffect(()=>{
  const currentRef = containerRef.current;
  if(!currentRef){
    return
  }
  function getDimensions(){
    return{
      width : currentRef?.offsetWidth || 0 ,
      height : currentRef?.offsetHeight || 0 
    }
  }

  const resizeObserver = new ResizeObserver(entries => {
    const entry = entries[0]
    if(entry){
      setDimension(getDimensions())
    }
  })

  if(currentRef){
    resizeObserver.observe(currentRef)
    setDimension(getDimensions())
  }
  return ()=>{
    if(currentRef){
      resizeObserver.unobserve(currentRef)
    }
    resizeObserver.disconnect()
  }
},[containerRef])
return dimension
}