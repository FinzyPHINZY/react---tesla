import styled from "styled-components";
import Section from "./Section";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Container className="sections">
        <Section
          title="Model Y"
          description="Sleek curves, bold presence"
          backgroundImg="model-y.jpg"
          rightBtnText="Existing Inventory"
          leftBtnText="Custom Order"
        />

        <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImg="mod-3.jpg"
          rightBtnText="Existing Inventory"
          leftBtnText="Custom Order"
        />

        <Section
          title="Model X"
          description="Tight Lines, Futuristic Design"
          backgroundImg="model-x.jpg"
          rightBtnText="Existing Inventory"
          leftBtnText="Custom Order"
        />

        <Section
          title="Model S"
          description="Luxurious comfort, spacious interiors"
          backgroundImg="modell-3.jpg"
          rightBtnText="Existing Inventory"
          leftBtnText="Custom Order"
        />

        <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />

        <Section
          title="Solar for new roofs"
          description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />

        <Section
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="Shop now"
        />
      </Container>
    </div>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  overflow: scroll;
  scroll-snap-type: y mandatory;
`;
