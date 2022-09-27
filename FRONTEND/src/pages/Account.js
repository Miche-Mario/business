import React from 'react'
import Layout from '../component/Screen/Layout'
import { BiPrinter, BiInfoCircle } from  'react-icons/bi'
import { MdSend } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import { Link } from 'react-router-dom'





import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/auth/authSlice'
import { useEffect } from 'react'

const Account = () => {

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
    return (
        <Layout>
            <div class="flex overflow-hidden bg-white pt-16">
                <div class=" opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                    
                                <div class="row gx-5">
                                    <div class="col-xl-8 w-full col-lg-12">
                                        <div class="service-desc">
                                            <div class="accordion" id="accordionExample">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseOne" aria-expanded="true"
                                                            aria-controls="collapseOne">
                                                            <span>
                                                                <i class="ri-arrow-down-s-line plus"></i>
                                                                <i class="ri-arrow-up-s-line minus"></i>
                                                            </span>
                                                            <strong className='text-2xl font-bold text-bluen p-0'>Main Account</strong>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className=' bg-gray-400' class="accordion-body">
                                                            <div className='flex justify-end'>
                                                           
                                                                <div className=' cursor-pointer flex items-center'>
                                                                    <BiPrinter className='mr-1 text-gray-800' />
                                                                    <p>Print</p>
                                                                </div>
                                                                <div className=' cursor-pointer mr-3 ml-4 flex items-center'>
                                                                    <BiInfoCircle cclassName='mr-1 text-gray-800' />
                                                                    <p className=" ml-2 text-gray-800">Informations</p>
                                                                </div>

                                                            </div>
                                                            <div className='flex justify-between mt-20'>
                                                                <div className='flex flex-col'>
                                                                    <div className=' mb-6 flex items-center'>
                                                                        <p className='text-black font-semibold text-gray-300'>Available balanace</p>
                                                                        <BiInfoCircle className='ml-1 text-gray-800' /> 
                                                                    </div>
                                                                    <p class=" mt-12 text-3xl lg:text-4xl leading-none text-black font-extrabold"> 0,000<span className=' text-gray-500 font-light text-xl ml-1'>EUR</span></p>

                                                                </div>
                                                                
                                                                <div className='mr-6  flex flex-col'>
                                                                    <Link to="/transfer">
                                                                        <div className=' w-18 flex flex-row shadow-2xl justify-center  items-center h-10 lg:h-12 rounded-xl bg-bluen p-2'>
                                                                            <MdSend style={{fontSize: 30, color: "white", marginRight: 7}}/>
                                                                            <p className='text-white ml-4 font-semibold '>Send</p>
                                                                        </div>
                                                                    </Link>
                                                                    <Link to="/transfer">
                                                                    <div className='mt-3 lg:mt-0 w-18 flex flex-row shadow-2xl justify-center  items-center h-10 lg:h-12 rounded-xl bg-bluen p-2'>
                                                                        <GiReceiveMoney style={{fontSize: 30, color: "white", marginRight: 7}}/>
                                                                        <p className='text-white ml-4 font-semibold '>Transfer</p>
                                                                    </div> 
                                                                    </Link>                               
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">
                                                            <span>
                                                                <i class="ri-arrow-down-s-line plus"></i>
                                                                <i class="ri-arrow-up-s-line minus"></i>
                                                            </span>
                                                           <strong className='text-2xl font-bold text-primary p-0'>  Account details</strong>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse "
                                                        aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <div className='flex flex-col lg:flex-row w-full'>
                                                                <div className=' lg:w-5/12'>
                                                                    <p className='text-black font-semibold'>Legal Entity</p>
                                                                    <hr/>  
                                                                    <div className='flex'>
                                                                        <div className='flex mt-3 flex-col justify-end items-end'>
                                                                            <p className='pr-4'><em>Name:</em></p>
                                                                            <p className='pr-4'><em>Address:</em></p>
                                                                        </div>
                                                                        <div className='flex mt-3 flex-col'>
                                                                            <p className='text-black font-medium '>MONICCA, BONNUCI</p>
                                                                            <p className=' text-black font-medium'>STREET 879 45546-Rome, Italy</p>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                                <div className='lg:ml-5 lg:mt-0 mt-6 lg:w-5/12'>
                                                                    <p className='text-black font-semibold'>Bank Account</p>
                                                                    <hr/>  
                                                                    <div className='flex'>
                                                                        <div className='flex mt-3 flex-col justify-end items-end'>
                                                                            <p className='p-1'><em>Country:</em></p>
                                                                            <p className='p-1'><em>IBAN:</em></p>
                                                                            <p className='p-1'><em>Account Name:</em></p>
                                                                            <p className='p-1'><em>Account Holder:</em></p>

                                                                        </div>
                                                                        <div className='flex mt-3 flex-col'>
                                                                            <p className='text-black font-medium p-1'>Italy</p>
                                                                            <p className='font-semibold p-1 bg-primary text-white'>ITX988767GUGUGUY0000011</p>
                                                                            <p className='text-black font-medium p-1'>MONICCA, BONNUCI</p>
                                                                            <p className='text-black font-medium p-1'>MONICCA, BONNUCI</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                             
                                                        </div>
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

export default Account