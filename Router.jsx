import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Router>
          <Routes>
            <Route path="/" element={<Top />} />
            {/* <Route path="/users" element={<Users />} /> */}
          </Routes>
        </Router>
      </BrowserRouter>
    </>
  );
};
