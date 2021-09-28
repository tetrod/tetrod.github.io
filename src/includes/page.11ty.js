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
  <link rel="stylesheet" href="/main.css"></style>
  <title>${data.title}</title>
</head>
<body class="font-serif text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900">
  <header class="text-green-800 dark:text-green-300 bg-gray-200 dark:bg-gray-800">
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
  <main class="m-8">
  ${data.content}
  </main>
  <footer>
    <nav>
    </nav>
  </footer>
</body>
</html>`;
};

// {% include "partials/htmlhead.njk" %}
