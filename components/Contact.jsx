import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { Layout } from "./Layout"
import { Input, Submit } from "../components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import emailjs, { init } from "emailjs-com"
import { breakpoints } from "../styles"
import PropTypes from "prop-types"

// initiate emailjs with userID
init(process.env.NEXT_PUBLIC__EMAILJS)

const fieldNames = {
  firstName: "firstName",
  lastName: "lastName",
  email: "email",
  comments: "comments",
}

const formProps = {
  firstName: {
    label: "First Name",
    fieldName: fieldNames.firstName,
    placeholder: "Johnny",
  },
  lastName: {
    label: "Last Name",
    fieldName: fieldNames.lastName,
    placeholder: "Appleseed",
  },
  email: {
    label: "Email",
    fieldName: fieldNames.email,
    placeholder: "j.appleseed@email.com",
  },
  comments: {
    label: "Comments",
    fieldName: fieldNames.comments,
    placeholder: "tell us how we can help",
  },
}

const validationSchema = yup.object().shape({
  [`${fieldNames.firstName}`]: yup
    .string()
    .required("* please provide your first name"),
  [`${fieldNames.lastName}`]: yup
    .string()
    .required("* please provide your last name"),
  [`${fieldNames.email}`]: yup
    .string()
    .email("* please provide a valid email address")
    .required("* please provide your email address"),
  [`${fieldNames.comments}`]: yup
    .string()
    .min(
      10,
      "* please tell us how we can help (a message longer than 10 characters...)"
    )
    .required(),
})

const ContactWrapper = styled.section`
  background-color: var(--colorWhite);

  h1 {
    padding-top: 3rem;
  }

  .form-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem 0;
  }

  .name-fields {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  .buttonContainer {
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: lightgreen;

    input:hover {
      background-color: lightcoral;
    }
  }

  .emailError {
    padding-top: 1rem;
    text-align: center;
    width: 100%;
    span {
      font-weight: bold;
      color: var(--colorBlue);
      text-decoration: underline;
    }
  }
  .contact-details-container {
    padding: 1rem;
    width: 100%;
  }

  .contact-details {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 1.5rem;
    font-size: 0.875rem;
  }
  .contact-detail {
    padding: 0.5rem;
    span {
      font-weight: bold;
      color: var(--colorYellow);
    }
  }
`
const ContactDetail = ({ title, className, email, tel }) => {
  const ContactLink = () => {
    if (email.length > 0) {
      return <a href={`mailto:${email}`}>{email}</a>
    }

    if (tel.length > 0) {
      return <a href={`tel:${tel.replace(" ", "")}`}>{tel}</a>
    }
    return ""
  }
  return (
    <p className={className}>
      <span>{title}</span>: <ContactLink />
    </p>
  )
}

ContactDetail.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  email: PropTypes.string,
  tel: PropTypes.string,
}

ContactDetail.defaultProps = {
  title: "Title",
  className: "contact-detail",
  email: "",
  tel: "",
}

export const Contact = () => {
  const [emailError, setEmailError] = useState("")
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
  })
  const onSubmit = ({ comments }, { target }) => {
    emailjs.sendForm("contact_service", "contact_form", target).then(
      /** on success */
      ({ text }) => {
        console.log(text)
        setIsFormSubmitted(true)
      },
      /** on error */
      ({ text }) => {
        console.log(text)
        setEmailError(comments)
      }
    )
  }

  useEffect(() => {
    if (isFormSubmitted) {
      window.alert("Thanks for your enquiry. We'll be in touch shortly.")
      reset(
        { firstName: "", lastName: "", email: "", comments: "" },
        { dirtyFields: false, isDirty: false }
      )
    }
  }, [isFormSubmitted, reset])

  return (
    <ContactWrapper id="contact">
      <Layout>
        <h1>Contact</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="name-fields">
              <Input
                type="text"
                {...formProps.firstName}
                formRef={register}
                errorState={errors[`${fieldNames.firstName}`]}
              />
              <Input
                type="text"
                {...formProps.lastName}
                formRef={register}
                errorState={errors[`${fieldNames.lastName}`]}
              />
            </div>
            <Input
              type="email"
              {...formProps.email}
              formRef={register}
              errorState={errors[`${fieldNames.email}`]}
            />
            <Input
              textArea
              {...formProps.comments}
              formRef={register}
              errorState={errors[`${fieldNames.comments}`]}
            />
            <div className="buttonContainer">
              <Submit value="Send" fontWeight="bold" />
            </div>
            {emailError && (
              <div className="emailError">
                <p>
                  Sorry but we were not able to send this form at this time.
                  Please click{" "}
                  <span>
                    <a
                      href={`mailto: sourcethatcar@sky.com?subject=Website Enquiry&body=${emailError}`}
                    >
                      here
                    </a>
                  </span>{" "}
                  to send your request in an email directly. Your message above
                  will be copied over.
                </p>
              </div>
            )}
          </form>
          <div className="contact-details-container">
            <p>Alternatively we can be reached at:</p>
            <div className="contact-details">
              <ContactDetail title="Office" tel="01732 300581" />
              <ContactDetail title="Mike" tel="07884 345367" />
              <ContactDetail title="Julie" tel="07721 719040" />
              <ContactDetail
                title="Email"
                email="enquiries@sourcethatcar.com"
              />
            </div>
          </div>
        </div>
      </Layout>
    </ContactWrapper>
  )
}
