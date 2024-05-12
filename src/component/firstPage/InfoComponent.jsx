import React, {useState} from 'react';
import data from "../svgcomponents/card.json";

const InfoComponent = () => {
    const [borderVisible, setBorderVisible] = useState(false);
    const toggleBorder = () => {
        setBorderVisible(!borderVisible);
    };
    return (
        <div className={'content'}>
            <div className={'info'}>
                <h2>News & Launches</h2>
                <div className="info_inner">
                    {data.info.map((item, index) => (
                        <div className="card" key={index}>
                            <img src={item.img} alt="info" className={'info_img'}/>
                            <div className="card_inner">
                                <span className={'span_title'}>{item.title}</span>
                                <span className={'span_info'}>{item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <h2>Design system updates</h2>
                <div className="info_inner">
                    {data.updates.map((item, index) => (
                        <div className="card" key={index}>
                            <img src={item.img} alt="updates" className={'info_img'}/>
                            <div className="card_inner">
                                <span className={'span_title'}>{item.title}</span>
                                <span className={'span_info'}>{item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <h2>Resources</h2>
                <div className={"resources_inner"}>
                    {data.resource.map((item, index) => (
                        <div className="card" key={index}>
                            <span className={'title_resources'}>{item.title}</span>
                            <span className={"desc_resources"}>{item.desc}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoComponent;
