##TechNotes - 
TechNotes is a full-stack task and notes management application built on the MERN stack, designed around real-world team workflows: role-based access, secure authentication, and a responsive interface.

##Tech Stack -
Backend: Node.js, Express 5, MongoDB (Atlas), Mongoose

Frontend: React, Redux Toolkit, RTK Query

Auth: JWT-based access/refresh token flow with httpOnly cookies

Deployment: Render.com

##Key Features -
1.JWT authentication with short-lived access tokens and refresh token rotation for persistent, secure sessions

2.Role-based access control enforced at both the API and UI layer

3.RTK Query for normalized caching, automatic re-fetching, and optimistic updates — no manual loading-state juggling

4.RESTful API with clean separation of concerns (controllers, models, routes, middleware)

5.Centralized error handling and request logging for easier debugging in production

6.Fully responsive UI

##Architecture Notes -
Backend follows MVC with Mongoose enforcing schema-level data integrity. Frontend uses RTK Query for all server-state management, keeping components focused on UI rather than data-fetching logic. Protected routes are handled client-side, synced with the refresh token cycle.

##Why This Project -
TechNotes was built to go beyond tutorial-level CRUD apps — it tackles the harder, less glamorous parts of full-stack development: token refresh edge cases, role permission boundaries, schema relationships across collections, and deploying a two-service (client + server) app to a single host.
