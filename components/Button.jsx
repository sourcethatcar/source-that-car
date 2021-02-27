import styled from "@emotion/styled"
import PropTypes from "prop-types"

const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
  color: var(--colorWhite);
  background-color: var(--colorBlue);
  border-radius: 5px;
  padding: 0.75rem 1.2rem;
  font-weight: ${(props) => props.fontWeight};
`

export const Button = ({
  children,
  className,
  fontWeight,
  onClick,
  type,
  href,
}) => {
  return onClick ? (
    <ButtonWrapper
      className={className}
      onClick={onClick}
      type={type}
      fontWeight={fontWeight}
    >
      {children}
    </ButtonWrapper>
  ) : (
    <ButtonWrapper as="a" href={href} fontWeight={fontWeight}>
      {children}
    </ButtonWrapper>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  fontWeight: PropTypes.oneOf(["normal", "bold"]),
  type: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
}

Button.defaultProps = {
  children: "Button Label",
  className: null,
  fontWeight: "normal",
  type: "button",
  onClick: null,
  href: null,
}

export const Submit = (props) => {
  return <ButtonWrapper as="input" type="submit" {...props} />
}
