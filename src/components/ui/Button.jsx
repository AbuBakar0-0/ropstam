import React from 'react'

export const Button = ({ title, icon = "", bgColor = "bg-primary", className=""}) => {
    return (
        <button className={`w-max px-8 py-4 rounded-lg text-white hover:bg-white hover:text-primary transition duration-300 font-frank flex flex-row gap-4 justify-center items-center ${bgColor} ${className}`}>
            {title}
            {icon}
        </button>
    )
}
