import { Document, DocumentStatus } from '../types/document';
import { User } from '../types/user';

const BASE_URL = '/api';

export const api = {
  documents: {
    list: async (status?: DocumentStatus): Promise<Document[]> => {
      const response = await fetch(
        `${BASE_URL}/documents${status ? `?status=${status}` : ''}`
      );
      return response.json();
    },
    create: async (document: Partial<Document>): Promise<Document> => {
      const response = await fetch(`${BASE_URL}/documents`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(document),
      });
      return response.json();
    },
    update: async (id: string, updates: Partial<Document>): Promise<Document> => {
      const response = await fetch(`${BASE_URL}/documents/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      return response.json();
    },
    delete: async (id: string): Promise<void> => {
      await fetch(`${BASE_URL}/documents/${id}`, {
        method: 'DELETE',
      });
    },
  },
  auth: {
    login: async (email: string, password: string): Promise<User> => {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      return response.json();
    },
    logout: async (): Promise<void> => {
      await fetch(`${BASE_URL}/auth/logout`, {
        method: 'POST',
      });
    },
  },
};