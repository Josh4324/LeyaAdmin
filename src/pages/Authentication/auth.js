import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeyaLogo from '../../assets/leya.svg';
import LeyaLoop from '../../assets/leya-loop.svg';
import { Link } from 'react-router-dom';
import { loginUser } from '../../redux/Auth/authActions';
import ErrorAlert from '../../components/alerts/errorAlert';
export default function Auth({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector((state) => state.auth.loginLoading);
  const error = useSelector((state) => state.auth.loginError);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const onSubmit = () => {
    const payload = {
      password,
      userId: email,
      ip: '192.168.51.17',
    };
    dispatch(loginUser(payload, history));
  };

  return (
    <div className="auth-wrapper">
      <div className="loop-box">
        <img src={LeyaLoop} alt="" />
      </div>

      <div className="container">
        {error && <ErrorAlert errorMessage={error} />}

        <div className="col-md-4">
          <div class="w-lg-500px bg-body rounded shadow-sm p-10 mx-auto">
            <img src={LeyaLogo} alt="" width="60px" className="mb-10" />
            <h5 className="text-black text-md text-bold">Sign In to Leya</h5>
            <p className="text-bold">
              Sign in with your Leya email and password.
            </p>

            <div className="form-group mt-8 mb-6">
              <label htmlFor="Email" className="lead">
                Email Address
              </label>
              <input
                class="form-control form-control-lg form-input--extended"
                type="email"
                name="email"
                autoComplete="off"
                placeholder="example@google.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email" className="lead">
                Password
              </label>

              <input
                class="form-control form-control-lg form-input--extended "
                type="password"
                name="password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <button
                className="btn w-100 btn-success"
                onClick={onSubmit}
                disabled={loading}
              >
                {!loading ? (
                  <span className="indicator-label">Submit</span>
                ) : (
                  <span className="indicator">
                    Please wait...{' '}
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
