

import React, { useState,useEffect } from 'react'

const PageTransition = ({activePage,children}) => {
    const[currentPage,setCurrentPage]=useState(activePage)
    const[transitioning,setTransitioning]=useState(false)

    useEffect(()=>{
        if(currentPage!==activePage){
            setTransitioning(true)
            setTimeout(()=>{
                setCurrentPage(activePage)
                setTransitioning(false)
            },500)
        }
    },[activePage,currentPage])
  return (
    <div 
        className='w-full h-full overflow-hidden relative'
        style={{background: 'url(images/pages-bg2.jpeg)'}}>
        <div className={`absolute w-full h-full transition-transform duration-500 ${
            transitioning ? '-translate-y-full' : 'translate-y-0'
        }`}>
            {children[currentPage]}

        </div>
    </div>
  )
}

export default PageTransition