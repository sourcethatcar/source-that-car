import { cx } from "@emotion/css"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const SliderButtonWrapper = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
    fill: black;
  }

  &.left {
    left: -60px;
  }

  &.right {
    right: -60px;
  }

  &:disabled {
    svg {
      fill: grey;
    }
  }
`

export const LeftArrow = () => (
  <svg
    width="21"
    height="36"
    viewBox="0 0 21 36"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.775 32.85L7.05 18 21 3.15 17.625 0 .525 18 17.4 36l3.375-3.15z" />
  </svg>
)

export const RightArrow = () => (
  <svg
    width="21"
    height="36"
    viewBox="0 0 21 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.225 3.15L13.95 18 0 32.85 3.375 36l17.1-18L3.6 0 .225 3.15z" />
  </svg>
)

export const SliderButton = ({ position, onClick, disabled }) => {
  const classes = cx(
    { left: position === "left" },
    { right: position === "right" },
    { disabled: disabled }
  )

  return (
    <SliderButtonWrapper
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {position === "left" ? <LeftArrow /> : <RightArrow />}
    </SliderButtonWrapper>
  )
}

SliderButton.propTypes = {
  position: PropTypes.oneOf(["left", "right"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

SliderButton.defaultProps = {
  position: "left",
  onClick: null,
  disabled: false,
}
