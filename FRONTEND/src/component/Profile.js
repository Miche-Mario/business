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
import { FaEdit } from "react-icons/fa"
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Avatar from '../img/avatar.png'
import { RiImageAddFill } from 'react-icons/ri'
import { Link } from 'react-router-dom';
const Input = styled(MuiInput)`
  width: 42px;
`;

const Profile = () => {
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
     
      <div class="flex overflow-hidden h-screen  bg-white pt-16">
        <div id="main-content" class="h-full  w-full bg-gray-50 relative lg:ml-64">
                <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto ">
          

            
<div class="bg-gray-100">
 

    <div class="container mx-auto mt-4 mr-2">
        <div class="md:flex no-wrap md:-mx-2 ">
            {/* Left Side */}
            <div class="w-full md:w-3/12 md:mx-2">
                
                {/* Profile Card */}
                <div class="bg-white p-3 border-t-4 border-green-400">
                    <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto"
                            src={ Avatar}
                            alt=""/>
                           
                            
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">Jane Doe</h1>
                    <h3 class="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                    <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Status</span>
                            <span class="ml-auto"><span
                                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Member since</span>
                            <span class="ml-auto">Nov 07, 2016</span>
                        </li>
                    </ul>
                </div>
                {/* End of profile card */}
                <div class="my-4"></div>
                
            </div>
            {/* Right Side */}
            <div class="w-full md:w-9/12 mx-2 h-64">
                {/* Profile tab */}
                {/* About Section */}
                <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex justify-between items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <div className='flex items-center'>
                            <span clas="text-green-500">
                                <svg class="h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span class="ml-1 text-xl tracking-wide">Account Information</span>
                        </div>
                        <Link to="/editprofile">
                        <div className='flex items-center'>
                            <FaEdit style={{color: "#0091F7", marginRight: 4}} />

                            <span class="tracking-wide mr-6" style={{color: "#0091F7"}}>Edit</span>
                        </div>
                        </Link>
                        
                        
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">First Name</div>
                                <div class="px-4 py-2">Jane</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Last Name</div>
                                <div class="px-4 py-2">Doe</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Gender</div>
                                <div class="px-4 py-2">Female</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Phone No.</div>
                                <div class="px-4 py-2">+11 998001001</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Address 1</div>
                                <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Address 2</div>
                                <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email.</div>
                                <div class="px-4 py-2">
                                    <a class="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Fiscal Code</div>
                                <div class="px-4 py-2">Feb 06, 1998</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Marital Status</div>
                                <div class="px-4 py-2">Single</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Occupation</div>
                                <div class="px-4 py-2">Business man</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Monthly Income</div>
                                <div class="px-4 py-2">1300eur</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Source of Income</div>
                                <div class="px-4 py-2">Job</div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                {/* End of about section */}

                
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

export default Profile