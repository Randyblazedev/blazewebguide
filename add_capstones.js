// Update curriculum.js - capstone projects & level gating
const fs = require('fs');
const data = fs.readFileSync('/home/bwg_update/curriculum.js', 'utf8');
eval(data.replace('const CURRICULUM', 'globalThis.CURRICULUM'));

const capstones = {
  beginner: {
    title: 'Capstone: Build Your First Website',
    content: 'This is it — the final challenge of the Beginner level! You have learned HTML for structure, CSS for styling, and basic JavaScript for interactivity. Now you will build a complete, multi-page website from scratch.\n\nYour task: Build a personal portfolio website with:\n- At least 3 pages (Home, About, Projects)\n- Navigation between pages\n- Responsive design (mobile + desktop)\n- CSS animations and transitions\n- A contact form with validation\n- Basic JavaScript interactivity (menu toggle, form validation)\n\nThis project tests everything you have learned. Take your time, plan it out, and build something you are proud of. This is your first real project as a developer!\n\nEstimated effort: 4-8 hours',
    codeExample: '// Final Project Structure:\n// portfolio/\n// ├── index.html\n// ├── about.html\n// ├── projects.html\n// ├── style.css\n// └── script.js\n\n// You have all the skills you need.\n// Go build something amazing! 🚀',
    duration: '4-8 hours',
    challenge: 'Build and deploy a complete personal portfolio website with 3+ pages, responsive design, CSS animations, form validation, and a live deployment on Vercel or Netlify.',
    challengeType: 'project',
    isCapstone: true
  },
  intermediate: {
    title: 'Capstone: Full-Stack Application',
    content: 'You have mastered responsive design, APIs, async JavaScript, and deployment. Now it is time to build a full-stack application that showcases all these skills.\n\nYour task: Build a task management app (like a mini Trello) with:\n- Frontend built with HTML/CSS/JS (responsive)\n- Fetch data from a REST API\n- Add, edit, delete tasks\n- Drag and drop functionality\n- User authentication simulation\n- Deployed to a live URL\n\nRequirements:\n- Use async/await for all API calls\n- Implement proper error handling\n- Mobile-first responsive design\n- CSS custom properties for theming\n- localStorage for offline fallback\n\nEstimated effort: 8-16 hours',
    codeExample: '// Project: Task Manager\n// API: JSONPlaceholder or custom\n// Features: CRUD, drag-drop, auth\n\nasync function loadTasks() {\n  const res = await fetch("/api/tasks");\n  const tasks = await res.json();\n  renderTasks(tasks);\n}',
    duration: '8-16 hours',
    challenge: 'Build and deploy a full-stack task management app with CRUD operations, drag-and-drop, and live deployment.',
    challengeType: 'project',
    isCapstone: true
  },
  advanced: {
    title: 'Capstone: Production-Ready Web App',
    content: 'You have learned React, Node.js, databases, authentication, and testing. Now build a production-ready web application that demonstrates mastery of the full stack.\n\nYour task: Build an e-commerce or social platform with:\n- React frontend with state management\n- Node.js/Express REST API\n- Database integration (MongoDB or PostgreSQL)\n- User authentication (JWT)\n- Unit and integration tests\n- CI/CD pipeline\n- Error monitoring and logging\n- Performance optimization\n\nThis should be a portfolio-ready project that demonstrates professional-level skills.\n\nEstimated effort: 20-40 hours',
    codeExample: '// Tech Stack:\n// Frontend: React + TypeScript\n// Backend: Node.js + Express\n// Database: MongoDB/PostgreSQL\n// Auth: JWT\n// Tests: Jest + Cypress\n// CI/CD: GitHub Actions',
    duration: '20-40 hours',
    challenge: 'Build and deploy a production-ready full-stack application with authentication, database, testing, and CI/CD.',
    challengeType: 'project',
    isCapstone: true
  },
  pro: {
    title: 'Capstone: Enterprise System Architecture',
    content: 'You have reached the pinnacle of the BlazeWebGuide curriculum. You understand system design, security, DevOps, and architecture patterns. Your final challenge is to design and implement a scalable enterprise system.\n\nYour task: Design and implement a scalable real-world system such as:\n- A URL shortener (like bit.ly)\n- A real-time chat application\n- A video streaming platform backend\n- A collaborative document editor\n\nRequirements:\n- System design document with diagrams\n- Load testing and performance benchmarks\n- Security audit and hardening\n- Docker containerization\n- Kubernetes deployment config\n- Monitoring and alerting setup\n- Disaster recovery plan\n\nEstimated effort: 40-80 hours',
    codeExample: '// System Design Deliverables:\n// 1. Architecture diagram\n// 2. API specification\n// 3. Database schema\n// 4. Security analysis\n// 5. Deployment architecture\n// 6. Performance benchmarks\n// 7. Monitoring dashboard',
    duration: '40-80 hours',
    challenge: 'Design, implement, and document a complete enterprise-grade system with architecture docs, load testing, security hardening, and containerized deployment.',
    challengeType: 'project',
    isCapstone: true
  }
};

// Replace last lesson of each level with capstone
for (const [levelId, capstone] of Object.entries(capstones)) {
  const level = CURRICULUM[levelId];
  if (!level || !level.modules.length) continue;
  const lastModule = level.modules[level.modules.length - 1];
  const lastLesson = lastModule.lessons[lastModule.lessons.length - 1];
  // Replace with capstone
  Object.assign(lastLesson, capstone);
  lastLesson.id = levelId + '-capstone';
}

// Output updated curriculum
let output = '// BlazeWebGuide Complete Curriculum\n// Updated with capstone projects\n\nconst CURRICULUM = ' + JSON.stringify(CURRICULUM, null, 2) + ';\n\nif(typeof module!=="undefined") module.exports={CURRICULUM};\n';

fs.writeFileSync('/home/bwg_update/curriculum.js', output);
console.log('Updated curriculum.js with capstone projects');
console.log('Capstones added: ' + Object.keys(capstones).length);

// Verify
const total = Object.values(CURRICULUM).reduce((a,l) => a + l.modules.reduce((b,m) => b + m.lessons.length, 0), 0);
console.log('Total lessons: ' + total);
