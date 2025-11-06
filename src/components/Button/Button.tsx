import * as React from 'react';

function Button({
  children,
  className = '',
  ...delegated
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`text-15 w-full cursor-pointer rounded-md bg-red-500 px-2 py-4 text-center font-light text-white outline-0 transition-colors duration-75 ease-in hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-500 ${className}`}
      {...delegated}
    >
      {children}
    </button>
  );
}

export default Button;
