import { useState, useEffect, useRef } from 'react';
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';
import { Close } from '@styled-icons/material-outlined/Close';
import SlickSlider from 'react-slick';

import Slider, { SliderSettings } from 'components/Slider';

import v4 from 'utils/uuidv4';

import * as S from './styles';

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />,
};

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
  ],
};

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1,
};

export type GalleryImageProps = {
  src: string;
  label: string;
};

export type GalleryProps = {
  items: GalleryImageProps[];
};

const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleKeyUp = ({ key }: KeyboardEvent) => {
    key === 'Escape' && setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, []);

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <img
            role="button"
            key={v4()}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true);
              slider.current!.slickGoTo(index, true);
            }}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>

        <S.Body>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item) => (
              <img key={v4()} src={item.src} alt={item.label} />
            ))}
          </Slider>
        </S.Body>
      </S.Modal>
    </S.Wrapper>
  );
};
export default Gallery;
