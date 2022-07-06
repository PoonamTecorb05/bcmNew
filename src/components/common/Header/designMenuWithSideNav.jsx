import React from 'react'
const DesignMenu = () => {
    return (
        <>
            {/*  Header Section */}
            <nav className="TopHeader navbar navbar-expand-md navbar-light bg-white TopHeaderwithSideMenu">
                <div className="container-fluid px-1">
                <ul className="navbar-nav">
            <li className="nav-item d-flex align-items-center">
                <a className="btn arrowback" href="http://localhost/BCM/bcm/processes/crises_ready" role="button">
                <span class="iconify" data-icon="bx:bx-arrow-back" data-inline="false" style={{color:"#ffffff"}}></span>
       </a>
            </li>
        </ul>
        <form className="form-inline">
            <div className="input-group input-group-sm">
                <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                        <img src="/images/magnigying-glass.svg" alt="Search" className="img-fluid" />
                    </button>
                </div>
                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            </div>
        </form>
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
            <aside className="sideBar">
    {/* <!-- Brand Logo --> */}
    <a href="#" className="brand-link dashboard" style={{border: "0"}}>
        <img src="/images/logo-mini.png" alt="Logo" className="brand-image img-circle elevation-2" style={{opacity: ".8"}} />
        <span>
            <img src="/images/logo-blue.svg" alt="Logo" className="img-fluid logo-100" />
        </span>
    </a>   
    {/* <!-- Sidebar --> */}
    <div className="mt-2">
    <ul className="nav-timeline">
                <li className="complete">
                    <a href="#">Impact Analysis</a>
                </li>
                <li className="complete">
                    <a href="" >Enablers</a>
                </li>
                <li className="active"  >
                    <a href="#">Value Chain</a>
                </li>

                <li className=""  >
                    <a href="#">Risk Assessment</a>
                </li>

                <li className="" >
                    <a href="#">Recovery Strategies</a>
                </li>

                <li className="" >
                    <a href="#">Business Continuity <br /> Plan</a>
                </li>


            </ul>

            <ul className="sidebar-nav">
                <li>
                    <a href="#">
                        <figure className="mr-24">
                             <img src="/images/icon-nav-document.svg" alt="Icon" className="img-fluid" />
                        </figure>
                        <figcaption>Document<br/> Versions</figcaption>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <figure className="mr-24">
                            <span className="iconify" data-icon="ic:baseline-notes" data-inline="false"></span>
                        </figure>
                        <figcaption>Notes</figcaption>
                    </a>
                </li>
            </ul>
    </div>
    {/* <!-- /.sidebar --> */}

</aside>
        </>
    )
}
export default DesignMenu