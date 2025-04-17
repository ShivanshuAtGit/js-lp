'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

interface DeviceRendererProps {
  renderOn: string | string[];
  children: ReactNode;
}

const DeviceRenderer: React.FC<DeviceRendererProps> = ({ renderOn, children }) => {
  const [device, setDevice] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setDevice('desktop');
      } else if (width >= 600) {
        setDevice('tablet');
      } else {
        setDevice('phone');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shouldRender = () => {
    if (Array.isArray(renderOn)) {
      return renderOn.includes(device);
    }
    return device === renderOn;
  };

  return shouldRender() ? <>{children}</> : null;
};

export default DeviceRenderer;
