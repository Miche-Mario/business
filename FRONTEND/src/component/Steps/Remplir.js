import React, { useState,useContext } from 'react'
import { RiAlertLine } from 'react-icons/ri'
import translate from '../../component/i18n/messages/translate'
import { StepperContext } from './contexts/stepperContext'


const Remplir = ({click}) => {

  const { studentData, setStudentData } = useContext(StepperContext)

  const handleChange = (e) => { 
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value })
  }


  return (


    <section class="account-wrap pt-4">

      <div class="container pt-0">

        <form onSubmit={click}  class="account-form bg-white mt-0">

          <div class="row">
            <div className='col-md-12 mb-4'>
              <p className="line"><span>{translate('add.title')}</span></p>
            </div>
            <div class="col-md-3 ">
              <div class="form-group">
                <label className='font-bold' for="fname">{translate('add.formname1')} *</label>
                <input className='border border-dark w-3' type="text" id="fname" 
                   onChange={handleChange}
                   name="firstname"
                   value={studentData["firstname"] || ""}
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label className='font-bold' for="phone">{translate('add.formsurname')} *</label>
                <input className='border border-dark w-3' type="text" id="phone" 
                   onChange={handleChange}
                   name="surname"
                   value={studentData["surname"] || ""}
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label className='font-bold ' for="email">{translate('add.codefiscal')}</label>
                <input className='border border-dark w-3 uppercase' type="text" id="email" 
                  onChange={handleChange}
                  name="fiscalcode"
                  value={studentData["fiscalcode"] || ""}
                />
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group">
                <label className='font-bold' for="dob">{translate('add.email')} *</label>
                <input className='border border-dark w-3' type="email" id="dob" 
                required
                  onChange={handleChange}
                  name="email"
                  value={studentData["email"] || ""}
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <p className='font-bold text-xl text-md'>{translate('add.avert')}</p>
          </div>
          <div class="col-md-12">
            <p className='mt-3 '>{translate('add.para1')}</p>
          </div>
          <div class="col-md-12 flex flex-row justify-center mt-6" >
            <input className='ml-6 w-6 h-6' type="checkbox"  required/>
            <span className='ml-6 text-sm lg:text-xl md:text-xl'>{translate('add.check1')}</span>
            <input className='ml-6 w-6 h-6' type="checkbox" required/>
            <span className='ml-6 text-sm lg:text-xl md:text-xl'>{translate('add.check2')}</span>
          </div>
          <div class="col-md-12">
            <p className='mt-3 '>{translate('add.para2')}</p>
          </div>
          <p className='mt-3 text-gray-400'>*{translate('add.oblig')}</p>
          <div class="alert alert-success flex flex-row items-center" role="alert">
            <RiAlertLine style={{fontSize: "50px"}}/>
            <p class="mb-0 ml-6">{translate('add.war')}</p>
          </div>
          <button 
          // onClick={()=>handleClick("next")}
          className='mr-14 bg-blue-400 text-white  uppercase py-2 px-4
          rounded-xl font-semibold cursor-pointer  
          hover:bg-blue-600 hover:text-white transition duration-200 ease-in-out '
        >
            Send
        </button>
        </form>
      </div>
    </section>


  )
}
export default Remplir