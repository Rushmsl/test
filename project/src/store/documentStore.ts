import { create } from 'zustand';
import { Document, DocumentStatus } from '../types/document';

interface DocumentStore {
  documents: Document[];
  isLoading: boolean;
  currentFilter: DocumentStatus | 'all';
  setFilter: (filter: DocumentStatus | 'all') => void;
  addDocument: (document: Document) => void;
  updateDocument: (id: string, updates: Partial<Document>) => void;
  deleteDocument: (id: string) => void;
}

export const useDocumentStore = create<DocumentStore>((set) => ({
  documents: [],
  isLoading: false,
  currentFilter: 'all',
  setFilter: (filter) => set({ currentFilter: filter }),
  addDocument: (document) =>
    set((state) => ({ documents: [...state.documents, document] })),
  updateDocument: (id, updates) =>
    set((state) => ({
      documents: state.documents.map((doc) =>
        doc.id === id ? { ...doc, ...updates } : doc
      ),
    })),
  deleteDocument: (id) =>
    set((state) => ({
      documents: state.documents.filter((doc) => doc.id !== id),
    })),
}));