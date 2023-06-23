import {Route, Routes} from 'react-router-dom';
import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/400.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Layout} from "./components/Layout/Layout";


import React from "react";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import PerformersPage from "./pages/PerformesPage/PerformersPage";


export default function App() {
    return (
      <Routes>

        <Route path={'/'} element={<Layout/>}>

          {/*<Route index element={<ImagePage/>}/>*/}
          {/*<Route path={'admin'} element={<AdminPage/>}/>*/}
          <Route path={'performer'} element={<PerformersPage/>}/>

          <Route path={'*'} element={<NotFoundPage/>}/>

        </Route>
      </Routes>
  );
}