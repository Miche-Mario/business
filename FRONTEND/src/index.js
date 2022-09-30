import React from 'react';
import { Provider} from "react-redux";
import { store } from './app/store'
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import AddUser from "./pages/Adduser"
import {BrowserRouter, Routes,Route} from 'react-router-dom'

import {AppContextProvider} from './component/Context'
import Providerr from './component/i18n/Provider'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import OnlineShopping from './pages/OnlineShopping';
import Loan from './pages/Loan';
import Profile from './component/Profile';
import EditProfile from './component/EditProfile';
import Transfer from './pages/Transfer';
import Users from './pages/Users';
import ShowUser from './pages/ShowUser';
import axios from "axios"
import Transaction from './pages/Transaction';
axios.defaults.withCredentials = true;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
        <Provider store={store}>
        <Providerr>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/aprililconto' element={<AddUser/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/loan' element={<Loan/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/editprofile' element={<EditProfile/>}/>
            <Route path='/onlineshopping' element={<OnlineShopping/>}/>
            <Route path='/transfer' element={<Transfer/>}  />
            <Route path='/users' element={<Users/>}  />
            <Route path='/users/afficher/:id' element={<ShowUser/>}  />
            <Route path='/transaction' element={<Transaction/>}  />
        </Routes>
        </BrowserRouter>
        </Providerr>
        </Provider>
    </AppContextProvider>
  </React.StrictMode>
);

