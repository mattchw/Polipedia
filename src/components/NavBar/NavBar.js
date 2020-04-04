import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Collapse from '@material-ui/core/Collapse';

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
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import YouTubeIcon from '@material-ui/icons/YouTube';

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
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openExplore, setOpenExplore] = React.useState(false);
  const shift = useMediaQuery('(min-width:600px)');

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  const handleExplore = () => {
    setOpenExplore(!openExplore);
  };
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: openMenu,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open menu"
              onClick={handleMenuOpen}
              edge="start"
              className={clsx(classes.menuButton, openMenu && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openMenu}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div role="presentation">
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleMenuClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button onClick={handleMenuClose}>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary='主頁' />
              </ListItem>
            </Link>

            <ListItem button onClick={handleExplore}>
              <ListItemIcon><ExploreIcon/></ListItemIcon>
              <ListItemText primary='圖鑑' />
              {openExplore ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openExplore} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link to="/explore?category=persons" className={classes.link}>
                  <ListItem button className={classes.nested} onClick={handleMenuClose}>
                    <ListItemIcon><PersonIcon/></ListItemIcon>
                    <ListItemText primary="人" />
                  </ListItem>
                </Link>
                <Link to="/explore?category=youtubes" className={classes.link}>
                  <ListItem button className={classes.nested} onClick={handleMenuClose}>
                    <ListItemIcon><YouTubeIcon/></ListItemIcon>
                    <ListItemText primary="YouTube" />
                  </ListItem>
                </Link>
              </List>
            </Collapse>           
            
          </List>
          <Divider />
          <List>
            <Link to="/about" className={classes.link}>
              <ListItem button onClick={handleMenuClose}>
                <ListItemIcon><InfoIcon/></ListItemIcon>
                <ListItemText primary='關於我們' />
              </ListItem>
            </Link>
          </List>

        </div>
          
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: shift&&openMenu,
        })}
      >
        {props.children}
      </main>
    </div>
  );
}

export default NavBar;
