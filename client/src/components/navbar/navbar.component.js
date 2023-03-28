//import modules
import React, { useState, useEffect } from 'react';
//import built-in module
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/auth';
import { getCurrentProfile } from '../../store/actions/profile';
import { setDartModeAction } from '../../store/actions/darkMode';
import ProSidebar from '../admin/ProSidebar';
import { Tooltip } from 'react-tooltip';
//import css
import './navbar.component.css';
import default_avatar from '../../image/default.png';

const Navbar = ({
  profile: { profile },
  isAuthenticated,
  isDark,
  auth,
  logout,
  getCurrentProfile,
  setDartModeAction
}) => {
  useEffect(() => {
    if (isAuthenticated) getCurrentProfile();
    if (localStorage.kenek_dark) {
      setDartModeAction(localStorage.kenek_dark);
      setDarkMode(localStorage.kenek_dark);
    }
  }, [getCurrentProfile, isAuthenticated]);
  const [isDarkMode, setDarkMode] = useState(false);
  const [responsive, setResponsive] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const toggleDarkMode = (checked) => {
    localStorage.setItem('kenek_dark',!checked);
    setDarkMode(!checked);
    setDartModeAction(!checked);
  };
  const navigate = useNavigate();
  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const handleProSidebarClose = () => {
    setShowSideBar(false);
  };
  const guestLink = (
    <div id="container" className={`flex px-5 justify-between items-center`}>
      <Link to={'/'}>
        <p className="text-2xl font-extrabold font dark:text-white">KENEK</p>
      </Link>
      <div className="flex items-center">
        <div>
          <DarkModeSwitch
            style={{
              backgroundColor: '#EAB301',
              borderRadius: '20px',
              padding: '3px'
            }}
            checked={!isDarkMode}
            onChange={toggleDarkMode}
            size={30}
          />
        </div>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 z-10 border-2  border-[#EAB301] text-xl text-[#EAB301] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2"
          onClick={() => {
            setResponsive(!responsive);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden   md:flex md:items-center w-full md:w-auto">
          <ul className="flex p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:items-center md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0 md:bg-white dark:bg-inherit">
            <li className="max-[570px]:hidden">
              <Link
                to={'/login'}
                className="text-[#EAB301] border border-[#EAB301] px-5 py-3 rounded-lg hover:bg-yellow-400 hover:text-white"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to={'/register'}
                className="bg-[rgba(234,180,1,0.83)] text-white px-3 py-3 rounded-lg hover:bg-[rgb(234,180,1)]  "
              >
                Sign Up Free
              </Link>
            </li>
          </ul>
        </div>
        {/* responsive section */}
        {responsive && (
          <div className="top-[70px] absolute left-0 md:hidden w-full md:w-auto mb-20">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50">
              
              <Link to={'/login'} className="mt-3">
                <button
                  onClick={() => {
                    setResponsive(!responsive);
                  }}
                  className="w-full text-[#EAB301] border border-[#EAB301] px-3 py-3 rounded-2xl hover:bg-yellow-400 hover:text-white"
                >
                  Log in
                </button>
              </Link>
              <Link to={'/register'} className="mt-3">
                <button
                  onClick={() => {
                    setResponsive(!responsive);
                  }}
                  className="w-full bg-yellow-400 text-white px-3 py-3 rounded-2xl hover:text-[#EAB301] hover:bg-[white] hover:border hover:border-[#EAB301]"
                >
                  Sign Up Free
                </button>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
  const userLink = (
    <div id="container" className="flex px-5 justify-between items-center">
      <div className="flex flex-1 items-center gap-5">
        <Link to={'/'}>
          <p className="text-2xl font-extrabold font">KENEK</p>
        </Link>
        <ul className="hidden min-[1055px]:flex p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:items-center md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0 md:bg-white dark:bg-inherit">
          <li>
            <Link
              to={`/channels`}
              className="flex items-center gap-1  py-2 pl-3 pr-4 text-gray-800 rounded md:hover:text-[#EAB301] md:p-0 dark:text-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" "
                role="img"
                aria-hidden="false"
                aria-labelledby="ltclid9_title "
              >
                <title id="ltclid9_title">Channels</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 2H0V1h16v1ZM0 5.5.5 5h15l.5.5v5l-.5.5H.5l-.5-.5v-5ZM1 6v4h14V6H1Zm-1 9h16v-1H0v1Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Channels List</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden min-[1055px]:flex items-center gap-3">
        <div>
          <DarkModeSwitch
            style={{
              backgroundColor: '#EAB301',
              borderRadius: '20px',
              padding: '3px'
            }}
            checked={!isDarkMode}
            onChange={toggleDarkMode}
            size={30}
          />
        </div>
        <button className="hover:bg-yellow-400 hover:text-white hover:font-bold px-4 py-3 rounded-xl">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" "
            role="img"
            aria-hidden="true"
            aria-labelledby=" "
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 .016V15.96l-.768-.488L7 11.516V15.495h-.5.5v.5H3V11H0V4h6.213l7.06-3.612L14 .016Zm-1 14.126-6-3.81V4.72l6-3.07v12.49ZM6 5.006V5H1v5h5V5.006Zm0 6.007V11H4v3.996h2V11.013ZM14.999 6v4h1V6h-1Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>

        {/* Upgrade & Share */}
        <div className=" flex md:itmes-center md:gap-2">
          <div className="hidden md:flex items-center cursor-pointer gap-1 px-2 py-3 rounded-2xl border text-gray-800 dark:text-white border-yellow-300 hover:bg-yellow-400 hover:text-white">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" "
              role="img"
              aria-hidden="true"
              aria-labelledby=" "
            >
              <path
                d="M8.5 0.499756V6.49976H13L7.5 15.4998V9.49976H3L8.5 0.499756Z"
                fill="currentColor"
              ></path>
              <path
                d="M8.5 0.499756H9L8.07336 0.239031L8.5 0.499756ZM8.5 6.49976H8L8.5 6.99976V6.49976ZM13 6.49976L13.4266 6.76048L13 5.99976V6.49976ZM7.5 15.4998H7L7.92664 15.7605L7.5 15.4998ZM7.5 9.49976H8L7.5 8.99976V9.49976ZM3 9.49976L2.57336 9.23903L3 9.99976V9.49976ZM8 0.499756V6.49976H9V0.499756H8ZM8.5 6.99976H13V5.99976H8.5V6.99976ZM12.5734 6.23903L7.07336 15.239L7.92664 15.7605L13.4266 6.76048L12.5734 6.23903ZM8 15.4998V9.49976H7V15.4998H8ZM7.5 8.99976H3V9.99976H7.5V8.99976ZM3.42664 9.76048L8.92664 0.760481L8.07336 0.239031L2.57336 9.23903L3.42664 9.76048Z"
                fill="currentColor"
              ></path>
            </svg>
            <Link to={'/membership'}>
              Upgrade
            </Link>
          </div>

          <button type="button" onClick={handleSideBar}>
            <img
              src={`${
                profile && profile.avatar
                  ? '/img/upload/' + profile.avatar
                  : default_avatar
              }`}
              className="rounded-full w-12 border border-red-200"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className='mr-3 min-[1055px]:hidden'>
          <DarkModeSwitch
            style={{
              backgroundColor: '#EAB301',
              borderRadius: '20px',
              padding: '3px'
            }}
            checked={!isDarkMode}
            onChange={toggleDarkMode}
            size={30}
          />
      </div>
      <button
        type="button"
        className="inline-flex items-center p-2  z-10 border-2  border-[#EAB301] text-xl text-[#EAB301] rounded-lg min-[1055px]:hidden hover:bg-gray-100 focus:outline-none focus:ring-2"
        onClick={() => {
          setResponsive(!responsive);
        }}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6 text-gray-800"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {/* responsive section */}
      {responsive && (
        <div className="top-[55px] absolute left-0 min-[1055px]:hidden w-full min-[1055px]:w-auto mb-20 dark:bg-[#2d364e]">
          <ul className="flex flex-col  p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-[#2d364e] dark:border-0">
            <img
              src={`${
                profile && profile.avatar
                  ? '/img/upload/' + profile.avatar
                  : default_avatar
              }`}
              alt=""
              className="w-24 rounded-full m-auto border border-red-500"
            />
            <p className="text-center text-base font-semibold mt-2">
              {auth && isAuthenticated && auth.user.username
                ? '@' + auth.user.username
                : ''}
            </p>
            <div className="p-2 rounded-2xl bg-gray-300" id="tooltip">
              <p className="text-base fond-bold mt-1 text-center">
                {'Kenek Point'}
              </p>
              <p className="mt-1 text-xl font-bold text-yellow-700 text-center">
                {profile && profile.kp ? profile.kp : '200'}
              </p>
            </div>
            <Tooltip
              anchorSelect="#tooltip"
              place="bottom"
              className="absolute bg-gray-100 rounded-2xl p-5"
            >
              <p>
                <span className="font-bold">avatar X 1</span>: 50kp
              </p>
              <p>
                <span className="font-bold">link X 1</span>: 10kp
              </p>
              <p>
                <span className="font-bold">header X 1</span>: 20kp
              </p>
            </Tooltip>
            <li className="mt-3">
              <Link
                to={`/${auth.user?.username}`}
                onClick={() => {
                  setResponsive(!responsive);
                }}
                className="flex justify-start items-center gap-2 py-2 pl-3 pr-4 hover:text-[#EAB301] hover:border hover:border-[#EAB301] rounded-2xl text-center font-semibold"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" "
                  role="img"
                  aria-hidden="false"
                  aria-labelledby="ltclid9_title "
                >
                  <title id="ltclid9_title">Links</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 2H0V1h16v1ZM0 5.5.5 5h15l.5.5v5l-.5.5H.5l-.5-.5v-5ZM1 6v4h14V6H1Zm-1 9h16v-1H0v1Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Channels</span>
              </Link>
            </li>

            <Link to={'/membership'} className="mt-3">
              <button
                onClick={() => {
                  setResponsive(!responsive);
                }}
                className="w-full cursor-pointer bg-yellow-400 text-white px-3 py-3 rounded-2xl hover:text-[#EAB301] hover:bg-[white] hover:border hover:border-[#EAB301]"
              >
                Upgrade
              </button>
            </Link>
            <Link to={'#'} className="mt-3">
              <button
                onClick={() => {
                  logout();
                  setResponsive(!responsive);
                }}
                className="w-full bg-yellow-400 text-white px-3 py-3 rounded-2xl hover:text-[#EAB301] hover:bg-[white] hover:border hover:border-[#EAB301]"
              >
                Log Out
              </button>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
  return (
    <>
      <div className={`${isDarkMode && 'dark'}`}>
        <nav
          className={`bg-white dark:bg-[#2d364e] dark:text-white p-5 h-auto md:p-3 z-10 shadow-lg fixed top-0 right-0 w-full`}
        >
          {isAuthenticated ? userLink : guestLink}
        </nav>
        {showSideBar && (
          <ProSidebar
            imageURL={profile && profile.avatar ? profile.avatar : ''}
            username={
              auth && isAuthenticated && auth.user.username
                ? auth.user.username
                : ''
            }
            kp={profile && profile.kp ? profile.kp : ''}
            handleProSidebarClose={handleProSidebarClose}
          />
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
  profile: state.profile,
  isDark: state.darkMode.isDark
});

export default connect(mapStateToProps, {
  logout,
  getCurrentProfile,
  setDartModeAction
})(Navbar);
