import React from 'react';
import ReactDom from 'react-dom';

import styles from './index.module.css';

const App = () => <h1 className={styles.root}>Hello!</h1>;

ReactDom.render(<App />, document.getElementById('app'));
