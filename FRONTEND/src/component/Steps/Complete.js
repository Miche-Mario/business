import React, { useState,useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import translate from '../../component/i18n/messages/translate'
import { StepperContext } from './contexts/stepperContext'

const Complete = () => {
  const { studentData, setStudentData } = useContext(StepperContext)

    console.log(studentData)
  return (
   
    

<div className='pb-10'>
   <div class="alert alert-success" role="alert">
            <ToastContainer style={{fontSize: 20}} position="top-right"/>
      <h4 class="alert-heading font-bold text-2xl">Well done!</h4>
      <p className='text-2xl mt-3'>Congratulations! your <span className='font-semibold '>BNP XME Conto</span> has been successfully created </p>
      <hr />
      <p class="mb-0 text-xl mt-3">You now just need to <a href='/login' className=' font-semibold text-blue-700 cursor-pointer'>Login </a>to have access to your dashbord and take advantage of all our banking services</p>
    </div>
    </div>
    
  )
}

export default Complete