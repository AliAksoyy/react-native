import { createContext, useContext, useReducer } from "react";

export const CoursesContext = createContext({
  courses: [],
  addCourse: ({ description, amount, date }) => {},
  deleteCourse: (id) => {},
  updateCourse: (id, { description, amount, date }) => {},
});
const COURSES = [
  {
    id: "1",
    description: "C Programlama",
    amount: 69,
    date: new Date("2023-01-05"),
  },
  {
    id: "2",
    description: "C# Programlama",
    amount: 69,
    date: new Date("2023-04-10"),
  },
  {
    id: "3",
    description: "Angular",
    amount: 69,
    date: new Date("2022-12-08"),
  },
  {
    id: "4",
    description: "Bootstrap 5",
    amount: 69,
    date: new Date("2022-10-10"),
  },
  {
    id: "5",
    description: "React Js",
    amount: 69,
    date: new Date("2023-05-20"),
  },
  {
    id: "6",
    description: "React Native",
    amount: 69,
    date: new Date("2023-07-30"),
  },
  {
    id: "7",
    description: "Javascript",
    amount: 69,
    date: new Date("2023-06-12"),
  },
  {
    id: "8",
    description: "Komple Web",
    amount: 69,
    date: new Date("2021-10-22"),
  },
  {
    id: "9",
    description: "Frontend",
    amount: 69,
    date: new Date("2022-11-25"),
  },
];

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
