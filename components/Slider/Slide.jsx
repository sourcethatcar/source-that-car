import styled from "@emotion/styled"
import PropTypes from "prop-types"

export const SlideWrapper = styled.li`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  left: ${({ offset }) => offset}px;

  .card-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    max-width: calc(800px - 1rem);
    margin: 1rem;
    min-height: 305px;
    background-color: var(--colorWhite);
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 1rem 0;
  }

  .slide-text {
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: black;
  }

  .slide-author {
    color: var(--colorYellow);
  }
`
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

export const Slide = ({ content: { profileImg, author, text }, offset }) => {
  return (
    <SlideWrapper offset={offset}>
      <div className="card-container">
        <div className="card">
          <Avatar>
            <img src={profileImg} alt={author} />
          </Avatar>
          <p className="slide-text">{`"${text}"`}</p>
          <h5 className="slide-author">{author}</h5>
        </div>
      </div>
    </SlideWrapper>
  )
}

Slide.propTypes = {
  content: PropTypes.object.isRequired,
  offset: PropTypes.number.isRequired,
}
