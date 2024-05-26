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
          backgroundImg="https://res.cloudinary.com/dfztelw7e/image/upload/v1716719247/model-y_hb7nok.jpg"
          rightBtnText="Existing Inventory"
          leftBtnText="Custom Order"
        />

        <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImg="https://res.cloudinary.com/dfztelw7e/image/upload/v1716719255/mod-3_nrqqum.jpg"
          rightBtnText="Existing Inventory"
          leftBtnText="Custom Order"
        />

        <Section
          title="Model X"
          description="Tight Lines, Futuristic Design"
          backgroundImg="https://res.cloudinary.com/dfztelw7e/image/upload/v1716719249/model-x_sqownw.jpg"
          rightBtnText="Existing Inventory"
          leftBtnText="Custom Order"
        />

        <Section
          title="Model S"
          description="Luxurious comfort, spacious interiors"
          backgroundImg="https://res.cloudinary.com/dfztelw7e/image/upload/v1716719247/mod-s_j2l1fh.jpg"
          rightBtnText="Existing Inventory"
          leftBtnText="Custom Order"
        />

        <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundImg="https://res.cloudinary.com/dfztelw7e/image/upload/v1716719247/solar-panel_n1l8mc.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />

        <Section
          title="Solar for new roofs"
          description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg="https://res.cloudinary.com/dfztelw7e/image/upload/v1716719247/solar-roof_y8lsbd.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />

        <Section
          title="Accessories"
          description=""
          backgroundImg="https://res.cloudinary.com/dfztelw7e/image/upload/v1716719250/accessories_san8h7.jpg"
          leftBtnText="Shop now"
        />
      </Container>
    </div>
  );
};

export default Home;

const Container = styled.div`
  height: 100dvh;
  overflow: scroll;
  scroll-snap-type: y mandatory;
`;
