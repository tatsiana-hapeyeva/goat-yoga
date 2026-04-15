import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useAppSelector } from '../../app/hooks'
import { useAppDispatch } from '../../app/hooks'
import { setActiveIndex } from './gallerySlice'

import 'swiper/css'
import 'swiper/css/navigation'

import { galleryImages } from './galleryImages'

export default function GallerySlider() {
  const dispatch = useAppDispatch()

  const activeIndex = useAppSelector(
    (state) => state.gallery.galleries.mainGallery.activeIndex
  
)

  return (
    <section className="gallery">
      <div className="gallery-container">
    <Swiper
  className="gallery-swiper"
          modules={[Navigation]}
          navigation
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          initialSlide={activeIndex}
          breakpoints={{
            768: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
          }}
  onSlideChange={(swiper) => {
    dispatch(
      setActiveIndex({
        galleryId: 'mainGallery',
        activeIndex: swiper.realIndex,
      })
    )
  }}
>
      {galleryImages.map((image) => (
  <SwiperSlide className="gallery-swiper__slide" key={image.id}>
    <div className="gallery-swiper__media">
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="gallery-swiper__image"
      />
    </div>
  </SwiperSlide>
))}
    </Swiper>
  </div>
    </section>
  )
}