import DefaultLayout from '@/components/layout/DefaultLayout';
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
             <DefaultLayout>
                {children}
             </DefaultLayout>
    );
};

export default Layout;