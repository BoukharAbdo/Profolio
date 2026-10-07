// import images
import Hero_person from "./assets/images/Hero/person.png";

import tableau from "./assets/images/Skills/Sage-X3-SQLServer-Integration.png";
import reactjs from "./assets/images/Skills/react.png";
import Admin from "./assets/images/Skills/Admin.png";
import python from "./assets/images/Skills/python.png";
import dataAnalytics from "./assets/images/Skills/dataAnalytics.jpg";
import ML from "./assets/images/Skills/ML.png";
import javaee from "./assets/images/Skills/javaee.png";
import django from "./assets/images/Skills/django.jpg";
import sql from "./assets/images/Skills/bd.jpg";
import bi from "./assets/images/Skills/bi.png";


import experience1 from "./assets/images/Experience/MedMilk.jpg";
import experience2 from "./assets/images/Experience/lamalif.jpg";
import experience3 from "./assets/images/Experience/InDataBee.jpg";


import Formation1 from "./assets/images/Formation/FSBM.png";


import services_logo1 from "./assets/images/Services/dataAnalys.png";
import services_logo2 from "./assets/images/Services/ERP.png";
import services_logo3 from "./assets/images/Services/dev.png";

import project1 from "./assets/images/Projects_image/Project1.png";
import project2 from "./assets/images/Projects_image/Project2.png";
import project3 from "./assets/images/Projects_image/Project3.png";
import person_project from "./assets/images/Projects_image/person_project1.png";

import avatar1 from "./assets/images/Testimonials/client2.png";
import avatar2 from "./assets/images/Testimonials/client1.png";
import avatar3 from "./assets/images/Testimonials/client3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall ,MdWorkOutline,MdSchool} from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
    link: "#experience",
    icon: MdWorkOutline,
    },
    {
      link: "#formation",
      icon: MdSchool,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title1: "Data Analyst & ",
    title2: "Ingénieur BI ",
    title3: "ERP Sage X3 ",
    firstName: "ABDELMALAK",
    LastName: "BOUKHAR",
    btnText: "Engagez-moi",
    cvText: "Télécharger mon CV",
    cvFile: "/CV_Abde_lmalak_Boukhar_BI.pdf",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
       text: `Chef de Projet IT orienté data, spécialisé en analyse de données, Business Intelligence et développement web. Compétent en SQL, SQL Server et administration Sage X3 v12, avec expérience en gestion de systèmes, déploiement d’applications et réalisation de projets BI (KPI, cahiers des charges, solutions décisionnelles).`,
},
      {
        count: "6",
        text: "Certifications : SQL, Machine Learning, Java EE, Spring Boot, Angular (OpenClassrooms) et Ark-x Academy",
      },
    ],
  },
  skills: {
  title: "Compétences",
  subtitle: "MES COMPÉTENCES PRINCIPALES",
  skills_content: [
    {
      name: "Power BI",
      para: "Analyse de données et création de tableaux de bord interactifs (KPI métiers)",
      logo: bi,
      projectsList: [
        "Création de dashboards de suivi des ventes (CA, marges, volumes).",
        "Analyse des performances par secteur et tournée.",
        "Suivi des indicateurs métiers (KPI) pour la prise de décision."
      ]
    },

    {
      name: "SQL Server & Sage X3",
      para: "Gestion et exploitation des données ERP Sage X3 v12 (requêtes, reporting, optimisation)",
      logo: tableau,
      projectsList: [
        "Extraction et analyse des données de ventes depuis Sage X3.",
        "Création de requêtes SQL pour le suivi des marges et stocks.",
        "Optimisation des requêtes pour améliorer les performances BI."
      ]
    },

    {
      name: "Excel & Data Analysis",
      para: "Analyse avancée des données et automatisation des rapports",
      logo: dataAnalytics,
      projectsList: [
        "Création de tableaux de bord Excel (TCD, Power Query).",
        "Automatisation des rapports avec formules avancées.",
        "Analyse des données commerciales et financières."
      ]
    },

    {
      name: "Python",
      para: "Nettoyage, transformation et analyse des données",
      logo: python,
      projectsList: [
        "Nettoyage et préparation des données (Pandas).",
        "Analyse exploratoire des données (EDA).",
        "Visualisation avec Matplotlib et Streamlit."
      ]
    },

    {
      name: "Business Intelligence",
      para: "Conception de solutions BI : KPI, cahier des charges, déploiement",
      logo: ML,
      projectsList: [
        "Recueil des besoins métiers.",
        "Définition des KPI et indicateurs de performance.",
        "Déploiement de solutions BI en environnement local."
      ]
    },

    {
      name: "React JS",
      para: "Développement d’interfaces web modernes",
      logo: reactjs,
      projectsList: [
        "Création de ce portfolio.",
        "Développement d’interfaces dynamiques avec React.",
        "Intégration frontend avec API backend."
      ]
    },

    {
      name: "Django",
      para: "Développement backend et déploiement d’applications",
      logo: django,
      projectsList: [
        "Développement d’API backend avec Django.",
        "Gestion des bases de données et authentification.",
        "Déploiement d’applications web."
      ]
    },

    {
      name: "Administration Systèmes",
      para: "Gestion des serveurs, sauvegarde et restauration",
      logo: Admin,
      projectsList: [
        "Installation et configuration des serveurs.",
        "Gestion des sauvegardes et restauration (Veeam).",
        "Déploiement d’applications en environnement local."
      ]
    },

    {
      name: "Bases de données",
      para: "Conception et gestion des bases de données",
      logo: sql,
      projectsList: [
        "SQL Server",
        "MySQL",
        "PostgreSQL",
        "MongoDB (NoSQL)"
      ]
    }
  ],
  icon: MdArrowForward,
},
 services: {
  title: "Services",
  subtitle: "CE QUE JE PROPOSE",
  service_content: [
    {
      title: "Business Intelligence & Data Analysis",
      para: "Conception de tableaux de bord interactifs (Power BI), analyse des données et définition des KPI métiers pour aider à la prise de décision.",
      logo: services_logo1,
    },
    {
      title: "Gestion des données & ERP Sage X3",
      para: "Extraction, traitement et analyse des données depuis ERP Sage X3 v12 (SQL Server), optimisation des requêtes et reporting avancé.",
      logo: services_logo2,
    },
    {
      title: "Développement Web & Déploiement",
      para: "Développement d’applications web (React, Django), déploiement en local et gestion des serveurs (installation, configuration, sauvegarde).",
      logo: services_logo3,
    },
  ],
},
  Projects: {
    title: "Projets",
    subtitle: "Mes créations",
    image: person_project,
    project_content: [
      {
        title: "Site web de salle de sport",
        image: project1,
      },
      {
        title: "Site web de médias sociaux",
        image: project2,
      },
      {
        title: "Application mobile de tri des déchets",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Témoignages",
    subtitle: "AVIS DE MES CLIENTS",
    testimonials_content: [
      {
        review:
          "“Abde lmalak Boukhar est un bon développeur. Il m'a réalisé une application web e-commerce pour la vente et l'achat de pièces et accessoires automobiles”",
        img: avatar1,
        name: "MOUNJID AMINE",
      },
      {
        review:
          "“Abde lmalak Boukhar est un bon développeur. Il a réalisé pour moi une application web e-commerce pour la vente de bougies”",
        img: avatar2,
        name: "ACHRAF RESSEOUANI",
      },
      {
        review:
          "“Abde lmalak Boukhar est un bon développeur. Il a réalisé pour moi une application web e-commerce pour la vente de téléphones.”",
        img: avatar3,
        name: "HASSAN EL OUATILI",
      },
      {
        review:
          "“Abde lmalak Boukhar est un bon développeur. Il a réalisé pour moi une application web pour la gestion des salles de sport”",
        img: avatar4,
        name: "ABDE EL HAMMID SEBBAR",
      },
    ],
  },
  Hireme: {
    title: "Engagez-moi",
    subtitle: "POUR VOS PROJETS",
    image1: Hero_person,
    
    para: `En tant que Chef de Projet IT, spécialisé en analyse de données et Business Intelligence, je me concentre sur la conception, le développement et le déploiement de solutions informatiques et d’applications web. Mon objectif est de valoriser les données à travers des tableaux de bord pertinents (KPI métiers) et d’optimiser les processus métiers, notamment via l’exploitation des données ERP Sage X3, de la conception jusqu’à la mise en production.`,
    btnText: "Embauchez-moi",
  },
  Contact: {
    title: "Contactez-moi",
    subtitle: "ENTREZ EN CONTACT",
    social_media: [
      {
        text: "boukhar.abdelmalak.officiel@gmail.com",
        icon: GrMail,
        link: "mailto:boukhar.abdelmalak.officiel@gmail.com",
      },
      {
        text: "+212 7 79 08 82 42",
        icon: MdCall,
        link: "https://wa.link/4b52vn",
      },
      {
        text: "LinkedIn",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/abde-lmalak-boukhar/",
      },
      {
        text: "GitHub",
        icon: FaGithub,
        link: "https://github.com/BoukharAbdo",
      },
      {
        text: "Instagram",
        icon: BsInstagram,
        link: "https://www.instagram.com/abdo_boukhar23?igsh=cXhudHZuYmo3eWV3",
      },
    ],
  },
  Footer: {
  name: "Abde Lmalak Boukhar",
  role: "Data Analyst • BI Developer • Power BI • SQL Server • Sage X3",
  description:
    "Passionné par la data, la Business Intelligence et les systèmes d'information. Je transforme les données en décisions stratégiques.",
  social: [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/abde-lmalak-boukhar/",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/BoukharAbdo",
    },
    {
      name: "Email",
      icon: GrMail,
      link: "mailto:boukhar.abdelmalak.officiel@gmail.com",
    },
  ],
},
experience: {
  title: "Expérience",
  subtitle: "MON PARCOURS PROFESSIONNEL",
  exp_content: [
    {
      role: "Chef de Projet IT",
      company: "MedMilk - Albane - Groupe Anouar Invest",
      contract: "Temps plein",
      startDate: "2024-11-01",
      endDate: null,
      location: "Marrakech-Safi, Maroc · Sur site",
      logo: experience1,
      desc1:
        "Pilotage de projets IT et de solutions data-driven pour la production laitière, la collecte du lait et la logistique, afin de renforcer la performance opérationnelle et la fiabilité des flux métiers.",
      desc2:
        "Compétences : Power BI, DAX, SQL Server, Sage X3, ETL, Data Warehouse, Angular, Spring Boot.",
      responsibilities: [
        "Piloter et superviser les projets IT en lien avec les besoins métiers, avec un accent sur l’analyse décisionnelle.",
        "Concevoir des tableaux de bord et rapports Power BI pour les équipes métiers (production, commercial, RH, amont laitier) et définir les KPI avec elles.",
        "Concevoir les flux ETL, les environnements Staging et le modèle Data Warehouse.",
        "Administrer et optimiser les bases de données SQL Server (sécurité, intégrité, performance).",
        "Assurer la mise en œuvre, l’évolution et le suivi de l’ERP Sage X3 : cohérence des données et optimisation des workflows.",
        "Collaborer avec les équipes de développement web (Angular, Spring Boot) pour déployer des applications internes."
      ]
    },

    {
      role: "Ingénieur Data Science et Solutions Web Industrielles",
      company: "LAMALIF GROUP",
      contract: "Stage",
      startDate: "2024-03-01",
      endDate: "2024-08-31",
      location: "Marrakech-Safi, Maroc · Sur site",
      logo: experience2,
      desc1:
        "Développement et déploiement d’une application web dédiée à la collecte et au suivi en temps réel des données de production industrielle.",
      desc2:
        "Conception de tableaux de bord avec Tableau et Power BI, intégrant des visualisations Python pour l’analyse des indicateurs de performance. Mise en œuvre de techniques de Machine Learning et Deep Learning pour la classification d’images de pièces conformes et non conformes.",
      responsibilities: [
        "Développer une application web pour la collecte des données de production.",
        "Concevoir des tableaux de bord de suivi et d’analyse des performances.",
        "Comparer les performances entre postes, équipes et opérateurs.",
        "Exploiter Python pour le traitement, l’analyse et la visualisation des données.",
        "Appliquer des modèles de Machine Learning et Deep Learning pour la classification d’images."
      ]
    },

    {
      role: "Ingénieur Full Stack",
      company: "In Data Bee",
      contract: "Stage",
      startDate: "2022-02-01",
      endDate: "2022-07-31",
      location: "Casablanca-Settat, Maroc · Sur site",
      logo: experience3,
      desc1:
        "Conception et réalisation d’une application e-commerce pour la gestion des ventes et des achats de pièces et accessoires automobiles.",
      desc2:
        "Développement de la solution avec Java EE pour le backend, React.js pour le frontend et MySQL pour la base de données, avec une attention particulière portée à la performance et à l’expérience utilisateur.",
      responsibilities: [
        "Concevoir et développer une application web e-commerce complète.",
        "Développer le backend avec Java EE.",
        "Créer l’interface utilisateur avec React.js.",
        "Mettre en place et gérer la base de données MySQL.",
        "Améliorer les performances et l’ergonomie de l’application avec Eclipse et VS Code."
      ]
    }
  ]
},
formation: {
  title: "Formation",
  subtitle: "MON PARCOURS ACADÉMIQUE",

  formation_content: [
    {
      school: "Faculté des Sciences Ben M'sik",
      diploma: "Master 2 (M2) – Data Science & Big Data",
      date: "sept. 2022 – juin 2024",
      desc: "Je suis diplômé en Master Data Science & Big Data. Passionné par l’analyse de données, j’ai acquis une solide expérience en programmation, en visualisation de données et en machine learning pour résoudre des problématiques complexes.",
      skills: "Java, Visualisation des données (Tableau, Python : Pandas, Matplotlib, Seaborn)",
      logo: Formation1,
    },
    {
      school: "Faculté des Sciences Ben M'sik",
      diploma: "Licence – Data Modeling / Data Warehousing & Database Administration",
      date: "2019 – 2022",
      desc: "Formation en informatique avec spécialisation en bases de données, développement web et systèmes d’information. Acquisition de compétences en conception d’applications et résolution de problèmes techniques.",
      skills: "SQL, Data Warehouse, Tableau de bord, Administration des bases de données",
      logo: Formation1,
    },
  ],
},
};
