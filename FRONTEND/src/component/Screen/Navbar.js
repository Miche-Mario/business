import React from 'react'
import { NavLink } from 'react-router-dom';
import Avatar from "../../img/avatar.png"
import { RiContactsLine } from "react-icons/ri" 
import { AiOutlinePoweroff } from "react-icons/ai"
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { GrMail }  from 'react-icons/gr'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000',
    },
  },
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}blue`,
    padding: '0 4px',
  },
}));
const Navbar = () => {
    const handleClick = event => {
        document.querySelector('#toggleSidebarMobileHamburger').classList.add('hidden');
        document.querySelector('#toggleSidebarMobileClose').classList.remove('hidden');
        document.querySelector('#sidebar').classList.remove('hidden');
      };
      const removeClick = event => {
        document.querySelector('#toggleSidebarMobileHamburger').classList.remove('hidden');
        document.querySelector('#toggleSidebarMobileClose').classList.add('hidden');
        document.querySelector('#sidebar').classList.add('hidden');
      };
  return (
     <ThemeProvider theme={theme}>
        <nav class="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
         <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
               <button   id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                  <svg onClick={handleClick} id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                  </svg>
                  <svg onClick={removeClick} id="toggleSidebarMobileClose" class="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
               </button>
               <a href="#" class="text-xl font-bold flex items-center lg:ml-2.5">
               <img src="https://demo.themesberg.com/windster/images/logo.svg" class="h-6 mr-2" alt="Windster Logo"/>
               <span class=" hidden lg:block self-center whitespace-nowrap">Windster</span>
               </a>
               <form action="#"  method="GET" class="hidden lg:block lg:pl-32">
                  <label for="topbar-search" class="sr-only">Search</label>
                  <div class="mt-1 relative lg:w-64">
                     <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg>
                     </div>
                     <input type="text" name="email" id="topbar-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5" placeholder="Search"/>
                  </div>
               </form>
            </div>
            <div class="flex  items-center">
               <button id="toggleSidebarMobileSearch" type="button" class=" hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg">
                  <span class="sr-only">Search</span>
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                  </svg>
               </button>
              <div className='mr-6'>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="primary">
                    <GrMail style={{ color: "gray  ", fontSize: 30 }} />
                  </StyledBadge>
                </IconButton>
              </div>
              
               <div className="group inline-block text-light-dark text-10">
      <button
        className="outline-offset-2outline-1 p-1 lg:mr-20 h-12 bg-gray-100  border-blue-400 border-b-2 rounded-sm flex items-center w-44"
      >
         <div className='w-8'>
            <img src={Avatar} className="rounded-full" alt='profile'/>
         </div>
        <div className="font-bold text-sm flex-1 text-black">Alex</div>
        <div className="inline-block w-3 h-3 ml-1 lg:mr-1 rounded-full bg-green-400"> </div>

        <span>
          <svg
            className="fill-current text-black h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
           
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </span>
      </button>
      <ul
        className=" bg-blue-500 border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-48"
      >
        <NavLink to="/profile">

            <a className='flex items-center pt-2 hover:bg-blue-700 hover:text-gray-400 hover:font-bold'>
               <RiContactsLine style={{fontSize: 20, color: "white", marginLeft: 5}} />
              <li className="rounded-sm px-1 text-white  py-1  cursor-pointer">Profile</li>
            </a>        
        </NavLink>
        <hr/>
        <NavLink to="/">
        <a className='mt-3 pt-2 flex items-center  hover:bg-blue-700 hover:text-gray-400 hover:font-bold'>
               <AiOutlinePoweroff style={{fontSize: 20, color: "white", marginLeft: 5}} />
              <li className="rounded-sm px-1 text-white  py-1  cursor-pointer">Log out</li>
            </a>        
        </NavLink>
                
      </ul>

      
    </div>
            </div>
         </div>
      </div>
   </nav>
   </ThemeProvider>
  )
}

export default Navbar