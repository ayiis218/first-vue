export const dataExperience = [
  {
    companyName: "PT Bank Rakyat Indonesia (Persero) Tbk",
    position: "Frontend Developer (via PT Diksha Teknologi Indonesia)",
    date: "Apr '23 - Present",
    experience: [
      {
        title: "APP Division",
        project: [
          {
            title: "Loyalty Management System (LMS)",
            list: [
              "Architected and delivered an enterprise-scale platform using <b class='text-indigo-600 dark:text-indigo-400'>Next.js, Radix UI, TanStack React Query, and Zustand</b>, covering QRIS Promotion, Cashback, and multi-program reward management.",
              "Built the Non-Transaction (Non-TRx), Early Tenure, and CIF Grouping reward modules end-to-end, including program lifecycle management, validation schemas, and localization.",
              "Designed a granular, action-level permission (RBAC) system alongside a centralized approval workflow with rejection reasons and full approval history tracking.",
              "Implemented an asynchronous export/download center with job-status polling and real-time notifications for large transaction exports (Excel/CSV).",
              "Built a shared UI component library (data tables, multi-select with server-side search, badges, dialogs) using <b class='text-indigo-600 dark:text-indigo-400'>Radix UI and Zod</b>, standardizing API response handling and reducing code duplication across the codebase.",
              "Authored unit tests covering Early Tenure, Deposit Account, and CIF Grouping modules to raise test coverage and guard against regressions.",
            ]
          },
          {
            title: "ProCash",
            list: [
              "Engineered core logic for QRIS Promotion and Cashback workflows using <b class='text-indigo-600 dark:text-indigo-400'>Laravel</b>, covering promo creation, scheduling intervals, and merchant management.",
              "Built a CSV bulk merchant upload pipeline with real-time validation and duplicate detection, replacing manual entry for large-scale promo rollouts.",
              "Designed a <b class='text-indigo-600 dark:text-indigo-400'>QrisGateway abstraction layer</b> and migrated merchant lists to server-side pagination, cutting redundant gateway calls and improving list performance.",
              "Implemented Mid Induk merchant inquiry search-sequencing to eliminate stale, out-of-order results in concurrent lookups.",
              "Strengthened application security through static and dynamic code analysis (SAST/DAST), driving <b class='text-indigo-600 dark:text-indigo-400'>SonarQube duplicate code and code smell metrics down to 0%</b>.",
              "Standardized date/time handling to UTC and Asia/Jakarta across promo scheduling to eliminate inconsistent expiry calculations.",
            ]
          },
          {
            title: "Ambilin Dashboard Internal - Agent Management & Pickup Monitoring",
            list: [
              "Successfully launched the Ambilin Dashboard Internal, a comprehensive platform for agent management, partner management and pickup monitoring.",
              "Reduced SonarQube duplicate code from 15% to 0% and eliminated all code smells.",
              "Collaborated closely with Product Owners and UI/UX designers to translate complex business logic into intuitive operational dashboards.",
              "Executed targeted <b class='text-indigo-600 dark:text-indigo-400'>performance optimizations</b> to ensure lag-free monitoring of thousands of concurrent cash pickup transactions.",
              "Drove the frontend initiative using <b class='text-indigo-600 dark:text-indigo-400'>Next.js and Tailwind CSS</b> to build real-time monitoring maps and complex data grids.",
              "Architected a scalable <b class='text-indigo-600 dark:text-indigo-400'>Role-Based Access Control (RBAC)</b> system tailored for multi-tier organizational structures.",
              "Implemented request/response encryption and decryption to secure sensitive data in transit.",
              "Authored comprehensive SIT/UAT documentation and established standard deployment pipelines.",
            ]
          },
          {
            title: "Ambilin Dashboard Partner - Partner Order Management",
            list: [
              "Successfully launched the Ambilin Dashboard Partner, adopted by Indomaret (2000+ outlets), Alfamidi, Haus, Kopi Jago, Pertamina, and other major partners for order management.",
              "Resolved order-handling issues between partners and agents, improving transaction reliability.",
              "Reduced SonarQube duplicate code from 18% to 0% and eliminated all code smells.",
              "Architected a heavily-optimized <b class='text-indigo-600 dark:text-indigo-400'>bulk upload mechanism</b>, enabling partners to process thousands of records in seconds with real-time validation feedback.",
              "Significantly optimized the order management flow, <b class='text-indigo-600 dark:text-indigo-400'>reducing time-to-completion by 40%</b> for primary user journeys.",
              "Built an integrated partner portal with <b class='text-indigo-600 dark:text-indigo-400'>Next.js</b>, streamlining outlet management and order workflows.",
            ]
          },
          {
            title: "Ambilin - Cash Pickup & Order System",
            list: [
              "Adopted by 1000+ agents for daily cash pickup operations.",
              "Optimized application performance while maintaining existing features and system stability.",
              "Resolved critical pickup-order issues reported by agents, improving reliability.",
              "Spearheaded major refactoring of legacy codebases, significantly boosting readability, maintainability, and rendering performance.",
              "Instituted advanced data fetching strategies and centralized state management, eliminating redundant API calls and lowering server load by 35%.",
              "Ensured strict QA compliance, successfully resolving highly critical UI/UX bugs before deploying seamlessly to production.",
            ]
          }
        ]
      },
      {
        title: "DDB Division",
        project: [
          {
            title: "BRISilk - Enterprise Shortlink Management",
            list: [
              "Successfully launched BRISilk to production, onboarding 1000+ users.",
              "Resolved critical fraud-detection issues for PT Bank Rakyat Indonesia.",
              "Integrated Open API to connect BRISilk with PT Bank Rakyat Indonesia's broader digital ecosystem.",
              "Engineered a high-performance URL shortener application using <b class='text-indigo-600 dark:text-indigo-400'>Next.js, Material UI, and React Query</b>.",
              "Integrated real-time <b class='text-indigo-600 dark:text-indigo-400'>analytics and visualization charts</b>, providing actionable insights into link engagement.",
              "Linked the platform with BRISTARS Mobile to streamline cross-app approval mechanisms.",
              "Instrumented the application with <b class='text-indigo-600 dark:text-indigo-400'>ElasticSearch APM</b> to continuously monitor and improve web vital metrics."
            ]
          }
        ]
      }
    ]
  },
  {
    companyName: "Direktorat Jenderal Bea Cukai (DJBC) Indonesia",
    position: "Frontend Developer (via PT Mitrafor Teknologi Indonesia)",
    date: "Oct '22 - Jan '23",
    experience: [
      {
        title: "",
        project: [
          {
            title: "CEISA 4.0",
            list: [
              "Developed critical components for a massive enterprise system using <b class='text-indigo-600 dark:text-indigo-400'>React, Ant Design, Highcharts, and ElasticSearch</b>.",
              "Constructed complex dynamic dashboards capable of rendering real-time operational reports from large data aggregates.",
              "Partnered extensively with QA teams to systematically eliminate edge-case rendering bugs and memory leaks."
            ]
          }
        ]
      }
    ]
  }
]

export const dataEducation = [
  {
    companyName: "Pijar Camp",
    position: "Fullstack Developer",
    date: "May '22 - Aug '24",
    experience: [
      {
        title: "Intensive Bootcamp",
        project: [
          {
            title: "",
            list: [
              "Built full-stack web applications using <b class='text-indigo-600 dark:text-indigo-400'>React.js, Next.js, Express.js, and PostgreSQL</b>.",
              "Built RESTful APIs and microservices from scratch.",
              "Successfully developed a responsive and user-friendly web application using <b class='text-indigo-600 dark:text-indigo-400'>Next.js and Styled Components</b>.",
              "Built an API Gateway and database layer using <b class='text-indigo-600 dark:text-indigo-400'>Express.js and PostgreSQL</b>.",
              "Algorithms, robust programming logic, flowchart, and scalable data structure patterns.",
              "Learned and applied <b class='text-indigo-600 dark:text-indigo-400'>Framework (Next.js, React.js, Express.js, PostgreSQL)</b> for build full-stack web applications.",
              "Learned and applied <b class='text-indigo-600 dark:text-indigo-400'>Agile/Scrum</b> methodologies to manage project workflows and deliverables.",
              "Collaborated in Agile teams employing daily standups, weekly sprints, and structured deployment pipelines.",
            ]
          }
        ]
      }
    ]
  },
  {
    companyName: "State Vocational School 1 Kawali",
    position: "Software Engineering",
    date: "Jul '16 - May '19",
    experience: [
      {
        title: "Core Foundational Studies",
        project: [
          {
            title: "",
            list: [
              "Learned fundamental programming logic, flowchart, and scalable data structure patterns.",
              "Learned and applied <b class='text-indigo-600 dark:text-indigo-400'>Framework (PHP, MySQL, and HTML)</b> for build full-stack web applications.",
              "Established strong foundations in relational database design (ERD) and fundamental programming concepts.",
              "Developed fully functional web applications deploying <b class='text-indigo-600 dark:text-indigo-400'>PHP, MySQL, and HTML</b>.",
              "Completed a successful software engineering internship at the Faculty of Informatics, Universitas Siliwangi.",
              "Drafted comprehensive technical documentation and system architecture blueprints."
            ]
          }
        ]
      }
    ]
  }
]


export const techStack = [
  {
    title: "Languages",
    list: ["JavaScript", "TypeScript", "PHP"]
  },
  {
    title: "Frameworks",
    list: ["React.js", "Next.js", "Vue.js", "React Native", "Laravel", "Express.js"]
  },
  {
    title: "State Management",
    list: ["Zustand", "TanStack Query", "Context API"]
  },
  {
    title: "UI & Validation",
    list: ["Tailwind CSS", "Radix UI", "Zod"]
  },
  {
    title: "Testing & Quality",
    list: ["React Testing Library", "SonarQube"]
  },
  {
    title: "Database",
    list: ["PostgreSQL", "MySQL"]
  },
  {
    title: "Tools & Others",
    list: ["Docker", "Kubernetes", "Bun", "Git (GitHub/GitLab)", "Bitbucket", "Jenkins", "Postman", "Swagger", "Agile/Scrum"]
  }
]

export const dataCertificate = [
  {
    companyName: "HackerRank",
    position: "Frontend Developer - React",
    date: "Jul '25",
    link: "https://www.hackerrank.com/certificates/iframe/654880b2d191",
    experience: [
      {
        title: "",
        project: [
          {
            title: "",
            list: [
              "Successfully passed standardized assessments covering fundamental React concepts, component lifecycle, and hooks."
            ]
          }
        ]
      }
    ]
  },
  {
    companyName: "Pijar Camp",
    position: "Fullstack Web Developer",
    date: "May '22 - Sept '22",
    link: "https://drive.google.com/file/d/1dRBtkb9Es3wgC5NEYMqQuXpDtKehfs4a/view?usp=drivesdk",
    experience: [
      {
        title: "",
        project: [
          {
            title: "",
            list: [
              "Intensive training in modern JavaScript ecosystem, focusing on React Js, Next Js, Express.js, PostgreSQL and Node.js.",
              "Built complex, scalable applications with proper state management and secure backends."
            ]
          }
        ]
      }
    ]
  },
  {
    companyName: "Alterra Academy",
    position: "Website with React Js",
    date: "Apr '22",
    link: "https://drive.google.com/file/d/1U_6MAcKTQTdkpPBTulAoKhhjF-V2Jo2F/view?usp=drivesdk",
    experience: [
      {
        title: "",
        project: [
          {
            title: "",
            list: [
              "Successfully passed standardized assessments covering fundamental React concepts, component lifecycle, and hooks."
            ]
          }
        ]
      }
    ]
  }
]

export const dataProject = [
  {
    projectName: "Personal Portfolio",
    description: "Architected a highly interactive, responsive portfolio leveraging modern web technologies and subtle micro-animations to highlight UI/UX engineering skills.",
    images: ["../assets/portofolio.png"],
    link: "https://ayi-shallahudin.vercel.app",
    techStack: "Vue.js, Vite, Tailwind CSS, Motion-v"
  },
  {
    projectName: "LMS - Loyalty Management System",
    description: "Designed a major enterprise loyalty ecosystem for PT Bank Rakyat Indonesia (BRI), covering QRIS Promotion, Cashback, Non-Transaction rewards, Early Tenure, and CIF Grouping program management with a centralized approval workflow, async export jobs, and granular RBAC.",
    images: ["../assets/lms.png", "../assets/lms2.png"],
    link: "",
    techStack: "React.js, Next.js, Radix UI, Tailwind CSS, TanStack Query, Zustand, Zod, PostgreSQL, ElasticSearch APM"
  },
  {
    projectName: "ProCash Core",
    description: "Spearheaded the development of the QRIS Promotion and Cashback engine for BRI merchants, building bulk merchant upload, promo scheduling, and a QrisGateway abstraction layer, while hardening the application against SAST/DAST findings.",
    images: ["../assets/procash.png", "../assets/procash2.png"],
    link: "",
    techStack: "Laravel, PHP, MySQL, Bootstrap, jQuery"
  },
  {
    projectName: "Ambilin Dashboard Internal",
    description: "Engineered a centralized command center for BRI administrators, securing critical data with role-based access logic while monitoring live cash pickup logistics.",
    images: ["../assets/ambilin-internal.png", "../assets/ambilin-internal1.png"],
    link: "https://play.google.com/store/apps/details?id=id.co.bri.brilinkmobile&hl=id",
    techStack: "Next.js, Tailwind CSS, PostgreSQL, Context API, Highcharts"
  },
  {
    projectName: "Ambilin Partner Portal",
    description: "Built an intuitive operational hub for Mitra BRILink partners. Empowered external partners to orchestrate thousands of transactions through a highly optimized bulk upload system.",
    images: ["../assets/ambilin-partner.png", "../assets/ambilin-partner2.png"],
    link: "https://play.google.com/store/apps/details?id=id.co.bri.brilinkmobile&hl=id",
    techStack: "Next.js, Tailwind CSS, PostgreSQL, ElasticSearch APM"
  },
  {
    projectName: "Ambilin Logistics System",
    description: "Transformed legacy code into a highly performant application. Integrated state-of-the-art caching and data fetching strategies reducing network round-trips significantly.",
    images: ["../assets/ambilin.png", "../assets/ambilin2.png", "../assets/ambilin3.png"],
    link: "https://play.google.com/store/apps/details?id=id.co.bri.brilinkmobile&hl=id",
    techStack: "Next.js, Docker, ElasticSearch APM, Tailwind CSS"
  },
  {
    projectName: "BRISilk Shortlink Platform",
    description: "Constructed a secure, compliant URL shortening and tracking service capable of surviving high-traffic spikes whilst offering detailed engagement analytics to stakeholders.",
    images: ["../assets/brisilk.png", "../assets/brisilk2.png"],
    link: "https://brilianapps.bri.co.id",
    techStack: "Next.js, Material UI, React Query, MySQL, Docker, GO"
  },
  {
    projectName: "CEISA 4.0 Customs System",
    description: "Contributed critical UI layers for Indonesia's Customs platform (DJBC), focusing on charting large datasets and enforcing flawless operational reporting stability.",
    images: ["../assets/ceisa.jpg"],
    link: "https://portal.beacukai.go.id/portal/login",
    techStack: "React.js, Ant Design, Highcharts, Java Spring Boot"
  }
]

export const contact = [
  {
    name: "GitHub",
    url: "https://github.com/ayiis218",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ayi-solahudin",
    icon: "linkedin"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ayiis___",
    icon: "instagram"
  },
  {
    name: "Email",
    url: "mailto:shallahudin.ayi@gmail.com",
    icon: "email"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/6281222863028",
    icon: "whatsapp"
  }
]