import { IStatus } from './books.interface';

export const bookStatus: IStatus[] = [
  'reading',
  'plan to read',
  'finish reading',
  'none',
];

export const iBookFilterableFields = ['searchTerm', 'genre', 'publicationYear'];

export const iBookSearchableFields = ['title', 'author', 'genre', 'publicationYear'];
