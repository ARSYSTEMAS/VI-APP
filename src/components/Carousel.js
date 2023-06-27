import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, EffectCube, Autoplay } from 'swiper';
import '../css/carousel.css';

// styles
//import 'swiper/css';
import 'swiper/swiper-bundle.min.css';

export const CarouselComponent = () => {

   return (

      <section className="hero-section">
      <div className="container">
          <div className="row">

              <div className="col-lg-12 col-12">
                  <div className="text-center mb-5 pb-2">
                      <h1 className="text-white">VALENCIA INFORMA</h1>

                      <p className="text-white">Canal de noticias. Publica toda la información del acontecer en Valencia, Venezuela y el mundo.</p>
                  </div> 
              </div>
          </div>
      </div>
  
  <Swiper
      modules={[Navigation, Pagination, Scrollbar, EffectCube, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      autoplay= {{
      delay: 3000,
      speed: 400
      }}

      navigation      
      pagination={{ clickable: true }}

      effect={"cube"}
      cubeEffect={{
        shadow: false,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      
    > 
 
      <SwiperSlide><img src={require('../images/valencia/1.jpg')} alt='' className='imagen'/> 
      </SwiperSlide>
      <SwiperSlide><img src={require('../images/valencia/2.jpg')} alt=''  className='imagen'/>
      </SwiperSlide>
      <SwiperSlide><img src={require('../images/valencia/3.jpg')} alt=''  className='imagen'/>
      </SwiperSlide>
      <SwiperSlide><img src={require('../images/valencia/4.jpg')} alt=''   className='imagen'/>
      </SwiperSlide>
      <SwiperSlide><img src={require('../images/valencia/5.jpg')} alt=''  className='imagen'/>
      </SwiperSlide>
      <SwiperSlide><img src={require('../images/valencia/6.jpg')} alt=''  className='imagen '/>
      </SwiperSlide>
      <SwiperSlide><img src={require('../images/valencia/7.jpg')} alt=''  className='imagen'/>
      </SwiperSlide>
    </Swiper>
      
</section>
   );
}
