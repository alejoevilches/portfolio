export interface IProjects{
    id: number
    name:string,
    description:string,
    image:string,
    tags: TAGS_ENUM[],
    link: string,
}

export enum TAGS_ENUM {
    HTML = 'HTML',
    CSS = 'CSS',
    JAVASCRIPT = 'JavaScript',
    REACT = "React",
    NODE = "Node",
    POSTGRESQL = "PostgreSQL",
    GRAPHQL = "GraphQL",
    APOLLO = "Apollo",
    NEXT = "NextJS",
    TAILWIND = "Tailwind",
    TYPESCRIPT = "TypeScript",
    MONGODB = "MongoDB",
    MATERIAL_UI = "Material UI",
    VITE = "Vite",
    NEST = "NestJS",
    JEST = 'Jest',
    STYLEDCOMPONENTS = 'Styled Components',
    EXPRESS = 'Express',
    SQL = 'SQL',
    MYSQL = 'MySQL',
    GIT = 'Git',
    GITHUB = 'GitHub',
    GITLAB = 'GitLab',
    REACTTEST = 'React Testing Library',
}

export const FRONTEND_TAGS: TAGS_ENUM[] = [
    TAGS_ENUM.HTML,
    TAGS_ENUM.CSS,
    TAGS_ENUM.JAVASCRIPT,
    TAGS_ENUM.TYPESCRIPT,
    TAGS_ENUM.TAILWIND,
    TAGS_ENUM.REACT,
    TAGS_ENUM.NEXT,
    TAGS_ENUM.MATERIAL_UI,
    TAGS_ENUM.STYLEDCOMPONENTS
]

export const BACKEND_TAGS: TAGS_ENUM[] = [
    TAGS_ENUM.NODE,
    TAGS_ENUM.NEST,
    TAGS_ENUM.EXPRESS,
    TAGS_ENUM.GRAPHQL,
    TAGS_ENUM.APOLLO
]

export const DATABASES_TAGS: TAGS_ENUM[] = [
    TAGS_ENUM.SQL,
    TAGS_ENUM.MONGODB,
    TAGS_ENUM.POSTGRESQL,
    TAGS_ENUM.MYSQL,
]

export const VERSIONCONTROL_TAGS: TAGS_ENUM[] = [
    TAGS_ENUM.GIT,
    TAGS_ENUM.GITHUB,
    TAGS_ENUM.GITLAB,
]

export const TESTING_TAGS: TAGS_ENUM[] = [
    TAGS_ENUM.JEST,
    TAGS_ENUM.REACTTEST,
]