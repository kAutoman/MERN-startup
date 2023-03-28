import React,{ useEffect, useState } from 'react';
import './appearance.view.css';
import { connect } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import { getCurrentProfile } from '../../../store/actions/profile';
import MobilePreview from '../../../components/admin/MobilePreview.component';
import { createProfile } from '../../../store/actions/profile';
import DEFAULT_USER_AVATAR from '../../../image/default.png';

const Appearance = ({profile: { profile }, getCurrentProfile, createProfile , auth}) => {
    useEffect(()=>{
        getCurrentProfile();        
    },[getCurrentProfile]);
    
    const navigate = useNavigate();
    const [ file , setFile ] = useState(`${profile && profile.avatar ? '/img/upload/' + profile.avatar : DEFAULT_USER_AVATAR}`);
    const [ avatar, setAvatar ] = useState('');
    const [title, setTitle] = useState(`${profile && profile.title ? profile.title : ''}`);
    const [bio, setBio] = useState(`${profile && profile.bio ? profile.bio : ''}`);

    const handleFileChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
        setAvatar(e.target.files[0]);
    }
    const handleFileRemove = () => {
        setFile('default.png');
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleBioChange = (e) => {
        setBio(e.target.value);
    }

    const onSubmit = (e)  => {
        e.preventDefault();
        const data = new FormData();
        data.append('title' , title);
        data.append('bio' , bio);
        data.append('avatar',avatar);
        data.append('id' , auth && auth.user._id)
        createProfile(data, navigate, profile ? true : false, auth.user.username);
    } 
    return(
        <>
        <div id='appearance' className=''>
            <div className='px-10 md:px-5 pb-20'>
            {/* Link Add Section */}
                <form onSubmit={onSubmit} id='' className='px-2'>
                    <div className='mx-2'>
                        <div id='analytics' className='bg-white rounded-2xl flex w-auto md:w-full px-5 py-4 shadow-md m-auto'>
                            <p className='text-xl text-center text-gray-800 font-semibold m-auto'>Edit Profile</p>
                        </div>
                        <div className='bg-white text-gray-700 px-2 py-5 rounded-3xl mt-5'>
                            {/* upload image section */}
                            <div className='grid grid-cols-1 md:grid-cols-6 gap-2'>
                                <div className='md:grid md:col-span-1'>
                                    <img src={file} alt="" className='w-1/4 md:w-full m-auto rounded-full'/>
                                </div>
                                <div className='md:grid md:col-span-5'>
                                    <div className='flex flex-col gap-4'>
                                        <div className='p-2 '>
                                            <div className='relative bg-yellow-300 hover:bg-yellow-400 px-2 py-3 rounded-2xl w-full text-center'>
                                                <label className='text-center m-auto'>Pick an image</label>
                                                <input type={'file'} id='file' name='avatar' className='absolute -z-1 left-0 px-5 m-auto  w-full border border-indigo-700 opacity-0  hover:cursor-pointer' 
                                                onChange={handleFileChange}/>
                                            </div>
                                        </div>
                                        <div className='p-2'><button className='px-2 py-3 bg-gray-100 border border-gray-300 hover:bg-gray-200 rounded-2xl w-full' onClick={handleFileRemove}>Remove</button></div>
                                    </div>
                                </div>
                            </div>
                            <div id='form-group' className=''>
                                <div className='flex justify-between items-center bg-gray-200 px-4 py-4 rounded-2xl '>
                                    <input type={`text`} value={title} onChange={handleTitleChange} name='title' id="title" placeholder="Put your title" className='bg-gray-200 px-2 text-sm focus:outline-none w-full ' maxLength={35} required/>
                                </div>
                            </div>
                            <div id='form-group' className=''>
                                <textarea name='bio' value={bio} onChange={handleBioChange} className='flex justify-between items-center w-full bg-gray-200 text-sm  px-4 py-4 rounded-2xl focus:outline-none break-words' placeholder='Put your bio here.' maxLength={1500} rows={5} required></textarea>
                            </div>
                            <div className=''>
                                <button type='submit' className={`relative mt-10 bg-yellow-300 hover:bg-yellow-400 px-2 py-3 rounded-2xl w-full border  border-green-300 text-center m-auto ${file ? 'disabled:opacity-50' : ''}`}> 
                                    Save profile
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                {/* mobile preview section */}
                {/* <div id='preview_version' className='text-sm mt-20 min-[1200px]:mt-0'>
                    {
                        <MobilePreview imageURL={profile && profile.avatar ? profile &&  profile.avatar : ''} bio={ profile && profile.bio ? profile.bio : ''} title={profile && profile.title ?  profile.title : ''} 
                        links = {profile &&  profile.links ? profile.links : []} username = {auth.user.username ? auth.user.username : 'Username'}  /> 
                    }
                </div> */}
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    auth : state.auth
  });
  
export default connect(mapStateToProps, { createProfile , getCurrentProfile})(
    Appearance
  );
  