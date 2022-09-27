import React from 'react'

const StepperControl = ({handleClick, currentStep, steps}) => {

  return (
    <div className='container -mt-[4rem]  flex justify-between'>
        <button 
          onClick={()=> handleClick()}
          className={`ml-14 btn btn-outline-secondary border border-black bg-gray-100 text-gray-700 
          ${currentStep ==1 ? " cursor-not-allowed"
          : ""}`}
        >
            Back
        </button>
        <button 
          onClick={()=>handleClick("next")}
          className='mr-14 bg-green-400 text-white  uppercase py-2 px-4
          rounded-xl font-semibold cursor-pointer  
          hover:bg-green-600 hover:text-white transition duration-200 ease-in-out '
        >
            {currentStep == steps.length ? "Confirm" : "Next"}
        </button>
    </div>
  )
}

export default StepperControl