import React, {useRef, useState} from 'react';
import {IoPauseOutline, IoPlayOutline} from "react-icons/io5";

const SliderComponent = () => {
    const [pause, setPause] = useState(false)
    const videoRef = useRef();
        const handleClick = () => {
            if (pause) {
                videoRef.current.play();
            } else {

                videoRef.current.pause();
            }
            setPause(!pause);
        };
    return (
        <div className={'content'}>
            <div className={'slide_inner'}>
            <div className={'title_carousel'}>
                <div className="title_inner">
                    <h1>Material Design</h1>
                    <p>Material 3 is the latest version of Google’s open-source design system. Design and build
                        beautiful,
                        usable products with Material 3.</p>
                    <button type="button" className="btn btn_title"> Get started</button>
                </div>
            </div>
            <div className={'video_carousel'}>
                <div className="carousel_inner">
                    <video autoPlay loop muted className={" relative min-h-full min-w-full"} tabIndex="0" preload="auto" playsInline={true}
                           ref={videoRef}
                           style={{width: '100%', height: '544px', objectFit: 'cover', borderRadius: '8%',marginBottom:"-5px"}}>

                        <source
                            src="https://kstatic.googleusercontent.com/files/65da8f0326427a8e71bfa678348f3fa1a4bb1660e0b013591eb3bfd9df455bd5a3334249de61229029be7d2fd7cf18d4e143728b7e0702b6bde6251a9c64511a"  />
                    </video>
                    <div className="pause ">
                        {pause ? <IoPlayOutline size={20} onClick={handleClick} className={'icon'}/> :
                            <IoPauseOutline size={20} onClick={handleClick} className={'icon'}/>}
                    </div>

                </div>
            </div>
            </div>
        </div>
    );
};

export default SliderComponent;
