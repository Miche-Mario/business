import React, { useState, useEffect } from 'react'
import Layout from '../component/Screen/Layout'
import Proof from '../component/Proof'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { BiInfoCircle } from 'react-icons/bi'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/auth/authSlice'

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography className='text-white font-bold text-xl'>{`${Math.round(
                    props.value
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

const Transfer = () => {






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
        left: '60%',

        transform: 'translate(-50%, -50%)',
        p: 0,
        m: 0,
        height: 'auto',
        display: 'flex',
        alignItems: 'center'
    };

    const style1 = {
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
    const [open1, setOpen1] = useState(false);
    const handleClose = () => {
        setOpen1(false);
      };
    const HandleSubmit = (e) => {

        e.preventDefault();
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
            setOpen1(true)
        }, 3000);

    }



    const [progress, setProgress] = React.useState(10);
    React.useEffect(() => {
        const random = Math.random() + 60 * Math.random();
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= random ? 10 : prevProgress + 6
            );
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);


    return (
        <Layout>
            {
                open &&
                <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className=' w-10/12 ' sx={style} >

                        <Box sx={{ width: '80%' }}>
                            <LinearProgressWithLabel value={progress} />
                        </Box>
                    </Box>




                </Modal>
            }

            {
                open1 &&
                <Modal
                    open={open1}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className='w-11/12 lg:w-5/12 ' sx={style1} >
                        <div className=' bg-gray-200 w-full p-3 border-b-gray-300 shadow-sm border-1'>
                            <p className='text-center text-red text-2xl font-bold'> Transaction failled</p>
                        </div>
                        <div className='pt-2 pr-4 pl-4 pb-2'>
                            <p className=' text-gray-600 font-bold text-sm lg:text-xl text-center'>Merci de vérifier vos informations bancaires et réessayer. Contactez au besoin le service client.
                                Merci pour votre compréhension
                            </p>
                        </div>
                        <div className='flex lg:m-3 bg-white shadow-xl m-2 justify-center items-center'>
                            <div className=' '>
                                <label for="languagename" class="block text-base lg:text-xl text-right w-66 font-medium text-gray-900 p-2 mb-2">Amount :</label>
                                <label for="languagename" class="block text-base lg:text-xl w-66 text-right font-medium text-gray-900 p-2 mb-2">Bank name :</label>
                                <label for="languagename" class="block text-base lg:text-xl w-66 text-right font-medium text-gray-900 p-2 mb-2">Sort Code :</label>
                                <label for="languagename" class="block text-base lg:text-xl w-66  text-right font-medium text-gray-900 p-2 mb-2">Account number :</label>
                            </div>
                            <div className='-mt-6 lg:mt-0'>
                                <label for="languagename" class="block text-base lg:text-xl w-66  text-left font-medium text-gray-900 p-2 mb-2">5000</label>
                                <label for="languagename" class="block text-base lg:text-xl w-66  text-left font-medium text-gray-900 p-2 mb-2">Ecobank Benin</label>
                                <label for="languagename" class="block text-base lg:text-xl w-66  text-left font-medium text-gray-900 p-2 mb-2">134599JDHG74</label>
                                <label for="languagename" class="block text-base lg:text-xl w-66  text-left font-medium text-gray-900 p-2 mb-2">IT6435GSH6262HHTD8</label>
                            </div>
                        </div>
                        <div className=' mr-3 ml-4 mt-2 flex items-center'>
                            <BiInfoCircle cclassName='mr-1 text-gray-800' />
                            <p className=" ml-2 text-black">Please kindly send a report</p>
                        </div>

                        <div className='container m-3 flex justify-around'>
                            <button
                            onClick={handleClose}
                                className=' btn h-12 btn-outline-secondary border border-black bg-gray-100 text-gray-700 '
                            >
                                Cancel
                            </button>
                            <button
                                className=' bg-blue-500 text-white p-2  h-12
                                rounded-xl font-semibold cursor-pointer  
                                hover:bg-bluen hover:text-white transition duration-200 ease-in-out '
                            >
                                Send report
                            </button>
                        </div>

                    </Box>
                </Modal>
            }
            <div class="flex overflow-hidden h-screen  bg-white pt-16">
                <div id="main-content" class="h-full overflow-y-auto w-full bg-gray-50 relative lg:ml-64">

                    <div className='lg:m-5 lg:p-5 mt-3'>
                        <h2 className=' text-bluen mb-3 ml-2 lg:ml-0 font-bold text-3xl'>Payment details</h2>
                        <div className=' border-2 p-4 mb-3'>
                            <p className='mb-3'>You can only receive payment by <strong>Bank transfer</strong></p>
                            <h2 className='text-bluen mb-3 font-bold text-3xl'>Bank details</h2>
                            <p className='mb-3'>Details of the account to which payment should be made:</p>
                            <form onSubmit={HandleSubmit}>
                                <div className=' border-t-2 border-b-2 p-3 flex items-center justify-between'>
                                    <p className='ml-3 font-bold'>Amount <span className='ml-1 text-xl text-red -mt-3'>*</span></p>
                                    <input required type="text" className='pr-3 border border-gray-100 text-right h-12 w-7/12 lg:w-4/12 mr-1 lg:mr-6' />
                                </div>
                                <div className=' border-t-2 border-b-2 p-3 flex items-center justify-between'>
                                    <p className='ml-3 font-bold'>Bank Name <span className='ml-1 text-xl text-red -mt-3'>*</span></p>
                                    <input required type="text" className='pr-3 border border-gray-100 text-right h-12 w-7/12 lg:w-4/12 mr-1 lg:mr-6' />
                                </div>
                                <div className=' border-t-2 border-b-2 p-3 flex items-center justify-between'>
                                    <p className='ml-3 font-bold'>Sort Code <span className='ml-1 text-xl text-red -mt-3'>*</span></p>
                                    <input required type="text" className=' pr-3 border border-gray-100 text-right h-12 w-7/12 lg:w-4/12 mr-1 lg:mr-6' />
                                </div>
                                <div className=' border-t-2 p-3 flex items-center justify-between'>
                                    <p className='ml-3 font-bold'>Account Number <span className='ml-1 text-xl text-red -mt-3'>*</span></p>
                                    <input required type="text" className=' pr-3 border border-gray-100 text-right h-12 w-7/12 lg:w-4/12 mr-1 lg:mr-6' />
                                </div>
                                <button type="submit" className=' w-full p-2 bg-bluen text-white rounded-xl shadow-2xl text-center font-semibold'>Proceed to Transaction</button>
                            </form>
                            <Proof />

                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Transfer