import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MdArrowBack } from 'react-icons/md';
import styles from './container.module.css';

function TitleBar(props) {
  const [bcolor, setBcolor] = useState(props.backgroundColor || '#019f91');

  return (
    <div className={styles.titleBar} style={{ backgroundColor: bcolor }}>
      <button className={styles.goBackButton}>
        <MdArrowBack size={25} color='#fff' />
      </button>
      <p className={styles.pageTitle}>{props.title}</p>
    </div>
  );
}

export default TitleBar;
