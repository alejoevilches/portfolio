import { IProjects, TAGS_ENUM } from "@/types/projectTypes";

export const PROJECTS: IProjects[] = [
    {
        id: 1,
        name:'1Mentor',
        description: '1Mentor is an artificial intelligence platform that enables students and higher education institutions to understand how the labor market is evolving.',
        image: 'img/1mentor.jpg',
        tags: [
            TAGS_ENUM.REACT, 
            TAGS_ENUM.NODE, 
            TAGS_ENUM.POSTGRESQL, 
            TAGS_ENUM.GRAPHQL, 
            TAGS_ENUM.APOLLO,
            TAGS_ENUM.TYPESCRIPT,
            TAGS_ENUM.MATERIAL_UI,
            TAGS_ENUM.JEST
        ],
        link: 'https://www.1mentor.io/'
    },
    {
        id: 2,
        name:'Talamo',
        description: "Talamo is a B2B platform for data analysis and smart financing. Talamo enhances FP&A through artificial intelligence and offers financing products aligned with companies' projected cash needs.",
        image: 'img/talamo.jpeg',
        tags: [
            TAGS_ENUM.NEXT,
            TAGS_ENUM.TYPESCRIPT,
            TAGS_ENUM.MONGODB,
            TAGS_ENUM.JEST,
        ],
        link: 'https://www.talamoapp.com/'
    },
    {
        id: 3,
        name:'Kriptos',
        description: 'Kriptos is a cybersecurity startup that automatically classifies confidential documents for large companies, aiming to prevent data leaks.',
        image: 'img/kriptos.jpg',
        tags: [
            TAGS_ENUM.NEXT,
            TAGS_ENUM.TAILWIND,
            TAGS_ENUM.TYPESCRIPT,
            TAGS_ENUM.MONGODB,
            TAGS_ENUM.JEST
        ],
        link: 'https://kriptos.io/',
    },
    {
        id: 4,
        name:'Balance',
        description:'Balance is a platform dedicated to mental health care. It allows users to track their mood, a practice commonly known as journaling.',
        image: 'img/balance.jpg',
        tags:[
            TAGS_ENUM.TYPESCRIPT,
            TAGS_ENUM.VITE,
            TAGS_ENUM.TAILWIND,
            TAGS_ENUM.REACT
        ],
        link: 'https://balancetheapp.vercel.app/'
    }
]