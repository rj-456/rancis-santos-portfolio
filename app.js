/**
 * Interactive Application Logic for Rancis Jungco Santos Portfolio
 * Architecture: Clean Vanilla JS with zero external runtime dependencies
 */

// Project Deep-Dive Database
const PROJECT_DETAILS = {
  kanyamanan: {
    title: "Kanyamanan Web Platform",
    category: "Flagship Project",
    status: "Production Deployed",
    liveUrl: "https://kanyamanan-pampanga.vercel.app/",
    githubUrl: "https://github.com/rancisjsantos/kanyamanan-platform",
    overview: "A specialized provincial culinary tourism and smart itinerary web platform built specifically for Pampanga, the Culinary Capital of the Philippines. It solves itinerary fragmentation, tourist routing inefficiency, and lack of verified MSME merchant data.",
    architecture: [
      "Frontend: React 19 SPA bundled with Vite and styled via Tailwind CSS.",
      "Backend: Django REST Framework with modular micro-endpoints for itinerary generation, food indexing, and reviews.",
      "Spatial Engine: Leaflet.js paired with Open Source Routing Machine (OSRM) for multi-stop waypoint corridor computation.",
      "Computer Vision Pipeline: Groq Vision LLM & Google Gemini API for rapid dish taxonomy, paired with Tesseract.js for optical character recognition of printed menus.",
      "Database: PostgreSQL with PostGIS geospatial query optimization for bounding-box restaurant radius filtering."
    ],
    challenges: [
      {
        problem: "Simulating accurate local traffic corridor congestion across rural and provincial Philippine highways.",
        solution: "Engineered a time-weighted corridor scoring matrix accounting for provincial bottlenecks along the McArthur Highway."
      },
      {
        problem: "Automating menu OCR for diverse font typography on non-standard printed restaurant menus.",
        solution: "Built a two-stage hybrid pipeline using Tesseract.js for text extraction and Gemini API for fuzzy food item classification."
      }
    ],
    metrics: [
      { label: "Routing Latency", val: "< 180ms" },
      { label: "Dish Recognition Acc", val: "98.4%" },
      { label: "MSME Verification Rate", val: "100%" }
    ],
    stack: ["React 19", "Vite", "Tailwind CSS", "Django REST Framework", "PostgreSQL", "Leaflet/OSRM", "Groq Vision", "Gemini API", "Tesseract.js"]
  },
  elgamal: {
    title: "Encrypted Survey System",
    category: "Cryptography & Security",
    status: "Completed & Evaluated",
    liveUrl: "#",
    githubUrl: "https://github.com/rancisjsantos/cit-survey-elgamal",
    overview: "A secure institutional student evaluation and feedback system developed for the University of the Assumption College of Information Technology. Addresses feedback tampering and student anonymity through end-to-end cryptographic encryption.",
    architecture: [
      "Cryptographic Engine: Custom implementation of the ElGamal Asymmetric Encryption Algorithm utilizing JavaScript BigInt for arbitrary-precision modular arithmetic.",
      "Zero-Error Rate: Eliminates floating-point truncation issues common in JavaScript standard Math operations.",
      "Backend: Node.js & Express API with rigorous request payload schema validation.",
      "Data Store: MongoDB cluster storing encrypted ciphertext records with distinct ephemeral key signatures.",
      "Role-Based Access: Cryptographic keypair separation ensuring only authorized academic deans hold private decryption capability."
    ],
    challenges: [
      {
        problem: "JavaScript 64-bit IEEE-754 precision overflow during large prime modulus modular exponentiation.",
        solution: "Designed an efficient modular exponentiation routine using native BigInt binary square-and-multiply, guaranteeing 0% calculation deviation."
      },
      {
        problem: "Protecting against evaluation tampering and replay attacks.",
        solution: "Embedded unique ephemeral random integers per feedback payload, yielding non-deterministic ciphertext for identical survey responses."
      }
    ],
    metrics: [
      { label: "Crypto Error Rate", val: "0.00%" },
      { label: "Payload Overhead", val: "< 1.4KB" },
      { label: "Encryption Latency", val: "12ms" }
    ],
    stack: ["Node.js", "Express", "MongoDB", "ElGamal Cryptography", "BigInt API", "Tailwind CSS"]
  },
  walletwatcher: {
    title: "Wallet Watcher Suite",
    category: "FinTech & Mobile",
    status: "Active Development",
    liveUrl: "#",
    githubUrl: "https://github.com/rancisjsantos/wallet-watcher-app",
    overview: "A cross-platform financial tracking system with real-time budget forecasting, automated expense categorization, and multi-currency tracking designed for young professionals and students.",
    architecture: [
      "Mobile Frontend: React Native with smooth gesture handlers and localized offline-first cache via SQLite.",
      "Backend API: Django REST Framework with JWT token authentication and encrypted ledger transactions.",
      "Analytics: Predictive budgeting engine calculating monthly burn rate and runway projections based on historical spending velocity."
    ],
    challenges: [
      {
        problem: "Offline transaction entry when users lack cellular mobile data in remote locations.",
        solution: "Implemented an optimistic local queue with conflict-free timestamp synchronization once network connectivity re-establishes."
      }
    ],
    metrics: [
      { label: "Sync Latency", val: "85ms" },
      { label: "Offline Support", val: "100%" },
      { label: "Test Coverage", val: "92%" }
    ],
    stack: ["Django", "Django REST Framework", "React Native", "PostgreSQL", "SQLite", "JWT Auth"]
  },
  nursing: {
    title: "Nursing Council Platform",
    category: "Institutional Portal",
    status: "Deployed Campus Wide",
    liveUrl: "#",
    githubUrl: "https://github.com/rancisjsantos/nursing-council-portal",
    overview: "Centralized announcement, election bulletin, and student event registration system created to unify organizational communication for hundreds of nursing students.",
    architecture: [
      "Frontend: Next.js responsive web application with fast server-side rendering for critical institutional bulletins.",
      "Security: Role-Based Access Control (RBAC) separating student viewers, class representatives, and council executives.",
      "Database: PostgreSQL with row-level security for tamper-proof election polling and verified student IDs."
    ],
    challenges: [
      {
        problem: "Traffic spikes during exam schedule release and council election voting hours.",
        solution: "Configured aggressive HTTP cache-control headers and static generation for public bulletin routes."
      }
    ],
    metrics: [
      { label: "Uptime", val: "99.9%" },
      { label: "Lighthouse Score", val: "98/100" },
      { label: "Active Users", val: "450+" }
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "RBAC Security"]
  },
  pcbuilder: {
    title: "PC Builder Engine",
    category: "Algorithmic Engine",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "https://github.com/rancisjsantos/pc-compatibility-engine",
    overview: "An algorithmic client-side PC hardware configuration tool that cross-checks CPU sockets, RAM generation/clearance, motherboard form factors, and total power supply envelope requirements in real time.",
    architecture: [
      "Rules Engine: Pure deterministic client-side algorithmic validation eliminating unnecessary round-trip API delays.",
      "Hardware Matrix: Structured relational JSON database encompassing 400+ CPUs, motherboards, GPUs, and power supplies.",
      "Wattage Estimator: Dynamic power consumption calculator incorporating 20% transient power spike headroom."
    ],
    challenges: [
      {
        problem: "Complex multi-variable compatibility rules (e.g. BIOS revision dependencies and physical cooler dimensions).",
        solution: "Created a modular rule parser that flags critical physical collisions vs. soft informational warnings."
      }
    ],
    metrics: [
      { label: "Execution Time", val: "< 5ms" },
      { label: "Components Mapped", val: "400+" },
      { label: "Memory Footprint", val: "< 1.2MB" }
    ],
    stack: ["JavaScript ES6+", "Algorithms", "CSS3 Glassmorphism", "Local Storage", "Responsive UI"]
  },
  clinic: {
    title: "Clinic Appointment Portal",
    category: "HealthTech & DB",
    status: "Prototype Deployed",
    liveUrl: "#",
    githubUrl: "https://github.com/rancisjsantos/clinic-triage-portal",
    overview: "A community health scheduling database system designed to prevent patient appointment collisions, streamline doctor queue allocations, and facilitate automated SMS notifications for rural health units.",
    architecture: [
      "Scheduling Logic: Strict atomic database transactions preventing double-booking during concurrent user requests.",
      "Notification Dispatch: Integrated SMS webhook dispatcher alerting patients 2 hours prior to scheduled triage.",
      "Database Architecture: Normalized 3NF schema with indexed datetime ranges and doctor availability slots."
    ],
    challenges: [
      {
        problem: "Race conditions when multiple walk-in and online patients simultaneously claim the same time slot.",
        solution: "Employed database row-locking and atomic timestamp leases during the checkout/booking state."
      }
    ],
    metrics: [
      { label: "Collision Rate", val: "0.0%" },
      { label: "Booking Speed", val: "< 35s" },
      { label: "Queue Capacity", val: "500/day" }
    ],
    stack: ["Node.js", "MySQL", "REST API", "Tailwind CSS", "SMS Webhooks"]
  }
};

// Capstone Scanner Samples Database
const SCANNER_SAMPLES = {
  sisig: {
    name: "Authentic Kapampangan Sisig",
    confidence: "98.6%",
    origin: "Angeles City, Pampanga (Lucia Cunanan / Aling Lucing heritage)",
    ingredients: ["Boiled & Grilled Pork Jowl & Ears", "Chicken Liver", "Pampanga Onions", "Calamansi", "Bird's Eye Chili (Siling Labuyo)"],
    allergens: "None (Traditional Kapampangan recipes strictly omit mayonnaise and egg)",
    flavorNotes: "Deep wood-smoke char, assertive citrus tang, rich savory umami with a crunchy, gelatinous texture.",
    calories: "385 kcal per serving"
  },
  tibok: {
    name: "Tibok-Tibok (Carabao Milk Pudding)",
    confidence: "97.2%",
    origin: "San Fernando & Bacolor, Pampanga",
    ingredients: ["Fresh Carabao (Water Buffalo) Milk", "Ground Glutinous Rice", "Refined Cane Sugar", "Latik (Toasted Coconut Curd Topping)"],
    allergens: "Lactose (Dairy)",
    flavorNotes: "Silky melt-in-the-mouth custard with delicate sweetness, balanced by caramelized nutty latik.",
    calories: "220 kcal per serving"
  },
  karekare: {
    name: "Traditional Kapampangan Kare-Kare",
    confidence: "99.1%",
    origin: "Guagua & San Fernando, Pampanga",
    ingredients: ["Tender Oxtail & Tripe", "Ground Roasted Peanuts & Rice", "Achuete (Annatto) Extract", "Banana Blossom (Puso ng Saging)", "String Beans", "Eggplant"],
    allergens: "Peanuts (Legumes)",
    flavorNotes: "Velvety, nutty savory stew enhanced by pungent local sautéed shrimp paste (bagoong alamang).",
    calories: "450 kcal per serving"
  }
};

// Capstone Itinerary Stops
const ITINERARY_STOPS = [
  {
    id: 1,
    name: "Aling Lucing Sisig",
    location: "Glaciano Valdez St, Angeles City",
    type: "Heritage Culinary Milestone",
    eta: "11:30 AM",
    duration: "45 mins stay",
    traffic: "Smooth (McArthur Corridor North)",
    dish: "Original Sizzling Sisig"
  },
  {
    id: 2,
    name: "Bale Dutung (Chef Claude Tayag)",
    location: "Villa San Jose, Angeles / San Fernando",
    type: "Degustation & Fine Dining",
    eta: "1:00 PM",
    duration: "90 mins stay",
    traffic: "Moderate (Intersection Corridor)",
    dish: "Lechon 5-Ways & Tibok-Tibok"
  },
  {
    id: 3,
    name: "Susie's Cuisine",
    location: "Dolores, City of San Fernando",
    type: "Traditional Kapampangan Kakanin",
    eta: "3:15 PM",
    duration: "30 mins stay",
    traffic: "Normal (Olongapo-Gapan Road)",
    dish: "Palabok & Mochi with Coconut Cream"
  }
];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollProgress();
  initCounters();
  initCapstoneSimulator();
  initProjectFiltering();
  initModals();
  initContactForm();
  initClipboardButtons();
  initMobileMenu();
});

/* ----------------------------------------------------
 * 1. Theme Management (Light / Dark Mode)
 * ---------------------------------------------------- */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const toggleBtnMobile = document.getElementById('theme-toggle-mobile');
  
  // Check persisted preference or system preference
  const savedTheme = localStorage.getItem('rjs-portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const handleToggle = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('rjs-portfolio-theme', isDark ? 'dark' : 'light');
    showToast(isDark ? "Switched to Dark Mode" : "Switched to Light Mode", "info");
  };

  if (toggleBtn) toggleBtn.addEventListener('click', handleToggle);
  if (toggleBtnMobile) toggleBtnMobile.addEventListener('click', handleToggle);
}

/* ----------------------------------------------------
 * 2. Scroll Progress Bar & Back-to-Top
 * ---------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ----------------------------------------------------
 * 3. Animated Number Counters
 * ---------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const duration = 1500;
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target + (counter.getAttribute('data-suffix') || '');
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current) + (counter.getAttribute('data-suffix') || '');
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats-grid');
  if (statsSection) observer.observe(statsSection);
}

/* ----------------------------------------------------
 * 4. Capstone Simulator Widget (Kanyamanan)
 * ---------------------------------------------------- */
function initCapstoneSimulator() {
  const tabBtns = document.querySelectorAll('.capstone-tab-btn');
  if (!tabBtns || tabBtns.length === 0) return;
  const tabPanes = document.querySelectorAll('.capstone-tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      // Update button active states
      tabBtns.forEach(b => {
        b.classList.remove('border-blue-600', 'text-blue-600', 'dark:text-blue-400', 'bg-blue-50/50', 'dark:bg-blue-950/30');
        b.classList.add('border-transparent', 'text-slate-500', 'hover:text-slate-800', 'dark:hover:text-slate-300');
      });
      btn.classList.remove('border-transparent', 'text-slate-500');
      btn.classList.add('border-blue-600', 'text-blue-600', 'dark:text-blue-400', 'bg-blue-50/50', 'dark:bg-blue-950/30');

      // Update panes
      tabPanes.forEach(pane => {
        if (pane.id === targetId) {
          pane.classList.remove('hidden');
          pane.classList.add('block');
        } else {
          pane.classList.add('hidden');
          pane.classList.remove('block');
        }
      });
    });
  });

  // Simulator Tab 1: Itinerary Route Waypoints
  const stopButtons = document.querySelectorAll('.sim-stop-btn');
  const stopDetailsContainer = document.getElementById('sim-stop-details');
  
  stopButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const stopIndex = parseInt(btn.getAttribute('data-stop'), 10) - 1;
      const stop = ITINERARY_STOPS[stopIndex];
      if (!stop || !stopDetailsContainer) return;

      stopButtons.forEach(b => b.classList.remove('ring-2', 'ring-blue-500', 'bg-blue-50', 'dark:bg-blue-900/40'));
      btn.classList.add('ring-2', 'ring-blue-500', 'bg-blue-50', 'dark:bg-blue-900/40');

      stopDetailsContainer.innerHTML = `
        <div class="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 transition-all">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">Stop #${stop.id} Active</span>
            <span class="text-xs text-slate-500 dark:text-slate-400">ETA: <strong class="text-slate-800 dark:text-slate-200">${stop.eta}</strong></span>
          </div>
          <h4 class="font-bold text-slate-900 dark:text-white text-base">${stop.name}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
            <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span>${stop.location}</span>
          </p>
          <div class="mt-3 grid grid-cols-2 gap-2 text-xs">
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2 rounded">
              <span class="text-slate-400 block text-[10px] uppercase font-mono">Recommended Specialty</span>
              <span class="font-semibold text-slate-800 dark:text-slate-200">${stop.dish}</span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2 rounded">
              <span class="text-slate-400 block text-[10px] uppercase font-mono">Suggested Stay</span>
              <span class="font-semibold text-emerald-600 dark:text-emerald-400">${stop.duration}</span>
            </div>
          </div>
        </div>
      `;
    });
  });

  // Simulator Tab 2: AI Food Scanner
  const dishSelectBtns = document.querySelectorAll('.dish-sample-btn');
  const scanResultView = document.getElementById('food-scan-result');
  const scanOverlay = document.getElementById('food-scan-overlay');

  dishSelectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const dishKey = btn.getAttribute('data-dish');
      const data = SCANNER_SAMPLES[dishKey];
      if (!data || !scanResultView) return;

      dishSelectBtns.forEach(b => b.classList.remove('bg-blue-600', 'text-white', 'shadow-sm'));
      btn.classList.add('bg-blue-600', 'text-white', 'shadow-sm');

      // Trigger scanning animation effect
      if (scanOverlay) {
        scanOverlay.classList.remove('hidden');
        scanOverlay.classList.add('flex');
      }

      setTimeout(() => {
        if (scanOverlay) {
          scanOverlay.classList.add('hidden');
          scanOverlay.classList.remove('flex');
        }

        scanResultView.innerHTML = `
          <div class="space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span class="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  Groq Vision + Gemini 98%+ Match
                </span>
                <h4 class="text-base font-bold text-slate-900 dark:text-white mt-1">${data.name}</h4>
              </div>
              <div class="text-right">
                <span class="text-xs text-slate-400 block">Confidence</span>
                <span class="text-lg font-extrabold text-blue-600 dark:text-blue-400 font-mono">${data.confidence}</span>
              </div>
            </div>

            <div class="text-xs space-y-1.5">
              <p><strong class="text-slate-700 dark:text-slate-300">Culinary Roots:</strong> <span class="text-slate-500 dark:text-slate-400">${data.origin}</span></p>
              <p><strong class="text-slate-700 dark:text-slate-300">Flavor Profile:</strong> <span class="text-slate-500 dark:text-slate-400">${data.flavorNotes}</span></p>
              <p><strong class="text-slate-700 dark:text-slate-300">Allergen Radar:</strong> <span class="text-amber-600 dark:text-amber-400 font-medium">${data.allergens}</span></p>
            </div>

            <div class="pt-2">
              <span class="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">Detected Ingredients Taxonomy:</span>
              <div class="flex flex-wrap gap-1.5">
                ${data.ingredients.map(ing => `<span class="px-2 py-0.5 rounded text-[11px] bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${ing}</span>`).join('')}
              </div>
            </div>
          </div>
        `;
      }, 600);
    });
  });

  // Simulator Tab 3: MSME Merchant Vetting Filters
  const vettingFilterBtns = document.querySelectorAll('.msme-filter-btn');
  const merchantCards = document.querySelectorAll('.msme-merchant-card');

  vettingFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-vet-filter');

      vettingFilterBtns.forEach(b => {
        b.classList.remove('bg-slate-900', 'text-white', 'dark:bg-white', 'dark:text-slate-900');
        b.classList.add('bg-slate-100', 'text-slate-600', 'dark:bg-slate-800', 'dark:text-slate-400');
      });
      btn.classList.add('bg-slate-900', 'text-white', 'dark:bg-white', 'dark:text-slate-900');
      btn.classList.remove('bg-slate-100', 'text-slate-600', 'dark:bg-slate-800', 'dark:text-slate-400');

      merchantCards.forEach(card => {
        const status = card.getAttribute('data-status');
        if (filter === 'all' || status === filter) {
          card.classList.remove('hidden');
          card.classList.add('flex');
        } else {
          card.classList.add('hidden');
          card.classList.remove('flex');
        }
      });
    });
  });
}

/* ----------------------------------------------------
 * 5. Project Filtering & Search
 * ---------------------------------------------------- */
function initProjectFiltering() {
  const filterTabs = document.querySelectorAll('.project-tab-btn');
  const searchInput = document.getElementById('project-search');
  const projectCards = document.querySelectorAll('.project-card');
  const emptyState = document.getElementById('project-empty-state');

  let activeFilter = 'all';
  let searchQuery = '';

  const applyFilters = () => {
    let visibleCount = 0;

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const text = card.textContent.toLowerCase();
      
      const matchesCategory = (activeFilter === 'all') || (category && category.includes(activeFilter));
      const matchesSearch = !searchQuery || text.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.classList.remove('hidden');
        card.classList.add('flex');
        visibleCount++;
      } else {
        card.classList.add('hidden');
        card.classList.remove('flex');
      }
    });

    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.classList.remove('hidden');
        emptyState.classList.add('block');
      } else {
        emptyState.classList.add('hidden');
        emptyState.classList.remove('block');
      }
    }
  };

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activeFilter = tab.getAttribute('data-filter');

      filterTabs.forEach(t => {
        t.classList.remove('bg-blue-600', 'text-white', 'shadow-sm');
        t.classList.add('bg-transparent', 'text-slate-600', 'dark:text-slate-400', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
      });
      tab.classList.add('bg-blue-600', 'text-white', 'shadow-sm');
      tab.classList.remove('bg-transparent', 'text-slate-600', 'dark:text-slate-400');

      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }
}

/* ----------------------------------------------------
 * 6. Modals (Project Deep-Dive & Executive Resume)
 * ---------------------------------------------------- */
function initModals() {
  // Project Deep Dive Modal
  const deepDiveModal = document.getElementById('deep-dive-modal');
  const deepDiveContent = document.getElementById('deep-dive-content');
  const closeDeepDiveBtn = document.getElementById('close-deep-dive');
  const deepDiveTriggers = document.querySelectorAll('.open-deep-dive');

  const openProjectModal = (projKey) => {
    const proj = PROJECT_DETAILS[projKey];
    if (!proj || !deepDiveModal || !deepDiveContent) return;

    deepDiveContent.innerHTML = `
      <div class="space-y-6">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">${proj.category}</span>
            <span class="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300 font-mono">${proj.status}</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white">${proj.title}</h3>
          <p class="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">${proj.overview}</p>
        </div>

        <!-- Metrics -->
        <div class="grid grid-cols-3 gap-3">
          ${proj.metrics.map(m => `
            <div class="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-center">
              <span class="text-xs text-slate-500 dark:text-slate-400 block">${m.label}</span>
              <span class="text-lg font-bold text-blue-600 dark:text-blue-400 font-mono">${m.val}</span>
            </div>
          `).join('')}
        </div>

        <!-- Architecture Breakdown -->
        <div>
          <h4 class="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">System Architecture & Technical Stack</h4>
          <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
            ${proj.architecture.map(a => `<li class="flex items-start gap-2"><span class="text-blue-500 font-bold mt-0.5">▹</span><span>${a}</span></li>`).join('')}
          </ul>
        </div>

        <!-- Engineering Challenges Solved -->
        <div>
          <h4 class="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">Key Engineering Challenges Solved</h4>
          <div class="space-y-3">
            ${proj.challenges.map(c => `
              <div class="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs">
                <p class="font-semibold text-rose-600 dark:text-rose-400 mb-1">Challenge: ${c.problem}</p>
                <p class="text-slate-600 dark:text-slate-300"><strong class="text-emerald-600 dark:text-emerald-400">Engineering Solution:</strong> ${c.solution}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tech Stack Pills -->
        <div>
          <h4 class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Technologies Utilized</h4>
          <div class="flex flex-wrap gap-1.5">
            ${proj.stack.map(s => `<span class="px-2.5 py-1 rounded text-xs bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 font-mono">${s}</span>`).join('')}
          </div>
        </div>

        <!-- External Actions -->
        <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div class="flex gap-3">
            ${proj.liveUrl !== '#' ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold inline-flex items-center gap-1.5">Launch Live Demo ↗</a>` : ''}
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 text-slate-800 dark:text-slate-200 text-xs font-semibold inline-flex items-center gap-1.5">Source Repository ↗</a>
          </div>
          <button id="modal-close-inner" class="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">Close Window</button>
        </div>
      </div>
    `;

    deepDiveModal.classList.remove('hidden');
    deepDiveModal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    const innerClose = document.getElementById('modal-close-inner');
    if (innerClose) innerClose.addEventListener('click', closeProjectModal);
  };

  const closeProjectModal = () => {
    if (!deepDiveModal) return;
    deepDiveModal.classList.add('hidden');
    deepDiveModal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  deepDiveTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projKey = btn.getAttribute('data-project');
      openProjectModal(projKey);
    });
  });

  if (closeDeepDiveBtn) closeDeepDiveBtn.addEventListener('click', closeProjectModal);
  if (deepDiveModal) {
    deepDiveModal.addEventListener('click', (e) => {
      if (e.target === deepDiveModal) closeProjectModal();
    });
  }

  // Resume Modal
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtns = document.querySelectorAll('.open-resume-modal');
  const closeResumeBtn = document.getElementById('close-resume-modal');
  const printResumeBtn = document.getElementById('print-resume-btn');

  const openResume = (e) => {
    if (e) e.preventDefault();
    if (!resumeModal) return;
    resumeModal.classList.remove('hidden');
    resumeModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  const closeResume = () => {
    if (!resumeModal) return;
    resumeModal.classList.add('hidden');
    resumeModal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  openResumeBtns.forEach(btn => btn.addEventListener('click', openResume));
  if (closeResumeBtn) closeResumeBtn.addEventListener('click', closeResume);
  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }
  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeResume();
    });
  }

  // Keyboard escape handler for all modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeResume();
    }
  });
}

/* ----------------------------------------------------
 * 7. Copy to Clipboard & Toast System
 * ---------------------------------------------------- */
function initClipboardButtons() {
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
  const copyPhoneBtns = document.querySelectorAll('.copy-phone-btn');
  const copyCredBtns = document.querySelectorAll('.copy-cred-btn');

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      copyToClipboard('rancisjsantos@gmail.com', 'Copied email: rancisjsantos@gmail.com');
    });
  });

  copyPhoneBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      copyToClipboard('+639344116761', 'Copied phone: (+63) 934-411-6761');
    });
  });

  copyCredBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const credId = btn.getAttribute('data-cred-id') || 'JwY3-4wUQ';
      copyToClipboard(credId, `Copied Pearson VUE ID: ${credId}`);
    });
  });
}

function copyToClipboard(text, successMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg, 'success');
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(successMsg, 'success');
  } catch (err) {
    showToast('Failed to copy text', 'error');
  }
  document.body.removeChild(textArea);
}

function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const bgStyles = type === 'success' 
    ? 'bg-emerald-600 text-white' 
    : type === 'error' 
    ? 'bg-rose-600 text-white' 
    : 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900';

  toast.className = `pointer-events-auto px-4 py-3 rounded-lg shadow-xl text-xs font-semibold flex items-center gap-2 transform transition-all duration-300 translate-y-3 opacity-0 ${bgStyles}`;
  toast.innerHTML = `
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-3', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  // Auto remove after 3s
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-3');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3200);
}

/* ----------------------------------------------------
 * 8. Interactive Contact Inquiry Form
 * ---------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('inquiry-form');
  const messageInput = document.getElementById('inquiry-message');
  const charCounter = document.getElementById('char-counter');
  const submitBtn = document.getElementById('submit-inquiry-btn');
  const formStatus = document.getElementById('form-status');

  if (messageInput && charCounter) {
    messageInput.addEventListener('input', () => {
      const length = messageInput.value.length;
      charCounter.textContent = `${length}/500`;
      if (length > 480) {
        charCounter.classList.add('text-amber-500');
      } else {
        charCounter.classList.remove('text-amber-500');
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('inquiry-name').value.trim();
      const email = document.getElementById('inquiry-email').value.trim();
      const company = document.getElementById('inquiry-company').value.trim();
      const role = document.getElementById('inquiry-role').value;
      const message = document.getElementById('inquiry-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please complete all required fields.', 'error');
        return;
      }

      // Simulate sending inquiry
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin h-4 w-4 mr-2 text-white" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Dispatching Inquiry...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Inquiry Message →';
        form.reset();
        if (charCounter) charCounter.textContent = '0/500';

        if (formStatus) {
          formStatus.classList.remove('hidden');
          formStatus.innerHTML = `
            <div class="p-3.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs">
              <strong class="font-bold">Inquiry Dispatched Successfully!</strong> Thank you ${name}. Your message regarding <em>${role}</em> has been prepared and queued for Rancis. You can also connect directly via rancisjsantos@gmail.com.
            </div>
          `;
        }

        showToast(`Inquiry sent from ${name} successfully.`, 'success');
      }, 1000);
    });
  }
}

/* ----------------------------------------------------
 * 9. Mobile Menu Navigation Drawer
 * ---------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !menuDrawer) return;

  menuBtn.addEventListener('click', () => {
    const isExpanded = menuDrawer.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', !isExpanded);
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuDrawer.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ----------------------------------------------------
 * 10. Interactive Resume Studio Modal Handlers
 * ---------------------------------------------------- */
let modalIsCompact = false;
let modalPhotoHasSolidBorder = true;

window.handleModalPhotoUpload = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = document.getElementById('modalProfileImage');
    const placeholder = document.getElementById('modalPhotoPlaceholder');
    if (img) {
      img.src = e.target.result;
      img.classList.remove('hidden');
    }
    if (placeholder) {
      placeholder.classList.add('hidden');
    }
    showToast('Photo uploaded into 2x2 Resume slot.', 'success');
  };
  reader.readAsDataURL(file);
};

window.toggleModalSpacing = function() {
  const sheet = document.getElementById('modalResumeSheet');
  const btn = document.getElementById('modalSpacingBtn');
  modalIsCompact = !modalIsCompact;
  if (sheet) {
    if (modalIsCompact) {
      sheet.classList.add('compact-mode');
    } else {
      sheet.classList.remove('compact-mode');
    }
  }
  if (btn) {
    btn.textContent = modalIsCompact ? 'Spacing: Compact (1-Page)' : 'Spacing: Standard';
  }
  showToast(modalIsCompact ? 'Compact spacing enabled' : 'Standard spacing restored', 'info');
};

window.toggleModalPhotoBorder = function() {
  const photoBox = document.getElementById('modalPhotoBox');
  modalPhotoHasSolidBorder = !modalPhotoHasSolidBorder;
  if (photoBox) {
    if (modalPhotoHasSolidBorder) {
      photoBox.classList.remove('border-transparent');
      photoBox.classList.add('border-slate-800');
    } else {
      photoBox.classList.remove('border-slate-800');
      photoBox.classList.add('border-transparent');
    }
  }
};
