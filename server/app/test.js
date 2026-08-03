// Candidate may improve this.
const fs = require('fs');

if (!fs.existsSync('server.js')) {
  console.error('server.js is missing');
  process.exit(1);
}

console.log('Basic validation passed');
