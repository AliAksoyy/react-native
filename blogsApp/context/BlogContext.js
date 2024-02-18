import { createContext, useContext, useReducer } from "react";

const BlogContext = createContext();

const blogReducer = (state, { type, payload }) => {
  switch (type) {
    case "add":
      return state;
    default:
      return state;
  }
};
export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, []);

  return <BlogContext.Provider value="a">{children}</BlogContext.Provider>;
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
