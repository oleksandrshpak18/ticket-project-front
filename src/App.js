import {Route, Routes} from 'react-router-dom';
import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/400.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Layout} from "./components/Layout/Layout";


import React from "react";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {PerformersPage} from "./pages/PerformesPage/PerformersPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import VenuesPage from "./pages/VenuesPage/VenuesPage";
import {SinglePerformer} from "./components/SinglePerformer/SinglePerformer";
import SingleVenue from "./components/SingleVenue/SingleVenue";
import SingleEvent from "./components/SingleEvent/SingleEvent";
import {Booking} from "./components/Booking/Booking";
import {Checkout} from "./components/Checkout/Checkout";
import './App.css'


export default function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<EventsPage/>}/>
                <Route path={'events'}>
                    <Route path={':title'} element={<SingleEvent/>}/>
                    <Route path=":title/booking" element={<Booking/>}/>
                    <Route path={':title/booking/checkout'} element={<Checkout/>}/>
                </Route>
                <Route path={'performers'}>
                    <Route index element={<PerformersPage/>}/>
                    <Route path={':title'} element={<SinglePerformer/>}/>
                </Route>
                <Route path={'venues'}>
                    <Route index element={<VenuesPage/>}/>
                    <Route path={':title'} element={<SingleVenue/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}