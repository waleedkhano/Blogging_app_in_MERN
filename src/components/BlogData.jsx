import './component.css';
import { Link } from 'react-router-dom';

const BlogData = ({ blog }) => {
  return (
    <div className="blogData">
      <Link className="blogLink" to={`/blogs/${blog._id}`}>
        <img src={blog.logo} alt="blog-img" />
        <h4>{blog.title}</h4>
        <p>{blog.content}</p>
      </Link>
    </div>
    
  );
};

export default BlogData;
