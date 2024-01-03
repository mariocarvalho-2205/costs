import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <Link to='/home'>Home</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/company'>Company</Link>
        <Link to='/newproject'>New Company</Link>
        
    </nav>
  )
}

export default Navbar