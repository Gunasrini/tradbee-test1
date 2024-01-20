// export default Header = () => {

// }

import logo from '../assets/images/logo.jpeg'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light navbar-light sticky-top">
                <div className="container-fluid">
                    <div className="col-md-12 d-flex">
                        <div className="col-md-2 navbar-logo">
                            <a className="navbar-brand" href="/">
                                <img src={logo} />
                            </a>
                        </div>
                        <div className="col-md-10 d-flex">
                            <div className="col-md-3">
                                <form className="d-flex">
                                    <div className="search-header">
                                        <span className="search-icon"><i className="fas fa-search"></i></span>
                                        <input className="form-control" type="text" placeholder="Search" />
                                    </div>
                                </form>
                            </div>
                            <div className="navbar-right ms-auto d-flex align-items-center">
                                <div className="header-notification">
                                    <i className="far fa-bell"></i>
                                    <span className="badge rounded-pill bg-danger">5</span>
                                </div>
                                <div className="profile-info">
                                    <img src="https://demo.dashboardpack.com/adminty-html/files/assets/images/avatar-4.jpg"
                                        className="user-img" />
                                    <span className="">Mohit Sharma</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header