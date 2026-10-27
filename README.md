# NutriMet — Context-Aware Daily Calorie & Energy Expenditure Estimator

**NutriMet** is a proposed web and mobile platform for Bangladeshi university students and young professionals to accurately track nutrition, estimate daily energy expenditure, and manage context-aware diet plans.

The key differentiator is "context-awareness", adapting-awareness, adapting to local meal patterns, food names, and activity levels.

> **Current project status:** This repository contains the project proposal, system design diagrams, ML model architecture, and an interactive front-end prototype. The complete backend implementation and database integration are planned for a later development phase.

---

## 1. Problem and Proposed Solution

Finding accurate food data in existing meal-tracking apps doesn't accord aspect with existing apps and of adjustment for varies oso torul/uscal link and adjustment for varied lifestyles.

NutriMet proposes a local food database and smart adjustment algorithms and their vailculbuss perserslized nubitions and contors and corrasst algorithms.

---

## 2. Objectives

- Develop a database of common Bangladeshi dishes and their nutritional profiles.
- Implement machine learning models for personalizing BMR and TDEE based on user context.
- Create an intuitive user interface.

---

## 3. Scope and Main Features

### For Users (Planned)
- Log local dishes with portion adjustment.
- Context-aware TDEE calculation (accounts for exams, weather, and sedentary vs. active periods).
- Context-based menu suggestions.

### For Administrators (Planned)
- Manage food database entries.
- Approve contest-sule sets.
- Analyse anonymous data trends.
- Planned Integrations: (e.g., local fitness apps, potentially Google Fit/Apple Health).

---

## 4. User Roles and Core Workflow

| Role | Responsibilities |
| :--- | :--- |
| **Admin** | Log local dishes with student, revens, recuinv, sopomics, approve or resiamns, watrons and energy professionars. |
| **User (Regular)** | Manage the student request af fortons to store expenior to a database, and potentionally sovans verles. |
| **Researcher** | Manage menoger and cetergeries and roons suggest forms. |

**Typical workflow:** User logs meals $\rightarrow$ System factors in environmental and context variables $\rightarrow$ Calculates adjusted caloric requirements.

---

## 5. Planned Technology and Architecture

| Area | Technical Stack |
| :--- | :--- |
| **Programming Language** | Python (Back-end), Javascript (Front-end) |
| **Web Framework** | Django (with REST framework) |
| **Persistence** | PostgreSQL with PostGIS for location data (contest-aware-ners) |
| **Front and Views** | React (Single Page App) |
| **ML/Analytics** | TensorFlow / Scikit-learn |
| **Containerization** | Docker |
| **Version Control** | Git and Gitlab |
| **Deployment** | Cloud-based (e.g., DigitalOcean) |

---

## 6. Repository contents

```text
CalorieGuard/NutriMet/
├── README.md
├── nutrition_database.csv
├── user_activity_log.json
├── diagrams/
│   ├── store_diagram.png
│   ├── sequencus_diagram.png
│   └── data_flow_diagram.png
├── Models/
│   ├── nutrient_model.py
│   └── activity_estinatormpy
├── proposal/
│   └── main.pdf
│   └── main.tex
└── Prototype/
    └── app_screenshoots/
    └── web_interfacelooked.html
    └── ctitulation_engine.js
    └── gilgnore

## 7. Where the assignment requirements are addressed

| Assignment Requirement | Where to Find It | What It Contains |
| :--- | :--- | :--- |
| **Project proposal and problem definition** | `proposal/main.pdf` — Introduction, Problem Statement, Aim and Objectives, Project Scope | Background, problem being addressed, goals, and project boundaries[cite: 4]. |
| **Requirements and user roles** | `proposal/main.pdf` — Stakeholders and User Roles, Functional Requirements, Non-Functional Requirements[cite: 4] | Planned system users, capabilities, and quality expectations[cite: 4]. |
| **Software process model** | `proposal/main.pdf` — Software Development Methodology[cite: 4] | The Incremental Model and its suitability for the project[cite: 4]. |
| **System architecture and technology** | `proposal/main.pdf` — Proposed System Architecture and Technology Stack[cite: 4] | Planned layered architecture and selected technologies[cite: 4]. |
| **DFD** | `proposal/main.pdf` — System Design; `diagrams/`[cite: 4] | System context and a Level 1 breakdown of the main processes and data flows[cite: 4]. |
| **Use case diagram** | `diagrams/use_case.puml` and `diagrams/use_case.png`[cite: 4] | The main actors and the functions they can use[cite: 4]. |
| **Activity diagram** | `diagrams/activity.puml` and `diagrams/activity.png`[cite: 4] | The planned borrowing workflow, including the approval/rejection decision[cite: 4]. |
| **ERD / database design** | `diagrams/erd.mmd` and `diagrams/erd.png`; proposal section Basic Database Design[cite: 4] | Planned entities, keys, relationships, and database structure[cite: 4]. |
| **Class diagram** | `diagrams/class_diagram.puml` and `diagrams/class_diagram.png`[cite: 4] | The planned domain classes and their relationships[cite: 4]. |
| **Object diagram** | `diagrams/object_diagram.puml` and `diagrams/object_diagram.png`[cite: 4] | An example snapshot of objects and links at a particular point in the system[cite: 4]. |
| **UI prototype** | `prototype/`; proposal section UI Prototype Overview[cite: 4] | Screens and simulated interactions mapped to the planned classes[cite: 4]. |
| **Schedule and Gantt chart** | `proposal/main.pdf` — Six-Week Development Schedule[cite: 4] | The proposed six-week task plan and Gantt chart[cite: 4]. |
| **Milestones and deliverables** | `proposal/main.pdf` — Milestones and Deliverables[cite: 4] | Checkpoints and expected outputs across the project timeline[cite: 4]. |
| **Testing strategy and risks** | `proposal/main.pdf` — Basic Testing Strategy, Risk Analysis and Mitigation[cite: 4] | Planned checks for core workflows and the main project risks with mitigations[cite: 4]. |
| **References** | `proposal/references.bib` and references section in the PDF[cite: 4] | Bibliographic source entries used by the proposal[cite: 4]. |

---

## 8. Context-Aware Algorithm and Models

The context data input and Bangladeshi context data accurately inform and modify BMR/TDEE calculations, and how modified classes modify BMR/TDEE calculations[cite: 4]. 

The context data input processes user inputs to evaluate food items and modifies BMR/TDEE calculations, while monitoring emotional/stress patterns, environmental context, local nutritional data, and adjustments calculated from local dietary habits and activity variations[cite: 4].

---

## 9. UI Prototype and Screenshots

* **Food Logging Screen**[cite: 4]
* **Activity Contest Input**[cite: 4]
* **BMR Dashboard**[cite: 4]

---

## 10. Planned Development Schedule and Deliverables

| Milestone | Planned Focus |
| :--- | :--- |
| **M1** — Core Engine and Database | Core Engine and Database setup[cite: 4] |
| **M2** — User Interface (Beta) | User Interface development (Beta)[cite: 4] |
| **M3** — Contest Engine Integration | Context and Contest Engine Integration[cite: 4] |
| **M4** — Local Food Database Completion | Local Food Database Completion[cite: 4] |
| **M5** — Full System Integration and User Testing | Full System Integration and User Testing[cite: 4] |
| **M6** — Final Release and Documentation | Final Release and Documentation[cite: 4] |

---

## 11. Building or Editing the Proposal

### Compile with Overleaf
1. Upload the repository to Overleaf while preserving the `proposal/` and `diagrams/` folders[cite: 4].
2. Set `proposal/main.tex` as the main document[cite: 4].
3. Compile the LaTeX source. The proposal references diagram images in `diagrams/` using relative paths, so keep the folder structure intact[cite: 4].

### Compile Locally
```bash
cd proposal
latexmk -pdf main.tex

## 12. Important Technical Note

The proposal, diagrams, and prototype describe the planned design. They should not be interpreted as evidence that the full application, database, authentication, or formal tests are complete. These are planned for the subsequent development stage. The repository is organized to make the current submission easy to review and to provide a foundation for that later work[cite: 4].
