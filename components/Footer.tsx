"use client"
import React from 'react';
const Footer = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 100, // Adjust footer height
        backgroundColor: '#f0f0f0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>Copyright © {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
