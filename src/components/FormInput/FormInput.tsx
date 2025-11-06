import * as React from 'react';

const FormInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    id?: string;
    label: string;
    error?: string;
  }
>(function FormInput({ id = '', label, error, ...delegated }, ref) {
  const generatedId = React.useId();
  const finalId = id || generatedId;
  return (
    <div
      className={`relative border-b ${error ? 'border-b-red-500' : 'border-b-blue-500'} transition-colors duration-75 has-[:focus-visible]:border-b-white has-[:hover]:border-b-white`}
    >
      <label htmlFor={finalId} className="sr-only">
        {label}
      </label>
      <input
        id={finalId}
        ref={ref}
        {...delegated}
        className="w-full cursor-text bg-transparent ps-4 pb-4 outline-0"
      />
      {error && (
        <span className="text-13 absolute top-1 right-4 text-red-500">
          {error}
        </span>
      )}
    </div>
  );
});

export default FormInput;
