import React from 'react';
import styles from './App.css';
import logo from '../../img/logo-react.png';

const App = () => (
  <div>
    <img className={styles.logo} src={logo} alt="React logo" />
    <h1 className={styles.title}>Hello world!</h1>
  </div>
);

export default App;
