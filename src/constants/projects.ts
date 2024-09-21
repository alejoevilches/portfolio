import { IProjects, TAGS_ENUM } from "@/types/projectTypes";

export const PROJECTS: IProjects[] = [
    {
        id: 1,
        name:'1Mentor',
        description: '1Mentor es una plataforma de inteligencia artificial que permite a los estudiantes y a la educación superior entender cómo está evolucionando el mercado laboral.',
        image: 'img/1mentor.jpg',
        tags: [
            TAGS_ENUM.REACT, 
            TAGS_ENUM.NODE, 
            TAGS_ENUM.POSTGRESQL, 
            TAGS_ENUM.GRAPHQL, 
            TAGS_ENUM.APOLLO_CLIENT,
            TAGS_ENUM.TYPESCRIPT,
            TAGS_ENUM.MATERIAL_UI,
            TAGS_ENUM.JEST
        ],
        link: 'https://www.1mentor.io/'
    },
    {
        id: 2,
        name:'Talamo',
        description: 'Talamo es una plataforma B2B de análisis de datos y financiamiento inteligente. Talamo potencia el FP&A a través de inteligencia artificial, y ofrece productos de financiación alineados a la necesidad de caja proyectada de las compañías.',
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
        description: 'Kriptos es una startup de ciberseguridad que clasifica automáticamente documentos confidenciales para grandes empresas, con el objetivo de evitar la fuga de datos.',
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
        description:'Balance es una plataforma dedicada al cuidado de la salud mental. Permite realizar un tracking del estado de animo del usuario, lo que usualmente se comoce como journaling.',
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