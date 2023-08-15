import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  message: null,
  blogs: null,
  blog: null,
  myBlogs: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("loginRequest", (state) => {
      state.loading = true;
    })
    .addCase("loginSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload.message;
    })
    .addCase("loginFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("registerRequest", (state) => {
      state.loading = true;
    })
    .addCase("registerSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload.message;
    })
    .addCase("registerFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("logoutRequest", (state) => {
      state.loading = true;
    })
    .addCase("logoutSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload;
    })
    .addCase("logoutFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    })
    .addCase("postBlogRequest", (state) => {
      state.loading = true;
    })
    .addCase("postBlogSuccess", (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
      state.message = action.payload
    })
    .addCase("postBlogFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("getAllBlogsRequest", (state) => {
      state.loading = true;
    })
    .addCase("getAllBlogsSuccess", (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    })
    .addCase("getAllBlogsFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("getSingleBlogRequest", (state) => {
      state.loading = true;
    })
    .addCase("getSingleBlogSuccess", (state, action) => {
      state.loading = false;
      state.blog = action.payload;
    })
    .addCase("getSingleBlogFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("myBlogRequest", (state) => {
      state.loading = true;
    })
    .addCase("myBlogSuccess", (state, action) => {
      state.loading = false;
      state.myBlogs = action.payload;
    })
    .addCase("myBlogFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteBlogRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteBlogSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("deleteBlogFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    
    .addCase("clearError", (state) => {
      state.error = null;
    })
    .addCase("clearMessage", (state) => {
      state.message = null;
    });
});