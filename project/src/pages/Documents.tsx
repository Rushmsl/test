import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useDocuments } from '../hooks/useDocuments';
import { DocumentList } from '../components/documents/DocumentList';
import { DocumentTabs } from '../components/documents/DocumentTabs';
import { DocumentStatus } from '../types/document';

const Documents: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('All');
  const status = currentTab !== 'All' ? currentTab.toLowerCase() as DocumentStatus : undefined;
  const { documents, isLoading } = useDocuments(status);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Documents</h2>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          <Plus className="h-5 w-5 mr-2" />
          New Document
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <DocumentTabs currentTab={currentTab} onTabChange={setCurrentTab} />
        <DocumentList documents={documents} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Documents;