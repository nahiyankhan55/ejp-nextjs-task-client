# E.martBD Client

## Project Overview

**E.martBD** is an e-commerce platform built with **Next.js**, offering a fast and secure shopping experience with user authentication and protected routes.

---

## Features

- **Authentication**: Email/password login & Google OAuth
- **Protected Pages**: `/add` and `/manage` accessible only to logged-in users
- **Filter & Search**: Filtering and Searching products in all products page
- **Secure Sessions**: JWT-based session handling via NextAuth
- **Client-side Guard**: Redirects unauthenticated users
- **Responsive UI**: Built with Tailwind CSS

---

## Links

- **Live Site:** [https://ejp-nextjs-emartbd-client.vercel.app/](https://ejp-nextjs-emartbd-client.vercel.app/)
- **Client Repository:** [https://github.com/nahiyankhan55/ejp-nextjs-task-client](https://github.com/nahiyankhan55/ejp-nextjs-task-client)
- **Server Repository:** [https://github.com/nahiyankhan55/ejp-nextjs-task-server](https://github.com/nahiyankhan55/ejp-nextjs-task-server)

---

## Dependencies

```json
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@mui/material": "^7.3.5",
    "aos": "^2.3.4",
    "dotenv": "^17.2.3",
    "next": "16.0.3",
    "next-auth": "^4.24.13",
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "react-fast-marquee": "^1.6.5",
    "react-icons": "^5.5.0",
    "react-toastify": "^11.0.5",
    "sweetalert2": "^11.26.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.0.3",
    "tailwindcss": "^4"
  }
```

---

## Routing Overview

The app uses **Next.js built-in routing** and **protected routes** with **NextAuth**:

- **Public Routes**:

  - `/` → Home page
  - `/login` → Login page

- **Protected Routes** (require authentication):

  - `/add` → Add new products
  - `/manage` → Manage products and listings

### How It Works

- **Server-side protection**: Uses `getToken` from `next-auth/jwt` in a middleware/proxy to check if a user is logged in. Unauthenticated users are redirected to `/login` or `/`.
- **Client-side protection**: Uses `useSession` to check if a user is signed in and redirects if not.
- **Dynamic Routing**: Can be used for product details or editing pages (e.g., `/product/[id]`).

---

## Setup

1. Clone the repo:

```bash
git clone <your-repo-url>
cd ejp_nextjs_emartbd_client
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```
GOOGLE_PROVIDER_ID=<your-google-client-id>
GOOGLE_PROVIDER_SECRET=<your-google-client-secret>
NEXTAUTH_URL=http://localhost:5173
SECRET=<your-secret-key>
```

4. Run locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Thank You for visiting this Repo!
