const fs = require('fs');
const src = fs.readFileSync('/home/bwg_challenge/curriculum.js', 'utf8');
eval(src.replace('const CURRICULUM', 'globalThis.CURRICULUM'));

// Generate topic-specific mini challenges based on lesson title
function getChallenge(title, level) {
  const t = title.toLowerCase();
  
  if (t.includes('html') || t.includes('tag') || t.includes('element')) {
    return 'Mini challenge: Write an HTML page using 3 different tags you just learned. Add attributes to at least 2 of them.';
  }
  if (t.includes('link') || t.includes('anchor') || t.includes('nav')) {
    return 'Mini challenge: Create a navigation menu with 3 links. One should open in a new tab with proper security attributes.';
  }
  if (t.includes('image') || t.includes('img') || t.includes('figure') || t.includes('media')) {
    return 'Mini challenge: Add 2 images to a page with alt text, dimensions, and lazy loading. Wrap one in a figure with figcaption.';
  }
  if (t.includes('list') || t.includes('ul') || t.includes('ol') || t.includes('li')) {
    return 'Mini challenge: Create a nested list with at least 3 items. Use an ordered list for steps and an unordered list for ingredients.';
  }
  if (t.includes('table')) {
    return 'Mini challenge: Build a 3-column table with 4 rows of data. Include a header row and use colspan on one cell.';
  }
  if (t.includes('form') || t.includes('input') || t.includes('label') || t.includes('fieldset')) {
    return 'Mini challenge: Create a form with text, email, and password inputs. Add labels, placeholders, and make all fields required.';
  }
  if (t.includes('semantic') || t.includes('header') || t.includes('footer') || t.includes('article') || t.includes('section')) {
    return 'Mini challenge: Build a page layout using semantic HTML5 tags: header, nav, main, article, section, aside, and footer.';
  }
  if (t.includes('css') || t.includes('style') || t.includes('color') || t.includes('background')) {
    return 'Mini challenge: Style a card component with a background color, padding, border radius, and a hover effect that changes the background.';
  }
  if (t.includes('flex') || t.includes('flexbox')) {
    return 'Mini challenge: Create a row of 3 cards using flexbox. Use justify-content: space-between and ensure they are vertically centered.';
  }
  if (t.includes('grid')) {
    return 'Mini challenge: Build a 3-column grid layout with 6 items. Make the first item span 2 columns using grid-column.';
  }
  if (t.includes('typography') || t.includes('font') || t.includes('text')) {
    return 'Mini challenge: Import a Google Font and style a heading with font-weight 800 and letter-spacing -1px. Style body text with line-height 1.8.';
  }
  if (t.includes('box') || t.includes('margin') || t.includes('padding') || t.includes('border')) {
    return 'Mini challenge: Create 2 boxes with the same width but different box-sizing values. Compare the rendered sizes in the preview.';
  }
  if (t.includes('javascript') || t.includes('js') || t.includes('function') || t.includes('variable')) {
    return 'Mini challenge: Write a function that takes a name as a parameter and returns a greeting. Call it with 3 different names and log the results.';
  }
  if (t.includes('dom') || t.includes('query') || t.includes('event') || t.includes('click')) {
    return 'Mini challenge: Create a button that changes the text of a paragraph when clicked. Add a second button that changes the background color.';
  }
  if (t.includes('array') || t.includes('map') || t.includes('filter') || t.includes('reduce')) {
    return 'Mini challenge: Create an array of 5 numbers. Use map to double them, filter to keep only numbers greater than 5, and reduce to get the sum.';
  }
  if (t.includes('promise') || t.includes('async') || t.includes('await') || t.includes('fetch')) {
    return 'Mini challenge: Write an async function that fetches data from a public API (or simulates a fetch). Handle loading and error states.';
  }
  if (t.includes('react') || t.includes('component') || t.includes('state') || t.includes('hook') || t.includes('jsx')) {
    return 'Mini challenge: Create a React counter component with increment and decrement buttons using the useState hook.';
  }
  if (t.includes('git') || t.includes('commit') || t.includes('branch') || t.includes('push')) {
    return 'Mini challenge: Write out the git commands to: initialize a repo, add all files, commit with a message, create a new branch, and switch to it.';
  }
  if (t.includes('node') || t.includes('express') || t.includes('server') || t.includes('route') || t.includes('api')) {
    return 'Mini challenge: Create an Express server with 3 routes: a GET that returns JSON, a POST that echoes the request body, and a root route.';
  }
  
  // Default topic-specific challenges
  const defaults = [
    'Mini challenge: Apply what you learned by writing and testing your own code in the editor above.',
    'Mini challenge: Create a small example using the concepts from this lesson and see it run live in the preview.',
    'Mini challenge: Modify the example code above - change values, add new elements, and observe the results.',
    'Mini challenge: Build a simple project that uses at least 2 of the techniques covered in this lesson.',
  ];
  return defaults[Math.floor(Math.random() * defaults.length)];
}

// Update all challenges
let count = 0;
for (const lvl of Object.values(CURRICULUM)) {
  for (const mod of lvl.modules) {
    for (const l of mod.lessons) {
      l.challenge = getChallenge(l.title, lvl.id);
      count++;
    }
  }
}

const total = Object.values(CURRICULUM).reduce((a,l) => a + l.modules.reduce((b,m) => b + m.lessons.length, 0), 0);
const out = '// BlazeWebGuide Curriculum - ' + total + ' Lessons\nconst CURRICULUM = ' + JSON.stringify(CURRICULUM, null, 2) + ';\nif(typeof module!=="undefined") module.exports={CURRICULUM};\n';
fs.writeFileSync('/home/bwg_challenge/curriculum.js', out);
console.log('Updated ' + count + ' challenges | Total: ' + total);
