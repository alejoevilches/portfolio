import { IProjects, TAGS_ENUM } from "@/types/projectTypes";

export const PROJECTS: IProjects[] = [
    {
        name:'1mentor',
        description: '1Mentor es una plataforma de inteligencia artificial que permite a los estudiantes y a la educación superior entender cómo está evolucionando el mercado laboral y cómo prepararse para el trabajo del futuro.',
        image: 'img/1mentor.png',
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
        name:'Kriptos',
        description: 'Kriptos es una startup de ciberseguridad que clasifica automáticamente documentos confidenciales para grandes empresas, con el objetivo de evitar la fuga de datos.',
        image: 'img/kriptos.png',
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
        name:'Balance',
        description:'Balance es una plataforma dedicada al cuidado de la salud mental. Permite realizar un tracking del estado de animo del usuario, lo que usualmente se comoce como journaling y poder analizar los cambios de humor de los usuarios.',
        image: 'img/balance.webp',
        tags:[
            TAGS_ENUM.TYPESCRIPT,
            TAGS_ENUM.VITE,
            TAGS_ENUM.TAILWIND,
            TAGS_ENUM.REACT
        ],
        link: 'https://balancetheapp.vercel.app/'
    }
]