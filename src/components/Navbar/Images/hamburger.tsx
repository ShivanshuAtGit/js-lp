import * as React from 'react';

function SvgComponent(props: any) {
  return (
    <svg
      width={20}
      height={14}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#clip0_150_598)"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      >
        <path d="M19 13H1M19 7H1M19 1H1" />
      </g>
      <defs>
        <clipPath id="clip0_150_598">
          <path fill="currentColor" d="M0 0H20V14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgComponent;
