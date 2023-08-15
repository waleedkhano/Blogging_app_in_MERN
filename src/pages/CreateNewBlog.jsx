import UserNav from '../navbar/UserNav';
import { useState } from 'react';
import icon from "../icons/cloud-upload-icon.png";
import { useDispatch } from 'react-redux';
import { postNewBlog } from '../redux/action';

const CreateNewBlog = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: '',
    content: '',
    logo: '',
  });

  const blogPost = async (e) => {
    e.preventDefault();

    const { title, content, logo } = data;
    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("content", content);
    myForm.append("file", logo);

    const success = await dispatch(postNewBlog(myForm));
    if (success) {
      setData({
        title: '',
        content: '',
        logo: '',
      });
    }

  };


  return (
    <>
      <UserNav />
      <div className='creatingBlog'>
        <h1>Post new blog</h1>
        <form action='' onSubmit={blogPost}>
          <input
            type='text'
            placeholder='Enter Blog Title'
            name='title'
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />

          <textarea
            placeholder='Enter Blog content'
            value={data.content}
            name='content'
            onChange={(e) => setData({ ...data, content: e.target.value })}
          ></textarea>

          <label className='label'>
            <input
              style={{ display: 'none' }}
              type='file'
              accept='image/*'
              name='logo'
              onChange={(e) => setData({ ...data, logo: e.target.files[0] })}
            />
            <img className='avator' src={icon} alt='avator' width='30px' />
            <span>Add an image</span>
          </label>

          <button type='submit'>Submit Post</button>
        </form>
      </div>
    </>
  );
};

export default CreateNewBlog;
