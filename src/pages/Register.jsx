import { Link } from 'react-router-dom';
import { useState } from 'react';
import './page.css';
import { useDispatch } from 'react-redux';
import { registerForm } from '../redux/action';



const Register = () => {
  const dispatch = useDispatch();
    const [data, setData] = useState({
      name: '',
      email: '',
      password: '',
    })
    
    
    const registerUser = async (e) =>{
      e.preventDefault();
      
      const {name, email, password } = data;
        dispatch(registerForm(name, email, password))
    }
    return(
        <>

      <div className="image"></div>
      <div className="container">
        <h1>Register</h1>
        <form action="POST" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email Address"
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
            <button type="submit">Create account</button>
            <Link to="/signin">Already have an account</Link>
          </div>
        </form>
      </div>
    </>
  );
};



export default Register;