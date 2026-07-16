// BlazeWebGuide Curriculum - 1000 Lessons
const CURRICULUM = {
  "beginner": {
    "id": "beginner",
    "title": "Beginner",
    "color": "#22c55e",
    "modules": [
      {
        "id": "html",
        "title": "HTML Fundamentals",
        "description": "Structure web pages",
        "lessons": [
          {
            "id": "b-html-1",
            "title": "HTML Elements",
            "content": "HTML uses tags to structure content. Elements like <h1>, <p>, <div> form the building blocks. Each has opening/closing tags. Attributes provide extra info.\n\n<h1>Title</h1><p>Text</p><div class=\"box\">Box</div>",
            "codeExample": "8 min",
            "challenge": "Practice: HTML Elements"
          },
          {
            "id": "b-html-2",
            "title": "HTML Attributes",
            "content": "Attributes modify elements: class, id, src, href, alt, style, data-*. Boolean attrs (required, disabled) need no value. Use quotes around attribute values.\n\n<a href=\"https://example.com\" class=\"link\" data-id=\"5\">Link</a>",
            "codeExample": "7 min",
            "challenge": "Practice: HTML Attributes"
          },
          {
            "id": "b-html-3",
            "title": "Headings",
            "content": "h1 to h6 define heading hierarchy. Use one h1 per page. Proper order aids SEO. Screen readers navigate by headings. Keep hierarchy logical.\n\n<h1>Main</h1><h2>Section</h2><h3>Sub</h3>",
            "codeExample": "6 min",
            "challenge": "Practice: Headings"
          },
          {
            "id": "b-html-4",
            "title": "Paragraphs",
            "content": "<p> for paragraphs. <br> for line breaks. <hr> for horizontal rules. <pre> preserves whitespace. Blockquote for citations.\n\n<p>Line one.</p><p>Line two.</p><pre>Code block</pre>",
            "codeExample": "5 min",
            "challenge": "Practice: Paragraphs"
          },
          {
            "id": "b-html-5",
            "title": "Text Formatting",
            "content": "<strong> bold, <em> italic, <mark> highlight, <small> small, <del> strikethrough, <ins> underline, <sub> subscript, <sup> superscript.\n\n<strong>Bold</strong> <em>Italic</em> <mark>Highlight</mark>",
            "codeExample": "6 min",
            "challenge": "Practice: Text Formatting",
            "challengeType": "playground",
            "challengeDescription": "Build: Text Formatting"
          },
          {
            "id": "b-html-6",
            "title": "Links",
            "content": "<a> with href creates hyperlinks. target=\"_blank\" new tab. mailto: for email. tel: for phone. download attribute. Anchor links with #id.\n\n<a href=\"/page\">Link</a> <a href=\"#section\">Anchor</a>",
            "codeExample": "7 min",
            "challenge": "Practice: Links"
          },
          {
            "id": "b-html-7",
            "title": "Images",
            "content": "<img> with src and alt. Alt text is required for accessibility. Use loading=\"lazy\". Provide width/height. Figure/figcaption for captions.\n\n<img src=\"photo.jpg\" alt=\"desc\" loading=\"lazy\" width=\"800\">",
            "codeExample": "7 min",
            "challenge": "Practice: Images"
          },
          {
            "id": "b-html-8",
            "title": "Lists",
            "content": "<ul> unordered, <ol> ordered. <li> items. Nested lists. Type (A, a, I, i). Start, reversed attributes. Description lists dl/dt/dd.\n\n<ul><li>A</li><li>B</li></ul>",
            "codeExample": "6 min",
            "challenge": "Practice: Lists"
          },
          {
            "id": "b-html-9",
            "title": "Tables",
            "content": "<table>, <tr>, <th>, <td>. Colspan/rowspan. <thead>, <tbody>, <tfoot>. <caption> title. Scope for accessibility.\n\n<table><tr><th>Name</th><td>Alice</td></tr></table>",
            "codeExample": "8 min",
            "challenge": "Practice: Tables"
          },
          {
            "id": "b-html-10",
            "title": "Forms",
            "content": "<form> with action/method. Input types. Textarea. Select/option. Labels. Required, pattern, placeholder validation.\n\n<form><input type=\"email\" required><button>Submit</button></form>",
            "codeExample": "10 min",
            "challenge": "Practice: Forms",
            "challengeType": "playground",
            "challengeDescription": "Build: Forms"
          },
          {
            "id": "b-html-11",
            "title": "HTML Elements (Part 2)",
            "content": "HTML uses tags to structure content. Elements like <h1>, <p>, <div> form the building blocks. Each has opening/closing tags. Attributes provide extra info.\n\n<h1>Title</h1><p>Text</p><div class=\"box\">Box</div>",
            "codeExample": "8 min",
            "challenge": "Practice: HTML Elements (Part 2)"
          },
          {
            "id": "b-html-12",
            "title": "HTML Attributes (Part 2)",
            "content": "Attributes modify elements: class, id, src, href, alt, style, data-*. Boolean attrs (required, disabled) need no value. Use quotes around attribute values.\n\n<a href=\"https://example.com\" class=\"link\" data-id=\"5\">Link</a>",
            "codeExample": "7 min",
            "challenge": "Practice: HTML Attributes (Part 2)"
          },
          {
            "id": "b-html-13",
            "title": "Headings (Part 2)",
            "content": "h1 to h6 define heading hierarchy. Use one h1 per page. Proper order aids SEO. Screen readers navigate by headings. Keep hierarchy logical.\n\n<h1>Main</h1><h2>Section</h2><h3>Sub</h3>",
            "codeExample": "6 min",
            "challenge": "Practice: Headings (Part 2)"
          },
          {
            "id": "b-html-14",
            "title": "Paragraphs (Part 2)",
            "content": "<p> for paragraphs. <br> for line breaks. <hr> for horizontal rules. <pre> preserves whitespace. Blockquote for citations.\n\n<p>Line one.</p><p>Line two.</p><pre>Code block</pre>",
            "codeExample": "5 min",
            "challenge": "Practice: Paragraphs (Part 2)"
          },
          {
            "id": "b-html-15",
            "title": "Text Formatting (Part 2)",
            "content": "<strong> bold, <em> italic, <mark> highlight, <small> small, <del> strikethrough, <ins> underline, <sub> subscript, <sup> superscript.\n\n<strong>Bold</strong> <em>Italic</em> <mark>Highlight</mark>",
            "codeExample": "6 min",
            "challenge": "Practice: Text Formatting (Part 2)",
            "challengeType": "playground",
            "challengeDescription": "Build: Text Formatting (Part 2)"
          },
          {
            "id": "b-html-16",
            "title": "Links (Part 2)",
            "content": "<a> with href creates hyperlinks. target=\"_blank\" new tab. mailto: for email. tel: for phone. download attribute. Anchor links with #id.\n\n<a href=\"/page\">Link</a> <a href=\"#section\">Anchor</a>",
            "codeExample": "7 min",
            "challenge": "Practice: Links (Part 2)"
          },
          {
            "id": "b-html-17",
            "title": "Images (Part 2)",
            "content": "<img> with src and alt. Alt text is required for accessibility. Use loading=\"lazy\". Provide width/height. Figure/figcaption for captions.\n\n<img src=\"photo.jpg\" alt=\"desc\" loading=\"lazy\" width=\"800\">",
            "codeExample": "7 min",
            "challenge": "Practice: Images (Part 2)"
          },
          {
            "id": "b-html-18",
            "title": "Lists (Part 2)",
            "content": "<ul> unordered, <ol> ordered. <li> items. Nested lists. Type (A, a, I, i). Start, reversed attributes. Description lists dl/dt/dd.\n\n<ul><li>A</li><li>B</li></ul>",
            "codeExample": "6 min",
            "challenge": "Practice: Lists (Part 2)"
          },
          {
            "id": "b-html-19",
            "title": "Tables (Part 2)",
            "content": "<table>, <tr>, <th>, <td>. Colspan/rowspan. <thead>, <tbody>, <tfoot>. <caption> title. Scope for accessibility.\n\n<table><tr><th>Name</th><td>Alice</td></tr></table>",
            "codeExample": "8 min",
            "challenge": "Practice: Tables (Part 2)"
          },
          {
            "id": "b-html-20",
            "title": "Forms (Part 2)",
            "content": "<form> with action/method. Input types. Textarea. Select/option. Labels. Required, pattern, placeholder validation.\n\n<form><input type=\"email\" required><button>Submit</button></form>",
            "codeExample": "10 min",
            "challenge": "Practice: Forms (Part 2)",
            "challengeType": "playground",
            "challengeDescription": "Build: Forms (Part 2)"
          },
          {
            "id": "b-html-21",
            "title": "HTML Elements (Part 3)",
            "content": "HTML uses tags to structure content. Elements like <h1>, <p>, <div> form the building blocks. Each has opening/closing tags. Attributes provide extra info.\n\n<h1>Title</h1><p>Text</p><div class=\"box\">Box</div>",
            "codeExample": "8 min",
            "challenge": "Practice: HTML Elements (Part 3)"
          },
          {
            "id": "b-html-22",
            "title": "HTML Attributes (Part 3)",
            "content": "Attributes modify elements: class, id, src, href, alt, style, data-*. Boolean attrs (required, disabled) need no value. Use quotes around attribute values.\n\n<a href=\"https://example.com\" class=\"link\" data-id=\"5\">Link</a>",
            "codeExample": "7 min",
            "challenge": "Practice: HTML Attributes (Part 3)"
          },
          {
            "id": "b-html-23",
            "title": "Headings (Part 3)",
            "content": "h1 to h6 define heading hierarchy. Use one h1 per page. Proper order aids SEO. Screen readers navigate by headings. Keep hierarchy logical.\n\n<h1>Main</h1><h2>Section</h2><h3>Sub</h3>",
            "codeExample": "6 min",
            "challenge": "Practice: Headings (Part 3)"
          },
          {
            "id": "b-html-24",
            "title": "Paragraphs (Part 3)",
            "content": "<p> for paragraphs. <br> for line breaks. <hr> for horizontal rules. <pre> preserves whitespace. Blockquote for citations.\n\n<p>Line one.</p><p>Line two.</p><pre>Code block</pre>",
            "codeExample": "5 min",
            "challenge": "Practice: Paragraphs (Part 3)"
          },
          {
            "id": "b-html-25",
            "title": "Text Formatting (Part 3)",
            "content": "<strong> bold, <em> italic, <mark> highlight, <small> small, <del> strikethrough, <ins> underline, <sub> subscript, <sup> superscript.\n\n<strong>Bold</strong> <em>Italic</em> <mark>Highlight</mark>",
            "codeExample": "6 min",
            "challenge": "Practice: Text Formatting (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: Text Formatting (Part 3)"
          },
          {
            "id": "b-html-26",
            "title": "Links (Part 3)",
            "content": "<a> with href creates hyperlinks. target=\"_blank\" new tab. mailto: for email. tel: for phone. download attribute. Anchor links with #id.\n\n<a href=\"/page\">Link</a> <a href=\"#section\">Anchor</a>",
            "codeExample": "7 min",
            "challenge": "Practice: Links (Part 3)"
          },
          {
            "id": "b-html-27",
            "title": "Images (Part 3)",
            "content": "<img> with src and alt. Alt text is required for accessibility. Use loading=\"lazy\". Provide width/height. Figure/figcaption for captions.\n\n<img src=\"photo.jpg\" alt=\"desc\" loading=\"lazy\" width=\"800\">",
            "codeExample": "7 min",
            "challenge": "Practice: Images (Part 3)"
          },
          {
            "id": "b-html-28",
            "title": "Lists (Part 3)",
            "content": "<ul> unordered, <ol> ordered. <li> items. Nested lists. Type (A, a, I, i). Start, reversed attributes. Description lists dl/dt/dd.\n\n<ul><li>A</li><li>B</li></ul>",
            "codeExample": "6 min",
            "challenge": "Practice: Lists (Part 3)"
          },
          {
            "id": "b-html-29",
            "title": "Tables (Part 3)",
            "content": "<table>, <tr>, <th>, <td>. Colspan/rowspan. <thead>, <tbody>, <tfoot>. <caption> title. Scope for accessibility.\n\n<table><tr><th>Name</th><td>Alice</td></tr></table>",
            "codeExample": "8 min",
            "challenge": "Practice: Tables (Part 3)"
          },
          {
            "id": "b-html-30",
            "title": "Forms (Part 3)",
            "content": "<form> with action/method. Input types. Textarea. Select/option. Labels. Required, pattern, placeholder validation.\n\n<form><input type=\"email\" required><button>Submit</button></form>",
            "codeExample": "10 min",
            "challenge": "Practice: Forms (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: Forms (Part 3)"
          },
          {
            "id": "b-html-31",
            "title": "HTML Elements (Part 4)",
            "content": "HTML uses tags to structure content. Elements like <h1>, <p>, <div> form the building blocks. Each has opening/closing tags. Attributes provide extra info.\n\n<h1>Title</h1><p>Text</p><div class=\"box\">Box</div>",
            "codeExample": "8 min",
            "challenge": "Practice: HTML Elements (Part 4)"
          },
          {
            "id": "b-html-32",
            "title": "HTML Attributes (Part 4)",
            "content": "Attributes modify elements: class, id, src, href, alt, style, data-*. Boolean attrs (required, disabled) need no value. Use quotes around attribute values.\n\n<a href=\"https://example.com\" class=\"link\" data-id=\"5\">Link</a>",
            "codeExample": "7 min",
            "challenge": "Practice: HTML Attributes (Part 4)"
          },
          {
            "id": "b-html-33",
            "title": "Headings (Part 4)",
            "content": "h1 to h6 define heading hierarchy. Use one h1 per page. Proper order aids SEO. Screen readers navigate by headings. Keep hierarchy logical.\n\n<h1>Main</h1><h2>Section</h2><h3>Sub</h3>",
            "codeExample": "6 min",
            "challenge": "Practice: Headings (Part 4)"
          },
          {
            "id": "b-html-34",
            "title": "Paragraphs (Part 4)",
            "content": "<p> for paragraphs. <br> for line breaks. <hr> for horizontal rules. <pre> preserves whitespace. Blockquote for citations.\n\n<p>Line one.</p><p>Line two.</p><pre>Code block</pre>",
            "codeExample": "5 min",
            "challenge": "Practice: Paragraphs (Part 4)"
          },
          {
            "id": "b-html-35",
            "title": "Text Formatting (Part 4)",
            "content": "<strong> bold, <em> italic, <mark> highlight, <small> small, <del> strikethrough, <ins> underline, <sub> subscript, <sup> superscript.\n\n<strong>Bold</strong> <em>Italic</em> <mark>Highlight</mark>",
            "codeExample": "6 min",
            "challenge": "Practice: Text Formatting (Part 4)",
            "challengeType": "playground",
            "challengeDescription": "Build: Text Formatting (Part 4)"
          },
          {
            "id": "b-html-36",
            "title": "Links (Part 4)",
            "content": "<a> with href creates hyperlinks. target=\"_blank\" new tab. mailto: for email. tel: for phone. download attribute. Anchor links with #id.\n\n<a href=\"/page\">Link</a> <a href=\"#section\">Anchor</a>",
            "codeExample": "7 min",
            "challenge": "Practice: Links (Part 4)"
          },
          {
            "id": "b-html-37",
            "title": "Images (Part 4)",
            "content": "<img> with src and alt. Alt text is required for accessibility. Use loading=\"lazy\". Provide width/height. Figure/figcaption for captions.\n\n<img src=\"photo.jpg\" alt=\"desc\" loading=\"lazy\" width=\"800\">",
            "codeExample": "7 min",
            "challenge": "Practice: Images (Part 4)"
          },
          {
            "id": "b-html-38",
            "title": "Lists (Part 4)",
            "content": "<ul> unordered, <ol> ordered. <li> items. Nested lists. Type (A, a, I, i). Start, reversed attributes. Description lists dl/dt/dd.\n\n<ul><li>A</li><li>B</li></ul>",
            "codeExample": "6 min",
            "challenge": "Practice: Lists (Part 4)"
          },
          {
            "id": "b-html-39",
            "title": "Tables (Part 4)",
            "content": "<table>, <tr>, <th>, <td>. Colspan/rowspan. <thead>, <tbody>, <tfoot>. <caption> title. Scope for accessibility.\n\n<table><tr><th>Name</th><td>Alice</td></tr></table>",
            "codeExample": "8 min",
            "challenge": "Practice: Tables (Part 4)"
          },
          {
            "id": "b-html-40",
            "title": "Forms (Part 4)",
            "content": "<form> with action/method. Input types. Textarea. Select/option. Labels. Required, pattern, placeholder validation.\n\n<form><input type=\"email\" required><button>Submit</button></form>",
            "codeExample": "10 min",
            "challenge": "Practice: Forms (Part 4)",
            "challengeType": "playground",
            "challengeDescription": "Build: Forms (Part 4)"
          },
          {
            "id": "b-html-41",
            "title": "HTML Elements (Part 5)",
            "content": "HTML uses tags to structure content. Elements like <h1>, <p>, <div> form the building blocks. Each has opening/closing tags. Attributes provide extra info.\n\n<h1>Title</h1><p>Text</p><div class=\"box\">Box</div>",
            "codeExample": "8 min",
            "challenge": "Practice: HTML Elements (Part 5)"
          },
          {
            "id": "b-html-42",
            "title": "HTML Attributes (Part 5)",
            "content": "Attributes modify elements: class, id, src, href, alt, style, data-*. Boolean attrs (required, disabled) need no value. Use quotes around attribute values.\n\n<a href=\"https://example.com\" class=\"link\" data-id=\"5\">Link</a>",
            "codeExample": "7 min",
            "challenge": "Practice: HTML Attributes (Part 5)"
          },
          {
            "id": "b-html-43",
            "title": "Headings (Part 5)",
            "content": "h1 to h6 define heading hierarchy. Use one h1 per page. Proper order aids SEO. Screen readers navigate by headings. Keep hierarchy logical.\n\n<h1>Main</h1><h2>Section</h2><h3>Sub</h3>",
            "codeExample": "6 min",
            "challenge": "Practice: Headings (Part 5)"
          },
          {
            "id": "b-html-44",
            "title": "Paragraphs (Part 5)",
            "content": "<p> for paragraphs. <br> for line breaks. <hr> for horizontal rules. <pre> preserves whitespace. Blockquote for citations.\n\n<p>Line one.</p><p>Line two.</p><pre>Code block</pre>",
            "codeExample": "5 min",
            "challenge": "Practice: Paragraphs (Part 5)"
          },
          {
            "id": "b-html-45",
            "title": "Text Formatting (Part 5)",
            "content": "<strong> bold, <em> italic, <mark> highlight, <small> small, <del> strikethrough, <ins> underline, <sub> subscript, <sup> superscript.\n\n<strong>Bold</strong> <em>Italic</em> <mark>Highlight</mark>",
            "codeExample": "6 min",
            "challenge": "Practice: Text Formatting (Part 5)",
            "challengeType": "playground",
            "challengeDescription": "Build: Text Formatting (Part 5)"
          },
          {
            "id": "b-html-46",
            "title": "Links (Part 5)",
            "content": "<a> with href creates hyperlinks. target=\"_blank\" new tab. mailto: for email. tel: for phone. download attribute. Anchor links with #id.\n\n<a href=\"/page\">Link</a> <a href=\"#section\">Anchor</a>",
            "codeExample": "7 min",
            "challenge": "Practice: Links (Part 5)"
          },
          {
            "id": "b-html-47",
            "title": "Images (Part 5)",
            "content": "<img> with src and alt. Alt text is required for accessibility. Use loading=\"lazy\". Provide width/height. Figure/figcaption for captions.\n\n<img src=\"photo.jpg\" alt=\"desc\" loading=\"lazy\" width=\"800\">",
            "codeExample": "7 min",
            "challenge": "Practice: Images (Part 5)"
          },
          {
            "id": "b-html-48",
            "title": "Lists (Part 5)",
            "content": "<ul> unordered, <ol> ordered. <li> items. Nested lists. Type (A, a, I, i). Start, reversed attributes. Description lists dl/dt/dd.\n\n<ul><li>A</li><li>B</li></ul>",
            "codeExample": "6 min",
            "challenge": "Practice: Lists (Part 5)"
          },
          {
            "id": "b-html-49",
            "title": "Tables (Part 5)",
            "content": "<table>, <tr>, <th>, <td>. Colspan/rowspan. <thead>, <tbody>, <tfoot>. <caption> title. Scope for accessibility.\n\n<table><tr><th>Name</th><td>Alice</td></tr></table>",
            "codeExample": "8 min",
            "challenge": "Practice: Tables (Part 5)"
          },
          {
            "id": "b-html-50",
            "title": "Forms (Part 5)",
            "content": "<form> with action/method. Input types. Textarea. Select/option. Labels. Required, pattern, placeholder validation.\n\n<form><input type=\"email\" required><button>Submit</button></form>",
            "codeExample": "10 min",
            "challenge": "Practice: Forms (Part 5)",
            "challengeType": "playground",
            "challengeDescription": "Build: Forms (Part 5)"
          }
        ]
      },
      {
        "id": "css",
        "title": "CSS Styling",
        "description": "Style your pages",
        "lessons": [
          {
            "id": "b-css-1",
            "title": "CSS Intro",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro"
          },
          {
            "id": "b-css-2",
            "title": "Colors",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors"
          },
          {
            "id": "b-css-3",
            "title": "Typography",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography"
          },
          {
            "id": "b-css-4",
            "title": "Box Model",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model"
          },
          {
            "id": "b-css-5",
            "title": "Display Property",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property"
          },
          {
            "id": "b-css-6",
            "title": "CSS Intro (Part 2)",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro (Part 2)"
          },
          {
            "id": "b-css-7",
            "title": "Colors (Part 2)",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors (Part 2)"
          },
          {
            "id": "b-css-8",
            "title": "Typography (Part 2)",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography (Part 2)"
          },
          {
            "id": "b-css-9",
            "title": "Box Model (Part 2)",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model (Part 2)"
          },
          {
            "id": "b-css-10",
            "title": "Display Property (Part 2)",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property (Part 2)",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property (Part 2)"
          },
          {
            "id": "b-css-11",
            "title": "CSS Intro (Part 3)",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro (Part 3)"
          },
          {
            "id": "b-css-12",
            "title": "Colors (Part 3)",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors (Part 3)"
          },
          {
            "id": "b-css-13",
            "title": "Typography (Part 3)",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography (Part 3)"
          },
          {
            "id": "b-css-14",
            "title": "Box Model (Part 3)",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model (Part 3)"
          },
          {
            "id": "b-css-15",
            "title": "Display Property (Part 3)",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property (Part 3)"
          },
          {
            "id": "b-css-16",
            "title": "CSS Intro (Part 4)",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro (Part 4)"
          },
          {
            "id": "b-css-17",
            "title": "Colors (Part 4)",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors (Part 4)"
          },
          {
            "id": "b-css-18",
            "title": "Typography (Part 4)",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography (Part 4)"
          },
          {
            "id": "b-css-19",
            "title": "Box Model (Part 4)",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model (Part 4)"
          },
          {
            "id": "b-css-20",
            "title": "Display Property (Part 4)",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property (Part 4)",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property (Part 4)"
          },
          {
            "id": "b-css-21",
            "title": "CSS Intro (Part 5)",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro (Part 5)"
          },
          {
            "id": "b-css-22",
            "title": "Colors (Part 5)",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors (Part 5)"
          },
          {
            "id": "b-css-23",
            "title": "Typography (Part 5)",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography (Part 5)"
          },
          {
            "id": "b-css-24",
            "title": "Box Model (Part 5)",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model (Part 5)"
          },
          {
            "id": "b-css-25",
            "title": "Display Property (Part 5)",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property (Part 5)",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property (Part 5)"
          },
          {
            "id": "b-css-26",
            "title": "CSS Intro (Part 6)",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro (Part 6)"
          },
          {
            "id": "b-css-27",
            "title": "Colors (Part 6)",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors (Part 6)"
          },
          {
            "id": "b-css-28",
            "title": "Typography (Part 6)",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography (Part 6)"
          },
          {
            "id": "b-css-29",
            "title": "Box Model (Part 6)",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model (Part 6)"
          },
          {
            "id": "b-css-30",
            "title": "Display Property (Part 6)",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property (Part 6)",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property (Part 6)"
          }
        ]
      },
      {
        "id": "js",
        "title": "JavaScript Basics",
        "description": "Add interactivity",
        "lessons": [
          {
            "id": "b-js-1",
            "title": "Variables",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables"
          },
          {
            "id": "b-js-2",
            "title": "Data Types",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types"
          },
          {
            "id": "b-js-3",
            "title": "Operators",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators"
          },
          {
            "id": "b-js-4",
            "title": "Functions",
            "content": "Function declarations, expressions, arrow functions. Parameters and arguments. Return values. Default parameters. Rest parameters (...args). Higher-order functions.\n\nfunction add(a, b) { return a + b; }\nconst multiply = (a, b) => a * b;",
            "codeExample": "10 min",
            "challenge": "Practice: Functions"
          },
          {
            "id": "b-js-5",
            "title": "Variables (Part 2)",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables (Part 2)",
            "challengeType": "playground",
            "challengeDescription": "Build: Variables (Part 2)"
          },
          {
            "id": "b-js-6",
            "title": "Data Types (Part 2)",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types (Part 2)"
          },
          {
            "id": "b-js-7",
            "title": "Operators (Part 2)",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators (Part 2)"
          },
          {
            "id": "b-js-8",
            "title": "Functions (Part 2)",
            "content": "Function declarations, expressions, arrow functions. Parameters and arguments. Return values. Default parameters. Rest parameters (...args). Higher-order functions.\n\nfunction add(a, b) { return a + b; }\nconst multiply = (a, b) => a * b;",
            "codeExample": "10 min",
            "challenge": "Practice: Functions (Part 2)"
          },
          {
            "id": "b-js-9",
            "title": "Variables (Part 3)",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables (Part 3)"
          },
          {
            "id": "b-js-10",
            "title": "Data Types (Part 3)",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: Data Types (Part 3)"
          },
          {
            "id": "b-js-11",
            "title": "Operators (Part 3)",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators (Part 3)"
          },
          {
            "id": "b-js-12",
            "title": "Functions (Part 3)",
            "content": "Function declarations, expressions, arrow functions. Parameters and arguments. Return values. Default parameters. Rest parameters (...args). Higher-order functions.\n\nfunction add(a, b) { return a + b; }\nconst multiply = (a, b) => a * b;",
            "codeExample": "10 min",
            "challenge": "Practice: Functions (Part 3)"
          },
          {
            "id": "b-js-13",
            "title": "Variables (Part 4)",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables (Part 4)"
          },
          {
            "id": "b-js-14",
            "title": "Data Types (Part 4)",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types (Part 4)"
          },
          {
            "id": "b-js-15",
            "title": "Operators (Part 4)",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators (Part 4)",
            "challengeType": "playground",
            "challengeDescription": "Build: Operators (Part 4)"
          }
        ]
      },
      {
        "id": "git",
        "title": "Git & GitHub",
        "description": "Version control",
        "lessons": [
          {
            "id": "b-git-1",
            "title": "Git Basics",
            "content": "Git tracks file changes. git init creates a repo. git add stages files. git commit saves. git status checks state. git log shows history.\n\ngit init\ngit add .\ngit commit -m \"Initial\"",
            "codeExample": "8 min",
            "challenge": "Practice: Git Basics"
          },
          {
            "id": "b-git-2",
            "title": "Git Branches",
            "content": "Branches isolate work. git branch lists. git checkout -b creates. git merge combines. git rebase rewrites history. Main/master is default branch.\n\ngit checkout -b feature\ngit add .\ngit commit -m \"Feature\"\ngit checkout main\ngit merge feature",
            "codeExample": "10 min",
            "challenge": "Practice: Git Branches"
          },
          {
            "id": "b-git-3",
            "title": "Git Basics (Part 2)",
            "content": "Git tracks file changes. git init creates a repo. git add stages files. git commit saves. git status checks state. git log shows history.\n\ngit init\ngit add .\ngit commit -m \"Initial\"",
            "codeExample": "8 min",
            "challenge": "Practice: Git Basics (Part 2)"
          },
          {
            "id": "b-git-4",
            "title": "Git Branches (Part 2)",
            "content": "Branches isolate work. git branch lists. git checkout -b creates. git merge combines. git rebase rewrites history. Main/master is default branch.\n\ngit checkout -b feature\ngit add .\ngit commit -m \"Feature\"\ngit checkout main\ngit merge feature",
            "codeExample": "10 min",
            "challenge": "Practice: Git Branches (Part 2)"
          },
          {
            "id": "b-git-5",
            "title": "Git Basics (Part 3)",
            "content": "Git tracks file changes. git init creates a repo. git add stages files. git commit saves. git status checks state. git log shows history.\n\ngit init\ngit add .\ngit commit -m \"Initial\"",
            "codeExample": "8 min",
            "challenge": "Practice: Git Basics (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: Git Basics (Part 3)"
          }
        ]
      }
    ]
  },
  "intermediate": {
    "id": "intermediate",
    "title": "Intermediate",
    "color": "#3b82f6",
    "modules": [
      {
        "id": "html-adv",
        "title": "Advanced HTML",
        "description": "Semantic HTML, SEO, forms",
        "lessons": [
          {
            "id": "i-html-1",
            "title": "Links",
            "content": "<a> with href creates hyperlinks. target=\"_blank\" new tab. mailto: for email. tel: for phone. download attribute. Anchor links with #id.\n\n<a href=\"/page\">Link</a> <a href=\"#section\">Anchor</a>",
            "codeExample": "7 min",
            "challenge": "Practice: Links"
          },
          {
            "id": "i-html-2",
            "title": "Images",
            "content": "<img> with src and alt. Alt text is required for accessibility. Use loading=\"lazy\". Provide width/height. Figure/figcaption for captions.\n\n<img src=\"photo.jpg\" alt=\"desc\" loading=\"lazy\" width=\"800\">",
            "codeExample": "7 min",
            "challenge": "Practice: Images"
          },
          {
            "id": "i-html-3",
            "title": "Lists",
            "content": "<ul> unordered, <ol> ordered. <li> items. Nested lists. Type (A, a, I, i). Start, reversed attributes. Description lists dl/dt/dd.\n\n<ul><li>A</li><li>B</li></ul>",
            "codeExample": "6 min",
            "challenge": "Practice: Lists"
          },
          {
            "id": "i-html-4",
            "title": "Tables",
            "content": "<table>, <tr>, <th>, <td>. Colspan/rowspan. <thead>, <tbody>, <tfoot>. <caption> title. Scope for accessibility.\n\n<table><tr><th>Name</th><td>Alice</td></tr></table>",
            "codeExample": "8 min",
            "challenge": "Practice: Tables"
          },
          {
            "id": "i-html-5",
            "title": "Forms",
            "content": "<form> with action/method. Input types. Textarea. Select/option. Labels. Required, pattern, placeholder validation.\n\n<form><input type=\"email\" required><button>Submit</button></form>",
            "codeExample": "10 min",
            "challenge": "Practice: Forms",
            "challengeType": "playground",
            "challengeDescription": "Build: Forms"
          },
          {
            "id": "i-html-6",
            "title": "HTML Elements",
            "content": "HTML uses tags to structure content. Elements like <h1>, <p>, <div> form the building blocks. Each has opening/closing tags. Attributes provide extra info.\n\n<h1>Title</h1><p>Text</p><div class=\"box\">Box</div>",
            "codeExample": "8 min",
            "challenge": "Practice: HTML Elements"
          },
          {
            "id": "i-html-7",
            "title": "HTML Attributes",
            "content": "Attributes modify elements: class, id, src, href, alt, style, data-*. Boolean attrs (required, disabled) need no value. Use quotes around attribute values.\n\n<a href=\"https://example.com\" class=\"link\" data-id=\"5\">Link</a>",
            "codeExample": "7 min",
            "challenge": "Practice: HTML Attributes"
          },
          {
            "id": "i-html-8",
            "title": "Headings",
            "content": "h1 to h6 define heading hierarchy. Use one h1 per page. Proper order aids SEO. Screen readers navigate by headings. Keep hierarchy logical.\n\n<h1>Main</h1><h2>Section</h2><h3>Sub</h3>",
            "codeExample": "6 min",
            "challenge": "Practice: Headings"
          },
          {
            "id": "i-html-9",
            "title": "Paragraphs",
            "content": "<p> for paragraphs. <br> for line breaks. <hr> for horizontal rules. <pre> preserves whitespace. Blockquote for citations.\n\n<p>Line one.</p><p>Line two.</p><pre>Code block</pre>",
            "codeExample": "5 min",
            "challenge": "Practice: Paragraphs"
          },
          {
            "id": "i-html-10",
            "title": "Text Formatting",
            "content": "<strong> bold, <em> italic, <mark> highlight, <small> small, <del> strikethrough, <ins> underline, <sub> subscript, <sup> superscript.\n\n<strong>Bold</strong> <em>Italic</em> <mark>Highlight</mark>",
            "codeExample": "6 min",
            "challenge": "Practice: Text Formatting",
            "challengeType": "playground",
            "challengeDescription": "Build: Text Formatting"
          },
          {
            "id": "i-html-11",
            "title": "Links (Part 2)",
            "content": "<a> with href creates hyperlinks. target=\"_blank\" new tab. mailto: for email. tel: for phone. download attribute. Anchor links with #id.\n\n<a href=\"/page\">Link</a> <a href=\"#section\">Anchor</a>",
            "codeExample": "7 min",
            "challenge": "Practice: Links (Part 2)"
          },
          {
            "id": "i-html-12",
            "title": "Images (Part 2)",
            "content": "<img> with src and alt. Alt text is required for accessibility. Use loading=\"lazy\". Provide width/height. Figure/figcaption for captions.\n\n<img src=\"photo.jpg\" alt=\"desc\" loading=\"lazy\" width=\"800\">",
            "codeExample": "7 min",
            "challenge": "Practice: Images (Part 2)"
          },
          {
            "id": "i-html-13",
            "title": "Lists (Part 2)",
            "content": "<ul> unordered, <ol> ordered. <li> items. Nested lists. Type (A, a, I, i). Start, reversed attributes. Description lists dl/dt/dd.\n\n<ul><li>A</li><li>B</li></ul>",
            "codeExample": "6 min",
            "challenge": "Practice: Lists (Part 2)"
          },
          {
            "id": "i-html-14",
            "title": "Tables (Part 2)",
            "content": "<table>, <tr>, <th>, <td>. Colspan/rowspan. <thead>, <tbody>, <tfoot>. <caption> title. Scope for accessibility.\n\n<table><tr><th>Name</th><td>Alice</td></tr></table>",
            "codeExample": "8 min",
            "challenge": "Practice: Tables (Part 2)"
          },
          {
            "id": "i-html-15",
            "title": "Forms (Part 2)",
            "content": "<form> with action/method. Input types. Textarea. Select/option. Labels. Required, pattern, placeholder validation.\n\n<form><input type=\"email\" required><button>Submit</button></form>",
            "codeExample": "10 min",
            "challenge": "Practice: Forms (Part 2)",
            "challengeType": "playground",
            "challengeDescription": "Build: Forms (Part 2)"
          },
          {
            "id": "i-html-16",
            "title": "HTML Elements (Part 2)",
            "content": "HTML uses tags to structure content. Elements like <h1>, <p>, <div> form the building blocks. Each has opening/closing tags. Attributes provide extra info.\n\n<h1>Title</h1><p>Text</p><div class=\"box\">Box</div>",
            "codeExample": "8 min",
            "challenge": "Practice: HTML Elements (Part 2)"
          },
          {
            "id": "i-html-17",
            "title": "HTML Attributes (Part 2)",
            "content": "Attributes modify elements: class, id, src, href, alt, style, data-*. Boolean attrs (required, disabled) need no value. Use quotes around attribute values.\n\n<a href=\"https://example.com\" class=\"link\" data-id=\"5\">Link</a>",
            "codeExample": "7 min",
            "challenge": "Practice: HTML Attributes (Part 2)"
          },
          {
            "id": "i-html-18",
            "title": "Headings (Part 2)",
            "content": "h1 to h6 define heading hierarchy. Use one h1 per page. Proper order aids SEO. Screen readers navigate by headings. Keep hierarchy logical.\n\n<h1>Main</h1><h2>Section</h2><h3>Sub</h3>",
            "codeExample": "6 min",
            "challenge": "Practice: Headings (Part 2)"
          },
          {
            "id": "i-html-19",
            "title": "Paragraphs (Part 2)",
            "content": "<p> for paragraphs. <br> for line breaks. <hr> for horizontal rules. <pre> preserves whitespace. Blockquote for citations.\n\n<p>Line one.</p><p>Line two.</p><pre>Code block</pre>",
            "codeExample": "5 min",
            "challenge": "Practice: Paragraphs (Part 2)"
          },
          {
            "id": "i-html-20",
            "title": "Text Formatting (Part 2)",
            "content": "<strong> bold, <em> italic, <mark> highlight, <small> small, <del> strikethrough, <ins> underline, <sub> subscript, <sup> superscript.\n\n<strong>Bold</strong> <em>Italic</em> <mark>Highlight</mark>",
            "codeExample": "6 min",
            "challenge": "Practice: Text Formatting (Part 2)",
            "challengeType": "playground",
            "challengeDescription": "Build: Text Formatting (Part 2)"
          },
          {
            "id": "i-html-21",
            "title": "Links (Part 3)",
            "content": "<a> with href creates hyperlinks. target=\"_blank\" new tab. mailto: for email. tel: for phone. download attribute. Anchor links with #id.\n\n<a href=\"/page\">Link</a> <a href=\"#section\">Anchor</a>",
            "codeExample": "7 min",
            "challenge": "Practice: Links (Part 3)"
          },
          {
            "id": "i-html-22",
            "title": "Images (Part 3)",
            "content": "<img> with src and alt. Alt text is required for accessibility. Use loading=\"lazy\". Provide width/height. Figure/figcaption for captions.\n\n<img src=\"photo.jpg\" alt=\"desc\" loading=\"lazy\" width=\"800\">",
            "codeExample": "7 min",
            "challenge": "Practice: Images (Part 3)"
          },
          {
            "id": "i-html-23",
            "title": "Lists (Part 3)",
            "content": "<ul> unordered, <ol> ordered. <li> items. Nested lists. Type (A, a, I, i). Start, reversed attributes. Description lists dl/dt/dd.\n\n<ul><li>A</li><li>B</li></ul>",
            "codeExample": "6 min",
            "challenge": "Practice: Lists (Part 3)"
          },
          {
            "id": "i-html-24",
            "title": "Tables (Part 3)",
            "content": "<table>, <tr>, <th>, <td>. Colspan/rowspan. <thead>, <tbody>, <tfoot>. <caption> title. Scope for accessibility.\n\n<table><tr><th>Name</th><td>Alice</td></tr></table>",
            "codeExample": "8 min",
            "challenge": "Practice: Tables (Part 3)"
          },
          {
            "id": "i-html-25",
            "title": "Forms (Part 3)",
            "content": "<form> with action/method. Input types. Textarea. Select/option. Labels. Required, pattern, placeholder validation.\n\n<form><input type=\"email\" required><button>Submit</button></form>",
            "codeExample": "10 min",
            "challenge": "Practice: Forms (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: Forms (Part 3)"
          },
          {
            "id": "i-html-26",
            "title": "HTML Elements (Part 3)",
            "content": "HTML uses tags to structure content. Elements like <h1>, <p>, <div> form the building blocks. Each has opening/closing tags. Attributes provide extra info.\n\n<h1>Title</h1><p>Text</p><div class=\"box\">Box</div>",
            "codeExample": "8 min",
            "challenge": "Practice: HTML Elements (Part 3)"
          },
          {
            "id": "i-html-27",
            "title": "HTML Attributes (Part 3)",
            "content": "Attributes modify elements: class, id, src, href, alt, style, data-*. Boolean attrs (required, disabled) need no value. Use quotes around attribute values.\n\n<a href=\"https://example.com\" class=\"link\" data-id=\"5\">Link</a>",
            "codeExample": "7 min",
            "challenge": "Practice: HTML Attributes (Part 3)"
          },
          {
            "id": "i-html-28",
            "title": "Headings (Part 3)",
            "content": "h1 to h6 define heading hierarchy. Use one h1 per page. Proper order aids SEO. Screen readers navigate by headings. Keep hierarchy logical.\n\n<h1>Main</h1><h2>Section</h2><h3>Sub</h3>",
            "codeExample": "6 min",
            "challenge": "Practice: Headings (Part 3)"
          },
          {
            "id": "i-html-29",
            "title": "Paragraphs (Part 3)",
            "content": "<p> for paragraphs. <br> for line breaks. <hr> for horizontal rules. <pre> preserves whitespace. Blockquote for citations.\n\n<p>Line one.</p><p>Line two.</p><pre>Code block</pre>",
            "codeExample": "5 min",
            "challenge": "Practice: Paragraphs (Part 3)"
          },
          {
            "id": "i-html-30",
            "title": "Text Formatting (Part 3)",
            "content": "<strong> bold, <em> italic, <mark> highlight, <small> small, <del> strikethrough, <ins> underline, <sub> subscript, <sup> superscript.\n\n<strong>Bold</strong> <em>Italic</em> <mark>Highlight</mark>",
            "codeExample": "6 min",
            "challenge": "Practice: Text Formatting (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: Text Formatting (Part 3)"
          },
          {
            "id": "i-html-31",
            "title": "Links (Part 4)",
            "content": "<a> with href creates hyperlinks. target=\"_blank\" new tab. mailto: for email. tel: for phone. download attribute. Anchor links with #id.\n\n<a href=\"/page\">Link</a> <a href=\"#section\">Anchor</a>",
            "codeExample": "7 min",
            "challenge": "Practice: Links (Part 4)"
          },
          {
            "id": "i-html-32",
            "title": "Images (Part 4)",
            "content": "<img> with src and alt. Alt text is required for accessibility. Use loading=\"lazy\". Provide width/height. Figure/figcaption for captions.\n\n<img src=\"photo.jpg\" alt=\"desc\" loading=\"lazy\" width=\"800\">",
            "codeExample": "7 min",
            "challenge": "Practice: Images (Part 4)"
          },
          {
            "id": "i-html-33",
            "title": "Lists (Part 4)",
            "content": "<ul> unordered, <ol> ordered. <li> items. Nested lists. Type (A, a, I, i). Start, reversed attributes. Description lists dl/dt/dd.\n\n<ul><li>A</li><li>B</li></ul>",
            "codeExample": "6 min",
            "challenge": "Practice: Lists (Part 4)"
          },
          {
            "id": "i-html-34",
            "title": "Tables (Part 4)",
            "content": "<table>, <tr>, <th>, <td>. Colspan/rowspan. <thead>, <tbody>, <tfoot>. <caption> title. Scope for accessibility.\n\n<table><tr><th>Name</th><td>Alice</td></tr></table>",
            "codeExample": "8 min",
            "challenge": "Practice: Tables (Part 4)"
          },
          {
            "id": "i-html-35",
            "title": "Forms (Part 4)",
            "content": "<form> with action/method. Input types. Textarea. Select/option. Labels. Required, pattern, placeholder validation.\n\n<form><input type=\"email\" required><button>Submit</button></form>",
            "codeExample": "10 min",
            "challenge": "Practice: Forms (Part 4)",
            "challengeType": "playground",
            "challengeDescription": "Build: Forms (Part 4)"
          },
          {
            "id": "i-html-36",
            "title": "HTML Elements (Part 4)",
            "content": "HTML uses tags to structure content. Elements like <h1>, <p>, <div> form the building blocks. Each has opening/closing tags. Attributes provide extra info.\n\n<h1>Title</h1><p>Text</p><div class=\"box\">Box</div>",
            "codeExample": "8 min",
            "challenge": "Practice: HTML Elements (Part 4)"
          },
          {
            "id": "i-html-37",
            "title": "HTML Attributes (Part 4)",
            "content": "Attributes modify elements: class, id, src, href, alt, style, data-*. Boolean attrs (required, disabled) need no value. Use quotes around attribute values.\n\n<a href=\"https://example.com\" class=\"link\" data-id=\"5\">Link</a>",
            "codeExample": "7 min",
            "challenge": "Practice: HTML Attributes (Part 4)"
          },
          {
            "id": "i-html-38",
            "title": "Headings (Part 4)",
            "content": "h1 to h6 define heading hierarchy. Use one h1 per page. Proper order aids SEO. Screen readers navigate by headings. Keep hierarchy logical.\n\n<h1>Main</h1><h2>Section</h2><h3>Sub</h3>",
            "codeExample": "6 min",
            "challenge": "Practice: Headings (Part 4)"
          },
          {
            "id": "i-html-39",
            "title": "Paragraphs (Part 4)",
            "content": "<p> for paragraphs. <br> for line breaks. <hr> for horizontal rules. <pre> preserves whitespace. Blockquote for citations.\n\n<p>Line one.</p><p>Line two.</p><pre>Code block</pre>",
            "codeExample": "5 min",
            "challenge": "Practice: Paragraphs (Part 4)"
          },
          {
            "id": "i-html-40",
            "title": "Text Formatting (Part 4)",
            "content": "<strong> bold, <em> italic, <mark> highlight, <small> small, <del> strikethrough, <ins> underline, <sub> subscript, <sup> superscript.\n\n<strong>Bold</strong> <em>Italic</em> <mark>Highlight</mark>",
            "codeExample": "6 min",
            "challenge": "Practice: Text Formatting (Part 4)",
            "challengeType": "playground",
            "challengeDescription": "Build: Text Formatting (Part 4)"
          },
          {
            "id": "i-html-41",
            "title": "Links (Part 5)",
            "content": "<a> with href creates hyperlinks. target=\"_blank\" new tab. mailto: for email. tel: for phone. download attribute. Anchor links with #id.\n\n<a href=\"/page\">Link</a> <a href=\"#section\">Anchor</a>",
            "codeExample": "7 min",
            "challenge": "Practice: Links (Part 5)"
          },
          {
            "id": "i-html-42",
            "title": "Images (Part 5)",
            "content": "<img> with src and alt. Alt text is required for accessibility. Use loading=\"lazy\". Provide width/height. Figure/figcaption for captions.\n\n<img src=\"photo.jpg\" alt=\"desc\" loading=\"lazy\" width=\"800\">",
            "codeExample": "7 min",
            "challenge": "Practice: Images (Part 5)"
          },
          {
            "id": "i-html-43",
            "title": "Lists (Part 5)",
            "content": "<ul> unordered, <ol> ordered. <li> items. Nested lists. Type (A, a, I, i). Start, reversed attributes. Description lists dl/dt/dd.\n\n<ul><li>A</li><li>B</li></ul>",
            "codeExample": "6 min",
            "challenge": "Practice: Lists (Part 5)"
          },
          {
            "id": "i-html-44",
            "title": "Tables (Part 5)",
            "content": "<table>, <tr>, <th>, <td>. Colspan/rowspan. <thead>, <tbody>, <tfoot>. <caption> title. Scope for accessibility.\n\n<table><tr><th>Name</th><td>Alice</td></tr></table>",
            "codeExample": "8 min",
            "challenge": "Practice: Tables (Part 5)"
          },
          {
            "id": "i-html-45",
            "title": "Forms (Part 5)",
            "content": "<form> with action/method. Input types. Textarea. Select/option. Labels. Required, pattern, placeholder validation.\n\n<form><input type=\"email\" required><button>Submit</button></form>",
            "codeExample": "10 min",
            "challenge": "Practice: Forms (Part 5)",
            "challengeType": "playground",
            "challengeDescription": "Build: Forms (Part 5)"
          },
          {
            "id": "i-html-46",
            "title": "HTML Elements (Part 5)",
            "content": "HTML uses tags to structure content. Elements like <h1>, <p>, <div> form the building blocks. Each has opening/closing tags. Attributes provide extra info.\n\n<h1>Title</h1><p>Text</p><div class=\"box\">Box</div>",
            "codeExample": "8 min",
            "challenge": "Practice: HTML Elements (Part 5)"
          },
          {
            "id": "i-html-47",
            "title": "HTML Attributes (Part 5)",
            "content": "Attributes modify elements: class, id, src, href, alt, style, data-*. Boolean attrs (required, disabled) need no value. Use quotes around attribute values.\n\n<a href=\"https://example.com\" class=\"link\" data-id=\"5\">Link</a>",
            "codeExample": "7 min",
            "challenge": "Practice: HTML Attributes (Part 5)"
          },
          {
            "id": "i-html-48",
            "title": "Headings (Part 5)",
            "content": "h1 to h6 define heading hierarchy. Use one h1 per page. Proper order aids SEO. Screen readers navigate by headings. Keep hierarchy logical.\n\n<h1>Main</h1><h2>Section</h2><h3>Sub</h3>",
            "codeExample": "6 min",
            "challenge": "Practice: Headings (Part 5)"
          },
          {
            "id": "i-html-49",
            "title": "Paragraphs (Part 5)",
            "content": "<p> for paragraphs. <br> for line breaks. <hr> for horizontal rules. <pre> preserves whitespace. Blockquote for citations.\n\n<p>Line one.</p><p>Line two.</p><pre>Code block</pre>",
            "codeExample": "5 min",
            "challenge": "Practice: Paragraphs (Part 5)"
          },
          {
            "id": "i-html-50",
            "title": "Text Formatting (Part 5)",
            "content": "<strong> bold, <em> italic, <mark> highlight, <small> small, <del> strikethrough, <ins> underline, <sub> subscript, <sup> superscript.\n\n<strong>Bold</strong> <em>Italic</em> <mark>Highlight</mark>",
            "codeExample": "6 min",
            "challenge": "Practice: Text Formatting (Part 5)",
            "challengeType": "playground",
            "challengeDescription": "Build: Text Formatting (Part 5)"
          },
          {
            "id": "i-html-51",
            "title": "Links (Part 6)",
            "content": "<a> with href creates hyperlinks. target=\"_blank\" new tab. mailto: for email. tel: for phone. download attribute. Anchor links with #id.\n\n<a href=\"/page\">Link</a> <a href=\"#section\">Anchor</a>",
            "codeExample": "7 min",
            "challenge": "Practice: Links (Part 6)"
          },
          {
            "id": "i-html-52",
            "title": "Images (Part 6)",
            "content": "<img> with src and alt. Alt text is required for accessibility. Use loading=\"lazy\". Provide width/height. Figure/figcaption for captions.\n\n<img src=\"photo.jpg\" alt=\"desc\" loading=\"lazy\" width=\"800\">",
            "codeExample": "7 min",
            "challenge": "Practice: Images (Part 6)"
          },
          {
            "id": "i-html-53",
            "title": "Lists (Part 6)",
            "content": "<ul> unordered, <ol> ordered. <li> items. Nested lists. Type (A, a, I, i). Start, reversed attributes. Description lists dl/dt/dd.\n\n<ul><li>A</li><li>B</li></ul>",
            "codeExample": "6 min",
            "challenge": "Practice: Lists (Part 6)"
          },
          {
            "id": "i-html-54",
            "title": "Tables (Part 6)",
            "content": "<table>, <tr>, <th>, <td>. Colspan/rowspan. <thead>, <tbody>, <tfoot>. <caption> title. Scope for accessibility.\n\n<table><tr><th>Name</th><td>Alice</td></tr></table>",
            "codeExample": "8 min",
            "challenge": "Practice: Tables (Part 6)"
          },
          {
            "id": "i-html-55",
            "title": "Forms (Part 6)",
            "content": "<form> with action/method. Input types. Textarea. Select/option. Labels. Required, pattern, placeholder validation.\n\n<form><input type=\"email\" required><button>Submit</button></form>",
            "codeExample": "10 min",
            "challenge": "Practice: Forms (Part 6)",
            "challengeType": "playground",
            "challengeDescription": "Build: Forms (Part 6)"
          },
          {
            "id": "i-html-56",
            "title": "HTML Elements (Part 6)",
            "content": "HTML uses tags to structure content. Elements like <h1>, <p>, <div> form the building blocks. Each has opening/closing tags. Attributes provide extra info.\n\n<h1>Title</h1><p>Text</p><div class=\"box\">Box</div>",
            "codeExample": "8 min",
            "challenge": "Practice: HTML Elements (Part 6)"
          },
          {
            "id": "i-html-57",
            "title": "HTML Attributes (Part 6)",
            "content": "Attributes modify elements: class, id, src, href, alt, style, data-*. Boolean attrs (required, disabled) need no value. Use quotes around attribute values.\n\n<a href=\"https://example.com\" class=\"link\" data-id=\"5\">Link</a>",
            "codeExample": "7 min",
            "challenge": "Practice: HTML Attributes (Part 6)"
          },
          {
            "id": "i-html-58",
            "title": "Headings (Part 6)",
            "content": "h1 to h6 define heading hierarchy. Use one h1 per page. Proper order aids SEO. Screen readers navigate by headings. Keep hierarchy logical.\n\n<h1>Main</h1><h2>Section</h2><h3>Sub</h3>",
            "codeExample": "6 min",
            "challenge": "Practice: Headings (Part 6)"
          },
          {
            "id": "i-html-59",
            "title": "Paragraphs (Part 6)",
            "content": "<p> for paragraphs. <br> for line breaks. <hr> for horizontal rules. <pre> preserves whitespace. Blockquote for citations.\n\n<p>Line one.</p><p>Line two.</p><pre>Code block</pre>",
            "codeExample": "5 min",
            "challenge": "Practice: Paragraphs (Part 6)"
          },
          {
            "id": "i-html-60",
            "title": "Text Formatting (Part 6)",
            "content": "<strong> bold, <em> italic, <mark> highlight, <small> small, <del> strikethrough, <ins> underline, <sub> subscript, <sup> superscript.\n\n<strong>Bold</strong> <em>Italic</em> <mark>Highlight</mark>",
            "codeExample": "6 min",
            "challenge": "Practice: Text Formatting (Part 6)",
            "challengeType": "playground",
            "challengeDescription": "Build: Text Formatting (Part 6)"
          }
        ]
      },
      {
        "id": "css-adv",
        "title": "Advanced CSS",
        "description": "Flexbox, Grid, animations",
        "lessons": [
          {
            "id": "i-css-1",
            "title": "CSS Intro",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro"
          },
          {
            "id": "i-css-2",
            "title": "Colors",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors"
          },
          {
            "id": "i-css-3",
            "title": "Typography",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography"
          },
          {
            "id": "i-css-4",
            "title": "Box Model",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model"
          },
          {
            "id": "i-css-5",
            "title": "Display Property",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property"
          },
          {
            "id": "i-css-6",
            "title": "CSS Intro",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro"
          },
          {
            "id": "i-css-7",
            "title": "Colors",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors"
          },
          {
            "id": "i-css-8",
            "title": "Typography",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography"
          },
          {
            "id": "i-css-9",
            "title": "Box Model",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model"
          },
          {
            "id": "i-css-10",
            "title": "Display Property",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property"
          },
          {
            "id": "i-css-11",
            "title": "CSS Intro (Part 2)",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro (Part 2)"
          },
          {
            "id": "i-css-12",
            "title": "Colors (Part 2)",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors (Part 2)"
          },
          {
            "id": "i-css-13",
            "title": "Typography (Part 2)",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography (Part 2)"
          },
          {
            "id": "i-css-14",
            "title": "Box Model (Part 2)",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model (Part 2)"
          },
          {
            "id": "i-css-15",
            "title": "Display Property (Part 2)",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property (Part 2)",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property (Part 2)"
          },
          {
            "id": "i-css-16",
            "title": "CSS Intro (Part 2)",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro (Part 2)"
          },
          {
            "id": "i-css-17",
            "title": "Colors (Part 2)",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors (Part 2)"
          },
          {
            "id": "i-css-18",
            "title": "Typography (Part 2)",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography (Part 2)"
          },
          {
            "id": "i-css-19",
            "title": "Box Model (Part 2)",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model (Part 2)"
          },
          {
            "id": "i-css-20",
            "title": "Display Property (Part 2)",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property (Part 2)",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property (Part 2)"
          },
          {
            "id": "i-css-21",
            "title": "CSS Intro (Part 3)",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro (Part 3)"
          },
          {
            "id": "i-css-22",
            "title": "Colors (Part 3)",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors (Part 3)"
          },
          {
            "id": "i-css-23",
            "title": "Typography (Part 3)",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography (Part 3)"
          },
          {
            "id": "i-css-24",
            "title": "Box Model (Part 3)",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model (Part 3)"
          },
          {
            "id": "i-css-25",
            "title": "Display Property (Part 3)",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property (Part 3)"
          },
          {
            "id": "i-css-26",
            "title": "CSS Intro (Part 3)",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro (Part 3)"
          },
          {
            "id": "i-css-27",
            "title": "Colors (Part 3)",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors (Part 3)"
          },
          {
            "id": "i-css-28",
            "title": "Typography (Part 3)",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography (Part 3)"
          },
          {
            "id": "i-css-29",
            "title": "Box Model (Part 3)",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model (Part 3)"
          },
          {
            "id": "i-css-30",
            "title": "Display Property (Part 3)",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property (Part 3)"
          },
          {
            "id": "i-css-31",
            "title": "CSS Intro (Part 4)",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro (Part 4)"
          },
          {
            "id": "i-css-32",
            "title": "Colors (Part 4)",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors (Part 4)"
          },
          {
            "id": "i-css-33",
            "title": "Typography (Part 4)",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography (Part 4)"
          },
          {
            "id": "i-css-34",
            "title": "Box Model (Part 4)",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model (Part 4)"
          },
          {
            "id": "i-css-35",
            "title": "Display Property (Part 4)",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property (Part 4)",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property (Part 4)"
          },
          {
            "id": "i-css-36",
            "title": "CSS Intro (Part 4)",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro (Part 4)"
          },
          {
            "id": "i-css-37",
            "title": "Colors (Part 4)",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors (Part 4)"
          },
          {
            "id": "i-css-38",
            "title": "Typography (Part 4)",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography (Part 4)"
          },
          {
            "id": "i-css-39",
            "title": "Box Model (Part 4)",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model (Part 4)"
          },
          {
            "id": "i-css-40",
            "title": "Display Property (Part 4)",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property (Part 4)",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property (Part 4)"
          },
          {
            "id": "i-css-41",
            "title": "CSS Intro (Part 5)",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro (Part 5)"
          },
          {
            "id": "i-css-42",
            "title": "Colors (Part 5)",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors (Part 5)"
          },
          {
            "id": "i-css-43",
            "title": "Typography (Part 5)",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography (Part 5)"
          },
          {
            "id": "i-css-44",
            "title": "Box Model (Part 5)",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model (Part 5)"
          },
          {
            "id": "i-css-45",
            "title": "Display Property (Part 5)",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property (Part 5)",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property (Part 5)"
          },
          {
            "id": "i-css-46",
            "title": "CSS Intro (Part 5)",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro (Part 5)"
          },
          {
            "id": "i-css-47",
            "title": "Colors (Part 5)",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors (Part 5)"
          },
          {
            "id": "i-css-48",
            "title": "Typography (Part 5)",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography (Part 5)"
          },
          {
            "id": "i-css-49",
            "title": "Box Model (Part 5)",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model (Part 5)"
          },
          {
            "id": "i-css-50",
            "title": "Display Property (Part 5)",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property (Part 5)",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property (Part 5)"
          },
          {
            "id": "i-css-51",
            "title": "CSS Intro (Part 6)",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro (Part 6)"
          },
          {
            "id": "i-css-52",
            "title": "Colors (Part 6)",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors (Part 6)"
          },
          {
            "id": "i-css-53",
            "title": "Typography (Part 6)",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography (Part 6)"
          },
          {
            "id": "i-css-54",
            "title": "Box Model (Part 6)",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model (Part 6)"
          },
          {
            "id": "i-css-55",
            "title": "Display Property (Part 6)",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property (Part 6)",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property (Part 6)"
          },
          {
            "id": "i-css-56",
            "title": "CSS Intro (Part 6)",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro (Part 6)"
          },
          {
            "id": "i-css-57",
            "title": "Colors (Part 6)",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors (Part 6)"
          },
          {
            "id": "i-css-58",
            "title": "Typography (Part 6)",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography (Part 6)"
          },
          {
            "id": "i-css-59",
            "title": "Box Model (Part 6)",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model (Part 6)"
          },
          {
            "id": "i-css-60",
            "title": "Display Property (Part 6)",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property (Part 6)",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property (Part 6)"
          },
          {
            "id": "i-css-61",
            "title": "CSS Intro (Part 7)",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro (Part 7)"
          },
          {
            "id": "i-css-62",
            "title": "Colors (Part 7)",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors (Part 7)"
          },
          {
            "id": "i-css-63",
            "title": "Typography (Part 7)",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography (Part 7)"
          },
          {
            "id": "i-css-64",
            "title": "Box Model (Part 7)",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model (Part 7)"
          },
          {
            "id": "i-css-65",
            "title": "Display Property (Part 7)",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property (Part 7)",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property (Part 7)"
          },
          {
            "id": "i-css-66",
            "title": "CSS Intro (Part 7)",
            "content": "CSS styles HTML. Selector { property: value; }. Inline, internal, external methods. Cascade and specificity. The browser applies styles in order.\n\nh1 { color: blue; }\n.highlight { background: yellow; }",
            "codeExample": "8 min",
            "challenge": "Practice: CSS Intro (Part 7)"
          },
          {
            "id": "i-css-67",
            "title": "Colors (Part 7)",
            "content": "Named, hex (#ff0000), rgb(), rgba(), hsl(). Opacity. CurrentColor. Color contrast for accessibility. Tools for color selection.\n\n.box { color: #6366f1; background: rgba(99,102,241,0.1); }",
            "codeExample": "6 min",
            "challenge": "Practice: Colors (Part 7)"
          },
          {
            "id": "i-css-68",
            "title": "Typography (Part 7)",
            "content": "font-family, size, weight, line-height, text-align, decoration, transform. Google Fonts. Web-safe fonts. Rem vs px. Letter and word spacing.\n\nbody { font-family: \"Inter\", sans-serif; font-size: 16px; line-height: 1.6; }",
            "codeExample": "8 min",
            "challenge": "Practice: Typography (Part 7)"
          },
          {
            "id": "i-css-69",
            "title": "Box Model (Part 7)",
            "content": "Content, padding, border, margin. Box-sizing: border-box vs content-box. Width/height calculations. Margin collapse.\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid; }",
            "codeExample": "8 min",
            "challenge": "Practice: Box Model (Part 7)"
          },
          {
            "id": "i-css-70",
            "title": "Display Property (Part 7)",
            "content": "block, inline, inline-block, none, flex, grid. Block takes full width. Inline flows with text. Inline-block combines both.\n\ndiv { display: flex; gap: 16px; }\nspan { display: inline-block; width: 100px; }",
            "codeExample": "7 min",
            "challenge": "Practice: Display Property (Part 7)",
            "challengeType": "playground",
            "challengeDescription": "Build: Display Property (Part 7)"
          }
        ]
      },
      {
        "id": "js-adv",
        "title": "Advanced JS",
        "description": "ES6+, async, DOM, APIs",
        "lessons": [
          {
            "id": "i-js-1",
            "title": "Variables",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables"
          },
          {
            "id": "i-js-2",
            "title": "Data Types",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types"
          },
          {
            "id": "i-js-3",
            "title": "Operators",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators"
          },
          {
            "id": "i-js-4",
            "title": "Functions",
            "content": "Function declarations, expressions, arrow functions. Parameters and arguments. Return values. Default parameters. Rest parameters (...args). Higher-order functions.\n\nfunction add(a, b) { return a + b; }\nconst multiply = (a, b) => a * b;",
            "codeExample": "10 min",
            "challenge": "Practice: Functions"
          },
          {
            "id": "i-js-5",
            "title": "Variables",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables",
            "challengeType": "playground",
            "challengeDescription": "Build: Variables"
          },
          {
            "id": "i-js-6",
            "title": "Data Types",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types"
          },
          {
            "id": "i-js-7",
            "title": "Operators",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators"
          },
          {
            "id": "i-js-8",
            "title": "Variables (Part 2)",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables (Part 2)"
          },
          {
            "id": "i-js-9",
            "title": "Data Types (Part 2)",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types (Part 2)"
          },
          {
            "id": "i-js-10",
            "title": "Operators (Part 2)",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators (Part 2)",
            "challengeType": "playground",
            "challengeDescription": "Build: Operators (Part 2)"
          },
          {
            "id": "i-js-11",
            "title": "Functions (Part 2)",
            "content": "Function declarations, expressions, arrow functions. Parameters and arguments. Return values. Default parameters. Rest parameters (...args). Higher-order functions.\n\nfunction add(a, b) { return a + b; }\nconst multiply = (a, b) => a * b;",
            "codeExample": "10 min",
            "challenge": "Practice: Functions (Part 2)"
          },
          {
            "id": "i-js-12",
            "title": "Variables (Part 2)",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables (Part 2)"
          },
          {
            "id": "i-js-13",
            "title": "Data Types (Part 2)",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types (Part 2)"
          },
          {
            "id": "i-js-14",
            "title": "Operators (Part 2)",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators (Part 2)"
          },
          {
            "id": "i-js-15",
            "title": "Variables (Part 3)",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: Variables (Part 3)"
          },
          {
            "id": "i-js-16",
            "title": "Data Types (Part 3)",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types (Part 3)"
          },
          {
            "id": "i-js-17",
            "title": "Operators (Part 3)",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators (Part 3)"
          },
          {
            "id": "i-js-18",
            "title": "Functions (Part 3)",
            "content": "Function declarations, expressions, arrow functions. Parameters and arguments. Return values. Default parameters. Rest parameters (...args). Higher-order functions.\n\nfunction add(a, b) { return a + b; }\nconst multiply = (a, b) => a * b;",
            "codeExample": "10 min",
            "challenge": "Practice: Functions (Part 3)"
          },
          {
            "id": "i-js-19",
            "title": "Variables (Part 3)",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables (Part 3)"
          },
          {
            "id": "i-js-20",
            "title": "Data Types (Part 3)",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: Data Types (Part 3)"
          },
          {
            "id": "i-js-21",
            "title": "Operators (Part 3)",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators (Part 3)"
          },
          {
            "id": "i-js-22",
            "title": "Variables (Part 4)",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables (Part 4)"
          },
          {
            "id": "i-js-23",
            "title": "Data Types (Part 4)",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types (Part 4)"
          },
          {
            "id": "i-js-24",
            "title": "Operators (Part 4)",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators (Part 4)"
          },
          {
            "id": "i-js-25",
            "title": "Functions (Part 4)",
            "content": "Function declarations, expressions, arrow functions. Parameters and arguments. Return values. Default parameters. Rest parameters (...args). Higher-order functions.\n\nfunction add(a, b) { return a + b; }\nconst multiply = (a, b) => a * b;",
            "codeExample": "10 min",
            "challenge": "Practice: Functions (Part 4)",
            "challengeType": "playground",
            "challengeDescription": "Build: Functions (Part 4)"
          },
          {
            "id": "i-js-26",
            "title": "Variables (Part 4)",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables (Part 4)"
          },
          {
            "id": "i-js-27",
            "title": "Data Types (Part 4)",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types (Part 4)"
          },
          {
            "id": "i-js-28",
            "title": "Operators (Part 4)",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators (Part 4)"
          },
          {
            "id": "i-js-29",
            "title": "Variables (Part 5)",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables (Part 5)"
          },
          {
            "id": "i-js-30",
            "title": "Data Types (Part 5)",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types (Part 5)",
            "challengeType": "playground",
            "challengeDescription": "Build: Data Types (Part 5)"
          },
          {
            "id": "i-js-31",
            "title": "Operators (Part 5)",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators (Part 5)"
          },
          {
            "id": "i-js-32",
            "title": "Functions (Part 5)",
            "content": "Function declarations, expressions, arrow functions. Parameters and arguments. Return values. Default parameters. Rest parameters (...args). Higher-order functions.\n\nfunction add(a, b) { return a + b; }\nconst multiply = (a, b) => a * b;",
            "codeExample": "10 min",
            "challenge": "Practice: Functions (Part 5)"
          },
          {
            "id": "i-js-33",
            "title": "Variables (Part 5)",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables (Part 5)"
          },
          {
            "id": "i-js-34",
            "title": "Data Types (Part 5)",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types (Part 5)"
          },
          {
            "id": "i-js-35",
            "title": "Operators (Part 5)",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators (Part 5)",
            "challengeType": "playground",
            "challengeDescription": "Build: Operators (Part 5)"
          },
          {
            "id": "i-js-36",
            "title": "Variables (Part 6)",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables (Part 6)"
          },
          {
            "id": "i-js-37",
            "title": "Data Types (Part 6)",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types (Part 6)"
          },
          {
            "id": "i-js-38",
            "title": "Operators (Part 6)",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators (Part 6)"
          },
          {
            "id": "i-js-39",
            "title": "Functions (Part 6)",
            "content": "Function declarations, expressions, arrow functions. Parameters and arguments. Return values. Default parameters. Rest parameters (...args). Higher-order functions.\n\nfunction add(a, b) { return a + b; }\nconst multiply = (a, b) => a * b;",
            "codeExample": "10 min",
            "challenge": "Practice: Functions (Part 6)"
          },
          {
            "id": "i-js-40",
            "title": "Variables (Part 6)",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables (Part 6)",
            "challengeType": "playground",
            "challengeDescription": "Build: Variables (Part 6)"
          },
          {
            "id": "i-js-41",
            "title": "Data Types (Part 6)",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types (Part 6)"
          },
          {
            "id": "i-js-42",
            "title": "Operators (Part 6)",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators (Part 6)"
          },
          {
            "id": "i-js-43",
            "title": "Variables (Part 7)",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables (Part 7)"
          },
          {
            "id": "i-js-44",
            "title": "Data Types (Part 7)",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types (Part 7)"
          },
          {
            "id": "i-js-45",
            "title": "Operators (Part 7)",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators (Part 7)",
            "challengeType": "playground",
            "challengeDescription": "Build: Operators (Part 7)"
          },
          {
            "id": "i-js-46",
            "title": "Functions (Part 7)",
            "content": "Function declarations, expressions, arrow functions. Parameters and arguments. Return values. Default parameters. Rest parameters (...args). Higher-order functions.\n\nfunction add(a, b) { return a + b; }\nconst multiply = (a, b) => a * b;",
            "codeExample": "10 min",
            "challenge": "Practice: Functions (Part 7)"
          },
          {
            "id": "i-js-47",
            "title": "Variables (Part 7)",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables (Part 7)"
          },
          {
            "id": "i-js-48",
            "title": "Data Types (Part 7)",
            "content": "String, number, boolean, null, undefined, symbol, bigint. typeof operator checks type. Type coercion happens with == vs ===. Use === always.\n\ntypeof \"hello\" // \"string\"\ntypeof 42 // \"number\"\ntypeof true // \"boolean\"",
            "codeExample": "7 min",
            "challenge": "Practice: Data Types (Part 7)"
          },
          {
            "id": "i-js-49",
            "title": "Operators (Part 7)",
            "content": "Arithmetic (+ - * / % **). Assignment (= += -=). Comparison (=== !== > <). Logical (&& || !). Ternary (?:). Nullish coalescing (??).\n\nconst sum = 10 + 5;\nconst eq = 5 === \"5\"; // false\nconst max = a > b ? a : b;",
            "codeExample": "8 min",
            "challenge": "Practice: Operators (Part 7)"
          },
          {
            "id": "i-js-50",
            "title": "Variables (Part 8)",
            "content": "const (cannot reassign), let (can reassign). Avoid var. Naming: camelCase. Dynamic typing. Primitive types: string, number, boolean, null, undefined.\n\nconst name = \"Alice\";\nlet count = 0;\nconst isActive = true;",
            "codeExample": "8 min",
            "challenge": "Practice: Variables (Part 8)",
            "challengeType": "playground",
            "challengeDescription": "Build: Variables (Part 8)"
          }
        ]
      },
      {
        "id": "deploy",
        "title": "Deployment",
        "description": "Vercel, Netlify, domains",
        "lessons": [
          {
            "id": "i-deploy-1",
            "title": "Vercel",
            "content": "Deploy with Vercel\n\nConnect GitHub and deploy instantly.",
            "codeExample": "vercel deploy",
            "duration": "8 min",
            "challenge": "Practice: Vercel"
          },
          {
            "id": "i-deploy-2",
            "title": "Netlify",
            "content": "Deploy with Netlify\n\nGit-based deployment with forms and functions.",
            "codeExample": "netlify deploy",
            "duration": "8 min",
            "challenge": "Practice: Netlify"
          },
          {
            "id": "i-deploy-3",
            "title": "Vercel (Part 2)",
            "content": "Deploy with Vercel\n\nConnect GitHub and deploy instantly.",
            "codeExample": "vercel deploy",
            "duration": "8 min",
            "challenge": "Practice: Vercel (Part 2)"
          },
          {
            "id": "i-deploy-4",
            "title": "Netlify (Part 2)",
            "content": "Deploy with Netlify\n\nGit-based deployment with forms and functions.",
            "codeExample": "netlify deploy",
            "duration": "8 min",
            "challenge": "Practice: Netlify (Part 2)"
          },
          {
            "id": "i-deploy-5",
            "title": "Vercel (Part 3)",
            "content": "Deploy with Vercel\n\nConnect GitHub and deploy instantly.",
            "codeExample": "vercel deploy",
            "duration": "8 min",
            "challenge": "Practice: Vercel (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: Vercel (Part 3)"
          },
          {
            "id": "i-deploy-6",
            "title": "Netlify (Part 3)",
            "content": "Deploy with Netlify\n\nGit-based deployment with forms and functions.",
            "codeExample": "netlify deploy",
            "duration": "8 min",
            "challenge": "Practice: Netlify (Part 3)"
          },
          {
            "id": "i-deploy-7",
            "title": "Vercel (Part 4)",
            "content": "Deploy with Vercel\n\nConnect GitHub and deploy instantly.",
            "codeExample": "vercel deploy",
            "duration": "8 min",
            "challenge": "Practice: Vercel (Part 4)"
          },
          {
            "id": "i-deploy-8",
            "title": "Netlify (Part 4)",
            "content": "Deploy with Netlify\n\nGit-based deployment with forms and functions.",
            "codeExample": "netlify deploy",
            "duration": "8 min",
            "challenge": "Practice: Netlify (Part 4)"
          },
          {
            "id": "i-deploy-9",
            "title": "Vercel (Part 5)",
            "content": "Deploy with Vercel\n\nConnect GitHub and deploy instantly.",
            "codeExample": "vercel deploy",
            "duration": "8 min",
            "challenge": "Practice: Vercel (Part 5)"
          },
          {
            "id": "i-deploy-10",
            "title": "Netlify (Part 5)",
            "content": "Deploy with Netlify\n\nGit-based deployment with forms and functions.",
            "codeExample": "netlify deploy",
            "duration": "8 min",
            "challenge": "Practice: Netlify (Part 5)",
            "challengeType": "playground",
            "challengeDescription": "Build: Netlify (Part 5)"
          },
          {
            "id": "i-deploy-11",
            "title": "Vercel (Part 6)",
            "content": "Deploy with Vercel\n\nConnect GitHub and deploy instantly.",
            "codeExample": "vercel deploy",
            "duration": "8 min",
            "challenge": "Practice: Vercel (Part 6)"
          },
          {
            "id": "i-deploy-12",
            "title": "Netlify (Part 6)",
            "content": "Deploy with Netlify\n\nGit-based deployment with forms and functions.",
            "codeExample": "netlify deploy",
            "duration": "8 min",
            "challenge": "Practice: Netlify (Part 6)"
          },
          {
            "id": "i-deploy-13",
            "title": "Vercel (Part 7)",
            "content": "Deploy with Vercel\n\nConnect GitHub and deploy instantly.",
            "codeExample": "vercel deploy",
            "duration": "8 min",
            "challenge": "Practice: Vercel (Part 7)"
          },
          {
            "id": "i-deploy-14",
            "title": "Netlify (Part 7)",
            "content": "Deploy with Netlify\n\nGit-based deployment with forms and functions.",
            "codeExample": "netlify deploy",
            "duration": "8 min",
            "challenge": "Practice: Netlify (Part 7)"
          },
          {
            "id": "i-deploy-15",
            "title": "Vercel (Part 8)",
            "content": "Deploy with Vercel\n\nConnect GitHub and deploy instantly.",
            "codeExample": "vercel deploy",
            "duration": "8 min",
            "challenge": "Practice: Vercel (Part 8)",
            "challengeType": "playground",
            "challengeDescription": "Build: Vercel (Part 8)"
          },
          {
            "id": "i-deploy-16",
            "title": "Netlify (Part 8)",
            "content": "Deploy with Netlify\n\nGit-based deployment with forms and functions.",
            "codeExample": "netlify deploy",
            "duration": "8 min",
            "challenge": "Practice: Netlify (Part 8)"
          },
          {
            "id": "i-deploy-17",
            "title": "Vercel (Part 9)",
            "content": "Deploy with Vercel\n\nConnect GitHub and deploy instantly.",
            "codeExample": "vercel deploy",
            "duration": "8 min",
            "challenge": "Practice: Vercel (Part 9)"
          },
          {
            "id": "i-deploy-18",
            "title": "Netlify (Part 9)",
            "content": "Deploy with Netlify\n\nGit-based deployment with forms and functions.",
            "codeExample": "netlify deploy",
            "duration": "8 min",
            "challenge": "Practice: Netlify (Part 9)"
          },
          {
            "id": "i-deploy-19",
            "title": "Vercel (Part 10)",
            "content": "Deploy with Vercel\n\nConnect GitHub and deploy instantly.",
            "codeExample": "vercel deploy",
            "duration": "8 min",
            "challenge": "Practice: Vercel (Part 10)"
          },
          {
            "id": "i-deploy-20",
            "title": "Netlify (Part 10)",
            "content": "Deploy with Netlify\n\nGit-based deployment with forms and functions.",
            "codeExample": "netlify deploy",
            "duration": "8 min",
            "challenge": "Practice: Netlify (Part 10)",
            "challengeType": "playground",
            "challengeDescription": "Build: Netlify (Part 10)"
          }
        ]
      }
    ]
  },
  "advanced": {
    "id": "advanced",
    "title": "Advanced",
    "color": "#f59e0b",
    "modules": [
      {
        "id": "react",
        "title": "React",
        "description": "Modern UI development",
        "lessons": [
          {
            "id": "a-react-1",
            "title": "React Components",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components"
          },
          {
            "id": "a-react-2",
            "title": "JSX Syntax",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax"
          },
          {
            "id": "a-react-3",
            "title": "React Components (Part 2)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 2)"
          },
          {
            "id": "a-react-4",
            "title": "JSX Syntax (Part 2)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 2)"
          },
          {
            "id": "a-react-5",
            "title": "React Components (Part 3)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: React Components (Part 3)"
          },
          {
            "id": "a-react-6",
            "title": "JSX Syntax (Part 3)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 3)"
          },
          {
            "id": "a-react-7",
            "title": "React Components (Part 4)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 4)"
          },
          {
            "id": "a-react-8",
            "title": "JSX Syntax (Part 4)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 4)"
          },
          {
            "id": "a-react-9",
            "title": "React Components (Part 5)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 5)"
          },
          {
            "id": "a-react-10",
            "title": "JSX Syntax (Part 5)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 5)",
            "challengeType": "playground",
            "challengeDescription": "Build: JSX Syntax (Part 5)"
          },
          {
            "id": "a-react-11",
            "title": "React Components (Part 6)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 6)"
          },
          {
            "id": "a-react-12",
            "title": "JSX Syntax (Part 6)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 6)"
          },
          {
            "id": "a-react-13",
            "title": "React Components (Part 7)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 7)"
          },
          {
            "id": "a-react-14",
            "title": "JSX Syntax (Part 7)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 7)"
          },
          {
            "id": "a-react-15",
            "title": "React Components (Part 8)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 8)",
            "challengeType": "playground",
            "challengeDescription": "Build: React Components (Part 8)"
          },
          {
            "id": "a-react-16",
            "title": "JSX Syntax (Part 8)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 8)"
          },
          {
            "id": "a-react-17",
            "title": "React Components (Part 9)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 9)"
          },
          {
            "id": "a-react-18",
            "title": "JSX Syntax (Part 9)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 9)"
          },
          {
            "id": "a-react-19",
            "title": "React Components (Part 10)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 10)"
          },
          {
            "id": "a-react-20",
            "title": "JSX Syntax (Part 10)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 10)",
            "challengeType": "playground",
            "challengeDescription": "Build: JSX Syntax (Part 10)"
          },
          {
            "id": "a-react-21",
            "title": "React Components (Part 11)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 11)"
          },
          {
            "id": "a-react-22",
            "title": "JSX Syntax (Part 11)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 11)"
          },
          {
            "id": "a-react-23",
            "title": "React Components (Part 12)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 12)"
          },
          {
            "id": "a-react-24",
            "title": "JSX Syntax (Part 12)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 12)"
          },
          {
            "id": "a-react-25",
            "title": "React Components (Part 13)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 13)",
            "challengeType": "playground",
            "challengeDescription": "Build: React Components (Part 13)"
          },
          {
            "id": "a-react-26",
            "title": "JSX Syntax (Part 13)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 13)"
          },
          {
            "id": "a-react-27",
            "title": "React Components (Part 14)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 14)"
          },
          {
            "id": "a-react-28",
            "title": "JSX Syntax (Part 14)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 14)"
          },
          {
            "id": "a-react-29",
            "title": "React Components (Part 15)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 15)"
          },
          {
            "id": "a-react-30",
            "title": "JSX Syntax (Part 15)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 15)",
            "challengeType": "playground",
            "challengeDescription": "Build: JSX Syntax (Part 15)"
          },
          {
            "id": "a-react-31",
            "title": "React Components (Part 16)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 16)"
          },
          {
            "id": "a-react-32",
            "title": "JSX Syntax (Part 16)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 16)"
          },
          {
            "id": "a-react-33",
            "title": "React Components (Part 17)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 17)"
          },
          {
            "id": "a-react-34",
            "title": "JSX Syntax (Part 17)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 17)"
          },
          {
            "id": "a-react-35",
            "title": "React Components (Part 18)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 18)",
            "challengeType": "playground",
            "challengeDescription": "Build: React Components (Part 18)"
          },
          {
            "id": "a-react-36",
            "title": "JSX Syntax (Part 18)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 18)"
          },
          {
            "id": "a-react-37",
            "title": "React Components (Part 19)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 19)"
          },
          {
            "id": "a-react-38",
            "title": "JSX Syntax (Part 19)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 19)"
          },
          {
            "id": "a-react-39",
            "title": "React Components (Part 20)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 20)"
          },
          {
            "id": "a-react-40",
            "title": "JSX Syntax (Part 20)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 20)",
            "challengeType": "playground",
            "challengeDescription": "Build: JSX Syntax (Part 20)"
          },
          {
            "id": "a-react-41",
            "title": "React Components (Part 21)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 21)"
          },
          {
            "id": "a-react-42",
            "title": "JSX Syntax (Part 21)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 21)"
          },
          {
            "id": "a-react-43",
            "title": "React Components (Part 22)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 22)"
          },
          {
            "id": "a-react-44",
            "title": "JSX Syntax (Part 22)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 22)"
          },
          {
            "id": "a-react-45",
            "title": "React Components (Part 23)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 23)",
            "challengeType": "playground",
            "challengeDescription": "Build: React Components (Part 23)"
          },
          {
            "id": "a-react-46",
            "title": "JSX Syntax (Part 23)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 23)"
          },
          {
            "id": "a-react-47",
            "title": "React Components (Part 24)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 24)"
          },
          {
            "id": "a-react-48",
            "title": "JSX Syntax (Part 24)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 24)"
          },
          {
            "id": "a-react-49",
            "title": "React Components (Part 25)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 25)"
          },
          {
            "id": "a-react-50",
            "title": "JSX Syntax (Part 25)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 25)",
            "challengeType": "playground",
            "challengeDescription": "Build: JSX Syntax (Part 25)"
          },
          {
            "id": "a-react-51",
            "title": "React Components (Part 26)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 26)"
          },
          {
            "id": "a-react-52",
            "title": "JSX Syntax (Part 26)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 26)"
          },
          {
            "id": "a-react-53",
            "title": "React Components (Part 27)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 27)"
          },
          {
            "id": "a-react-54",
            "title": "JSX Syntax (Part 27)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 27)"
          },
          {
            "id": "a-react-55",
            "title": "React Components (Part 28)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 28)",
            "challengeType": "playground",
            "challengeDescription": "Build: React Components (Part 28)"
          },
          {
            "id": "a-react-56",
            "title": "JSX Syntax (Part 28)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 28)"
          },
          {
            "id": "a-react-57",
            "title": "React Components (Part 29)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 29)"
          },
          {
            "id": "a-react-58",
            "title": "JSX Syntax (Part 29)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 29)"
          },
          {
            "id": "a-react-59",
            "title": "React Components (Part 30)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 30)"
          },
          {
            "id": "a-react-60",
            "title": "JSX Syntax (Part 30)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 30)",
            "challengeType": "playground",
            "challengeDescription": "Build: JSX Syntax (Part 30)"
          },
          {
            "id": "a-react-61",
            "title": "React Components (Part 31)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 31)"
          },
          {
            "id": "a-react-62",
            "title": "JSX Syntax (Part 31)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 31)"
          },
          {
            "id": "a-react-63",
            "title": "React Components (Part 32)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 32)"
          },
          {
            "id": "a-react-64",
            "title": "JSX Syntax (Part 32)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 32)"
          },
          {
            "id": "a-react-65",
            "title": "React Components (Part 33)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 33)",
            "challengeType": "playground",
            "challengeDescription": "Build: React Components (Part 33)"
          },
          {
            "id": "a-react-66",
            "title": "JSX Syntax (Part 33)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 33)"
          },
          {
            "id": "a-react-67",
            "title": "React Components (Part 34)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 34)"
          },
          {
            "id": "a-react-68",
            "title": "JSX Syntax (Part 34)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 34)"
          },
          {
            "id": "a-react-69",
            "title": "React Components (Part 35)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 35)"
          },
          {
            "id": "a-react-70",
            "title": "JSX Syntax (Part 35)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 35)",
            "challengeType": "playground",
            "challengeDescription": "Build: JSX Syntax (Part 35)"
          },
          {
            "id": "a-react-71",
            "title": "React Components (Part 36)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 36)"
          },
          {
            "id": "a-react-72",
            "title": "JSX Syntax (Part 36)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 36)"
          },
          {
            "id": "a-react-73",
            "title": "React Components (Part 37)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 37)"
          },
          {
            "id": "a-react-74",
            "title": "JSX Syntax (Part 37)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 37)"
          },
          {
            "id": "a-react-75",
            "title": "React Components (Part 38)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 38)",
            "challengeType": "playground",
            "challengeDescription": "Build: React Components (Part 38)"
          },
          {
            "id": "a-react-76",
            "title": "JSX Syntax (Part 38)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 38)"
          },
          {
            "id": "a-react-77",
            "title": "React Components (Part 39)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 39)"
          },
          {
            "id": "a-react-78",
            "title": "JSX Syntax (Part 39)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 39)"
          },
          {
            "id": "a-react-79",
            "title": "React Components (Part 40)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 40)"
          },
          {
            "id": "a-react-80",
            "title": "JSX Syntax (Part 40)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 40)",
            "challengeType": "playground",
            "challengeDescription": "Build: JSX Syntax (Part 40)"
          },
          {
            "id": "a-react-81",
            "title": "React Components (Part 41)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 41)"
          },
          {
            "id": "a-react-82",
            "title": "JSX Syntax (Part 41)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 41)"
          },
          {
            "id": "a-react-83",
            "title": "React Components (Part 42)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 42)"
          },
          {
            "id": "a-react-84",
            "title": "JSX Syntax (Part 42)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 42)"
          },
          {
            "id": "a-react-85",
            "title": "React Components (Part 43)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 43)",
            "challengeType": "playground",
            "challengeDescription": "Build: React Components (Part 43)"
          },
          {
            "id": "a-react-86",
            "title": "JSX Syntax (Part 43)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 43)"
          },
          {
            "id": "a-react-87",
            "title": "React Components (Part 44)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 44)"
          },
          {
            "id": "a-react-88",
            "title": "JSX Syntax (Part 44)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 44)"
          },
          {
            "id": "a-react-89",
            "title": "React Components (Part 45)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 45)"
          },
          {
            "id": "a-react-90",
            "title": "JSX Syntax (Part 45)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 45)",
            "challengeType": "playground",
            "challengeDescription": "Build: JSX Syntax (Part 45)"
          },
          {
            "id": "a-react-91",
            "title": "React Components (Part 46)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 46)"
          },
          {
            "id": "a-react-92",
            "title": "JSX Syntax (Part 46)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 46)"
          },
          {
            "id": "a-react-93",
            "title": "React Components (Part 47)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 47)"
          },
          {
            "id": "a-react-94",
            "title": "JSX Syntax (Part 47)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 47)"
          },
          {
            "id": "a-react-95",
            "title": "React Components (Part 48)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 48)",
            "challengeType": "playground",
            "challengeDescription": "Build: React Components (Part 48)"
          },
          {
            "id": "a-react-96",
            "title": "JSX Syntax (Part 48)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 48)"
          },
          {
            "id": "a-react-97",
            "title": "React Components (Part 49)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 49)"
          },
          {
            "id": "a-react-98",
            "title": "JSX Syntax (Part 49)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 49)"
          },
          {
            "id": "a-react-99",
            "title": "React Components (Part 50)",
            "content": "Function components return JSX. Props pass data. Components are reusable. Compose components together. Export and import.\n\nfunction Welcome({ name }) {\n  return <h1>Hello {name}</h1>;\n}",
            "codeExample": "12 min",
            "challenge": "Practice: React Components (Part 50)"
          },
          {
            "id": "a-react-100",
            "title": "JSX Syntax (Part 50)",
            "content": "JSX looks like HTML but is JavaScript. className instead of class. Curly braces for expressions. Self-closing tags. Fragments <>...</>. Babel compiles JSX.\n\n<div className=\"card\">\n  <h1>{title}</h1>\n  <p>{description}</p>\n</div>",
            "codeExample": "10 min",
            "challenge": "Practice: JSX Syntax (Part 50)",
            "challengeType": "playground",
            "challengeDescription": "Build: JSX Syntax (Part 50)"
          }
        ]
      },
      {
        "id": "node",
        "title": "Node.js & Express",
        "description": "Server-side JavaScript",
        "lessons": [
          {
            "id": "a-node-1",
            "title": "Node.js Basics",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics"
          },
          {
            "id": "a-node-2",
            "title": "Express Framework",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework"
          },
          {
            "id": "a-node-3",
            "title": "Node.js Basics (Part 2)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 2)"
          },
          {
            "id": "a-node-4",
            "title": "Express Framework (Part 2)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 2)"
          },
          {
            "id": "a-node-5",
            "title": "Node.js Basics (Part 3)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: Node.js Basics (Part 3)"
          },
          {
            "id": "a-node-6",
            "title": "Express Framework (Part 3)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 3)"
          },
          {
            "id": "a-node-7",
            "title": "Node.js Basics (Part 4)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 4)"
          },
          {
            "id": "a-node-8",
            "title": "Express Framework (Part 4)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 4)"
          },
          {
            "id": "a-node-9",
            "title": "Node.js Basics (Part 5)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 5)"
          },
          {
            "id": "a-node-10",
            "title": "Express Framework (Part 5)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 5)",
            "challengeType": "playground",
            "challengeDescription": "Build: Express Framework (Part 5)"
          },
          {
            "id": "a-node-11",
            "title": "Node.js Basics (Part 6)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 6)"
          },
          {
            "id": "a-node-12",
            "title": "Express Framework (Part 6)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 6)"
          },
          {
            "id": "a-node-13",
            "title": "Node.js Basics (Part 7)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 7)"
          },
          {
            "id": "a-node-14",
            "title": "Express Framework (Part 7)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 7)"
          },
          {
            "id": "a-node-15",
            "title": "Node.js Basics (Part 8)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 8)",
            "challengeType": "playground",
            "challengeDescription": "Build: Node.js Basics (Part 8)"
          },
          {
            "id": "a-node-16",
            "title": "Express Framework (Part 8)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 8)"
          },
          {
            "id": "a-node-17",
            "title": "Node.js Basics (Part 9)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 9)"
          },
          {
            "id": "a-node-18",
            "title": "Express Framework (Part 9)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 9)"
          },
          {
            "id": "a-node-19",
            "title": "Node.js Basics (Part 10)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 10)"
          },
          {
            "id": "a-node-20",
            "title": "Express Framework (Part 10)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 10)",
            "challengeType": "playground",
            "challengeDescription": "Build: Express Framework (Part 10)"
          },
          {
            "id": "a-node-21",
            "title": "Node.js Basics (Part 11)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 11)"
          },
          {
            "id": "a-node-22",
            "title": "Express Framework (Part 11)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 11)"
          },
          {
            "id": "a-node-23",
            "title": "Node.js Basics (Part 12)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 12)"
          },
          {
            "id": "a-node-24",
            "title": "Express Framework (Part 12)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 12)"
          },
          {
            "id": "a-node-25",
            "title": "Node.js Basics (Part 13)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 13)",
            "challengeType": "playground",
            "challengeDescription": "Build: Node.js Basics (Part 13)"
          },
          {
            "id": "a-node-26",
            "title": "Express Framework (Part 13)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 13)"
          },
          {
            "id": "a-node-27",
            "title": "Node.js Basics (Part 14)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 14)"
          },
          {
            "id": "a-node-28",
            "title": "Express Framework (Part 14)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 14)"
          },
          {
            "id": "a-node-29",
            "title": "Node.js Basics (Part 15)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 15)"
          },
          {
            "id": "a-node-30",
            "title": "Express Framework (Part 15)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 15)",
            "challengeType": "playground",
            "challengeDescription": "Build: Express Framework (Part 15)"
          },
          {
            "id": "a-node-31",
            "title": "Node.js Basics (Part 16)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 16)"
          },
          {
            "id": "a-node-32",
            "title": "Express Framework (Part 16)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 16)"
          },
          {
            "id": "a-node-33",
            "title": "Node.js Basics (Part 17)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 17)"
          },
          {
            "id": "a-node-34",
            "title": "Express Framework (Part 17)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 17)"
          },
          {
            "id": "a-node-35",
            "title": "Node.js Basics (Part 18)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 18)",
            "challengeType": "playground",
            "challengeDescription": "Build: Node.js Basics (Part 18)"
          },
          {
            "id": "a-node-36",
            "title": "Express Framework (Part 18)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 18)"
          },
          {
            "id": "a-node-37",
            "title": "Node.js Basics (Part 19)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 19)"
          },
          {
            "id": "a-node-38",
            "title": "Express Framework (Part 19)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 19)"
          },
          {
            "id": "a-node-39",
            "title": "Node.js Basics (Part 20)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 20)"
          },
          {
            "id": "a-node-40",
            "title": "Express Framework (Part 20)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 20)",
            "challengeType": "playground",
            "challengeDescription": "Build: Express Framework (Part 20)"
          },
          {
            "id": "a-node-41",
            "title": "Node.js Basics (Part 21)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 21)"
          },
          {
            "id": "a-node-42",
            "title": "Express Framework (Part 21)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 21)"
          },
          {
            "id": "a-node-43",
            "title": "Node.js Basics (Part 22)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 22)"
          },
          {
            "id": "a-node-44",
            "title": "Express Framework (Part 22)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 22)"
          },
          {
            "id": "a-node-45",
            "title": "Node.js Basics (Part 23)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 23)",
            "challengeType": "playground",
            "challengeDescription": "Build: Node.js Basics (Part 23)"
          },
          {
            "id": "a-node-46",
            "title": "Express Framework (Part 23)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 23)"
          },
          {
            "id": "a-node-47",
            "title": "Node.js Basics (Part 24)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 24)"
          },
          {
            "id": "a-node-48",
            "title": "Express Framework (Part 24)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 24)"
          },
          {
            "id": "a-node-49",
            "title": "Node.js Basics (Part 25)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 25)"
          },
          {
            "id": "a-node-50",
            "title": "Express Framework (Part 25)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 25)",
            "challengeType": "playground",
            "challengeDescription": "Build: Express Framework (Part 25)"
          },
          {
            "id": "a-node-51",
            "title": "Node.js Basics (Part 26)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 26)"
          },
          {
            "id": "a-node-52",
            "title": "Express Framework (Part 26)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 26)"
          },
          {
            "id": "a-node-53",
            "title": "Node.js Basics (Part 27)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 27)"
          },
          {
            "id": "a-node-54",
            "title": "Express Framework (Part 27)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 27)"
          },
          {
            "id": "a-node-55",
            "title": "Node.js Basics (Part 28)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 28)",
            "challengeType": "playground",
            "challengeDescription": "Build: Node.js Basics (Part 28)"
          },
          {
            "id": "a-node-56",
            "title": "Express Framework (Part 28)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 28)"
          },
          {
            "id": "a-node-57",
            "title": "Node.js Basics (Part 29)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 29)"
          },
          {
            "id": "a-node-58",
            "title": "Express Framework (Part 29)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 29)"
          },
          {
            "id": "a-node-59",
            "title": "Node.js Basics (Part 30)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 30)"
          },
          {
            "id": "a-node-60",
            "title": "Express Framework (Part 30)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 30)",
            "challengeType": "playground",
            "challengeDescription": "Build: Express Framework (Part 30)"
          },
          {
            "id": "a-node-61",
            "title": "Node.js Basics (Part 31)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 31)"
          },
          {
            "id": "a-node-62",
            "title": "Express Framework (Part 31)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 31)"
          },
          {
            "id": "a-node-63",
            "title": "Node.js Basics (Part 32)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 32)"
          },
          {
            "id": "a-node-64",
            "title": "Express Framework (Part 32)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 32)"
          },
          {
            "id": "a-node-65",
            "title": "Node.js Basics (Part 33)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 33)",
            "challengeType": "playground",
            "challengeDescription": "Build: Node.js Basics (Part 33)"
          },
          {
            "id": "a-node-66",
            "title": "Express Framework (Part 33)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 33)"
          },
          {
            "id": "a-node-67",
            "title": "Node.js Basics (Part 34)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 34)"
          },
          {
            "id": "a-node-68",
            "title": "Express Framework (Part 34)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 34)"
          },
          {
            "id": "a-node-69",
            "title": "Node.js Basics (Part 35)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 35)"
          },
          {
            "id": "a-node-70",
            "title": "Express Framework (Part 35)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 35)",
            "challengeType": "playground",
            "challengeDescription": "Build: Express Framework (Part 35)"
          },
          {
            "id": "a-node-71",
            "title": "Node.js Basics (Part 36)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 36)"
          },
          {
            "id": "a-node-72",
            "title": "Express Framework (Part 36)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 36)"
          },
          {
            "id": "a-node-73",
            "title": "Node.js Basics (Part 37)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 37)"
          },
          {
            "id": "a-node-74",
            "title": "Express Framework (Part 37)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 37)"
          },
          {
            "id": "a-node-75",
            "title": "Node.js Basics (Part 38)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 38)",
            "challengeType": "playground",
            "challengeDescription": "Build: Node.js Basics (Part 38)"
          },
          {
            "id": "a-node-76",
            "title": "Express Framework (Part 38)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 38)"
          },
          {
            "id": "a-node-77",
            "title": "Node.js Basics (Part 39)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 39)"
          },
          {
            "id": "a-node-78",
            "title": "Express Framework (Part 39)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 39)"
          },
          {
            "id": "a-node-79",
            "title": "Node.js Basics (Part 40)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 40)"
          },
          {
            "id": "a-node-80",
            "title": "Express Framework (Part 40)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 40)",
            "challengeType": "playground",
            "challengeDescription": "Build: Express Framework (Part 40)"
          },
          {
            "id": "a-node-81",
            "title": "Node.js Basics (Part 41)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 41)"
          },
          {
            "id": "a-node-82",
            "title": "Express Framework (Part 41)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 41)"
          },
          {
            "id": "a-node-83",
            "title": "Node.js Basics (Part 42)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 42)"
          },
          {
            "id": "a-node-84",
            "title": "Express Framework (Part 42)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 42)"
          },
          {
            "id": "a-node-85",
            "title": "Node.js Basics (Part 43)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 43)",
            "challengeType": "playground",
            "challengeDescription": "Build: Node.js Basics (Part 43)"
          },
          {
            "id": "a-node-86",
            "title": "Express Framework (Part 43)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 43)"
          },
          {
            "id": "a-node-87",
            "title": "Node.js Basics (Part 44)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 44)"
          },
          {
            "id": "a-node-88",
            "title": "Express Framework (Part 44)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 44)"
          },
          {
            "id": "a-node-89",
            "title": "Node.js Basics (Part 45)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 45)"
          },
          {
            "id": "a-node-90",
            "title": "Express Framework (Part 45)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 45)",
            "challengeType": "playground",
            "challengeDescription": "Build: Express Framework (Part 45)"
          },
          {
            "id": "a-node-91",
            "title": "Node.js Basics (Part 46)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 46)"
          },
          {
            "id": "a-node-92",
            "title": "Express Framework (Part 46)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 46)"
          },
          {
            "id": "a-node-93",
            "title": "Node.js Basics (Part 47)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 47)"
          },
          {
            "id": "a-node-94",
            "title": "Express Framework (Part 47)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 47)"
          },
          {
            "id": "a-node-95",
            "title": "Node.js Basics (Part 48)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 48)",
            "challengeType": "playground",
            "challengeDescription": "Build: Node.js Basics (Part 48)"
          },
          {
            "id": "a-node-96",
            "title": "Express Framework (Part 48)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 48)"
          },
          {
            "id": "a-node-97",
            "title": "Node.js Basics (Part 49)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 49)"
          },
          {
            "id": "a-node-98",
            "title": "Express Framework (Part 49)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 49)"
          },
          {
            "id": "a-node-99",
            "title": "Node.js Basics (Part 50)",
            "content": "Node runs JS on the server. Built on V8 engine. Uses CommonJS or ES modules. fs for file system. http for servers. process for env. npm for packages.\n\nconst fs = require(\"fs\");\nconst data = fs.readFileSync(\"file.txt\", \"utf8\");",
            "codeExample": "10 min",
            "challenge": "Practice: Node.js Basics (Part 50)"
          },
          {
            "id": "a-node-100",
            "title": "Express Framework (Part 50)",
            "content": "Express is a web framework. app.get/post/put/delete for routes. req.params, req.query, req.body. res.json, res.send, res.status. Middleware for cross-cutting concerns.\n\nconst express = require(\"express\");\nconst app = express();\napp.get(\"/api\", (req, res) => res.json({ ok: true }));",
            "codeExample": "12 min",
            "challenge": "Practice: Express Framework (Part 50)",
            "challengeType": "playground",
            "challengeDescription": "Build: Express Framework (Part 50)"
          }
        ]
      },
      {
        "id": "database",
        "title": "Databases",
        "description": "SQL & NoSQL",
        "lessons": [
          {
            "id": "a-db-1",
            "title": "SQL",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL"
          },
          {
            "id": "a-db-2",
            "title": "MongoDB",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB"
          },
          {
            "id": "a-db-3",
            "title": "SQL (Part 2)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 2)"
          },
          {
            "id": "a-db-4",
            "title": "MongoDB (Part 2)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 2)"
          },
          {
            "id": "a-db-5",
            "title": "SQL (Part 3)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: SQL (Part 3)"
          },
          {
            "id": "a-db-6",
            "title": "MongoDB (Part 3)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 3)"
          },
          {
            "id": "a-db-7",
            "title": "SQL (Part 4)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 4)"
          },
          {
            "id": "a-db-8",
            "title": "MongoDB (Part 4)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 4)"
          },
          {
            "id": "a-db-9",
            "title": "SQL (Part 5)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 5)"
          },
          {
            "id": "a-db-10",
            "title": "MongoDB (Part 5)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 5)",
            "challengeType": "playground",
            "challengeDescription": "Build: MongoDB (Part 5)"
          },
          {
            "id": "a-db-11",
            "title": "SQL (Part 6)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 6)"
          },
          {
            "id": "a-db-12",
            "title": "MongoDB (Part 6)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 6)"
          },
          {
            "id": "a-db-13",
            "title": "SQL (Part 7)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 7)"
          },
          {
            "id": "a-db-14",
            "title": "MongoDB (Part 7)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 7)"
          },
          {
            "id": "a-db-15",
            "title": "SQL (Part 8)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 8)",
            "challengeType": "playground",
            "challengeDescription": "Build: SQL (Part 8)"
          },
          {
            "id": "a-db-16",
            "title": "MongoDB (Part 8)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 8)"
          },
          {
            "id": "a-db-17",
            "title": "SQL (Part 9)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 9)"
          },
          {
            "id": "a-db-18",
            "title": "MongoDB (Part 9)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 9)"
          },
          {
            "id": "a-db-19",
            "title": "SQL (Part 10)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 10)"
          },
          {
            "id": "a-db-20",
            "title": "MongoDB (Part 10)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 10)",
            "challengeType": "playground",
            "challengeDescription": "Build: MongoDB (Part 10)"
          },
          {
            "id": "a-db-21",
            "title": "SQL (Part 11)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 11)"
          },
          {
            "id": "a-db-22",
            "title": "MongoDB (Part 11)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 11)"
          },
          {
            "id": "a-db-23",
            "title": "SQL (Part 12)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 12)"
          },
          {
            "id": "a-db-24",
            "title": "MongoDB (Part 12)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 12)"
          },
          {
            "id": "a-db-25",
            "title": "SQL (Part 13)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 13)",
            "challengeType": "playground",
            "challengeDescription": "Build: SQL (Part 13)"
          },
          {
            "id": "a-db-26",
            "title": "MongoDB (Part 13)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 13)"
          },
          {
            "id": "a-db-27",
            "title": "SQL (Part 14)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 14)"
          },
          {
            "id": "a-db-28",
            "title": "MongoDB (Part 14)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 14)"
          },
          {
            "id": "a-db-29",
            "title": "SQL (Part 15)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 15)"
          },
          {
            "id": "a-db-30",
            "title": "MongoDB (Part 15)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 15)",
            "challengeType": "playground",
            "challengeDescription": "Build: MongoDB (Part 15)"
          },
          {
            "id": "a-db-31",
            "title": "SQL (Part 16)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 16)"
          },
          {
            "id": "a-db-32",
            "title": "MongoDB (Part 16)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 16)"
          },
          {
            "id": "a-db-33",
            "title": "SQL (Part 17)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 17)"
          },
          {
            "id": "a-db-34",
            "title": "MongoDB (Part 17)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 17)"
          },
          {
            "id": "a-db-35",
            "title": "SQL (Part 18)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 18)",
            "challengeType": "playground",
            "challengeDescription": "Build: SQL (Part 18)"
          },
          {
            "id": "a-db-36",
            "title": "MongoDB (Part 18)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 18)"
          },
          {
            "id": "a-db-37",
            "title": "SQL (Part 19)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 19)"
          },
          {
            "id": "a-db-38",
            "title": "MongoDB (Part 19)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 19)"
          },
          {
            "id": "a-db-39",
            "title": "SQL (Part 20)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 20)"
          },
          {
            "id": "a-db-40",
            "title": "MongoDB (Part 20)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 20)",
            "challengeType": "playground",
            "challengeDescription": "Build: MongoDB (Part 20)"
          },
          {
            "id": "a-db-41",
            "title": "SQL (Part 21)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 21)"
          },
          {
            "id": "a-db-42",
            "title": "MongoDB (Part 21)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 21)"
          },
          {
            "id": "a-db-43",
            "title": "SQL (Part 22)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 22)"
          },
          {
            "id": "a-db-44",
            "title": "MongoDB (Part 22)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 22)"
          },
          {
            "id": "a-db-45",
            "title": "SQL (Part 23)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 23)",
            "challengeType": "playground",
            "challengeDescription": "Build: SQL (Part 23)"
          },
          {
            "id": "a-db-46",
            "title": "MongoDB (Part 23)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 23)"
          },
          {
            "id": "a-db-47",
            "title": "SQL (Part 24)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 24)"
          },
          {
            "id": "a-db-48",
            "title": "MongoDB (Part 24)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 24)"
          },
          {
            "id": "a-db-49",
            "title": "SQL (Part 25)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 25)"
          },
          {
            "id": "a-db-50",
            "title": "MongoDB (Part 25)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 25)",
            "challengeType": "playground",
            "challengeDescription": "Build: MongoDB (Part 25)"
          },
          {
            "id": "a-db-51",
            "title": "SQL (Part 26)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 26)"
          },
          {
            "id": "a-db-52",
            "title": "MongoDB (Part 26)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 26)"
          },
          {
            "id": "a-db-53",
            "title": "SQL (Part 27)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 27)"
          },
          {
            "id": "a-db-54",
            "title": "MongoDB (Part 27)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 27)"
          },
          {
            "id": "a-db-55",
            "title": "SQL (Part 28)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 28)",
            "challengeType": "playground",
            "challengeDescription": "Build: SQL (Part 28)"
          },
          {
            "id": "a-db-56",
            "title": "MongoDB (Part 28)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 28)"
          },
          {
            "id": "a-db-57",
            "title": "SQL (Part 29)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 29)"
          },
          {
            "id": "a-db-58",
            "title": "MongoDB (Part 29)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 29)"
          },
          {
            "id": "a-db-59",
            "title": "SQL (Part 30)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 30)"
          },
          {
            "id": "a-db-60",
            "title": "MongoDB (Part 30)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 30)",
            "challengeType": "playground",
            "challengeDescription": "Build: MongoDB (Part 30)"
          },
          {
            "id": "a-db-61",
            "title": "SQL (Part 31)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 31)"
          },
          {
            "id": "a-db-62",
            "title": "MongoDB (Part 31)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 31)"
          },
          {
            "id": "a-db-63",
            "title": "SQL (Part 32)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 32)"
          },
          {
            "id": "a-db-64",
            "title": "MongoDB (Part 32)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 32)"
          },
          {
            "id": "a-db-65",
            "title": "SQL (Part 33)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 33)",
            "challengeType": "playground",
            "challengeDescription": "Build: SQL (Part 33)"
          },
          {
            "id": "a-db-66",
            "title": "MongoDB (Part 33)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 33)"
          },
          {
            "id": "a-db-67",
            "title": "SQL (Part 34)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 34)"
          },
          {
            "id": "a-db-68",
            "title": "MongoDB (Part 34)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 34)"
          },
          {
            "id": "a-db-69",
            "title": "SQL (Part 35)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 35)"
          },
          {
            "id": "a-db-70",
            "title": "MongoDB (Part 35)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 35)",
            "challengeType": "playground",
            "challengeDescription": "Build: MongoDB (Part 35)"
          },
          {
            "id": "a-db-71",
            "title": "SQL (Part 36)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 36)"
          },
          {
            "id": "a-db-72",
            "title": "MongoDB (Part 36)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 36)"
          },
          {
            "id": "a-db-73",
            "title": "SQL (Part 37)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 37)"
          },
          {
            "id": "a-db-74",
            "title": "MongoDB (Part 37)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 37)"
          },
          {
            "id": "a-db-75",
            "title": "SQL (Part 38)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 38)",
            "challengeType": "playground",
            "challengeDescription": "Build: SQL (Part 38)"
          },
          {
            "id": "a-db-76",
            "title": "MongoDB (Part 38)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 38)"
          },
          {
            "id": "a-db-77",
            "title": "SQL (Part 39)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 39)"
          },
          {
            "id": "a-db-78",
            "title": "MongoDB (Part 39)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 39)"
          },
          {
            "id": "a-db-79",
            "title": "SQL (Part 40)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 40)"
          },
          {
            "id": "a-db-80",
            "title": "MongoDB (Part 40)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 40)",
            "challengeType": "playground",
            "challengeDescription": "Build: MongoDB (Part 40)"
          },
          {
            "id": "a-db-81",
            "title": "SQL (Part 41)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 41)"
          },
          {
            "id": "a-db-82",
            "title": "MongoDB (Part 41)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 41)"
          },
          {
            "id": "a-db-83",
            "title": "SQL (Part 42)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 42)"
          },
          {
            "id": "a-db-84",
            "title": "MongoDB (Part 42)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 42)"
          },
          {
            "id": "a-db-85",
            "title": "SQL (Part 43)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 43)",
            "challengeType": "playground",
            "challengeDescription": "Build: SQL (Part 43)"
          },
          {
            "id": "a-db-86",
            "title": "MongoDB (Part 43)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 43)"
          },
          {
            "id": "a-db-87",
            "title": "SQL (Part 44)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 44)"
          },
          {
            "id": "a-db-88",
            "title": "MongoDB (Part 44)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 44)"
          },
          {
            "id": "a-db-89",
            "title": "SQL (Part 45)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 45)"
          },
          {
            "id": "a-db-90",
            "title": "MongoDB (Part 45)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 45)",
            "challengeType": "playground",
            "challengeDescription": "Build: MongoDB (Part 45)"
          },
          {
            "id": "a-db-91",
            "title": "SQL (Part 46)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 46)"
          },
          {
            "id": "a-db-92",
            "title": "MongoDB (Part 46)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 46)"
          },
          {
            "id": "a-db-93",
            "title": "SQL (Part 47)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 47)"
          },
          {
            "id": "a-db-94",
            "title": "MongoDB (Part 47)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 47)"
          },
          {
            "id": "a-db-95",
            "title": "SQL (Part 48)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 48)",
            "challengeType": "playground",
            "challengeDescription": "Build: SQL (Part 48)"
          },
          {
            "id": "a-db-96",
            "title": "MongoDB (Part 48)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 48)"
          },
          {
            "id": "a-db-97",
            "title": "SQL (Part 49)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 49)"
          },
          {
            "id": "a-db-98",
            "title": "MongoDB (Part 49)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 49)"
          },
          {
            "id": "a-db-99",
            "title": "SQL (Part 50)",
            "content": "SQL databases use tables and schemas.\n\nSELECT * FROM users;",
            "codeExample": "10 min",
            "challenge": "Practice: SQL (Part 50)"
          },
          {
            "id": "a-db-100",
            "title": "MongoDB (Part 50)",
            "content": "MongoDB uses flexible documents.\n\ndb.users.find()",
            "codeExample": "10 min",
            "challenge": "Practice: MongoDB (Part 50)",
            "challengeType": "playground",
            "challengeDescription": "Build: MongoDB (Part 50)"
          }
        ]
      }
    ]
  },
  "pro": {
    "id": "pro",
    "title": "Pro",
    "color": "#ef4444",
    "modules": [
      {
        "id": "system-design",
        "title": "System Design",
        "description": "Scalable architecture",
        "lessons": [
          {
            "id": "p-sys-1",
            "title": "Scaling",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling"
          },
          {
            "id": "p-sys-2",
            "title": "Caching",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching"
          },
          {
            "id": "p-sys-3",
            "title": "Scaling (Part 2)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 2)"
          },
          {
            "id": "p-sys-4",
            "title": "Caching (Part 2)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 2)"
          },
          {
            "id": "p-sys-5",
            "title": "Scaling (Part 3)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: Scaling (Part 3)"
          },
          {
            "id": "p-sys-6",
            "title": "Caching (Part 3)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 3)"
          },
          {
            "id": "p-sys-7",
            "title": "Scaling (Part 4)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 4)"
          },
          {
            "id": "p-sys-8",
            "title": "Caching (Part 4)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 4)"
          },
          {
            "id": "p-sys-9",
            "title": "Scaling (Part 5)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 5)"
          },
          {
            "id": "p-sys-10",
            "title": "Caching (Part 5)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 5)",
            "challengeType": "playground",
            "challengeDescription": "Build: Caching (Part 5)"
          },
          {
            "id": "p-sys-11",
            "title": "Scaling (Part 6)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 6)"
          },
          {
            "id": "p-sys-12",
            "title": "Caching (Part 6)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 6)"
          },
          {
            "id": "p-sys-13",
            "title": "Scaling (Part 7)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 7)"
          },
          {
            "id": "p-sys-14",
            "title": "Caching (Part 7)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 7)"
          },
          {
            "id": "p-sys-15",
            "title": "Scaling (Part 8)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 8)",
            "challengeType": "playground",
            "challengeDescription": "Build: Scaling (Part 8)"
          },
          {
            "id": "p-sys-16",
            "title": "Caching (Part 8)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 8)"
          },
          {
            "id": "p-sys-17",
            "title": "Scaling (Part 9)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 9)"
          },
          {
            "id": "p-sys-18",
            "title": "Caching (Part 9)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 9)"
          },
          {
            "id": "p-sys-19",
            "title": "Scaling (Part 10)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 10)"
          },
          {
            "id": "p-sys-20",
            "title": "Caching (Part 10)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 10)",
            "challengeType": "playground",
            "challengeDescription": "Build: Caching (Part 10)"
          },
          {
            "id": "p-sys-21",
            "title": "Scaling (Part 11)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 11)"
          },
          {
            "id": "p-sys-22",
            "title": "Caching (Part 11)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 11)"
          },
          {
            "id": "p-sys-23",
            "title": "Scaling (Part 12)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 12)"
          },
          {
            "id": "p-sys-24",
            "title": "Caching (Part 12)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 12)"
          },
          {
            "id": "p-sys-25",
            "title": "Scaling (Part 13)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 13)",
            "challengeType": "playground",
            "challengeDescription": "Build: Scaling (Part 13)"
          },
          {
            "id": "p-sys-26",
            "title": "Caching (Part 13)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 13)"
          },
          {
            "id": "p-sys-27",
            "title": "Scaling (Part 14)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 14)"
          },
          {
            "id": "p-sys-28",
            "title": "Caching (Part 14)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 14)"
          },
          {
            "id": "p-sys-29",
            "title": "Scaling (Part 15)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 15)"
          },
          {
            "id": "p-sys-30",
            "title": "Caching (Part 15)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 15)",
            "challengeType": "playground",
            "challengeDescription": "Build: Caching (Part 15)"
          },
          {
            "id": "p-sys-31",
            "title": "Scaling (Part 16)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 16)"
          },
          {
            "id": "p-sys-32",
            "title": "Caching (Part 16)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 16)"
          },
          {
            "id": "p-sys-33",
            "title": "Scaling (Part 17)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 17)"
          },
          {
            "id": "p-sys-34",
            "title": "Caching (Part 17)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 17)"
          },
          {
            "id": "p-sys-35",
            "title": "Scaling (Part 18)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 18)",
            "challengeType": "playground",
            "challengeDescription": "Build: Scaling (Part 18)"
          },
          {
            "id": "p-sys-36",
            "title": "Caching (Part 18)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 18)"
          },
          {
            "id": "p-sys-37",
            "title": "Scaling (Part 19)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 19)"
          },
          {
            "id": "p-sys-38",
            "title": "Caching (Part 19)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 19)"
          },
          {
            "id": "p-sys-39",
            "title": "Scaling (Part 20)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 20)"
          },
          {
            "id": "p-sys-40",
            "title": "Caching (Part 20)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 20)",
            "challengeType": "playground",
            "challengeDescription": "Build: Caching (Part 20)"
          },
          {
            "id": "p-sys-41",
            "title": "Scaling (Part 21)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 21)"
          },
          {
            "id": "p-sys-42",
            "title": "Caching (Part 21)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 21)"
          },
          {
            "id": "p-sys-43",
            "title": "Scaling (Part 22)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 22)"
          },
          {
            "id": "p-sys-44",
            "title": "Caching (Part 22)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 22)"
          },
          {
            "id": "p-sys-45",
            "title": "Scaling (Part 23)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 23)",
            "challengeType": "playground",
            "challengeDescription": "Build: Scaling (Part 23)"
          },
          {
            "id": "p-sys-46",
            "title": "Caching (Part 23)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 23)"
          },
          {
            "id": "p-sys-47",
            "title": "Scaling (Part 24)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 24)"
          },
          {
            "id": "p-sys-48",
            "title": "Caching (Part 24)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 24)"
          },
          {
            "id": "p-sys-49",
            "title": "Scaling (Part 25)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 25)"
          },
          {
            "id": "p-sys-50",
            "title": "Caching (Part 25)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 25)",
            "challengeType": "playground",
            "challengeDescription": "Build: Caching (Part 25)"
          },
          {
            "id": "p-sys-51",
            "title": "Scaling (Part 26)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 26)"
          },
          {
            "id": "p-sys-52",
            "title": "Caching (Part 26)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 26)"
          },
          {
            "id": "p-sys-53",
            "title": "Scaling (Part 27)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 27)"
          },
          {
            "id": "p-sys-54",
            "title": "Caching (Part 27)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 27)"
          },
          {
            "id": "p-sys-55",
            "title": "Scaling (Part 28)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 28)",
            "challengeType": "playground",
            "challengeDescription": "Build: Scaling (Part 28)"
          },
          {
            "id": "p-sys-56",
            "title": "Caching (Part 28)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 28)"
          },
          {
            "id": "p-sys-57",
            "title": "Scaling (Part 29)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 29)"
          },
          {
            "id": "p-sys-58",
            "title": "Caching (Part 29)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 29)"
          },
          {
            "id": "p-sys-59",
            "title": "Scaling (Part 30)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 30)"
          },
          {
            "id": "p-sys-60",
            "title": "Caching (Part 30)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 30)",
            "challengeType": "playground",
            "challengeDescription": "Build: Caching (Part 30)"
          },
          {
            "id": "p-sys-61",
            "title": "Scaling (Part 31)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 31)"
          },
          {
            "id": "p-sys-62",
            "title": "Caching (Part 31)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 31)"
          },
          {
            "id": "p-sys-63",
            "title": "Scaling (Part 32)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 32)"
          },
          {
            "id": "p-sys-64",
            "title": "Caching (Part 32)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 32)"
          },
          {
            "id": "p-sys-65",
            "title": "Scaling (Part 33)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 33)",
            "challengeType": "playground",
            "challengeDescription": "Build: Scaling (Part 33)"
          },
          {
            "id": "p-sys-66",
            "title": "Caching (Part 33)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 33)"
          },
          {
            "id": "p-sys-67",
            "title": "Scaling (Part 34)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 34)"
          },
          {
            "id": "p-sys-68",
            "title": "Caching (Part 34)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 34)"
          },
          {
            "id": "p-sys-69",
            "title": "Scaling (Part 35)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 35)"
          },
          {
            "id": "p-sys-70",
            "title": "Caching (Part 35)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 35)",
            "challengeType": "playground",
            "challengeDescription": "Build: Caching (Part 35)"
          },
          {
            "id": "p-sys-71",
            "title": "Scaling (Part 36)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 36)"
          },
          {
            "id": "p-sys-72",
            "title": "Caching (Part 36)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 36)"
          },
          {
            "id": "p-sys-73",
            "title": "Scaling (Part 37)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 37)"
          },
          {
            "id": "p-sys-74",
            "title": "Caching (Part 37)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 37)"
          },
          {
            "id": "p-sys-75",
            "title": "Scaling (Part 38)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 38)",
            "challengeType": "playground",
            "challengeDescription": "Build: Scaling (Part 38)"
          },
          {
            "id": "p-sys-76",
            "title": "Caching (Part 38)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 38)"
          },
          {
            "id": "p-sys-77",
            "title": "Scaling (Part 39)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 39)"
          },
          {
            "id": "p-sys-78",
            "title": "Caching (Part 39)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 39)"
          },
          {
            "id": "p-sys-79",
            "title": "Scaling (Part 40)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 40)"
          },
          {
            "id": "p-sys-80",
            "title": "Caching (Part 40)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 40)",
            "challengeType": "playground",
            "challengeDescription": "Build: Caching (Part 40)"
          },
          {
            "id": "p-sys-81",
            "title": "Scaling (Part 41)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 41)"
          },
          {
            "id": "p-sys-82",
            "title": "Caching (Part 41)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 41)"
          },
          {
            "id": "p-sys-83",
            "title": "Scaling (Part 42)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 42)"
          },
          {
            "id": "p-sys-84",
            "title": "Caching (Part 42)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 42)"
          },
          {
            "id": "p-sys-85",
            "title": "Scaling (Part 43)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 43)",
            "challengeType": "playground",
            "challengeDescription": "Build: Scaling (Part 43)"
          },
          {
            "id": "p-sys-86",
            "title": "Caching (Part 43)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 43)"
          },
          {
            "id": "p-sys-87",
            "title": "Scaling (Part 44)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 44)"
          },
          {
            "id": "p-sys-88",
            "title": "Caching (Part 44)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 44)"
          },
          {
            "id": "p-sys-89",
            "title": "Scaling (Part 45)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 45)"
          },
          {
            "id": "p-sys-90",
            "title": "Caching (Part 45)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 45)",
            "challengeType": "playground",
            "challengeDescription": "Build: Caching (Part 45)"
          },
          {
            "id": "p-sys-91",
            "title": "Scaling (Part 46)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 46)"
          },
          {
            "id": "p-sys-92",
            "title": "Caching (Part 46)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 46)"
          },
          {
            "id": "p-sys-93",
            "title": "Scaling (Part 47)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 47)"
          },
          {
            "id": "p-sys-94",
            "title": "Caching (Part 47)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 47)"
          },
          {
            "id": "p-sys-95",
            "title": "Scaling (Part 48)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 48)",
            "challengeType": "playground",
            "challengeDescription": "Build: Scaling (Part 48)"
          },
          {
            "id": "p-sys-96",
            "title": "Caching (Part 48)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 48)"
          },
          {
            "id": "p-sys-97",
            "title": "Scaling (Part 49)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 49)"
          },
          {
            "id": "p-sys-98",
            "title": "Caching (Part 49)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 49)"
          },
          {
            "id": "p-sys-99",
            "title": "Scaling (Part 50)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 50)"
          },
          {
            "id": "p-sys-100",
            "title": "Caching (Part 50)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 50)",
            "challengeType": "playground",
            "challengeDescription": "Build: Caching (Part 50)"
          },
          {
            "id": "p-sys-101",
            "title": "Scaling (Part 51)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 51)"
          },
          {
            "id": "p-sys-102",
            "title": "Caching (Part 51)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 51)"
          },
          {
            "id": "p-sys-103",
            "title": "Scaling (Part 52)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 52)"
          },
          {
            "id": "p-sys-104",
            "title": "Caching (Part 52)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 52)"
          },
          {
            "id": "p-sys-105",
            "title": "Scaling (Part 53)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 53)",
            "challengeType": "playground",
            "challengeDescription": "Build: Scaling (Part 53)"
          },
          {
            "id": "p-sys-106",
            "title": "Caching (Part 53)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 53)"
          },
          {
            "id": "p-sys-107",
            "title": "Scaling (Part 54)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 54)"
          },
          {
            "id": "p-sys-108",
            "title": "Caching (Part 54)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 54)"
          },
          {
            "id": "p-sys-109",
            "title": "Scaling (Part 55)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 55)"
          },
          {
            "id": "p-sys-110",
            "title": "Caching (Part 55)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 55)",
            "challengeType": "playground",
            "challengeDescription": "Build: Caching (Part 55)"
          },
          {
            "id": "p-sys-111",
            "title": "Scaling (Part 56)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 56)"
          },
          {
            "id": "p-sys-112",
            "title": "Caching (Part 56)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 56)"
          },
          {
            "id": "p-sys-113",
            "title": "Scaling (Part 57)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 57)"
          },
          {
            "id": "p-sys-114",
            "title": "Caching (Part 57)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 57)"
          },
          {
            "id": "p-sys-115",
            "title": "Scaling (Part 58)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 58)",
            "challengeType": "playground",
            "challengeDescription": "Build: Scaling (Part 58)"
          },
          {
            "id": "p-sys-116",
            "title": "Caching (Part 58)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 58)"
          },
          {
            "id": "p-sys-117",
            "title": "Scaling (Part 59)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 59)"
          },
          {
            "id": "p-sys-118",
            "title": "Caching (Part 59)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 59)"
          },
          {
            "id": "p-sys-119",
            "title": "Scaling (Part 60)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 60)"
          },
          {
            "id": "p-sys-120",
            "title": "Caching (Part 60)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 60)",
            "challengeType": "playground",
            "challengeDescription": "Build: Caching (Part 60)"
          },
          {
            "id": "p-sys-121",
            "title": "Scaling (Part 61)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 61)"
          },
          {
            "id": "p-sys-122",
            "title": "Caching (Part 61)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 61)"
          },
          {
            "id": "p-sys-123",
            "title": "Scaling (Part 62)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 62)"
          },
          {
            "id": "p-sys-124",
            "title": "Caching (Part 62)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 62)"
          },
          {
            "id": "p-sys-125",
            "title": "Scaling (Part 63)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 63)",
            "challengeType": "playground",
            "challengeDescription": "Build: Scaling (Part 63)"
          },
          {
            "id": "p-sys-126",
            "title": "Caching (Part 63)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 63)"
          },
          {
            "id": "p-sys-127",
            "title": "Scaling (Part 64)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 64)"
          },
          {
            "id": "p-sys-128",
            "title": "Caching (Part 64)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 64)"
          },
          {
            "id": "p-sys-129",
            "title": "Scaling (Part 65)",
            "content": "Vertical vs horizontal scaling. Load balancers distribute traffic.\n\n// Load balancing strategies\n// Round Robin, Least Connections, IP Hash",
            "codeExample": "15 min",
            "challenge": "Practice: Scaling (Part 65)"
          },
          {
            "id": "p-sys-130",
            "title": "Caching (Part 65)",
            "content": "Cache layers reduce load. Redis, CDN. Cache invalidation strategies.\n\n// Cache strategies\n// Cache Aside, Read Through, Write Through",
            "codeExample": "15 min",
            "challenge": "Practice: Caching (Part 65)",
            "challengeType": "playground",
            "challengeDescription": "Build: Caching (Part 65)"
          }
        ]
      },
      {
        "id": "security",
        "title": "Security",
        "description": "Protect your apps",
        "lessons": [
          {
            "id": "p-sec-1",
            "title": "OWASP",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP"
          },
          {
            "id": "p-sec-2",
            "title": "Auth",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth"
          },
          {
            "id": "p-sec-3",
            "title": "OWASP (Part 2)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 2)"
          },
          {
            "id": "p-sec-4",
            "title": "Auth (Part 2)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 2)"
          },
          {
            "id": "p-sec-5",
            "title": "OWASP (Part 3)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: OWASP (Part 3)"
          },
          {
            "id": "p-sec-6",
            "title": "Auth (Part 3)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 3)"
          },
          {
            "id": "p-sec-7",
            "title": "OWASP (Part 4)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 4)"
          },
          {
            "id": "p-sec-8",
            "title": "Auth (Part 4)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 4)"
          },
          {
            "id": "p-sec-9",
            "title": "OWASP (Part 5)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 5)"
          },
          {
            "id": "p-sec-10",
            "title": "Auth (Part 5)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 5)",
            "challengeType": "playground",
            "challengeDescription": "Build: Auth (Part 5)"
          },
          {
            "id": "p-sec-11",
            "title": "OWASP (Part 6)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 6)"
          },
          {
            "id": "p-sec-12",
            "title": "Auth (Part 6)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 6)"
          },
          {
            "id": "p-sec-13",
            "title": "OWASP (Part 7)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 7)"
          },
          {
            "id": "p-sec-14",
            "title": "Auth (Part 7)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 7)"
          },
          {
            "id": "p-sec-15",
            "title": "OWASP (Part 8)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 8)",
            "challengeType": "playground",
            "challengeDescription": "Build: OWASP (Part 8)"
          },
          {
            "id": "p-sec-16",
            "title": "Auth (Part 8)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 8)"
          },
          {
            "id": "p-sec-17",
            "title": "OWASP (Part 9)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 9)"
          },
          {
            "id": "p-sec-18",
            "title": "Auth (Part 9)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 9)"
          },
          {
            "id": "p-sec-19",
            "title": "OWASP (Part 10)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 10)"
          },
          {
            "id": "p-sec-20",
            "title": "Auth (Part 10)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 10)",
            "challengeType": "playground",
            "challengeDescription": "Build: Auth (Part 10)"
          },
          {
            "id": "p-sec-21",
            "title": "OWASP (Part 11)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 11)"
          },
          {
            "id": "p-sec-22",
            "title": "Auth (Part 11)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 11)"
          },
          {
            "id": "p-sec-23",
            "title": "OWASP (Part 12)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 12)"
          },
          {
            "id": "p-sec-24",
            "title": "Auth (Part 12)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 12)"
          },
          {
            "id": "p-sec-25",
            "title": "OWASP (Part 13)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 13)",
            "challengeType": "playground",
            "challengeDescription": "Build: OWASP (Part 13)"
          },
          {
            "id": "p-sec-26",
            "title": "Auth (Part 13)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 13)"
          },
          {
            "id": "p-sec-27",
            "title": "OWASP (Part 14)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 14)"
          },
          {
            "id": "p-sec-28",
            "title": "Auth (Part 14)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 14)"
          },
          {
            "id": "p-sec-29",
            "title": "OWASP (Part 15)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 15)"
          },
          {
            "id": "p-sec-30",
            "title": "Auth (Part 15)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 15)",
            "challengeType": "playground",
            "challengeDescription": "Build: Auth (Part 15)"
          },
          {
            "id": "p-sec-31",
            "title": "OWASP (Part 16)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 16)"
          },
          {
            "id": "p-sec-32",
            "title": "Auth (Part 16)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 16)"
          },
          {
            "id": "p-sec-33",
            "title": "OWASP (Part 17)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 17)"
          },
          {
            "id": "p-sec-34",
            "title": "Auth (Part 17)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 17)"
          },
          {
            "id": "p-sec-35",
            "title": "OWASP (Part 18)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 18)",
            "challengeType": "playground",
            "challengeDescription": "Build: OWASP (Part 18)"
          },
          {
            "id": "p-sec-36",
            "title": "Auth (Part 18)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 18)"
          },
          {
            "id": "p-sec-37",
            "title": "OWASP (Part 19)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 19)"
          },
          {
            "id": "p-sec-38",
            "title": "Auth (Part 19)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 19)"
          },
          {
            "id": "p-sec-39",
            "title": "OWASP (Part 20)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 20)"
          },
          {
            "id": "p-sec-40",
            "title": "Auth (Part 20)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 20)",
            "challengeType": "playground",
            "challengeDescription": "Build: Auth (Part 20)"
          },
          {
            "id": "p-sec-41",
            "title": "OWASP (Part 21)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 21)"
          },
          {
            "id": "p-sec-42",
            "title": "Auth (Part 21)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 21)"
          },
          {
            "id": "p-sec-43",
            "title": "OWASP (Part 22)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 22)"
          },
          {
            "id": "p-sec-44",
            "title": "Auth (Part 22)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 22)"
          },
          {
            "id": "p-sec-45",
            "title": "OWASP (Part 23)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 23)",
            "challengeType": "playground",
            "challengeDescription": "Build: OWASP (Part 23)"
          },
          {
            "id": "p-sec-46",
            "title": "Auth (Part 23)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 23)"
          },
          {
            "id": "p-sec-47",
            "title": "OWASP (Part 24)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 24)"
          },
          {
            "id": "p-sec-48",
            "title": "Auth (Part 24)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 24)"
          },
          {
            "id": "p-sec-49",
            "title": "OWASP (Part 25)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 25)"
          },
          {
            "id": "p-sec-50",
            "title": "Auth (Part 25)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 25)",
            "challengeType": "playground",
            "challengeDescription": "Build: Auth (Part 25)"
          },
          {
            "id": "p-sec-51",
            "title": "OWASP (Part 26)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 26)"
          },
          {
            "id": "p-sec-52",
            "title": "Auth (Part 26)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 26)"
          },
          {
            "id": "p-sec-53",
            "title": "OWASP (Part 27)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 27)"
          },
          {
            "id": "p-sec-54",
            "title": "Auth (Part 27)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 27)"
          },
          {
            "id": "p-sec-55",
            "title": "OWASP (Part 28)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 28)",
            "challengeType": "playground",
            "challengeDescription": "Build: OWASP (Part 28)"
          },
          {
            "id": "p-sec-56",
            "title": "Auth (Part 28)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 28)"
          },
          {
            "id": "p-sec-57",
            "title": "OWASP (Part 29)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 29)"
          },
          {
            "id": "p-sec-58",
            "title": "Auth (Part 29)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 29)"
          },
          {
            "id": "p-sec-59",
            "title": "OWASP (Part 30)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 30)"
          },
          {
            "id": "p-sec-60",
            "title": "Auth (Part 30)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 30)",
            "challengeType": "playground",
            "challengeDescription": "Build: Auth (Part 30)"
          },
          {
            "id": "p-sec-61",
            "title": "OWASP (Part 31)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 31)"
          },
          {
            "id": "p-sec-62",
            "title": "Auth (Part 31)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 31)"
          },
          {
            "id": "p-sec-63",
            "title": "OWASP (Part 32)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 32)"
          },
          {
            "id": "p-sec-64",
            "title": "Auth (Part 32)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 32)"
          },
          {
            "id": "p-sec-65",
            "title": "OWASP (Part 33)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 33)",
            "challengeType": "playground",
            "challengeDescription": "Build: OWASP (Part 33)"
          },
          {
            "id": "p-sec-66",
            "title": "Auth (Part 33)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 33)"
          },
          {
            "id": "p-sec-67",
            "title": "OWASP (Part 34)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 34)"
          },
          {
            "id": "p-sec-68",
            "title": "Auth (Part 34)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 34)"
          },
          {
            "id": "p-sec-69",
            "title": "OWASP (Part 35)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 35)"
          },
          {
            "id": "p-sec-70",
            "title": "Auth (Part 35)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 35)",
            "challengeType": "playground",
            "challengeDescription": "Build: Auth (Part 35)"
          },
          {
            "id": "p-sec-71",
            "title": "OWASP (Part 36)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 36)"
          },
          {
            "id": "p-sec-72",
            "title": "Auth (Part 36)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 36)"
          },
          {
            "id": "p-sec-73",
            "title": "OWASP (Part 37)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 37)"
          },
          {
            "id": "p-sec-74",
            "title": "Auth (Part 37)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 37)"
          },
          {
            "id": "p-sec-75",
            "title": "OWASP (Part 38)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 38)",
            "challengeType": "playground",
            "challengeDescription": "Build: OWASP (Part 38)"
          },
          {
            "id": "p-sec-76",
            "title": "Auth (Part 38)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 38)"
          },
          {
            "id": "p-sec-77",
            "title": "OWASP (Part 39)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 39)"
          },
          {
            "id": "p-sec-78",
            "title": "Auth (Part 39)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 39)"
          },
          {
            "id": "p-sec-79",
            "title": "OWASP (Part 40)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 40)"
          },
          {
            "id": "p-sec-80",
            "title": "Auth (Part 40)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 40)",
            "challengeType": "playground",
            "challengeDescription": "Build: Auth (Part 40)"
          },
          {
            "id": "p-sec-81",
            "title": "OWASP (Part 41)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 41)"
          },
          {
            "id": "p-sec-82",
            "title": "Auth (Part 41)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 41)"
          },
          {
            "id": "p-sec-83",
            "title": "OWASP (Part 42)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 42)"
          },
          {
            "id": "p-sec-84",
            "title": "Auth (Part 42)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 42)"
          },
          {
            "id": "p-sec-85",
            "title": "OWASP (Part 43)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 43)",
            "challengeType": "playground",
            "challengeDescription": "Build: OWASP (Part 43)"
          },
          {
            "id": "p-sec-86",
            "title": "Auth (Part 43)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 43)"
          },
          {
            "id": "p-sec-87",
            "title": "OWASP (Part 44)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 44)"
          },
          {
            "id": "p-sec-88",
            "title": "Auth (Part 44)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 44)"
          },
          {
            "id": "p-sec-89",
            "title": "OWASP (Part 45)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 45)"
          },
          {
            "id": "p-sec-90",
            "title": "Auth (Part 45)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 45)",
            "challengeType": "playground",
            "challengeDescription": "Build: Auth (Part 45)"
          },
          {
            "id": "p-sec-91",
            "title": "OWASP (Part 46)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 46)"
          },
          {
            "id": "p-sec-92",
            "title": "Auth (Part 46)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 46)"
          },
          {
            "id": "p-sec-93",
            "title": "OWASP (Part 47)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 47)"
          },
          {
            "id": "p-sec-94",
            "title": "Auth (Part 47)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 47)"
          },
          {
            "id": "p-sec-95",
            "title": "OWASP (Part 48)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 48)",
            "challengeType": "playground",
            "challengeDescription": "Build: OWASP (Part 48)"
          },
          {
            "id": "p-sec-96",
            "title": "Auth (Part 48)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 48)"
          },
          {
            "id": "p-sec-97",
            "title": "OWASP (Part 49)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 49)"
          },
          {
            "id": "p-sec-98",
            "title": "Auth (Part 49)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 49)"
          },
          {
            "id": "p-sec-99",
            "title": "OWASP (Part 50)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 50)"
          },
          {
            "id": "p-sec-100",
            "title": "Auth (Part 50)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 50)",
            "challengeType": "playground",
            "challengeDescription": "Build: Auth (Part 50)"
          },
          {
            "id": "p-sec-101",
            "title": "OWASP (Part 51)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 51)"
          },
          {
            "id": "p-sec-102",
            "title": "Auth (Part 51)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 51)"
          },
          {
            "id": "p-sec-103",
            "title": "OWASP (Part 52)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 52)"
          },
          {
            "id": "p-sec-104",
            "title": "Auth (Part 52)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 52)"
          },
          {
            "id": "p-sec-105",
            "title": "OWASP (Part 53)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 53)",
            "challengeType": "playground",
            "challengeDescription": "Build: OWASP (Part 53)"
          },
          {
            "id": "p-sec-106",
            "title": "Auth (Part 53)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 53)"
          },
          {
            "id": "p-sec-107",
            "title": "OWASP (Part 54)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 54)"
          },
          {
            "id": "p-sec-108",
            "title": "Auth (Part 54)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 54)"
          },
          {
            "id": "p-sec-109",
            "title": "OWASP (Part 55)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 55)"
          },
          {
            "id": "p-sec-110",
            "title": "Auth (Part 55)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 55)",
            "challengeType": "playground",
            "challengeDescription": "Build: Auth (Part 55)"
          },
          {
            "id": "p-sec-111",
            "title": "OWASP (Part 56)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 56)"
          },
          {
            "id": "p-sec-112",
            "title": "Auth (Part 56)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 56)"
          },
          {
            "id": "p-sec-113",
            "title": "OWASP (Part 57)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 57)"
          },
          {
            "id": "p-sec-114",
            "title": "Auth (Part 57)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 57)"
          },
          {
            "id": "p-sec-115",
            "title": "OWASP (Part 58)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 58)",
            "challengeType": "playground",
            "challengeDescription": "Build: OWASP (Part 58)"
          },
          {
            "id": "p-sec-116",
            "title": "Auth (Part 58)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 58)"
          },
          {
            "id": "p-sec-117",
            "title": "OWASP (Part 59)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 59)"
          },
          {
            "id": "p-sec-118",
            "title": "Auth (Part 59)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 59)"
          },
          {
            "id": "p-sec-119",
            "title": "OWASP (Part 60)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 60)"
          },
          {
            "id": "p-sec-120",
            "title": "Auth (Part 60)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 60)",
            "challengeType": "playground",
            "challengeDescription": "Build: Auth (Part 60)"
          },
          {
            "id": "p-sec-121",
            "title": "OWASP (Part 61)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 61)"
          },
          {
            "id": "p-sec-122",
            "title": "Auth (Part 61)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 61)"
          },
          {
            "id": "p-sec-123",
            "title": "OWASP (Part 62)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 62)"
          },
          {
            "id": "p-sec-124",
            "title": "Auth (Part 62)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 62)"
          },
          {
            "id": "p-sec-125",
            "title": "OWASP (Part 63)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 63)",
            "challengeType": "playground",
            "challengeDescription": "Build: OWASP (Part 63)"
          },
          {
            "id": "p-sec-126",
            "title": "Auth (Part 63)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 63)"
          },
          {
            "id": "p-sec-127",
            "title": "OWASP (Part 64)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 64)"
          },
          {
            "id": "p-sec-128",
            "title": "Auth (Part 64)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 64)"
          },
          {
            "id": "p-sec-129",
            "title": "OWASP (Part 65)",
            "content": "OWASP Top 10 security risks. XSS, CSRF, SQL injection prevention.\n\n// Security headers\n// CSP, HSTS, X-Frame-Options",
            "codeExample": "15 min",
            "challenge": "Practice: OWASP (Part 65)"
          },
          {
            "id": "p-sec-130",
            "title": "Auth (Part 65)",
            "content": "JWT, OAuth, sessions. Authentication vs authorization.\n\n// JWT: header.payload.signature",
            "codeExample": "12 min",
            "challenge": "Practice: Auth (Part 65)",
            "challengeType": "playground",
            "challengeDescription": "Build: Auth (Part 65)"
          }
        ]
      },
      {
        "id": "devops",
        "title": "DevOps",
        "description": "CI/CD, Docker, cloud",
        "lessons": [
          {
            "id": "p-devops-1",
            "title": "Docker",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker"
          },
          {
            "id": "p-devops-2",
            "title": "CI/CD",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD"
          },
          {
            "id": "p-devops-3",
            "title": "Docker (Part 2)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 2)"
          },
          {
            "id": "p-devops-4",
            "title": "CI/CD (Part 2)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 2)"
          },
          {
            "id": "p-devops-5",
            "title": "Docker (Part 3)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 3)",
            "challengeType": "playground",
            "challengeDescription": "Build: Docker (Part 3)"
          },
          {
            "id": "p-devops-6",
            "title": "CI/CD (Part 3)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 3)"
          },
          {
            "id": "p-devops-7",
            "title": "Docker (Part 4)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 4)"
          },
          {
            "id": "p-devops-8",
            "title": "CI/CD (Part 4)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 4)"
          },
          {
            "id": "p-devops-9",
            "title": "Docker (Part 5)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 5)"
          },
          {
            "id": "p-devops-10",
            "title": "CI/CD (Part 5)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 5)",
            "challengeType": "playground",
            "challengeDescription": "Build: CI/CD (Part 5)"
          },
          {
            "id": "p-devops-11",
            "title": "Docker (Part 6)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 6)"
          },
          {
            "id": "p-devops-12",
            "title": "CI/CD (Part 6)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 6)"
          },
          {
            "id": "p-devops-13",
            "title": "Docker (Part 7)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 7)"
          },
          {
            "id": "p-devops-14",
            "title": "CI/CD (Part 7)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 7)"
          },
          {
            "id": "p-devops-15",
            "title": "Docker (Part 8)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 8)",
            "challengeType": "playground",
            "challengeDescription": "Build: Docker (Part 8)"
          },
          {
            "id": "p-devops-16",
            "title": "CI/CD (Part 8)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 8)"
          },
          {
            "id": "p-devops-17",
            "title": "Docker (Part 9)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 9)"
          },
          {
            "id": "p-devops-18",
            "title": "CI/CD (Part 9)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 9)"
          },
          {
            "id": "p-devops-19",
            "title": "Docker (Part 10)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 10)"
          },
          {
            "id": "p-devops-20",
            "title": "CI/CD (Part 10)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 10)",
            "challengeType": "playground",
            "challengeDescription": "Build: CI/CD (Part 10)"
          },
          {
            "id": "p-devops-21",
            "title": "Docker (Part 11)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 11)"
          },
          {
            "id": "p-devops-22",
            "title": "CI/CD (Part 11)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 11)"
          },
          {
            "id": "p-devops-23",
            "title": "Docker (Part 12)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 12)"
          },
          {
            "id": "p-devops-24",
            "title": "CI/CD (Part 12)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 12)"
          },
          {
            "id": "p-devops-25",
            "title": "Docker (Part 13)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 13)",
            "challengeType": "playground",
            "challengeDescription": "Build: Docker (Part 13)"
          },
          {
            "id": "p-devops-26",
            "title": "CI/CD (Part 13)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 13)"
          },
          {
            "id": "p-devops-27",
            "title": "Docker (Part 14)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 14)"
          },
          {
            "id": "p-devops-28",
            "title": "CI/CD (Part 14)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 14)"
          },
          {
            "id": "p-devops-29",
            "title": "Docker (Part 15)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 15)"
          },
          {
            "id": "p-devops-30",
            "title": "CI/CD (Part 15)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 15)",
            "challengeType": "playground",
            "challengeDescription": "Build: CI/CD (Part 15)"
          },
          {
            "id": "p-devops-31",
            "title": "Docker (Part 16)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 16)"
          },
          {
            "id": "p-devops-32",
            "title": "CI/CD (Part 16)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 16)"
          },
          {
            "id": "p-devops-33",
            "title": "Docker (Part 17)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 17)"
          },
          {
            "id": "p-devops-34",
            "title": "CI/CD (Part 17)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 17)"
          },
          {
            "id": "p-devops-35",
            "title": "Docker (Part 18)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 18)",
            "challengeType": "playground",
            "challengeDescription": "Build: Docker (Part 18)"
          },
          {
            "id": "p-devops-36",
            "title": "CI/CD (Part 18)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 18)"
          },
          {
            "id": "p-devops-37",
            "title": "Docker (Part 19)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 19)"
          },
          {
            "id": "p-devops-38",
            "title": "CI/CD (Part 19)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 19)"
          },
          {
            "id": "p-devops-39",
            "title": "Docker (Part 20)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 20)"
          },
          {
            "id": "p-devops-40",
            "title": "CI/CD (Part 20)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 20)",
            "challengeType": "playground",
            "challengeDescription": "Build: CI/CD (Part 20)"
          },
          {
            "id": "p-devops-41",
            "title": "Docker (Part 21)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 21)"
          },
          {
            "id": "p-devops-42",
            "title": "CI/CD (Part 21)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 21)"
          },
          {
            "id": "p-devops-43",
            "title": "Docker (Part 22)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 22)"
          },
          {
            "id": "p-devops-44",
            "title": "CI/CD (Part 22)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 22)"
          },
          {
            "id": "p-devops-45",
            "title": "Docker (Part 23)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 23)",
            "challengeType": "playground",
            "challengeDescription": "Build: Docker (Part 23)"
          },
          {
            "id": "p-devops-46",
            "title": "CI/CD (Part 23)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 23)"
          },
          {
            "id": "p-devops-47",
            "title": "Docker (Part 24)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 24)"
          },
          {
            "id": "p-devops-48",
            "title": "CI/CD (Part 24)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 24)"
          },
          {
            "id": "p-devops-49",
            "title": "Docker (Part 25)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 25)"
          },
          {
            "id": "p-devops-50",
            "title": "CI/CD (Part 25)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 25)",
            "challengeType": "playground",
            "challengeDescription": "Build: CI/CD (Part 25)"
          },
          {
            "id": "p-devops-51",
            "title": "Docker (Part 26)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 26)"
          },
          {
            "id": "p-devops-52",
            "title": "CI/CD (Part 26)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 26)"
          },
          {
            "id": "p-devops-53",
            "title": "Docker (Part 27)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 27)"
          },
          {
            "id": "p-devops-54",
            "title": "CI/CD (Part 27)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 27)"
          },
          {
            "id": "p-devops-55",
            "title": "Docker (Part 28)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 28)",
            "challengeType": "playground",
            "challengeDescription": "Build: Docker (Part 28)"
          },
          {
            "id": "p-devops-56",
            "title": "CI/CD (Part 28)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 28)"
          },
          {
            "id": "p-devops-57",
            "title": "Docker (Part 29)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 29)"
          },
          {
            "id": "p-devops-58",
            "title": "CI/CD (Part 29)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 29)"
          },
          {
            "id": "p-devops-59",
            "title": "Docker (Part 30)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 30)"
          },
          {
            "id": "p-devops-60",
            "title": "CI/CD (Part 30)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 30)",
            "challengeType": "playground",
            "challengeDescription": "Build: CI/CD (Part 30)"
          },
          {
            "id": "p-devops-61",
            "title": "Docker (Part 31)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 31)"
          },
          {
            "id": "p-devops-62",
            "title": "CI/CD (Part 31)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 31)"
          },
          {
            "id": "p-devops-63",
            "title": "Docker (Part 32)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 32)"
          },
          {
            "id": "p-devops-64",
            "title": "CI/CD (Part 32)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 32)"
          },
          {
            "id": "p-devops-65",
            "title": "Docker (Part 33)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 33)",
            "challengeType": "playground",
            "challengeDescription": "Build: Docker (Part 33)"
          },
          {
            "id": "p-devops-66",
            "title": "CI/CD (Part 33)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 33)"
          },
          {
            "id": "p-devops-67",
            "title": "Docker (Part 34)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 34)"
          },
          {
            "id": "p-devops-68",
            "title": "CI/CD (Part 34)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 34)"
          },
          {
            "id": "p-devops-69",
            "title": "Docker (Part 35)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 35)"
          },
          {
            "id": "p-devops-70",
            "title": "CI/CD (Part 35)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 35)",
            "challengeType": "playground",
            "challengeDescription": "Build: CI/CD (Part 35)"
          },
          {
            "id": "p-devops-71",
            "title": "Docker (Part 36)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 36)"
          },
          {
            "id": "p-devops-72",
            "title": "CI/CD (Part 36)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 36)"
          },
          {
            "id": "p-devops-73",
            "title": "Docker (Part 37)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 37)"
          },
          {
            "id": "p-devops-74",
            "title": "CI/CD (Part 37)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 37)"
          },
          {
            "id": "p-devops-75",
            "title": "Docker (Part 38)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 38)",
            "challengeType": "playground",
            "challengeDescription": "Build: Docker (Part 38)"
          },
          {
            "id": "p-devops-76",
            "title": "CI/CD (Part 38)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 38)"
          },
          {
            "id": "p-devops-77",
            "title": "Docker (Part 39)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 39)"
          },
          {
            "id": "p-devops-78",
            "title": "CI/CD (Part 39)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 39)"
          },
          {
            "id": "p-devops-79",
            "title": "Docker (Part 40)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 40)"
          },
          {
            "id": "p-devops-80",
            "title": "CI/CD (Part 40)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 40)",
            "challengeType": "playground",
            "challengeDescription": "Build: CI/CD (Part 40)"
          },
          {
            "id": "p-devops-81",
            "title": "Docker (Part 41)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 41)"
          },
          {
            "id": "p-devops-82",
            "title": "CI/CD (Part 41)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 41)"
          },
          {
            "id": "p-devops-83",
            "title": "Docker (Part 42)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 42)"
          },
          {
            "id": "p-devops-84",
            "title": "CI/CD (Part 42)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 42)"
          },
          {
            "id": "p-devops-85",
            "title": "Docker (Part 43)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 43)",
            "challengeType": "playground",
            "challengeDescription": "Build: Docker (Part 43)"
          },
          {
            "id": "p-devops-86",
            "title": "CI/CD (Part 43)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 43)"
          },
          {
            "id": "p-devops-87",
            "title": "Docker (Part 44)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 44)"
          },
          {
            "id": "p-devops-88",
            "title": "CI/CD (Part 44)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 44)"
          },
          {
            "id": "p-devops-89",
            "title": "Docker (Part 45)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 45)"
          },
          {
            "id": "p-devops-90",
            "title": "CI/CD (Part 45)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 45)",
            "challengeType": "playground",
            "challengeDescription": "Build: CI/CD (Part 45)"
          },
          {
            "id": "p-devops-91",
            "title": "Docker (Part 46)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 46)"
          },
          {
            "id": "p-devops-92",
            "title": "CI/CD (Part 46)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 46)"
          },
          {
            "id": "p-devops-93",
            "title": "Docker (Part 47)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 47)"
          },
          {
            "id": "p-devops-94",
            "title": "CI/CD (Part 47)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 47)"
          },
          {
            "id": "p-devops-95",
            "title": "Docker (Part 48)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 48)",
            "challengeType": "playground",
            "challengeDescription": "Build: Docker (Part 48)"
          },
          {
            "id": "p-devops-96",
            "title": "CI/CD (Part 48)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 48)"
          },
          {
            "id": "p-devops-97",
            "title": "Docker (Part 49)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 49)"
          },
          {
            "id": "p-devops-98",
            "title": "CI/CD (Part 49)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 49)"
          },
          {
            "id": "p-devops-99",
            "title": "Docker (Part 50)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 50)"
          },
          {
            "id": "p-devops-100",
            "title": "CI/CD (Part 50)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 50)",
            "challengeType": "playground",
            "challengeDescription": "Build: CI/CD (Part 50)"
          },
          {
            "id": "p-devops-101",
            "title": "Docker (Part 51)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 51)"
          },
          {
            "id": "p-devops-102",
            "title": "CI/CD (Part 51)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 51)"
          },
          {
            "id": "p-devops-103",
            "title": "Docker (Part 52)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 52)"
          },
          {
            "id": "p-devops-104",
            "title": "CI/CD (Part 52)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 52)"
          },
          {
            "id": "p-devops-105",
            "title": "Docker (Part 53)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 53)",
            "challengeType": "playground",
            "challengeDescription": "Build: Docker (Part 53)"
          },
          {
            "id": "p-devops-106",
            "title": "CI/CD (Part 53)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 53)"
          },
          {
            "id": "p-devops-107",
            "title": "Docker (Part 54)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 54)"
          },
          {
            "id": "p-devops-108",
            "title": "CI/CD (Part 54)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 54)"
          },
          {
            "id": "p-devops-109",
            "title": "Docker (Part 55)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 55)"
          },
          {
            "id": "p-devops-110",
            "title": "CI/CD (Part 55)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 55)",
            "challengeType": "playground",
            "challengeDescription": "Build: CI/CD (Part 55)"
          },
          {
            "id": "p-devops-111",
            "title": "Docker (Part 56)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 56)"
          },
          {
            "id": "p-devops-112",
            "title": "CI/CD (Part 56)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 56)"
          },
          {
            "id": "p-devops-113",
            "title": "Docker (Part 57)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 57)"
          },
          {
            "id": "p-devops-114",
            "title": "CI/CD (Part 57)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 57)"
          },
          {
            "id": "p-devops-115",
            "title": "Docker (Part 58)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 58)",
            "challengeType": "playground",
            "challengeDescription": "Build: Docker (Part 58)"
          },
          {
            "id": "p-devops-116",
            "title": "CI/CD (Part 58)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 58)"
          },
          {
            "id": "p-devops-117",
            "title": "Docker (Part 59)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 59)"
          },
          {
            "id": "p-devops-118",
            "title": "CI/CD (Part 59)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 59)"
          },
          {
            "id": "p-devops-119",
            "title": "Docker (Part 60)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 60)"
          },
          {
            "id": "p-devops-120",
            "title": "CI/CD (Part 60)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 60)",
            "challengeType": "playground",
            "challengeDescription": "Build: CI/CD (Part 60)"
          },
          {
            "id": "p-devops-121",
            "title": "Docker (Part 61)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 61)"
          },
          {
            "id": "p-devops-122",
            "title": "CI/CD (Part 61)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 61)"
          },
          {
            "id": "p-devops-123",
            "title": "Docker (Part 62)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 62)"
          },
          {
            "id": "p-devops-124",
            "title": "CI/CD (Part 62)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 62)"
          },
          {
            "id": "p-devops-125",
            "title": "Docker (Part 63)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 63)",
            "challengeType": "playground",
            "challengeDescription": "Build: Docker (Part 63)"
          },
          {
            "id": "p-devops-126",
            "title": "CI/CD (Part 63)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 63)"
          },
          {
            "id": "p-devops-127",
            "title": "Docker (Part 64)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 64)"
          },
          {
            "id": "p-devops-128",
            "title": "CI/CD (Part 64)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 64)"
          },
          {
            "id": "p-devops-129",
            "title": "Docker (Part 65)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 65)"
          },
          {
            "id": "p-devops-130",
            "title": "CI/CD (Part 65)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 65)",
            "challengeType": "playground",
            "challengeDescription": "Build: CI/CD (Part 65)"
          },
          {
            "id": "p-devops-131",
            "title": "Docker (Part 66)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 66)"
          },
          {
            "id": "p-devops-132",
            "title": "CI/CD (Part 66)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 66)"
          },
          {
            "id": "p-devops-133",
            "title": "Docker (Part 67)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 67)"
          },
          {
            "id": "p-devops-134",
            "title": "CI/CD (Part 67)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 67)"
          },
          {
            "id": "p-devops-135",
            "title": "Docker (Part 68)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 68)",
            "challengeType": "playground",
            "challengeDescription": "Build: Docker (Part 68)"
          },
          {
            "id": "p-devops-136",
            "title": "CI/CD (Part 68)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 68)"
          },
          {
            "id": "p-devops-137",
            "title": "Docker (Part 69)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 69)"
          },
          {
            "id": "p-devops-138",
            "title": "CI/CD (Part 69)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 69)"
          },
          {
            "id": "p-devops-139",
            "title": "Docker (Part 70)",
            "content": "Containers package apps. Dockerfile, docker-compose. Images and containers.\n\nFROM node:20\nWORKDIR /app\nCMD [\"node\",\"server.js\"]",
            "codeExample": "15 min",
            "challenge": "Practice: Docker (Part 70)"
          },
          {
            "id": "p-devops-140",
            "title": "CI/CD (Part 70)",
            "content": "Automated pipelines. GitHub Actions. Build, test, deploy.\n\nname: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest",
            "codeExample": "12 min",
            "challenge": "Practice: CI/CD (Part 70)",
            "challengeType": "playground",
            "challengeDescription": "Build: CI/CD (Part 70)"
          }
        ]
      }
    ]
  }
};
if(typeof module!=="undefined") module.exports={CURRICULUM};
