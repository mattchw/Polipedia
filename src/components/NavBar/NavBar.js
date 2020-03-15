import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Search';
import UmbrellaIcon from '@material-ui/icons/BeachAccess';
import InfoIcon from '@material-ui/icons/Info';

// style
import styles from './NavBar.style'

const useStyles = styles;

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function NavBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Yellow Blue
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/" className={classes.link}>
            <ListItem button>
              <ListItemIcon><HomeIcon/></ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
          </Link>

          <Link to="/explore" className={classes.link}>
            <ListItem button>
              <ListItemIcon><ExploreIcon/></ListItemIcon>
              <ListItemText primary='Explore' />
            </ListItem>
          </Link>

          <Link to="/encourage" className={classes.link}>
            <ListItem button>
              <ListItemIcon><UmbrellaIcon/></ListItemIcon>
              <ListItemText primary='Keep Going' />
            </ListItem>
          </Link>
          
        </List>
        <Divider />
        <List>
          <Link to="/about" className={classes.link}>
            <ListItem button>
              <ListItemIcon><InfoIcon/></ListItemIcon>
              <ListItemText primary='About Us' />
            </ListItem>
          </Link>
        </List>
          
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {props.children}
      </main>
    </div>
  );
}

export default NavBar;
