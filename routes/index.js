var express = require('express');
var router = express.Router();

const nameList = [
  {'Id': 1,'Term':'Software deployment','Description':' A professional activity where software is developed for specific business purposes, for inclusion in other devices, or as software products such as information systems, CAD systems, etc. Professional software, intended for use by someone apart from its developer, is usually developed by teams rather than individuals. It is maintained and changed throughout its life.','reference':'I. Sommerville et al., “SOFTWARE ENGINEERING Ninth Edition.” Available: https://engineering.futureuniversity.com/BOOKS%20FOR%20IT/Software-Engineering-9th-Edition-by-Ian-Sommerville.pdf'},
  {'Id': 2,'Term':'Software Operations','Description':'Software operations, also known as "operations" or "IT operations", refers to the practices and processes involved in managing and maintaining software systems and IT infrastructure in production environments. This includes a wide range of activities aimed at ensuring the reliability, efficiency and security of software applications and services','reference':'K. M. Nelson, S. Nadkarni, V. K. Narayanan, and M. Ghods, “Understanding Software Operations Support Expertise: A Revealed Causal Mapping Approach,” MIS Quarterly, vol. 24, no. 3, p. 475, Sep. 2000, doi: https://doi.org/10.2307/3250971.'},
  {'Id': 3, 'Term':"GIT",'Description':'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.','reference':'Git, “Git,” Git-scm.com, 2019. https://git-scm.com/'},
  {'Id': 4, 'Term':"Continuous Integration (CI)",'Description':'Continuous Integration (CI) is a software development practice that aims to streamline the process of building, testing, and integrating code changes into a shared repository. By automating these tasks, CI allows developers to frequently and efficiently integrate their changes, often multiple times a day.','reference':'S. Hamdan and S. Alramouni, “A Quality Framework for Software Continuous Integration,” Procedia Manufacturing, vol. 3, pp. 2019–2025, 2015, doi: https://doi.org/10.1016/j.promfg.2015.07.249'},
  {'Id': 5, 'Term':"Continuous Deployment (CD)",'Description':'Continuous Deployment (CD) is an extension of Continuous Integration (CI) in the software development process. CD takes the automation further by automatically deploying code changes to production or a production-like environment after passing all the automated tests in the CI pipeline.','reference':'Kim, Gene, et al. "Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations." IT Revolution Press, 2018.'},
  {'Id': 6, 'Term':"Software Change Management",'Description':'The term Software Change Management refers to a structured and systematic approach that organizations use to plan, implement, and manage changes in a controlled manner.','reference':'A. A. Khan, S. Basri, and P. D. D. Dominic, “A propose framework for requirement Change Management in Global Software Development,” 2012 International Conference on Computer & Information Science (ICCIS), Jun. 2012, doi: https://doi.org/10.1109/iccisci.2012.6297161.'},
  {'Id': 7, 'Term':"Release Management",'Description':'The process involves the planning, development, testing, deployment, and monitoring of a software release.','reference':'A. van der Hoek, R. S. Hall, D. Heimbigner, and A. L. Wolf, “Software release management,” ACM SIGSOFT Software Engineering Notes, vol. 22, no. 6, pp. 159–175, Nov. 1997, doi: https://doi.org/10.1145/267896.267909.'},
  {'Id': 8, 'Term':"Downtime",'Description':'A downtime occurs when a piece of software is not available for users to use. It is the opposite of an uptime, which is a period during which the software is running.','reference':'D. Patterson, “A Simple Way to Estimate the Cost of Downtime,” 2002. Accessed: Jul. 23, 2023. [Online]. Available: http://roc.cs.berkeley.edu/papers/Cost_Downtime_LISA.pdf'},
  {'Id': 9, 'Term':"Monitoring and Alerting",'Description':'Monitoring and alerting are critical components of software operations and infrastructure management. A software performance monitor is employed to ensure that software systems perform well, are available, and reliable, as well as to detect and respond to any anomalies that may occur. Alerting is the process of setting up rules and thresholds based on predefined conditions or criteria in the monitored data. When these conditions are met or when anomalies are detected, the monitoring system generates alerts or notifications to notify the responsible teams about potential issues.','reference':'"The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations" by Gene Kim, Patrick Debois, John Willis, and Jez Humble. This book covers various aspects of DevOps, including monitoring, alerting, and improving IT operations.'},
  {'Id': 10, 'Term':"Devops",'Description':'DevOps is a set of practices and cultural philosophies aimed at improving collaboration and communication between development teams (Dev) and IT operations teams (Ops). The goal is to break down the traditional silos between these teams and encourage a culture of shared ownership across the software development and delivery lifecycle','reference':'C. Ebert, G. Gallardo, J. Hernantes, and N. Serrano, “DevOps,” IEEE Software, vol. 33, no. 3, pp. 94–100, May 2016, doi: https://doi.org/10.1109/ms.2016.68. “(PDF) A Qualitative Study of DevOps Usage in Practice,” ResearchGate. https://www.researchgate.net/publication/316879884_A_Qualitative_Study_of_DevOps_Usage_in_Practic'},
  {'Id': 11, 'Term':"Continuous delivery",'Description':'Continuous delivery (CD) is a software engineering approach that produces software in short cycles, ensuring reliable release without manual intervention. It automates the SDLC from build to testing, promoting a rapid feedback loop between businesses and users. It forms the modern CI/CD delivery pipeline.','reference':'J. Verona, P. Swartout, and M. Duffy, Learning DevOps: Continuously Deliver Better Software. Birmingham, UK: Packt Publishing, 2016. Accessed: Aug. 06, 2023. [Online]. Available: https://eds.p.ebscohost.com/eds/detail/detail?vid=0&sid=095af693-cd41-4075-8dbd-6ffb6235c2d2%40redis&bdata=JnNpdGU9ZWRzLWxpdmUmc2NvcGU9c2l0ZQ%3d%3d#AN=1358183&db=e000xww'},
  {'Id': 12, 'Term':"Agile",'Description':'Agile is a project management and software development approach that emphasizes flexibility, collaboration, and incremental progress. It breaks projects into smaller tasks and iterations, focusing on customer collaboration, incremental development, adaptive planning, continuous integration, cross-functional teams, and self-organizing teams. Agile popularity stems from its ability to adapt to changing requirements, improve product quality, and foster customer satisfaction.','reference':'Agile Alliance, \“What is Agile Software Development?,\” Agile Alliance, Jan. 16, 2019. https://www.agilealliance.org/agile101/' },
  {'Id': 13, 'Term':"Git Branching",'Description':'Git branching is a version control system feature enabling developers to create separate development lines within a project, allowing teams to work independently without interfering with the main codebase. Key concepts include Master/Main Branch, branch creation, switching, committing changes, merging, conflict resolution, and branch management.','reference':'About - Git,” Git-scm.com, 2019. https://git-scm.com/about' },
  {'Id': 14, 'Term':"Repository ",'Description':'A repository is a data structure in version control systems that stores metadata for files and directory structures, allowing for distributed or centralized storage. Its purpose is to store files and their history of changes.','reference':'Git, “Git - About Version Control,” Git-scm.com, 2019. https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control'}, 
  {'Id': 15, 'Term':"Commit ",'Description':'A Git commit records changes to a projects files and creates a new snapshot of the codebase. It is assigned a unique identifier called the commit hash or SHA-1 hash. To create a commit, follow these steps: add stage changes, create a commit with a descriptive message, repeat as needed, and view commit history. Git allows for easy reverting to previous states and synchronization of the codebase.','reference':'Git - git-commit Documentation,” git-scm.com."https://git-scm.com/docs/git-commit" '},
  {'Id': 16, 'Term':"Continuous improvement (CIP)",'Description':'Continuous improvement (CIP) is a philosophy aiming to create a culture where team members can suggest and improve products or processes at any time. It is a fundamental principle in management philosophies like Lean, Six Sigma, Total Quality Management, and Agile. By embracing CIP, organizations can achieve enhanced efficiency, higher quality products, customer satisfaction, and a competitive advantage.','reference':'American Society for Quality, “Continuous Improvement Model - Continual Improvement Tools | ASQ,” Asq.org, 2019. https://asq.org/quality-resources/continuous-improvement'},
  {'Id': 17, 'Term':"Deployment",'Description':'Software deployment involves releasing software applications to specific environments, involving key steps like packaging, testing, environment configuration, strategy, automation, production, monitoring, rollback, post-deployment activities, and security. It\'s crucial for the software development lifecycle, ensuring minimal disruption and optimal performance.','reference':'“Traditional Development/Integration/Staging/Production Practice for Software Development,” Disruptive Library Technology Jester, Dec. 04, 2006. https://dltj.org/article/software-development-practice/'},
  {'Id': 18, 'Term':"Source Control",'Description':'Source control is a software development system that tracks changes to files and folders, enabling collaboration, code management, conflict resolution, and backup. Common systems like Git, SVN, and Mercurial provide efficient collaboration, code management, and improved software quality.','reference':'F. Santacroce author., A. Olsson, R. Voss, and J. Narębski, Git : mastering version control. Packt Publishing, 2016. Accessed: Aug. 06, 2023. [Online]. Available: https://eds.p.ebscohost.com/eds/detail/detail?vid=0&sid=a00e23bc-ed8d-4b92-b41f-9ed87c505ee1%40redis&bdata=JnNpdGU9ZWRzLWxpdmUmc2NvcGU9c2l0ZQ%3d%3d#AN=deakin.b3649851&db=cat00097a'},
  {'Id': 19, 'Term':"Staging Environment",'Description':'A staging environment is a pre-production environment that closely replicates the production environment, allowing teams to test software, web applications, or changes before deploying them to the live or production environment. This approach ensures software stability, reliability, and reduces downtime risks','reference':'“Traditional Development/Integration/Staging/Production Practice for Software Development,” Disruptive Library Technology Jester, Dec. 04, 2006. https://dltj.org/article/software-development-practice/'},
  {'Id': 20, 'Term':"Deployment frequency",'Description':'Deployment frequency is frequency at which any software organization or a company releases its new versions of their software and to the rate at which a team or organization deploys changes to production.   ','reference':'“Knovel,” app.knovel.com. https://app.knovel.com/hotlink/pdf/rcid:kpSMCCDO02/id:kt0130DYM3/successful-management/application-deployment?kpromoter=federation (accessed Aug. 06, 2023).'},
  {'Id': 21, 'Term':'Docker','Description':'Docker is a PaaS product that uses OS-level virtualization to deliver software in containers, with free and premium tiers. Docker Engine hosts containers, automating application deployment in lightweight containers for efficient isolation.','reference':'Docker, “Docker overview,” Docker Documentation, Apr. 09, 2020. https://docs.docker.com/get-started/overview/'},
  {'Id': 22, 'Term':'Container','Description':'A Docker container image is a lightweight, executable package of software that includes code, runtime, system tools, libraries, and settings for a quick and reliable application transfer.','reference':'Docker, “What is a Container?,” Docker, 2023. https://www.docker.com/resources/what-container/'},
  {'Id': 23, 'Term':'Image','Description':'Docker images are files used to execute code in a Docker container, acting as instructions and starting points. They have multiple layers, speeding up builds, increasing reusability, and decreasing disk use. Once created, a writable layer allows user changes.','reference':'What is a Docker Image? Introduction and use cases,” SearchITOperations. https://www.techtarget.com/searchitoperations/definition/Docker-image'},
  {'Id': 24, 'Term':'Dockerfile','Description':'Building a Docker image is explained in detail in a text file, along with how to install dependencies, set up the environment, and make additional configurations.','reference':'Docker Documentation, Aug. 08, 2019. https://docs.docker.com/engine/reference/builder/'},
  {'Id': 25, 'Term':'Container','Description':'A container is a runnable image instance, accessible via the Docker API or CLI, defined by its image and configuration options, and its state changes upon removal.','reference':'Docker overview,” Docker Documentation, Aug. 22, 2023. https://docs.docker.com/get-started/overview/#containers (accessed Aug. 23, 2023).'},
  {'Id': 26, 'Term':'Registry','Description':'An archive for distributing and keeping Docker images. A well-known public registry is Docker Hub, and secure image storage can also be achieved through the creation of private registries.','reference':'Docker Registry,” Docker Documentation, Apr. 23, 2021. https://docs.docker.com/registry/'},
  {'Id': 27, 'Term':'Repository','Description':'Docker Registry is a server-side application that stores and manages Docker images, serving as a central hub for sharing and distributing them, particularly Docker Hub','reference':'Create repositories,” Docker Documentation, Aug. 22, 2023. https://docs.docker.com/docker-hub/repos/create/ (accessed Aug. 23, 2023).'},
  {'Id': 28, 'Term':'Docker build','Description':'The docker build command generates a Docker image from a specified Dockerfile, with options like -t, build-arg, or -f, and a build context specified by PATH | URL.','reference':'S. James, “Docker Build: A Beginner’s Guide to Building Docker Images,” Stackify, Jul. 12, 2019. https://stackify.com/docker-build-a-beginners-guide-to-building-docker-images/'},
  {'Id': 29, 'Term':'Docker Run','Description':'The docker run command creates a new container from a Docker image, allowing configuration and management options like detaching, publishing, name, environment variables, volume mount, network connection, and interactive session start.','reference':'S. James, “Docker Build: A Beginner’s Guide to Building Docker Images,” Stackify, Jul. 12, 2019. https://stackify.com/docker-build-a-beginners-guide-to-building-docker-images/'},
  {'Id': 30, 'Term':'Docker Compose','Description':'Compose is a Docker tool that defines and runs multi-container applications using a YAML file, managing application lifecycle, service status, and variables across various environments.','reference':'Docker, “Overview of Docker Compose,” Docker Documentation, Feb. 10, 2020. https://docs.docker.com/compose/'},
  {'Id': 31, 'Term':'RabbitMQ','Description':'RabbitMQ is a message-queueing software, also known as a message broker or queue manager, that defines queues for applications to connect and transfer messages.','reference':'“Part 1: RabbitMQ for beginners - What is RabbitMQ? - CloudAMQP,” www.cloudamqp.com. https://www.cloudamqp.com/blog/part1-rabbitmq-for-beginners-what-is-rabbitmq.html'},
  {'Id': 32, 'Term':'Bootstrapping','Description':'Bootstrapping is the initial setup of a system or environment, used in software development, system administration, business, project setup, server provisioning, and financial model estimation.','reference':'A. Zola, “What is Bootstrap? - Definition from WhatIs.com,” WhatIs.com, Aug. 2022. https://www.techtarget.com/whatis/definition/bootstrap'},
  {'Id': 33, 'Term':'Azure CLI','Description':'Azure CLI is a Microsoft command-line tool for managing Azure resources and services, offering interactive modes, RBAC compliance, and the ability to switch b','reference':'dbradish-microsoft, “What is the Azure CLI?,” learn.microsoft.com, Aug. 02, 2023. https://learn.microsoft.com/en-us/cli/azure/what-is-azure-cli (accessed Sep. 10, 2023).'},
  {'Id': 34, 'Term':'terraform','Description':'Terraform is an open-source tool that configures cloud-based applications infrastructure using Azure, AWS, and Google Cloud. Users can create their own providers and automate infrastructure deployments, enhancing the platforms capabilities.', 'reference':'Hashicorp, “What is Terraform | Terraform | HashiCorp Developer,” What is Terraform | Terraform | HashiCorp Developer. https://developer.hashicorp.com/terraform/intro'},
  {'Id': 35, 'Term':'terraform init','Description':'Terraform init is a Terraform command that initializes a projects configuration, including plugin download, provider initialization, backend initialization, module installation, and state initialization. It validates provider configurations, initializes backends, downloads modules, and prepares state management for remote state management.','reference':'Hashicorp, “What is Terraform | Terraform | HashiCorp Developer,” What is Terraform | Terraform | HashiCorp Developer. https://developer.hashicorp.com/terraform/intro'},
  {'Id': 36, 'Term':'terraform plan','Description':'The Terraform plan command in Terraform is a crucial IaC tool that generates an execution plan for proposed changes. It initializes the project, analyzes configuration files, and generates an execution plan listing changes to the infrastructure. The plan is displayed on the console but not applied.','reference':'Hashicorp, “What is Terraform | Terraform | HashiCorp Developer,” What is Terraform | Terraform | HashiCorp Developer. https://developer.hashicorp.com/terraform/intro'},
  {'Id': 37, 'Term':'terraform apply','Description':'Terraform apply is a crucial command for creating, updating, or deleting resources in your infrastructure. It is executed after initializing the project, reviewing the execution plan, and displaying a summary of changes. However, caution is advised, especially in production environments, as it can make changes.','reference':'Hashicorp, “What is Terraform | Terraform | HashiCorp Developer,” What is Terraform | Terraform | HashiCorp Developer. https://developer.hashicorp.com/terraform/intro'},
  {'Id': 38, 'Term':'kubernetes','Description':'Kubernetes is an open-source container orchestration platform that automates application deployment, scaling, management, and monitoring, utilizing pods for pod management and persistent storage solutions.','reference':'“Overview,” Kubernetes. https://kubernetes.io/docs/concepts/overview/'},
  {'Id': 39, 'Term':'kubectl','Description':'Kubectl is a command-line tool for managing Kubernetes resources, enabling tasks like pod creation, scaling, and configuration management, essential for developers, testing, and production management.','reference':'“Command line tool (kubectl),” Kubernetes. https://kubernetes.io/docs/reference/kubectl/'},
  {'Id': 40, 'Term':'node','Description':'Kubernetes indirectly manages nodes through the Kubernetes control plane and resources, but kubectl and other resources can be used for node-related tasks like viewing and displaying details.','reference':'“Nodes,” Kubernetes. https://kubernetes.io/docs/concepts/architecture/nodes/'}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 Devops Glossary', sub:'Welcome to mywebsite showing a collection of Devops terms and their brief description', names:nameList});
});

module.exports = router;
