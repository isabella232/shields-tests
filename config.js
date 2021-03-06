'use strict';

const path = require('path');

if (!process.env.SHIELDS_DIR) {
  console.error('Please set SHIELDS_DIR to the directory where shields is installed');
  process.exit(1);
}

module.exports = {
  serverPath: path.join(process.env.SHIELDS_DIR, 'server.js'),
  tryHtmlPath: path.join(process.env.SHIELDS_DIR, 'try.html')
};
