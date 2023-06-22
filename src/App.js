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
        title: "Antytila +Taras",
        description: "Antytila is a Ukrainian rock band that was formed in 2005 in the city of Lviv. The band\"s name translates to \"Antibodies\" in English, and they are known for their energetic performances and catchy melodies. The band consists of five members, including lead singer Taras Topolia, guitarist Yevhen Rohachevsky, bassist Bohdan Nyzhankivsky, drummer Denys Myzyuk, and keyboardist Andriy Halay. Antytila gained national popularity in Ukraine after their victory in the television show \"Chance\" in 2007. Since then, they have released multiple albums and singles and have performed at numerous concerts and festivals in Ukraine and abroad.",
        careerBeginYear: null,
        img: "https://novy.tv/wp-content/uploads/sites/96/2019/12/2019-11-17_00-45-33_Maximov-1.jpg",
        country: "Ukraine",
        performerGenres: [
            "Pop-Rock",
            "Pop"
        ],
        performerType: "band"
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