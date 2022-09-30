import React, { useState, useEffect } from 'react'
import Layout from '../component/Screen/Layout'
import { BiTransferAlt, BiMessageAdd } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import axios from "axios";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { getMe } from '../features/auth/authSlice'
import { BiEdit } from 'react-icons/bi'
import { MdDeleteSweep } from 'react-icons/md'
const Users = () => {

   
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 500,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid darkblue',
    boxShadow: 24,
    p: 0,
    m: 0,
    height: 'auto'
  };
  
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch])

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.role !== "admin") {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);


    const [transaction, setTransaction] = useState([]);
    const [count, setCount] = useState();


    const getTransaction = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/transaction`);
        setTransaction(response.data.rows)
        setCount(response.data.count)
    }

  
    const [msg, setMsg] = useState("");

    const [users, setUsers] = useState([]);


    const getUsers = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`);
        setUsers(response.data.rows)
    }

    

    useEffect(() => {
        getTransaction()
        getUsers()
    }, [])

    const [userid, setUserid] = useState([]);
    const [courant, setCourant] = useState([]);
    const [pret, setPret] = useState([]);
    const [description, setDescription] = useState([]);
    
console.log(users)

    const saveTransaction =  (e) => {
     
        e.preventDefault();
        try {
           axios.post(`${process.env.REACT_APP_BASE_URL}/transaction`, {
            user_userid: userid,
            courant: courant,
            pret: pret,
            description: description,   
            userid: userid 
          });
        
          console.log("ok")

        } catch (error) {
          if (error.response) {
            setMsg(error.response.data.msg);
            console.log(msg)
          }
        }
      }


    const [open1, setOpen1] = useState(false);
    const [va, setVa] = useState("");
  
    const handleOpen1 = (uuid) => {
      setOpen1(true);
      setVa(uuid)
    };
    const handleClose1 = () => {
      setOpen1(false);
    };

    return (
        <Layout>
            <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
        <Box sx={style} >
          <p class="text-white text-xl p-3  bg-dark-purple w-full">Transaction DETAILS</p>
          <form onSubmit={saveTransaction}>
            <div className='flex flex-row m-3 justify-around items-center'>
              <div className=''>
                <label for="languagename" class="block mb-6 text-base font-medium text-gray-900 p-1">Utilisateur</label>
                <label for="languagename" class="block mb-6 text-base font-medium text-gray-900 p-1">Compte Courant</label>
                <label for="languagename" class="block mb-6 text-base font-medium text-gray-900 p-1">Compte Pret</label>
                <label for="languagename" class="block mb-6 text-base font-medium text-gray-900 p-1">Description</label>

              </div>
              <div >
              <select id="countries" class="bg-gray-50 border border-gray-300 mb-4 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-1.5"
                value={userid}
                onChange={(e) => setUserid(e.target.value)} 
                required
            >
                  <option>choisir utilisateur</option>
                  { users.map((user, index) => (
                      <option value={user.id}>{user.firstname} {user.surname}</option>
                  ))} 
                  
                </select>
              <input type="text" id="languagename" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-1.5 " 
                placeholder="00" 
                value={courant}
                onChange={(e) => setCourant(e.target.value)}  
              />
              <input type="text" id="languagename" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-1.5 " 
                placeholder="00" 
                value={pret}
                onChange={(e) => setPret(e.target.value)}  
              />
              <input type="text" id="languagename" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-1.5 " 
                placeholder="00" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}  
              />
              </div>
              <div >
              </div>
            </div>
           
            <p className='text-sm text-center text-red'>{msg}</p>
            <div className='flex flex-row justify-around  mt-3 mb-3'>
              <button className='bg-blue-600 rounded text-gray-100 font-medium w-20 h-10 flex items-center justify-center' type="submit">
                Save
              </button>
              <button onClick={handleClose1} className='bg-blue-600 rounded text-gray-100 font-medium w-20 h-10 flex items-center justify-center'>
                Cancel
              </button>
            </div>
          </form>
        </Box>


      </Modal>


            <div class="flex overflow-hidden bg-white pt-24">
                <div class=" opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                    <div>
                        <div className='shadow-lg flex h-20 w-full flex-row bg-white border border-gray-300 rounded'>
                            <div className='bg-blue-400 w-40 flex items-center justify-center text-3xl font-semibold text-center text-white'>{count}</div>
                            <div className=' ml-8 w-50 flex items-center '>
                            <button onClick={handleOpen1} className='bg-blue-600 rounded-lg text-gray-100 font-medium w-auto p-1 h-10 flex items-center justify-center' type="submit" name='Add'>
                                Effectuer transaction<BiTransferAlt className='text-2xl ml-2' />
                            </button>
                                
                            </div>

                        </div>
                        <div className="overflow-x-auto">
                            <div className="max-w-screen max-h-screen  flex font-sans overflow-hidden">
                                <div className="w-full">
                                    <div className="bg-white shadow-md rounded my-6">
                                        <table className="min-w-max w-full ">
                                            <thead>
                                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                    <th className="py-3 px-3 text-center">Nom</th>
                                                    <th className="py-3 px-3 text-center">Compte Courant </th>
                                                    <th className="py-3 px-3 text-center">Compte Pret</th>
                                                    <th className="py-3 px-3 text-center">Description</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-600  text-sm font-light">
                                                {transaction.map((trans, index) => (
                                                    <tr key={trans.uuid} className="border-b border-gray-200  hover:bg-gray-100">

                                                        <td className=" py-3 px-3 text-center">
                                                            <div className="flex items-center justify-center">
                                                                <div className="mr-2">
                                                                    <img className="w-6 h-6 rounded-full" src={trans.user.profile} />
                                                                </div>
                                                                <span className="font-medium uppercase">{trans.user.firstname} {trans.user.surname}</span>

                                                            </div>
                                                        </td>
                                                        <td className=" py-3 px-3 text-center whitespace-nowrap">
                                                            <div className="flex items-center justify-center">
                                                                <span className="font-medium text-center">{trans.courant}</span>
                                                            </div>
                                                        </td>
                                                        <td className=" py-3 px-3 text-center">
                                                            <div className="flex items-center justify-center">
                                                                <span className="font-medium">{trans.pret}</span>
                                                            </div>
                                                        </td>
                                                        <td className=" py-3 px-3 text-center">
                                                            <span className="bg-green-600 text-white py-1 px-3 rounded-full text-xs">{trans.description}</span>
                                                        </td>
                                                   </tr>))}
                                            </tbody>
                                        </table>
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

export default Users