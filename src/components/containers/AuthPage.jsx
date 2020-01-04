import React from 'react';
import { Redirect } from 'react-router-dom';
import EmailVerificationForm from '../common/auth/EmailVerificationForm';
import VerificationCodeForm from '../common/auth/VerificationCodeForm';
import api from '../../services';
import { useAuthContext } from '../../contexts/auth';

export default function AuthPage() {
  const authContext = useAuthContext();
  const { authState } = authContext;

  const {
    user: { email, verificationCode },
    isAuthenticated,
    isFetching,
    error,
  } = authState;

  function handleInvalidInput(err) {
    authContext.onAuthError({ status: 400, message: err });
  }

  async function onEmailSubmit(params) {
    await authContext.onAuthRequest();

    try {
      const res = await api.post('/auth', params);

      // Hold the email in state and await entry of verification code by user
      if (res.status === 200) {
        authContext.onAuthenticateUserEmail(res.data.user);
        return;
      }

      // Temp. To remove when API is live
      if (res.error) {
        authContext.onAuthError(res.error);
      }
    } catch (err) {
      // This needs refining
      authContext.onAuthError({ status: 500, message: err.message });
    }
  }

  function onVerificationCodeSubmit(code) {
    if (Number(code) === verificationCode) {
      authContext.onAuthenticateUserPin();
      return;
    }

    authContext.onAuthError({
      status: 400,
      message: `'${code}' is not a valid verification code.`,
    });
  }

  function onFormReset() {
    authContext.onResetForm();
  }

  return isAuthenticated ? (
    <Redirect to="/the-timeline" />
  ) : (
    <>
      {email ? (
        <VerificationCodeForm
          onSubmit={onVerificationCodeSubmit}
          onInvalidInput={handleInvalidInput}
          onFormReset={onFormReset}
          isFetching={isFetching}
          error={error}
        />
      ) : (
        <EmailVerificationForm
          onSubmit={onEmailSubmit}
          onInvalidInput={handleInvalidInput}
          isFetching={isFetching}
          error={error}
        />
      )}
    </>
  );
}
