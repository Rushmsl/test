import React from 'react';
import { FileText, Clock, CheckCircle, XCircle } from 'lucide-react';
import { DocumentStatus } from '../../types/document';

interface DocumentStatusIconProps {
  status: DocumentStatus;
}

export const DocumentStatusIcon: React.FC<DocumentStatusIconProps> = ({ status }) => {
  switch (status) {
    case 'pending':
      return <Clock className="h-5 w-5 text-yellow-500" />;
    case 'approved':
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case 'rejected':
      return <XCircle className="h-5 w-5 text-red-500" />;
    default:
      return <FileText className="h-5 w-5 text-gray-500" />;
  }
};