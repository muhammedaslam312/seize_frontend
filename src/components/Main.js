import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../utils/AuthContext";

import Header from "./home/Header";
import Home from "./home/Home";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home/>}></Route>

            {/* <Route
              path="details/:url_id"
              element={
                <RequireAuth>
                  <UrlDetails />
                </RequireAuth>
              }
            ></Route> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default Main;
