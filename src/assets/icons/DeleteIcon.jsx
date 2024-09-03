import React from 'react';

const DeleteIcon = ({ width = 24, height = 24, color = '#000000' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ enableBackground: 'new 0 0 48 48' }}
      xmlSpace="preserve"
    >
      <path
        style={{
          fill: 'none',
          stroke: color,
          strokeWidth: 3,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
        }}
        d="M36.249,29.839L38,13.5"
      />
      <path
        style={{
          fill: 'none',
          stroke: color,
          strokeWidth: 3,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
        }}
        d="M10.608,19.171l2.009,18.755c0.218,2.033,1.933,3.574,3.977,3.574h14.811c2.044,0,3.759-1.541,3.977-3.574l0.373-3.48"
      />
      <line
        style={{
          fill: 'none',
          stroke: color,
          strokeWidth: 3,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
        }}
        x1="7.5"
        y1="13.5"
        x2="40.5"
        y2="13.5"
      />
      <line
        style={{
          fill: 'none',
          stroke: color,
          strokeWidth: 3,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
        }}
        x1="20.5"
        y1="5.5"
        x2="27.5"
        y2="5.5"
      />
      <path
        style={{
          fill: 'none',
          stroke: color,
          strokeWidth: 3,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
        }}
        d="M10,13.5l2.813-4.219c0.741-1.113,1.99-1.781,3.328-1.781H31.86c1.337,0,2.586,0.668,3.328,1.781L38,13.5"
      />
    </svg>
  );
};

export default DeleteIcon;