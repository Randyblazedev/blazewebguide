const fs = require('fs');
// Generate lesson content as individual JSON entries for on-demand loading
// Content is keyed by lesson ID

const topics = {
  'html': 'HTML is the foundation of the web. It uses tags to structure content. Every webpage uses HTML to define headings, paragraphs, links, images, and more. Learning HTML is the first step to becoming a web developer.\n\nWhen you write HTML, you create a document structure that browsers understand and render visually. Tags tell the browser what each piece of content IS - a heading, a paragraph, a link, or an image.\n\nSemantic HTML means using tags that describe the content\'s meaning, not just its appearance. Tags like <header>, <nav>, <main>, <article>, and <footer> make your code more accessible and SEO-friendly.',
  'css': 'CSS brings your HTML to life. It controls colors, fonts, spacing, layout, and animations. CSS can be added inline, internally, or externally. The cascade determines which styles take priority when conflicts occur.\n\nThe box model is fundamental: every element is a box with content, padding, border, and margin areas. Understanding this helps you control spacing and layout precisely.\n\nModern CSS provides powerful layout tools. Flexbox excels at one-dimensional layouts (rows or columns). Grid handles two-dimensional layouts (rows AND columns). Both are essential for responsive design.',
  'js': 'JavaScript makes web pages interactive. It runs in the browser and can respond to user actions, modify the page content, communicate with servers, and much more.\n\nVariables store data. Functions group reusable code. Events let you respond to clicks, keypresses, and other user actions. The DOM API lets you access and modify page elements.\n\nModern JavaScript includes powerful features like arrow functions, promises for async operations, template literals for strings, and destructuring for cleaner code.',
  'git': 'Git tracks changes in your code over time. It lets you experiment freely, collaborate with others, and revert mistakes. GitHub hosts Git repositories online.\n\nThe basic workflow: initialize a repo, make changes, stage them with git add, commit with a message, and push to a remote. Branches let you work on features independently.',
  'react': 'React builds user interfaces with reusable components. Each component manages its own state and renders based on props. JSX lets you write HTML-like code inside JavaScript.\n\nuseState manages component data that can change. useEffect handles side effects like fetching data. Components compose together to build complex UIs.',
  'node': 'Node.js runs JavaScript on the server. It uses an event-driven, non-blocking I/O model. Express is the most popular web framework for Node.js, making it easy to create APIs and web servers.',
  'advanced': 'Advanced concepts include closures, prototypes, the event loop, and memory management. Understanding these helps you write more efficient and bug-free code.',
};

// Generate content for all lessons
const data = {};
const levels = ['beginner','intermediate','advanced','pro'];
const counts = {beginner:150, intermediate:200, advanced:300, pro:400};

let lesId = 0;
levels.forEach(lvl => {
  const domain = ['html','css','html','html','css','css','js','js','html','css','css','js','html','css','react','node','advanced'];
  for (let i = 0; i < counts[lvl]; i++) {
    lesId++;
    const d = domain[i % domain.length];
    const id = lvl + '-' + lesId;
    const title = d.charAt(0).toUpperCase() + d.slice(1) + ' Lesson ' + (i + 1);
    const content = topics[d] + '\n\nIn this lesson for ' + lvl + ' level, we explore ' + title.toLowerCase() + '. Practice the concepts and complete the challenge to solidify your understanding.';
    const code = d === 'html' ? '<h1>' + title + '</h1>\n<p>Practice makes perfect!</p>' :
                 d === 'css' ? '/* ' + title + ' */\n.container { color: #333; }' :
                 d === 'js' ? '// ' + title + '\nconsole.log("Learning ' + title + '");' :
                 d === 'git' ? '# ' + title + '\ngit init\ngit add .' :
                 d === 'react' ? '// ' + title + '\nfunction App() { return <div>Hello</div>; }' :
                 d === 'node' ? '// ' + title + '\nconst express = require("express");' :
                 '/* ' + title + ' */\n// Advanced concepts';
    data[id] = { title, content, codeExample: code };
  }
});

// Check content file size
const out = 'var LESSON_CONTENT = ' + JSON.stringify(data) + ';';
fs.writeFileSync('/home/bwg_ondemand/curriculum_content.js', out);
const total = Object.keys(data).length;
console.log('Content generated: ' + (out.length/1024).toFixed(1) + 'KB for ' + total + ' lessons');
