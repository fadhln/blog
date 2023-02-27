import cx from '@/utils/cx';

import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <button
      className={cx(
        `inline-flex items-center gap-2 justify-center w-full rounded-md 
      border border-warm-gray-300 dark:border-warm-gray-700 
       px-4 py-2 text-sm font-medium shadow-sm 
       focus:outline-none focus:ring-2 focus:ring-warm-gray-500 
      focus:ring-offset-2 focus:ring-offset-warm-gray-100 dark:focus:ring-offset-warm-gray-800`,
        rest.disabled
          ? 'bg-warm-gray-100 dark:bg-warm-gray-800 opacity-50 cursor-not-allowed'
          : 'bg-warm-gray-50 dark:bg-warm-gray-900 hover:bg-warm-gray-100 dark:hover:bg-warm-gray-800'
      )}
      {...rest}
    />
  );
};

export default Button;
