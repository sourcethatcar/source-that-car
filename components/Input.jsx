import styled from "@emotion/styled"
import React from "react"
import PropTypes from "prop-types"
import { capitalize } from "../utils/utils"

const InputWrapper = styled.div`
  flex-grow: 1;
  padding: 1rem;
  label {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    margin-top: 0.5rem;
    height: 3rem;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    padding: 1rem;
    width: 100%;
  }

  textarea {
    width: 100%;
    height: 100px;
  }

  small {
    color: red;
  }
`

export const Input = ({
  type,
  fieldName,
  placeholder,
  textArea,
  formRef,
  errorState,
}) => {
  const labelText = capitalize(fieldName)
  return (
    <InputWrapper>
      <label htmlFor={fieldName}>
        {labelText}
        {textArea ? (
          <textarea
            name={fieldName}
            id={fieldName}
            placeholder={placeholder}
            ref={formRef}
          />
        ) : (
          <input
            type={type}
            id={fieldName}
            name={fieldName}
            placeholder={placeholder}
            ref={formRef}
          />
        )}
        {errorState && (
          <span>
            <small>*This field is required</small>
          </span>
        )}
      </label>
    </InputWrapper>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  fieldName: PropTypes.string,
  placeholder: PropTypes.string,
  textArea: PropTypes.bool,
  errorState: PropTypes.object,
  formRef: PropTypes.func,
}
Input.defaultProps = {
  type: "text",
  fieldName: "placeholder",
  placeholder: "placeholder",
  textArea: false,
  formRef: null,
  errorState: null,
}
