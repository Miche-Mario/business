import React, { useState, useEffect } from 'react'
import Layout from '../component/Screen/Layout'
import { TiUserAdd } from 'react-icons/ti'
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


    const [users, setUsers] = useState([]);
    const [count, setCount] = useState();


    const getUsers = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`);
        setUsers(response.data.rows)
        setCount(response.data.count)
    }

    const [search, setSearch] = useState()
    const [msg, setMsg] = useState("");


    const getUserName = async (e) => {
        e.preventDefault();
        try {
            const response =  await axios.post(`${process.env.REACT_APP_BASE_URL}/username`, {
            search: search,
          });
          setUsers(response.data.rows)
            setCount(response.data.count)
        } catch (error) {
          if(error.response) {
            setMsg(error.response.data.msg);
          }
        }
      }

    useEffect(() => {
        getUsers()
    }, [])

    const deleteUser = async (userId) => {
        await axios.delete(`${process.env.REACT_APP_BASE_URL}/users/${userId}`);
        getUsers();
        navigate(0);
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
            >
        <Box sx={style}>
          <div className='items-center p-3 '>
            <div className='text-center text-xl font-medium'>Would you really delete ?</div>
            <div className='flex items-center justify-center mt-3 mb-3'>
              <button className='bg-blue-600 rounded text-gray-100 ml-5 font-medium w-20 h-10 flex items-center justify-center'
                onClick={() => deleteUser(va)}
              >
                Delete
              </button>
              <button onClick={handleClose1} className='bg-blue-600 rounded ml-5 text-gray-100 font-medium w-20 h-10 flex items-center justify-center'>
                Cancel
              </button>
            </div>
          </div>

        </Box>
      </Modal>


            <div class="flex overflow-hidden bg-white pt-24">
                <div class=" opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                    <div>
                        <div className='shadow-lg flex h-20 w-full flex-row bg-white border border-gray-300 rounded'>
                            <div className='bg-blue-400 w-40 flex items-center justify-center text-3xl font-semibold text-center text-white'>{count}</div>
                            <div className=' ml-8 w-50 flex items-center justify-center'>
                                <div className='text-2xl text-gray-900'>Utilisateur</div>
                                <form onSubmit={getUserName}>

                               
                                <div class="flex items-center px-8 mt-2 max-w-md mx-auto bg-white rounded " x-data="{ search: '' }">
                                    <div class="w-full">
                                        <input type="text" onChange={(e) => setSearch(e.target.value)} class="w-full border-gray-200 border-2 h-8 px-4 py-1 text-gray-800 bg-gray focus:outline-none"
                                            placeholder="search" x-model="search" />
                                    </div>
                                    <div>
                                        <button type="submit" class="flex items-center bg-blue-500 justify-center w-8 h-8 text-white rounded-r-lg"
                                        >
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                </form>
                            </div>

                        </div>
                        <div className="overflow-x-auto">
                            <div className="max-w-screen max-h-screen  flex font-sans overflow-hidden">
                                <div className="w-full">
                                    <div className="bg-white shadow-md rounded my-6">
                                        <table className="min-w-max w-full ">
                                            <thead>
                                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                    <th className="py-3 px-3 text-center">Prénom</th>
                                                    <th className="py-3 px-3 text-center">Nom </th>
                                                    <th className="py-3 px-3 text-center">Email</th>
                                                    <th className="py-3 px-3 text-center">Contact</th>
                                                    <th className="py-3 px-3 text-center">Profession</th>
                                                    <th className="py-3 px-3 text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-600  text-sm font-light">
                                                {users.map((user, index) => (
                                                    <tr key={user.uuid} className="border-b border-gray-200  hover:bg-gray-100">

                                                        <td className=" py-3 px-3 text-center">
                                                            <div className="flex items-center justify-center">
                                                                <div className="mr-2">
                                                                    <img className="w-6 h-6 rounded-full" src={user.profile} />
                                                                </div>
                                                                <span className="font-medium uppercase"></span>

                                                            </div>
                                                        </td>
                                                        <td className=" py-3 px-3 text-center whitespace-nowrap">
                                                            <div className="flex items-center justify-center">
                                                                <span className="font-medium text-center">{user.suname}</span>
                                                            </div>
                                                        </td>
                                                        <td className=" py-3 px-3 text-center">
                                                            <div className="flex items-center justify-center">
                                                                <span className="font-medium">{user.email}</span>
                                                            </div>
                                                        </td>
                                                        <td className=" py-3 px-3 text-center">
                                                            <span className="bg-green-600 text-white py-1 px-3 rounded-full text-xs">{user.phonenumber}</span>
                                                        </td>
                                                        <td className=" py-3 px-3 text-center">
                                                            <span className="bg-green-600 text-white py-1 px-3 rounded-full text-xs">{user.email}r</span>
                                                        </td>
                                                        <td className=" py-3 px-3 text-center">
                                                            <div className="flex item-center justify-center">
                                                                <div>
                                                                    <Link
                                                                        to={`/users/afficher/${user.uuid}`}
                                                                    >
                                                                        <button className='flex items-center p-1 bg-green-600 text-white text-[1rem]'>
                                                                            <BiEdit />Afficher
                                                                        </button>
                                                                    </Link>

                                                                </div>
                                                                <div className='ml-3'>

                                                                    <button
                                                                        className='flex items-center p-1 bg-red text-white text-[1rem]'
                                                                        onClick={() => handleOpen1(user.uuid)}
                                                                    >
                                                                        <MdDeleteSweep size={20} />Supprimer
                                                                    </button>
                                                                </div>
                                                            </div>
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