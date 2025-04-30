# My React Login App (Hosted on Netlify)

This is a React Single Page Application (SPA) which includes a `/login` route using React Router.  
The app is deployed on Netlify and supports routing with proper fallback configuration.

🔗 Live Site: [https://venerable-medovik-ed7c68.netlify.app](https://venerable-medovik-ed7c68.netlify.app)

---

## ✅ Features
- Built with React
- Used React Router for routing
- Includes a `/login` page
- Hosted on Netlify

---

## ⚠️ Problem Faced

When trying to visit `/login` directly from the browser or refreshing that route, I received a **404 Page Not Found** error from Netlify.

---

## ✅ Solution

This happened because Netlify doesn't support client-side routing by default.  
To fix this, I created a `_redirects` file.

### 🔧 Steps I followed:

1. Inside the `public` folder of my React app, I created a file named `_redirects` (no file extension).
2. Inside `_redirects`, I added the following line:
