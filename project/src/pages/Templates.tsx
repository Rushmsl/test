import React from 'react';
import { Plus, LayoutTemplate } from 'lucide-react';

const Templates: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Document Templates</h2>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          <Plus className="h-5 w-5 mr-2" />
          New Template
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {['Contract', 'Invoice', 'Proposal'].map((template) => (
          <div key={template} className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center space-x-3">
              <LayoutTemplate className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-medium">{template} Template</h3>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Standard {template.toLowerCase()} template with pre-defined sections and approval workflow.
            </p>
            <div className="mt-4">
              <button className="text-sm text-blue-600 hover:text-blue-800">
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;