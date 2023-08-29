
import React from 'react';

interface InputProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error: string;
    placeholder: string;
}

export const Input = ({label, type, name, value, onChange, error, placeholder}: InputProps) => {

  return (
    <div className="flex flex-col gap-1">
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
        />
        {error && <p className="error">{error}</p>}
    </div>
  )
}
