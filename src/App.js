import "./App.css";
import CategoriesOfCourses from "./components/CategoriesOfCourses";
import Courses from "./components/Courses";
import Leaderboard from "./components/Leaderboard";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Logo />}></Route>
        <Route
          exact
          path="/categoriesOfCourse"
          element={<CategoriesOfCourses />}
        />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;
