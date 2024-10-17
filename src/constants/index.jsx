import streamImage from "../assets/streamer.jpeg";
import chart from "../assets/chart.png";
import audienceEngagementImage from "../assets/audience.jpeg";
import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";
import user4 from "../assets/user4.jpeg";
import user5 from "../assets/user5.jpeg";
import user6 from "../assets/user6.jpeg";

import {
  RiBarChart2Line,
  RiSettings2Line,
  RiTeamLine,
  RiTwitchLine,
  RiYoutubeLine,
  RiCalendarLine,
} from "@remixicon/react";

export const HERO_CONTENT = {
  mainHeading: "Sold Out? \n Not For You",
  subHeading:
    "Our purchasing bots navigate the digital queue with lightning speed, securing your must-have items in milliseconds. Ready to turn 'sold out' into 'purchased'?",
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
      imageSrc: streamImage,
      imageAlt: "Streaming Setup",
    },
    {
      title: "Engage with Your Audience",
      description:
        "Interact with your audience in real-time through custom alerts, chat overlays, and live notifications.",
      imageSrc: audienceEngagementImage,
      imageAlt: "Audience Engagement",
    },
    {
      title: "Track and Analyze Performance",
      description:
        "Monitor your stream’s performance in real-time with detailed analytics and viewer engagement insights.",
      imageSrc: chart,
      imageAlt: "Performance Analytics",
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
      icon: <RiBarChart2Line className="w-8 h-8" />,
      title: "User Friendly",
      description:
        "Track your audience engagement, viewer count, and performance in real-time.",
    },
    {
      id: 2,
      icon: <RiSettings2Line className="w-8 h-8" />,
      title: "Effeciency",
      description:
        "Set up automated alerts, stream schedules, and more with ease.",
    },
    {
      id: 3,
      icon: <RiTeamLine className="w-8 h-8" />,
      title: "CAPTCHA Bypass",
      description:
        "Interact with your audience through custom alerts, chat integrations, and giveaways.",
    },
    {
      id: 4,
      icon: <RiTwitchLine className="w-8 h-8" />,
      title: "Customizable",
      description:
        "Seamlessly connect with Twitch to automate alerts, manage subscribers, and track donations.",
    },
    {
      id: 5,
      icon: <RiYoutubeLine className="w-8 h-8" />,
      title: "Auto Pay",
      description:
        "Go live on YouTube with built-in tools for managing chats, subscribers, and more.",
    },
    {
      id: 6,
      icon: <RiCalendarLine className="w-8 h-8" />,
      title: "Real Time",
      description:
        "Plan and schedule your streams ahead of time, with reminders sent to your audience.",
    },
  ],
};

export const TESTIMONIALS_CONTENT = {
  sectionTitle: "What Our Streamers Say",
  sectionDescription:
    "Hear from some of the top streamers who use Streamerzz to engage with their audience and grow their channels.",
  reviews: [
    {
      name: "Alice Johnson",
      title: "Content Creator",
      review:
        "Streamerzz has revolutionized the way we manage our content subscriptions. The intuitive dashboard and real-time analytics have made it easier to track our progress and optimize our offerings. Highly recommended!",
      image: user1,
    },
    {
      name: "Bob Smith",
      title: "Marketing Specialist",
      review:
        "The team at Streamerzz has been fantastic! Their support is responsive and knowledgeable. The platform itself is versatile and has helped us streamline our subscription management, saving us time and increasing efficiency.",
      image: user2,
    },
    {
      name: "Carla Mendes",
      title: "Product Manager",
      review:
        "Streamerzz's automated billing and comprehensive analytics have been game-changers for our product team. We can now easily track user engagement and make data-driven decisions to enhance our service offerings.",
      image: user3,
    },
    {
      name: "David Lee",
      title: "Customer Success Manager",
      review:
        "Using Streamerzz, we’ve been able to increase our customer retention rates. The platform's user-friendly interface and powerful features have provided our customers with a seamless experience, leading to higher satisfaction.",
      image: user4,
    },
    {
      name: "Ella Fernandez",
      title: "UX Designer",
      review:
        "Streamerzz's flexibility and ease of use have made it a key tool in our design process. We can quickly adjust our subscription plans and monitor the impact on user engagement, allowing for a more responsive approach.",
      image: user5,
    },
    {
      name: "Frank Wilson",
      title: "Data Analyst",
      review:
        "Streamerzz provides us with detailed insights into our subscription metrics. The advanced reporting tools have enabled us to identify trends and make informed decisions to optimize our growth strategy.",
      image: user6,
    },
  ],
};

export const FOOTER_CONTENT = {
  sections: [
    {
      title: "TOOLS & SERVICES",
      links: [
        { text: "Real-time Analytics", url: "#" },
        { text: "Customizable Alerts", url: "#" },
        { text: "Integrated Chat Systems", url: "#" },
        { text: "Instant Notifications", url: "#" },
        { text: "Overlays & Visuals", url: "#" },
        { text: "Mobile Streaming Support", url: "#" },
        { text: "4K Stream Capabilities", url: "#" },
        { text: "Stream Scheduling Tool", url: "#" },
      ],
    },
    {
      title: "SUPPORT & RESOURCES",
      links: [
        { text: "Subscription Plans", url: "#" },
        { text: "Affiliate Program", url: "#" },
        { text: "Frequently Asked Questions", url: "#" },
        { text: "Company Blog", url: "#" },
        { text: "Subscribe to Newsletter", url: "#" },
        { text: "Latest Features", url: "#" },
        { text: "Merchandise Store", url: "#" },
        { text: "Workshops & Events", url: "#" },
      ],
    },
    {
      title: "CONNECT WITH US",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Facebook", url: "#" },
        { text: "TikTok", url: "#" },
        { text: "LinkedIn", url: "#" },
        { text: "YouTube", url: "#" },
        { text: "Twitch", url: "#" },
        { text: "Discord", url: "#" },
      ],
    },
    {
      title: "LEARN & EXPLORE",
      links: [
        { text: "Engage Viewers with Custom Alerts", url: "#" },
        { text: "Top Streaming Strategies for New Streamers", url: "#" },
        { text: "How to Stream in 4K for Maximum Quality", url: "#" },
        { text: "Efficient Stream Scheduling Techniques", url: "#" },
        { text: "Using Analytics to Boost Engagement", url: "#" },
        { text: "Create Stunning Overlays for Streams", url: "#" },
        { text: "Advanced Analytics for Streamers: A Guide", url: "#" },
      ],
    },
  ],
  platformsText:
    "Streaming Platforms | Twitch | YouTube | Discord | Facebook Gaming",
  copyrightText: "© 2024 Streamerzz, Inc. All rights reserved.",
};
