import { createContext, useContext } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider value="a">{children}</BlogContext.Provider>;
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
