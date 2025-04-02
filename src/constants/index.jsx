import stussyGif from "../assets/stussy.gif";
import popmartGif from "../assets/popmart.gif";
import smsGif from "../assets/sms.gif";
import user2 from "../assets/user2.jpg";

import {
  RiSettings2Line,
  RiTeamLine,
  RiLockUnlockLine,
  RiDatabaseLine,
  RiMagicLine,
  RiTimeLine,
} from "@remixicon/react";

export const HERO_CONTENT = {
  mainHeading: "Overwhelmed? \n Let Us Automate",
  subHeading:
    "Our automation solutions navigate complex workflows with precision, transforming tedious tasks into seamless processes in seconds. Ready to turn 'overwhelmed' into 'effortless'?",
  callToAction: {
    primary: "Request a Free Consultation",
  },
};


export const HOW_IT_WORKS_CONTENT = {
  sectionTitle: "Past Projects",
  sectionDescription:
    "Discover our track record of custom-built automation bots.",
  steps: [
    {
      title: "SMS Bot",
      description:
        "This bot was designed for our client to automatically be able to book shifts for work within milliseconds of their release",
      imageSrc: smsGif,
      imageAlt: "Popmart",
    },
    {
      title: "Popmart Bot",
      description:
        "We built this bot for our client to automatically purchase Popmart toys when they are in stock and during upcoming releases",
      imageSrc: popmartGif,
      imageAlt: "Popmart",
    },
    {
      title: "Stüssy Bot",
      description:
        "Our custom-built checkout bot successfully secured limited edition Stussy hoodies for our clients, outpacing manual shoppers",
      imageSrc: stussyGif,
      imageAlt: "Stussy",
    }

  ],
};

export const KEY_FEATURES_CONTENT = {
  sectionTitle: "Save Time with These Key Features",
  sectionDescription:
    "Everything you need, all in one place.",
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
        "We optimized our bot's performance through strategic delays, randomized actions, and error handling",
    },
    {
      id: 3,
      icon: <RiLockUnlockLine className="w-8 h-8" />,
      title: "Flag Bypass",
      description:
        "We integrated Proxies and User Agent rotation within our bots to bypass being flagged",
    },
    {
      id: 4,
      icon: <RiDatabaseLine className="w-8 h-8" />,
      title: "Customizable",
      description:
        "We will never ask for your information before hand as you can customize our bots to include your personal information",
    },
    {
      id: 5,
      icon: <RiMagicLine className="w-8 h-8" />,
      title: "Automatic",
      description:
        "Our bots performs all your tasks automatically, even whilst you are asleep",
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
    "Hear from some of our clients who revolutionized their workflow using automation",
  reviews: [
    {
      name: "Ron Alfara",
      title: "Senior Business Analyst at NSW Government Australia",
      review:
        "Working with SwiftItUp has been an outstanding experience. They are passionate and creative software developers who delivered a highly effective custom bot solution based on my requirements. The bot monitors over ten out-of-stock items simultaneously and automatically purchases them when they become available. The excellent documentation and video walkthrough provided make installation and operation user-friendly. Their professionalism and strong work ethic are impressive. They updated me, quickly resolved issues, and offered exceptional ongoing maintenance. I am delighted with the bot's efficiency and reliability, and I highly recommend SwiftItUp for any software development projects.",
      image: user2,
    }
  ],
};

export const FOOTER_CONTENT = {
  sections: [
    {
      title: "CONNECT WITH US",
      links: [
        { text: "Email", url: "mailto:swiftitup1@gmail.com" },
        { text: "Instagram", url: "https://www.instagram.com/swiftitupbot/" },
        { text: "Tiktok", url: "https://www.tiktok.com/@swiftitupbot" },
        { text: "LinkedIn", url: "https://www.linkedin.com/in/talha-hossain-khan-6327b72a5/" }
      ],
    },
  ],
  copyrightText: "© 2025 SwiftItUp, Inc. All rights reserved.",
};
