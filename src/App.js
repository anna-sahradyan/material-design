import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./component/home/Home";
import Sidebar from "./component/sidebar/Sidebar";

const App = () => {
    return (
        <div >
            <Sidebar>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
            </Routes>
            </Sidebar>

        </div>
    );
};

export default App;
