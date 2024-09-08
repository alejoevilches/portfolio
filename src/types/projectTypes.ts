export interface IProjects{
    id: number
    name:string,
    description:string,
    image:string,
    tags: TAGS_ENUM[],
    link: string,
}

export enum TAGS_ENUM {
    REACT = "React",
    NODE = "Node",
    POSTGRESQL = "PostgreSQL",
    GRAPHQL = "GraphQL",
    APOLLO_CLIENT = "Apollo Client",
    NEXT = "NextJS",
    TAILWIND = "Tailwind",
    TYPESCRIPT = "TypeScript",
    MONGODB = "MongoDB",
    MATERIAL_UI = "Material UI",
    VITE = "Vite",
    NEST = "NestJS",
    JEST = 'Jest',
}