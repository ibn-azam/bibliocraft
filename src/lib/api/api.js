
// lib/api/api.js
import AllBooksPage from '@/app/(main)/books/page';
import fs from 'fs';
import path from 'path';

export async function getBooks() {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export async function getFeaturedBooksById(id) {
    try {
        const filePath = path.join(process.cwd(), 'public', 'data.json');
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const books = JSON.parse(fileContent);

        return books.find(
            (book) => book.id === parseInt(id) || book.id === id
        ) || null;

    } catch (error) {
        console.error('getFeaturedBooksById error:', error);
        return null;
    }
}

