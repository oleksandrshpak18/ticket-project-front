// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;


import {Route, Routes} from 'react-router-dom';
import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/400.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Layout} from "./components/Layout/Layout";

// import {AdminPage, ImagePage, NotFoundPage} from './pages';

export default function App() {
  return (

      <Routes>

        <Route path={'/'} element={<Layout/>}>

          {/*<Route index element={<ImagePage/>}/>*/}
          {/*<Route path={'admin'} element={<AdminPage/>}/>*/}

          {/*<Route path={'*'} element={<NotFoundPage/>}/>*/}

        </Route>
      </Routes>
  );
}