import profile from "./profile.jpg";
import {
  faAppStore,
  faGithub,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

export const navigation = {
  name: "Marvin",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
};
export const intro = {
  title: "Hey, I'm Marvin",
  description: "A Computer Engineer creating mobile apps and static websites.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1h_9p5RB_OIX9U653k2Un3xBocMmoh6uO/view?usp=sharing",
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "Who I am",
  description: [
    "Hi I am Marvin. I am an experienced engineer with expertise in software  for various industries such as finance, HR, and e-commerce. I studied Computer Science from the University of Minnesota. Throughout your career, you have contributed to building and improving software applications by developing new features, reducing defects, and optimizing performance.",
    "My experience includes working at companies such as Amount (a fintech startup), U.S. Bank, and Best Buy, where you have been involved in developing, integrating, and maintaining complex software systems. You have a strong background in programming languages such as Java, React, and Python, as well as developing front end solutions and experience working with databases and working with different type of tools to curate my engineering experience.",
    "Aside from your professional work, you enjoy hobbies such as MMA, exploring the outdoors, and trying new foods. I am passionate about creating innovative solutions and continuously improving your skills.",
  ],
};

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Solutions Engineering",
      description:
        "I bridge the gap between sales and product development, working closely with both internal teams and external clients. I collaborate with customers to understand their requirements and design tailored solutions using our company's products or services.",
      icons: null,
    },
    {
      title: "Web Development",
      description:
        "I write and design front-end components and functionality. I leverage React, Next.js, and Vue to create responsive and performant web applications, ensuring a smooth user experience across various devices and browsers.",
      icons: null,
    },
    {
      title: "Data Engineering",
      description:
        "I design and implement efficient data pipelines, perform ETL work, and ensure effective data warehousing and database management.",
      icons: null,
    },
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "StarBook",
      description:
        "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
        },
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/star_book",
        },
      ],
    },
    {
      title: "QuranTalk",
      description:
        "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
        },
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
        },
      ],
    },
    {
      title: "Portfolio",
      description:
        "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/portfolio",
        },
      ],
    },
  ],
};

export const contact = {
  title: "Get in touch",
  description:
    "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at marvinvilaysack@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:marvinvilaysack@gmail.com",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
      link: "https://calendly.com/marvinvilaysack/15min",
      isPrimary: false,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: "Marvin Vilaysack | Developer | Engineer",
  description:
    "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "@hashirshoaeb",
  description: "Computer Engineer | Flutter | Reactjs Developer",
  cards: [
    {
      title: "My website",
      link: "https://marvintv.link",
    },
    {
      title: "My GitHub",
      link: "https://github.com/marvintv/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/marvintv/",
    },
  ],
};
