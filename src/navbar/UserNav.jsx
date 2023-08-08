import { useDispatch } from 'react-redux';
import './userNav.css';
import {logout} from '../redux/action';

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
      <button className='userBtn' onClick={myBlogs}>My Blogs</button>
      </>
  );
};

export default UserNav;
