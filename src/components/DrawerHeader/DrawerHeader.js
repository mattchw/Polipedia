import React from 'react';

// style
import styles from './DrawerHeader.style'

const useStyles = styles;

function DrawerHeader() {
  const classes = useStyles();
  return (
    <div className={classes.drawerHeader} />
  );
}

export default DrawerHeader;
