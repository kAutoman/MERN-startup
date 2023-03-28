import React, { useState } from 'react'
import './login.view.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../store/actions/auth';
//react-carousel-responsive-component module
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Login = ({login , isAuthenticated, isDark}) => {

    const [passwordShow, setPasswordShow] = useState(false);
    const changeView = (e) => {
        e.preventDefault();
        setPasswordShow(!passwordShow);
    }

    const [formData, setFormData] = useState({
        email : '',
        password : ''
    });

    const onChange = (e) => {
        setFormData({...formData , [e.target.name] : e.target.value});        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('email' , email);
        data.append('password' , password);
        login(data);
    } 

    // if (isAuthenticated) {
    //     return <Navigate to="/admin" />;
    // }

    const { email, password } = formData;

    return(
        <div className={`${isDark && 'dark'}`}>
            <div className='grid grid-cols-1 min-[1030px]:grid-cols-2 gap-5 px-10 m-auto dark:bg-[#222b45] h-[110vh]' id='login'>
                <form className='text-gray-800 dark:text-white m-auto md:m-3' onSubmit={onSubmit}>
                    <p className='text-5xl font-extrabold text-black dark:text-white'>Login to your KENEK Account</p>
                    <div id='form-group'>
                        <div className='flex items-center bg-gray-200  px-4 py-4 rounded-2xl '>
                            <input type={'email'} name="email" value={email} placeholder="email address" className='bg-gray-200 px-2  text-base focus:outline-none w-full'
                            onChange={onChange}/>
                        </div>
                    </div>

                    <div id='form-group'>
                        <div className='flex flex-row justify-between items-center bg-gray-200 text-base  px-4 py-4 rounded-2xl '>
                            <input type={`${passwordShow? 'text ': 'password'}`} name='password' value={password} onChange={onChange} id="password_input" placeholder="Password" className='bg-gray-200 px-2  text-base focus:outline-none  w-full'/>
                            <button onClick={changeView}>
                                {passwordShow ?
                                (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className=" text-black" role="img" aria-label="Eye Visible "><title>Eye Visible</title><path fillRule="evenodd" clipRule="evenodd" d="M7.99961 13C5.33906 13 3.02323 11.1441 1.08443 8C3.02323 4.85586 5.33906 3 7.99961 3C10.6602 3 12.976 4.85586 14.9148 8C12.976 11.1441 10.6602 13 7.99961 13ZM7.99961 2C4.73167 2 2.10074 4.34324 0.0703125 7.74367V8.25633C2.10074 11.6568 4.73167 14 7.99961 14C11.2675 14 13.8985 11.6568 15.9289 8.25633V7.74367C13.8985 4.34324 11.2675 2 7.99961 2ZM5.99961 8C5.99961 6.89543 6.89504 6 7.99961 6C9.10418 6 9.99961 6.89543 9.99961 8C9.99961 9.10457 9.10418 10 7.99961 10C6.89504 10 5.99961 9.10457 5.99961 8ZM7.99961 5C6.34275 5 4.99961 6.34315 4.99961 8C4.99961 9.65685 6.34275 11 7.99961 11C9.65646 11 10.9996 9.65685 10.9996 8C10.9996 6.34315 9.65646 5 7.99961 5Z" fill="currentColor"></path></svg>)
                                    : (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className=" text-black" role="img" aria-label="Eye Hidden "><title>Eye Hidden</title><path fillRule="evenodd" clipRule="evenodd" d="M11.2756 11.9826L9.73816 10.4451C9.24769 10.7945 8.64765 11 7.99961 11C6.34275 11 4.99961 9.65683 4.99961 7.99998C4.99961 7.35194 5.20508 6.75189 5.55443 6.26142L3.90318 4.61017C2.89039 5.44977 1.94985 6.59653 1.08443 7.99998C3.0232 11.144 5.33902 12.9995 7.99961 12.9995C9.14933 12.9995 10.2447 12.6446 11.2756 11.9826ZM12.0914 11.3842L10.4452 9.73796C10.7943 9.2476 10.9996 8.64777 10.9996 7.99998C10.9996 6.34312 9.65646 4.99998 7.99961 4.99998C7.35182 4.99998 6.75198 5.20529 6.26162 5.5544L4.71867 4.01144C5.74499 3.35282 6.83953 2.99998 7.99961 2.99998C10.6601 2.99998 12.976 4.85581 14.9147 7.99992C14.0506 9.40012 13.1059 10.545 12.0914 11.3842ZM12.8011 12.0938C13.9685 11.1086 15.013 9.79023 15.9289 8.25631V7.74364C13.8985 4.34322 11.2675 1.99998 7.99961 1.99998C6.53909 1.99998 5.20581 2.46802 3.99651 3.28929L2.35316 1.64594L1.64605 2.35304L3.19359 3.90058C2.02767 4.88671 0.987694 6.20727 0.0703125 7.74364V8.25631C2.10077 11.6568 4.73171 13.9995 7.99961 13.9995C9.44879 13.9995 10.7833 13.5295 11.9977 12.7047L13.6461 14.353L14.3532 13.6459L12.8011 12.0938ZM9.99961 7.99998C9.99961 8.37075 9.89871 8.71797 9.72288 9.01565L6.98393 6.27671C7.28162 6.10087 7.62883 5.99998 7.99961 5.99998C9.10418 5.99998 9.99961 6.89541 9.99961 7.99998ZM9.0159 9.72289L6.2767 6.98369C6.10064 7.28151 5.99961 7.62894 5.99961 7.99998C5.99961 9.10455 6.89504 9.99998 7.99961 9.99998C8.37064 9.99998 8.71807 9.89894 9.0159 9.72289Z" fill="currentColor"></path></svg>)
                            }</button>
                        </div>
                    </div>
                    {/* submit button */}
                    <div id='submit_button' className='mt-10 flex justify-center'>
                        <button  type='submit' className='bg-[rgba(234,180,1,0.83)] px-3 py-4 w-full rounded-2xl hover:bg-[rgb(234,180,1)]'>
                            <span className='text-white text-xl'>Log in</span>
                        </button>
                    </div>
                    {/* Don't have an account ? redirect : not */}
                    <div id='already_signed' className='mt-5 text-center'>
                        <p className='text-gray-700 dark:text-inherit font-semibold'>Don't have an account? <span><Link to={'/register'} className="underline text-yellow-500">Sign Up</Link> here</span></p>
                    </div>
                    {/* privacy policy */}
                    <div className='text-gray-800 dark:text-gray-50  px-2 text-center mt-10'>
                        <p className='text-sm'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and </p> 
                        <p className='text-sm'><span className='underline'>Terms of Service apply</span>.</p>
                    </div>
                </form>
                <div className='hidden min-[1030px]:block m-auto'>
                <Carousel autoPlay={true} infiniteLoop={true}>
                    <div>
                        <img src="./img/carousel/1.jpg" alt=''/>
                        <p className="legend">backstory 1</p>
                    </div>
                    <div>
                        <img src="./img/carousel/2.jpg" alt=''/>
                        <p className="legend">backstory 2</p>
                    </div>
                    <div>
                        <img src="./img/carousel/3.jpg" alt=''/>
                        <p className="legend">backstory 3</p>
                    </div>
                </Carousel>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated : state.auth.isAuthenticated,
    user : state.auth.user,
    isDark : state.darkMode.isDark
});
  
export default connect(mapStateToProps, { login })(Login);