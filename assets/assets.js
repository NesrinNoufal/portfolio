
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import docker from './docker.png';
import graphql from './graphql.png';
import jira4 from './jira4.webp';
import postgres1 from './postgres1.jpg';
import cloth_store from './cloth_store.png';
import syncMeet from './syncMeet.png';
import covid_tracker from './covid_tracker.png';
import profile_img from './profile_img.png';
import chatapp from './chatapp.png';



export const assets = {
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    docker,
    jira4,
    graphql,
    postgres1,
    chatapp,
    cloth_store,
    syncMeet,
    covid_tracker,
    profile_img

};

export const workData = [
    
    {
        title: 'Chat Application',
        description: 'Real-time chat application built with Node.js, Express.js,,React.js and Socket.io',
        bgImage: '/chatapp.png',
        demo:'https://chat-app-5-iiu1.onrender.com/login',
        source:'https://github.com/NesrinNoufal/chat_app'
    },
    {
        title: 'Clothing Store',
        description: 'Ecommerce application for the clothing store',
        bgImage: '/cloth_store.png',
        demo:'https://ecommercelifestore.netlify.app/',
        source:'https://github.com/NesrinNoufal/ecommerceClothing'
    },
    {
        title: 'Sync-meet',
        description: 'Video-conferencing application built with Node.js, Express.js,React.js,webRTC and Socket.io',
        bgImage: '/syncMeet.png',
        demo:"",
        source:"https://github.com/NesrinNoufal/video-conferencing-platform"
    },
    {
        title: 'Covid-tracker',
        description: 'Analysis dashboard for tracking covid cases in India built using React.js',
        bgImage:'/covid_tracker.png',
        demo:"https://covid-tracker-five-pi.vercel.app/",
        source:"https://github.com/NesrinNoufal/covid-tracker"
    },
    {
        title: 'Agri-mart',
        description: 'Marketplace application for agricultural products built using React.js,Node.js',
        bgImage: '/agrimart.png',
        demo:"https://agri-mart-zeta.vercel.app/",
        source:"https://github.com/NesrinNoufal/agriMartFrontend"
    },
]   

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Technologies', description: 'HTML, CSS, JavaScript React Js, Next Js, Node Js, Express Js'},
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    {icon:assets.vscode,tool:'vscode'},
    {icon:assets.mongodb,tool:'mongodb'},
    {icon:assets.git,tool:'git'},
    {icon:assets.docker,tool:'docker'},
    {icon:assets.postgres1,tool:'postgres'},
    {icon:assets.graphql,tool:'graphql'},
    {icon:assets.jira4,tool:'jira'}
];