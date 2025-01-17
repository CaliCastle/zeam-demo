import React from 'react';
import Header from '../Header';

const Layout: React.FC<unknown> = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            {children}
        </div>
    );
};

export default Layout;