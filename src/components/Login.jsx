import { useRef } from 'react';
import { Input } from './Input';
import { useInput } from '../hooks/useInput';

export default function Login() {
  const {
    value: emailValue,
    error: emailHasError,
    handleInputChange: handleEmailInputChange,
    handleBlur: handleEmailBlur,
  } = useInput('', (value) => !value.includes('@'));

  const {
    value: passwordValue,
    error: passwordHasError,
    handleInputChange: handlePasswordInputChange,
    handleBlur: handlePasswordBlur,
  } = useInput('', (value) => !value.length < 6);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(formState);
    console.log(emailRef.current.value, passwordRef.current.value);

    const isValidEmail = !emailValue.includes('@');
    const isValidPassword = passwordValue.length < 6;

    if (isValidEmail && isValidPassword) {
      console.log('Submit form data');
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <Input
            id='email'
            type='email'
            name='email'
            className='test'
            innerRef={emailRef}
            error={emailHasError ? 'Please enter a valid email' : ''}
            onBlur={handleEmailBlur}
            onChange={handleEmailInputChange}
          ></Input>
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <Input
            id='password'
            type='password'
            name='password'
            innerRef={passwordRef}
            error={passwordHasError ? 'Please enter a valid password' : ''}
            onBlur={handlePasswordBlur}
            onChange={handlePasswordInputChange}
          />
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
