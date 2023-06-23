import {Route, Routes} from 'react-router-dom';
import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/400.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Layout} from "./components/Layout/Layout";


import React from "react";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import PerformerPage from "./pages/PerformerPage/PerformerPage";


export default function App() {
    const performer = {
        performerId: 1,
        title: "Antytila",
        description: "Antytila is a Ukrainian rock band that was formed in 2005 in the city of Lviv. The band\"s name translates to \"Antibodies\" in English, and they are known for their energetic performances and catchy melodies. The band consists of five members, including lead singer Taras Topolia, guitarist Yevhen Rohachevsky, bassist Bohdan Nyzhankivsky, drummer Denys Myzyuk, and keyboardist Andriy Halay. Antytila gained national popularity in Ukraine after their victory in the television show \"Chance\" in 2007. Since then, they have released multiple albums and singles and have performed at numerous concerts and festivals in Ukraine and abroad.",
        careerBeginYear: null,
        img: "https://img.tsn.ua/cached/080/tsn-471c1e8f46d3594337c6f6226982b912/thumbs/1036x648/64/79/cc4cc0391a69b28180333afdbd3a7964.jpeg",
        country: "Ukraine",
        performerGenres: [
            "Pop-Rock",
            "Pop"
        ],
        performerType: "Band"
    }
    return (
      <Routes>

        <Route path={'/'} element={<Layout/>}>

          {/*<Route index element={<ImagePage/>}/>*/}
          {/*<Route path={'admin'} element={<AdminPage/>}/>*/}
          <Route path={'performer'} element={<PerformerPage performer={performer}/>}/>

          <Route path={'*'} element={<NotFoundPage/>}/>

        </Route>
      </Routes>
  );
}