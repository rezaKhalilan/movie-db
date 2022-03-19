import Styled from "styled-components";

export const Card = Styled.div`
  background-color: ${({ theme }) => theme.colors.lightDark};
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  width: 80%;
  margin: 1rem auto;
  color:  ${({ theme }) => theme.colors.white};

h5{
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  color:  ${({ theme }) => theme.colors.dark};}

  img {
      width: 100%;
      border-radius: 6px;
  }
`;
