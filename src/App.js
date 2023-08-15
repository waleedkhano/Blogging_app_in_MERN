import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from "./navbar/Nav";
import './pages/page.css';
import Home from "./pages/Home";
import About from "./pages/About";
import BlogsPage from "./pages/BlogsPage";
import LoginBtn from "./pages/LoginBtn";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import CreateNewBlog from './pages/CreateNewBlog';
import { Toaster, toast } from "react-hot-toast";
import SingleBlog from "./pages/SingleBlog";
import { useDispatch, useSelector } from "react-redux";
import { ProtectedRoute } from "protected-route-react";
import MyBlogs from "./pages/MyBlogs";


const App = () => {

  const { isAuthenticated, message, error } = useSelector((state) => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' })
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' })
    }
  }, [dispatch, error, message])
  return (
    <Router>
      <Toaster position="bottom-center" />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/create_blog" element={
          <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/create_new_blog">
            <LoginBtn />
          </ProtectedRoute>
        } />
        <Route path="/register" element={
          <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/create_new_blog">
            <Register />
          </ProtectedRoute>
        } />
        <Route path="/signin" element={
          <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/create_new_blog">
            <Signin />
          </ProtectedRoute>
        } />
        <Route path="/create_new_blog" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/signin">
            <CreateNewBlog />
          </ProtectedRoute>
        } />

        <Route path="/myblogs" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/signin">
            <MyBlogs />
          </ProtectedRoute>
        } />

        <Route path="/blogs/:blogId" element={<SingleBlog />} />
      </Routes>
    </Router>
  );
};

export default App;
