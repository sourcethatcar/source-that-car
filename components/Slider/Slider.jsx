import { useRef, useState } from "react"
import { useWidth } from "../../hooks"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Dots } from "./Dots"
import { Slide } from "./Slide"
import { SliderButton } from "./SliderButton"

const SliderWrapper = styled.div`
  position: relative;
  height: 400px;
  width: 90%;
  margin: 0 auto;
  padding: 0 1rem;
  padding-bottom: 3rem;

  .track-container {
    background-color: var(--colorGrey);
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .track {
    padding: 0;
    margin: 0;
    position: relative;
    height: 100%;
    list-style: none;
    border-radius: 5px;
    transform: translateX(
      -${({ activeIndex, width }) => activeIndex * width}px
    );
    transition: all 0.25s ease-in-out;
  }

  @media (max-width: 640px) {
    height: 450px;
    width: 100%;
    & > button {
      display: none;
    }
  }
`

export const Slider = ({ slides }) => {
  const trackRef = useRef(null)
  const { width } = useWidth(trackRef)
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => setActiveIndex(activeIndex + 1)

  const prevSlide = () => setActiveIndex(activeIndex - 1)

  const moveToSlide = (index) => setActiveIndex(index)

  return (
    <SliderWrapper activeIndex={activeIndex} width={width}>
      <SliderButton
        position="left"
        onClick={prevSlide}
        disabled={activeIndex === 0}
      />
      <div className="track-container">
        <ul ref={trackRef} className="track">
          {slides.map((slide, index) => (
            <Slide
              key={`slide-${index + 1}`}
              content={slide}
              offset={width * index}
            />
          ))}
        </ul>
      </div>
      <SliderButton
        position="right"
        onClick={nextSlide}
        disabled={activeIndex === slides.length - 1}
      />
      <Dots slides={slides} activeIndex={activeIndex} onClick={moveToSlide} />
    </SliderWrapper>
  )
}

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
}
