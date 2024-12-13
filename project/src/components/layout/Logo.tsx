import React from 'react';
import { LayoutIcon } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex-shrink-0">
      <LayoutIcon className="h-8 w-8 text-blue-600" />
    </div>
  );
};

export default Logo;