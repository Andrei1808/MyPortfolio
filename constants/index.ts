import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxHome,
  RxPerson,
  RxDashboard,
} from "react-icons/rx";

export const Socials = [
  {
    name: "Discord",
    src: "/assets/discord.svg",
    link:"https://discord.com/users/832866113766424607"
  },
  {
    name: "Linkedin",
    src: "/assets/linkedin.svg",
    link:"https://www.linkedin.com/in/andrew-kaliarovich-39a447230/"
  },
  {
    name: "git",
    src: "/assets/git.svg",
    link:"https://github.com/Andrei1808"
  },
];

export const NavLinks = [
  {
    name: "Home",
    icon: RxHome,
    link: "/",
  },
  {
    name: "About me",
    icon: RxPerson,
    link: "/about-me",
  },
  {
    name: "Projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
];

export const ProImages = [
  {
    img: "/assets/projects/StarWars-TicTacToe.png",
    link:"https://andrei1808.github.io/TicTacToe/TicTacToe",
    name:"StarWars-TicTacToe",
  },
  {
    img: "/assets/projects/Santeri Palvelu.png",
    link:"https://665e24d521f2e643dfa078f0--super-cuchufli-0ba79c.netlify.app/home",
    name:"Santeri Palvelu",
  },
  {
    img: "/assets/projects/Wirlx.png",
    link:"https://andrei1808.github.io/WebCatalog/",
    name:"Wirlx",
  },
  {
    img: "/assets/projects/Euphoria.png",
    link:"https://commercial-store-eta.vercel.app",
    name:"Euphoria(Desktop)",
  },
];

export const ProImages2 = [
  {
    src: "/assets/projects/Orange1.jpeg",
  },
  {
    src: "/assets/projects/Orange2.jpeg",
  },
  {
    src: "/assets/projects/Orange3.jpeg",
  },
  {
    src: "/assets/projects/Orange4.jpeg",
  },
];

export const ServiceData = [
  {
    icon: RxCrop,
    title: "Development",
    content: "Website development of any complexity. Unique solutions with a focus on functionality, high performance, and modern design, ensuring a successful online presence.",
    backgroundImage: "/assets/space/SpaceCity9.jpeg",
  },
  {
    icon: RxPencil2,
    title: "Branding",
    content: "Creating branding websites that highlight your business's uniqueness. The solutions seamlessly blend visual style, functionality, and strategic approach to build a memorable online presence.",
    backgroundImage: "/assets/space/SpaceCity1.jpg",
  },
  {
    icon: RxDesktop,
    title: "Design",
    content: "Creating beautiful designs for websites, that blend aesthetic appeal with functionality. Each project is unique, perfectly reflecting your brand and delivering an unforgettable user experience.",
    backgroundImage: "/assets/space/SpaceCity6.jpeg",
  },
];
