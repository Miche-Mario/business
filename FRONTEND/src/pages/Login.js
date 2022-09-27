import React, {useState, useEffect} from 'react'
import Menu from "../component/Menu"

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { LoginUser, reset} from '../features/auth/authSlice'



const Login = () => {
    

    

 
    const [username, setUsername] = useState("");
    const [password, setPassword ] = useState(""); 

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
      (state) => state.auth
    );
  
    useEffect(() => {
      if(user || isSuccess) {
        navigate("/dashboard");
      }
      dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]); 
  
    const Auth = (e) => {
      e.preventDefault();
      dispatch(LoginUser({username, password}));
    }









  return (
    <>
   

      <Menu/>
      <div className="switch-theme-mode">
        <label id="switch" className="switch">
          <input type="checkbox" onchange="toggleTheme()" id="slider" />
          <span className="slider round"></span>
        </label>
      </div>

    <section class="Login-wrap mt-52">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                <div class="login-form-wrap">
                    <div class="login-header">
                        <h3 className='text-center'>Login Here</h3>
                        <p className='text-center'>Welcome Back!! Login To Your Account</p>
                    </div>
                    <div class="login-form">
                        <div class="login-body">
                            <form onSubmit={Auth} class="form-wrap" action="#">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input id="text" n type="text"
                                                placeholder="Username" 
                                                required
                                                name="username"
                                                value={username}
                                                onChange= { (e) => setUsername(e.target.value)} 
                
                                                />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input
                                                 type="password" 
                                                 name="password" 
                                                 id="password" 
                                                 placeholder="password" 
                                                 value={password}
                                                 onChange= {(e) => setPassword(e.target.value)}/>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div class="checkbox style3">
                                            <input type="checkbox" id="test_1"/>
                                            <label for="test_1 mt-1">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    
                                    {
                                        isError &&
                                        <p className='text-red text-sm text-center'>{message}</p>
                                    }
                                    <div class="col-lg-12 mt-3">
                                        <div class="form-group">
                                            <button class="btn style1">
                                                Login Now
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-12 text-center">
                                        <p class="mb-0">Don’t Have an Account? <a class="link style1"
                                                href="/aprililconto">Create One</a></p>
                                    </div>
                                </div>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default Login