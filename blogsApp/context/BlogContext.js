import { createContext, useContext, useReducer } from "react";

const BlogContext = createContext();

const blogReducer = (state, { type, payload }) => {
  switch (type) {
    case "add":
      return [...state, payload];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogs, dispatch] = useReducer(blogReducer, [
    { title: "react", content: "good" },
    { title: "js", content: "good" },
  ]);

  const addBlog = (blog) => {
    dispatch({ type: "add", payload: blog });
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
