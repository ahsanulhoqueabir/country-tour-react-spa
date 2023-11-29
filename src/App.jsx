import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Faq from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" h-screen flex flex-col">
      <Header></Header>
      <div className="lg:mx-16 my-10">
        <Outlet></Outlet>
        {/* <Faq /> */}
      </div>
      <div className="mt-auto"><Footer/></div>
    </div>
  );
}

export default App;
