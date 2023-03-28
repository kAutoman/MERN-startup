import React from 'react'
import { logout } from '../../store/actions/auth'
import default_avatar from '../../image/default.png'
import { connect } from 'react-redux'
import { Tooltip } from 'react-tooltip'
import { useNavigate } from "react-router-dom";

const ProSidebar = ({imageURL , handleProSidebarClose, username, kp , logout, auth}) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=>{handleProSidebarClose()}} className=' fixed px-10 py-5 z-20 top-[65px] w-1/6  right-[60px] h-auto text-black rounded-xl shadow-2xl bg-gray-200'>
             {/* avatar, username title section */}
             <div className='flex flex-col items-center' onClick={ e => e.stopPropagation() }>
                <img src={`${imageURL && imageURL ? '/img/upload/' + imageURL : default_avatar}`}  
                className="rounded-full w-12 cursor-pointer" alt='' onClick={() => {navigate(`/${auth.user?.username}`); handleProSidebarClose()}}/> 
                <p className='text-sm mt-1'>{username ? username : ''}</p>
              
                 <button onClick={()=>{handleProSidebarClose(); logout()}} className='mt-2 flex items-center justify-center gap-1 px-2 py-3 rounded-2xl text-white bg-yellow-400  w-full '>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className=" " role="img" aria-hidden="false" aria-labelledby="ltclid64_title "><title id="ltclid64_title">Log Out</title><path fillRule="evenodd" clipRule="evenodd" d="M5.5 0h8l.5.5v15l-.5.5H5v-1h8V1H5V0h.5ZM2.707 7.5l3.147-3.146L6.207 4 5.5 3.293l-.354.353-4 4v.708l4 4 .354.353.707-.707-.353-.354L2.707 8.5h7.46v-1h-7.46Z" fill="currentColor"></path></svg>
                    <span className=''>Sign Out</span>
                </button>
             </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuthenticated : state.auth.isAuthenticated,
    auth : state.auth,
    profile : state.profile
});
  
export default connect(mapStateToProps , {logout})(ProSidebar);