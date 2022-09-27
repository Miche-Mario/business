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

const EditProfile = () => {

    const [img, setImg] = useState('')
    const onImageChange = (e) => {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    };
  return (
    <Layout>

<div class="flex overflow-hidden h-screen  bg-white pt-16">
        <div id="main-content" class="h-full  w-full bg-gray-50 relative lg:ml-64">
                <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto ">
          
        <div className='mt-4 ml-5 '>
            <p className='font-bold text-3xl'>Profile</p>
            <p className='text-gray-400 text-2xl'>Edit Profile</p>
            <div className='bg-white h-[20rem] p-3  ml-1 mt-1 elevation'>
                 <form >
                  
                 <div class="image overflow-hidden">
                        <img class=" w-full lg:w-2/12 lg:h-46"
                            src={img ? img : Avatar}
                            alt=""/>
                            <div className='-mt-10'>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Button variant="contained" component="label">
                                        <RiImageAddFill style={{fontSize: 20, marginRight: 4}} />
                                            Upload
                                        <input onChange={onImageChange} hidden accept="image/*" multiple type="file" />
                                    </Button>
                                    <IconButton color="primary" aria-label="upload picture" component="label">
                                        <input hidden accept="image/*" type="file" />
                                    </IconButton>
                            </Stack>
                            </div>
                            
                    </div>
                  <div className='lg:flex'>
                    <div className='mt-1 w-full lg:w-4/12'>
                      <label className='text-base font-bold'>First Name</label>
                      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                        // value={accomodationname}
                        // onChange={(e) => setAccomodationname(e.target.value)} 
                        required
                      />
                    </div>
                    <div className='mt-1 lg:ml-4 w-full lg:w-4/12'>
                      <label className='text-base font-bold'>Surname</label>
                      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                        // value={accomodationprice}
                        // onChange={(e) => setAccomodationprice(e.target.value)} 
                        required
                      />
                    </div>
                    </div>
                  <div className='lg:flex'>
                    <div className='mt-1 w-full lg:w-4/12'>
                      <label className='text-base font-bold'>Address 1</label>
                      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                        // value={accomodationname}
                        // onChange={(e) => setAccomodationname(e.target.value)} 
                        required
                      />
                    </div>
                    <div className='mt-1 lg:ml-4 w-full lg:w-4/12'>
                      <label className='text-base font-bold'>Address 2</label>
                      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                        // value={accomodationprice}
                        // onChange={(e) => setAccomodationprice(e.target.value)} 
                        required
                      />
                    </div>
                    </div>
                    <div className='lg:flex'>
                        <div className='mt-1 w-full lg:w-4/12'>
                        <label className='text-base font-bold'>Occupation</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                            // value={accomodationname}
                            // onChange={(e) => setAccomodationname(e.target.value)} 
                            required
                        />
                        </div>
                        <div className='mt-1 lg:ml-4 w-full lg:w-4/12'>
                        <label className='text-base font-bold'>Marital Status</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                            // value={accomodationprice}
                            // onChange={(e) => setAccomodationprice(e.target.value)} 
                            required
                        />
                        </div>
                    </div>
                  
                      <p className='text-sm text-center text-red'></p>
                      <div className='flex flex-row  mt-3 mb-8'>
                        <button className='bg-blue-600 rounded text-gray-100 font-medium w-30 h-10 p-3 flex items-center justify-center' type="submit">
                          Update Profile
                        </button>
                        <button  className='bg-blue-600 rounded text-gray-100 font-medium w-20 h-10 p-3 flex items-center justify-center ml-5'>
                          Cancel
                        </button>
            </div>
                </form>
            </div>

        </div>
        </div>
        </div>
        </div>
    </Layout>
  )
}

export default EditProfile