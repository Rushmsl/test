import React from 'react';
import { Clock } from 'lucide-react';

const Approvals: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Pending Approvals</h2>
      </div>
      
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-yellow-500" />
                  <div>
                    <h3 className="text-sm font-medium">Document {item}</h3>
                    <p className="text-sm text-gray-500">Awaiting your approval</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700">
                    Approve
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approvals;