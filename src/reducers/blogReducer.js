import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'

const initialState = []

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    addBlog(state, action) {
      return state.concat(action.payload)
    },
    setBlogs(state, action) {
      return action.payload
    },
    updateBlog(state, action) {
      return state.map(s => s.id !== action.payload.id ? s : action.payload)
    },
    eraseBlog(state, action) {
      return state.filter(s => s.id !== action.payload)
    },
  },
})

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()
    dispatch(setBlogs(blogs))
  }
}

export const createBlog = (blog) => {
  return async (dispatch) => {
    const newBlog = await blogService.create(blog)
    dispatch(addBlog(newBlog))
  }
}

export const removeBlog = (blog) => {
  return async (dispatch) => {
    await blogService.remove(blog.id)
    dispatch(eraseBlog(blog.id))
  }
}

export const likeBlog = (blog) => {
  const toLike = { ...blog, likes: blog.likes + 1, user: blog.user.id }
  return async (dispatch) => {
    const changedBlog = await blogService.update(toLike.id, toLike)
    dispatch(updateBlog(changedBlog))
  }
}

export const { addBlog, setBlogs, updateBlog, eraseBlog } = blogSlice.actions
export default blogSlice.reducer
