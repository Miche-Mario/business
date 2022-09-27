import React from 'react'
import translate from '../../component/i18n/messages/translate'
import { FormattedMessage} from 'react-intl'
const Signup = () => {
    return (


        <section class="Login-wrap m bg-white">
            <div className='w-full bg-gray-50'>
            <div class="container">
                <div class="row ">
                    <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div class="m-6 bg-white login-form-wrap">
                            <div class="login-header ">
                                <h3 className='text-center mb-0'>{translate('add.signh3')}</h3><br/>
                                <p className='text-center -mt-3'>{translate('add.signp1')}</p>
                            </div>
                            <div class="login-form">
                                <div class="login-body">
                                    <form class="form-wrap" action="#">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                <label className='font-bold' for="fname">{translate('add.formname1')} *</label>
                                                    <FormattedMessage id="add.formname1">
                                                        {placeholder => <input id="text" type="text"
                                                          required   placeholder={placeholder} />}
                                                    </FormattedMessage>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                <label className='font-bold' for="fname">{translate('add.email')} *</label>
                                                <FormattedMessage id="add.email">
                                                        {placeholder => <input id="text" type="text"
                                                             placeholder={placeholder} />}
                                                    </FormattedMessage>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                <label className='font-bold' for="fname">Password *</label>
                                                <FormattedMessage id="add.password">
                                                        {placeholder => <input id="text" type="text"
                                                             placeholder={placeholder} />}
                                                    </FormattedMessage>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                <label className='font-bold' for="fname">{translate('add.confirm')} *</label>
                                                <FormattedMessage id="add.confirm">
                                                        {placeholder => <input id="text" type="text"
                                                             placeholder={placeholder} />}
                                                    </FormattedMessage>
                                                </div>
                                            </div>
                                            
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <button class="btn style1">
                                                    {translate('add.signbut')}
                                                    </button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

       
    )
}

export default Signup