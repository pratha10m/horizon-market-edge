import React from 'react';

const Header = () => {
  return (
    <header
      style={{
        padding: '1rem 2rem',
        background: '#fff',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <h1>Horizon Market Edge</h1>

      <nav style={{ display: 'flex', gap: '20px' }}>
        <a href="/" style={{ textDecoration: 'none', color: '#000' }}>Home</a>
        <a href="/about" style={{ textDecoration: 'none', color: '#000' }}>About</a>
      </nav>
    </header>
  );
};

export default Header;
