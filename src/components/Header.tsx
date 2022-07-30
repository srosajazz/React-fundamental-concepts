import React from 'react';
import styles from './Header.module.css';

// console.log(styles);


export function Header(){
  return(
    <header className={styles.header}>
      
    <strong>Sergio Chat App</strong>
    </header>
  );
}