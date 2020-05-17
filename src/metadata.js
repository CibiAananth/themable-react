/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const packageJson = require('../package.json');

const metadata = {
  version: packageJson.version,
  build: 1,
  releaseEnvironment: process.env.REACT_APP_STORAGE_RELEASE_STAGE,
  deploymentEnvironment: process.env.REACT_APP_STORAGE_DEPLOYMENT_ENV,
  releaseDate: ''
};

module.exports = metadata;
