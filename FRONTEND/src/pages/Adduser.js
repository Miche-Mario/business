import React, {useState} from 'react'
import Menu from '../component/Menu'
import Stepper from "../component/Steps/Stepper"
import {StepperContext} from "../component/Steps/contexts/stepperContext"
import StepperControl from "../component/Steps/StepperControl"
import Remplir from '../component/Steps/Remplir'
import Identifier from '../component/Steps/Identifier'
import Complete from '../component/Steps/Complete'
import translate from '../component/i18n/messages/translate'
import Signup from '../component/Steps/Signup'
import Layout from '../component/Screen/Layout'




const AddUser = () => {



const [currentStep, setCurrentStep] = useState(1);
const [studentData, setStudentData] = useState('');
const [finalData, setFinalData] = useState([]);
const [open, setOpen] = useState(false)

const steps = [
  translate('add.step1'),
  translate('add.step2'),
  translate('add.step3'),
  translate('add.step4'),

  
]

const displayStep = (step) => {
  switch(step) {
    case 1:
      return <Remplir click={click}/>
    case 2:
      return <Identifier click={click}/>
    case 3:
      return <Signup click={click}/>
    case 4:
      return <Complete/>
  }
}
console.log(open)
const handleClick = (direction) => {
  let newStep = currentStep;

  direction == "next" ? newStep++ : newStep-- ;

  //Check if steps are within bounds
  newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
}
const click = (e) => {
  e.preventDefault()
  setOpen(!open)
}
const clickk = (e) => {
  e.preventDefault()
  setOpen(false)
}
  return (
    <>
    <div className="loader js-preloader h-scre">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <Menu/>
      <div className="switch-theme-mode">
        <label id="switch" className="switch">
          <input type="checkbox" onchange="toggleTheme()" id="slider" />
          <span className="slider round"></span>
        </label>
      </div>

      <section className="mt-12 account-wrap ptb-80 shadow-dark shadow">
                <div class="container">
                    <div class="section-title style1 text-center ">
                        <span className=' w-full p-3 bg-gray-200 mb-40'>{translate('add.span1')}</span>
                    <h2 className='font-medium font-sm'>{translate('add.h21')}</h2>
                    </div>
                </div>
                <div className=' w-full mx:auto p-2 shadow-xl rounded-2x'>
        <div className='container horizontal'>
        <Stepper
            steps={steps}  
            currentStep={currentStep}
        />
        <div className='my-10 p-2 pb-0'>
          <StepperContext.Provider value={{
          studentData,
          setStudentData,
          finalData,
          setFinalData
          }}>
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
     
        <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
            open={open}
            click={click}
            clickk={clickk}
        />
   
        </div>
       
      </div>
            </section>
      
</>
  )
}

export default AddUser