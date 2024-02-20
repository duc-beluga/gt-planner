# [GT Planner](https://gt-planner.onrender.com/)

GT Planner is a website that provides students with a visual roadmap of their academic journey, making course planning clear and simple.

## Technologies

### Frontend

- **Languages:** JavaScript (TypeScript)
- **Frameworks:** React.js (Vite)
- **UI Components:** DaisyUI, TailwindCSS
- **Icons:** Lucide Icons
- **Data Fetching:** Axios, react-query
- **Form Validation:** react-hook-form, Zod
- **Notifications:** react-hot-toast
- **Graph Visualization:** react-flow

### Backend

- **Languages:** JavaScript (TypeScript)
- **Frameworks:** Express.js
- **Authentication:** JWT, OAuth2
- **Middlewares:** morgan, express-rate-limit, Helmet.js

### Database

- **MongoDB**
- **Redis** (Advanced)

### Host

- **Frontend:** Render
- **Backend:** Render

### Testing

- **APIs:** Postman/Insomnia

## Inspiration

Planning your courses each semester can be tricky. GT Planner makes it easy and clear by showing your academic path with simple visuals, helping you organize and plan your journey smoothly.

## What it does

The website is a fun, interactive space to plan your semesters. Design your academic journey, save it, and tweak it anytime!

![image](https://github.com/duc-beluga/gt-planner/assets/98554622/349dcf78-f09c-42ef-99aa-db33af597670)


## ER Diagram

### User Data Model

- **ID:** unique identifier for each user
- **Username:** user's chosen name
- **Email:** user's email address

### Course Data Model

- **ID:** unique identifier for each course
- **Title:** title of the course
- **Prerequisites:** array of course IDs that are prerequisites for this course

**User Table**

| Field      | Type     | Required |
|------------|----------|----------|
| email      | String   | Yes      |
| savedPlans | Array    | No       |

**SavedPlans Object**

| Field   | Type   | Required |
|---------|--------|----------|
| name    | String | Yes      |
| content | String | Yes      |

**Course Table**

| Field         | Type         | Required |
|---------------|--------------|----------|
| title         | String       | Yes      |
| prerequisites | Array | No       |
| postrequisites | Array | No       |

## Wireframes

- [HomePage] - _Link to HomePage wireframe_
- [NotFoundPage] - _Link to NotFoundPage wireframe_

