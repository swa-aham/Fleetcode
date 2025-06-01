import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.resolve(__dirname, '../processed json/merged_questions.json');
const outputPath = path.resolve(__dirname, '../processed json/merged_questions_with_ids.json');

const questions = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

questions.forEach((q, idx) => {
  q.id = idx + 1;
});

fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2));
console.log(`Added ids to ${questions.length} questions. Output: ${outputPath}`);
