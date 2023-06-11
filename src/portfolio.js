/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation2 from "./assets/lottie/splashAnimation2.json";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation2,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Daron",
  title: "Hi all, I'm Daron Liu.",
  subTitle: emoji(
    `A passionate Developer 🚀 Seeking Entry Level [Fullstack/Software Developer | DevOps/Infrastructure/Cloud Engineer] fulltime / intern position in the United States 🇺🇸.`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1JJWyxuMamfCfIqf80R08dW6LV6Gdw3Xz/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HackTheW2d",
  linkedin: "https://www.linkedin.com/in/jiwei-liu-4b20a2231/",
  gmail: "ljwdre@umich.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER, DEVOPS ENGINEER, INFRASTRUCTURE ENGINEER, AND MORE!",
  skills: [
    emoji(
      "⚡ Forged dynamic web and mobile interfaces, reshaping the user experience."
    ),
    emoji("⚡ Infusing passion into Infrastructure as Code for next-level solutions."),
    emoji("⚡ Mastering Docker and Kubernetes for secure, scalable deployments."),
    emoji(
      "⚡ Breathing life into Infrastructure as Code, architecting tomorrow's landscapes."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++/C",
      fontAwesomeClassname: "fa-solid fa-c"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "git/gitlab/github",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Express",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "mongodb/mysql/postgresql/others",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "google-cloud-platform",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fa-solid fa-file-code"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Michigan, Ann Arbor",
      logo: require("./assets/images/U-M.png"),
      subHeader: "B.S. Computer Science",
      duration: "Jan 2022 - May 2024",
      desc: "Courses: Cybersecurity, UI Development, Machine Learning, Programming Paradigms, Human-Centered SW, Web Systems, Database Management, Data Structure and Algorithms, Computer Organization",
      
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "ITS Intern At Web Mobile Dev team",
      company: "Info and Tech Services at Umich",
      companylogo: require("./assets/images/ITS.png"),
      date: "May 2023 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Built a website for managing university device notifications, using VueJS with TypeScript and Django.",
        "Integrated various search features for efficient data access and device management.",
        "Created a Sender page for managing sender profiles, enhancing system control.",
        "Solved priority issues between Django and Vue routers in template use, improving site functionality."
      ]
    },
    {
      role: "Research Assistant",
      company: "University of Michigan",
      companylogo: require("./assets/images/U-M_seal.png"),
      date: "Jan 2023 – May 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Designed and implemented a Github Actions CI/CD pipeline, automating code deployment to a Siteground server via FTP and enabling streamlined testing and review for the development team.",
        "Developed an accessible WordPress website for the Youth Violence Prevention Center (YVPC), incorporating custom elements like vertical bars and topic blocks to enhance user experience."
      ]
    },
    {
      role: "DevOps Intern",
      company: "Airwallex",
      companylogo: require("./assets/images/airwallex_logo3.avif"),
      date: "June 2021 – September 2021",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Implemented and deployed Kubernetes clusters of Gitlab using Helm charts integrated with Terraform",
        "Set up a testing and development Gitlab instance under the company domain, accessible only to VPN-connected staff via white-listed IP addresses on GCP using Kubernetes clusters and Google Compute Engine.",
        "Acquired proficiency in Gitlab's CI/CD work flow by writing.gitlab-ci.yml files and observing the impact of scripts at each stage of the build, test, production, and development process.",
        "Deployed the kube-prometheus-stack using Helm charts and customized Prometheus operators to collect metrics data from Gitlab for comprehensive website monitoring."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects(Partial)",
  subtitle: "FOR PRIVATE REPOS, PLEASE CONTACT ME.",
  projects: [
    {
      image: require("./assets/images/notesapp.png"),
      projectName: "Papyrus Oracle",
      projectDesc: "Notes app supporting MarkDown with Advanced Search, Filtering, Autosave, and Sorting features.",
    },
    {
      image: require("./assets/images/Inverto.jpeg"),
      projectName: "InvertoSearch",
      projectDesc: "MapReduce-based Search Engine",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 734-358-8242",
  email_address: "ljwdre@umich.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
