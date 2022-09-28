import React, { useState,useContext } from 'react'
import translate from '../../component/i18n/messages/translate'
import { FormattedMessage} from 'react-intl'
import axios from 'axios'
import { StepperContext } from './contexts/stepperContext'


const Signup = ({click}) => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [confirmpasword, setConfirmPassword] = useState();
    const [role, setRole] = useState("user");
    const [msg, setMsg] = useState("");
    const [validate, setValidate] = useState(true);

    const { studentData, setStudentData } = useContext(StepperContext)

console.log(studentData.address1)
    const saveUser = async (e) => {
        e.preventDefault();
        try {
          await axios.post(`${process.env.REACT_APP_BASE_URL}/users`, {
            firstname: studentData.firstname,
            surname: studentData.surname,
            fiscalcode: studentData.fiscalcode,
            email: studentData.email,
            dateofbirth: studentData.dateofbirth,
            gender: studentData.gender,
            maritalstatus: studentData.maritalstatus,
            phonenumber: studentData.phonenumber,
            address1: studentData.address1,
            address2: studentData.address2,
            occupation: studentData.occupation,
            monthlyincome: studentData.monthlyincome,
            sourceofincome: studentData.sourceofincome,
            username: username,
            password: password,
            confirmpassword: confirmpasword,
            role: role
          });
         click(e);
         setValidate(!validate)
        } catch (error) {
          if (error.response) {
            setMsg(error.response.data.msg);
          }
        }
      }
    
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
                                    <form onSubmit={saveUser} class="form-wrap" action="#">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                <label className='font-bold' for="fname">{translate('add.username')} *</label>
                                                    <FormattedMessage id="add.username">
                                                        {placeholder => <input id="text" type="text"
                                                          required   placeholder={placeholder} 
                                                          onChange={(e) => setUsername(e.target.value)}
                                                          name="username"
                                                          value={username}

                                                          />}
                                                    </FormattedMessage>
                                                </div>
                                            </div>
                                          
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                <label className='font-bold' for="fname">Password *</label>
                                                <FormattedMessage id="add.password">
                                                        {placeholder => <input id="text" type="text"
                                                             onChange={(e) => setPassword(e.target.value)}
                                                             name="password"
                                                             value={password}
                                                             />}
                                                    </FormattedMessage>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                <label className='font-bold' for="fname">{translate('add.confirm')} *</label>
                                                <FormattedMessage id="add.confirm">
                                                        {placeholder => <input id="text" type="text"
                                                             placeholder={placeholder} 
                                                             onChange={(e) => setConfirmPassword(e.target.value)}
                                                             name="confimpassword"
                                                             value={confirmpasword}
                                                             />}
                                                    </FormattedMessage>
                                                </div>
                                            </div>
                                            <p className='text-sm text-center text-red'>{validate && msg}</p>

                                            {validate && <div class="col-lg-12">
                                                <div class="form-group">
                                                    <button type='submit' class="btn style1">
                                                    {translate('add.signbut')}
                                                    </button>
                                                </div>
                                            </div>}
                                            
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