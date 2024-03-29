import PropTypes from "prop-types"
import styled from "@emotion/styled"

const CarWrapper = styled.div`
  margin: 2rem 1rem;
  position: relative;
  width: 280px;
  background-color: var(--colorWhite);
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
    cursor: ${(props) => (props.isActive ? "pointer" : "normal")};
  }

  .car-text-area {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .car-price {
    padding-left: 1rem;
  }
  .car-title-area {
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
  }
  .car-chip-container {
    display: flex;
    padding-top: 1rem;
    align-items: center;
    justify-content: space-between;
    & div:last-child {
      margin-right: 0;
    }
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
  font-size: 0.75rem;
  border-radius: 5px;
  background-color: rgb(233, 233, 236);
  color: rgb(69, 68, 68);
  margin-right: 0.5rem;
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
const StatusTag = styled(TypeTag)`
  right: 0;
  bottom: 38%;
  background-color: ${(props) =>
    props.status === "reserved" ? "purple" : "green"};
`

export const Car = ({
  price,
  name,
  mileage,
  reg,
  image,
  status,
  listing,
  type,
}) => {
  const CarCard = () => (
    <CarWrapper className="car-container" isActive={status === "active"}>
      {type && <TypeTag>{type.select.name}</TypeTag>}
      {status !== "active" && <StatusTag status={status}>{status}</StatusTag>}
      {image && <ImageContainer imageUrl={image.url} />}
      <div className="car-text-area">
        <div className="car-title-area">
          {name && <h4 className="car-title">{name.title[0]?.text.content}</h4>}
          {price && <h4 className="car-price">{`£${price.number}`}</h4>}
        </div>
        <div className="car-chip-container">
          {mileage && <Chip>{`${mileage.number} miles`}</Chip>}
          {reg && <Chip>{`${reg.select.name} reg`}</Chip>}
        </div>
      </div>
    </CarWrapper>
  )
  return status !== "active" ? (
    <div style={{ justifySelf: "center" }}>
      <CarCard />
    </div>
  ) : (
    <a href={listing.url} style={{ justifySelf: "center" }}>
      <CarCard />
    </a>
  )
}

Car.propTypes = {
  price: PropTypes.shape({ number: PropTypes.number }).isRequired,
  name: PropTypes.shape({ id: PropTypes.string, title: PropTypes.array })
    .isRequired,
  mileage: PropTypes.shape({ number: PropTypes.number }).isRequired,
  reg: PropTypes.shape({ select: PropTypes.object }).isRequired,
  image: PropTypes.object.isRequired,
  listing: PropTypes.object.isRequired,
  type: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
}
