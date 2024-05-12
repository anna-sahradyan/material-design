import React from 'react';
import {line} from "../svgcomponents/svgFile";
import SliderComponent from "../firstPage/SliderComponent";
import InfoComponent from "../firstPage/InfoComponent";
import Footer from "../footer/Footer";


const Home = () => {
    return (
        <div>
            <SliderComponent/>
            <InfoComponent/>
            <div className={'svgMargin'}>
                {line}
            </div>
            <Footer/>

        </div>
    );
};

export default Home;
