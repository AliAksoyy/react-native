import { createContext, useContext, useReducer } from "react";

const BlogContext = createContext();

const blogReducer = (state, { type, payload }) => {
  switch (type) {
    case "add":
      return [...state, payload];
    case "delete":
      return state.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogs, dispatch] = useReducer(blogReducer, [
    { title: "react", content: "good", id: Date.now() },
    { title: "js", content: "good", id: Date.now() },
  ]);

  const addBlog = (blog) => {
    dispatch({ type: "add", payload: blog });
  };
  const deleteBlog = (blog) => {
    dispatch({ type: "delete", payload: blog });
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
