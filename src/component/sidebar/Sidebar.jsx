import React from 'react';
import menu from "../data";
import SidebarItem from "./SidebarItem";

const Sidebar = ({children}) => {

    return (
        <div className={'container'}>
            <div className={'sidebar'}>
                <div className="scrollable_content">
                    {menu.map((item, index) => (
                        <SidebarItem
                            key={index}
                            item={item}
                        />
                    ))}
                </div>
            </div>
            <main className={'main'}>{children}</main>
        </div>
    );
};

export default Sidebar;

