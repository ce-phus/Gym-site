import {
    instagram,
    linkedin,
    dummbell,
    facebook,
    twitter,
    runing,
    flame,
    hearthealth,
    rightarrow
} from "../assets"

export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

export const Categories= [
  {
    id: 1,
    icon: dummbell,
    title: "Strength Training",
    text: "In this program, you are trained to improve your strength through many exercises.",
    subtext: "Join Now",
    icon2: rightarrow

  },
  {
    id: 2,
    icon: runing,
    title: "Cardio Training",
    text: "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
    subtext: "Join Now",
    icon2: rightarrow

  },
  {
    id: 3,
    icon: flame,
    title: "Fat Burning",
    text: "This program is suitable for you who wants to get rid of your fat and lose their weight.",
    subtext: "Join Now",
    icon2: rightarrow

  },
  {
    id: 1,
    icon: hearthealth,
    title: "Health Fitness",
    text: "This programs is designed for those who exercises only for their body fitness not body building.",
    subtext: "Join Now",
    icon2: rightarrow

  }
]

const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export { socialMedia };