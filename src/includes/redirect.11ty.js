'use strict';

exports.data = {
  title: 'redirect'
};
exports.render = function (data) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url='${data.redirect.to}'" />
</head>
<body>
  you should be redirecting to <a href="${data.redirect.to}">${data.redirect.to}</a>
</body>
</html>`;
};
