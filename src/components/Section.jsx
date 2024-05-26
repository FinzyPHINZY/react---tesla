import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import "./Section.css";

const Section = ({
  title,
  backgroundImg,
  description,
  rightBtnText,
  leftBtnText,
}) => {
  return (
    <Wrap bgimage={backgroundImg} className="section">
      <Fade>
        <ItemText>
          <p className="title">{title}</p>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>

            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          <DownArrow src="https://res.cloudinary.com/dfztelw7e/image/upload/v1716719246/down-arrow_pfnvfd.svg" />
        </Fade>
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-size: cover;
  background-image: ${(props) => `url(${props.bgimage})`};
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15dvh;
  text-align: center;
  .title {
    font-size: 48px;
    font-weight: 400;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 250px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  color: #000;
  opacity: 0.65;
  background: #fff;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  text-align: center;
`;
