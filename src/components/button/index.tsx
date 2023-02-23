import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <button
      className={`inline-flex items-center gap-2 justify-center w-full justify-center rounded-md 
      border border-warm-gray-300 dark:border-warm-gray-700 
      bg-warm-gray-50 dark:bg-warm-gray-900 px-4 py-2 text-sm 
      font-medium shadow-sm 
      hover:bg-warm-gray-100 dark:hover:bg-warm-gray-800 focus:outline-none focus:ring-2 focus:ring-warm-gray-500 
      focus:ring-offset-2 focus:ring-offset-warm-gray-100 dark:focus:ring-offset-warm-gray-800`}
      {...rest}
    />
  );
};

export default Button;
