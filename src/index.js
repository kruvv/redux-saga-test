import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Router } from "react-router";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
// import { createBrowserHistory } from "history";
import Home from "./pages/home/home";
import LatestNews from "./pages/latest-news/latest-news";
import PopularNews from "./pages/popular-news/popular-news";

// const history = createBrowserHistory();

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/latest-news",
//         element: <LatestNews />,
//       },
//       {
//         path: "/popular-news",
//         element: <PopularNews />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={(router = [])}> */}
      {/* <App> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest-news" element={<LatestNews />} />
          <Route path="/popular-news" element={<PopularNews />} />
        </Routes>
      </BrowserRouter>
      {/* </App> */}
      {/* </RouterProvider> */}
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
