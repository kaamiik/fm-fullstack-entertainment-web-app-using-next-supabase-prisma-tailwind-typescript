# Frontend Mentor - Entertainment web app solution

This is a solution to the [Entertainment web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate between Home, Movies, TV Series, and Bookmarked Shows pages
- Add/Remove bookmarks from all movies and TV series
- Search for relevant shows on all pages
- **Bonus**: Build this project as a full-stack application
- **Bonus**: If you're building a full-stack app, we provide authentication screen (sign-up/login) designs if you'd like to create an auth flow

### Screenshot

![](./Screenshot.png)

### Links

- Solution URL: [Github](https://github.com/kaamiik/fm-fullstack-entertainment-web-app-using-next-supabase-prisma-tailwind-typescript)
- Live Site URL: [Vercel](https://fullstack-entertainment-web-app-kiaaka-o6vgrpgiu.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties 
- Accessibility
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [TailwindCSS](https://tailwindcss.com/) - For styles
- [Supabase](https://supabase.com/) - PostgreSQL database
- [Prisma](https://www.prisma.io/) - Database ORM


### What I learned

This challenge was an excellent opportunity to build a complete full-stack application from scratch. Here are the key things I learned:

**Authentication & Security:**
- Built a custom authentication system without relying on third-party libraries
- Implemented secure session management using JWT tokens with the `jose` library
- Created proper authentication flow including sign-up, login, and logout functionality
- Used `bcryptjs` for secure password hashing with salt rounds
- Implemented middleware to protect routes and handle authorization
- Learned about session persistence and cookie management with Next.js

**Database & Backend:**
- Set up and configured Supabase as my PostgreSQL database
- Used Prisma as an ORM to interact with the database efficiently
- Designed a relational database schema with proper foreign keys
- Created models for Users, Media, Bookmarks, and Sessions
- Implemented database seeding to populate initial media data
- Learned to handle complex queries with Prisma's include and where clauses

**Server Actions & Data Fetching:**
- Used Next.js Server Actions for form submissions and mutations
- Implemented server-side data fetching with React Server Components
- Created reusable data access layer (DAL) functions with React.cache for performance
- Handled optimistic updates for bookmarking with `useOptimistic` hook
- Learned proper error handling and validation with Zod schemas

**Frontend Development:**
- Built accessible components using proper semantic HTML and ARIA labels
- Implemented responsive images with Next.js Image component and custom responsive picture component
- Created complex layouts with CSS Grid including overlapping elements for media thumbnails
- Used React Hook Form with Zod validation for form management
- Implemented debounced search functionality to reduce unnecessary API calls
- Built interactive components like bookmark toggles with loading states

**Styling:**
- Worked with Tailwind CSS v4 and custom CSS properties
- Created custom scrollbar styles for horizontal scrolling sections
- Implemented hover and focus states for better accessibility
- Built loading indicators with animated dots for async operations
- Used proper focus management and keyboard navigation

### Continued development

**Authentication & User Management:**
- Explore authentication libraries like **Better Auth** or **NextAuth** to compare with custom implementation
- Add user profile pages with customizable settings
- Implement password reset and email verification features
- Add social authentication options (Google, GitHub)

**Features & Functionality:**
- Create user watchlists and viewing history
- Add rating and review system for media
- Implement advanced filtering options (by genre, year, rating)
- Add pagination or infinite scroll for better performance with large datasets





## Author

- Frontend Mentor - [@kaamiik](https://www.frontendmentor.io/profile/yourusername)
- X - [@kiaakamran](https://www.x.com/yourusername)

