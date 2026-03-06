import React from 'react';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

// A simple shell layout for an Event page
type EventLayoutProps = {
  children: React.ReactNode;
};

export const EventLayout = ({ children }: EventLayoutProps) => (
  <div className="text-gray-700 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar selectedTitle="Événements" />
    {children}
    <Footer />
  </div>
);
