import * as React from "react";

function LoadingDots({ srText }: { srText: string }) {
  return (
    <>
      <span id="logging-in" hidden>
        {srText}
      </span>
      <span
        aria-labelledby="logging-in"
        aria-hidden="true"
        className="flex items-center justify-center space-x-1"
      >
        <span className="animate-bounce">●</span>
        <span className="animate-bounce" style={{ animationDelay: "0.08s" }}>
          ●
        </span>
        <span className="animate-bounce" style={{ animationDelay: "0.16s" }}>
          ●
        </span>
      </span>
    </>
  );
}

export default LoadingDots;
