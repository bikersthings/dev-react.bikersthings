import Dropdown from 'react-bootstrap/Dropdown';
export default () => {
    return (
        <>
            <section id="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 left">
                            <a href="/">
                                <img src="./img/logo/icon.png" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-6 center" >
                            <a href="/item-filter">Filter</a>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Agv, Kyoto, Wearpack" />
                                <div className="wrapper">
                                    <button className="btn btn-gradient"><i className="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 right" >
                            <Dropdown className='rounded'>
                                <Dropdown.Toggle variant="success" className='bg-transparent text-dark rounded overflow-hidden' id="dropdown-basic">
                                    Hi, Tubagus Store!
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {/* <button type="button" className="wrapper dropdown-nav dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="./img/logo/tab-icon.png" alt="" />
                                Hi, Tubagus Store!
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" >
                                <div className="profile-menu badge-gold">
                                    Gold Member
                                </div>
                                <a href="/ice-box">
                                    <div className="profile-menu">
                                        <i className="fas fa-gifts"></i> Ice box
                                    </div>
                                </a>
                                <a href="/ice-box">
                                    <div className="profile-menu">
                                        <i className="fas fa-hourglass-half"></i> Timeline
                                    </div>
                                </a>
                                <hr />
                                <a href="/user/item">
                                    <div className="profile-menu">
                                        <i className="fas fa-boxes"></i> Kelola Item
                                    </div>
                                </a>
                                <a href="/user/setting">
                                    <div className="profile-menu">
                                        <i className="fas fa-user-cog"></i> Setting Profile
                                    </div>
                                </a>
                                <hr />
                                <div className="profile-menu">
                                    <i className="fas fa-ticket-alt"></i> Ice Coupon : 200
                                </div>
                                <div className="profile-menu">
                                    <i className="fas fa-rocket"></i> Boost! Voucher : 50
                                </div>
                                <a href="">
                                    <div className="btn btn-danger" >
                                        <i className="fas fa-sign-out-alt"></i> LOGOUT
                                    </div>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
