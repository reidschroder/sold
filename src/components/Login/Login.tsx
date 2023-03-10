import React, { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { login, setStatus } from '../../store/userSlice';
import { addToast } from '../toasts/toastsSlice';

const Login: React.FC<any> = () => {
    const user = useSelector((state: any) => state.users.user);
    const status = useSelector((state: any) => state.users.status);
    const dispatch = useDispatch<any>();
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!username || !password) {
        dispatch(
          addToast({
            status: "warning",
            message: "Please enter your email and password.",
          })
        );
      } else {
        const payload = { username, password };
        try {
          dispatch(login(payload));
          navigate("/");
        } catch (err: any) {
          throw new Error(err);
        }
      }
    };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
              value={username}
							onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
							onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;
