import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import EffectsComponent from "./Components/Effect/EffectsComponent";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";
import { person } from "./person";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/props">Props</NavLink>
          </li>
          <li>
            <NavLink to="/my-state">My State</NavLink>
          </li>
          <li>
            <NavLink to="/effects">Effects</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/props" element={<PropsComponent person={person} />} />
        <Route path="/my-state" element={<MyStateComponent />} />
        <Route path="/effects" element={<EffectsComponent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
