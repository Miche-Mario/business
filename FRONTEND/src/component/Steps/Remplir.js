import React from 'react'
import { RiAlertLine } from 'react-icons/ri'
import translate from '../../component/i18n/messages/translate'


const Remplir = () => {
  return (


    <section class="account-wrap pt-4">

      <div class="container pt-0">

        <form action="#" class="account-form bg-white mt-0">

          <div class="row">
            <div className='col-md-12 mb-4'>
              <p className="line"><span>{translate('add.title')}</span></p>
            </div>
            <div class="col-md-3 ">
              <div class="form-group">
                <label className='font-bold' for="fname">{translate('add.formname1')} *</label>
                <input className='border border-dark w-3' type="text" id="fname" name="fname" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label className='font-bold' for="phone">{translate('add.formsurname')} *</label>
                <input className='border border-dark w-3' type="number" id="phone" name="phone" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label className='font-bold' for="email">{translate('add.codefiscal')}</label>
                <input className='border border-dark w-3' type="email" id="email" name="email" />
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group">
                <label className='font-bold' for="dob">{translate('add.email')} *</label>
                <input className='border border-dark w-3' type="text" id="dob" name="dob" />
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
            <input className='ml-6 w-6 h-6' type="checkbox" />
            <span className='ml-6 text-sm lg:text-xl md:text-xl'>{translate('add.check1')}</span>
            <input className='ml-6 w-6 h-6' type="checkbox" />
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
          
        </form>
      </div>
    </section>


  )
}

export default Remplir