import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { doLogin, updateEmail, updatePassword } from '../actions/Login';

const LoginContainer = (props) => {
  const { props: { classes } } = props;
  const { props: { history } } = props;

  const handleChange = action => (event) => {
    props.dispatch(action(event.target.value));
  };

  return (
    <form
      className={classes.container}
      onSubmit={(e) => {
        e.preventDefault();
        props.dispatch(doLogin(() => {
          console.log('Login success');
          history.push('/page2');
        }, () => {
          console.log('Login error');
        }));
      }}
    >
      <Grid item xs={12}>
        <TextField
          required
          label="Email"
          type="email"
          placeholder="your@email.com"
          className={classes.textField}
          margin="normal"
          onChange={handleChange(updateEmail)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          onChange={handleChange(updatePassword)}
        />
      </Grid>
      <Button type="submit" variant="contained" color="primary">Login</Button>
    </form>
  );
};

LoginContainer.defaultProps = {
  classes: {},
  history: {},
};

LoginContainer.propTypes = {
  props: PropTypes.shape({
    classes: PropTypes.shape().isRequired,
    history: PropTypes.shape().isRequired,
  }).isRequired,
  classes: PropTypes.shape(),
  history: PropTypes.shape(),
  dispatch: PropTypes.func.isRequired,
};

export default connect()(LoginContainer);