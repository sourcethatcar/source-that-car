import styled from "@emotion/styled"
import { cx } from "@emotion/css"
import PropTypes from "prop-types"

const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  button {
    border: 0;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: rgba(0, 0, 0, 0.3);
    margin: 0 0.75rem;
    cursor: pointer;
    outline: none;

    &.active {
      background-color: rgba(0, 0, 0, 0.75);
    }
  }
`

export const Dots = ({ slides, activeIndex, onClick }) => {
  return (
    <DotsWrapper>
      {slides.map((slide, index) => {
        const classes = cx({ active: index === activeIndex })
        return (
          <button
            className={classes}
            key={`dot-${index}`}
            onClick={() => onClick(index)}
          />
        )
      })}
    </DotsWrapper>
  )
}

Dots.propTypes = {
  slides: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func,
}

Dots.defaultProps = {
  onClick: null,
}
