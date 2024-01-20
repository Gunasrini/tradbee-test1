import React, { useState } from 'react';
import LeftNavbar from './Navbar';
import OnBoarding from './Onboarding';

function Dashboard() {
    return (
        <>
            <div className="dashboard-wrapper">
                <LeftNavbar />
                <OnBoarding />
            </div>
        </>
    )
}

export default Dashboard