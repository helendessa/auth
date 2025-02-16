import React from 'react'

const Input = ({icon:Icon, type, placeholder, value, onChange, toggleIcon: ToggleIcon, onToggle}) => {
  return (
    <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon className="w-5 h-5 text-[#4764fd]"/>
        </div>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full pl-10 pr-3 py-2 bg-yellow-100 bg-opacity-50 rounded-lg
            border border-gray-900 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400
            text-black placeholder-gray-500 transition duration-200 focus:outline-none"
        />
        {ToggleIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={onToggle}>
                <ToggleIcon className="w-5 h-5 text-[#4764fd]"/>
            </div>
        )}
    </div>
  )
}

export default Input;