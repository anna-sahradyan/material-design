import React from 'react';
import {Link} from "react-router-dom";

const SidebarItem = ({item}) => {
    return (
        <div className={' d-flex sidebar_item py-2 px-4'}>
            <Link to={item.path}></Link>
            <div className={'icon_inner'}>
                {item.icon ?(<div className={'icon'}>{item.icon}</div>):(<img src={item.img} alt={'img'} width={24}/>)}
                <div className={'title '}>{item.title}</div>

            </div>
        </div>
    );
};

export default SidebarItem;
