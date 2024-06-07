import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    bootstrap,
    nodejs,
    mongodb,
    // git,
    figma,
    github1,
    express,
    FastFood,
    bshop,
    b_book,
    // threejs,
} from "../assets";

export const navLinks = [
    {
    id: "about",
    title: "About",
    },
    {
        id: "profile",
        title: "Profile",
    },
    {
    id: "works",
    title: "Works",
    },
    {
    id: "contact",
    title: "Contact",
    },
];

const services = [
    {
    title: "Frontend Developer",
    icon: web,
    },
    {
    title: "React Native Developer",
    icon: mobile,
    },
    {
    title: "Backend Developer",
    icon: backend,
    }
];

const technologies = [
    {
    name: "HTML 5",
    icon: html,
    },
    {
    name: "CSS 3",
    icon: css,
    },
    {
    name: "JavaScript",
    icon: javascript,
    },
    {
    name: "TypeScript",
    icon: typescript,
    },
    {
    name: "React JS",
    icon: reactjs,
    },
    {
    name: "Redux Toolkit",
    icon: redux,
    },
    {
    name: "Tailwind CSS",
    icon: tailwind,
    },
    {
    name: "Bootstrap",
    icon: bootstrap,
    },
    {
    name: "Node JS",
    icon: nodejs,
    },
    {
    name: "Express JS",
    icon: express,
    },
    {
    name: "MongoDB",
    icon: mongodb,
    },
    // {
    // name: "Three JS",
    // icon: threejs,
    // },
    // {
    // name: "git",
    // icon: git,
    // },
    {
    name: "figma",
    icon: figma,
    },
    {
    name: "github",
    icon: github1,
    },
];



const projects = [
    {
    name: "Brandy's Fast Food",
    description:
        "Web-based platform that allows users to login into page, and order food online from various menu items, and track your payment by Stripe and order details after logging in.",
    tags: [
        {
        name: "React",
        color: "blue-text-gradient",
        },
        {
        name: "MongoDB",
        color: "green-text-gradient",
        },
        {
        name: "Tailwind",
        color: "pink-text-gradient",
        },
        {
        name: "Stripe",
        color: "blue-text-gradient",
        },
        {
        name: "NodeJS",
        color: "green-text-gradient",
        },
        {
        name: "ExpressJS",
        color: "pink-text-gradient",
        },
        {
        name: "Firebase",
        color: "blue-text-gradient",
        },
    ],
    image: FastFood,
    source_code_link: "https://github.com/atulmishra1997/Brandy-s_Fast_Food",
    website_link: "https://brandy-s-fast-food-frontend.vercel.app/",
    },
    {
    name: "Brandy's Shop",
    description:
        "Web application that enable users to search for fashion cloths, by simply logging in and getting full details about their order and payment on Razorpay.",
    tags: [
        {
        name: "React",
        color: "blue-text-gradient",
        },
        {
        name: "RazorPay",
        color: "green-text-gradient",
        },
        {
        name: "Tailwind",
        color: "pink-text-gradient",
        },
        {
        name: "NodeJS",
        color: "blue-text-gradient",
        },
        {
        name: "ExpressJS",
        color: "green-text-gradient",
        },
        {
        name: "Firebase",
        color: "pink-text-gradient",
        },
        
    ],
    image: bshop,
    source_code_link: "https://github.com/atulmishra1997/Brandy-s_Shop",
    website_link: "https://brandy-s-shop.vercel.app/",
    },
    {
    name: "Brandy's Books",
    description:
        "A comprehensive Book web-app platform that allows users to search for books, update books, and add books, after logging in with email or google account.",
    tags: [
        {
        name: "React",
        color: "blue-text-gradient",
        },
        {
        name: "Firebase",
        color: "green-text-gradient",
        },
        {
        name: "Tailwind",
        color: "pink-text-gradient",
        },
        {
        name: "NodeJS",
        color: "blue-text-gradient",
        },
        {
        name: "ExpressJS",
        color: "green-text-gradient",
        },
        {
        name: "Rest-Api",
        color: "pink-text-gradient",
        },
        {
        name: "MongoDB",
        color: "blue-text-gradient",
        },
    ],
    image: b_book,
    source_code_link: "https://github.com/atulmishra1997/Brandy-s-Books",
    website_link: "https://mern-book-inventory-6cb09.web.app/",
    },
];

export { services, technologies, projects };