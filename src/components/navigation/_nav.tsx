import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faBoxArchive, faBoxOpen, faClock, faGears, faPowerOff, faRocket, faTicket } from '@fortawesome/free-solid-svg-icons';
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
                                    <img src="./img/logo/tab-icon.png" alt="" width={25} height={25} />

                                    Hi, Tubagus Store!
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" className=" badge-gold rounded">
                                        <div >
                                            Gold Member
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" className="rounded">
                                        <a href="/ice-box">
                                            <div className="text-dark">
                                                <FontAwesomeIcon icon={faBoxOpen} />  Ice box
                                            </div>
                                        </a>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3" className="rounded">
                                        <a href="/ice-box">
                                            <div className="text-dark">
                                                <FontAwesomeIcon icon={faClock} />  Timeline
                                            </div>
                                        </a>
                                    </Dropdown.Item>
                                    <Dropdown.Item className="rounded">
                                        <a href="/user/item">
                                            <div className="text-dark">
                                                <FontAwesomeIcon icon={faBoxArchive} /> Kelola Item
                                            </div>
                                        </a>
                                    </Dropdown.Item>
                                    <Dropdown.Item className="rounded">
                                        <a href="/user/setting">
                                            <div className="text-dark">
                                                <FontAwesomeIcon icon={faGears} /> Setting Profile
                                            </div>
                                        </a>
                                    </Dropdown.Item>
                                    <Dropdown.Item className="rounded">
                                        <div className="text-dark">
                                            <FontAwesomeIcon icon={faTicket} /> Ice Coupon : 200
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item className="rounded">
                                        <div className="text-dark">
                                            <FontAwesomeIcon icon={faRocket} /> Boost! Voucher : 50
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item className="rounded w-100 p-0">
                                        <button className="btn btn-danger w-100" >
                                            <FontAwesomeIcon icon={faPowerOff} /> LOGOUT
                                        </button>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
