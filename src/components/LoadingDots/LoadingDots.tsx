import * as React from 'react';

function LoadingDots({ srText }: { srText: string }) {
  return (
    <>
      <span id="loading-text" hidden>
        {srText}
      </span>
      <span
        aria-labelledby="loading-text"
        aria-hidden="true"
        className="flex items-center justify-center space-x-1"
      >
        <span className="animate-pulse">●</span>
        <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>
          ●
        </span>
        <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>
          ●
        </span>
      </span>
    </>
  );
}

export default LoadingDots;
