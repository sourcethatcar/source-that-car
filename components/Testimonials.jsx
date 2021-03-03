import { useRef, useEffect, useState, useLayoutEffect } from "react"
import styled from "@emotion/styled"
import { useResize } from "../hooks"
import { Layout, TestimonialCard } from "../components"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const titles = [{ text: "This", bg: "blue" }]

const TestimonialsWrapper = styled.section`
  background-color: var(--colorGrey);
  width: 100vw;

  .carousel-container {
    padding-top: 3rem;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .arrow-back,
  .arrow-forward {
    display: none;
  }

  @media only screen and (min-width: 640px) {
    .arrow-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 3rem;
    }

    .arrow-back,
    .arrow-forward {
      display: block;
      height: 4rem;
      fill: var(--colorBlue);
    }
    height: 500px;

    .testimonials-layout {
      position: relative;
      height: 100%;
      width: ${(props) => props.wrapperWidth * 3};
    }

    .carousel-container {
      padding-top: 0;
      display: flex;
      justify-content: center;
    }
  }
`
export const Testimonials = () => {
  const ref = useRef(null)
  const { width } = useResize(ref)

  return (
    <TestimonialsWrapper wrapperWidth={width} id="testimonials">
      <Layout ref={ref} className="testimonials-layout">
        <h1>Testimonials</h1>
        <div className="carousel-container">
          <div className="arrow-container">
            <IoIosArrowBack size={100} className="arrow-back" />
          </div>
          {titles.map(({ text, bg }, index) => (
            <TestimonialCard bg={bg} key={`${text}${index}`}>
              {width}
            </TestimonialCard>
          ))}
          <div className="arrow-container">
            <IoIosArrowForward size={100} className="arrow-forward" />
          </div>
        </div>
      </Layout>
    </TestimonialsWrapper>
  )
}
