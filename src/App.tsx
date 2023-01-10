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
  Profile,
} from "./Routes";
import DetailTools from "./sections/DetailTools";
import Projects from "./sections/Projects";
import { useAppSelector } from "./redux/store";
import { selectLogin } from "./redux/userSlice";
import Main from "./Routes/Main";

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
            <Route path="/" element={<Main />}>
              <Route index element={<Projects />} />
              <Route path="create" element={<ProjectCreate />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="/dashbord" element={<DashBoard />}>
              <Route index element={<DetailTools />} />
            </Route>
            <Route path="plans" element={<Plans />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
