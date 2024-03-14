import { createContext, useContext, useReducer } from "react";
import { COURSES } from "../components/Courses";

export const CoursesContext = createContext({
  courses: [],
  addCourse: ({ description, amount, date }) => {},
  deleteCourse: (id) => {},
  updateCourse: (id, { description, amount, date }) => {},
});

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ id, ...action.payload }, ...state];
    case "DELETE":
      return state.filter((course) => course.id !== action.payload.id);
    case "UPDATE":
      const updateCourseIndex = state.findIndex(
        (course) => course.id === action.payload.id
      );
      const updateCourse = state[updateCourseIndex];
      const updateItem = { ...updateCourse, ...action.payload.data };
      const updateCourses = [...state];
      updateCourses[updateCourseIndex] = updateItem;
      return updateCourses;
    default:
      return state;
  }
}

export default function CoursesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, COURSES);

  function addCourse(courseData) {
    dispatch({ type: "ADD", payload: courseData });
  }
  function updateCourse(id, courseData) {
    dispatch({ type: "UPDATE", payload: { id, courseData } });
  }
  function deleteCourse(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  const value = {
    courses: state,
    addCourse,
    updateCourse,
    deleteCourse,
  };

  return (
    <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
  );
}

export const useCoursesContext = () => {
  return useContext(CoursesContext);
};
