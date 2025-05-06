import { useTranslation } from "react-i18next";
import {
  game,
  backend,
  uxui,
  web,
  game_dev,
  game_design,
  web_dev,
  backend_dev,
  javascript,
  unity,
  html,
  css,
  git,
  figma,
  office,
  mindx,
  carrent,
  jobit,
  tripguide,
  facebook,
  zalo,
  telegram,
  gmail,
  linkedin,
  facebook_link,
  zalo_link,
  telegram_link,
  gmail_link,
  linkedin_link,
  java,
  photoshop,
  premiere_pro,
  github,
  github_link,
  mobile_dev,
} from "../assets";

export const useConstants = () => {

  const { t } = useTranslation();

  const navLinks = [
    {
      id: "HOME",
      title: t("navbar.home"),
    },
    {
      id: "ABOUT",
      title: t("navbar.about"),
    },
    {
      id: "EXPERIENCE",
      title: t("navbar.experience"),
    },
    {
      id: "PROJECT",
      title: t("navbar.projects"),
    },
    {
      id: "CONTACT",
      title: t("navbar.contact"),
    },
  ];

  const languages = [
    {
      id: "en",
      title: "ENG",
    },
    {
      id: "vi",
      title: "VIE",
    }
  ]

  const media = [
    {
      id: "facebook",
      title: "Facebook",
      icon: facebook,
      icon_hover: facebook_link,
      url: "https://www.facebook.com/profile.php?id=61561928965148",
    },
    {
      id: "zalo",
      title: "Zalo",
      icon: zalo,
      icon_hover: zalo_link,
      url: "https://zalo.me/0903614342",
    },
    {
      id: "telegram",
      title: "Telegram",
      icon: telegram,
      icon_hover: telegram_link,
      url: "https://t.me/maigiaminh",
    },
    {
      id: "gmail",
      title: "Gmail",
      icon: gmail,
      icon_hover: gmail_link,
      url: "mailto:minh.mgia@gmail.com"
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      icon: linkedin,
      icon_hover: linkedin_link,
      url: "https://www.linkedin.com/in/mgminh"
    },
    {
      id: "github",
      title: "GitHub",
      icon: github,
      icon_hover: github_link,
      url: "https://github.com/maigiaminh"
    }
    
  ]

  const services = [
    {
      title: t("services.game_dev"),
      icon: game_dev,
    },
    {
      title: t("services.game_design"),
      icon: game_design,
    },
    {
      title: t("services.web_dev"),
      icon: web_dev,
    },
    {
      title: t("services.mobile_dev"),
      icon: mobile_dev,
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "React JS",
    //   icon: reactjs,
    // },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Office",
      icon: office,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Photoshop",
      icon: photoshop,
    },
    {
      name: "Premiere",
      icon: premiere_pro,
    },
  ];

  const experiences = [
    {
      title: t("experiences.ta_title"),
      company_name: "MindX Technology School",
      icon: mindx,
      iconBg: "#fff",
      date: t("experiences.ta_date"),
      points: [
        t("experiences.ta_point1"),
        t("experiences.ta_point2"),
      ],
    },
    {
      title: t("experiences.lecturer_title"),
      company_name: "MindX Technology School",
      icon: mindx,
      iconBg: "#fff",
      date: t("experiences.lecturer_date"),
      points: [
        t("experiences.lecturer_point1"),
        t("experiences.lecturer_point2"),
        t("experiences.lecturer_point3"),
      ],
    },
  ];

  const projects = [
    {
      name: "RPG 3D Multiplayer Game",
      participants: t("projects.RPG 3D Multiplayer Game.participants"),
      shortDescription: t("projects.RPG 3D Multiplayer Game.shortDescription"),
      description: t("projects.RPG 3D Multiplayer Game.description"),
      technologies: t("projects.RPG 3D Multiplayer Game.technologies", { returnObjects: true }),
      features: t("projects.RPG 3D Multiplayer Game.features", { returnObjects: true }),
      images: [
          "/images/rpg3d/rpg3d-02.png",
          "/images/rpg3d/rpg3d-03.png",
          "/images/rpg3d/rpg3d-04.png",
          "/images/rpg3d/rpg3d-06.png",
          "/images/rpg3d/rpg3d-07.png",
          "/images/rpg3d/rpg3d-08.jpg",
          "/images/rpg3d/rpg3d-09.png",
      ],
      thumbnail: "/images/rpg3d/rpg3d-01.png",
      video: [
          {
              "src": "https://www.youtube.com/embed/bqME5xO41Ss?si=r5LmF-_iltV-QktG",
              "type": "video",
              "thumbnail": "/images/rpg3d/rpg3d-demo-thumbnail.png"
          }
      ],
      source: "https://github.com/maigiaminh/RPG3DMultiplayer"
    },
    {
      name: "3D Horror Game",
      participants: t("projects.3D Horror Game.participants"),
      shortDescription: t("projects.3D Horror Game.shortDescription"),
      description: t("projects.3D Horror Game.description"),
      technologies: t("projects.3D Horror Game.technologies", { returnObjects: true }),
      features: t("projects.3D Horror Game.features", { returnObjects: true }),
      images: [
        "/images/night-terrors/night-terrors-1.png",
        "/images/night-terrors/night-terrors-2.png",
        "/images/night-terrors/night-terrors-3.png",
        "/images/night-terrors/night-terrors-4.png",
        "/images/night-terrors/night-terrors-5.png",
        "/images/night-terrors/night-terrors-6.png",
        "/images/night-terrors/night-terrors-7.png",
      ],      
      video: [
          {
              "src": "https://www.youtube.com/embed/i59ZUhLkTQ8?si=HJmO3fJRPn9QjUTA",
              "type": "video",
              "thumbnail": "/images/night-terrors/night-terrors-demo-thumbnail.png"
          }
      ],
      source: "https://github.com/maigiaminh/Night-Terrors",
      thumbnail: "/images/night-terrors/night-terrors-thumbnail.png",
    },
    {
      name: "Co Tuong Game",
      participants: t("projects.Co Tuong Game.participants"),
      shortDescription: t("projects.Co Tuong Game.shortDescription"),
      description: t("projects.Co Tuong Game.description"),
      technologies: t("projects.Co Tuong Game.technologies", { returnObjects: true }),
      features: t("projects.Co Tuong Game.features", { returnObjects: true }),
      images: [
        "/images/cotuong/cotuong-01.png",
        "/images/cotuong/cotuong-02.png",
        "/images/cotuong/cotuong-03.png",
        "/images/cotuong/cotuong-04.png",
      ],
      thumbnail: "/images/cotuong/cotuong-thumbnail.png",
      video: [
        {
          src: "/videos/cotuong/cotuong.mp4",
          thumbnail: "/images/cotuong/cotuong-demo-thumbnail.png"
        }
      ],
      source: "https://github.com/maigiaminh/CoTuong",
    },
    {
      name: "Classic Pikachu",
      participants: t("projects.Classic Pikachu.participants"),
      shortDescription: t("projects.Classic Pikachu.shortDescription"),
      description: t("projects.Classic Pikachu.description"),
      technologies: t("projects.Classic Pikachu.technologies", { returnObjects: true }),
      features: t("projects.Classic Pikachu.features", { returnObjects: true }),
      images: [
        "/images/pikachu/pikachu-01.png",
        "/images/pikachu/pikachu-02.png",
        "/images/pikachu/pikachu-03.png",
        "/images/pikachu/pikachu-04.png",
        "/images/pikachu/pikachu-05.png",
      ],
      thumbnail: "/images/pikachu/pikachu-thumbnail.png",
      video: [
        {
          src: "/videos/pikachu/pikachu-gameplay.mp4",
          thumbnail: "/images/pikachu/pikachu-gameplay-thumbnail.png"
        }
      ],
      source: "https://github.com/maigiaminh/ClassicPikachu",
    },

    {
      name: "Pi Store Management",
      participants: t("projects.Pi Store Management.participants"),
      shortDescription: t("projects.Pi Store Management.shortDescription"),
      description: t("projects.Pi Store Management.description"),
      technologies: t("projects.Pi Store Management.technologies", { returnObjects: true }),
      features: t("projects.Pi Store Management.features", { returnObjects: true }),
      images: [
        "/images/PiStoreManagementSystem/PiStore-01.png",
        "/images/PiStoreManagementSystem/PiStore-02.png",
        "/images/PiStoreManagementSystem/PiStore-03.png",
        "/images/PiStoreManagementSystem/PiStore-04.png",
        "/images/PiStoreManagementSystem/PiStore-05.png",
        "/images/PiStoreManagementSystem/PiStore-06.png",
        "/images/PiStoreManagementSystem/PiStore-07.png",
      ],
      thumbnail: "/images/PiStoreManagementSystem/PiStore-thumbnail.png",
      video: [
        {
          src: "/videos/PiStoreManagementSystem/PiStore-demo.mp4",
          thumbnail: "/images/PiStoreManagementSystem/PiStore-demo-thumbnail.png"
        }
      ],
      source: "https://github.com/maigiaminh/Pi-Store-Management-System",
    },
    {
      name: "E-Commerce Website",
      participants: t("projects.E-Commerce Website.participants"),
      shortDescription: t("projects.E-Commerce Website.shortDescription"),
      description: t("projects.E-Commerce Website.description"),
      technologies: t("projects.E-Commerce Website.technologies", { returnObjects: true }),
      features: t("projects.E-Commerce Website.features", { returnObjects: true }),
      images: [
        "/images/E-Commerce Website/e-commerce-01.png",
        "/images/E-Commerce Website/e-commerce-02.png",
        "/images/E-Commerce Website/e-commerce-03.png",
        "/images/E-Commerce Website/e-commerce-04.png",
        "/images/E-Commerce Website/e-commerce-05.png",
        "/images/E-Commerce Website/e-commerce-06.png",
        "/images/E-Commerce Website/e-commerce-07.png",
      ],
      thumbnail: "/images/E-Commerce Website/e-commerce-thumbnail.png",
      video: [
        {
          src: "/videos/E-Commerce Website/e-commerce-demo.mp4",
          thumbnail: "/images/E-Commerce Website/e-commerce-demo-thumbnail.png"
        }
      ],
      source: "https://github.com/maigiaminh/E-Commerce-Web",
    },
    {
      name: "Flashcard App",
      participants: t("projects.Flashcard App.participants"),
      shortDescription: t("projects.Flashcard App.shortDescription"),
      description: t("projects.Flashcard App.shortDescription"),
      technologies: t("projects.Flashcard App.technologies", { returnObjects: true }),
      features: t("projects.Flashcard App.features", { returnObjects: true }),
      images: [
        "/images/flashcard/flashcard-01.png",
        "/images/flashcard/flashcard-02.png",
        "/images/flashcard/flashcard-03.png",
        "/images/flashcard/flashcard-04.png",
      ],
      thumbnail: "/images/flashcard/flashcard-thumbnail.png",
      video: [
        {
          src: "/videos/flashcard/flashcard-demo.mp4",
          thumbnail: "/images/flashcard/flashcard-demo-thumbnail.png"
        }
      ],
      source: "https://github.com/maigiaminh/Flashcard-App",
    }
  ];

  return { navLinks, services, languages, media, technologies, experiences, projects };
};