import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Badge from '@material-ui/core/Badge/Badge';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

import {
  updateMobileMenuAnchor,
  updateDesktopMenuAnchor,
} from '../actions/Menu';

const MobileMenu = (props) => {
  const { props: { classes } } = props;
  const { props: { history } } = props;
  const { mobileMoreAnchorEl } = props;
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    props.dispatch(updateDesktopMenuAnchor(event.currentTarget));
  };

  const handleMobileMenuClose = () => {
    props.dispatch(updateMobileMenuAnchor(null));
  };

  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Badge className={classes.margin} badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
};

const mapStateToProps = state => ({
  mobileMoreAnchorEl: state.Menu.mobileMoreAnchorEl,
});

MobileMenu.defaultProps = {
  classes: {},
  mobileMoreAnchorEl: null,
};

MobileMenu.propTypes = {
  props: PropTypes.shape({
    classes: PropTypes.shape().isRequired,
    history: PropTypes.shape().isRequired,
  }).isRequired,
  classes: PropTypes.shape(),
  mobileMoreAnchorEl: PropTypes.shape(),
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(MobileMenu);