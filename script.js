// JavaScript for Devesh Singh Portfolio

// Initialize Lucide icons on load
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
  setupNavbarScroll();
  setupMobileMenu();
  setupProjectFiltering();
  setupTerminal();
});

// Navbar Scroll Effect
function setupNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Mobile Menu Toggle
function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  const links = document.querySelectorAll('.mobile-nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// Project Filtering Logic
function setupProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.classList.remove('bg-indigo-600', 'text-white');
        b.classList.add('bg-slate-800', 'text-slate-300');
      });

      btn.classList.add('active');
      btn.classList.remove('bg-slate-800', 'text-slate-300');
      btn.classList.add('bg-indigo-600', 'text-white');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

// Project Details Data Model
const projectDetails = {
  meetmind: {
    title: "MeetMind – AI-Powered Meeting Assistant",
    subtitle: "End-to-End Meeting Transcription, Structured Summarization & Action Item Extraction",
    badges: ["Next.js", "React", "TypeScript", "Groq API", "Firebase", "Express", "jsPDF"],
    github: "https://github.com/deveshsingh0704/meetingMingenerator",
    demo: null,
    problem: "Manual meeting note-taking disrupts participant engagement and often misses crucial action items, deadlines, and technical decisions.",
    solution: "Built a full-stack platform that takes recorded audio or text transcripts and automatically generates clean, structured meeting minutes. Integrated Groq Whisper for near real-time audio transcription and Groq's Llama 3 model for rapid synthesis into categorized minutes, action items, and discussion points.",
    architecture: [
      "Next.js & React frontend with responsive editable notes interface",
      "Groq Whisper integration for low-latency audio-to-text conversion",
      "Groq Llama 3 prompt-engineered pipeline for decision and action-item extraction",
      "Firebase Auth, Cloud Storage (audio uploads), and Firestore searchable document records",
      "Client-side PDF & TXT document export engine with jsPDF"
    ]
  },
  voiceagent: {
    title: "Voice AI Todo Agent",
    subtitle: "Conversational Task Management Powered by LangGraph StateGraph & Gemini",
    badges: ["React", "Vite", "LangGraph", "LangChain", "Gemini API", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/deveshsingh0704/voice-agent",
    demo: null,
    problem: "Interacting with task managers manually while multi-tasking, driving, or coding creates friction and interrupts productivity flow.",
    solution: "Engineered a hands-free conversational voice assistant utilizing browser speech synthesis and recognition. Powered by an autonomous LangGraph agent equipped with tool calling to add, list, search, and update MongoDB tasks while maintaining checkpointed context.",
    architecture: [
      "Web Speech Recognition & Synthesis API for natural voice I/O",
      "LangGraph StateGraph workflow with Gemini model for dynamic tool routing",
      "LangGraph MemorySaver for checkpointed multi-turn conversation memory",
      "Express REST API backend connecting agent decisions to MongoDB collections",
      "Real-time dual-view UI for pending and completed tasks with optimistic updates"
    ]
  },
  stocktracker: {
    title: "Stock Tracker – Real-Time Market Dashboard",
    subtitle: "Sub-Second WebSocket Market Streaming & Interactive Portfolio Valuation",
    badges: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "Finnhub API", "Recharts", "Tailwind CSS"],
    github: "https://github.com/deveshsingh0704/Stock-Tracker",
    demo: null,
    problem: "Retail investors require lightweight, real-time dashboards to track custom watchlists and portfolio performance without bloated interfaces or subscription fees.",
    solution: "Developed an ultra-responsive full-stack market dashboard streaming live stock tick prices via Finnhub WebSockets. Includes interactive visualizations for price trends and portfolio valuation, with MongoDB-backed user holdings and watchlists.",
    architecture: [
      "Persistent WebSocket streaming client receiving live tick updates from Finnhub",
      "Express & Node.js backend managing authenticated MongoDB user watchlists",
      "Dynamic Recharts visualization engine rendering real-time candlestick and line graphs",
      "Calculates instantaneous portfolio profit/loss and asset distribution breakdown",
      "Tailwind CSS responsive design optimized for desktop and mobile tracking"
    ]
  },
  aegis: {
    title: "AEGIS – Women's Safety Emergency Platform",
    subtitle: "Google Hackathon Winner • Live Geolocation, Emergency SMS & Twilio Escape Calls",
    badges: ["Hackathon 1st Place", "React", "Twilio API", "Geolocation", "Express", "Netlify"],
    github: "https://github.com/himkar-cmd/Women-Safety.git",
    demo: "https://aegis1234.netlify.app/",
    problem: "Personal safety crises require immediate, discreet emergency distress signals and escape mechanisms that work under pressure.",
    solution: "Won 1st place in the college hackathon organized in collaboration with Google. Developed an emergency platform featuring one-tap SOS GPS broadcasting, automated emergency SMS dispatch, and simulated Twilio fake calls to safely exit uncomfortable situations.",
    architecture: [
      "One-click SOS triggering browser Geolocation API coordinates broadcasting",
      "Twilio Voice API integration initiating automated simulated phone calls",
      "Emergency SMS notification dispatch to designated trusted contacts",
      "High-contrast, accessible mobile-first interface designed for crisis situations",
      "Deployed and hosted on Netlify with serverless API triggers"
    ]
  },
  jaldrishti: {
    title: "JalDrishti 💧 Groundwater Resource Evaluation",
    subtitle: "DWLR Telemetry Analytics Pipeline for Ministry of Jal Shakti",
    badges: ["TypeScript", "Python", "Data Pipelines", "Telemetry", "Express", "REST APIs"],
    github: "https://github.com/deveshsingh0704/JalDrishti",
    demo: null,
    problem: "Groundwater monitoring stations nationwide rely on Digital Water Level Recorders (DWLR) that often experience telemetry dropouts and unparsed data streams.",
    solution: "Engineered an analytics dashboard and data diagnostic pipeline to evaluate national groundwater reserves from DWLR telemetry feeds for the Ministry of Jal Shakti. Diagnoses sensor anomalies and provides actionable hydrological charts.",
    architecture: [
      "Python data ingestion script processing raw telemetry feeds and resolving dropped signals",
      "TypeScript & Express REST backend serving processed groundwater metrics",
      "Spatial data visualization of water table depth changes across monitoring stations",
      "Automated anomaly detection flagging DWLR sensor maintenance requirements"
    ]
  },
  rag: {
    title: "Investment RAG Engine",
    subtitle: "FastAPI & Gemini Powered PDF Financial Report Semantic Search",
    badges: ["Python", "FastAPI", "Gemini API", "Sentence Transformers", "SQLite Vector"],
    github: "https://github.com/deveshsingh0704/rag-e1",
    demo: null,
    problem: "Financial quarterly reports and prospectus PDFs contain hundreds of pages of dense tables and disclosures that take analysts hours to manually parse.",
    solution: "Built a high-precision Retrieval-Augmented Generation (RAG) system with a FastAPI backend and interactive frontend. Ingests PDFs, chunks content, creates dense vector embeddings via Sentence Transformers, and uses Gemini to synthesize cited answers.",
    architecture: [
      "PDF ingestion and recursive semantic chunking pipeline",
      "Sentence Transformers vector embeddings stored in SQLite for rapid similarity retrieval",
      "Context-grounded prompt generation sent to Gemini API to eliminate hallucinations",
      "FastAPI asynchronous endpoints with complete citation metadata"
    ]
  },
  attendance: {
    title: "AI-Powered Classroom Attendance System",
    subtitle: "Offline-First Computer Vision Facial Recognition Built in Pure OpenCV",
    badges: ["Python", "OpenCV", "NumPy", "SQLite", "Computer Vision", "Edge AI"],
    github: "https://github.com/deveshsingh0704/face-recognition-attendacne",
    demo: null,
    problem: "Manual attendance wastes valuable lecture time, while cloud biometric systems fail during campus internet disruptions.",
    solution: "Developed an automated, 100% offline-first classroom attendance system powered strictly by computer vision algorithms in pure OpenCV without external cloud APIs. Detects student faces in real time and logs authenticated timestamps into SQLite.",
    architecture: [
      "Pure OpenCV Haar Cascade face detection pipeline",
      "Local LBPH (Local Binary Patterns Histograms) face recognition classifier",
      "Zero-latency edge processing guaranteeing complete data privacy",
      "SQLite local database logging attendance records and exportable CSV sheets"
    ]
  }
};

// Open Project Deep Dive Modal
function openProjectModal(projectId) {
  const data = projectDetails[projectId];
  if (!data) return;

  const modal = document.getElementById('project-modal');
  const titleEl = document.getElementById('modal-title');
  const bodyEl = document.getElementById('modal-body');
  const footerEl = document.getElementById('modal-footer');

  titleEl.textContent = data.title;

  let badgesHtml = data.badges.map(b => 
    `<span class="tech-tag">${b}</span>`
  ).join(' ');

  let archList = data.architecture.map(item =>
    `<li class="flex items-start gap-2">
       <span class="text-indigo-400 mt-0.5">•</span>
       <span>${item}</span>
     </li>`
  ).join('');

  bodyEl.innerHTML = `
    <div>
      <p class="text-sm font-medium text-indigo-300 mb-3">${data.subtitle}</p>
      <div class="flex flex-wrap gap-1.5 mb-4">${badgesHtml}</div>
    </div>

    <div class="space-y-3 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
      <div>
        <h4 class="font-display font-bold text-white text-xs uppercase tracking-wider text-rose-400 mb-1">The Problem</h4>
        <p class="text-slate-300 leading-relaxed">${data.problem}</p>
      </div>
      <div class="pt-2 border-t border-slate-800/80">
        <h4 class="font-display font-bold text-white text-xs uppercase tracking-wider text-emerald-400 mb-1">The Solution</h4>
        <p class="text-slate-300 leading-relaxed">${data.solution}</p>
      </div>
    </div>

    <div class="space-y-2">
      <h4 class="font-display font-bold text-white text-xs uppercase tracking-wider text-cyan-400">Key Technical Architecture</h4>
      <ul class="space-y-2 text-slate-300">${archList}</ul>
    </div>
  `;

  let linksHtml = '';
  if (data.github) {
    linksHtml += `
      <a href="${data.github}" target="_blank" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs flex items-center gap-2 transition-all">
        <i data-lucide="github" class="w-4 h-4"></i> View Repository
      </a>
    `;
  }
  if (data.demo) {
    linksHtml += `
      <a href="${data.demo}" target="_blank" class="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium text-xs flex items-center gap-2 shadow-md shadow-indigo-600/30 transition-all">
        <i data-lucide="external-link" class="w-4 h-4"></i> Open Live App
      </a>
    `;
  }

  footerEl.innerHTML = `
    <div class="flex items-center gap-3">
      ${linksHtml}
    </div>
    <button onclick="closeProjectModal()" class="text-xs text-slate-400 hover:text-white font-mono">
      Close [Esc]
    </button>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Resume Modal Handlers
function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Close modals with Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeResumeModal();
    closeProjectModal();
  }
});

// Toast Notifications
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  toastMsg.textContent = message;

  toast.classList.remove('hidden');
  toast.classList.add('toast-enter');

  if (window.lucide) {
    window.lucide.createIcons();
  }

  setTimeout(() => {
    toast.classList.remove('toast-enter');
    toast.classList.add('hidden');
  }, 3000);
}

// Copy to Clipboard
function copyToClipboard(text, successMessage) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMessage || 'Copied to clipboard!');
  }).catch(() => {
    // Fallback
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast(successMessage || 'Copied to clipboard!');
  });
}

// Contact Form Handler
function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('sender-name').value.trim();
  const email = document.getElementById('sender-email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    showToast('Please fill in all required fields.');
    return;
  }

  const mailtoUrl = `mailto:deveshsingh6986@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent("Sender Name: " + name + "\nSender Email: " + email + "\n\n" + message)}`;

  window.location.href = mailtoUrl;
  showToast('Opening your email client...');
}

// Interactive Terminal CLI Logic
function setupTerminal() {
  const input = document.getElementById('terminal-input');
  if (!input) return;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeTerminalInput();
    }
  });
}

function executeTerminalInput() {
  const input = document.getElementById('terminal-input');
  const cmd = input.value.trim().toLowerCase();
  if (!cmd) return;
  input.value = '';
  runTerminalCmd(cmd);
}

function clearTerminal() {
  const output = document.getElementById('terminal-output');
  output.innerHTML = '';
}

function runTerminalCmd(cmd) {
  const output = document.getElementById('terminal-output');
  
  // Create prompt echo
  const promptEl = document.createElement('div');
  promptEl.className = 'flex items-center gap-1.5 text-slate-400 font-mono text-xs mt-2';
  promptEl.innerHTML = `<span class="text-emerald-400 font-bold">visitor@portfolio:~$</span> <span>${escapeHtml(cmd)}</span>`;
  output.appendChild(promptEl);

  const responseEl = document.createElement('div');
  responseEl.className = 'text-slate-300 font-mono text-xs leading-relaxed pl-2 border-l border-slate-700/60 my-1';

  switch (cmd.toLowerCase()) {
    case 'help':
      responseEl.innerHTML = `
        <div class="space-y-1">
          <div class="text-cyan-400 font-bold">Available Commands:</div>
          <div><span class="text-indigo-400 font-semibold">about</span>       - Brief developer background and education</div>
          <div><span class="text-indigo-400 font-semibold">skills</span>      - Technical stack and proficiencies</div>
          <div><span class="text-indigo-400 font-semibold">projects</span>    - Key featured engineering projects</div>
          <div><span class="text-indigo-400 font-semibold">experience</span>  - Internship and open source background</div>
          <div><span class="text-indigo-400 font-semibold">achievements</span>- Awards and competitive milestones</div>
          <div><span class="text-indigo-400 font-semibold">contact</span>     - Direct contact handles and links</div>
          <div><span class="text-indigo-400 font-semibold">resume</span>      - Open and preview resume PDF</div>
          <div><span class="text-indigo-400 font-semibold">sudo hire</span>   - Unlock recruitment workflow</div>
          <div><span class="text-indigo-400 font-semibold">clear</span>       - Clear shell screen</div>
        </div>
      `;
      break;

    case 'about':
      responseEl.innerHTML = `
        <div class="space-y-1">
          <div class="text-white font-bold">Devesh Singh</div>
          <div>Software Engineer & AI Systems Developer based in Bengaluru, India.</div>
          <div>Currently pursuing B.Tech in CS at Polaris School of Technology (CGPA: 8.42, 2024–2028).</div>
          <div>Specializes in AI Agent workflows (LangGraph), real-time WebSockets, and production full-stack engineering.</div>
        </div>
      `;
      break;

    case 'skills':
      responseEl.innerHTML = `
        <div class="space-y-1">
          <div><strong class="text-indigo-400">AI / LLM:</strong> LangGraph, LangChain, Gemini API, Groq (Whisper/Llama), RAG, Prompt Engineering</div>
          <div><strong class="text-cyan-400">Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS, Recharts, Vite</div>
          <div><strong class="text-emerald-400">Backend:</strong> Node.js, Express, FastAPI, WebSockets, REST APIs</div>
          <div><strong class="text-amber-400">Databases:</strong> MongoDB, Firebase Firestore, MySQL, SQLite</div>
          <div><strong class="text-rose-400">Languages:</strong> TypeScript, JavaScript, Python, Java, SQL, Shell</div>
        </div>
      `;
      break;

    case 'projects':
      responseEl.innerHTML = `
        <div class="space-y-1">
          <div>1. <strong class="text-indigo-400">MeetMind:</strong> AI meeting minutes & audio transcription (Next.js, Groq, Firebase)</div>
          <div>2. <strong class="text-violet-400">Voice AI Todo Agent:</strong> Hands-free conversational task manager (LangGraph, Gemini, React)</div>
          <div>3. <strong class="text-emerald-400">Stock Tracker:</strong> Sub-second streaming market dashboard (WebSockets, Finnhub, MongoDB)</div>
          <div>4. <strong class="text-amber-400">AEGIS Safety:</strong> Google Hackathon Winner emergency app (Twilio, Geolocation)</div>
          <div>5. <strong class="text-cyan-400">JalDrishti:</strong> Groundwater DWLR telemetry analytics for Ministry of Jal Shakti</div>
          <div>6. <strong class="text-indigo-400">Investment RAG Engine:</strong> Financial PDF semantic retrieval (FastAPI, Sentence Transformers)</div>
          <div>7. <strong class="text-teal-400">AI Attendance:</strong> Pure OpenCV offline edge computer vision attendance</div>
        </div>
      `;
      break;

    case 'experience':
      responseEl.innerHTML = `
        <div class="space-y-1">
          <div><strong class="text-indigo-400">Front End Developer Intern:</strong> Absolutely.ai (Mar – Jun 2026)</div>
          <div class="text-slate-400 text-[11px]">- Translated Figma to AGEN8 interfaces, built reusable component systems, integrated APIs.</div>
          <div><strong class="text-violet-400">Open Source Contributor:</strong> Flotilla (Remote)</div>
          <div class="text-slate-400 text-[11px]">- Authored and merged 6 PRs addressing UI layering, text-overlap, and authentication progress indicators.</div>
        </div>
      `;
      break;

    case 'achievements':
      responseEl.innerHTML = `
        <div class="space-y-1">
          <div>🏆 <strong class="text-amber-400">AEGIS Hackathon Winner:</strong> 1st place in collaboration with Google for Women Safety app.</div>
          <div>🌐 <strong class="text-indigo-400">Summer of Bitcoin 2024 & 2025:</strong> Two-time selectee for global Developer Track.</div>
          <div>⚡ <strong class="text-emerald-400">Problem Solving:</strong> 300+ LeetCode problems solved across DSA & SQL.</div>
        </div>
      `;
      break;

    case 'contact':
      responseEl.innerHTML = `
        <div class="space-y-1">
          <div>Email: <a href="mailto:deveshsingh6986@gmail.com" class="text-indigo-400 underline">deveshsingh6986@gmail.com</a></div>
          <div>Phone: <a href="tel:+919110127769" class="text-emerald-400 underline">+91-911-012-7769</a></div>
          <div>GitHub: <a href="https://github.com/deveshsingh0704" target="_blank" class="text-cyan-400 underline">github.com/deveshsingh0704</a></div>
          <div>LinkedIn: <a href="https://linkedin.com/in/devesh-singh-542483318/" target="_blank" class="text-violet-400 underline">linkedin.com/in/devesh-singh-542483318/</a></div>
          <div>LeetCode: <a href="https://leetcode.com/u/HonouredOneXdeveshSingh0704/" target="_blank" class="text-amber-400 underline">leetcode.com/u/HonouredOneXdeveshSingh0704/</a></div>
        </div>
      `;
      break;

    case 'resume':
      openResumeModal();
      responseEl.innerHTML = `<span class="text-emerald-400">Opening resume modal preview...</span>`;
      break;

    case 'sudo hire':
      responseEl.innerHTML = `
        <div class="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
          <strong>Access Granted! 🎉</strong><br/>
          Devesh Singh is ready to deliver impact on your engineering team.<br/>
          Sending you to contact form now...
        </div>
      `;
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000);
      break;

    case 'clear':
      clearTerminal();
      return;

    default:
      responseEl.innerHTML = `
        <span class="text-rose-400">command not found: "${escapeHtml(cmd)}".</span> Type <span class="text-cyan-400 font-semibold">'help'</span> for a list of valid commands.
      `;
      break;
  }

  output.appendChild(responseEl);
  output.scrollTop = output.scrollHeight;
}

// Helper to escape HTML characters in terminal input
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}
