// BlazeWebGuide v2 - Quality Curriculum
const CURRICULUM = {
  "beginner": {
    "id": "beginner",
    "title": "Beginner",
    "subtitle": "Start from zero",
    "color": "#22c55e",
    "modules": [
      {
        "id": "html",
        "title": "HTML Fundamentals",
        "description": "Structure websites with HTML",
        "lessons": [
          {
            "id": "b-html-1",
            "title": "Introduction to HTML",
            "content": "HTML (HyperText Markup Language) is the standard language for creating web pages. Think of HTML as the skeleton of a website - it provides structure and meaning to content. Every heading, paragraph, image, and link on the web is defined using HTML.\n\nHTML uses tags enclosed in angle brackets: <tagname>content</tagname>. Most elements have an opening tag and a closing tag. The content between the tags is what appears on the page. For example <h1>Welcome</h1> creates a large heading.\n\nHTML documents follow a standard structure: DOCTYPE declares the version, <html> wraps everything, <head> contains metadata and title, and <body> holds all visible content. Getting this structure right is essential.\n\nAttributes provide additional information about elements. The class attribute groups elements for CSS styling, id provides a unique identifier, and src specifies the source URL for images and other embedded content.\n\nBrowser Developer Tools (F12) let you inspect any pages HTML. Right-click any element and select \"Inspect\" to see its HTML structure. This is the best way to learn how professional websites are built.",
            "codeExample": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n  <p>This is my first HTML page.</p>\n</body>\n</html>",
            "duration": "10 min",
            "challenge": "Create a complete HTML page with a title, a main heading, a paragraph about yourself, and view it in your browser."
          },
          {
            "id": "b-html-2",
            "title": "Text Formatting in HTML",
            "content": "HTML provides many tags for formatting text beyond simple paragraphs. The <strong> tag indicates important text (rendered bold), while <em> indicates emphasis (rendered italic). These are semantic tags that convey meaning, not just visual styling.\n\nFor visual styling without meaning, use <b> for bold and <i> for italic. The difference matters for accessibility: screen readers emphasize <strong> and <em> differently but ignore <b> and <i>.\n\nOther useful text tags: <mark> highlights text, <small> reduces text size, <del> shows deleted text with strikethrough, <ins> shows inserted text with underline, <sub> creates subscript, and <sup> creates superscript.\n\nLine breaks use the self-closing <br> tag. Thematic breaks use <hr>. The <pre> tag preserves whitespace for displaying code blocks exactly as formatted. The <code> tag marks inline text as code.\n\nUsing semantic text tags correctly improves accessibility, SEO, and code clarity. Search engines understand the importance of <strong> text.",
            "codeExample": "<p><strong>Warning:</strong> This is important!</p>\n<p>The <em>Queen Mary</em> sailed in <b>1922</b>.</p>\n<p>H<sub>2</sub>O is water. E=mc<sup>2</sup>.</p>\n<p><mark>Highlighted</mark> and <del>removed</del> text.</p>",
            "duration": "10 min",
            "challenge": "Write a paragraph using at least 5 different text formatting tags. Include a formula with sup/sub, highlighted text, and a code snippet."
          },
          {
            "id": "b-html-3",
            "title": "Creating Links",
            "content": "Links are the connective tissue of the web. The <a> (anchor) element creates hyperlinks to other pages, files, email addresses, or locations within the current page. The href attribute defines the link destination.\n\nAbsolute URLs include the full web address like https://example.com/page. Relative URLs link within your site like /about or page.html. Use relative URLs for internal links as they work on any domain and are easier to maintain.\n\nOpen links in a new tab with target=\"_blank\". Always add rel=\"noopener noreferrer\" for security to prevent the new page from accessing the original page. This prevents a security issue called tabnabbing.\n\nEmail links use mailto: syntax like <a href=\"mailto:user@example.com\">Email</a>. Phone links use tel:. Anchor links jump to elements by ID like <a href=\"#section\">Jump</a> which scrolls to an element with id=\"section\".\n\nThe title attribute adds a tooltip on hover. The download attribute forces file download. Combining these attributes makes links powerful and user-friendly.",
            "codeExample": "<nav>\n  <a href=\"/\">Home</a> |\n  <a href=\"/blog\">Blog</a> |\n  <a href=\"/contact\">Contact</a>\n</nav>\n<a href=\"https://github.com\" target=\"_blank\" rel=\"noopener\">Open GitHub (new tab)</a>\n<a href=\"mailto:hello@example.com\">Email Me</a>\n<a href=\"#section\">Jump to Section</a>",
            "duration": "12 min",
            "challenge": "Build a navigation menu with 4 links, one external link opening in a new tab with security attrs, an email link, and an anchor link. Use proper nav structure."
          },
          {
            "id": "b-html-4",
            "title": "Images on the Web",
            "content": "Images enhance web pages visually but must be implemented correctly. The <img> tag is self-closing with two required attributes: src (file path or URL) and alt (alternative text description).\n\nAlt text is crucial for accessibility. Screen readers describe images using alt text. Alt text also displays when images fail to load. Good alt text is descriptive and concise: \"A golden retriever puppy playing in grass\" not just \"Image\".\n\nPerformance best practices: specify width and height attributes to prevent layout shifts. Use loading=\"lazy\" for images below the fold to defer loading until the user scrolls near, saving bandwidth.\n\nResponsive images use the srcset attribute to serve different image files for different screen sizes. The browser picks the best option automatically. The <picture> element offers even more control.\n\nModern formats like WebP (supported in 96% of browsers) offer 25-35% better compression than JPEG. Use <picture> with fallbacks to support older browsers.",
            "codeExample": "<figure>\n  <img src=\"photo.jpg\" alt=\"Sunset over mountains\"\n       width=\"800\" height=\"500\" loading=\"lazy\">\n  <figcaption>Mountain sunset</figcaption>\n</figure>\n<picture>\n  <source srcset=\"image.webp\" type=\"image/webp\">\n  <img src=\"image.jpg\" alt=\"Description\">\n</picture>",
            "duration": "12 min",
            "challenge": "Add 3 images with alt text, dimensions, lazy loading, and figure/figcaption. Use srcset for responsive images."
          },
          {
            "id": "b-html-5",
            "title": "HTML Lists",
            "content": "HTML provides three types of lists: unordered <ul> with bullets for items where order doesn't matter, ordered <ol> with numbers for sequential items, and description <dl> for term-definition pairs.\n\nList items use the <li> tag inside <ul> or <ol>. Ordered lists have attributes: type=\"A\" for uppercase letters, type=\"a\" for lowercase, type=\"I\" for Roman numerals. The start attribute sets the starting number. The reversed attribute counts down.\n\nNested lists create multi-level hierarchies by placing a complete <ul> or <ol> inside an <li> element. This works for outlines, multi-level navigation, and detailed instructions.\n\nDescription lists use <dt> for the term and <dd> for its definition. Perfect for glossaries, metadata listings, and FAQ sections. Multiple <dd> elements can follow one <dt>.\n\nLists are essential for accessible content. Screen readers announce the list type and item count. Well-organized lists improve both readability and comprehension.",
            "codeExample": "<ul>\n  <li>Fruits\n    <ul><li>Apples</li><li>Bananas</li></ul>\n  </li>\n  <li>Vegetables</li>\n</ul>\n<ol type=\"I\">\n  <li>First place</li>\n  <li>Second place</li>\n</ol>\n<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n</dl>",
            "duration": "10 min",
            "challenge": "Create a nested shopping list (ul), a recipe steps list (ol with Roman numerals), and a glossary (dl) with 5 terms.",
            "challengeType": "playground",
            "challengeDescription": "Build: Create a nested shopping list (ul), a recipe steps list (ol with Roman numerals), and a glossary (dl) with 5 terms."
          },
          {
            "id": "b-html-6",
            "title": "HTML Tables & Data",
            "content": "Tables organize data into rows and columns. Use <table> as container, <tr> for rows, <th> for headers, and <td> for data cells. Tables should only be used for tabular data, not page layout.\n\nThe <thead>, <tbody>, and <tfoot> elements group rows semantically. Thead contains headers, tbody contains data, tfoot contains summaries. These sections can be styled independently and improve accessibility.\n\nMerging cells uses colspan (horizontal merge across columns) and rowspan (vertical merge across rows). For example colspan=\"2\" makes a cell span two columns. This is useful for headers spanning multiple columns.\n\nThe <caption> element provides a title for the table. The scope attribute on <th> tells screen readers if the header applies to a column or row. This is critical for accessible data tables.\n\nRemember: use tables only for data display. Use CSS Grid or Flexbox for page layout. Tables are for schedules, pricing, comparisons, and structured data.",
            "codeExample": "<table>\n  <caption>Monthly Budget</caption>\n  <thead>\n    <tr><th>Category</th><th>Budget</th><th>Actual</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Rent</td><td>$1200</td><td>$1200</td></tr>\n    <tr><td>Food</td><td>$600</td><td>$680</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><th>Total</th><td>$1800</td><td>$1880</td></tr>\n  </tfoot>\n</table>",
            "duration": "12 min",
            "challenge": "Create a class timetable with colspan/rowspan, proper headers with scope, a caption, and all three table sections (thead/tbody/tfoot)."
          }
        ]
      },
      {
        "id": "css",
        "title": "CSS Styling",
        "description": "Design beautiful pages",
        "lessons": [
          {
            "id": "b-css-1",
            "title": "CSS Syntax & How It Works",
            "content": "CSS (Cascading Style Sheets) defines how HTML elements look. The basic syntax is simple: a selector targets HTML elements, and declaration blocks contain property-value pairs separated by semicolons.\n\nCSS can be added to your page in three ways. Inline styles use the style attribute directly on HTML elements (avoid for maintainability). Internal styles use a <style> tag in the <head>. External styles use a separate .css file linked via <link> (best practice).\n\nThe cascade is CSS's most important concept. When multiple rules target the same element, the browser determines which applies based on: importance (!important), specificity (how specific the selector is), and source order (later rules override earlier ones).\n\nSpecificity is calculated like a score: element selectors = 1, class selectors = 10, ID selectors = 100, inline styles = 1000. The selector with the highest score wins. Understanding specificity eliminates CSS frustration.\n\nBrowser DevTools show you exactly which CSS rules apply to any element, which are overridden, and what the computed styles are. This is your most powerful CSS debugging tool.",
            "codeExample": "/* External CSS (styles.css) */\nbody {\n  font-family: system-ui, sans-serif;\n  background: #f8fafc;\n  color: #1e293b;\n  margin: 0;\n  padding: 20px;\n}\n\nh1 { color: #6366f1; font-size: 2rem; }\n.highlight { background: #fef3c7; padding: 4px 8px; }\n#header { border-bottom: 2px solid #e2e8f0; }",
            "duration": "12 min",
            "challenge": "Create an HTML page and style it using all three CSS methods (inline, internal, external). Observe the cascade by writing conflicting rules and seeing which wins."
          },
          {
            "id": "b-css-2",
            "title": "Colors & Backgrounds",
            "content": "CSS offers many ways to specify colors. Named colors like red and blue are easiest but limited. Hex codes like #ff0000 (red) offer 16 million colors and are the most common. RGB and RGBA give precise control with optional opacity.\n\nHSL notation (hue, saturation, lightness) is intuitive once you understand it: hue is the color wheel position (0-360), saturation is intensity (0-100%), lightness is brightness (0-100%). HSL makes creating color schemes easy.\n\nBackground properties control element backgrounds. background-color sets a solid fill. background-image adds a pattern or photo. background-size: cover scales the image to cover the element. Gradients create smooth transitions between colors.\n\nLinear gradients go in a direction (to bottom, 45deg). Radial gradients radiate from a center point. You can stack multiple backgrounds and use transparent overlays for visual effects.\n\nAccessibility tip: always ensure sufficient contrast between text and background colors. Use tools like WebAIM Contrast Checker to verify WCAG compliance.",
            "codeExample": ".gradient-card {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  padding: 40px;\n  border-radius: 16px;\n}\n\n.translucent {\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.hero {\n  background-image: url(\"hero.jpg\");\n  background-size: cover;\n  background-position: center;\n  height: 400px;\n}",
            "duration": "12 min",
            "challenge": "Create a page with a gradient hero section, a card using RGBA semi-transparent background, and a section with a background image using cover sizing."
          },
          {
            "id": "b-css-3",
            "title": "Typography & Fonts",
            "content": "Typography is crucial for readable, professional web design. CSS provides extensive control over text appearance. The font-family property defines the typeface; always provide fallback fonts separated by commas.\n\nFont size can be set in pixels (px), relative units (rem, em), or viewport units (vw). Use rem for body text (1rem = 16px by default) because it respects user browser settings. Avoid px for font sizes.\n\nLine-height controls vertical spacing between lines. A value of 1.6-1.8 is ideal for body text readability. Text-align aligns text left, right, center, or justify. Letter-spacing and word-spacing adjust character and word gaps.\n\nFont-weight controls thickness: 400 is normal, 600 is semibold, 700 is bold, 800 is extra-bold. Font-style for italic/normal. Text-transform for uppercase, lowercase, or capitalize.\n\nGoogle Fonts offers hundreds of free fonts. Import them in your CSS with @import or link them in HTML. Good typography choices make your site feel professional and polished.",
            "codeExample": "@import url(\"https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&display=swap\");\n\nbody {\n  font-family: \"Inter\", system-ui, sans-serif;\n  font-size: 16px;\n  line-height: 1.7;\n  color: #1e293b;\n}\n\nh1 {\n  font-size: 2.5rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n}\n\n.subtitle {\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n}\n\np { margin-bottom: 1.2rem; }",
            "duration": "12 min",
            "challenge": "Import a Google Font and create a styled article. Include a large bold title with tight letter-spacing, an uppercase subtitle, and well-spaced body text with proper line-height."
          },
          {
            "id": "b-css-4",
            "title": "The CSS Box Model",
            "content": "Every HTML element is a rectangular box. The CSS Box Model describes how element size is calculated. From inside out: content area, padding (space around content), border (line around padding), and margin (space outside border).\n\nBy default, the width and height properties only apply to the content area. The actual rendered width equals content + padding-left + padding-right + border-left + border-right. This makes sizing unpredictable.\n\nThe fix: use box-sizing: border-box. This includes padding and border in the width and height calculations, making sizing intuitive. You should apply this to all elements with the universal selector.\n\nMargins can collapse vertically: when two block elements are stacked, their margins overlap and only the larger margin is used. This is normal behavior but can be confusing. Padding does not collapse.\n\nUnderstanding the box model is fundamental to CSS layout. Most layout issues trace back to box model misunderstandings. Use DevTools to inspect the box model of any element visually.",
            "codeExample": "* { box-sizing: border-box; }\n\n.card {\n  width: 300px;\n  padding: 24px;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  margin: 16px;\n  background: white;\n}\n\n/* Compare */\n.content-box {\n  box-sizing: content-box;\n  width: 300px;\n  padding: 20px;\n  border: 2px solid red;\n  /* Actual width: 300 + 20 + 20 + 2 + 2 = 344px */\n}\n\n.border-box {\n  box-sizing: border-box;\n  width: 300px;\n  padding: 20px;\n  border: 2px solid green;\n  /* Actual width: 300px (content shrinks to 256px) */\n}",
            "duration": "14 min",
            "challenge": "Create two identical-looking card divs. Use content-box on one and border-box on the other. Give them the same width, padding, and border. Measure the difference in rendered size. Write 3 cards in a row using border-box."
          },
          {
            "id": "b-css-5",
            "title": "Flexbox Layout",
            "content": "Flexbox is a one-dimensional layout method that distributes space and aligns content within a container. It is perfect for navigation bars, card layouts, centering, and responsive components.\n\nTo use flexbox, set display: flex on the container. This creates a flex formatting context for its direct children. The main axis runs in the flex-direction direction (row by default). The cross axis runs perpendicular.\n\nContainer properties: flex-direction (row, column, row-reverse), justify-content aligns along the main axis (flex-start, center, space-between, space-around, space-evenly), align-items aligns along the cross axis (stretch, center, flex-start, flex-end).\n\nItem properties: flex is shorthand for flex-grow (how much to grow), flex-shrink (how much to shrink), and flex-basis (initial size). align-self overrides alignment for individual items. Order changes display order.\n\nFlexbox excels at one-dimensional layouts - a row OR a column. For two-dimensional layouts (rows AND columns), use CSS Grid instead.",
            "codeExample": ".container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: #1e293b;\n  border-radius: 12px;\n}\n\n.item {\n  background: #6366f1;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n}\n\n.item.grow { flex: 2; }\n.center-me {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}",
            "duration": "15 min",
            "challenge": "Build a navbar with logo left, nav links center, and signup button right using flexbox. Create a card row with 3 cards using space-between. Center a div both horizontally and vertically.",
            "challengeType": "playground",
            "challengeDescription": "Build: Build a navbar with logo left, nav links center, and signup button right using flexbox. Create a card row with 3 cards using space-between. Center a div both horizontally and vertically."
          },
          {
            "id": "b-css-6",
            "title": "CSS Grid Layout",
            "content": "CSS Grid is a two-dimensional layout system that handles rows and columns simultaneously. It is ideal for page layouts, photo galleries, dashboards, and complex responsive designs.\n\nDefine grid columns with grid-template-columns and rows with grid-template-rows. Use the fr unit (fraction) to distribute available space. repeat(3, 1fr) creates three equal columns. The gap property adds spacing between cells.\n\nPlace items explicitly using grid-column and grid-row. Grid-column: 1 / 3 spans from column line 1 to column line 3 (spanning 2 columns). The span keyword simplifies this: grid-column: span 2.\n\nGrid is responsive without media queries using auto-fit, minmax, and auto-fill. grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) creates a responsive number of columns that fit the available space.\n\nGrid areas let you name sections of your layout. Define areas with grid-template-areas and assign items with grid-area. This is the most intuitive way to create complex page layouts like headers, sidebars, content, and footers.",
            "codeExample": ".grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n  padding: 20px;\n}\n\n.card {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.08);\n}\n\n.card.featured { grid-column: span 2; }\n\n/* Page layout with grid areas */\n.page {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 200px 1fr;\n  gap: 16px;\n}\nheader { grid-area: header; }\naside { grid-area: sidebar; }\nmain { grid-area: main; }\nfooter { grid-area: footer; }",
            "duration": "15 min",
            "challenge": "Create a photo gallery using CSS Grid with auto-fit columns. Make the first image span 2 columns. Create a full page layout using grid-template-areas with header, sidebar, main content, and footer sections."
          }
        ]
      },
      {
        "id": "js",
        "title": "JavaScript",
        "description": "Make pages interactive",
        "lessons": [
          {
            "id": "b-js-1",
            "title": "JavaScript Variables & Data",
            "content": "JavaScript is the programming language of the web. It makes pages interactive. Variables store data values. Use const (cannot be reassigned) by default, and let (can be reassigned) when the value needs to change. Avoid var.\n\nJavaScript has dynamic typing, meaning variables can hold any type of data. Primitive types: string (text), number (integers and decimals), boolean (true/false), null (intentionally empty), undefined (not assigned), and symbol.\n\nReference types include objects (collections of key-value pairs), arrays (ordered lists), and functions. Unlike primitives, reference types are stored by reference, not by value.\n\nThe typeof operator checks a variable's type. Use === for strict equality (checks value AND type) instead of == (loose equality, can cause bugs). This is a common source of errors for beginners.\n\nNaming conventions: use camelCase (myVariableName), descriptive names (userAge not ua), and boolean names that sound true/false (isActive, hasPermission).",
            "codeExample": "// Primitive variables\nconst name = \"Alice\";\nlet age = 25;\nconst isStudent = true;\nlet score = null;\n\n// Reference types\nconst person = {\n  name: \"Bob\",\n  age: 30,\n  greet() { return \"Hello!\"; }\n};\n\nconst colors = [\"red\", \"green\", \"blue\"];\n\n// Type checking\nconsole.log(typeof name);  // \"string\"\nconsole.log(typeof age);   // \"number\"\nconsole.log(typeof isStudent); // \"boolean\"\n\n// Strict equality\nconsole.log(5 === \"5\");  // false\nconsole.log(5 == \"5\");   // true (avoid)",
            "duration": "12 min",
            "challenge": "Create variables using const and let for different data types. Create an object representing a car with properties and an array of your favorite movies. Log their types using typeof."
          },
          {
            "id": "b-js-2",
            "title": "Functions & Arrow Functions",
            "content": "Functions are reusable blocks of code. They take inputs (parameters), perform actions, and return outputs. Functions are the building blocks of JavaScript applications.\n\nTraditional function declarations are hoisted (can be called before they are defined). Function expressions assign a function to a variable. Arrow functions (=>) are a modern concise syntax.\n\nArrow functions differ from regular functions in important ways: they don't have their own this binding (they inherit from the surrounding scope), they're always anonymous, and they have an implicit return when using single-expression syntax without curly braces.\n\nParameters can have default values: function greet(name = \"Guest\"). The rest parameter (...args) collects remaining arguments into an array. Functions can be passed as arguments to other functions (callbacks).\n\nGood functions do ONE thing, have clear names describing what they do, and are short enough to understand at a glance. Following these principles makes code maintainable.",
            "codeExample": "// Function declaration\nfunction add(a, b) {\n  return a + b;\n}\n\n// Arrow function (concise)\nconst multiply = (a, b) => a * b;\n\n// Arrow function (multiline)\nconst greet = (name) => {\n  const message = `Hello, ${name}!`;\n  return message;\n};\n\n// Default parameters\nconst createUser = (name = \"Anonymous\", age = 0) => ({ name, age });\n\n// Callback\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(n => n * 2);\n\n// Rest parameters\nconst sum = (...nums) => nums.reduce((a, b) => a + b, 0);\n\nconsole.log(add(5, 3));      // 8\nconsole.log(multiply(4, 2)); // 8\nconsole.log(greet(\"Alice\")); // Hello, Alice!",
            "duration": "14 min",
            "challenge": "Write 3 functions using arrow syntax: one that takes a name and returns a greeting, one that filters an array to return only even numbers, and one that takes any number of arguments and returns their average using the rest parameter."
          },
          {
            "id": "b-js-3",
            "title": "DOM Manipulation",
            "content": "The Document Object Model (DOM) is a tree representation of HTML. JavaScript can access and modify the DOM to create dynamic, interactive pages. The document object is the entry point.\n\nSelect elements with document.querySelector() (returns first match) or document.querySelectorAll() (returns all matches as a NodeList). Also: getElementById, getElementsByClassName, getElementsByTagName.\n\nModify content: textContent changes text (safe, no HTML parsing), innerHTML changes HTML (powerful but can be insecure), innerText is similar to textContent but respects CSS visibility.\n\nModify attributes and styles: element.setAttribute(\"class\", \"active\"), element.classList.add(\"highlight\"), element.style.color = \"red\". CSS class manipulation is preferred over inline styles.\n\nCreate and remove elements: document.createElement(\"div\"), parent.appendChild(child), parent.removeChild(child), or element.remove(). The insertAdjacentHTML method inserts HTML at a specific position relative to an element.",
            "codeExample": "<div id=\"app\">\n  <h1 id=\"title\">Original Title</h1>\n  <ul id=\"list\"></ul>\n  <button id=\"addBtn\">Add Item</button>\n</div>\n\n<script>\n  // Select elements\n  const title = document.getElementById(\"title\");\n  const list = document.getElementById(\"list\");\n  const addBtn = document.getElementById(\"addBtn\");\n\n  // Modify text\n  title.textContent = \"My Dynamic Page\";\n\n  // Add elements\n  let count = 0;\n  addBtn.addEventListener(\"click\", () => {\n    count++;\n    const li = document.createElement(\"li\");\n    li.textContent = `Item ${count}`;\n    li.classList.add(\"list-item\");\n    list.appendChild(li);\n  });\n\n  // Style\n  title.style.color = \"#6366f1\";\n  title.style.fontSize = \"2rem\";\n</script>",
            "duration": "15 min",
            "challenge": "Create a dynamic to-do list: users type a task in an input, click \"Add\", and it appears in a list. Include a \"Complete\" button that strikes through completed items and a \"Remove\" button that deletes them."
          },
          {
            "id": "b-js-4",
            "title": "Events & Event Listeners",
            "content": "Events are actions that happen in the browser - clicks, keypresses, mouse movements, form submissions, page loads. JavaScript listens for these events and responds with event handlers.\n\nThe addEventListener method attaches a handler to an element: element.addEventListener(\"click\", handler). The first argument is the event type (click, submit, keydown, mouseover, etc.). The second is the callback function.\n\nThe event object contains useful properties: event.target is the element that triggered the event, event.preventDefault() stops default behavior (like form submission), event.stopPropagation() stops the event from bubbling up.\n\nEvent delegation is a pattern where you attach a single listener to a parent element instead of multiple listeners to child elements. The event bubbles up from the target to the parent, where you check event.target to identify which child was clicked.\n\nKeyboard events: keydown (any key), keyup (key released), keypress (character key). Check which key was pressed using event.key (\"Enter\", \"Escape\", etc.). This enables keyboard shortcuts and form enhancements.",
            "codeExample": "<form id=\"myForm\">\n  <input type=\"text\" id=\"nameInput\" placeholder=\"Enter name\">\n  <button type=\"submit\">Submit</button>\n</form>\n<div id=\"output\"></div>\n\n<script>\n  const form = document.getElementById(\"myForm\");\n  const output = document.getElementById(\"output\");\n\n  form.addEventListener(\"submit\", (event) => {\n    event.preventDefault(); // Stop page reload\n    const name = document.getElementById(\"nameInput\").value;\n    output.innerHTML = `<strong>Hello, ${name}!</strong>`;\n  });\n\n  // Event delegation\n  document.getElementById(\"output\").addEventListener(\"click\", (e) => {\n    if (e.target.tagName === \"STRONG\") {\n      alert(\"You clicked the greeting!\");\n    }\n  });\n\n  // Keyboard shortcut\n  document.addEventListener(\"keydown\", (e) => {\n    if (e.key === \"Escape\") {\n      output.innerHTML = \"\";\n    }\n  });\n</script>",
            "duration": "15 min",
            "challenge": "Build a simple app: a form with name and email inputs. On submit, display the data below the form. Add a clear button. Use event delegation to handle clicks on dynamically added items. Add an Escape key handler."
          },
          {
            "id": "b-js-5",
            "title": "Arrays & Array Methods",
            "content": "Arrays store ordered collections of data. They can hold any type - numbers, strings, objects, or mixed. Arrays have a length property and are zero-indexed (first item is at index 0).\n\nModern JavaScript provides powerful array methods that make code cleaner and more expressive. map() transforms each element and returns a new array. filter() keeps elements that pass a test. reduce() boils the array down to a single value.\n\nforEach() executes a function for each element (like a loop but more expressive). find() returns the first element that passes a test. some() checks if any element passes a test (returns boolean). every() checks if ALL elements pass a test.\n\nsort() sorts arrays. By default it converts elements to strings, which causes unexpected results with numbers. Pass a compare function: numbers.sort((a, b) => a - b) for ascending.\n\nChain array methods together for powerful data processing: items.filter(f).map(g).reduce(h). Each method returns a new array, so they can be chained. This is called functional programming.",
            "codeExample": "const numbers = [3, 1, 4, 1, 5, 9, 2, 6];\n\n// Map - transform each element\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled); // [6, 2, 8, 2, 10, 18, 4, 12]\n\n// Filter - keep elements that pass\nconst big = numbers.filter(n => n > 4);\nconsole.log(big); // [5, 9, 6]\n\n// Reduce - combine to single value\nconst sum = numbers.reduce((a, b) => a + b, 0);\nconsole.log(sum); // 31\n\n// Chaining\nconst result = numbers\n  .filter(n => n % 2 === 0)\n  .map(n => n * 10)\n  .reduce((a, b) => a + b);\nconsole.log(result); // 80 (4+0+2+0+6 = 12, *10 = 120, wait...)\n\n// Find\nconst firstBig = numbers.find(n => n > 5);\nconsole.log(firstBig); // 9\n\n// Every / Some\nconsole.log(numbers.every(n => n > 0)); // true\nconsole.log(numbers.some(n => n > 8)); // true",
            "duration": "14 min",
            "challenge": "Create an array of objects representing products (name, price, category). Use filter to get products under $50, map to get just the names, reduce to calculate total price. Chain all three methods.",
            "challengeType": "playground",
            "challengeDescription": "Build: Create an array of objects representing products (name, price, category). Use filter to get products under $50, map to get just the names, reduce to calculate total price. Chain all three methods."
          },
          {
            "id": "b-js-6",
            "title": "Async JavaScript & Promises",
            "content": "JavaScript is single-threaded but handles asynchronous operations through the event loop. Asynchronous code lets your page stay responsive while waiting for data, file operations, or timers.\n\nA Promise represents a value that may be available now, later, or never. A promise has three states: pending (waiting), fulfilled (success), or rejected (failed). Promises chain with .then() and catch errors with .catch().\n\nThe Fetch API makes HTTP requests using promises. fetch(url) returns a promise that resolves with the response. Call res.json() to parse the response body as JSON. Chain .catch() for error handling.\n\nAsync/await is modern syntax that makes asynchronous code read like synchronous code. Mark a function with async, then use await before promises. Error handling uses try/catch blocks. This is much cleaner than promise chains.\n\nParallel requests: Promise.all() runs multiple promises in parallel and resolves when all complete. This is much faster than sequential awaits. Use Promise.race() to get the first resolved promise (timeout pattern).",
            "codeExample": "// Fetch API with promises\nfetch(\"https://api.github.com/users/octocat\")\n  .then(res => {\n    if (!res.ok) throw new Error(\"Network error\");\n    return res.json();\n  })\n  .then(data => console.log(data.login))\n  .catch(err => console.error(\"Failed:\", err));\n\n// Same with async/await (cleaner)\nasync function getUser(username) {\n  try {\n    const res = await fetch(`https://api.github.com/users/${username}`);\n    if (!res.ok) throw new Error(\"User not found\");\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(\"Error:\", err.message);\n    return null;\n  }\n}\n\n// Parallel requests\nasync function getMultiple() {\n  const [user1, user2] = await Promise.all([\n    getUser(\"octocat\"),\n    getUser(\"defunkt\")\n  ]);\n  console.log(user1, user2);\n}",
            "duration": "15 min",
            "challenge": "Create a function that fetches weather data from a free API (or simulates it). Display loading state, error handling, and the result. Then fetch 3 cities in parallel using Promise.all and display all results."
          }
        ]
      }
    ]
  },
  "intermediate": {
    "id": "intermediate",
    "title": "Intermediate",
    "color": "#3b82f6",
    "modules": []
  },
  "advanced": {
    "id": "advanced",
    "title": "Advanced",
    "color": "#f59e0b",
    "modules": []
  },
  "pro": {
    "id": "pro",
    "title": "Pro",
    "color": "#ef4444",
    "modules": []
  }
};
if(typeof module!=="undefined") module.exports={CURRICULUM};
