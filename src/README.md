---
home: true
portfolio: true
title: About Me
icon: user
avatar: /avatar.jpg
avatarStyle: "width: 60%; max-width: 320px; display: block; margin: auto; border-radius: 28px; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);"
heroText: Aubrey's blog
welcome: 👋 Hi there, I'm
name: Aubrey Kuang
titles:
  - Software Engineer @ AWS
  - Building network agents
  - CMU MISM '25
about:
  intro:
    - I'm a Software Development Engineer at <strong>Amazon Web Services</strong>, working on AWS networking services in the <strong>San Francisco Bay Area</strong>. I build AI-powered network agents and issue detection systems that help keep the network healthy.
    - Before that, I studied Information Systems Management at Carnegie Mellon University. Welcome to my corner of the internet!
  facts:
    - icon: location-dot
      text: SF Bay Area
    - icon: briefcase
      text: SDE @ AWS Networking
    - icon: graduation-cap
      text: CMU MISM '25
  labels:
    experience: Experience
    education: Education
    skills: Skills
    connect: Let's Connect
    current: Current
  experience:
    - company: Amazon Web Services
      role: Software Development Engineer
      team: AWS Networking
      period: Mar 2026 – Present
      location: SF Bay Area
      current: true
      highlights:
        - title: Network Agent
          text: Building an AI-powered network agent that assists with network operations, automating investigation and troubleshooting workflows.
        - title: Issue Detection
          text: Developing issue detection capabilities that identify network anomalies early and surface actionable signals for faster mitigation.
      tags: [AI Agents, Networking, Issue Detection, Distributed Systems]
    - company: Amazon
      role: Software Development Engineer Intern
      period: Jun 2025 – Aug 2025
      location: Seattle, WA
      highlights:
        - title: Distributed System Development
          text: Architected an event-driven system connecting API Gateway, DynamoDB, SNS, and SQS, with cross-account access and a producer-consumer architecture where SQS listeners coordinate worker execution.
        - title: LLM Service Development
          text: Built an end-to-end Amazon Bedrock integration with prompt engineering, temperature tuning, and response parsing that automated report generation for human review, with a 98% positive feedback rate.
        - title: Cloud Service Integration
          text: Integrated Amazon OpenSearch into containerized Fargate services, adding full-text search that improved data retrieval performance.
        - title: Cross-Dependency Model Development
          text: Developed a unified Common DAO package supporting cross-dependency models for Peru and Brazil AWS services, reducing duplicated code.
      tags: [Amazon Bedrock, SQS / SNS, DynamoDB, OpenSearch, Fargate]
  education:
    - school: Carnegie Mellon University
      degree: M.S. in Information Systems Management
      period: Aug 2024 – Dec 2025
      details:
        - "Coursework: Distributed Systems, Database Management, Object-Oriented Programming, Data Structures"
        - Hagan International Scholarship
    - school: Northeastern University
      degree: B.S. in Information Management & Information Systems
      period: Sept 2020 – July 2024
      details:
        - "Weighted average 91 · Rank 3 / 60 · WES GPA 3.9 / 4.0"
        - 2024 Outstanding Graduate (Top 5%)
        - 2020–2023 Outstanding Student, School Scholarship
  skills:
    - group: Languages
      icon: code
      items: [Java, Python, TypeScript, JavaScript, SQL, Bash, C]
    - group: Cloud & AWS
      icon: cloud
      items: [Lambda, Fargate, Bedrock, OpenSearch, CDK, API Gateway]
    - group: Backend & Systems
      icon: server
      items: [Spring Boot, Flask, Microservices, Event-Driven Architecture, SQS / SNS, REST APIs]
    - group: Data
      icon: database
      items: [DynamoDB, MySQL, Redis, MongoDB, Oracle]
    - group: AI
      icon: robot
      items: [AI Agents, LLM Integration, Prompt Engineering]
    - group: Tooling
      icon: screwdriver-wrench
      items: [Git, CI/CD, Angular, Linux]
  connect:
    text: Thanks for stopping by! I'm always happy to chat with fellow engineers and anyone interested in cloud, networking, and AI.
    links:
      - text: LinkedIn
        link: https://www.linkedin.com/in/yongbeikuang/
        icon: fab fa-linkedin
        primary: true
      - text: GitHub
        link: https://github.com/aubreykuang
        icon: fab fa-github
      - text: Study Notes (中文)
        link: /zh/notes/
        icon: box-archive
---

<AboutMe />
