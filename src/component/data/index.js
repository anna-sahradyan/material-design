import { IoMdSearch, IoIosColorPalette } from "react-icons/io";
import { MdHomeWork } from "react-icons/md";
import { PiDotsNineBold } from "react-icons/pi";
import { IoCode } from "react-icons/io5";
import { BiBookBookmark } from "react-icons/bi";
import { FiPlusCircle } from "react-icons/fi";
import { PiCalendarStarBold } from "react-icons/pi";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
const menu = [
    {
        title: "",
        icon:<IoMdSearch /> ,
        path: "/",
    },
    {
        title: "Home",
        img:'/img/repo.svg' ,
        path: "/",
    },
    {
        title: "Get started",
        icon: <PiDotsNineBold />,
        path: "/",
    },
    {
        title: "Develop",
        icon: <IoCode />,
        children: [
            {
                title: "Develop overview",
                path: "/",
            },
            {
                title: "Android",
                path: "/",
                childrenTwoPart:[
                    {
                        title: "MDC-Android",
                        path: "/",
                    },{
                        title: "Jetpack Compose",
                        path: "/",
                    }
                ]
            }, {
                title: "Flutter",
                path: "/",
            },
            {
                title: "Web",
                path: "/",
            },
        ],
    },
    {
        title: "Foundations",
        icon: <BiBookBookmark />,
        path: "/",
        children:[
            {
                title: "Foundations overview",
                path: "/",
            },
            {
                title: "Accessibility",
                path: "/",
            },
            {
                title: "Content design",
                path: "/",
                childrenTwoPart:[
                    {
                        title:"Overview",
                        path:'/'
                    },
                    {
                        title:"Alt text",
                        path:'/'
                    },
                    {
                        title:'Global writing',
                        path:'/'

                    },
                    {
                        title:'Style guide',
                        path:'/'

                    },
                ]
            }, {
                title: "Customizing Material",
                path: "/",
            }, {
                title: "Design tokens",
                path: "/",
            }, {
                title: "Interaction",
                path: "/",
                childrenTwoPart:[
                    {
                        title: "Gestures",
                        path: "/",
                    },{
                        title: "Inputs",
                        path: "/",
                    },{
                        title: "Selection",
                        path: "/",
                    },{
                        title: "States",
                        path: "/",
                    },

                ]
            },
            {
                title: "Layout",
                path: "/",
                childrenTwoPart:[
                    {
                        title: "Understanding layout",
                        path: "/",
                    }, {
                        title: "Applying layout",
                        path: "/",
                    }, {
                        title: "Canonical layouts",
                        path: "/",
                    },
                ]
            },
            {
                title: "Material A-Z",
                path: "/",
            },
        ],


    },
    {
        title: "Styles",
        icon: <IoIosColorPalette />,
        path: "/",
        children:[
            {
                title: "Color",
                path: "/",
                childrenTwoPart:[
                    {
                        title: "Color system",
                        path: "/",
                    }, {
                        title: "Color roles",
                        path: "/",
                    }, {
                        title: "Color schemes",
                        path: "/",
                    },{
                        title: "Advanced",
                        path: "/",
                    },{
                        title: "Color resources",
                        path: "/",
                    },
                ]
            },{
                title: "Elevation",
                path: "/",

            },{
                title: "Icons",
                path: "/",
            },{
                title: "Motion",
                path: "/",
                childrenTwoPart:[
                    {
                        title: "Overview",
                        path: "/",
                    }, {
                        title: "CEasing and duration",
                        path: "/",
                    }, {
                        title: "Transitions",
                        path: "/",
                    },
                ]
            },{
                title: "Shape",
                path: "/",
            },{
                title: "Typography",
                path: "/",
            }
        ],

    },
    {
        title: "Components",
        icon: <FiPlusCircle />,
        path: "/",
        children: [
            {
                title: "Components overview",
                path: "/",
            },{
                title: "App bars",
                path: "/",
            }
        ]

    },
    {
        title: "Blog",
        icon: <PiCalendarStarBold />,
        path: "/",

    },
    {
        "theme": "light",
        "menu": [
            {
                "title": "Light Mode",
                "icon": <MdOutlineLightMode/>,
                "type": "theme-toggle",
                "theme": "light"
            },
            {
                "title": "Dark Mode",
                "icon": <MdOutlineDarkMode/>,
                "type": "theme-toggle",
                "theme": "dark"
            }
        ]
    }
];

export default menu;
