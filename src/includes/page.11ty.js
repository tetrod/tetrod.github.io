'use strict';

exports.data = {
  title: 'TETROD'
};

exports.render = function(data) {
return `<!doctype html><html class="dark" lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="/assets/main.css"></style>
  <title>${data.title}</title>
</head>
<body class="overflow-hidden font-serif text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900">
  <div class="flex flex-col h-screen">
    <header class="py-2 text-green-800 dark:text-green-300 bg-gray-200 dark:bg-gray-800">
      <nav class="flex text-800">
        <span class="text-xl m-2">TETROD</span>
        <span class="flex-auto"></span>
        ${this.eleventyNavigationToHtml(
          this.eleventyNavigation(data.collections.all),
          {
            listClass: 'flex',
            listItemClass: 'm-2',
            anchorClass: ' hover:text-green-500'
          }
        )}
      </nav>
    </header>
    <main class="flex-1 overflow-y-auto">
    ${data.content}
    </main>
    <footer class="py-2">
      <nav>
      </nav>
    </footer>
  </div>
</body>
</html>`;
};

// {% include "partials/htmlhead.njk" %}
