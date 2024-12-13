import React from 'react';
import { Bell, Lock, User, Mail } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
      </div>

      <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
        <div className="p-6">
          <h3 className="text-lg font-medium">Profile Settings</h3>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-medium">Notification Preferences</h3>
          <div className="mt-4 space-y-4">
            {['Email notifications', 'Push notifications', 'SMS notifications'].map((item) => (
              <div key={item} className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id={item}
                    name={item}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor={item} className="font-medium text-gray-700">
                    {item}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-medium">Security Settings</h3>
          <div className="mt-4">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Lock className="h-5 w-5 mr-2 text-gray-500" />
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;