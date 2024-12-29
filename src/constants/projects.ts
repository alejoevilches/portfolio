import { TAGS } from "./tags";

export interface IProjects{
    title:string,
    description:string,
    tags: TAGS[],
    image?: string,
    link?: string,

}

export const PROJECTS: IProjects[]=[
    {
        title: '1Mentor',
        description: 'Tinkin client. 1Mentor is an artificial intelligence platform that enables students and higher education institutions to understand how the labor market is evolving.',
        tags: [TAGS.APOLLO, TAGS.GRAPHQL, TAGS.JEST, TAGS.MUI, TAGS.NODE, TAGS.POSTGRE, TAGS.REACT, TAGS.TYPESCRIPT],
        link: 'https://www.1mentor.io/',
        image: 'images/1mentor.webp'
    },
    {
        title: 'Talamo',
        description: 'Tinkin client. Talamo is a B2B platform for data analysis and smart financing. Talamo enhances FP&A through artificial intelligence and offers financing products aligned with companies projected cash needs.',
        tags: [TAGS.NEXT, TAGS.TYPESCRIPT, TAGS.JEST, TAGS.MONGO],
        link: 'https://talamoapp.com/',
        image: 'images/talamo.webp'
    },
    {
        title: 'Kriptos',
        description: 'Tinkin client. Kriptos is a cybersecurity startup that automatically classifies confidential documents for large companies, aiming to prevent data leaks.',
        tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.MONGO, TAGS.JEST],
        link: 'https://talamoapp.com/',
        image: 'images/kriptos.webp'
    },
    {
        title: 'Balance',
        description: 'Balance is a platform dedicated to mental health care. It allows users to track their mood, a practice commonly known as journaling.',
        tags: [TAGS.VITE, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.REACT],
        link: 'https://talamoapp.com/',
        image: 'images/balance.webp'
    },
]