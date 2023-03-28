import React,{useState} from 'react'
import { connect } from 'react-redux';
import { addLinks } from '../../store/actions/profile';

const CreateLink = ({handleCreateLinkClose , addLinks}) => {
    const [formData, setFormData] = useState({
        link : ''
    })
    
    const { link } =  formData;
    const handleClose = () => {
        handleCreateLinkClose();
    }
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addLinks(formData);
        handleCreateLinkClose();
    }
    return(
    <>
        <form onSubmit={onSubmit} className='flex flex-col justify-items-start bg-gray-200 text-gray-700 w-full m-auto  py-2 rounded-3xl relative'>
            <div className='flex justify-between items-center px-5'>
                <div>
                    <p className='text-gray-700 font-semibold'>Enter URL</p>
                </div>
                <button onClick={handleClose}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black " role="img" aria-hidden="false" aria-labelledby="ltclid69_title "><title id="ltclid69_title">Close</title><path d="M13.6283 3.1151L14 2.74339L13.2566 2L12.8849 2.3717L13.6283 3.1151ZM2.3717 12.885L2 13.2566L2.7434 14L3.11509 13.6284L2.3717 12.885ZM3.11509 2.3717L2.7434 2L2 2.74339L2.3717 3.1151L3.11509 2.3717ZM12.8849 13.6284L13.2566 14L14 13.2566L13.6283 12.885L12.8849 13.6284ZM12.8849 2.3717L2.3717 12.885L3.11509 13.6284L13.6283 3.1151L12.8849 2.3717ZM2.3717 3.1151L12.8849 13.6284L13.6283 12.885L3.11509 2.3717L2.3717 3.1151Z" fill="currentColor"></path></svg>
                </button>
            </div>
            <div className='flex items-center gap-5 px-3 py-4 bg-gray-100 rounded-2xl mx-5 mt-5'>
                <input type={'text'} name="link" onChange={handleChange} value={link} placeholder={"URL"} className={" bg-gray-100 w-full py-4 px-4 focus:outline-gray-300 rounded-2xl"}/>
                <button className='bg-gray-300 px-5 py-4 rounded-2xl text-center hover:bg-gray-400 hover:text-white'>
                    Add
                </button>
            </div>
        </form>
    </>
    )
}

const mapStateToProps = (state) => ({
    profile: state.profile
  });


export default connect( mapStateToProps, {addLinks})(CreateLink);
