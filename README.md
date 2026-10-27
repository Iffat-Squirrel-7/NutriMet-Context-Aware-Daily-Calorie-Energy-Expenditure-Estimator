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
