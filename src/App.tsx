import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import {
  Fallback,
  Landing,
  Login,
  DashBoard,
  ProjectCreate,
  Plans,
  Contact,
} from "./Routes";
import DetailTools from "./sections/DetailTools";
import Projects from "./sections/Projects";
import { useAppSelector } from "./redux/store";
import { selectLogin } from "./redux/userSlice";

function App() {
  const isLogin = useAppSelector(selectLogin);

  return (
    <Router>
      <Routes>
        {!isLogin ? (
          <Route path="/">
            <Route index element={<Landing />} />s
            <Route path="login" element={<Login />} />
            <Route path="plans" element={<Plans />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Landing />} />
          </Route>
        ) : (
          <>
            <Route path="/" element={<DashBoard />}>
              <Route index element={<DetailTools />} />
              <Route path="projects" element={<Projects />} />
              <Route path="Projects/create" element={<ProjectCreate />} />
              <Route path="*" element={<DetailTools />} />
            </Route>
            <Route path="plans" element={<Plans />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
