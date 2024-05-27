import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';


const SidebarItem= ({item}) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMouseEnter = () => {
        if (item.children) {
            setShowMenu(true);
        }
    };

    const handleMouseLeave = () => {
        setShowMenu(false);
    };

    return (
        <div className={'d-flex sidebar_item py-2 px-4'}>
            {item.children ? (
                <div
                    className={'icon_inner'}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {item.icon ? (
                        <div className={'icon'}>{item.icon}</div>
                    ) : item.img ? (
                        <img src={item.img} alt={'img'} width={24}/>
                    ) : null}
                    <div className={'title'}>{item.label}</div>
                    {item.iconLight ? <div className={'icon'}>{item.iconLight}</div> :
                        <div className={'icon'}>{item.iconDark}</div>}
                    <Offcanvas show={showMenu} onHide={() => setShowMenu(false)}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title  className={'title_li' + (item.label === 'Develop' ? ' develop' : '')}>{item.label}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ul className={'ul_submenu'}> {item.children && item.children.map((child, index) => (
                                <li key={index} className={'li_submenu'}>
                                    <Link to={child.path} className={'label'}>
                                        {child.label}
                                    </Link>
                                </li>
                            ))}</ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            ) : (
                <div className={'icon_inner'}>
                    {item.icon ? (
                        <div className={'icon'}>{item.icon}</div>
                    ) : item.img ? (
                        <img src={item.img} alt={'img'} width={24}/>
                    ) : null}
                    <div className={'title'}>{item.label}</div>
                    {item.iconLight ? <div className={'icon'}>{item.iconLight}</div> :
                        <div className={'icon'}>{item.iconDark}</div>}
                </div>
            )}
        </div>
    );
};

export default SidebarItem;
