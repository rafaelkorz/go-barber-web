import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  email: Yup.string()
    .email('Invalid Email Format')
    .required('Email is Required'),
  password: Yup.string()
    .min(6, 'Password must have at least 6 characters in length')
    .required('Password is Required')
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full Name" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Create Account</button>
        <Link to="/">Sign in</Link>
      </Form>
    </>
  );
}
