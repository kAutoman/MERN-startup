import React,{useState} from 'react'
import Switch from "react-switch";

const CreateHeader = ({handleHeaderClose}) => {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked)
    }

    const handleClose = () => {
        handleHeaderClose();
    }

    return(
        <div className='flex justify-between items-center bg-gray-200 text-gray-700 w-full m-auto px-4 py-10 rounded-3xl relative'>
            <div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className=" " role="img" aria-hidden="false" aria-labelledby="ltclid31_title "><title id="ltclid31_title">Move</title><path fillRule="evenodd" clipRule="evenodd" d="M5 4C5.55228 4 6 3.55228 6 3C6 2.44772 5.55228 2 5 2C4.44772 2 4 2.44772 4 3C4 3.55228 4.44772 4 5 4ZM6 8C6 8.55228 5.55228 9 5 9C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7C5.55228 7 6 7.44772 6 8ZM6 13C6 13.5523 5.55228 14 5 14C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12C5.55228 12 6 12.4477 6 13ZM12 8C12 8.55228 11.5523 9 11 9C10.4477 9 10 8.55228 10 8C10 7.44772 10.4477 7 11 7C11.5523 7 12 7.44772 12 8ZM11 14C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12C10.4477 12 10 12.4477 10 13C10 13.5523 10.4477 14 11 14ZM12 3C12 3.55228 11.5523 4 11 4C10.4477 4 10 3.55228 10 3C10 2.44772 10.4477 2 11 2C11.5523 2 12 2.44772 12 3Z" fill="currentColor"></path></svg>
            </div>
            <input type={'text'} placeholder={"Headline Title"} className="focus:outline-none px-2 py-2 mx-5 w-full rounded-2xl"/>
            <div className='flex justify-center'>
                <Switch onChange={handleChange} checked={checked} />
            </div>
            <button onClick={handleClose} className='absolute right-5 bottom-4'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className=" " role="img" aria-hidden="true" aria-labelledby=" "><path fillRule="evenodd" clipRule="evenodd" d="M6.83341 -0.000488281L6.47986 0.145958L5.14653 1.47929L5.00008 1.83284V3H0.5H0V4H0.5H2.00002L2.00008 15.4995L2.50008 15.9995H13.5001L14.0001 15.4995L14 4H15.5H16V3H15.5H11.0001V1.83284L10.8536 1.47929L9.5203 0.145958L9.16675 -0.000488281H6.83341ZM10.0001 3V2.03995L8.95964 0.999512H7.04052L6.00008 2.03995V3H10.0001ZM5.00008 4H3.00002L3.00008 14.9995H13.0001L13 4H11.0001H10.0001H6.00008H5.00008ZM7 7V7.5V11.5V12H6V11.5V7.5V7H7ZM10 7.5V7H9V7.5V11.5V12H10V11.5V7.5Z" fill="currentColor"></path></svg>
            </button>
        </div>
    )
}

export default CreateHeader;