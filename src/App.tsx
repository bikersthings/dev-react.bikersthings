import { useState } from 'react'
import Banner from './components/banner/_banner';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faMarker } from '@fortawesome/free-solid-svg-icons'
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

  const [count, setCount] = useState(0)

  console.log(item)

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
                    <a href="/toko-detail" >
                      <div className="card card-item">
                        <div className="card-img">
                          <img src="./img/thumbnail/thumb2.png" />
                        </div>
                        <div className="card-body">
                          <div className="card-logo">
                            <img src="./img/logo/tab-icon.png" alt="" />
                          </div>
                          <p className="card-nama-toko">RC b19 Store <img src="./img/badge/verif.png" alt="" /></p>
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

              {item.map((item: any, idx) => {
                return (
                  <SwiperSlide key={idx}>
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
                  <a href="/item-detail">
                    <div className="card card-item">
                      <div className="card-img">
                        <img src="./img/thumbnail/thumb3.png" />
                        <div className="card-status">
                          WTB
                        </div>
                        <div className="card-badges">
                          <img src="{{asset('assets/img/badge/verif.png')}}" alt="" />
                          <img src="{{asset('assets/img/badge/boost-gold.png')}}" alt="" />
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="card-title">example</p>
                        <p className="card-price">IDR 20000</p>
                        <p className="card-location text-danger"><FontAwesomeIcon icon={faMapMarkerAlt} /> Gandaria City</p>
                      </div>
                    </div>
                  </a>
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
