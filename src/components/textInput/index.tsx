import React from 'react';

const TextInput = () => {
  return (
    <div>
      <label
        htmlFor="first-name"
        className="block text-sm font-semibold leading-6"
      >
        First name
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="John Doe"
          className="block w-full rounded-md py-2 px-3.5 text-sm leading-6 shadow-sm focus-within:outline-warm-gray-900 placeholder:text-warm-gray-500 bg-warm-gray-200 dark:bg-warm-gray-700 border-1 border-warm-gray-900"
        />
      </div>
    </div>
  );
};

export default TextInput;
