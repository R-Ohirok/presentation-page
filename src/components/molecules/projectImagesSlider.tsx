'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/thumbs';

type Props = {
  images: string[];
};

export default function ProductImageSlider({ images }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
        className="w-full transition duration-300 hover:scale-105"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`main-${idx}`}
              className="w-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <div className="flex justify-center">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView="auto"
          watchSlidesProgress
          modules={[Thumbs]}
          className="w-fit"
        >
          {images.map((img, idx) => (
            <SwiperSlide
              key={idx}
              className="flex !w-[120px] items-center justify-center"
            >
              <img
                src={img}
                alt={`thumb-${idx}`}
                className="aspect-auto w-[100px] cursor-pointer border border-gray-700 hover:border-white"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
