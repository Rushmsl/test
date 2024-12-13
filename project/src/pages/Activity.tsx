import React from 'react';
import { Clock, FileText, User, CheckCircle } from 'lucide-react';
import { formatDate } from '../utils/dateUtils';

const Activity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'document',
      action: 'created',
      user: 'John Doe',
      item: 'Q4 Financial Report',
      timestamp: new Date(),
      icon: FileText,
    },
    {
      id: 2,
      type: 'approval',
      action: 'approved',
      user: 'Jane Smith',
      item: 'Contract #123',
      timestamp: new Date(),
      icon: CheckCircle,
    },
    {
      id: 3,
      type: 'user',
      action: 'added',
      user: 'Admin',
      item: 'New User',
      timestamp: new Date(),
      icon: User,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Activity Log</h2>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="flow-root">
          <ul className="divide-y divide-gray-200">
            {activities.map((activity) => (
              <li key={activity.id} className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <activity.icon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.user}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activity.action} {activity.item}
                    </p>
                  </div>
                  <div className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(activity.timestamp)}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity;