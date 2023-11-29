import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Countries from "./components/Countries.jsx";
import About from "./components/about.jsx";
import CountryDetails from "./components/CountryDetails.jsx";
import LoadingPage from "./components/LoadingPage.jsx";
import Faq from "./components/FAQ.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
        // element: <Faq></Faq>,
      },
      {
        path: "countries",
        element: <Countries />,
        loader: () => fetch("https://restcountries.com/v3.1/all"),
      },
      {
        path: "countries/:id",
        element: <CountryDetails></CountryDetails>,
        loader: ({ params }) =>
          fetch(`https://restcountries.com/v3.1/name/${params.id}?fullText=true
        `),
      },
      
      // fetch(`https://restcountries.com/v3.1/name/${params.id}
      {
        path: "FAQ",
        element: <Faq></Faq>,
        loader: ()=> fetch('https://raw.githubusercontent.com/flex-jnu/fakeDB/main/historicalplace.json')
      },
      {
        path: "about",
        element: <About />,
        loader: ()=> fetch('https://raw.githubusercontent.com/flex-jnu/fakeDB/main/aboutWorld.json')
      },
      {
        path: "loader",
        element: <LoadingPage></LoadingPage>,
      },
      {
        path: "*",
        element: <ErrorPage/>
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>
);
