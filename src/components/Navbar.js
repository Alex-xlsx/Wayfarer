import React from 'react';
export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href='/' className='nav-link'>
              home
            </a>
          </li>
          <li>
            <a href='/' className='nav-link'>
              About
            </a>
          </li>
          <li>
            <a href='/' className='nav-link'>
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
