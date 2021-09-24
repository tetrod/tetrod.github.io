#!/usr/bin/env node

'use strict';

const githubPagesDeployAction = require('@jamesives/github-pages-deploy-action');

githubPagesDeployAction.default({
  token: process.env.ACCESS_TOKEN,
  branch: 'gh-pages',
  folder: 'build',
  repositoryName: 'tetrod/portal',
  workspace: 'src/project/location'
});
