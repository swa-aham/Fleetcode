import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List your input files here (update paths as needed)
const inputFiles = [
  '../processed json/all time-fixed.json',
  '../processed json/last 1 month-fixed.json',
  '../processed json/last 3 months-fixed.json',
  '../processed json/last 6 months-fixed.json',
  '../processed json/last 12 months-fixed.json'
].map(f => path.resolve(__dirname, f));

const outputFile = path.resolve(__dirname, '../processed json/merged_questions.json');

const merged = {};

for (const file of inputFiles) {
  if (!fs.existsSync(file)) {
    console.warn(`File not found: ${file}`);
    continue;
  }
  const arr = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const q of arr) {
    if (!q || !q.link) continue; // skip empty or malformed
    const key = q.link.trim().toLowerCase();
    if (!merged[key]) {
      // Clone the object and ensure datecategories is an array
      merged[key] = { ...q, datecategories: Array.isArray(q.datecategories) ? [...q.datecategories] : [] };
    } else {
      // Merge datecategories (union, no duplicates)
      const existing = merged[key].datecategories || [];
      const incoming = Array.isArray(q.datecategories) ? q.datecategories : [];
      merged[key].datecategories = Array.from(new Set([...existing, ...incoming]));
    }
  }
}

const mergedArr = Object.values(merged);

// Optional: sort by title
mergedArr.sort((a, b) => (a.title || '').localeCompare(b.title || ''));

fs.writeFileSync(outputFile, JSON.stringify(mergedArr, null, 2));
console.log(`Merged ${mergedArr.length} unique questions to ${outputFile}`);
