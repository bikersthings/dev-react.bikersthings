import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
export default () => {
    return (
        <>
            <a href="/item-detail">
                <div className="card card-item">
                    <div className="card-img">
                        <img src="./img/thumbnail/thumb3.png" />
                        <div className="card-status">
                            WTB
                        </div>
                        <div className="card-badges">
                            <img src="./img/badge/verif.png" alt="" />
                            <img src="./img/badge/boost-gold.png" alt="" />
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-title">AGV Pista GPRR</p>
                        <p className="card-price">Rp. 90.000.000</p>
                        <p className="card-location text-danger"><FontAwesomeIcon icon={faMapMarkerAlt} /> Gandaria City</p>
                    </div>
                </div>
            </a>
        </>
    )
}