import { useState } from "react"
import styled from "@emotion/styled"
import { Layout } from "./Layout"
import { Input, Submit } from "../components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import emailjs, { init } from "emailjs-com"

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
`
export const Contact = () => {
  const [buttonLabel, setButtonLabel] = useState("Get in Touch")
  const [emailError, setEmailError] = useState("")

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
  })
  const onSubmit = (data, e) => {
    emailjs.sendForm("contact_service", "contact_form", e.target).then(
      (result) => {
        console.log(result.text)
        setButtonLabel("🚘 🚘 🚘")
      },
      (error) => {
        console.log(error.text)
        setButtonLabel("Oops!")
        setEmailError(data.comments)
      }
    )
  }

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
              <Submit value={buttonLabel} fontWeight="bold" />
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
        </div>
      </Layout>
    </ContactWrapper>
  )
}
