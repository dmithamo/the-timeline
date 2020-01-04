import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useThemeContext } from '../../../contexts/theme';
import { isValidStringInput } from '../../../utils/validateInput';
import AuthFormContainer from './AuthFormContainer';
import InlineError from '../../containers/InlineError';
import Loader from '../Loader';

export default function VerificationCodeForm(props) {
  const [value, setValue] = React.useState('');

  function handleInputChange(e) {
    setValue(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const { onSubmit } = props;
    isValidStringInput(value) && onSubmit(value);
  }

  const themeContext = useThemeContext();
  const {
    themeState: { darkModeActive },
  } = themeContext;

  const { onFormReset, isFetching, error } = props;
  return isFetching ? (
    <Loader />
  ) : (
    <AuthFormContainer darkModeActive={darkModeActive}>
      <h2>Verify Email</h2>

      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <label htmlFor="email-input">
          {error ? (
            <InlineError error={error} />
          ) : (
            'Enter the verification code sent to your email address'
          )}

          <input
            required
            type="text"
            placeholder="000000"
            value={value}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
      </form>

      <p>
        <span>Not sent?&nbsp;</span>
        <NavLink to="/authenticate" onClick={onFormReset}>
          Try again
        </NavLink>
      </p>
    </AuthFormContainer>
  );
}

VerificationCodeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFormReset: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.any.isRequired,
};
