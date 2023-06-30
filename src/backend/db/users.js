// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: "291153e5-6e98-4731-88ad-02c4b0bc1d4d",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarsh_balika",
    password: "adarshBalika123",
    bio: "Never Give Up!",
    website: "madhuraghani.netlify.app",
    profile_pic:
      "https://res.cloudinary.com/djbnm7p4c/image/upload/v1688140484/avatars/adarsh-balika_dp3nfk.jpg",
    bookmarks: [],
    createdAt: "2023-01-07T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "619e4db9-4991-4630-85c0-901c86e48a4d",
    firstName: "Madhu",
    lastName: "Raghani",
    username: "madhu_raghani",
    password: "Madhu123*",
    bio: "Analyst @Accenture|Learning Web-Development @NeoG' 23",
    website: "madhuraghani.netlify.app",
    profile_pic:
      "https://res.cloudinary.com/djbnm7p4c/image/upload/v1688140484/avatars/madhu-raghani_ldpeax.jpg",
    bookmarks: [],
    createdAt: "2023-01-02T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "e5f2f79e-e9ae-469c-994d-6430a57b4f79",
    firstName: "Winnie",
    lastName: "The Pooh",
    username: "winnie_the_pooh",
    password: "Winnie123*",
    bio: "Cuddly & Loveable Teddy Bear.",
    website: "www.google.com",
    profile_pic:
      "https://res.cloudinary.com/djbnm7p4c/image/upload/v1688140481/avatars/winnie-the-pooh_epnmbf.jpg",
    bookmarks: [],
    createdAt: "2023-05-08T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "751ab3f8-a154-4ccb-92f7-cf0adff1f381",
    firstName: "Mickey",
    lastName: "Mouse",
    username: "mickey_mouse",
    password: "Mickey123*",
    bio: "Meeska, Mooska, Mickey Mouse!",
    website: "www.google.com",
    profile_pic:
      "https://res.cloudinary.com/djbnm7p4c/image/upload/v1688140483/avatars/mickey_h1zrtg.jpg",
    bookmarks: [],
    createdAt: "2023-02-02T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "1f20072a-2ed7-41d6-b4ad-13d128dcc2dc",
    firstName: "Minnie",
    lastName: "Mouse",
    username: "minnie_mouse",
    password: "Minnie123*",
    bio: "All our dreams can come true, if we have the courage to pursue them.",
    website: "www.google.com",
    profile_pic:
      "https://res.cloudinary.com/djbnm7p4c/image/upload/v1688140483/avatars/minnie_dhfbct.jpg",
    bookmarks: [],
    createdAt: "2023-03-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
