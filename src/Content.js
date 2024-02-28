// import images
import Hero_person from "./assets/images/Hero/person.png";

import tableau from "./assets/images/Skills/tableau.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import Qlik from "./assets/images/Skills/Qlik.png";
import ML from "./assets/images/Skills/ML.png";
import javaee from "./assets/images/Skills/javaee.png";
import django from "./assets/images/Skills/django.jpg";
import sql from "./assets/images/Skills/bd.jpg";
import bi from "./assets/images/Skills/bi.png";






import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/ds.png";
import services_logo3 from "./assets/images/Services/dataAnalys.png";

import project1 from "./assets/images/Project1.png";
import project2 from "./assets/images/projects/Project2.png";
import project3 from "./assets/images/projects/Project3.png";
import person_project from "./assets/images/projects/person_project1.png";

import avatar1 from "./assets/images/Testimonials/client2.png";
import avatar2 from "./assets/images/Testimonials/client1.png";
import avatar3 from "./assets/images/Testimonials/client3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
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
    title1: "Web Developer & ",
    title2: "data scientist &  ",
    title3: "data analyst ",
    firstName: "ABDE LMALAK",
    LastName: "BOUKHAR",
    btnText: "Engagez-moi",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "À la recherche d'un stage PFE en data analyst, data scientist ou développement web",
      },
      {
        count: "20+",
        text: "Projets sur lesquels j'ai travaillé dans ma carrière",
      },
    ],
  },
  skills: {
    title: "Compétences",
    subtitle: "MES COMPÉTENCES PRINCIPALES",
    skills_content: [
      {
        name: "Tableau",
        para: "Création de tableaux de bord interactifs",
        logo: tableau,
      },
      
      {
        name: "Power BI",
        para: "Création de tableaux de bord interactifs",
        logo: bi,
      },
      {
        name: "Qlik",
        para: "Création de tableaux de bord interactifs",
        logo: Qlik,
      },
      {
        name: "Python",
        para: "Programmation Python : Nettoyage et structuration des données",
        logo: python,
      },
      {
        name: "Machine learning ",
        para: "Création des modèles de machine learning",
        logo: ML,
      },
      {
        name: "React js & react native",
        para: "Création de l'interface frontend pour les applications web et mobiles",
        logo: reactjs,
      },
      {
        name: "java EE ",
        para: "Création du backend des applications",
        logo: javaee,
      },
      {
        name: "Framework Django",
        para: "Création du backend des applications",
        logo: django,
      }, 
      {
        name: "Node js",
        para: "Création du backend des applications",
        logo: nodejs,
      },
      {
        name: "Sql & Mongo db",
        para: "Stockage des données",
        logo: sql,
      },
      
     
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "CE QUE JE PROPOSE",
    service_content: [
      {
        title: "Developpement Web",
        para: "Conception et création d'applications web et mobiles avec les nouvelles technologies ",
        logo: services_logo1,
      },
      {
        title: "data science",
        para: "Web scraping, nettoyage des données, et création de bases pour le machine learning et le deep learning",
        logo: services_logo2,
      },
      {
        title: "data analyst",
        para: "Création de tableaux de bord interactifs avec Tableau, Power BI, Qlik, des bibliothèques de visualisation Python, D3.js etc ..., ainsi que des outils ETL",
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
    
    para: "Étudiant en deuxième année de master en science des données et big data, je suis à la recherche d'un stage de fin d'études en data ou en développement",
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
        text: "Abde lmalak ",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/abde-lmalak-boukhar-5a741b249/",
      },
      {
        text: "Abde lmalak ",
        icon: FaGithub,
        link: "https://github.com/BoukharAbdo",
      },
      {
        text: "Abde lmalak ",
        icon: BsInstagram,
        link: "https://www.instagram.com/abdo_boukhar23?igsh=cXhudHZuYmo3eWV3",
      },
    ],
  },
  Footer: {
    text: "abde lmalak  © boukhar 2024",
  },
};
