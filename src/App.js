import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import { productsData } from "./api/Api";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={productsData}></Route>
          <Route path="/signin" element={<Signin />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100 ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
