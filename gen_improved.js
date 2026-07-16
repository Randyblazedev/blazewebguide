const fs = require('fs');

// High-quality lesson templates for each topic
const TEMPLATES = {
  'HTML': [
    {
      title: 'Introduction to HTML Elements',
      content: `HTML elements are the building blocks of every web page. Think of them like LEGO bricks - each piece has a specific purpose and fits together with others to create something bigger.\n\nAn HTML element consists of a start tag, content, and an end tag: <tagname>content</tagname>. For example, <p>This is a paragraph.</p> creates a paragraph element. Some elements like images (<img>) and line breaks (<br>) are self-closing - they don't need a closing tag.\n\nElements can be nested inside each other. When you nest elements, the inner element is completely contained within the outer one. For example: <div><p>Text</p></div> - the paragraph is nested inside the div. Proper nesting is crucial for correct rendering.\n\nAttributes provide additional information about elements. The class attribute groups elements for styling, id uniquely identifies an element, and src specifies a source URL for images and other media.\n\nMastering HTML elements is your first step toward building websites. Every web page you visit uses these same fundamental building blocks.`,
      code: '<h1>Main Heading</h1>\n<p>This is a paragraph with <strong>bold text</strong> inside.</p>\n<div class="container">\n  <p>Nested paragraph inside a div.</p>\n  <img src="image.jpg" alt="Description">\n</div>',
      duration: '12 min',
      challenge: 'Create an HTML document that contains at least 5 different types of elements: a heading, a paragraph, a link, an image, and a div container with nested elements inside.'
    },
    {
      title: 'HTML Document Structure & DOCTYPE',
      content: `Every HTML document begins with a DOCTYPE declaration. <!DOCTYPE html> tells the browser that this is an HTML5 document. Without it, browsers may render your page in "quirks mode," which can cause layout inconsistencies.\n\nThe <html> element is the root of your document. The lang attribute (e.g., lang="en") specifies the language, which helps search engines and screen readers. Inside <html>, you have two main sections: <head> and <body>.\n\nThe <head> section contains metadata about your page. The <title> tag sets the browser tab text and is crucial for SEO. <meta> tags provide character encoding (charset), viewport settings for mobile devices, and descriptions for search results. <link> tags connect external resources like stylesheets.\n\nThe <body> section holds all visible content. Everything users see - text, images, videos, forms - goes here. The body can contain any number of HTML elements arranged in whatever structure you need.\n\nA proper document structure is the foundation of every well-built website. Get this right, and everything else builds on solid ground.`,
      code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My First Page</title>\n  <meta name="description" content="A great starting point">\n</head>\n<body>\n  <h1>Welcome!</h1>\n  <p>This is my first properly structured HTML page.</p>\n</body>\n</html>',
      duration: '10 min',
      challenge: 'Build a complete HTML page with proper DOCTYPE, html, head (with title, charset, viewport meta tags), and body with at least 3 different elements.'
    },
    {
      title: 'Headings & Document Hierarchy',
      content: `Headings create a visual and structural hierarchy for your content. HTML provides six levels: <h1> through <h6>. Think of them like a book: <h1> is the book title, <h2> is chapter titles, <h3> is section headings, and so on.\n\nSearch engines use headings to understand your page structure. An <h1> tag signals the main topic. Having multiple <h1> tags confuses search engines and can hurt your SEO. Stick to one <h1> per page.\n\nScreen readers also rely on headings for navigation. Users can jump from heading to heading, so a logical hierarchy is essential for accessibility. Don't skip levels - going from <h1> to <h3> without an <h2> in between can disorient users.\n\nBrowsers apply default styling to headings: <h1> is largest, <h6> is smallest. But you'll almost always override these with CSS. The important thing is the structural meaning, not the size.\n\nGood heading structure makes your content more readable, accessible, and SEO-friendly all at once.`,
      code: '<h1>How to Build Websites</h1>\n<h2>Getting Started</h2>\n<h3>What You Need</h3>\n<p>A computer and a text editor.</p>\n<h3>First Steps</h3>\n<p>Learn HTML basics.</p>\n<h2>Advanced Topics</h2>\n<h3>CSS Styling</h3>\n<p>Make things look good.</p>',
      duration: '10 min',
      challenge: 'Write an outline for a blog post using proper heading hierarchy. Use h1 for the title, h2 for main sections, and h3 for subsections. Fill in paragraphs under each heading.'
    },
    {
      title: 'Links & Navigation',
      content: `Links are what make the web interconnected. The <a> tag (anchor) creates hyperlinks to other pages, files, email addresses, or locations within the same page. Without links, the web would be a collection of isolated documents.\n\nThe href attribute is the link's destination. Use absolute URLs (https://example.com) for external sites, relative URLs (/about or page.html) for pages within your site, and fragment identifiers (#section) to jump to a specific part of the current page.\n\nSecurity is important with links. When using target="_blank" to open links in a new tab, always add rel="noopener noreferrer" to prevent the new page from accessing the original page's window object. This prevents a type of phishing attack called tabnabbing.\n\nNavigation menus typically use unordered lists (<ul>) containing links (<a> tags inside <li> elements). This structure is semantic and accessible. Screen readers announce lists of links as navigation landmarks.\n\nMastering links is essential - they're what turns individual pages into a connected website.`,
      code: '<nav>\n  <ul>\n    <li><a href="/">Home</a></li>\n    <li><a href="/about">About</a></li>\n    <li><a href="/contact">Contact</a></li>\n  </ul>\n</nav>\n\n<!-- External link with security attributes -->\n<a href="https://github.com" target="_blank" rel="noopener noreferrer">\n  Visit GitHub\n</a>\n\n<!-- Anchor link -->\n<a href="#section">Jump to Section</a>\n<h2 id="section">Section Content</h2>',
      duration: '12 min',
      challenge: 'Build a navigation menu with 4 links (Home, About, Blog, Contact). Include one external link that opens in a new tab with proper security attributes, and one anchor link that scrolls to a section on the same page.'
    },
    {
      title: 'Images & Media',
      content: `Images bring your web pages to life. The <img> tag is self-closing and requires two critical attributes: src (the image URL) and alt (alternative text). The alt attribute is essential for accessibility - screen readers describe images using alt text, and it shows when images fail to load.\n\nPerformance matters when adding images. Use the loading="lazy" attribute to defer loading off-screen images until the user scrolls near them. Specify width and height attributes to prevent layout shifts as images load - this improves your Core Web Vitals scores.\n\nFor responsive images, the srcset attribute lets you provide multiple image files for different screen sizes. The browser automatically picks the best one. The <picture> element gives even more control, letting you specify different images for different conditions.\n\nModern formats like WebP and AVIF offer better compression than JPEG and PNG. Use them with fallbacks for broader browser support. Tools like Squoosh or ImageOptim can convert your images to these formats.\n\nGood image practices make your site faster, more accessible, and more professional.`,
      code: '<img src="photo.jpg" alt="A beautiful sunset over the mountains" width="800" height="600" loading="lazy">\n\n<!-- Responsive images -->\n<img src="small.jpg"\n     srcset="medium.jpg 800w, large.jpg 1200w"\n     sizes="(max-width: 600px) 100vw, 800px"\n     alt="Responsive image example">\n\n<!-- Figure with caption -->\n<figure>\n  <img src="chart.png" alt="Sales chart showing growth">\n  <figcaption>Q1 2025 Sales Performance</figcaption>\n</figure>',
      duration: '12 min',
      challenge: 'Create a page with 3 images using proper attributes: alt text for accessibility, loading="lazy" for performance, and figure/figcaption for at least one image. Also include a responsive image using srcset.'
    },
    {
      title: 'HTML Lists: Ordered & Unordered',
      content: `Lists organize related items. HTML provides three types: unordered (<ul>) with bullets, ordered (<ol>) with numbers, and description (<dl>) with terms and definitions. Lists can be nested to create multi-level hierarchies.\n\nUnordered lists work best when item order doesn't matter - features lists, ingredients, navigation menus. The browser adds bullet points by default, which you can customize with CSS using the list-style-type property.\n\nOrdered lists are for sequences where order matters - step-by-step instructions, rankings, timelines. You can change the numbering with type="A" (uppercase letters), type="a" (lowercase), type="I" (Roman numerals). The start attribute sets the starting number.\n\nNested lists create sub-items within a list. Place a complete <ul> or <ol> inside an <li> element. This works for multi-level outlines, table of contents, or complex navigation menus.\n\nLists are fundamental for organizing information clearly. Well-structured lists improve readability and accessibility - screen readers announce the number of items in a list.`,
      code: '<h2>Ingredients</h2>\n<ul>\n  <li>2 cups flour</li>\n  <li>1 cup sugar</li>\n  <li>3 eggs</li>\n  <li>1 tsp vanilla</li>\n</ul>\n\n<h2>Steps</h2>\n<ol type="1">\n  <li>Preheat oven to 350\u00b0F</li>\n  <li>Mix dry ingredients\n    <ul>\n      <li>Flour and sugar first</li>\n      <li>Then add eggs</li>\n    </ul>\n  </li>\n  <li>Bake for 30 minutes</li>\n</ol>',
      duration: '10 min',
      challenge: 'Create a recipe page using both ordered and unordered lists. Include at least one nested list. Add a description list (<dl>) for cooking terms/definitions at the bottom.'
    }
  ],
  'CSS': [
    {
      title: 'CSS Selectors & Specificity',
      content: `CSS selectors determine which HTML elements get styled. Mastering selectors is the key to writing clean, maintainable CSS. The three basic selectors are element (p { }), class (.highlight { }), and ID (#header { }).\n\nSpecificity determines which styles win when multiple rules target the same element. Think of it as a point system: element selectors (1 point), class/attribute selectors (10 points), ID selectors (100 points), and inline styles (1000 points). The rule with highest specificity wins.\n\nCombinators let you target elements based on their relationship: descendant (div p selects all paragraphs inside divs), child (div > p selects direct children only), adjacent sibling (h1 + p selects the paragraph immediately after h1), and general sibling (h1 ~ p selects all paragraphs after h1).\n\nPseudo-classes style elements in specific states. :hover for mouseover, :focus for keyboard/click focus, :nth-child(n) for every nth child, :first-child and :last-child for first/last elements. These make your pages interactive without any JavaScript.\n\nUnderstanding selectors and specificity eliminates CSS frustration. You'll write fewer rules and achieve better results.`,
      code: '/* Element selector - 1 point */\np { color: #333; }\n\n/* Class selector - 10 points */\n.highlight { background: yellow; padding: 4px; }\n\n/* ID selector - 100 points */\n#header { background: #1e293b; color: white; }\n\n/* Combinator examples */\n.card p { font-size: 14px; }           /* descendant */\n.card > .title { font-weight: bold; }  /* child */\nh2 + .content { margin-top: 0; }       /* adjacent sibling */\n\n/* Pseudo-class */\na:hover { color: #6366f1; }\nli:nth-child(odd) { background: #f8fafc; }',
      duration: '15 min',
      challenge: 'Write CSS using at least 5 different selector types (element, class, ID, descendant, child, pseudo-class). Create a styled card component that has hover effects and proper nth-child styling on list items.'
    }
  ],
  'JavaScript': [
    {
      title: 'Variables, Constants & Scope',
      content: `Variables store data in JavaScript. The let keyword declares a variable that can be reassigned, while const declares a constant that cannot be reassigned. Always use const by default, and only use let when you know the value needs to change.\n\nScope determines where a variable is accessible. Variables declared with let and const are block-scoped - they only exist within the nearest set of curly braces {}. This is different from var, which is function-scoped and can cause bugs. Avoid var in modern JavaScript.\n\nA variable declared with const cannot be reassigned, but if it's an object or array, its properties or elements CAN be modified. This is a common point of confusion. Use Object.freeze() if you need true immutability.\n\nNaming conventions matter: use camelCase for variables and functions, PascalCase for classes, and UPPERCASE for true constants. Names should be descriptive but concise. Good naming makes code self-documenting.\n\nUnderstanding variables and scope is fundamental to writing correct JavaScript. Most bugs in beginner code stem from scope or reassignment misunderstandings.`,
      code: '// const - cannot be reassigned\nconst API_KEY = "abc123";\nconst user = { name: "Alice", age: 25 };\n// user = { name: "Bob" }; // Error!\nuser.age = 26; // OK - properties can change\n\n// let - can be reassigned\nlet count = 0;\ncount = 1; // OK\ncount += 5; // OK\n\n// Block scope\nif (true) {\n  let blockVar = "only in this block";\n  const alsoBlock = "also only here";\n  var functionVar = "leaks out!"; // Avoid!\n}\n// console.log(blockVar); // Error!\nconsole.log(functionVar); // Works - but bad practice\n\n// Good naming\nconst maxRetries = 3;\nconst userList = [];\nfunction calculateTotal() {}',
      duration: '12 min',
      challenge: 'Write a script that declares variables using const and let appropriately. Create a const object, modify one of its properties, then try to reassign it (observe the error). Use block scope to isolate variables inside an if statement.'
    }
  ]
};

// Generate lessons from templates
let idx = 0;
function makeLesson(topic, template) {
  idx++;
  const id = topic.toLowerCase().replace(/[^a-z]/g, '-') + '-' + idx;
  return {
    id,
    title: template.title,
    content: template.content,
    codeExample: template.code,
    duration: template.duration,
    challenge: template.challenge,
    ...((idx % 5 === 0) ? { challengeType: 'playground', challengeDescription: 'Build: ' + template.challenge } : {})
  };
}

// Build curriculum
const curriculum = {
  beginner: {
    id: 'beginner',
    title: 'Beginner',
    subtitle: 'Start from absolute zero',
    color: '#22c55e',
    modules: [
      {
        id: 'html-fundamentals',
        title: 'HTML Fundamentals',
        description: 'Learn HTML from scratch - the foundation of every website',
        lessons: TEMPLATES.HTML.map(t => makeLesson('b-html', t))
      },
      {
        id: 'css-essentials',
        title: 'CSS Essentials',
        description: 'Style your web pages with CSS',
        lessons: TEMPLATES.CSS.map(t => makeLesson('b-css', t))
      },
      {
        id: 'javascript-basics',
        title: 'JavaScript Basics',
        description: 'Add interactivity with JavaScript',
        lessons: TEMPLATES.JavaScript.map(t => makeLesson('b-js', t))
      }
    ]
  },
  intermediate: { id: 'intermediate', title: 'Intermediate', color: '#3b82f6', modules: [] },
  advanced: { id: 'advanced', title: 'Advanced', color: '#f59e0b', modules: [] },
  pro: { id: 'pro', title: 'Pro', color: '#ef4444', modules: [] }
};

const total = Object.values(curriculum).reduce((a,l) => a + l.modules.reduce((b,m) => b + m.lessons.length, 0), 0);
const output = '// BlazeWebGuide Improved Curriculum\nconst CURRICULUM = ' + JSON.stringify(curriculum, null, 2) + ';\nif(typeof module!=="undefined") module.exports={CURRICULUM};\n';
fs.writeFileSync('/home/bwg_improve/curriculum.js', output);
console.log('Written: ' + (Buffer.byteLength(output,'utf8')/1024).toFixed(1) + 'KB');
console.log('Lessons: ' + total);

// Show sample
const sample = curriculum.beginner.modules[0].lessons[0];
console.log('\n=== Sample Lesson ===');
console.log('Title:', sample.title);
console.log('Duration:', sample.duration);
console.log('Content length:', sample.content.length, 'chars');
