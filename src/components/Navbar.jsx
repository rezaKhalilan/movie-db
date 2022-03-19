import { DropdownButton, Dropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { NavbarStyled } from "./styles/NavbarStyled.style";

const Navbar = () => {
  return (
    <NavbarStyled>
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title="Movies"
      >
        <LinkContainer to="/popular">
          <Dropdown.Item>Popular</Dropdown.Item>
        </LinkContainer>
        <LinkContainer to="/top-rated">
          <Dropdown.Item>Top-Rated</Dropdown.Item>
        </LinkContainer>
        <LinkContainer to="/upcoming">
          <Dropdown.Item>Upcoming</Dropdown.Item>
        </LinkContainer>
      </DropdownButton>

      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title="TV"
      >
        <LinkContainer to="/tv-toprated">
          <Dropdown.Item>Top Rated</Dropdown.Item>
        </LinkContainer>
        <LinkContainer to="/tv-popular">
          <Dropdown.Item>Popular</Dropdown.Item>
        </LinkContainer>
        <LinkContainer to="/tv-on-air">
          <Dropdown.Item>On Air</Dropdown.Item>
        </LinkContainer>
      </DropdownButton>
    </NavbarStyled>
  );
};

export default Navbar;
