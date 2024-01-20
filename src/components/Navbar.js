
function LeftNavbar() {
    return (
        <>
            <div className="left-navbar col-md-2 bg-light">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-city"></i>
                            <a href="#onboarding" className="nav-link" data-bs-toggle="collapse">Onboarding</a>
                            <i className="fas fa-angle-down"></i>
                        </div>
                        <div id="onboarding" className="collapse show">
                            <ul className="nav submenu">
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">Business KYC</a>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">Management KYC</a>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">Business Financials</a>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">Loan Details</a>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">ENach</a>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">Approval</a>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">ESign</a>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">Disbursal</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="d-flex align-items-center">
                            <i className="far fa-folder"></i>
                            <a href="#documents" className="nav-link" data-bs-toggle="collapse">Loan Documents</a>
                            <i className="fas fa-angle-down"></i>
                        </div>

                        <div id="documents" className="collapse">
                            <ul className="nav submenu">
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">Aadhar Card</a>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">PAN Card</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-sticky-note"></i>
                            <a className="nav-link" href="#">Notes</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-history"></i>
                            <a className="nav-link" href="#">Log History</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-users"></i>
                            <a className="nav-link" href="#">Users</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-cog"></i>
                            <a className="nav-link" href="#">Settings</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default LeftNavbar