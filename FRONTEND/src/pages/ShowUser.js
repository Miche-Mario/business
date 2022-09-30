import React, {useEffect, useState} from 'react'
import Layout from '../component/Screen/Layout'
import { FaEdit } from "react-icons/fa"

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/auth/authSlice'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Avatar from '../img/avatar.png'
import { Link } from 'react-router-dom';

import Moment from 'moment';

const ShowUser = () => {
   
    
    
      const [userr, setUser] = useState()
      const [date, setDate] = useState()

      const { id } = useParams();
      const getUser = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${id}`);
        setUser(response.data);
        response.data && setDate(response.data.createdAt)
      }


      
    useEffect(() => {
        getUser()
    }, [])


    console.log(userr)
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
                                                    src={userr && userr.profile ? userr.profile : Avatar}
                                                    alt="" />


                                            </div>
                                            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{userr && userr.firstname } {userr && userr.surname }</h1>
                                            <h3 class="text-gray-600 font-lg text-semibold leading-6"></h3>
                                            
                                            <ul
                                                class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                                <li class="flex items-center py-3">
                                                    <span>Status</span>
                                                    <span class="ml-auto"><span
                                                        class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                                                </li>
                                                <li class="flex items-center py-3">
                                                    <span>Inscris depuis</span>
                                                    <span class="ml-auto">{Moment(date).format('YYYY-MM-DD HH:mm:ss')}</span>
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
                                                    <span class="ml-1 text-xl tracking-wide">Information du Compte</span>
                                                </div>
                                            </div>
                                            <div class="text-gray-700">
                                                <div class="grid md:grid-cols-2 text-sm">
                                                    <div class="grid grid-cols-2">
                                                        <div class="px-4 py-2 font-semibold">Prénom</div>
                                                        <div class="px-4 py-2">{userr && userr.firstname }</div>
                                                    </div>
                                                    <div class="grid grid-cols-2">
                                                        <div class="px-4 py-2 font-semibold">Nom</div>
                                                        <div class="px-4 py-2">{userr && userr.surname}</div>
                                                    </div>
                                                    <div class="grid grid-cols-2">
                                                        <div class="px-4 py-2 font-semibold">Sexe</div>
                                                        <div class="px-4 py-2">{userr && userr.gender}</div>
                                                    </div>
                                                    <div class="grid grid-cols-2">
                                                        <div class="px-4 py-2 font-semibold">Contact.</div>
                                                        <div class="px-4 py-2">{userr && userr.phonenumber}</div>
                                                    </div>
                                                    <div class="grid grid-cols-2">
                                                        <div class="px-4 py-2 font-semibold">Address 1</div>
                                                        <div class="px-4 py-2">{userr && userr.address1 }</div>
                                                    </div>
                                                    <div class="grid grid-cols-2">
                                                        <div class="px-4 py-2 font-semibold">Address 2</div>
                                                        <div class="px-4 py-2">{userr && userr.address2 }</div>
                                                    </div>
                                                    <div class="grid grid-cols-2">
                                                        <div class="px-4 py-2 font-semibold">Email.</div>
                                                        <div class="px-4 py-2">
                                                            <a class="text-blue-800" href="mailto:jane@example.com">{userr && userr.email }</a>
                                                        </div>
                                                    </div>
                                                    <div class="grid grid-cols-2">
                                                        <div class="px-4 py-2 font-semibold">Fiscal Code</div>
                                                        <div class="px-4 py-2 uppercase">{userr && userr.fiscalcode}</div>
                                                    </div>
                                                    <div class="grid grid-cols-2">
                                                        <div class="px-4 py-2 font-semibold">Satus Marital</div>
                                                        <div class="px-4 py-2">{userr && userr.maritalstatus }</div>
                                                    </div>
                                                    <div class="grid grid-cols-2">
                                                        <div class="px-4 py-2 font-semibold">Profession</div>
                                                        <div class="px-4 py-2">{userr && userr.occupation }</div>
                                                    </div>
                                                    <div class="grid grid-cols-2">
                                                        <div class="px-4 py-2 font-semibold">Revenu Mensuel</div>
                                                        <div class="px-4 py-2">{userr && userr.monthlyincome }</div>
                                                    </div>
                                                    <div class="grid grid-cols-2">
                                                        <div class="px-4 py-2 font-semibold">Source de revenue</div>
                                                        <div class="px-4 py-2">{userr && userr.sourceofincome }</div>
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

export default ShowUser