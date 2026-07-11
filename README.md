TechNotes — Frontend 
TechNotes is a full-stack task and notes management application built on the MERN stack, designed around real-world team workflows: role-based access, secure authentication, and a responsive interface.

Tech Stack:
Framework: React
State Management: Redux Toolkit
Data Fetching/Caching: RTK Query
Auth (client-side): JWT access token handling with httpOnly cookie–based refresh flow
Deployment: Render.com

Key Features:
1.RTK Query for all server-state management — normalized caching, automatic re-fetching, and optimistic updates, with no manual loading-state juggling.

2.Client-side protected routes, synced with the refresh token cycle to keep sessions persistent and secure.

3.Role-based UI rendering — components and routes adapt based on user permissions, enforced alongside API-level checks
Fully responsive UI across devices.

4.Clean component architecture — UI components stay focused on presentation, with all data-fetching logic abstracted into RTK Query hooks.

Architecture Notes:
The frontend keeps components decoupled from data-fetching concerns by centralizing all server-state management in RTK Query. Protected routes are handled client-side and kept in sync with the access/refresh token cycle managed by the backend, so session expiry and renewal happen transparently to the user.

Why This Project:
TechNotes was built to go beyond tutorial-level CRUD apps. On the frontend specifically, that meant handling token refresh edge cases gracefully in the UI, enforcing role-based permission boundaries without duplicating backend logic, and keeping the client resilient while working against a two-service (client + server) deployment.



Folder structure:
TechNotes/                    # React Client Application(FRONTEND)

├── public/                   # Static browser assets (favicon, index.html)

├── src/                      # Application source code

│   ├── components/           # Reusable, shared UI components

│   ├── config/               # App-level configuration (roles, constants, etc.)

│   ├── features/             # Feature-based modules (Redux slices, RTK Query API slices)

│   ├── hooks/                # Custom React hooks

│   ├── img/                  # Image assets

│   ├── App.css               # Global app styles

│   ├── App.js                # Main React component & layout

│   ├── App.test.js           # App-level test

│   ├── index.css             # Root stylesheet

│   ├── index.js              # React DOM entry point

│   └── setupTests.js         # Test environment setup (Jest/RTL)


├── .env                      # Frontend local environment variables

├── .gitignore                # Git exclusion rules (includes node_modules/)

├── package.json              # Frontend dependencies and scripts

├── package-lock.json         # Locked dependency versions

└── README.md                 # Project documentation
