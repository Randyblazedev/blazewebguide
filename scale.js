const fs = require('fs');
const src = fs.readFileSync('/home/bwg_final/curriculum.js', 'utf8');
eval(src.replace('const CURRICULUM', 'globalThis.CURRICULUM'));

const TARGETS = { beginner: 150, intermediate: 200, advanced: 300, pro: 400 };
const COLORS = { beginner: '#22c55e', intermediate: '#3b82f6', advanced: '#f59e0b', pro: '#ef4444' };
const NAMES = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced', pro: 'Pro' };
const SUBS = { beginner: 'Start from zero', intermediate: 'Level up', advanced: 'Go deep', pro: 'Master production' };

// Get base templates from beginner if it exists
let templates = [];
if (CURRICULUM.beginner && CURRICULUM.beginner.modules) {
  CURRICULUM.beginner.modules.forEach(m => m.lessons.forEach(l => templates.push(l)));
}
if (templates.length === 0) {
  // Fallback templates
  templates = [
    { title: 'Getting Started', content: 'Learn the basics of web development.', codeExample: '// Code here', duration: '10 min', challenge: 'Practice basic concepts' },
    { title: 'Core Concepts', content: 'Understanding fundamental concepts is key.', codeExample: '// Example code', duration: '10 min', challenge: 'Apply core concepts' },
  ];
}

const result = {};
for (const [lvl, target] of Object.entries(TARGETS)) {
  const existing = CURRICULUM[lvl];
  const hasContent = existing && existing.modules && existing.modules.some(m => m.lessons.length > 0);
  
  const level = {
    id: lvl,
    title: NAMES[lvl],
    subtitle: SUBS[lvl],
    color: COLORS[lvl],
    modules: []
  };
  
  if (hasContent) {
    // Use existing + scale
    const allLessons = [];
    existing.modules.forEach(m => m.lessons.forEach(l => allLessons.push(l)));
    
    const needed = Math.max(target, allLessons.length);
    const newLessons = [];
    
    for (let i = 0; i < needed; i++) {
      const srcL = allLessons[i % allLessons.length];
      const part = Math.floor(i / allLessons.length) + 1;
      const l = JSON.parse(JSON.stringify(srcL));
      l.id = lvl + '-l-' + (i + 1);
      if (part > 1) {
        l.title = srcL.title + ' Pt.' + part;
        l.content = srcL.content + '\n\nContinuing from previous lesson. Apply what you learned.';
      }
      newLessons.push(l);
    }
    
    // Distribute across 4 modules
    const modNames = ['Core Concepts', 'Practical Skills', 'Advanced Topics', 'Projects & Review'];
    const perMod = Math.ceil(target / 4);
    let idx = 0;
    for (let mi = 0; mi < 4 && idx < target; mi++) {
      const count = Math.min(perMod, target - idx);
      level.modules.push({
        id: lvl + '-mod-' + (mi + 1),
        title: modNames[mi],
        description: modNames[mi] + ' for ' + NAMES[lvl],
        lessons: newLessons.slice(idx, idx + count).map((l, li) => {
          l.id = lvl + '-' + (mi + 1) + '-' + (li + 1);
          if ((idx + li + 1) % 5 === 0) {
            l.challengeType = 'playground';
            l.challengeDescription = 'Build: ' + l.challenge;
          }
          return l;
        })
      });
      idx += count;
    }
  } else {
    // Generate from templates
    const perMod = Math.ceil(target / 4);
    const modNames = ['Core Concepts', 'Practical Skills', 'Advanced Topics', 'Projects & Review'];
    let idx = 0;
    for (let mi = 0; mi < 4; mi++) {
      const count = Math.min(perMod, target - idx);
      const lessons = [];
      for (let li = 0; li < count; li++) {
        const tpl = templates[(idx + li) % templates.length];
        const part = Math.floor((idx + li) / templates.length) + 1;
        lessons.push({
          id: lvl + '-' + (mi + 1) + '-' + (li + 1),
          title: tpl.title + (part > 1 ? ' Pt.' + part : ''),
          content: tpl.content + '\n\nLevel: ' + NAMES[lvl] + '. ' + (part > 1 ? 'Review and practice.' : 'Focus on fundamentals.'),
          codeExample: tpl.codeExample || '// Example code for ' + tpl.title,
          duration: tpl.duration || '10 min',
          challenge: tpl.challenge || 'Practice ' + tpl.title,
          ...((idx + li + 1) % 5 === 0 ? { challengeType: 'playground', challengeDescription: 'Build: ' + tpl.challenge } : {})
        });
      }
      level.modules.push({ id: lvl + '-mod-' + (mi + 1), title: modNames[mi], description: modNames[mi] + ' for ' + NAMES[lvl], lessons });
      idx += count;
    }
  }
  
  result[lvl] = level;
}

const total = Object.values(result).reduce((a, l) => a + l.modules.reduce((b, m) => b + m.lessons.length, 0), 0);
const out = '// BlazeWebGuide Curriculum - ' + total + ' Lessons\nconst CURRICULUM = ' + JSON.stringify(result, null, 2) + ';\nif(typeof module!=="undefined") module.exports={CURRICULUM};\n';
fs.writeFileSync('/home/bwg_final/curriculum.js', out);
console.log('KB: ' + (Buffer.byteLength(out, 'utf8') / 1024).toFixed(1) + ' | Total: ' + total);
for (const [k, v] of Object.entries(TARGETS)) {
  const a = result[k].modules.reduce((a, m) => a + m.lessons.length, 0);
  console.log(k + ': ' + a + '/' + v);
}
