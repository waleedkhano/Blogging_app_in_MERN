import { Link } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../redux/action';
import './page.css';
import { useDispatch } from 'react-redux';



const Signin = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const signinUser = async(e) =>{
        e.preventDefault();
        const {email, password} = data;
        dispatch(login(email, password))
    }
    return(
        <>

      <div className="image"></div>
      <div className="container">
        <h1>Sign in</h1>
        <form action="" onSubmit={signinUser}>
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <div className="btn">
            <button type="submit">Sign in</button>
            <Link to="/register">Don't have an account</Link>
          </div>
        </form>
      </div>
    </>
  );
};
        

export default Signin;