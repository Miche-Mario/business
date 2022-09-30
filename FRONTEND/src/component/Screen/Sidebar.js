import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoSignOut } from 'react-icons/go'
import { GiReceiveMoney } from 'react-icons/gi'
import { RiAdminLine } from 'react-icons/ri'
import { BiTransferAlt, BiMessageAdd } from 'react-icons/bi'
import { MdAddShoppingCart } from 'react-icons/md'
import { RiBankCardFill } from 'react-icons/ri'
import { BsBank2 } from 'react-icons/bs'


import { useDispatch, useSelector } from 'react-redux'
import { LogOut, reset } from '../../features/auth/authSlice'
const Sidebar = () => {


   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { user } = useSelector(
      (state) => state.auth
   );

   const logout = () => {
      dispatch(LogOut());
      dispatch(reset());
      navigate("/login");
   }




   return (
      <>
         <aside id="sidebar" class="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
            <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
               <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                  <div class="flex-1 px-3 bg-white divide-y space-y-1">
                     <ul class="space-y-2 pb-2">
                        <li>
                           <form action="#" method="GET" class="lg:hidden">
                              <label for="mobile-search" class="sr-only">Search</label>
                              <div class="relative">
                                 <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                    </svg>
                                 </div>
                                 <input type="text" name="email" id="mobile-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5" placeholder="Search" />
                              </div>
                           </form>
                        </li>
                        {user && user.role === "user" && <> <li>
                           <Link to="/dashboard">
                              <div class="space-y-2 hover:bg-blue-500  bg-blue-200 rounded-xl shadow-lg">
                                 <a href="#" class="text-base text-gray-900 font-normal rounded-lg  flex items-center p-2 group ">
                                    <div className='p-2 bg-primary shadow-xl rounded-lg'>
                                       <BsBank2 style={{ fontSize: 20, color: "white" }} />
                                    </div>
                                    <span class="ml-3 flex-1 text-black whitespace-nowrap font-semibold">Dashboard</span>
                                 </a>
                              </div>
                           </Link>
                        </li>
                        <li>
                           <Link to="/account">
                              <div class="space-y-2 hover:bg-blue-500  bg-blue-200 rounded-xl shadow-lg">
                                 <a href="#" class="text-base text-gray-900 font-normal rounded-lg  flex items-center p-2 group ">
                                    <div className='p-2 bg-primary shadow-xl rounded-lg'>
                                       <RiBankCardFill style={{ fontSize: 20, color: "white" }} />
                                    </div>
                                    <span class="ml-3 flex-1 text-black whitespace-nowrap font-semibold">Account</span>
                                 </a>
                              </div>
                           </Link>
                        </li>
                        <li>
                           <Link to="/onlineshopping">
                              <div class="space-y-2 hover:bg-blue-500  bg-blue-200 rounded-xl shadow-lg">
                                 <a href="#" class="text-base text-gray-900 font-normal rounded-lg  flex items-center p-2 group ">
                                    <div className='p-2 bg-primary shadow-xl rounded-lg'>
                                       <MdAddShoppingCart style={{ fontSize: 20, color: "white" }} />

                                    </div>
                                    <span class="ml-3 flex-1 text-black whitespace-nowrap font-semibold">Online Shopping</span>
                                 </a>
                              </div>
                           </Link>
                        </li>
                        <li>
                           <Link to="/loan">
                              <div class=" hover:bg-blue-500  bg-blue-200 rounded-xl shadow-lg">
                                 <a href="#" class="text-base text-gray-900 font-normal rounded-lg  flex items-center p-2 group ">
                                    <div className='p-2 bg-primary shadow-xl rounded-lg'>
                                       <GiReceiveMoney style={{ fontSize: 20, color: "white" }} />
                                    </div>
                                    <span class="ml-3 flex-1 text-black whitespace-nowrap font-semibold">Loan</span>
                                 </a>
                              </div>
                           </Link>
                        </li>

                       </>}

                        {user && user.role === "admin" && <> 
                        <li>
                           <Link to="/users">
                              <div class=" hover:bg-blue-500  bg-blue-200 rounded-xl shadow-lg">
                                 <a href="#" class="text-base text-gray-900 font-normal rounded-lg  flex items-center p-2 group ">
                                    <div className='p-2 bg-primary shadow-xl rounded-lg'>
                                       <RiAdminLine style={{ fontSize: 20, color: "white" }} />
                                    </div>
                                    <span class="ml-3 flex-1 text-black whitespace-nowrap font-semibold">Admin</span>
                                 </a>
                              </div>
                           </Link>
                        </li>
                        <li>
                           <Link to="/transaction">
                              <div class=" hover:bg-blue-500  bg-blue-200 rounded-xl shadow-lg">
                                 <a href="#" class="text-base text-gray-900 font-normal rounded-lg  flex items-center p-2 group ">
                                    <div className='p-2 bg-primary shadow-xl rounded-lg'>
                                       <BiTransferAlt style={{ fontSize: 20, color: "white" }} />
                                    </div>
                                    <span class="ml-3 flex-1 text-black whitespace-nowrap font-semibold">Transaction</span>
                                 </a>
                              </div>
                           </Link>
                        </li>

                           <li>
                              <Link to="/notifications">
                                 <div class=" hover:bg-blue-500  bg-blue-200 rounded-xl shadow-lg">
                                    <a href="#" class="text-base text-gray-900 font-normal rounded-lg  flex items-center p-2 group ">
                                       <div className='p-2 bg-primary shadow-xl rounded-lg'>
                                          <BiMessageAdd style={{ fontSize: 20, color: "white" }} />
                                       </div>
                                       <span class="ml-3 flex-1 text-black whitespace-nowrap font-semibold">Notifications</span>
                                    </a>
                                 </div>
                              </Link>
                           </li>

                           <li>
                              <Link to="/demandepret">
                                 <div class=" hover:bg-blue-500  bg-blue-200 rounded-xl shadow-lg">
                                    <a href="#" class="text-base text-gray-900 font-normal rounded-lg  flex items-center p-2 group ">
                                       <div className='p-2 bg-primary shadow-xl rounded-lg'>
                                          <GiReceiveMoney style={{ fontSize: 20, color: "white" }} />
                                       </div>
                                       <span class="ml-3 flex-1 text-black whitespace-nowrap font-semibold">Demande de Pret</span>
                                    </a>
                                 </div>
                              </Link>
                           </li>
                        </>
                        }
                     </ul>
                     <hr />

                  </div>
                  <div onClick={logout} class=" cursor-pointer space-y-2 hover:bg-blue-500  bg-blue-200 rounded-xl shadow-lg">
                     <div class="text-base text-gray-900 font-normal rounded-lg  flex items-center p-2 group ">
                        <div className='p-2 bg-primary shadow-xl rounded-lg'>
                           <GoSignOut style={{ fontSize: 20, color: "white" }} />
                        </div>
                        <span class="ml-3 flex-1 text-clack whitespace-nowrap font-bold">Log Out</span>
                     </div>
                  </div>
               </div>
            </div>
         </aside>
      </>
   )
}

export default Sidebar