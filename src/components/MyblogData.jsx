import './component.css';    
import { Link } from 'react-router-dom';

const MyBlogData = ({ blog }) => {
  return (
    <div className="myblogData">
      <Link className="blogLink" to={`/blogs/${blog._id}`}>
        <img src={blog.logo.url} alt="blog-img" />
        <h4>{blog.title}</h4>
        <p>{blog.content}</p>
      </Link>
    </div>
    
  );
};

export default MyBlogData;
