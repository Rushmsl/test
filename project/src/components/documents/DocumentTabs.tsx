import React from 'react';
import { DocumentStatus } from '../../types/document';

interface DocumentTabsProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export const DocumentTabs: React.FC<DocumentTabsProps> = ({ currentTab, onTabChange }) => {
  const tabs = ['All', 'Pending', 'Approved', 'Rejected'];

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm
              ${tab === currentTab
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};