import React from 'react'
import { Link } from 'react-router-dom';
import './footer.component.css'
import {connect} from 'react-redux';
const Footer = ({isDark}) => {
    return(
        <div className={`${isDark && 'dark'}`}>
            <footer className="pt-20 p-4 bg-white dark:bg-[#222b45] shadow md:px-6 md:py-8 px-2 w-full">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to={'/'} className='text-2xl font-extrabold text-gray-400'><span>KENEK</span></Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
                        <li>
                            <button className='bg-[white] px-3 py-3 rounded-xl text-[#EAB301]  hover:bg-yellow-400 hover:text-white'>
                                Buy Membership Now
                            </button>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto  lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center font-semibold"><Link to={'/'} className="hover:underline">© KENEK.</Link>2023 All rights reserved.
                </span>
                <p className='text-sm text-gray-400 font-semibold text-center p-2'>When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with</p>
                <p className='text-sm text-gray-400 font-semibold text-center p-2'>a better, faster and safer experience and for marketing purposes.</p>
            </footer>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isDark : state.darkMode.isDark
});

export default connect(mapStateToProps , {})(Footer);