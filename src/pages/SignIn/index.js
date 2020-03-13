import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email Format')
    .required('Email is Required'),
  password: Yup.string()
    .min(6, 'password must have at least 6 characters in length')
    .required('Password is Required')
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="E-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Type your Password"
        />

        <button type="submit">{loading ? 'Loading . . .' : 'Sign in'}</button>
        <Link to="/register">Create Free Account</Link>
      </Form>
    </>
  );
}
