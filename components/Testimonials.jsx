import styled from "@emotion/styled"
import { Layout, Slider } from "../components"

const testimonials = [
  {
    profileImg: "https://i.pravatar.cc/150?img=5",
    text:
      "Everyone at Source That Car have been fantastic. They were able to get the car of my dreams at a really fair price and I wouldn't hesitate recommending them to anyone in need of a car.",
    author: "Bill Murray-Baggins",
  },
  {
    profileImg: "https://i.pravatar.cc/150?img=8",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id inventore deserunt odit officiis porro voluptate eligendi tempora commodi quos consequuntur iste sit quia, voluptatum amet dolores aperiam laborum ut illo!",
    author: "John Goodman",
  },
  {
    profileImg: "https://i.pravatar.cc/150?img=9",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id inventore deserunt odit officiis porro voluptate eligendi tempora commodi quos consequuntur iste sit quia, voluptatum amet dolores aperiam laborum ut illo!",
    author: "Prince Rogers-Nelson",
  },
]

const TestimonialsWrapper = styled.section`
  background-color: var(--colorGrey);
  width: 100vw;
  .testimonials-layout {
    h1 {
      padding-bottom: 2rem;
    }
  }
`
export const Testimonials = () => {
  return (
    <TestimonialsWrapper id="testimonials">
      <Layout className="testimonials-layout">
        <h1>Testimonials</h1>
        <Slider slides={testimonials} />
      </Layout>
    </TestimonialsWrapper>
  )
}
