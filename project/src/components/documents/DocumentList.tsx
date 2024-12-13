import React from 'react';
import { Document } from '../../types/document';
import DocumentListItem from './DocumentListItem';

interface DocumentListProps {
  documents: Document[];
  isLoading: boolean;
}

export const DocumentList: React.FC<DocumentListProps> = ({ documents, isLoading }) => {
  if (isLoading) {
    return <div className="flex justify-center p-8">Loading documents...</div>;
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6">
        <ul className="divide-y divide-gray-200">
          {documents.map((doc) => (
            <DocumentListItem key={doc.id} document={doc} />
          ))}
        </ul>
      </div>
    </div>
  );
};