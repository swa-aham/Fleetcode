// fix_questions.js — ES module compatible with hardcoded absolute paths

import fs from 'fs';

// Use hardcoded absolute paths as in your original code
const inputPath = 'f:/Projects/project-bolt-sb1-mbv6bejw/project/src/data/json/all time';
const outputPath = 'f:/Projects/project-bolt-sb1-mbv6bejw/project/src/data/script/all time-fixed.json';

// Optional: Check if the file exists before reading
if (!fs.existsSync(inputPath)) {
  console.error('❌ Input file not found:', inputPath);
  process.exit(1);
}

// Read and parse the file
const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

const fixed = data.map(q => {
  // Lowercase all keys, preserve values
  const obj = {};
  for (const key in q) {
    obj[key.toLowerCase()] = q[key];
  }

  // Ensure topics is an array of strings
  if (typeof obj.topics === 'string') {
    obj.topics = obj.topics.split(',').map(s => s.trim());
  }

  // Add companies
  obj.companies = ["Amazon"];

  // Add datecategories
  obj.datecategories = ["all time"];

  return obj;
});

// Write to output
fs.writeFileSync(outputPath, JSON.stringify(fixed, null, 2));
console.log('✅ Done! Output written to', outputPath);
