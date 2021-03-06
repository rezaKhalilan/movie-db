import styled from "styled-components";

export const NavbarStyled = styled.nav`
  width: 100%;
  height: 5%;
  padding: 0 10%;
  background: ${({ theme }) => theme.colors.dark};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      margin-left: 8px;
      margin-right: 8px;
    }
  }
`;
