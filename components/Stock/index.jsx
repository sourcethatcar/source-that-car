import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Layout } from "../Layout"
import { Car } from "./Car"

const StockWrapper = styled.section`
  background-color: var(--colorGrey);
  .section-title {
    padding: 3rem 0;
  }

  .stock-container {
    padding: 3rem 0;
    display: flex;
    gap: 1rem;
    justify-content: space-evenly;
  }
`

const Stock = ({ stock }) => {
  return (
    <StockWrapper id="stock">
      <Layout>
        <div className="section-title">
          <h1>Our Latest Cars</h1>
          <div className="stock-container">
            {stock.map(({ id, ...restOfProps }) => {
              return <Car key={id} {...restOfProps} />
            })}
          </div>
        </div>
      </Layout>
    </StockWrapper>
  )
}

Stock.propTypes = {
  stock: PropTypes.array.isRequired,
}

export default Stock
