import React from 'react'
import Layout from '../component/Screen/Layout'
import { BiPrinter, BiInfoCircle } from  'react-icons/bi'
import { MdSend } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'


import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/auth/authSlice'
import { useEffect } from 'react'
const OnlineShopping = () => {


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
            <div class="flex overflow-hidden h-screen  bg-white pt-16">
                <div id="main-content" class="h-full  w-full bg-gray-50 relative lg:ml-64">
                    
                <div class="w-full  grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 lg:p-10 gap-4">
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                    <div class="mb-4 flex items-center justify-between">
                      <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Online E-Commerce Shopping</h3>
                        <span class="text-base font-normal text-gray-500">This is a list of latest payment</span>
                      </div>
                      <div class="flex-shrink-0">
                        <a href="#" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
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
                                    Transaction
                                  </th>
                                  <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date & Time
                                  </th>
                                  <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Amount
                                  </th>
                                </tr>
                              </thead>
                              <tbody class="bg-white">
                                <tr>
                                  <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                    You d'ont have any payment yet. Please credit your account
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

export default OnlineShopping