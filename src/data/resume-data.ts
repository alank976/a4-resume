import type { ResumeData } from "@/lib/types";
import avatar from "./avatar.jpg";

export const RESUME_DATA: ResumeData = {
  name: "Alan Kan",
  location: "Melbourne, Australia",
  locationLink: "https://www.google.com/maps/place/Melbourne+VIC,+Australia",
  about: "Senior Software Engineer",
  summary: `I'm a software enthusiast who's spent 10 years exploring the ins and outs of the FinTech and Investment banking worlds. My coding journey has been a mix of Java, Kotlin, Go, and Python, resulting in a blend of creative solutions and practical experience.

Sometimes, I've immersed myself in the world of Rust, engaging in diverse toy projects that provide a hands-on exploration to develop a taste of memory-safety.

In the realm of modern microservices architecture, orchestration is imperative. As the go-to person for Kubernetes, I excel in leveraging tools like Terraform to craft structured infrastructure systems that empower the team's sustained success, even in my absence.

While I can certainly handle frontend development with React and more, I feel most at home delving into the depths of backend work and the intricacies of DevOps.

Fuelled by an insatiable thirst for knowledge, I actively explore online articles, engage in dev.to discussions, and participate in virtual conferences. I'm committed to shaping the ever-evolving tech landscape by staying ahead of backend, DevOps, and architectural trends.`,
  avatar,
  // The deploy workflow sets SITE_URL to the GitHub Pages URL, which is the
  // custom domain when one is configured.
  siteUrl: process.env.SITE_URL || "https://alank976.github.io",
  contact: {
    email: "alankan976@gmail.com",
    tel: "+61434220172",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/alank976",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alankan976/",
        icon: "linkedin",
      },
      {
        name: "Wellfound",
        url: "https://wellfound.com/u/alank976",
        icon: "globe",
      },
    ],
  },
  work: [
    {
      company: "Pepperstone",
      link: "https://pepperstone.com/",
      location: "Melbourne, Australia",
      badges: [
        "Go",
        "AWS",
        "Event-driven architecture (MSK & EventBridge)",
        "OAuth2 (Auth0)",
        "TypeScript",
        "Terraform",
        "GitHub Actions",
        "React",
        "React Native",
      ],
      title: "Senior Software Engineer",
      start: "Oct 2024",
      end: null,
      highlights: [
        "Architected and delivered a Firebase-based push notification system utilizing event-driven architecture patterns such as CQRS, event sourcing and outbox patterns to ensure scalability and fault tolerance across distributed systems.",
        "Established engineering excellence standards by championing TDD and implementing comprehensive testing frameworks across the team.",
        "Enhanced system observability through distributed tracing for Kafka message flows, Auth0 post-login action monitoring and disaster recovery mechanisms, significantly improving system reliability and debugging efficiency.",
        "Identified and remediated critical security vulnerabilities through both immediate tactical fixes and long-term architectural improvements, demonstrating strong security awareness and proactive risk management.",
        "Drive technical evolution by actively participating in architectural discussions and leading initiatives to decommission legacy systems, contributing to cleaner, more maintainable codebases and modern design patterns.",
        "Provide technical leadership through hands-on mentorship of junior and mid-level developers, conducting pair programming sessions if needed and delivering actionable feedback through thorough code reviews to elevate team capabilities.",
      ],
    },
    {
      company: "FinoComp (Bravura Solutions)",
      link: "https://www.finocomp.com/",
      location: "Wollongong, Australia",
      badges: ["Java", "Micronaut", "Kafka", "k8s", "Terraform", "TeamCity"],
      title: "Software Engineer",
      start: "Feb 2021",
      end: "Oct 2024",
      highlights: [
        "Developed software within a distributed microservices ecosystem for multiple wealth management platform businesses.",
        "Proficiently provisioned, deployed, and managed testing environments and development infrastructures across AWS, Azure, GCP, and on-premises setups, leveraging a highly automated approach.",
        "Mentored junior engineers by actively engaging in pair programming and conducting regular knowledge-sharing sessions.",
        "Demonstrated proactive involvement in technical design and architectural deliberations.",
      ],
    },
    {
      company: "Mox Bank",
      link: "https://mox.com",
      location: "Hong Kong",
      badges: ["Kotlin", "Spring Boot", "Kafka", "k8s", "Istio"],
      title: "Staff Engineer, Backend",
      start: "Jul 2019",
      end: "Jan 2021",
      highlights: [
        "Developed web services (e.g. SMS/Push/OTP notification & verification) as a part of the distributed system in microservices, event-driven architecture for the FinTech (Virtual Banking) business.",
        "Built shared internal framework & libraries incl. Spring Boot starters, Gradle plugins, libraries for OAuth2, API contracts codegen, Kafka, testing framework to make product team developer lives easier.",
        "Designed and involved in architecturing, design and implementation, such as fault tolerance, API contract-first design.",
      ],
    },
    {
      company: "YouTrip",
      link: "https://www.you.co/",
      location: "Hong Kong",
      badges: ["Go", "gRPC", "Kafka", "k6"],
      title: "Software Engineer",
      start: "Apr 2019",
      end: "Jul 2019",
      highlights: [
        "Developed microservices for different FinTech business domains, e.g. FX, reporting, etc in event-driven architectural design.",
        "Promoted best practices about Agile, XP methodologies.",
        "Worked with the rest in the company altogether, like DevOps, Product, Data, etc as in a dynamic startup atmosphere.",
      ],
    },
    {
      company: "Société Générale",
      link: "https://www.societegenerale.com/en",
      location: "Hong Kong",
      badges: ["Java", "Kotlin", "Spring", "Python", "CQRS", "VBA"],
      title: "Front Office Developer",
      start: "Jun 2016",
      end: "Dec 2018",
      highlights: [
        "Developed applications for synthetic prime brokerage, Delta one and Equity finance business in agile software development manner.",
        "Worked closely with front office to understand user requirements and identify business priorities.",
        "Delivered quality solution to support business growth and also care code cleanliness, and maintainability.",
        "Leveraged latest technologies and software craftsmanship methodologies to further improve quality of end product and also team productivity.",
      ],
    },
  ],
  skills: [
    {
      name: "Programming",
      items: ["Go", "Rust", "Kotlin", "Java", "Groovy", "TypeScript", "Python"],
    },
    {
      name: "App Frameworks",
      items: ["Spring", "Micronaut", "echo", "Actix", "Flask", "React"],
    },
    {
      name: "Containers & Kubernetes",
      items: ["Docker", "containerd", "k3s", "Helm", "Rancher", "Istio"],
    },
    {
      name: "CI/CD",
      items: ["Jenkins", "CircleCI", "TeamCity", "GitHub Actions"],
    },
    { name: "Infrastructure as Code", items: ["Terraform", "Ansible"] },
    {
      name: "Methodologies & Architectures",
      items: [
        "Microservices",
        "Domain-driven Design (DDD)",
        "Event Sourcing",
        "CQRS",
        "Test-driven Design (TDD)",
        "Pair Programming",
      ],
    },
    {
      name: "Data & Observability",
      items: [
        "Kafka",
        "Postgres",
        "SQL Server",
        "MongoDB",
        "FluentBit",
        "Elastic",
        "Kibana",
        "DataDog",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      name: "Authentication",
      items: ["OAuth2", "Auth0", "FusionAuth", "Keycloak"],
    },
  ],
  certifications: [
    {
      title: "CKS: Certified Kubernetes Security Specialist",
      issuer: "The Linux Foundation",
      year: "2024",
      link: "https://www.credly.com/badges/0b821ea9-0b08-4780-85f8-4179fd68d197",
    },
    {
      title: "CKA: Certified Kubernetes Administrator",
      issuer: "The Linux Foundation",
      year: "2023",
      link: "https://www.credly.com/badges/180c48b8-8281-4bf1-a9e8-7e96747e9a29",
    },
    {
      title: "Hands-On Systems Programming with Rust",
      issuer: "Udemy",
      year: "2021",
      link: "https://www.udemy.com/certificate/UC-299dbc39-4644-4d01-96f7-d81184f58828/",
    },
    {
      title: "Financial Risk Manager (FRM®)",
      issuer: "Global Association of Risk Professionals (GARP)",
      year: "2015",
      link: "https://my.garp.org/DigitalBadgeFRM?id=0034000001aeLt9AAE",
    },
  ],
  education: [
    {
      school: "City University of Hong Kong",
      degree: "MSc in Financial Engineering",
      start: "2015",
      end: "2016",
      notes: [
        "Specialized in financial modelling with programming",
        "GPA 3.87 / 4.00",
      ],
    },
    {
      school: "The Hong Kong Polytechnic University",
      degree: "BSc in Major in Computing and Minor in Business",
      start: "2008",
      end: "2011",
      notes: ["Specialized in OOP, Android app development, etc"],
    },
  ],
  awards: [
    {
      title: "Quant Finance Lab of CASH Algo Finance Group (CAFG) - Hong Kong",
      role: "Team Leader, Inter-University Algo Trading Contest",
      date: "2015 - 2016",
      link: "http://algocontest.cashalgo.com/",
      highlights: [
        "Researched and developed quantitative models, trading algorithms trading program with Python",
        "Shortlisted for final round (12 teams picked out of 70)",
      ],
    },
  ],
  projects: [
    {
      title: "DigitalOcean Kubernetes Challenge",
      date: "2021",
      techStack: ["Kubernetes", "vcluster", "DigitalOcean"],
      description:
        "Explored, deployed and demonstrated use of vcluster in a DigitalOcean k8s cluster.",
      link: "https://github.com/alank976/doks-vcluster-challenge",
    },
    {
      title: "Rust toy projects",
      date: "2020 - 2021",
      techStack: ["Rust", "Actix", "Tide", "Cloudflare Workers", "WASM"],
      description:
        "To acquire a taste for Rust with Actix, Tide, async/await, Cloudflare Workers, and FaunaDB with/without plain old Java dependency injection mindset.",
      links: [
        {
          title: "commuter-service",
          url: "https://github.com/alank976/commuter-service",
        },
        { title: "vocab-mate", url: "https://github.com/alank976/vocab-mate" },
      ],
    },
    {
      title: "TradeMatching",
      date: "2019",
      techStack: ["Kotlin", "Reactor", "Spring WebFlux", "Gradle"],
      description:
        "Buy & sell trade matching in reactive stream manner using Reactor, Spring webflux and Gradle Kotlin DSL.",
      link: "https://github.com/alank976/TradeMatching",
    },
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Cantonese", level: "Native" },
    { name: "Mandarin", level: "Fluent" },
  ],
  interests: ["Coding", "Software Craftsmanship", "Software Architecture"],
};

export const SECTION_TITLES = {
  summary: "About",
  work: "Work Experience",
  skills: "Skills",
  certifications: "Certifications",
  education: "Education",
  awards: "Awards",
  projects: "Toy Projects",
  languages: "Languages",
  interests: "Interests",
} satisfies Partial<Record<keyof ResumeData, string>>;
