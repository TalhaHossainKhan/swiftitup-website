import stussyGif from "../assets/stussy.gif";
import iphone16Gif from "../assets/iphone16.gif";
import stanleyGif from "../assets/stanley.gif";
import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";

import {
  RiSettings2Line,
  RiTeamLine,
  RiLockUnlockLine,
  RiDatabaseLine,
  RiBankLine,
  RiTimeLine,
} from "@remixicon/react";

export const HERO_CONTENT = {
  mainHeading: "Sold Out? \n Not For You",
  subHeading:
    "Our checkout bots navigate the digital queue with lightning speed, securing your must-have items in seconds. Ready to turn 'sold out' into 'purchased'?",
  callToAction: {
    primary: "Request a Free Consultation",
  },
};


export const HOW_IT_WORKS_CONTENT = {
  sectionTitle: "Past Projects",
  sectionDescription:
    "Discover our track record of custom-built checkout bots that have revolutionized online purchasing for our clients.",
  steps: [
    {
      title: "Stüssy Bot",
      description:
        "Our custom-built checkout bot successfully secured limited edition Stussy hoodies for our clients, outpacing manual shoppers",
      imageSrc: stussyGif,
      imageAlt: "Stussy",
    },
    {
      title: "iPhone 16 Bot",
      description:
        "We created this checkout bot to sucessfully secure iPhone 16s during the recent launch and bypass CAPTCHA.",
      imageSrc: iphone16Gif,
      imageAlt: "iPhone 16",
    },
    {
      title: "Stanely Cup Bot",
      description:
        "We built this bot during the surge in popularity for Stanely cups and successfully secured these cups for our clients",
      imageSrc: stanleyGif,
      imageAlt: "Stanely Cup",
    }
  ],
};

export const KEY_FEATURES_CONTENT = {
  sectionTitle: "Buy Quickly with These Key Features",
  sectionDescription:
    "Everything you need to enhance your buying experience, all in one place.",
  features: [
    {
      id: 1,
      icon: <RiTeamLine className="w-8 h-8" />,
      title: "User Friendly",
      description:
        "Our bots are designed to cater to our less technologically savvy clients.",
    },
    {
      id: 2,
      icon: <RiSettings2Line className="w-8 h-8" />,
      title: "Effeciency",
      description:
        "We optimized our bot's performance through strategic delays, randomized actions, and error handling, leading to a 40% reduction in failed checkout attempts",
    },
    {
      id: 3,
      icon: <RiLockUnlockLine className="w-8 h-8" />,
      title: "CAPTCHA Bypass",
      description:
        "We integrated 2Captcha CAPTCHA solver within our bots to allow our bots to function properly",
    },
    {
      id: 4,
      icon: <RiDatabaseLine className="w-8 h-8" />,
      title: "Customizable",
      description:
        "We will never ask for your information before hand as you can customize our bots to include your personal information for payment purposes",
    },
    {
      id: 5,
      icon: <RiBankLine className="w-8 h-8" />,
      title: "Auto Pay",
      description:
        "Our bots performs all the buying processes within seconds",
    },
    {
      id: 6,
      icon: <RiTimeLine className="w-8 h-8" />,
      title: "Real Time",
      description:
        "Our bots operates in real-time, efficiently acquiring all your listed items as soon as they become available",
    },
  ],
};

export const TESTIMONIALS_CONTENT = {
  sectionTitle: "What Our Clients Say",
  sectionDescription:
    "Hear from some of our clients who used our bots to automate their purchases and secure limited drops",
  reviews: [
    {
      name: "",
      title: "",
      review:
        "",
      image: user1,
    },
    {
      name: "",
      title: "",
      review:
        "",
      image: user2,
    },
    {
      name: "",
      title: "",
      review:
        "",
      image: user3,
    }
  ],
};

export const FOOTER_CONTENT = {
  sections: [
    {
      title: "CONNECT WITH US",
      links: [
        { text: "Email", url: "mailto:talhahossain75@gmail.com" },
        { text: "LinkedIn", url: "https://www.linkedin.com/in/talha-hossain-khan-6327b72a5/" },
        { text: "Discord", url: "https://discordapp.com/users/261124422281330688" },
      ],
    },
  ],
  copyrightText: "© 2024 SwiftItUp, Inc. All rights reserved.",
};
