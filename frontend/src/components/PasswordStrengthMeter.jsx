import React from 'react'
import { Check, X } from 'lucide-react';

const PasswordCriteria = ({ password }) => {
    const criteria = [
        {
            id: 1,
            text: 'Pelo menos 8 caracteres',
            isCompleted: password.length >= 8
        },
        {
            id: 2,
            text: 'Pelo menos 1 letra minúscula',
            isCompleted: /[a-z]/.test(password)
        },
        {
            id: 3,
            text: 'Pelo menos 1 letra maiúscula',
            isCompleted: /[A-Z]/.test(password)
        },
        {
            id: 4,
            text: 'Pelo menos 1 número',
            isCompleted: /[0-9]/.test(password)
        },
        {
            id: 5,
            text: 'Pelo menos 1 caractere especial',
            isCompleted: /[^A-Za-z0-9]/.test(password)
        }
    ];

    return (
        <div className="mt-2 space-y-1">
            {criteria.map((item) => (
                <div key={item.id} className='flex items-center text-xs'>
                    {item.isCompleted ? (
                        <Check className="w-4 h-4 text-[#4764fd] mr-2" />
                    ) : (
                        <X className="w-4 h-4 text-gray-500 mr-2" />
                    )}
                    <span className={item.isCompleted ? 'text-[#4764fd]' : 'text-gray-500'}>{item.text}</span>
                </div>
            ))}
        </div>
    )
};

const PasswordStrengthMeter = ({ password }) => {
    const getStrength = (pass) => {
        let strength = 0;
        if (pass.length >= 8) strength += 1;
        if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength += 1;
        if (pass.match(/\d/)) strength += 1;
        if (pass.match(/[^a-zA-Z\d]/)) strength += 1;
        return strength;
    };

    const strength = getStrength(password);

    const getStrengthText = (strength) => {
        if (strength === 0) return 'Muito fraca';
        if (strength === 1) return 'Fraca';
        if (strength === 2) return 'Razoável';
        if (strength === 3) return 'Boa';
        return 'Forte';
    };

    return (
        password && (
            <div className="mt-2">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400">Força da senha</span>
                    <span className="text-xs text-gray-400">{getStrengthText(strength)}</span>
                </div>
        
                <div className="flex space-x-1">
                    {[...Array(4)].map((_, index) => (
                        <div 
                            key={index}
                            className={`h-1 w-1/4 rounded-full transition-colors duration-300
                            ${index < strength ? 'bg-[#4764fd]' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
                <PasswordCriteria password={password} />
            </div>
        )
    );
};

export default PasswordStrengthMeter;