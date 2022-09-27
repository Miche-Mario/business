import React from 'react'
import proof1 from '../img/bb1.png'
import proof2 from '../img/bb3.png'


const Proof = () => {
  return (
    <div className='lg:-mt-6'>
    <div  className='lg:flex hidden  bg-white  items-center lg:m-10 '>
        <img className='lg:w-6/12 w-full' src={proof1} alt="proof1"/>
        <img className='lg:w-6/12 w-full' src={proof2} alt="proof2"/>
        
    </div>
    <div className='lg:hidden '>
        <marquee  behavior="scroll">
        <div className=' bg-white  items-center lg:m-10 flex'>
            <img className='lg:w-6/12 w-full' src={proof1} alt="proof1"/>
            <img className='lg:w-6/12 w-full' src={proof2} alt="proof2"/>
            
        </div>
        </marquee>
    </div>
    
    </div>
  )
}

export default Proof