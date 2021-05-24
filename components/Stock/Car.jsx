import PropTypes from "prop-types"
import styled from "@emotion/styled"

const CarWrapper = styled.div`
  position: relative;
  width: 280px;
  background-color: var(--colorWhite);
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .car-text-area {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .car-title-area {
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
  }
  .car-description {
    font-size: 0.875rem;
    padding: 1rem 1rem;
  }
  .car-chip-container {
    display: flex;
    padding-top: 1rem;
    justify-content: flex-start;
    gap: 0.5rem;
  }
`

const ImageContainer = styled.div`
  height: 180px;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
`

const Chip = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  background-color: rgb(233, 233, 236);
  color: rgb(69, 68, 68);
`

const TypeTag = styled(Chip)`
  position: absolute;
  margin: 0.5rem;
  display: inline;
  font-size: 0.75rem;
  font-weight: bold;
  background-color: var(--colorYellow);
  color: var(--colorWhite);
`

export const Car = ({
  price,
  name,
  mileage,
  reg,
  image,
  description,
  type,
}) => {
  return (
    <CarWrapper className="car-container">
      <TypeTag>{type.select.name}</TypeTag>
      <ImageContainer imageUrl={image.url} />
      <div className="car-text-area">
        <div className="car-title-area">
          <h4 className="car-title">{name.title[0].text.content}</h4>
          <h4 className="car-price">{`£${price.number}`}</h4>
        </div>
        {/* <div className="car-description">
          <p>{description.rich_text[0].text.content}</p>
        </div> */}
        <div className="car-chip-container">
          <Chip>{`${mileage.number} miles`}</Chip>
          <Chip>{`${reg.select.name} reg`}</Chip>
        </div>
      </div>
    </CarWrapper>
  )
}

Car.propTypes = {
  price: PropTypes.shape({ number: PropTypes.number }).isRequired,
  name: PropTypes.shape({ id: PropTypes.string, title: PropTypes.array })
    .isRequired,
  mileage: PropTypes.shape({ number: PropTypes.number }).isRequired,
  reg: PropTypes.shape({ select: PropTypes.object }).isRequired,
  image: PropTypes.object.isRequired,
  description: PropTypes.object,
  type: PropTypes.object.isRequired,
}

Car.defaultProps = {
  description: {},
}
