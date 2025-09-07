import { ContactInfo, Experience, Skill, Project } from "@/types/portfolio";

export const contactInfo: ContactInfo = {
  name: "Ismail Kattakath",
  title: "Principal Software Engineer & AI Research Scientist",
  location: "Etobicoke, ON M9V 1N8",
  phone: "+1 (226) 241-0205",
  email: "ismail@kattakath.com",
  github: "github.com/aloshy-ai",
  linkedin: "linkedin.com/in/ismailkattakath"
};

export const summary = [
  "15+ years experience as a respected full-stack software engineering professional across mission-critical systems",
  "Developer of MCP server architectures enabling seamless LLM-API integrations",
  "Expert in transforming unstructured data into actionable intelligence through vector embeddings and semantic search systems",
  "Trusted technical leader with proven ability to bridge complex technical concepts with business requirements",
  "Known for exceptional learning agility, having quickly mastered emerging AI technologies",
  "Effective communicator and presenter of complex technical ideas",
  "Respected coach and mentor who elevates team performance"
];

export const skills: Skill[] = [
  {
    category: "AI/ML Stack",
    items: ["RAG Systems", "Multi-Agent LLM Workflows", "Generative AI Pipelines", 
            "Hugging Face Transformers", "Knowledge Graphs", "NER Models", 
            "MCP Server Gateways", "Google Vertex AI"]
  },
  {
    category: "Cloud Services",
    items: ["Google Cloud (Vertex AI, GKE)", "AWS (Lambda, S3, EC2)", 
            "DigitalOcean", "Vercel", "Cloudflare Workers/R2", "MongoDB Atlas"]
  },
  {
    category: "Authentication & Security",
    items: ["OAuth 2.0", "OpenID Connect (OIDC)", "SAML 2.0", "PKCE", "JWT", 
            "Auth0", "Keycloak", "Basic Auth", "Bearer Token"]
  },
  {
    category: "DevOps & CI/CD",
    items: ["Docker", "Docker Compose", "Kubernetes", "GitHub Actions", 
            "Terraform", "GitLab CI", "Ansible", "Vagrant", "Act"]
  },
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Bash", "Java"]
  },
  {
    category: "Web & Mobile UI",
    items: ["Next.js", "ReactJS", "Angular", "TailwindCSS", "React Native", "Flutter", "Expo"]
  }
];

export const experience: Experience[] = [
  {
    title: "Applied AI Research Scientist",
    company: "Silver Creek Insights",
    location: "Dubai",
    duration: "Aug 2024 - Present",
    description: [
      "Architected and deployed production-ready inference API infrastructure supporting multiple open-source AI models including StableDiffusion, FLUX, WAN, and Hunyuan with various LoRa configurations",
      "Optimized neural network performance for resource efficiency and faster inference times while maintaining output quality standards across Google Vertex AI and GKE deployment environments",
      "Implemented scalable containerized AI model serving infrastructure on Google Kubernetes Engine, achieving reduced computational overhead and improved response times",
      "Designed and developed MCP Server Gateways and Aggregators with OAuth2.0 and Bearer Token authentication protocols for secure AI model access",
      "Built experimental LLM pipelines using fine-tuned models for domain-specific objectives, leveraging Hugging Face Transformers and Knowledge Graph technologies"
    ],
    technologies: ["Google Vertex AI", "GKE", "Docker", "Kubernetes", "StableDiffusion", 
                  "FLUX", "Hugging Face", "OAuth2.0", "MCP Protocol", "Microsoft Autogen", "Python", "TensorFlow", "PyTorch"]
  },
  {
    title: "Principal Software Engineer",
    company: "Homewood Health Inc",
    location: "Guelph",
    duration: "Oct 2017 - July 2024",
    description: [
      "Lead migration of frontend from AngularJS to ReactJS as the former reached end-of-life",
      "Assessed migration projects and broken down into executable units for external contractors",
      "Built SSO Trust with multiple IdPs and SPs using SAML2 authentication",
      "Integrated OAuth2.0/OpenID Connect Authentication with Microsoft Identity.NET server",
      "Migrated internally hosted MongoDB to MongoDB Atlas Cluster with horizontal scaling and failover implementation"
    ],
    technologies: ["ReactJS", "NextJS", "Next-Auth", "Node.js", "MongoDB", 
                  "AngularJS", "Express", "SAML2", "OAuth2.0", "AWS"]
  },
  {
    title: "IT Consultant",
    company: "Scotiabank",
    location: "Toronto",
    duration: "Feb 2019 - Jun 2019",
    description: [
      "Upgraded 3 IBM OpenPages GRC Environments from 7.3 to 8.0.0.2",
      "Upgraded 3 Cognos 10 BI Environments to Cognos Analytics 11",
      "Setup IBM AIX Load Balanced Cluster using IBMIHS9",
      "Implemented Business Unit Hierarchy user interface on Angular 6"
    ],
    technologies: ["IBM AIX", "IBM HTTP Server", "OpenPages", "Cognos", "Angular", "Java8", "Oracle Database"]
  }
];

export const projects: Project[] = [
  {
    name: "AI Infrastructure & Model Deployment Platform",
    description: "Micro-SaaS platform providing image and video manipulation services through optimized AI model inference APIs",
    technologies: ["Google Vertex AI", "Kubernetes", "Docker", "StableDiffusion", "FLUX", "OAuth2.0"],
    highlights: [
      "Deployed production-ready inference APIs for multiple AI models",
      "Achieved reduced computational overhead with improved response times",
      "Implemented secure MCP Server Gateways with OAuth2.0 authentication"
    ]
  },
  {
    name: "Homeweb.ca Portal",
    description: "Employee and Family Assistance Program portal for corporations, built with MEAN stack and migrated to React",
    technologies: ["ReactJS", "NextJS", "Node.js", "MongoDB", "SAML2", "OAuth2.0"],
    highlights: [
      "Successfully migrated from AngularJS to ReactJS",
      "Integrated with multiple identity providers using SAML2",
      "Scaled MongoDB infrastructure to Atlas with high availability"
    ]
  },
  {
    name: "Brilliant Rewards Platform",
    description: "Comprehensive hospitality business software suite with digital loyalty program and marketing tools",
    technologies: ["AngularJS", "Node.js", "Express", "LoopBack", "Ionic", "OAuth2.0"],
    highlights: [
      "Led development of 4 cross-platform applications and 7 web portals",
      "Implemented RESTful API backend with microservices architecture",
      "Built native and cross-platform mobile applications"
    ]
  }
];