import React from 'react'
const Header = () => {
    return (
        <>
            {/*  Header Section */}
            <nav className="TopHeader navbar navbar-expand-md navbar-light bg-white">
                <div className="container px-1">
                    <a href="#" className="navbar-brand">
                        <img src="/images/logo-blue.svg" alt="Logo" className="brand-image logo-100" />
                    </a>
                    {/* Right navbar links  */}
                    <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
                        {/* Messages Dropdown Menu  */}
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <img src="/images/Setting.svg" alt="Settings" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right setting">
                                <a href="#" className="dropdown-item">
                                    {/* Message Start  */}
                                    <div className="media">
                                        <img src="/images/Profile.png" alt="User Avatar" className="mr-3 img-circle" />
                                        <div className="media-body">
                                            <h3>
                                                Brad Diesel
                                    <span className="text-sm text-danger"><i className="fas fa-star"></i></span>
                                            </h3>
                                            <p>Call me whenever you can...</p>
                                            <p className="text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* <!-- Message End --> */}
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    {/* Message Start */}
                                    <div className="media">
                                        <img src="/images/Profile.png" alt="User Avatar" className="img-circle mr-3" />
                                        <div className="media-body">
                                            <h3>
                                                Brad Diesel
                                    <span className=" text-sm text-danger"><i className="fas fa-star"></i></span>
                                            </h3>
                                            <p>Call me whenever you can...</p>
                                            <p className="text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* <!-- Message End --> */}
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    {/* <!-- Message Start --> */}
                                    <div className="media">
                                        <img src="/images/Profile.png" alt="User Avatar" className="img-circle mr-3" />
                                        <div className="media-body">
                                            <h3>
                                                Brad Diesel
                                    <span className="text-sm text-danger"><i className="fas fa-star"></i></span>
                                            </h3>
                                            <p>Call me whenever you can...</p>
                                            <p className="text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* <!-- Message End --> */}
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item dropdown-footer text-center">See All Messages</a>
                            </div>
                        </li>
                        {/* <!-- Notifications Dropdown Menu --> */}
                        <li className="nav-item dropdown notifaction">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <img src="/images/Notification.svg" alt="Notification" />
                                <span className="notify"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-header text-center">15 Notifications</span>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <span className="content"><i className="fas fa-envelope mr-2"></i> 4 new messages</span>
                                    <span className="time">3 mins</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <span className="content"><i className="fas fa-envelope mr-2"></i> 4 new messages</span>
                                    <span className="time">3 mins</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <span className="content"><i className="fas fa-envelope mr-2"></i> 4 new messages</span>
                                    <span className="time">3 mins</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item dropdown-footer text-center">See All Notifications</a>
                            </div>
                        </li>

                        {/* User Dropdown Menu  */}
                        <li className="nav-item dropdown user_info_sec">
                            <a className="#" data-toggle="dropdown" href="#" aria-expanded="false">
                                <div className="profile">
                                    <figure>
                                        <img src="/images/Profile.png" alt="Thumb" className="img-fluid img-circle" />
                                    </figure>
                                    <figcaption>
                                        bcmmanager <span>BCM Manager</span>
                                    </figcaption>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <ul className="user_options_list">
                                    <li>
                                        <a href="#">
                                            <span>
                                                <span className="iconify" data-icon="fluent:document-16-regular" data-inline="false"></span>
                                            </span>
                                            <p>  Documents </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="iconify" data-icon="fluent:settings-24-filled" data-inline="false"></span>
                                            <p>
                                                Settings
                                </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-danger">
                                            <span className="iconify" data-icon="ic:outline-logout" data-inline="false"></span>
                                            <p>
                                                Log out
                                </p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item d-none">
                            <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                                <i className="fas fa-th-large"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* End Header Section */}

        </>
    )
}
export default Header