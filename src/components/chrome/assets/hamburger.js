import React from 'react';

export const EuiIconHamburger = ({ title, titleId, ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M0 2H16V4H0V2ZM0 7H16V9H0V7ZM16 12H0V14H16V12Z" />
  </svg>
);

export const hamburger = EuiIconHamburger;
