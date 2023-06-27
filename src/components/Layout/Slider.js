import React, { useState } from 'react';
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Slider = (props) => {
	const [swiper, setSwiper] = useState(null);

	const handleNext = () => {
		if (swiper !== null) {
			swiper.slideNext();
		}
	};

	const handlePrev = () => {
		if (swiper !== null) {
			swiper.slidePrev();
		}
	};
	return (
		<>
			<Swiper
				modules={ [Navigation, Pagination] }
				onSwiper={setSwiper}
				slidesPerView={1}
				spaceBetween={30}
				pagination={{ clickable: true }}
				// navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
			>
				{
					props.img.map((image, index) => (
						<SwiperSlide key={index}>
							<img className='swiper-img' src={image} alt={`Slide ${index + 1}`} />
						</SwiperSlide>
					))}
			</Swiper>
			{/*<div className="swiper-buttons">*/}
			{/*	<button className="swiper-button-prev" onClick={handlePrev}>*/}
			{/*		Prev*/}
			{/*	</button>*/}
			{/*	<button className="swiper-button-next" onClick={handleNext}>*/}
			{/*		Next*/}
			{/*	</button>*/}
			{/*</div>*/}
		</>
	);
};
export default Slider;