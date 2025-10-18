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
      className={`text-white text-15 font-light bg-red-500 rounded-md py-4 px-2 w-full text-center cursor-pointer outline-0 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-500 focus-visible:bg-white focus-visible:text-black hover:bg-white hover:text-black transition-colors ease-in duration-75 ${className}`}
      {...delegated}
    >
      {children}
    </button>
  );
}

export default Button;
