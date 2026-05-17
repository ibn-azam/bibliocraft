
// lib/api/api.js
import fs from 'fs';
import path from 'path';

export async function getBooks() {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}