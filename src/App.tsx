import Banner from './components/banner/_banner';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import CardWtb from './components/cards/_card_wtb'
import CardSeller from './components/cards/_card_seller';
function App() {

  const item = [
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },

  ]

  return (
    <>
      <Banner />

      <section id="seller">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wrapper head-section" >
                <div>
                  Verified <b>Seller</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {item &&
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >

              {item.map((item: any, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <CardSeller />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          }
        </div>

      </section>
      <section id="wts-item">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wrapper head-section">
                <div>
                  <b>WTS</b> (Want To Sell)
                </div>
                <div>
                  Lihat Semua <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {item &&
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >

              {item.map((item: any, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <a href="/item-detail">
                      <div className="card card-item">
                        <div className="card-img">
                          <img src="./img/thumbnail/thumb5.png" />

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
                  </SwiperSlide>
                )
              })}
            </Swiper>
          }
        </div>

      </section>
      <section id="wtb-item">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wrapper head-section">
                <div>
                  <b>WTB</b> (Want To Buy)
                </div>
                <div>
                  Lihat Semua <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {item &&
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >

              {item.map((_, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <CardWtb />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          }
        </div>

      </section>
      <section id="all-item">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wrapper head-section">
                <div>
                  Semua Item di <b>BIKERSTHINGS</b>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {item.map((_, idx) => {
              return (
                <div className="col-lg-2 col-6" key={idx}>
                  <CardWtb />
                </div>
              )
            })}
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <button className="btn btn-gradient">Muat Lebih Banyak</button>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default App
