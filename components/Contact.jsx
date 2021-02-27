import styled from "@emotion/styled"
import { Layout } from "./Layout"
import { Input, Submit } from "../components"
import { useForm } from "react-hook-form"

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
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <ContactWrapper id="contact">
      <Layout>
        <h1>Contact</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="name-fields">
              <Input
                type="text"
                fieldName="first-name"
                placeholder="first name"
                formRef={register({ required: true })}
              />
              {errors["first-name"] && <span>This field is required</span>}
              <Input
                type="text"
                fieldName="last-name"
                placeholder="last name"
                formRef={register}
              />
            </div>
            <Input
              type="email"
              fieldName="email"
              placeholder="email address"
              formRef={register}
            />
            <Input
              textArea
              fieldName="comments"
              placeholder="tell us how we can help..."
              formRef={register}
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
