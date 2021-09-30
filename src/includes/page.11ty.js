'use strict';

const onml = require('onml');

const scaled = (d, sx, sy) => {
  if (sy === undefined) { sy = sx; }
  let i = 0;
  while (i < d.length) {
  switch (d[i]) {
  case 'h':
    d[i + 1] *= sx; i++; break;
  case 'v':
    d[i + 1] *= sy; i++; break;
  case 'm':
  case 'l':
    d[i + 1] *= sx; d[i + 2] *= sy; i += 2; break;
  case 'a':
    d[i + 1] *= sx; d[i + 2] *= sy; d[i + 6] *= sx; d[i + 7] *= sy; i += 7; break;
  }
  i++;
  }
  return d;
};

const render = (s, body) => onml.stringify(
  onml.gen.svg(8 * s, 7 * s)
    .concat([['g', onml.tt(4 * s, 4 * s), body]])
  );

const genLogo = s => render(s, ['g', {stroke: '#fff', fill: 'none' },
  ['path', {'stroke-width': s / 4, d: scaled([
    'm', -2, -1,
    'a', 1, 1, 0, 0, 1, 4, 0,
    'v', 1,
    'a', 1, 1, 0, 0, 1, -4, 0,
    'z',
  ], s).join(' ')}],
  ['path', {'stroke-width': 1, d: scaled([
    'm', 0, -4, 'v', 2,
    'm', 1.5, 1,  'h', 1.5,
    'm', -6, 1,  'h', 1.5,
    'm', 2.5, 1,  'h', 2,
    'm', -4, 2, 'v', -1,
    'a', 1, 1, 0, 0, 1, 2, 0,
    'v', 1,
  ], s).join(' ')}],
  ['path', {'stroke-width': s / 4, d: scaled([
    'm', -1, -2, 'h', 2,
    'm', -2, 3.2,
    'a', 1.2, 1.2, 0, 0, 1, 2, 0,
  ], s).join(' ')}],
  ['path', {'stroke-width': s / 4, 'stroke-dasharray': [s/3.5, s/4], d: scaled([
    'm', -1.5, -1, 'h', 3,
    'm', -3, 1, 'h', 3,
  ], s).join(' ')}]
]);

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
        ${genLogo(6)}
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
