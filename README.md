# NutriMet-Context-Aware-Daily-Calorie-Energy-Expenditure-Estimator
\documentclass[12pt]{article}
\usepackage[utf8]{utf8}
\usepackage{graphicx}
\usepackage{hyperref}
\usepackage{booktabs}
\usepackage{array}
\usepackage{geometry}
\geometry{margin=1in}

\title{\textbf{NutriMet: Context-Aware Daily Calorie \& Energy Expenditure Estimator}\\ \large Final Capstone Project Proposal}
\author{Course Capstone Submission}
\date{\today}

\begin{document}

\maketitle
\tableofcontents
\newpage

\section{Problem and Proposed Solution}
Standard calorie estimation models rely solely on static basal metabolic rate (BMR) formulas and basic activity multipliers, ignoring environmental stress variables. Extreme ambient temperatures affect human metabolic rates and baseline calorie expenditure, making static predictions inaccurate for users operating in varying climates. 

NutriMet proposes a context-aware approach that factors in live environmental metrics alongside biometric data and physical activity tracking to dynamically adjust energy expenditure estimations.

\section{Objectives}
\begin{itemize}
    \item Define the system requirements for both regular users and health administrators.
    \item Design the core system workflows, data structures, and database schema prior to full-scale development.
    \item Provide the six required diagram types: DFD (Context \& Level 1), Use Case Diagram, Activity Diagram, Entity Relationship Diagram (ERD), Class Diagram, and Object Diagram.
    \item Demonstrate the planned user interface using an interactive front-end prototype mapped to core classes.
    \item Establish a manageable six-week development schedule using the Incremental Model.
    \item Prepare a structured foundation for future backend integration and deployment.
\end{itemize}

\section{Scope and Main Features}
\subsection{User Features (Planned)}
\begin{itemize}
    \item Account registration and authentication.
    \item Management of physical biometrics (age, height, weight, gender).
    \item Daily physical activity logging (type, duration, intensity).
    \item Automated retrieval of local ambient temperature and environmental context.
    \item Calculation of context-adjusted daily calorie burn and target energy recommendations.
\end{itemize}

\subsection{Administrator Features (Planned)}
\begin{itemize}
    \item User account management and role control.
    \item Adjustment of baseline metabolic formulas and weather adjustment coefficients.
    \item System activity and analytics monitoring.
\end{itemize}

\subsection{Outside the Current Scope}
Direct integration with wearable hardware sensors, live production database persistence, and cloud deployment are outside the current proposal scope and are reserved for subsequent development phases.

\section{User Roles and Core Workflow}
The application supports two primary user roles as outlined in Table \ref{tab:user_roles}.

\begin{table}[h!]
\centering
\caption{User Roles and Responsibilities}
\label{tab:user_roles}
\begin{tabular}{lp{10cm}}
\toprule
\textbf{Role} & \textbf{Responsibilities} \\
\midrule
\textbf{Regular User} & Inputs biometric data, logs physical activities, and views calculated context-aware calorie expenditure. \\
\textbf{Administrator} & Manages user accounts, updates calculation variables, and reviews system logs. \\
\bottomrule
\end{tabular}
\end{table}

\textbf{Workflow Description:} A regular user logs into the system, inputs or updates biometric data, and submits an activity record. The system retrieves ambient environmental metrics and executes context-aware algorithms to compute and display total energy expenditure.

\section{Planned Technology and Architecture}
The software stack and architecture decisions are detailed in Table \ref{tab:tech_stack}.

\begin{table}[h!]
\centering
\caption{Planned Technology Stack}
\label{tab:tech_stack}
\begin{tabular}{lp{10cm}}
\toprule
\textbf{Area} & \textbf{Planned Technology / Approach} \\
\midrule
Programming Language & Java / JavaScript \\
Web Framework & HTML5, CSS3, JavaScript (Front-end Prototype) \\
Persistence & MySQL / Spring Data JPA (Planned) \\
Build Tool & Maven \\
Version Control & Git and GitHub \\
Architecture & Layered Architecture (Controller -- Service -- Repository -- Entity) \\
Development Process & Incremental Process Model (6-Week Lifecycle) \\
\bottomrule
\end{tabular}
\end{table}

\section{Repository Contents}
The directory layout of the accompanying project repository is structured as follows:

\begin{verbatim}
NutriMet/
├── README.md              # Root project overview and documentation
├── diagrams/              # Source code and rendered PNGs for all diagrams
│   ├── activity.png / .puml
│   ├── class_diagram.png / .puml
│   ├── dfd_context.png / .mmd
│   ├── dfd_level1.png / .mmd
│   ├── erd.png / .mmd
│   ├── object_diagram.png / .puml
│   └── use_case.png / .puml
├── proposal/              # LaTeX source and compiled proposal PDF
│   ├── main.tex
│   ├── main.pdf
│   └── references.bib
└── prototype/             # Interactive prototype files
    ├── index.html
    ├── styles.css
    └── script.js
\end{verbatim}

\section{Where the Assignment Requirements Are Addressed}
Table \ref{tab:req_mapping} highlights how each requirement specified in the assignment is fulfilled within this proposal and repository.

\begin{table}[h!]
\centering
\caption{Assignment Requirement Mapping}
\label{tab:req_mapping}
\small
\begin{tabular}{p{4cm}p{4cm}p{6cm}}
\toprule
\textbf{Requirement} & \textbf{Location} & \textbf{Content Summary} \\
\midrule
Project Proposal \& Problem & Section 1 -- 3, PDF Proposal & Context-aware calorie estimation rationale and scope limits. \\
Requirements \& Roles & Section 3 \& 4 & Functional and non-functional specifications and roles. \\
Software Process Model & Section 5 \& 9 & Incremental Development Model description. \\
System Architecture & Section 5 & Layered software architecture details. \\
DFD Diagram & \texttt{diagrams/dfd\_*.png} & Context-level and Level-1 Data Flow Diagrams. \\
Use Case Diagram & \texttt{diagrams/use\_case.png} & Actor interactions and system use cases. \\
Activity Diagram & \texttt{diagrams/activity.png} & Process flow for calorie calculation. \\
ERD Diagram & \texttt{diagrams/erd.png} & Database entities and relationships. \\
Class Diagram & \texttt{diagrams/class\_diagram.png} & Object-oriented domain classes and methods. \\
Object Diagram & \texttt{diagrams/object\_diagram.png} & Instance snapshot of domain objects. \\
UI Prototype (5 Classes) & \texttt{prototype/} folder & Front-end prototype mapped to 5 core classes. \\
Schedule \& Gantt Chart & Section 9 & Six-week project schedule and milestones. \\
\bottomrule
\end{tabular}
\end{table}

\section{UI Prototype and Class Coverage}
To satisfy the prototyping requirement, the prototype implementation maps directly to five core classes defined in the domain model:
\begin{enumerate}
    \item \texttt{User}: Represents account credentials and identity.
    \item \texttt{UserProfile}: Stores biometrics (age, weight, height, gender) and computes BMR.
    \item \texttt{ActivityLog}: Stores activity type and duration to compute baseline exercise burn.
    \item \texttt{WeatherContext}: Captures ambient temperature metrics to derive stress factors.
    \item \texttt{CalorieCalculator}: Executes final multi-variable context calculations.
\end{enumerate}

\section{Planned Development Schedule and Deliverables}
The project follows a 6-week Incremental Model schedule. Key milestones are summarized in Table \ref{tab:milestones}.

\begin{table}[h!]
\centering
\caption{Project Milestones and Schedule}
\label{tab:milestones}
\begin{tabular}{llp{8cm}}
\toprule
\textbf{Milestone} & \textbf{Timeline} & \textbf{Planned Focus} \\
\midrule
\textbf{M1} & Week 1 & Proposal finalization, scope definition, and requirements. \\
\textbf{M2} & Week 2 & Software design, UML diagrams, and database schema creation. \\
\textbf{M3} & Week 3 & Implementation of core calculation engine and BMR logic. \\
\textbf{M4} & Week 4 & Weather API integration and physical activity logging module. \\
\textbf{M5} & Week 5 & UI integration with calculation logic and state management. \\
\textbf{M6} & Week 6 & Comprehensive testing, report preparation, and final delivery. \\
\bottomrule
\end{tabular}
\end{table}

\section{Building or Editing the Proposal}
\subsection{Overleaf Compilation}
\begin{enumerate}
    \item Upload the project source files maintaining the folder structure (\texttt{proposal/} and \texttt{diagrams/}).
    \item Set \texttt{proposal/main.tex} as the root document.
    \item Compile using the pdfLaTeX engine.
\end{enumerate}

\subsection{Local Compilation}
Execute the following commands in a terminal with TeX Live or MiKTeX installed:
\begin{verbatim}
cd proposal
pdflatex main.tex
\end{verbatim}

\section{Viewing or Regenerating Diagrams}
All system diagrams are provided as both editable source code and pre-rendered high-resolution images in the \texttt{diagrams/} directory:
\begin{itemize}
    \item \textbf{Mermaid diagrams (\texttt{.mmd}):} Can be rendered using the Mermaid Live Editor (\url{https://mermaid.live}).
    \item \textbf{PlantUML diagrams (\texttt{.puml}):} Can be edited and compiled using standard PlantUML extensions or the online server (\url{http://www.plantuml.com/plantuml/}).
\end{itemize}

\section{Important Implementation Note}
The proposal, diagrams, and prototype code included in this repository demonstrate the planned system design and fulfill the submission requirements for Part I of the Capstone Project. Production persistence and live backend infrastructure will be integrated in subsequent project phases.

\end{document}
