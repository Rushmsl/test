import { useState, useEffect } from 'react';
import { Document, DocumentStatus } from '../types/document';

export const useDocuments = (status?: DocumentStatus) => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchDocuments = async () => {
      const mockDocuments: Document[] = [
        {
          id: '1',
          title: 'Q4 Financial Report',
          type: 'contract',
          content: 'Financial report content...',
          version: 1,
          status: 'pending',
          createdBy: 'user1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Add more mock documents
      ];

      setDocuments(status 
        ? mockDocuments.filter(doc => doc.status === status)
        : mockDocuments
      );
      setIsLoading(false);
    };

    fetchDocuments();
  }, [status]);

  return { documents, isLoading };
};