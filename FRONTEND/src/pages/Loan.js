import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Layout from '../component/Screen/Layout'
import { BiPrinter, BiInfoCircle } from 'react-icons/bi'
import { MdSend } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';



import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/auth/authSlice'


const Input = styled(MuiInput)`
  width: 42px;
`;

const Loan = () => {



  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch])

  useEffect(() => {
    if(isError) {
      navigate("/login")
    }
  }, [isError, navigate
  ])






  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',

    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid darkblue',
    boxShadow: 24,
    p: 0,
    m: 0,
    height: 'auto'
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 3000) {
      setValue(100);
    }
  };
  return (
    <Layout>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='w-11/12 lg:w-[40rem]' sx={style} >
          <p class="text-white text-xl p-3  bg-dark-purple font-bold w-full">Loan details
            <marquee behavior="scroll" className="text-green-400 font-bold">
              You can loan until 3000£
            </marquee>
          </p>
          <div className='flex justify-end'>
            <p className=' mr-20 border-2  border-blue-600 p-2 text-black bg-gray-300'>Total Interest : <span className='font-bold'> 123.33344EUR</span></p>
          </div>
          <form >
            <div className='flex flex-row m-3 justify-around items-center'>
              <div className='ml-3 '>
                <label for="languagename" class="block text-base w-36 font-medium text-gray-900 p-2 mb-2">Type of Loan</label>
                <label for="languagename" class="block text-base w-36 font-medium text-gray-900 p-2 mt-2">Amount</label>
                <label for="languagename" class="block text-base w-36 font-medium text-gray-900 p-2 mt-2">Loan Term</label>
                <label for="languagename" class="block text-base w-36 font-medium text-gray-900 p-2 mt-4"></label>
                <label for="languagename" class="block text-base w-36 font-medium text-gray-900 p-2 mt-4">Interest Rate</label>
              </div>
              <div >
                <select id="countries" class="bg-gray-50 border mr-2 border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[12rem] p-2.5"

                >
                  <option value="Personal Loan" >Personal Loan</option>
                  <option value="Personal Loan" >Auto Loan</option>
                  <option value="Personal Loan" >Home Loan</option>
                  <option value="Personal Loan" >Business Loan</option>
                  <option value="Personal Loan" >Mortgage Loan</option>
                  <option value="Personal Loan" >Student Loan</option>
                </select>
                <input placeholder='00' type="text" mr-2 id="first_name" class="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-right w-[12rem] p-2.5 "

                />
                <select id="countries" class="mr-2 bg-gray-50 border border-gray-300 mt-2 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[12rem] p-2.5"

                >
                  <option value="1" >1 year</option>
                  <option value="2" >2 years</option>
                  <option value="3" >3 years</option>
                  <option value="4" >4 years</option>
                  <option value="5" >5 years</option>
                  <option value="6" >6 years</option>
                  <option value="7" >7 years</option>
                  <option value="8" >8 years</option>
                  <option value="9" >9 years</option>
                  <option value="10" >10 years</option>

                </select>
                <select id="countries" class= "bg-gray-50 mr-2 border border-gray-300 mt-2 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[12rem] p-2.5"

                >
                  <option value="1" >1 month</option>
                  <option value="2" >2 month</option>
                  <option value="3" >3 month</option>
                  <option value="4" >4 month</option>
                  <option value="5" >5 month</option>
                  <option value="6" >6 month</option>
                  <option value="7" >7 month</option>
                  <option value="8" >8 month</option>
                  <option value="9" >9 month</option>
                  <option value="10" >10 month</option>

                </select>
                <input defaultValue={1.8} disabled type="text" id="first_name" class="bg-gray-50 mr-2 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-right w-[12rem] p-2.5 "

                />
              </div>
            </div>

            <div className='flex flex-row justify-around  mt-3 mb-3'>
              <button className='bg-blue-600 rounded text-gray-100 font-medium w-28 h-10 flex items-center justify-center' type="submit">
                Save
              </button>
              <button onClick={handleClose} className='bg-blue-600 rounded text-gray-100 font-medium w-28 h-10 flex items-center justify-center'>
                Cancel
              </button>
            </div>
          </form>
        </Box>


      </Modal>
      <div class="flex overflow-hidden h-screen  bg-white pt-16">
        <div id="main-content" class="h-full  w-full bg-gray-50 relative lg:ml-64">

          <div class="w-full  grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 lg:p-10 gap-4">
            <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">

              <div class="mb-4 flex items-center justify-between">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">My Loan</h3>
                  <span class="text-base font-normal text-gray-500">This is a list of latest loan</span>
                </div>

              </div>
              <div class="flex flex-col mt-8">
                <div class="overflow-x-auto rounded-lg">
                  <div class="align-middle inline-block min-w-full">
                    <div class="shadow overflow-hidden sm:rounded-lg">
                      <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                          <tr>
                            <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type of Loan
                            </th>
                            <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date & Time
                            </th>
                            <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Amount
                            </th>
                            <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Interest
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white">
                          <tr>
                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                              You d'ont have any current loan
                              <div onClick={handleOpen} className=' cursor-pointer bg-primary text-white p-2 mt-3 w-56 text-center font-medium ounded-lg'>
                                Please click here to apply!
                              </div>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>



          </div>

        </div>
      </div>

    </Layout>
  )
}

export default Loan