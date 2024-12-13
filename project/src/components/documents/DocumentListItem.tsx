import React from 'react';
import { Document } from '../../types/document';
import { DocumentStatusIcon } from './DocumentStatusIcon';
import { formatDate } from '../../utils/dateUtils';

interface DocumentListItemProps {
  document: Document;
}

const DocumentListItem: React.FC<DocumentListItemProps> = ({ document }) => {
  return (
    <li className="py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <DocumentStatusIcon status={document.status} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {document.title}
          </p>
          <p className="text-sm text-gray-500">
            Version {document.version} • Updated {formatDate(document.updatedAt)}
          </p>
        </div>
        <div>
          <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800">
            View
          </button>
        </div>
      </div>
    </li>
  );
};

export default DocumentListItem;