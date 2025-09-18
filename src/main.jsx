import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Movies from "./components/Movies.jsx";
import Tv from "./components/Tv.jsx";
import AboutUs from "./components/AboutUs.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";


const clientId =
  "782354341679-1321qghtu0cjf3pb8iopor7g1bkkctcu.apps.googleusercontent.com";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={clientId}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/tv" element={<Tv />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </GoogleOAuthProvider>
);
