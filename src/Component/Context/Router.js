import React, { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Card from "./Page/Card";
import Context from "./Context";
import { Reduce,Object } from "./Reduce";
import './Page/Style.scss'
import Favourite from "./Page/Favourite";

const Router = () => {

    const[state,setState] = useReducer(Reduce,Object)

    return(
        <Context.Provider value={{state,setState}}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/like" element={<Favourite/>}/>
                    <Route path="/card" element={<Card/>}/>
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}

export default Router