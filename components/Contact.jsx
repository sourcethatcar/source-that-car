import styled from "@emotion/styled"
import { Layout } from "./Layout"
import { Input } from "./Input"

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
`
export const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <Layout>
        <h1>Contact</h1>
        <div className="form-container">
          <form>
            <div className="name-fields">
              <Input
                type="text"
                fieldName="first-name"
                placeholder="first name"
              />
              <Input
                type="text"
                fieldName="last-name"
                placeholder="last name"
              />
            </div>
            <Input type="email" fieldName="email" placeholder="email address" />
            <Input
              textArea
              fieldName="comments"
              placeholder="tell us how we can help..."
            />
          </form>
        </div>
      </Layout>
    </ContactWrapper>
  )
}
