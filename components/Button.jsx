import React from 'react'

const Button = ({ value, onClick }) => {
    return (
        <button className='text-[#c0c2c6] text-[17px] px-8 py-2 montserrat
                rounded-full bg-transparent border-[#c0c2c6] border  hover:text-white hover:border-white transition-all duration-200  hover:scale-105'
            onClick={onClick}>
            {value}
        </button>
    )
}

export default Button