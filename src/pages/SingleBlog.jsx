import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleblogs } from "../redux/action";

const SingleBlog = () => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const { blog, loading, error } = useSelector((state) => state.user);
  console.log(blog)
  useEffect(() => {
    dispatch(singleblogs(blogId));
  }, [dispatch, blogId]);

  return (
    <div>
      {blog && (
        <div className="singleBlog">
          <div className="singleBlogImg">
            <img src={blog.logo.url} alt="Blog-cover-img" />
          </div>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
