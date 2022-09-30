import React, { useState, useEffect } from 'react'
import Layout from '../component/Screen/Layout'
import { BiTransferAlt, BiMessageAdd } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import axios from "axios";
import { BsChatRightQuote } from 'react-icons/bs'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { getMe } from '../features/auth/authSlice'
import { BiEdit } from 'react-icons/bi'
import { MdDeleteSweep } from 'react-icons/md'
const Message = () => {


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


  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState();
  const [name, setName] = useState();


  const getMessage = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/getAdminMessage`);
    setMessages(response.data.rows)
    setCount(response.data.count)
  }

  const getMessageName = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/getMessageByUserId`, {
        name: name,
      });
      setMessages(response.data.rows)
      setCount(response.data.count)
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }

  const [messagetype, setMessageType] = useState([]);

  const getMessageType = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/msgtype`);
    setMessageType(response.data)
  }


  const [msg, setMsg] = useState("");

  const [users, setUsers] = useState([]);


  const getUsers = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`);
    setUsers(response.data.rows)
  }



  useEffect(() => {
    getMessageType()
    getMessage()
    getUsers()
  }, [])

  const [userid, setUserid] = useState();






  const [type, setType] = useState()
  const [message, setMessage] = useState()
  const [username, setUsername] = useState()


  const handleUsername = () => {
    var user = document.getElementById("user");
    var selectedText = user.options[user.selectedIndex].innerHTML;
    setUsername(selectedText);
  }
  const sendMessage = (e) => {

    e.preventDefault();
    try {
      axios.post(`${process.env.REACT_APP_BASE_URL}/createMessageAdmin`, {
        userId: userid,
        message: message,
        msgtypeid: type,
        username: username
      });
      navigate(0);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        console.log(msg)
      }
    }
  }


  console.log(messages)


  const [open1, setOpen1] = useState(false);
  const [va, setVa] = useState("");

  const handleOpen1 = (uuid) => {
    setOpen1(true);
    setVa(uuid)
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const deux = (b) => {
    return b.toFixed(2);
  }
  console.log(username)
  return (
    <Layout>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <p class="text-white text-xl p-3  bg-dark-purple w-full">Message</p>
          <form onSubmit={sendMessage}>
            <div className='flex flex-row m-3 justify-around items-center'>
              <div className=''>
                <label for="languagename" class="block mb-6 text-base font-medium text-gray-900 p-1">Utilisateur</label>
                <label for="languagename" class="block mb-6 text-base font-medium text-gray-900 p-1">Message type</label>
                <label for="languagename" class="block mb-6 text-base font-bold text-gray-900 p-1">Message</label>

              </div>
              <div >
                <select class="bg-gray-50 border border-gray-300 mb-4 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-1.5"
                  value={userid}
                  id="user"
                  onChange={(e) => { setUserid(e.target.value); handleUsername() }}
                  required
                >
                  <option>choisir utilisateur</option>
                  {users.map((user, index) => (
                    <option value={user.id}>{user.firstname} {user.surname}</option>
                  ))}

                </select>

                <select id="countries" class="bg-gray-50 border border-gray-300 mb-4 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-1.5"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option></option>
                  {messagetype.map((type, index) => (
                    <option value={type.idd}>{type.messagetype}</option>
                  ))}

                </select>
                <textarea rows="4" cols="50" type="text" id="languagename" class={`bg-gray-50 font-bold border border-green-500 pl-2 pr-2 -mb-6  ${type == 1 ? 'text-green-500'
                  : 'text-red'}  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60`}
                  placeholder=""
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

              </div>
              <div >
              </div>
            </div>

            <p className='text-sm text-center text-red'>{msg}</p>
            <div className='flex flex-row justify-around  mt-12 mb-3'>

              <button onClick={handleClose1} className='bg-blue-600 rounded text-gray-100 font-medium w-20 h-10 flex items-center justify-center'>
                Cancel
              </button>
              <button className='bg-blue-600 rounded text-gray-100 font-medium w-20 h-10 flex items-center justify-center' type="submit">
                Envoyer
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
                <form onSubmit={getMessageName}>


                  <div class="flex items-center px-8 mt-2 max-w-md mx-auto bg-white rounded " x-data="{ search: '' }">
                    <div class="w-full">
                      <input type="text" onChange={(e) => setName(e.target.value)} class="w-full border-gray-200 border-2 h-8 px-4 py-1 text-gray-800 bg-gray focus:outline-none"
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
                <button onClick={handleOpen1} className='bg-blue-600 rounded-lg text-gray-100 font-medium w-auto p-1 h-10 flex items-center justify-center' type="submit" name='Add'>
                  Envoyer Message<BiTransferAlt className='text-2xl ml-2' />
                </button>

              </div>

            </div>
            <div className="overflow-x-auto">
              <div className="max-w-screen max-h-screen m-5  flex font-sans overflow-hidden">
                <div className="w-7/12">

                  {messages.map((message, index) => (
                    <div key={message.uuid} className={`${message.sent && 'bg-green-500'} mt-2 rounded-xl shadow-lg  p-2 ${message.receive && 'bg-red'}`}>
                      <div className='flex items-center flex-row'>
                        <div className={`flex ${message.sent && 'justify-start '} ${message.receive && 'justify-end mr-6'}`}>
                          <BsChatRightQuote style={{ color: "white", fontSize: 35 }} />
                        </div>
                        <div className='text-white font-semibold ml-4 mt-3 flex'>
                          {message.message}
                        </div>
                      </div>
                      {message.sent &&
                        <div className='flex justify-end'>
                          <p className='text-white font-light'>Envoyé à: <span className='font-semibold'>{message.user.firstname} {message.user.surname}</span></p>
                        </div>
                      }
                      {message.receive &&
                        <div className='flex justify-end'>
                          <p className='text-white font-light'>Envoyé par: <span className='font-semibold'>{message.user.firstname} {message.user.surname}</span></p>
                        </div>
                      }
                    </div>
                  ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Message