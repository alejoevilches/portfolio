export enum TAGS {
    REACT='React',
    NODE='Node.js',
    POSTGRE='PostgreSQL',
    GRAPHQL='GraphQL',
    APOLLO='Apollo',
    TYPESCRIPT='TypeScript',
    MUI='Material UI',
    JEST='Jest',
    MONGO='MongoDB',
    TAILWIND='Tailwind',
    NEXT='NextJS',
    VITE='Vite',
    STYLEDCOMPONENTS = 'Styled Components',
    EXPRESS = 'Express',
    SQL = 'SQL',
    MYSQL = 'MySQL',
    GIT = 'Git',
    GITHUB = 'GitHub',
    GITLAB = 'GitLab',
    REACTTEST = 'React Testing Library',
    NEST = "NestJS",
    HTML = 'HTML',
    CSS = 'CSS',
    JAVASCRIPT = 'JavaScript',
    FRAMER = 'Framer Motion'
}

export const FRONTEND_TAGS: TAGS[] = [
    TAGS.HTML,
    TAGS.CSS,
    TAGS.JAVASCRIPT,
    TAGS.TYPESCRIPT,
    TAGS.TAILWIND,
    TAGS.REACT,
    TAGS.NEXT,
    TAGS.MUI,
    TAGS.STYLEDCOMPONENTS,
    TAGS.FRAMER
]

export const BACKEND_TAGS: TAGS[] = [
    TAGS.NODE,
    TAGS.NEST,
    TAGS.EXPRESS,
    TAGS.GRAPHQL,
    TAGS.APOLLO
]

export const DATABASES_TAGS: TAGS[] = [
    TAGS.SQL,
    TAGS.MONGO,
    TAGS.POSTGRE,
    TAGS.MYSQL,
]

export const VERSIONCONTROL_TAGS: TAGS[] = [
    TAGS.GIT,
    TAGS.GITHUB,
    TAGS.GITLAB,
]

export const TESTING_TAGS: TAGS[] = [
    TAGS.JEST,
    TAGS.REACTTEST,
]
