import React from 'react';
import styles from './Header.module.css';

import headLogo from '../assets/logo.svg';
console.log(headLogo);


export function Header(){
  return(
    <header className={styles.header}>
      <img src={headLogo} alt="App LogoType" />
    </header>
  );
}