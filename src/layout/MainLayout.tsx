import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

import { Outlet } from "react-router";

const MainLayout = () => {
    return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Navbar />
     
        <Outlet />

        
     
    </div>
    );
};

export default MainLayout;