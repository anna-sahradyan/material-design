import React, { useEffect, useRef, useState } from 'react';
import data from "../svgcomponents/card.json";

const InfoComponent = () => {
    const infoRef = useRef(null);
    const [activeCards, setActiveCards] = useState({
        info: null,
        updates: null,
        resource: null
    });

    const setActiveCard = (type, id) => {
        setActiveCards(prevState => {
            const newActiveCards = {
                info: prevState.info,
                updates: prevState.updates,
                resource: prevState.resource
            };

            Object.keys(newActiveCards).forEach(key => {
                if (key !== type) {
                    newActiveCards[key] = null;
                }
            });

            newActiveCards[type] = id;
            return newActiveCards;
        });
    };

    const handleContextMenu = (type, id) => (event) => {
        event.preventDefault();
        setActiveCard(type, id);
    };

    const handleClick = (event) => {
        if (event.button === 0) {
            setActiveCards({
                info: null,
                updates: null,
                resource: null
            });
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className="content">
            <div className="info" ref={infoRef}>
                <div className="category">
                    <h2>News & Launches</h2>
                    <div className="info_inner">
                        {data.info.map((item) => (
                            <div className={`card ${item.id === activeCards.info ? 'card_border_info' : ''}`} key={item.id} onContextMenu={handleContextMenu('info', item.id)}>
                                <img src={item.img} alt="info" className="info_img" />
                                <div className="card_inner">
                                    <span className="span_title">{item.title}</span>
                                    <span className="span_info">{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="category">
                    <h2>Design system updates</h2>
                    <div className="info_inner">
                        {data.updates.map((item) => (
                            <div className={`card ${item.id === activeCards.updates ? 'card_border_updates' : ''}`} key={item.id} onContextMenu={handleContextMenu('updates', item.id)}>
                                <img src={item.img} alt="updates" className="info_img" />
                                <div className="card_inner">
                                    <span className="span_title">{item.title}</span>
                                    <span className="span_info">{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="category">
                    <h2>Resources</h2>
                    <div className="resources_inner">
                        {data.resource.map((item) => (
                            <div className={`card ${item.id === activeCards.resource ? 'card_border_resource' : ''}`} key={item.id} onContextMenu={handleContextMenu('resource', item.id)}>
                                <span className="title_resources">{item.title}</span>
                                <span className="desc_resources">{item.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoComponent;
