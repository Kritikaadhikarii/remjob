import React from "react";

const Steps = () => {
  return (
    <div>
      <svg
        width="100%"
        height="40"
        viewBox="0 0 1000 40"
        preserveAspectRatio="none"
      >
        <path
          d="M0 20 Q 31.25 0, 62.5 20 T 125 20 T 187.5 20 T 250 20 T 312.5 20 T 375 20 T 437.5 20 T 500 20 T 562.5 20 T 625 20 T 687.5 20 T 750 20 T 812.5 20 T 875 20 T 937.5 20 T 1000 20"
          stroke="#FDA15F"
          fill="transparent"
          stroke-width="4"
          stroke-dasharray="24,8"
        />
      </svg>

      <div className="flex flex-row items-top justify-center px-4 text-center overflow-hidden">
        <div className="flex flex-col gap-4 items-start justify-start max-w-3xl px-4 py-8">
          <p className="font-medium text-xs text-[#FDA15F] bg-[#FDA15F]/20 w-fit px-4 rounded-md py-1">
            Step 1
          </p>
          <p>Search for your desired role.</p>
        </div>

        <div className="flex flex-col gap-4 items-start justify-start max-w-3xl px-4 py-8">
          <p className="font-medium text-xs text-[#1F3C88] bg-[#1F3C88]/20 w-fit px-4 rounded-md py-1">
            Step 2
          </p>
          <p>Choose the one and read the description.</p>
        </div>

        <div className="flex flex-col gap-4 items-start justify-start max-w-3xl px-4 py-8">
          <p className="font-medium text-xs text-[#FDA15F] bg-[#FDA15F]/20 w-fit px-4 rounded-md py-1">
            Step 3
          </p>
          <p>Apply for the role, if the description matches.</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
