import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';

const Login = ({ setIsAuthenticated, setShowlogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/auth/login', {
      email,
      password,
    }, {
      withCredentials: true,
    }).then((res) => {
      console.log(res);
      setIsAuthenticated(true);
    }).catch((err) => {
      console.error(err);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input name='email' type='email' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name='password' type='password' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <Button
          variant='outlined'
          color='primary'
        >
            Login
        </Button>
        <FormGroup>
          <Link onClick={() => setShowlogin(false)} >
            <Typography>
              Create an account
            </Typography>
          </Link>
        </FormGroup>
      </form>
    </div>
  );
};

Login.propTypes = {
  setIsAuthenticated: PropTypes.func,
  setShowlogin: PropTypes.func,
};

export default Login;
