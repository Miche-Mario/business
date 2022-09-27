import React from 'react'
import { RiAlertLine } from 'react-icons/ri'
import translate from '../../component/i18n/messages/translate'

const Identifier = () => {
  return (
    <section class="account-wrap pt-4">

      <div class="container pt-0">

        <form action="#" class="account-form bg-white mt-0">

          <div class="row">
            <div className='col-md-12 mb-4'>
              <p className="line"><span>{translate('add.title')}</span></p>
            </div>
            <div class="col-md-6 ">
              <div class="form-group">
                <label className='font-bold' for="fname">{translate('add.date')} *</label>
                <input className='border border-dark w-3' type="text" id="fname" name="fname" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label className='font-bold' for="email">{translate('add.gender')}</label>
                <input className='border border-dark w-3' type="email" id="email" name="email" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label className='font-bold' for="email">{translate('add.marital')}</label>
                <input className='border border-dark w-3' type="email" id="email" name="email" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label className='font-bold' for="phone">{translate('add.tel')} *</label>
                <input className='border border-dark w-3' type="text" id="phone" name="phone" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label className='font-bold' for="email">{translate('add.address1')}</label>
                <input className='border border-dark w-3' type="email" id="email" name="email" />
              </div>
            </div>
            <div class="col-md-12s">
              <div class="form-group">
                <label className='font-bold' for="email">{translate('add.address2')}</label>
                <input className='border border-dark w-3' type="email" id="email" name="email" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label className='font-bold' for="email">{translate('add.prof')}</label>
                <input className='border border-dark w-3' type="email" id="email" name="email" />
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="form-group">
                <label className='font-bold' for="email">{translate('add.income')}</label>
                <input className='border border-dark w-3' type="email" id="email" name="email" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label className='font-bold' for="email">{translate('add.source')}</label>
                <input className='border border-dark w-3' type="email" id="email" name="email" />
              </div>
            </div>
            
          </div>
         
          
          
          
          <p className='mt-3 text-gray-400'>*{translate('add.oblig')}</p>
         
          
        </form>
      </div>
    </section>
  )
}

export default Identifier