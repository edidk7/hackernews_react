import React from 'react';

const Header = ({titulo}) => {
  return (
    <nav>
        <div className="container">
            <a href="#!" className='brand-logo'>{titulo}</a>
        </div>
    </nav>
  )
}

export default Header;