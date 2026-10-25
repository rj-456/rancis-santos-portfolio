# Rancis Jungco Santos — Developer Portfolio Website

A high-performance, single-page interactive developer portfolio website built for **Rancis Jungco Santos**, Information Technology Intern and Full-Stack Developer.

Built with a **Modern Neo-Editorial Tech** aesthetic inspired by high-density, polished analytics applications (including [Kanyamanan](https://kanyamanan-pampanga.vercel.app/)), with clean typographic hierarchy, micro-borders, frosted glassmorphism, dynamic animations, and seamless dark/light mode toggling.

---

## Key Features & Architecture

### 1. Sticky Dynamic Navigation Bar
- **Brand Emblem:** `RJS.dev` with live pulsing status badge: `Available for OJT / Internship`.
- **Quick Links:** Smooth scrolling to `#capstone`, `#projects`, `#skills`, `#credentials`, `#experience`, and `#contact`.
- **Actions:** Quick "Resume (PDF)" executive view trigger and effortless Dark / Light mode toggle.
- **Top Scroll Progress Indicator:** Real-time reading progress bar with subtle gradient accent.

### 2. Hero Section: Impact & Value Proposition
- Punchy headline and bio tailored for high-impact On-the-Job Training (OJT).
- **Interactive Stats Counter Grid:**
  - `6+` Production & Academic Systems Built
  - `3` Industry Credentials (AWS, Cisco, Pearson)
  - `100%` Cloud-Ready & Responsive Focus
  - `0%` Error Rate in ElGamal BigInt Cryptographic Engine
- Direct contact badges, social links, and 1-click email copy action.

### 3. Flagship Capstone Spotlight (Kanyamanan)
- Elevated hero card for [Kanyamanan — Smart Culinary Itinerary & Aggregator System](https://kanyamanan-pampanga.vercel.app/).
- **Interactive 3-Tab Sub-System Simulator:**
  - **Itinerary Route Optimizer:** Interactive waypoint simulation along the McArthur Highway corridor (Angeles City, San Fernando, Guagua) with ETA, distance calculations, and traffic status.
  - **AI Food Scanner:** Simulates Groq Vision and Gemini API food recognition with sample dishes (*Authentic Kapampangan Sisig*, *Tibok-Tibok*, *Traditional Kare-Kare*), displaying confidence percentages, detected ingredients taxonomy, allergens, and cultural food origin notes.
  - **MSME Review Center:** Demonstrates the local food merchant vetting pipeline, provincial sanitary grading (98/100 Grade A), and DTI accreditation checks.

### 4. Filterable Project Catalog & Architecture Deep-Dive
- Real-time search bar & category filter tabs (`All`, `Full-Stack`, `Cloud & AI`, `Mobile & Systems`).
- Real-world production & academic systems:
  1. **UA CIT Office Feedback Survey with ElGamal Encryption:** Custom JavaScript BigInt asymmetric encryption eliminating floating-point errors to preserve student anonymity.
  2. **Wallet Watcher:** Personal finance tracking suite with Django REST Framework backend and React Native mobile UI.
  3. **Nursing Student Council Platform:** High-reliability centralized campus notice board with Role-Based Access Control (RBAC).
  4. **PC Builder Compatibility & Wattage Engine:** Algorithmic client-side hardware compatibility verification & wattage calculations.
  5. **Municipality Clinic Appointment Portal:** Atomic relational database scheduling preventing double-booking and queue collisions.
- **Architecture Deep-Dive Modal:** Clicking any project opens detailed technical specifications, system architecture data flows, key engineering challenges, and source links.

### 5. Interactive Skills & Architecture Matrix
- 4-column matrix with confidence badges (`Production`, `Proficient`, `Certified`):
  - **Frontend & UI/UX:** React, Next.js, React Native, Vite, Tailwind CSS, Material UI, Figma.
  - **Backend & APIs:** Django, Django REST Framework, Node.js, Express, Python 3, PHP, RESTful APIs, JWT.
  - **Databases & Cloud:** PostgreSQL, MongoDB, SQLite, Firebase, AWS (EC2, S3), Vercel, Render.
  - **Networking & Security:** Cisco Packet Tracer, Subnetting (IPv4/IPv6), ElGamal Cryptography, BigInt, OWASP.

### 6. Verified Credentials & Academic Journey
- Verified showcase cards for:
  - **AWS Academy Graduate – Cloud Foundations** (Credly verified)
  - **Information Technology Specialist: Databases** (Certiport Pearson VUE ID: `JwY3-4wUQ`)
  - **CCNA: Introduction to Networks** (Cisco Networking Academy)
- Academic timeline covering 4th year BSIT studies at the **University of the Assumption** and research leadership honors in Senior High School (ABM).

### 7. Interactive Contact & "Quick Connect" Drawer
- 1-click **Copy Email to Clipboard** (`rancisjsantos@gmail.com`) with animated toast notification.
- Direct phone call link (`+63 934-411-6761`) and direct `mailto:` launcher.
- Interactive inquiry form with live validation and character counters.

### 8. Interactive Resume Studio & Printable CV
- Click **Resume (PDF)** in the navigation or footer to open an interactive, live-editable version of Rancis's CV directly inside the website modal.
- Includes a 2x2 photo slot, photo frame toggle, compact 1-page fit spacing toggle, and one-click `window.print()` functionality to save as PDF.
- A standalone dedicated version is also available directly at `http://localhost:3000/resume.html`.

---

## Running Locally

The project includes a lightweight, zero-dependency Node.js HTTP server.

```bash
# Start the local development server
npm start
# or
node server.js
```

Then visit:
```
http://localhost:3000/
http://localhost:3000/resume.html
```

---

## Deploying to Vercel / Netlify / GitHub Pages

Because the project is built with standard semantic HTML5, modern Tailwind CSS, and vanilla JavaScript without complex build dependencies, it can be deployed immediately:

- **Vercel / Netlify:** Simply push this repository to GitHub and connect it to Vercel or Netlify. The root directory will be served automatically.
- **GitHub Pages:** Go to your repository settings > Pages > Branch: `main` / Folder: `/ (root)`.

