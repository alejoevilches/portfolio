import { TAGS } from "./tags";

interface IProjects{
    title:string,
    description:string,
    tags: TAGS[],
    link: string,

}

export const PROJECTS: IProjects[]=[
    {
        title: '1Mentor',
        description: '1Mentor is an artificial intelligence platform that enables students and higher education institutions to understand how the labor market is evolving.',
        tags: [TAGS.APOLLO, TAGS.GRAPHQL, TAGS.JEST, TAGS.MUI, TAGS.NODE, TAGS.POSTGRE, TAGS.REACT, TAGS.TYPESCRIPT],
        link: 'https://www.1mentor.io/'
    }
]