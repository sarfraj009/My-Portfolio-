# Sarapharaj Ansari – Personal Portfolio Website

A modern, premium, and fully responsive developer portfolio built for **Sarapharaj Ansari**, Computer Science & Engineering undergraduate at Bansal Institute of Engineering & Technology, Lucknow (Class of 2027) and Full Stack Web Developer.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom High-Res SVGs
- **Interactive Effects**: Canvas Confetti, CSS Glassmorphism, Cursor Spotlight, Gradient Masks
- **Typography**: Google Fonts (Plus Jakarta Sans & JetBrains Mono)

---

## ✨ Features & Sections

1. **Navbar**:
   - Sticky frosted glass header (`backdrop-blur-md`) with scroll progress indicator.
   - Dynamic active section highlighting on scroll.
   - Dark / Light mode toggle with anti-FOUC initialization and `localStorage` persistence.
   - Mobile hamburger menu drawer with smooth slide-in animations.

2. **Hero Section**:
   - Availability badge: *"Open to Internship & Full-Time Opportunities"* with pulsing status indicator.
   - Interactive typing effect cycling through professional roles.
   - Quick action CTAs: *View Projects*, *Contact Me*.
   - Interactive Developer Code Terminal with multi-tab syntax inspection (`developer.js`, `stack.json`, `metrics`) and one-click snippet copying.

3. **About Me**:
   - Honest academic profile as a 3rd-year B.Tech CSE student at Bansal Institute of Engineering & Technology, Lucknow.
   - 4 key metrics cards (Projects Completed, MERN Specialization, AI/ML Solutions, 2027 Graduation).
   - Core engineering pillars: Full Stack Engineering, AI/ML, Real-World Problem Solving, and Continuous Learning.

4. **Skills & Competencies**:
   - Categorized cards: *Frontend*, *Backend*, *Database*, *Programming Languages*, *AI/ML*, and *Developer Tools*.
   - Interactive category tabs and real-time live search filter.
   - Verified proficiency badges without misleading fake percentage bars.

5. **Featured Projects**:
   - Multi-category filter: *All Projects*, *MERN Stack*, *AI & Machine Learning*.
   - **Eventora**: Event ticketing platform with Razorpay checkout and QR verification.
   - **RealState Platform**: Real estate portal with Cloudinary media CDN and dual buyer/seller workflows.
   - **AI-Based E-Commerce Platform**: Storefront with AI-driven recommendation engine and Stripe checkout.
   - **House Price Prediction**: Supervised regression model deployed with Streamlit.
   - **Spam Email Detection**: NLP text classification pipeline with TF-IDF and Naive Bayes.
   - **Driver Drowsiness Detection**: Real-time OpenCV computer vision tracking Eye Aspect Ratio (EAR) with audio alerts.
   - High-tech SVG preview cards guaranteeing zero broken image links.
   - Rich **Project Details Modal** (`<dialog>` light-dismiss compliant) detailing architecture, key features, and source repositories.

6. **Experience / Journey Timeline**:
   - Authentic, truthful milestone timeline highlighting academic rigor, project architectures, and open source development.

7. **Education**:
   - B.Tech in CSE at Bansal Institute of Engineering & Technology, Lucknow (2023–2027).
   - Coursework highlights in Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, and OOP.

8. **Certifications**:
   - Accreditations in MERN Stack, Python for ML, Postman API Fundamentals, and Algorithmic Problem Solving with credential IDs and verify links.

9. **GitHub Activity**:
   - Live & fallback profile metrics, public repo highlights, and an interactive contribution heatmap visualization.

10. **Resume Section**:
    - Direct PDF download (`Sarapharaj_Ansari_Resume.pdf`).
    - Interactive in-app resume modal preview and external new tab view.
    - Verified education at AKTU Lucknow (Cumulative 74% through 6th sem), MERN Stack Developer Trainee training, and Java skillsets.

11. **Contact Section**:
    - Direct phone connection (`9682920950`).
    - Validated contact form with interactive loading and confetti celebration on submit.
    - Direct contact info cards with instant copy-to-clipboard for email (`sarfraj07202@gmail.com`).

12. **Footer**:
    - Designed & Built by Sarapharaj Ansari, quick navigation links, social channels, copyright 2026, and smooth scroll-to-top button.

---

## 🛠️ Project Structure

```
my-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── About.jsx
│   │   ├── BackgroundEffect.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── GitHub.jsx
│   │   ├── Hero.jsx
│   │   ├── Icons.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── ProjectPreviews.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolioData.js  # Centralized editable data file
│   ├── App.jsx             # Main application orchestrator
│   ├── index.css           # Tailwind CSS v4 & custom glassmorphism styles
│   └── main.jsx            # Application entrypoint
├── index.html              # SEO meta tags, Google Fonts, anti-FOUC script
├── vite.config.js          # Vite configuration with Tailwind CSS v4
└── package.json            # Project dependencies & scripts
```

---

## 💻 Development & Build

### Running Locally:
```bash
npm run dev
```
The dev server runs at `http://localhost:5173/`.

### Production Build:
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### Preview Production Build:
```bash
npm run preview
```

---

## 📝 Customization

All personal information, project descriptions, skills, credentials, and links are neatly organized in:
👉 [`src/data/portfolioData.js`](file:///c:/Users/pc/Desktop/My%20Portfolio/src/data/portfolioData.js)
