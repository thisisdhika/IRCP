import React from 'react';
import styles from './marker.module.css';

const Marker = ({ color, text, selectedMarker, onClick, onMouseOver }) => (
  <div
    className={styles.marker}
    style={{ 
      backgroundColor: color, 
      cursor: 'pointer', 
      zIndex: selectedMarker ? 1 :  0 
    }}
    title={text}
    onClick={onClick}
    onMouseOver={onMouseOver}
  />
);

export default Marker;