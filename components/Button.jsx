import React from 'react'

const Button = ({ value, onClick }) => {
    return (
        <button className='text-black text-[17px] px-8 py-2 montserrat font-semibold
                rounded-[7px] bg-gradient-to-r from-[#3AFAD9] to-[#003930]'
            onClick={onClick}>
            {value}
        </button>
    )
}

export default Button