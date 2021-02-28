import styled from "@emotion/styled"
import { Layout } from "./Layout"
import { Input, Submit } from "../components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

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

  .contactButton {
    background-color: var(--colorBlue);
    border-radius: 5px;

    h3 {
      padding: 0.75rem 1.2rem;
      font-weight: normal;
    }
  }
`
export const Contact = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
  })
  const onSubmit = (data) => console.log(data)
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
              <Submit value="Get in Touch" fontWeight="bold" />
            </div>
          </form>
        </div>
      </Layout>
    </ContactWrapper>
  )
}
