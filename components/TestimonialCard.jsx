import styled from "@emotion/styled"
import PropTypes from "prop-types"

const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 770px;
    min-height: 300px;
    background-color: var(--colorWhite);
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 1rem;
  }
  .testimonial-text {
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  .testimonial-author {
    color: var(--colorYellow);
  }

  @media only screen and (min-width: 640px) {
    .card {
      min-width: 500px;
    }
    .testimonial-text {
      width: 80%;
    }
  }
  @media only screen and (min-width: 992px) {
    .card {
      width: 770px;
    }
  }
`
export const TestimonialCard = ({ children, bg }) => {
  return (
    <CardWrapper>
      <div className="card">
        <Avatar>
          <img src="https://i.pravatar.cc/150" alt="profile-pic" />
        </Avatar>
        <p className="testimonial-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id inventore
          deserunt odit officiis porro voluptate eligendi tempora commodi quos
          consequuntur iste sit quia, voluptatum amet dolores aperiam laborum ut
          illo!
        </p>
        <h5 className="testimonial-author">Bill Murray-Baggins</h5>
      </div>
    </CardWrapper>
  )
}

TestimonialCard.propTypes = {
  children: PropTypes.number,
  bg: PropTypes.string,
}

TestimonialCard.defaultProps = {
  children: null,
  bg: "lightgreen",
}

const Avatar = styled.div`
  border-radius: 100%;
  border: 1px solid var(--colorYellow);
  width: 4rem;
  height: 4rem;
  background-color: lightblue;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`
