import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../img/costs_logo.png';
import Container from './Container'



const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to='/home'>
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to='/home'>Home</Link>
          </li>
          <li className={styles.item}>
            <Link to='/projects'>Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to='/company'>Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to='/contact'>Contato</Link>
          </li>
          <li className={styles.item}>
            <Link to='/newproject'>New Company</Link>
          </li>
        </ul>


      </Container>
        
        
    </nav>
  )
}

export default Navbar