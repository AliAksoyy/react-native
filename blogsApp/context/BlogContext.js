import { createContext, useContext, useReducer } from "react";

const BlogContext = createContext();

const blogReducer = (state, { type, payload }) => {
  switch (type) {
    case "add":
      return [...state, payload];
    case "delete":
      return state.filter((item) => item.id !== payload.id);
    case "edit":
      return state.map((item) => {
        return item.id === payload.id ? payload : item;
      });
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogs, dispatch] = useReducer(blogReducer, []);

  const addBlog = (blog) => {
    dispatch({ type: "add", payload: blog });
  };
  const deleteBlog = (blog) => {
    dispatch({ type: "delete", payload: blog });
  };
  const editBlog = (blog) => {
    dispatch({ type: "edit", payload: blog });
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, deleteBlog, editBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
