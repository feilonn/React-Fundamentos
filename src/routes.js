import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanetsScreen from "./screens/planets";

const Routers = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<PlanetsScreen/>} />
        </Routes>
    </BrowserRouter>
)

export default Routers;
