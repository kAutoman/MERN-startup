import React from 'react'
import default_avatar from '../../image/default.png'
const MobilePreview = ({imageURL, title, bio, links, username}) => {
    return(
    <>
        <div id='mobile-preview'>
            <div className='relative m-auto flex flex-col items-center p-2 min-[600px]:w-[352px] h-[592px] min-[300px]:w-[300px] bg-gray-200 border-[8px] border-black rounded-3xl mb-20 overflow-y-auto'>
                <button onClick={()=>{alert('Share you profile. come soon')}} className='absolute  right-2 top-2 p-2 bg-gray-100 rounded-full'>
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className=" " role="img" aria-hidden="false" aria-labelledby="ltclid67_title "><title id="ltclid67_title">Google Share</title><path fillRule="evenodd" clipRule="evenodd" d="M13 1C11.8954 1 11 1.89543 11 3C11 4.10457 11.8954 5 13 5C14.1046 5 15 4.10457 15 3C15 1.89543 14.1046 1 13 1ZM10 3C10 1.34315 11.3431 0 13 0C14.6569 0 16 1.34315 16 3C16 4.65685 14.6569 6 13 6C12.0052 6 11.1235 5.51578 10.5777 4.77018L5.87008 7.12398C5.95456 7.4011 6 7.69524 6 8C6 8.30476 5.95456 8.5989 5.87008 8.87602L10.5777 11.2298C11.1235 10.4842 12.0052 10 13 10C14.6569 10 16 11.3431 16 13C16 14.6569 14.6569 16 13 16C11.3431 16 10 14.6569 10 13C10 12.6952 10.0454 12.4011 10.1299 12.124L5.42233 9.77018C4.87654 10.5158 3.99482 11 3 11C1.34315 11 0 9.65685 0 8C0 6.34315 1.34315 5 3 5C3.99481 5 4.87653 5.48422 5.42233 6.22982L10.1299 3.87602C10.0454 3.5989 10 3.30476 10 3ZM3 6C1.89543 6 1 6.89543 1 8C1 9.10457 1.89543 10 3 10C4.10457 10 5 9.10457 5 8C5 6.89543 4.10457 6 3 6ZM11 13C11 11.8954 11.8954 11 13 11C14.1046 11 15 11.8954 15 13C15 14.1046 14.1046 15 13 15C11.8954 15 11 14.1046 11 13Z" fill="currentColor"></path></svg>
                </button>
                <div id='preview_content' className='mt-20 flex flex-col items-center justify-center'>
                    <img src={`${imageURL ? '/img/upload/' + imageURL : default_avatar}`} alt="" className='w-1/4 rounded-full'/>
                    <p id='title' className='mt-5 text-base text-center '>{`${username ? '@' : ''}`}{`${username ? username : " "}`}</p>
                    <p id='title' className='mt-5 text-base text-center '>{`${title ? '@' : ''}`}{`${title ? title : " "}`}</p>
                    <p id='title' className='mt-2 text-base text-center '>{`${bio ? bio : " "}`}</p>
                    { 
                        links.map((link , index) => (
                            <div id='link_show' key={index} className='bg-white shadow-2xl rounded-xl py-2 px-2 mt-2 w-full text-center'>{link}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
    )
}

export default MobilePreview;