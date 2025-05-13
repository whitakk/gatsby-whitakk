import React from 'react';
import * as styles from './Icon.module.scss';

const Icon = ({ name, icon }) => {
  // Add default values for icon if it's undefined
  const safeIcon = icon || {};
  const viewBox = safeIcon.viewBox || '0 0 24 24';
  const path = safeIcon.path || '';

  return (
    <svg className={styles.icon} viewBox={viewBox}>
      <title>{name || ''}</title>
      <path d={path} />
    </svg>
  );
};

export default Icon;
