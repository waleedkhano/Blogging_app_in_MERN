import { useEffect } from "react";
import BlogData from "../components/BlogData";
import '../components/component.css'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { allblogs } from "../redux/action";


const BlogsPage = () => {
  const dispatch = useDispatch();
  const {blogs, error, message} = useSelector(state=>state.user)
  
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    
    dispatch(allblogs());
  }, [dispatch, error, message]);


  return (
    <>
      <h1 className="blogHeading">Latest blogs</h1>
      <div className="mainContainer">
      <div className='container-blog'>

      {Array.isArray(blogs) &&
        blogs.map((item) => (
          <BlogData key={item._id} blog={item} />
          
          ))}
          </div>
          </div>
    </>
  );
};

export default BlogsPage;
