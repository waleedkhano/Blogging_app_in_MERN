import { useDispatch } from 'react-redux';
import './userNav.css';
import {logout} from '../redux/action';
import {Link} from 'react-router-dom';

const UserNav = () => {
  const dispatch = useDispatch();

  const logOut = () =>{
        dispatch(logout())
  }
  const myBlogs = () =>{
    
  }

  return (
    <>
      <button className='userBtn' onClick={logOut}>LogOut</button>
      <Link to='/myblogs'>
      <button className='userBtn' onClick={myBlogs}>My Blogs</button>
      </Link>
      </>
  );
};

export default UserNav;
