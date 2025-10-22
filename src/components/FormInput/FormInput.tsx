import * as React from "react";

const FormInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    id?: string;
    label: string;
    error?: string;
  }
>(function FormInput({ id = "", label, error, ...delegated }, ref) {
  const generatedId = React.useId();
  const finalId = id || generatedId;
  return (
    <div
      className={`
          relative border-b 
          ${error ? "border-b-red-500" : "border-b-blue-500"}
           has-[:hover]:border-b-white
          has-[:focus-visible]:border-b-white
          transition-colors duration-75
        `}
    >
      <label htmlFor={finalId} className="sr-only">
        {label}
      </label>
      <input
        id={finalId}
        ref={ref}
        {...delegated}
        className="
            ps-4 pb-4 outline-0 bg-transparent w-full
            cursor-text"
      />
      {error && (
        <span className="absolute right-4 top-1 text-red-500 text-13">
          {error}
        </span>
      )}
    </div>
  );
});

export default FormInput;
