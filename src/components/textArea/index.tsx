import React from 'react';

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, ...rest }) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={rest.name}
          className="block text-sm font-semibold leading-6"
        >
          {label}
        </label>
      )}
      <div className="mt-1">
        <textarea
          type="text"
          className="block w-full rounded-md py-2 px-3.5 text-sm leading-6 shadow-sm focus-within:outline-warm-gray-900 placeholder:text-warm-gray-500 bg-warm-gray-200 dark:bg-warm-gray-700 border-1 border-warm-gray-900"
          {...rest}
        />
      </div>
    </div>
  );
};

export default TextArea;
