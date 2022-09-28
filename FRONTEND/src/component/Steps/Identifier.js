import React, { useState,useContext } from 'react'
import { RiAlertLine } from 'react-icons/ri'
import translate from '../../component/i18n/messages/translate'
import { StepperContext } from './contexts/stepperContext'


const Identifier = ({click}) => {

  const { studentData, setStudentData } = useContext(StepperContext)
  const handleChange = (e) => { 
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value })
  }
  return (
    <section class="account-wrap pt-4">

      <div class="container pt-0">

        <form onSubmit={click} class="account-form bg-white mt-0">

          <div class="row">
            <div className='col-md-12 mb-4'>
              <p className="line"><span>{translate('add.title')}</span></p>
            </div>
            <div class="col-md-6 ">
              <div class="form-group">
                <label className='font-bold' for="fname">{translate('add.date')} *</label>
                <input className='border border-dark w-3' type="text" id="fname"
                  required
                  onChange={handleChange}
                  name="dateofbirth"
                  value={studentData["dateofbirth"] || ""}
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label className='font-bold' for="email">{translate('add.gender')}</label>
                <input className='border border-dark w-3' type="text" id="email" 
                  
                  onChange={handleChange}
                  name="gender"
                  value={studentData["gender"] || ""}
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label className='font-bold' for="email">{translate('add.marital')}</label>
                <input className='border border-dark w-3' type="text" id="email"
                
                onChange={handleChange}
                name="maritalstatus"
                value={studentData["maritalstatus"] || ""}
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label className='font-bold' for="phone">{translate('add.tel')} *</label>
                <input className='border border-dark w-3' type="text" id="phone"
                  required
                  onChange={handleChange}
                  name="phonenumber"
                  value={studentData["phonenumber"] || ""}
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label className='font-bold' for="email">{translate('add.address1')} *</label>
                <input className='border border-dark w-3' type="text" id="email"
                  required
                  onChange={handleChange}
                  name="address1"
                  value={studentData["address1"] || ""}
                />
              </div>
            </div>
            <div class="col-md-12s">
              <div class="form-group">
                <label className='font-bold' for="email">{translate('add.address2')}</label>
                <input className='border border-dark w-3' type="text" id="email" 
                  
                  onChange={handleChange}
                  name="address2"
                  value={studentData["address2"] || ""}
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label className='font-bold' for="email">{translate('add.prof')} *</label>
                <input className='border border-dark w-3' type="text" id="email"
                  required
                  onChange={handleChange}
                  name="occupation"
                  value={studentData["occupation"] || ""}
                />
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="form-group">
                <label className='font-bold' for="email">{translate('add.income')} *</label>
                <input className='border border-dark w-3' type="text" id="email" 
                  required
                  onChange={handleChange}
                  name="monthlyincome"
                  value={studentData["monthlyincome"] || ""}
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label className='font-bold' for="email">{translate('add.source')} *</label>
                <input className='border border-dark w-3' type="text" id="email" 
                  required
                  onChange={handleChange}
                  name="sourceofincome"
                  value={studentData["sourceofincome"] || ""}
                />
              </div>
            </div>
            
          </div>
         
          
          
          
          <p className='mt-3 text-gray-400'>*{translate('add.oblig')}</p>
         
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

export default Identifier