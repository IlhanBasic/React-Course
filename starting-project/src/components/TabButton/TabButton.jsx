import React from 'react';

export default function TabButton({ children, isSelect, ...props }) {
  return (
    <li>
      <button className={isSelect ? 'active' : null} {...props}>
        {children}
      </button>
    </li>
  );
}