import React from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(()=>import("../components/Home"))
const Counter = lazy(()=>import("../components/Counter"))
const PageNotFound = lazy(()=>import("../components/Error"))

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
