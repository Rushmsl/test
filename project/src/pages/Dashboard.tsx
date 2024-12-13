import React from 'react';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle 
} from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Pending Approvals"
          value="12"
          icon={Clock}
          color="text-yellow-600"
          bgColor="bg-yellow-100"
        />
        <DashboardCard
          title="Approved Documents"
          value="45"
          icon={CheckCircle}
          color="text-green-600"
          bgColor="bg-green-100"
        />
        <DashboardCard
          title="Total Documents"
          value="78"
          icon={FileText}
          color="text-blue-600"
          bgColor="bg-blue-100"
        />
        <DashboardCard
          title="Rejected Documents"
          value="3"
          icon={AlertCircle}
          color="text-red-600"
          bgColor="bg-red-100"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentDocuments />
        <PendingApprovals />
      </div>
    </div>
  );
};

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.FC<{ className?: string }>;
  color: string;
  bgColor: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon: Icon,
  color,
  bgColor,
}) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className={`flex-shrink-0 ${bgColor} rounded-md p-3`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd className="text-lg font-semibold text-gray-900">{value}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentDocuments: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">Recent Documents</h3>
        <div className="mt-6">
          <ul className="divide-y divide-gray-200">
            {[1, 2, 3].map((item) => (
              <li key={item} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <FileText className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Contract Document {item}
                    </p>
                    <p className="text-sm text-gray-500">
                      Updated 2 hours ago
                    </p>
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

const PendingApprovals: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">Pending Approvals</h3>
        <div className="mt-6">
          <ul className="divide-y divide-gray-200">
            {[1, 2, 3].map((item) => (
              <li key={item} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Approval Request {item}
                    </p>
                    <p className="text-sm text-gray-500">
                      Waiting for approval • Due in 2 days
                    </p>
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

export default Dashboard;