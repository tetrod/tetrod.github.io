#!/usr/bin/env node

'use strict';

const githubPagesDeployAction = require('@jamesives/github-pages-deploy-action');

githubPagesDeployAction.default({
  branch: 'gh-pages',
  folder: 'build',
  workspace: 'src/project/location'
});
