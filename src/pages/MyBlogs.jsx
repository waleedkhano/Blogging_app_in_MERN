import { useEffect } from "react";
import MyBlogData from "../components/MyblogData";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { deleteBlog, myblogs } from "../redux/action";
import '../components/component.css';

const MyBlogs = () => {
    const dispatch = useDispatch();
    const {myBlogs, error, message} = useSelector(state=>state.user)
    
    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: 'clearError' });
      }
      if (message) {
        toast.success(message);
        dispatch({ type: 'clearMessage' });
      }
      
      dispatch(myblogs());
    }, [dispatch, error, message]);
  
    const handleDelete = (blogId) => {
       const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
       if (confirmDelete) {
        dispatch(deleteBlog(blogId));
      }
    }

    return(
        <>
        <h1 className="blogHeading">Posted Blogs</h1>
        <div className="myblogsContainer">
  {Array.isArray(myBlogs) &&
    myBlogs.map((item) => (
      <div className="blogData" key={item._id}>
        <MyBlogData blog={item} />
        <button onClick={() => handleDelete(item._id)}>Delete</button>
      </div>
    ))}
</div>

        </>
    )
}

export default MyBlogs;