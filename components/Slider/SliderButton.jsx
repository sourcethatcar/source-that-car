import { cx } from "@emotion/css"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

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
      {position === "left" ? <BsChevronLeft /> : <BsChevronRight />}
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
