// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const posts = [
  {
    _id: "7169ce76-decd-416e-a9cc-3f847d81969b",
    content:
      "People are like stained glass windows: They sparkle and shine when the sun’s out, but when the darkness sets in, their true beauty is revealed only if there is light within.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "f275fb3d-24be-47e9-b6f2-bcbe3e80cd9c",
        username: "winnie_the_pooh",
        text: "True that!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "madhu_raghani",
    createdAt: "2023-01-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "44b77fa1-fb07-4be4-9a8a-3c8647e54d91",
    content: "Happiness is a how, not a what; a talent, not an object.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "minnie_mouse",
    createdAt: "2023-05-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "f5e84d45-82b4-4e0c-ba86-cb36c4c495a3",
    content: "The best thing one can do when it’s raining is to let it rain.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6b033b26-24bd-4abe-a50a-aaeac19fb4f4",
        username: "mickey_mouse",
        text: "Acceptance!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "winnie_the_pooh",
    createdAt: "2023-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "bcc6dd46-9111-4ba1-9cd3-01e353ceb844",
    content:
      "You are never too old to set another goal or to dream a new dream.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarsh_balika",
    createdAt: "2023-03-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "fe421358-0448-42f2-9586-e2b469834011",
    content:
      "As long as the world is turning and spinning, we’re gonna be dizzy and we’re gonna make mistakes.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "62cbf282-31c2-44c6-9688-bf0dda9ee887",
        username: "minnie_mouse",
        text: "Everyone makes mistakes.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "e08312f6-741f-4ffd-a252-2ee558dcdc3c",
        username: "winnie_the_pooh",
        text: "Mistakes are a part of road to success.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "adarsh_balika",
    createdAt: "2023-03-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "33b7e440-7826-4d0a-bc97-76dc3c644afa",
    content:
      "Life has got all those twists and turns. You’ve got to hold on tight and off you go.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarsh_balika",
    createdAt: "2023-04-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "2f74e3a0-1686-4001-9965-f23e083a450a",
    content: "When you have a dream, you’ve got to grab it and never let go.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarsh_balika",
    createdAt: "2023-05-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "8096603c-fff0-4dc6-91e4-75388703b2fa",
    content:
      "No matter what people tell you, words and ideas can change the world.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarsh_balika",
    createdAt: "2023-03-06T12:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "e880391e-9f13-4be6-a714-68819f8308d4",
    content:
      "When things are going extremely well, realize it’s not as good as you think. You are not invincible, and if you acknowledge that luck brought you success then you have to believe in luck’s cousin, risk, which can turn your story around just as quickly.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "3f9deb67-4597-4e47-bb70-32d5ca2025fe",
        username: "mickey_mouse",
        text: "Luck and risk are siblings. They are both the reality that every outcome in life is guided by forces other than individual effort.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "madhu_raghani",
    createdAt: "2023-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "8ccaee67-4d7a-41f6-bfe1-2abeb1853083",
    content: "We have fewer friends than we imagine, but more than we know.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "5e5d38ab-5c21-4fa9-8438-6f691d8e4d24",
        username: "winnie_the_pooh",
        text: "Yes!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "mickey_mouse",
    createdAt: "2023-04-12T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "b985de1a-c1fe-45a8-9d79-401166673076",
    content: "Believe in yourself! Rest all will fall in place.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "b00c26e6-dc03-4291-bdb2-321510cbcd76",
        username: "madhu_raghani",
        text: "So True!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "minnie_mouse",
    createdAt: "2023-05-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "b28d92ba-4f8e-4a23-8f3b-c139d07e8e68",
    content:
      "You can get everything in life you want if you will just help enough other people get what they want.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "madhu_raghani",
    createdAt: "2023-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "db22eac5-3262-4a58-9ae1-3a4c1a497ab4",
    content:
      "If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "mickey_mouse",
    createdAt: "2023-01-12T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "82817780-6378-485b-9401-acf0b2323034",
    content: "More is lost by indecision than wrong decision.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "mickey_mouse",
    createdAt: "2023-01-26T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "71caa56d-8861-459e-8380-8fc0e2e4bdb8",
    content:
      "The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone else’s highlight reel.",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "minnie_mouse",
    createdAt: "2023-03-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "c0e50cdd-a17a-4040-a9d6-c6ced8f50f51",
    content: "If you don’t risk anything, you risk even more.",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "minnie_mouse",
    createdAt: "2023-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "ab51ab82-3114-4481-8962-86014da38563",
    content:
      "The world breaks everyone and afterward many are stronger at the broken places.",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "madhu_raghani",
    createdAt: "2023-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "78a51765-e87e-4a2d-b2d4-a8a4079e7c34",
    content:
      "I learned a long time ago that there is something worse than missing the goal, and that’s not pulling the trigger.",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "minnie_mouse",
    createdAt: "2023-01-14T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "f7808ebf-43bf-459b-a325-161e685cd35d",
    content:
      "Success is stumbling from failure to failure with no loss of enthusiasm",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "winnie_the_pooh",
    createdAt: "2023-05-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "dd9a68d2-929a-4ea0-a5b0-d49add0fa253",
    content:
      "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "mickey_mouse",
    createdAt: "2023-02-14T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "ac4a9154-e1fc-4b91-bd94-947f527c3889",
    content:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "madhu_raghani",
    createdAt: "2023-01-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "609cf9e3-7670-4ede-9cad-11296e0c678d",
    content:
      "“Do not wait for the perfect time and place to enter, for you are already onstage.",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "minnie_mouse",
    createdAt: "2023-05-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "4cff9e98-a5fd-4295-ae03-419c378fd134",
    content:
      "Planning is important, but the most important part of every plan is to plan on the plan not going according to plan.",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "winnie_the_pooh",
    createdAt: "2023-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "0b671cf8-6267-4797-8dce-a4fe3c06cfda",
    content: "Everything has a price, but not all prices appear on labels.",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "mickey_mouse",
    createdAt: "2023-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
