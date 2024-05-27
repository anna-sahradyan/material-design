import {IoMdSearch, IoIosColorPalette} from "react-icons/io";
import {PiDotsNineBold} from "react-icons/pi";
import {BiBookBookmark} from "react-icons/bi";
import {FiPlusCircle} from "react-icons/fi";
import {PiCalendarStarBold} from "react-icons/pi";
import {MdOutlineLightMode, MdOutlineDarkMode} from "react-icons/md";
import { IoCode } from "react-icons/io5";

const menu = [
    {
        id: 1,
        label: "",
        icon: <IoMdSearch/>,
        path: "/",
    },
    {
        id: 2,
        label: "Home",
        img: 'img/repo.svg',
        path: "/",
    },
    {
        id: 3,
        label: "Get started",
        icon: <PiDotsNineBold/>,
        path: "/",
    },
    {
        id: 4,
        label: "Develop",
        icon: <IoCode/>,
        children: [
            {
                id: 5,
                label: "Develop overview",
                path: "/",
            },
            {
                id: 6,
                label: "Android",
                path: "/",
                children: [
                    {
                        id: 7,
                        label: "MDC-Android",
                        path: "/",
                    },
                    {
                        id: 8,
                        childTitle: "Jetpack Compose",
                        path: "/",
                    }
                ]
            },
            {
                id: 9,
                label: "Flutter",
                path: "/",
            },
            {
                id: 10,
                label: "Web",
                path: "/",
            },
        ],
    },
    {
        id: 11,
        label: "Foundations",
        icon: <BiBookBookmark/>,
        path: "/",
        children: [
            {
                id: 12,
                label: "Foundations overview",
                path: "/",
            },
            {
                id: 13,
                label: "Accessibility",
                path: "/",
            },
            {
                id: 14,
                label: "Content design",
                path: "/",
            },
            {
                id: 15,
                label: "Customizing Material",
                path: "/",
            },
            {
                id: 16,
                label: "Design tokens",
                path: "/",
            },
            {
                id: 17,
                label: "Interaction",
                path: "/",
            },
            {
                id: 18,
                label: "Layout",
                path: "/",
            },
            {
                id: 19,
                label: "Material A-Z",
                path: "/",
            },
        ],
    },
    {
        id: 20,
        label: "Styles",
        icon: <IoIosColorPalette/>,
        path: "/",
        children: [
            {
                id: 21,
                label: "Color",
                path: "/",
            },
            {
                id: 22,
                label: "Elevation",
                path: "/",
            },
            {
                id: 23,
                label: "Icons",
                path: "/",
            },
            {
                id: 24,
                label: "Motion",
                path: "/",
            },
            {
                id: 25,
                label: "Shape",
                path: "/",
            },
            {
                id: 26,
                label: "Typography",
                path: "/",
            }
        ],
    },
    {
        id: 27,
        label: "Components",
        icon: <FiPlusCircle/>,
        path: "/",
        children: [
            {
                id: 28,
                heroTitle: "Components overview",
                path: "/",
            },
            {
                id: 29,
                label: "App bars",
                path: "/",
            }
        ]
    },
    {
        id: 30,
        label: "Blog",
        icon: <PiCalendarStarBold/>,
        path: "/",
    },
    {
        id: 31,
        label: "Theme",
        theme: "theme",
        iconLight: <MdOutlineLightMode/>,
        iconDark: <MdOutlineDarkMode/>
    }
];

export default menu;

