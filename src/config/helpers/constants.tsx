
import { statics } from "../images"; 

// lista de objetos con los estudios formales
export interface Study {
    title: string;
    institution: string;
    semester: string;
    description: string;
    type: string;
    image: string;
    url?: string;
}

export interface Tech {
    name: string;
    image: string;
    level: string;
}


export const formalStudies: Array<Study> = [
    {
        title: "Ingeniería de desarrollo de Software",
        institution: "Politécnico Grancolombiano",
        semester: "6to Semestre",
        description: "2026",
        type: "Formal",
        image: statics.logopoli,
    },
    {
        title: "Diplomado en desarrollo web",
        institution: "Universidad Industrial de Santander - UIS",
        semester: "Graduado",
        description: "2023",
        type: "Formal",
        image: statics.uislogo,
    },
    {
        title: "Microsoft Azure Administrator",
        institution: "Microsoft",
        semester: "Certificado",
        description: "",
        type: "Microsoft",
        image: statics.az104,
        url: "https://learn.microsoft.com/api/credentials/share/es-es/89344633/42ABE94689BFCAC9?sharingId=FFEA776B4BCDB204"
    },
    {
        title: "Microsoft Azure Developer",
        institution: "Microsoft",
        semester: "Certificado",
        description: "",
        type: "Microsoft",
        image: statics.az204,
        url: "https://learn.microsoft.com/api/credentials/share/es-es/89344633/47A773528089A70?sharingId=FFEA776B4BCDB204"
    },
    // {
    //     title: "Microsoft Azure Solutions Architect",
    //     institution: "Microsoft",
    //     semester: "Certificado",
    //     description: "",
    //     type: "Microsoft",
    //     image: statics.az305,
    //     url: "https://learn.microsoft.com/api/credentials/share/es-es/89344633/79FC32567C84A85C?sharingId=FFEA776B4BCDB204"
    // },
    {
        title: "Microsoft Azure Data Engineer",
        institution: "Microsoft",
        semester: "Certificado",
        description: "",
        type: "Microsoft",
        image: statics.dp203,
        url: "https://learn.microsoft.com/api/credentials/share/es-es/89344633/6EFCD6CE60406C11?sharingId=FFEA776B4BCDB204"
    },
    {
        title: "Redes Informáticas de Internet",
        institution: "Platzi",
        semester: "Certificado",
        description: "",
        type: "Complementarios",
        image: statics.platzi,
    },
    {
        title: "Algoritmos y Diagramas de Flujo",
        institution: "Platzi",
        semester: "Certificado",
        description: "",
        type: "Complementarios",
        image: statics.platzi,
    },
    {
        title: "Manejo de Datos, Estructuras y Funciones",
        institution: "Platzi",
        semester: "Certificado",
        description: "",
        type: "Complementarios",
        image: statics.platzi,
    },
    {
        title: "Curso de FastAPI para la Web Moderna",
        institution: "Platzi",
        semester: "Certificado",
        description: "",
        type: "Complementarios",
        image: statics.platzi,
    },
    {
        title: "Configuración de entornos de desarrollo en MacOS, Windows y Linux",
        institution: "Platzi",
        semester: "Certificado",
        description: "",
        type: "Complementarios",
        image: statics.platzi,
    },
    {
        title: "Curso de Diseño de Interfaces UX/UI",
        institution: "Platzi",
        semester: "Certificado",
        description: "",
        type: "Complementarios",
        image: statics.platzi,
    },
    {
        title: "Angular de 0 a Experto",
        institution: "Devtalles",
        semester: "Certificado",
        description: "",
        type: "Complementarios",
        image: statics.angularicon,
    },
    {
        title: "Flutter de 0 a Experto",
        institution: "Udemy",
        semester: "Certificado",
        description: "",
        type: "Complementarios",
        image: statics.Flutter,
    }
];


export const tecnologias: Array<Tech> = [
    {
        name: "Django",
        image: statics.Django,
        level: "Intermedio"
    },
    {
        name: "FastAPI",
        image: statics.FastAPI,
        level: "Intermedio"
    }
]


export const sections = [
    {
      "title": "BASES DE DATOS",
      "technologies": [
        {
            text: "MongoDB",
            path: statics.MongoDB
        }, {
            text: "PostgreSQL",
            path: statics.PostgreSQL
        }, {
            text: "Firebase",
            path: statics.Firebase
        }]
    },
    {
        "title": "OTRAS HERRAMIENTAS",
        "technologies": [
            {
                text: "Azure", 
                path: statics.Azure,
            },
            {
                text: "Selenium",
                path: statics.WebScrapping
            },
            {
                text: "PowerAutomate", 
                path: statics.Automate
            },
            {
                text: "Excel",
                path: statics.Excel
            },
            {
                text: "Git",
                path: statics.Git
            },
            {
                text: "Play Store", 
                path: statics.PlayStore
            },
            {
                text: "TailWind",
                path: statics.Tailwind
            }
        ]
    },
    {
        "title": "FRONTEND",
        "technologies": [
            {
                text: "Angular",
                path: statics.angularicon
            }, 
            {
                text: "React",
                path: statics.React
            },
            {
                text: "Flutter",
                path: statics.Flutter
            }
        ]
    },
    {
      "title": "BACKEND",
      "technologies": [
        {
            text: "Django",
            path: statics.Django
        },
        {
            text: "FastAPI",
            path: statics.FastAPI
        }
    ]
    },
    {
      "title": "LENGUAJES",
      "technologies": [
        {
            text: "Python",
            path: statics.Python
        },
        {
            text: "JavaScript",
            path: statics.JS
        },
        {
            text: "Dart",
            path: statics.Dart
        },
        {
            text: "TypeScript",
            path: statics.Typescript
        },
        {
            text: "C#",
            path: statics.CSharp
        }
      ]
    },
    {
      "title": "OTRAS TECNOLOGÍAS CONOCIDAS",
      "technologies": [
        {
            text: "PowerBI",
            path: statics.PowerBI
        },
        {
            text: "Java",
            path: statics.Java
        },
        {
            text: "Numpy",
            path: statics.Numpy
        },
        {
            text: "Pandas",
            path: statics.Pandas
        },
        {
            text: "Open AI",
            path: statics.OpenAI
        }
      ]
    }
  ]