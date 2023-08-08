import axios from 'axios';


// authentication actions 
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" }); // Dispatch the "loginRequest" action to indicate login request start
    const { data } = await axios.post("/user/signin", { email, password }, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch({ type: "loginSuccess", payload: data }); // Dispatch the "loginSuccess" action with response data
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message }); // Dispatch the "loginFail" action with the error message
  }
};

export const registerForm = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });
    const { data } = await axios.post(
      "/user/register",
      { name, email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    
    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "registerFail", payload: error.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
    try {
      dispatch({ type: "logoutRequest" }); 
  
      const { data } = await axios.post("/user/logout", {
        withCredentials: true,
      });
      
      dispatch({ type: "logoutSuccess", payload: data.message }); // Dispatch the "loginSuccess" action with response data
    } catch (error) {
      dispatch({ type: "logoutFail", payload: error.response.data.message }); // Dispatch the "loginFail" action with the error message
    }
  };
  


  // blogs actions
  export const postNewBlog = (formData) => async (dispatch) => {
    try {
      dispatch({ type: "postBlogRequest" }); 
      const { data } = await axios.post("/blogs", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });

      dispatch({ type: "postBlogSuccess", payload: data.message }); 
      return true;
    } catch (error) {
      dispatch({ type: "postBlogFail", payload: error.response.data.message }); 
      return false;
    }
  };


  //get all the blogs
  export const allblogs = () => async (dispatch) => {
    try {
      dispatch({ type: "getAllBlogsRequest" }); 
      const { data } = await axios.get("/blogs", {
        withCredentials: true,
      });
      
      dispatch({ type: "getAllBlogsSuccess", payload: data }); 
    } catch (error) {
      dispatch({ type: "getAllBlogsFail", payload: error.response.data.message }); 
    }
  };


  //get single the blogs
  export const singleblogs = (id) => async (dispatch) => {
    console.log(id)
    try {
      dispatch({ type: "getSingleBlogRequest" }); 
      const { data } = await axios.get(`/blogs/${id}`, {
        withCredentials: true,
      });
      console.log(data)
      dispatch({ type: "getSingleBlogSuccess", payload: data }); 
    } catch (error) {
      dispatch({ type: "getSingleBlogFail", payload: error.response.data.message }); 
    }
  };
  
  