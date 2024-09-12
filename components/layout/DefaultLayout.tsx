import React, { ReactNode } from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';

type DefaultLayoutProps = {
    children: ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <>            
            <Navbar />
            <main>{children}</main>            
            <Footer />
        </>
    );
};

export default DefaultLayout;