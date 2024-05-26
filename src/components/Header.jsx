import styled from "styled-components";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a className="logo">
        <img
          src="https://res.cloudinary.com/dfztelw7e/image/upload/v1716719251/logo_ktsuuc.svg"
          alt=""
        />
      </a>

      <Menu>
        <a href="#">Vehicles</a>
        <a href="#">Energy</a>
        <a href="#">Charging</a>
        <a href="#">Discover</a>
        <a href="#">Shop</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>{" "}
        <MenuIcon onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>

        {cars &&
          cars.map((car) => (
            <li>
              <a key={car} href="#">
                {car}
              </a>
            </li>
          ))}
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 500;
    text-transform: capitalize;
    padding: 0 10px;
    flex-wrap: nowrap;
    transition: text-shadow 0.3s ease;
  }

  a:hover {
    color: #2980b9;
    font-size: 1.3rem;
    text-shadow: 0 0 5px #2980b9;
  }

  a:active {
    color: #e67e22;
    text-shadow: 0 0 5px #e67e22;
  }

  @media (max-width: 1124px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
    color: #2c3e50;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const MenuIcon = styled(Bars3Icon)`
  width: 24px;
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  width: 300px;
  z-index: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in;
  li {
    list-style: none;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(XMarkIcon)`
  width: 24px;
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
