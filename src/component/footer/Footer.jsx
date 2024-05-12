import React from 'react';
import {Link} from "react-router-dom";
import {google} from "../svgcomponents/svgFile";


const Footer = () => {
    return (
        <div className="content">
        <div className={'footer_container '}>
            <div className="footer_inner">
                <section className="repo">
                    <Link to={'/'}><img src="/img/repo.svg" alt="repo" width={30} className={'repo_img'}/>
                    </Link>
                    <p className="text">Material Design is an adaptable system of guidelines, components, and tools that
                        support the best
                        practices of user interface design. Backed by open-source code, Material Design streamlines
                        collaboration between designers and developers, and helps teams quickly build beautiful
                        products.</p>

                </section>
                <section className="list social">
                    <ul>
                        <li className={'list_title'}>Social</li>
                        <li className={'list_item'}>GitHub</li>
                        <li className={'list_item'}>Twitter</li>
                        <li className={'list_item'}>YouTube</li>
                        <li className={'list_item'}>Blog RSS</li>
                    </ul>
                </section>
                <section className="list libraries">
                    <ul>
                        <li className={'list_title'}>Libraries</li>
                        <li className={'list_item'}>Android</li>
                        <li className={'list_item'}>Compose</li>
                        <li className={'list_item'}>Flutter</li>
                        <li className={'list_item'}>Web</li>
                    </ul>
                </section>
                <section className=" list versions">
                    <ul>
                        <li className={'list_title'}>Archived versions</li>
                        <li className={'list_item'}>Material Design 1</li>
                        <li className={'list_item'}>Material Design 2</li>
                    </ul>
                </section>
            </div>
            <section className="copy">
                <ul>
                    <li className={'google'}>
                        {google}
                    </li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Join research studies</li>
                    <li>Feedback</li>
                </ul>
            </section>
        </div>
        </div>
    );
};

export default Footer;
